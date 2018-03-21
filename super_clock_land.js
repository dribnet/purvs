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
		this.terrain.push(new TerrainLine(1, 2, 3, -10, 0, 1, 10, 0, 1));
		this.terrain.push(new TerrainLine(1, 2, 3, 0, -10, 1, 0, 10, 1));
		let v = createVector(45, 0, 0);
		for (let i = 0; i < 60; i++) {
			this.terrain.push(new TerrainLine(1, floor(random(3) + 1), 5, v.x, v.y, v.z, v.x, v.y, v.z + 4));

				let offset = floor(random(20));
				this.terrain.push(new TerrainLine(floor(random(5)), floor(random(3) + 1), 5, v.x * 1.5, v.y * 1.5, -4+offset, v.x * 1.5, v.y * 1.5, offset));

			v.rotate(TAU/60);
		}

		//array to hold the active particles
		this.particles = [];

		//lowfi canvas
		this.background = createGraphics(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
		this.background.pixelDensity(1);
		this.background.background(0x00);
		this.background.noSmooth();
		this.foreground = createGraphics(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
		this.foreground.pixelDensity(1);
		this.foreground.background(0x00);
		this.foreground.noSmooth();

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
			for (let j = 0; j < 13; j++) {
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
		let d = this.background;
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
		let bg = this.background;
		let fg = this.foreground;
		bg.noStroke();
		fg.noStroke();
		fg.clear();

		//background drawing

		//sky
		for (let i = 0; i < 64; i+=8) {
			//bg.fill(0x55 + 0xAA*(i/60));
			bg.fill(lerpColor(color(0x5A, 0x8C, 0xD6), color(0xC6, 0xD6, 0xF7),i/60));
			//bg.fill(0xFF);
			bg.rect(0,i, this.SCREEN_WIDTH, 8);
		}

		//water
		bg.fill(0x88, 0x88, 0xFF);
		for (let i = 0; i < 1; i++) {
			let distance = random(36);
			bg.rect(random(this.SCREEN_WIDTH),
				64 + distance,
				10 + (20 * (distance/36)),
				1);
		}


		//foreground drawing

		//terrain outline
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			fg.stroke(0x00);
			fg.strokeWeight(t.thickness+2);
			fg.line(floor(t.rotatedStartPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedStartPos.y/3+this.SCREEN_HEIGHT/2 - t.rotatedStartPos.z),
				floor(t.rotatedEndPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedEndPos.y/3+this.SCREEN_HEIGHT/2 - t.rotatedEndPos.z));
		}
		//terrain interior
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			fg.stroke(t.shade*0x55);
			fg.strokeWeight(t.thickness);
			let startX = floor(t.rotatedStartPos.x+this.SCREEN_WIDTH/2);
			let startY = floor(t.rotatedStartPos.y/3+this.SCREEN_HEIGHT/2 - t.rotatedStartPos.z);
			let endX = floor(t.rotatedEndPos.x+this.SCREEN_WIDTH/2);
			let endY = floor(t.rotatedEndPos.y/3+this.SCREEN_HEIGHT/2 - t.rotatedEndPos.z);
			fg.line(startX, startY, endX, endY);
			this.tilePalettes[floor(startX/8)][floor(startY/8)] = t.palette;
			this.tilePalettes[floor(endX/8)][floor(endY/8)] = t.palette;
		}

		//begin faux-shader
		bg.loadPixels();
		fg.loadPixels();

		//ocean effect
		for (let i = 49152; i < 76800; i += 4) { //49152 = 64 pixels from the top
			let v = random(0.075, 1); // was 0.4 ... 1 to go with bleed effect's 0.4
			bg.pixels[i] *= v;
			bg.pixels[i + 1] *= v;
			//d.pixels[i+2] *= 1.05;

			bg.pixels[i + 4] += bg.pixels[i] * 0.85; //values were 0.4 to go with v = (0.4 ... 1)
			bg.pixels[i + 5] += bg.pixels[i + 1] * 0.85;
		}
		//foreground palette swapping
		for (let x = 0; x < 24; x ++) { //192 pixels across, 8 pixels per tile, 24 tiles
			for (let y = 0; y < 13; y++) { //64 pixels down, 8 pixels per tile, 8 tiles
				let tileAddress = x * 8 * 4 + y * 192 * 8 * 4;
				let tilePal = this.alarmState !== 0 ? this.tilePalettes[x][y] : floor(frameCount/15)%4;
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						let pixelAddress = tileAddress + i * 4 + j * 192 * 4;
						let p = fg.pixels[pixelAddress];
						//kill the alpha
						fg.pixels[pixelAddress+3] = (fg.pixels[pixelAddress+3] > 0 ? 255 : 0);
						if (p < 0x55) { //'black'
							fg.pixels[pixelAddress] =    (this.paletteColours[tilePal*12]);
							fg.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+1]);
							fg.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+2]);
						} else if (p < 0xAA) {
							fg.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+3]);
							fg.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+4]);
							fg.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+5]);
						} else if (p < 0xFF) {
							fg.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+6]);
							fg.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+7]);
							fg.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+8]);
						} else {
							fg.pixels[pixelAddress] =    (this.paletteColours[tilePal*12+9]);
							fg.pixels[pixelAddress+1] =  (this.paletteColours[tilePal*12+10]);
							fg.pixels[pixelAddress+2] =  (this.paletteColours[tilePal*12+11]);
						}
					}
				}
			}
		}

		bg.updatePixels();
		fg.updatePixels();


		//render the pixel background to the main canvas
		image(bg, 0, 0, width,height);
		image(fg, 0, 0, width,height);


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