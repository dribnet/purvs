class SuperClockLand {
	//    time.hours goes from 0-23
	//    time.minutes goes from 0-59
	//    time.seconds goes from 0-59
	//    time.millis goes from 0-1000
	//    time.seconds_until_alarm is:
	//        < 0 if no alarm is set
	//        = 0 if the alarm is currently going off
	//        > 0 --> the number of seconds until alarm should go off

	constructor() {
		//print(pixelDensity());
		//print(displayDensity());

		//pixelDensity(1);    //this fixes values on the second canvas being waaay off on hiDPI screens.
		noSmooth();

		//helper variables
		this.CANVAS_WIDTH = 960;
		this.CANVAS_HEIGHT = 500;
		//gameboy is 160x144 but the closest common divisor that gets a similar pixel count for 960x500 is 5
		this.SCREEN_WIDTH = 192; //24 colour regions across (8x8)
		this.SCREEN_HEIGHT = 100; //12.5 colour regions down

		// colour variables
		this.backgroundColour = color(0x44);

		//values to get at the time with
		this.currentHour    = 0;
		this.currentMinute  = 0;
		this.currentSecond  = 0;
		this.currentMilli   = 0;
		this.alarmState     = -1;

		//array to hold the active particles
		this.particles = [];

		//lowfi canvas
		this.display = createGraphics(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
		this.display.pixelDensity(1);
		this.display.background(0x00);

		this.initialDraw();
	}

	update(hour, minute, second, milli, alarm) {
		this.currentHour = hour;
		this.currentMinute = minute;
		this.currentSecond = second;
		this.currentMilli = milli;
		this.alarmState = alarm;


		//update particles
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
		}

		//remove dead particles (any particle with life <= 0)
		this.particles = this.particles.filter(particle => particle.life > 0);
	}

	//TODO: break the ocean shimmer drawing into a function

	initialDraw() {
		let d = this.display;
		d.background(0x55, 0x55, 0xFF);
		d.noStroke();
		d.fill(0x00,0x00,0xFF);
		d.rect(0,64,this.SCREEN_WIDTH,36);

		d.fill(0xAA, 0xAA, 0xFF);
		for (let i = 0; i < 50; i++) {
			let distance = random(36);
			d.rect(random(this.SCREEN_WIDTH),
				64 + distance,
				10 + (20 * (distance/36)),
				1);
		}

	}

	draw() {
		//print(frameRate());
		//background(this.backgroundColour);
		//this.display.background(0x00);
		let d = this.display;

		//if (frameCount % 4 != 0) { return; }
		d.noStroke();
		d.noSmooth();

		//background gradient
		for (let i = 0; i < 64; i++) {
			d.fill(0x55 + 0x55*(i/60), 0x55 + 0x55*(i/60), 0xFF);
			d.rect(0,i, this.SCREEN_WIDTH, 1);
		}

		//landmass
		d.fill(0x55);
		d.rect(this.SCREEN_WIDTH/2-50, this.SCREEN_HEIGHT/2-10, 100, 17);
		d.fill(0xBB);
		d.ellipse(this.SCREEN_WIDTH/2, this.SCREEN_HEIGHT/2-10, 100, 15);


		//water nonsense
		d.fill(0x88, 0x88, 0xFF);
		for (let i = 0; i < 1; i++) {
			let distance = random(36);
			d.rect(random(this.SCREEN_WIDTH),
				64 + distance,
				10 + (20 * (distance/36)),
				1);
		}

		d.loadPixels();

		for (let x = 0; x < 24; x ++) { //192 pixels across, 8 pixels per tile, 24 tiles
			for (let y = 0; y < 8; y++) { //64 pixels down, 8 pixels per tile, 8 tiles
				let tileAddress = x * 8 * 4 + y * 192 * 8 * 4;
				// d.pixels[tileAddress] *= 0.75;
				// d.pixels[1 + tileAddress] *= 0.75;
				// d.pixels[2 + tileAddress] *= 0.75;
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						let pixelAddress = tileAddress + i * 4 + j * 192 * 4;
						d.pixels[pixelAddress] = floor(d.pixels[pixelAddress]/(x+y+1)) * (x+y+1);
						d.pixels[pixelAddress+1] = floor(d.pixels[pixelAddress+1]/(x+y+1)) * (x+y+1);
						d.pixels[pixelAddress+2] = floor(d.pixels[pixelAddress+2]/(x+y+1)) * (x+y+1);
					}
				}
			}
		}
		for (let i = 49152; i < 76800; i += 4) { //49152 = 64 pixels from the top
			let v = random(0.075, 1); // was 0.4 ... 1 to go with bleed effect's 0.4
			d.pixels[i] *= v;
			d.pixels[i + 1] *= v;
			//d.pixels[i+2] *= 1.05;

			d.pixels[i + 4] += d.pixels[i] * 0.85; //values were 0.4 to go with v = (0.4 ... 1)
			d.pixels[i + 5] += d.pixels[i + 1] * 0.85;
		}

		d.updatePixels();


		//render the pixel display to the main canvas
		image(this.display, 0, 0, width,height);


		//draw the particles
		// for (let i = 0; i < this.particles.length; i++) {
		// 	this.particles[i].draw();
		// }
		text("FPS: "+round(frameRate()), 10, 20);

	}



}

class Particle {
	constructor(x, y, filled) {
		this.loc = createVector(x, y);
		this.vel = createVector(random(-1, 1), -1);
		this.life = 45;
		this.outlineWeight = 5;
		this.filled = filled
	}

	update() {
		this.loc.add(this.vel);
		this.vel.mult(0.99);
		this.vel.add(0, -0.015 - 0.1 * noise(this.loc.x * 0.2, this.loc.y * 0.2) * (this.life / 45)); //particles floating away
		this.vel.add((noise(this.loc.x * 0.1, this.loc.y * 0.1) - 0.5) * 0.35, 0); //left and right sway
		this.life -= 1;
	}

	draw() {
		fill(0xDD);
		ellipse(this.loc.x, this.loc.y, 40 * (this.life / 45));
	}
}