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
		noSmooth();

		//helper variables
		this.CANVAS_WIDTH = 960;
		this.CANVAS_HEIGHT = 500;
		//gameboy is 160x144 but the closest common divisor that gets a similar pixel density for 960x500 is 5
		this.SCREEN_WIDTH = 192; //24 8x8 colour regions across
		this.SCREEN_HEIGHT = 100; //12.5 8x8 colour regions down

		// colour variables
		this.paletteColours = [
		   //red
			0x21, 0x10, 0x10,
			0xFF, 0x4A, 0x5A,
			0xFF, 0xAD, 0xB5,
			0xFF, 0xFF, 0xFF,
		   //green
			0x21, 0x10, 0x10,
			0x5A, 0x94, 0x00,
			0xCE, 0xE7, 0x7B,
			0xFF, 0xFF, 0xFF,
		   //blue
			0x21, 0x10, 0x10,
			0x5A, 0x8C, 0xD6,
			0xC6, 0xD6, 0xF7,
			0xFF, 0xFF, 0xFF,
			//yellow
			0x21, 0x10, 0x10,
			0xDE, 0x94, 0x52,
			0xFF, 0xE7, 0x42,
			0xFF, 0xFF, 0xFF,
			//grey
			0x21, 0x10, 0x10,
			0xAD, 0x94, 0x94,
			0xDE, 0xBD, 0xBD,
			0xFF, 0xFF, 0xFF,
			//colours graciously donated by the Super Game Boy mode for Kirby's Dream Land 2 (1995). Thanks Kirby.
		];

		//values to get at the time with
		this.currentHour    = 0;
		this.currentMinute  = 0;
		this.currentSecond  = 0;
		this.currentMilli   = 0;
		this.alarmState     = -1;

		//array to hold the terrain pieces
		this.terrain = [];

		//the scene itself
		//TerrainLine(palette, shade, thickness, startX, startY, startHeight, endX, endY, endHeight);
		this.terrain.push(new TerrainLine(1, 3, 3, -7, 0, 1, 7, 0, 1));
		this.terrain.push(new TerrainLine(1, 3, 3, 0, -7, 1, 0, 7, 1));
		let v = createVector(45, 0, 0);
		for (let i = 0; i < 30; i++) {
			this.terrain.push(new TerrainLine(floor(random(5)), floor(random(3) + 1), 3, v.x, v.y, v.z, v.x, v.y, v.z + 3));
			if (i % 3 == 0) {
				this.terrain.push(new TerrainLine(floor(random(5)), floor(random(3) + 1), 4, v.x * 1.5, v.y * 1.5, -4, v.x * 1.5, v.y * 1.5, 4));
			}
			v.rotate(TAU/30);
		}

		//array to hold the active particles
		this.particles = [];

		//lowfi canvas
		this.display = createGraphics(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
		this.display.pixelDensity(1);
		this.display.background(0x00);

		this.tilePalettes = [];
		for (let i = 0; i < 24; i++) {
			let x = [];
			for (let j = 0; j < 8; j++) {
				x.push(0);
			}
			this.tilePalettes.push(x);
		}

		this.initialDraw();
	}

	update(hour, minute, second, milli, alarm) {
		this.currentHour = hour;
		this.currentMinute = minute;
		this.currentSecond = second;
		this.currentMilli = milli;
		this.alarmState = alarm;

		//zero out the tile palette arrays
		this.tilePalettes = [];
		for (let i = 0; i < 24; i++) {
			let x = [];
			for (let j = 0; j < 8; j++) {
				x.push(2);
			}
			this.tilePalettes.push(x);
		}
		//set terrain component positions
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			this.terrain[i].rotatedStartPos.set(this.terrain[i].startPos).rotate((this.currentSecond*1000+this.currentMilli)/60000 * TAU);
			this.terrain[i].rotatedEndPos.set(this.terrain[i].endPos).rotate((this.currentSecond*1000+this.currentMilli)/60000 * TAU);
		}
		//order terrain components for drawing
		function terrainDepth(terrainA, terrainB) {
			return terrainA.rotatedStartPos.y < terrainB.rotatedStartPos.y ? -1 : terrainA.rotatedStartPos.y === terrainB.rotatedStartPos.y ? 0 : 1;
		}
		this.terrain.sort(terrainDepth);



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
		let d = this.display;
		d.noStroke();
		d.noSmooth();

		//background gradient
		for (let i = 0; i < 64; i++) {
			//d.fill(0x55 + 0xAA*(i/60));
			d.fill(0x55);
			d.rect(0,i, this.SCREEN_WIDTH, 1);
		}

		//landmass placeholder
		// d.fill(0x00);
		// d.rect(this.SCREEN_WIDTH/2-51, this.SCREEN_HEIGHT/2-11, 102, 19);
		// d.ellipse(this.SCREEN_WIDTH/2, this.SCREEN_HEIGHT/2-10, 100, 17);
		//
		// d.fill(0x55);
		// d.rect(this.SCREEN_WIDTH/2-50, this.SCREEN_HEIGHT/2-10, 100, 17);
		//
		// d.fill(0xBB);
		// d.ellipse(this.SCREEN_WIDTH/2, this.SCREEN_HEIGHT/2-10, 100, 15);

		//terrain drawing
		//terrain outline drawing
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			d.stroke(0x00);
			d.strokeWeight(t.thickness+1.5);
			d.line(floor(t.rotatedStartPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedStartPos.y/3+this.SCREEN_HEIGHT/3 - t.rotatedStartPos.z),
				floor(t.rotatedEndPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedEndPos.y/3+this.SCREEN_HEIGHT/3 - t.rotatedEndPos.z));
		}
		//terrain interior drawing
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			d.stroke(t.shade*0x55);
			d.strokeWeight(t.thickness);
			let startX = floor(t.rotatedStartPos.x+this.SCREEN_WIDTH/2);
			let startY = floor(t.rotatedStartPos.y/3+this.SCREEN_HEIGHT/3 - t.rotatedStartPos.z);
			let endX = floor(t.rotatedEndPos.x+this.SCREEN_WIDTH/2);
			let endY = floor(t.rotatedEndPos.y/3+this.SCREEN_HEIGHT/3 - t.rotatedEndPos.z);
			d.line(startX, startY, endX, endY);
			this.tilePalettes[floor(startX/8)][floor(startY/8)] = t.palette;
			this.tilePalettes[floor(endX/8)][floor(endY/8)] = t.palette;
		}
		d.noStroke();


		//placeholder moving ellipse
		// let eX = floor(this.SCREEN_WIDTH/2 + sin(frameCount/120*TAU)*this.SCREEN_WIDTH/4);
		// let eY = floor(this.SCREEN_HEIGHT/2 + (cos(this.currentMilli/1000*TAU)-1)*15 + 3);
		// d.fill(0x00);
		// d.ellipse(eX, eY, 22);
		// d.fill(0xFF);
		// d.ellipse(eX, eY, 20);
		// d.fill(0xEE);
		// d.ellipse(eX+1, eY+1, 17);
		//
		// eX = floor(eX/8);
		// eY = floor(eY/8);
		//
		// for (let i = -1; i <= 1; i++) {
		// 	for (let j = -1; j <= 1; j++) {
		// 		this.tilePalettes[eX+i][eY+j] = floor(frameCount/5)%5;
		// 	}
		// }

		//water nonsense
		d.fill(0x88, 0x88, 0xFF);
		for (let i = 0; i < 1; i++) {
			let distance = random(36);
			d.rect(random(this.SCREEN_WIDTH),
				64 + distance,
				10 + (20 * (distance/36)),
				1);
		}

		//begin faux-shader
		d.loadPixels();

		//ocean effect
		for (let i = 49152; i < 76800; i += 4) { //49152 = 64 pixels from the top
			let v = random(0.075, 1); // was 0.4 ... 1 to go with bleed effect's 0.4
			d.pixels[i] *= v;
			d.pixels[i + 1] *= v;
			//d.pixels[i+2] *= 1.05;

			d.pixels[i + 4] += d.pixels[i] * 0.85; //values were 0.4 to go with v = (0.4 ... 1)
			d.pixels[i + 5] += d.pixels[i + 1] * 0.85;
		}
		//palette swapping
		for (let x = 0; x < 24; x ++) { //192 pixels across, 8 pixels per tile, 24 tiles
			for (let y = 0; y < 8; y++) { //64 pixels down, 8 pixels per tile, 8 tiles
				let tileAddress = x * 8 * 4 + y * 192 * 8 * 4;
				let tilePal = this.alarmState !== 0 ? this.tilePalettes[x][y] : floor(frameCount/15)%4;
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						let pixelAddress = tileAddress + i * 4 + j * 192 * 4;
						let p = d.pixels[pixelAddress];
						if (p < 0x55) { //'black'
							d.pixels[pixelAddress] =    (this.paletteColours[tilePal*12]);
							d.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+1]);
							d.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+2]);
						} else if (p < 0xAA) {
							d.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+3]);
							d.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+4]);
							d.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+5]);
						} else if (p < 0xFF) {
							d.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+6]);
							d.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+7]);
							d.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+8]);
						} else {
							d.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+9]);
							d.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+10]);
							d.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+11]);
						}
					}
				}
			}
		}

		d.updatePixels();


		//render the pixel display to the main canvas
		image(this.display, 0, 0, width,height);


		//draw the particles
		// for (let i = 0; i < this.particles.length; i++) {
		// 	this.particles[i].draw();
		// }

		fill(0);
		stroke(0xFF);
		text("FPS: "+round(frameRate()), 10, 20);

	}



}

class TerrainLine {
	constructor(palette, shade, thickness, x1, y1, height1, x2, y2, height2) {
		this.startPos = createVector(x1, y1, height1);
		this.endPos = createVector(x2, y2, height2);
		this.thickness = thickness;
		this.palette = palette;
		this.shade = shade;

		this.rotatedStartPos = this.startPos.copy();
		this.rotatedEndPos = this.endPos.copy();
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