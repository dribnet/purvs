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
		this.SCREEN_WIDTH = 192;
		this.SCREEN_HEIGHT = 100;

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

	draw() {
		//print(frameRate());
		//background(this.backgroundColour);
		//this.display.background(0x00);
		let d = this.display;

		if (frameCount % 4 != 0) { return; }
		d.noStroke();
		d.noSmooth();

		d.fill((this.currentHour/24*127)+128, random(this.currentSecond/60*255), (this.currentMinute/60*127)+random(128));
		d.ellipse(random(this.SCREEN_WIDTH),
			random(this.SCREEN_HEIGHT),
			(this.currentSecond/60*100));

		d.loadPixels();
		for (let i = 0; i < (this.CANVAS_WIDTH*this.CANVAS_HEIGHT); i += 4) {
			d.pixels[i] *= random(0.4, 1);
			d.pixels[i+1] *= 0.98;
			d.pixels[i+2] *= 0.98;

			d.pixels[i+4] += d.pixels[i]*0.3
		}
		d.updatePixels();


		//render the pixel display to the main canvas
		image(this.display, 0, 0, width,height);

		print(frameRate());

		// //draw the particles
		// for (let i = 0; i < this.particles.length; i++) {
		// 	this.particles[i].draw();
		// }
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