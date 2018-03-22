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
			0x39, 0x58, 0x00,
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
			//river
			0x21, 0x10, 0x10,
			0x5A, 0x94, 0x00,
			0xC6, 0xD6, 0xF7,
			0xFF, 0xFF, 0xFF
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
		//TerrainLine(palette, shade, thickness, x1, y1, startHeight, endHeight);
		let v = createVector(42, 0,);
		for (let i = 0; i < 30; i++) {
			let dangle = floor(random(4));
			this.terrain.push(new TerrainLine(1,  1, 5, v.x, v.y, dangle-3, 2, true, false));
			if (random(1) < 0.25) {
				this.terrain.push(new TerrainLine(1, 1, floor(random(6,11))*2, v.x*0.75, v.y*0.75, 4, floor(random(1,16)), true, true));
			}
			v.rotate(TAU/30);
		}
		for (let i = 0; i < 40; i++) {
			this.terrain.push(new TerrainLine(5, 3, 6, -40 + 2*i, floor(random(-5,5)-sin(i/40*TAU)*10), -1, 1, false, false));
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
				x.push(2);
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
			this.terrain[i].rotatedPos.set(this.terrain[i].pos).rotate((this.currentSecond*1000+this.currentMilli)/60000 * TAU);
		}
		//order terrain components for drawing
		function terrainDepth(terrainA, terrainB) {
			return terrainA.rotatedPos.y < terrainB.rotatedPos.y ? -1 : terrainA.rotatedPos.y === terrainB.rotatedPos.y ? 0 : 1;
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
			bg.fill(lerpColor(color(0x5A-0x5A * this.darkenToMidnight(), 0x8C-0x8C * this.darkenToMidnight(), 0xD6-0xD6 * this.darkenToMidnight()),
				color(0xC6 - 0xC6 * this.darkenToMidnight(), 0xD6- 0xD6* this.darkenToMidnight(), 0xF7-0xF7* this.darkenToMidnight()*0.5),
				i/60));
			bg.rect(0,i, this.SCREEN_WIDTH, 8);
		}

		//water
		if (frameCount % 15 === 0) {
			bg.fill(0x88, 0x88, 0xFF - 0x7f * this.darkenToMidnight());
			let distance = random(36);
			bg.rect(random(this.SCREEN_WIDTH),
				64 + distance,
				10 + (20 * (distance / 36)),
				1);
		}


		//foreground drawing

		//terrain outline
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			if (!t.drawOutline) { continue; }
			fg.stroke(0x00);
			fg.strokeWeight(t.thickness+1.25);
			fg.line(floor(t.rotatedPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedPos.y/3+this.SCREEN_HEIGHT/2 - t.startHeight),
				floor(t.rotatedPos.x+this.SCREEN_WIDTH/2), floor(t.rotatedPos.y/3+this.SCREEN_HEIGHT/2 - (t.startHeight+t.endHeight)));
		}
		//terrain ellipse
		fg.fill(0x00);
		fg.noStroke();
		fg.ellipse(this.SCREEN_WIDTH/2, this.SCREEN_HEIGHT/2, 92, 32);

		fg.fill(0x5A, 0x94, 0x00);
		fg.ellipse(this.SCREEN_WIDTH/2, this.SCREEN_HEIGHT/2, 90, 30);

		//terrain interior
		for (let i = 0, l = this.terrain.length; i < l; i++) {
			let t = this.terrain[i];
			let startX = floor(t.rotatedPos.x+this.SCREEN_WIDTH/2);
			let startY = floor(t.rotatedPos.y/3+this.SCREEN_HEIGHT/2 - t.startHeight);
			let endX = floor(t.rotatedPos.x+this.SCREEN_WIDTH/2);
			let endY = floor(t.rotatedPos.y/3+this.SCREEN_HEIGHT/2 - (t.startHeight+t.endHeight));
			if (t.drawHighlight) {
				fg.strokeWeight(t.thickness-1);
				fg.stroke(0x00);
				fg.line(startX, startY-1, endX, endY-1);
				fg.stroke(0xFF);
				fg.line(startX, startY-1, endX, endY);
			}
			fg.strokeWeight(t.thickness);
			fg.stroke(t.shade*0x55);
			fg.line(startX, startY, endX, endY+(t.drawHighlight ? 2 : 0));

			for (let vert = 0, length = startY-endY+6; vert < length; vert+= 1) {
				for (let left = -t.thickness/2, right = t.thickness/2; left < right; left+=4)
				this.tilePalettes[floor((startX+left)/8)][floor((startY - length*(vert/length))/8)] = t.palette;
			}
		}

		//begin faux-shader
		bg.loadPixels();
		fg.loadPixels();

		//ocean effect
		if (frameCount % 2 === 0) {
			for (let i = 49152; i < 76800; i += 4) { //49152 = 64 pixels from the top
				let v = random(0.075, 1);
				bg.pixels[i] *= v;  //r
				bg.pixels[i + 1] *= v;  //g
				//next pixel to the right:
				bg.pixels[i + 4] += bg.pixels[i] * 0.85;    //r
				bg.pixels[i + 5] += bg.pixels[i + 1] * 0.85;    //g

				//blue component tinting with time
				bg.pixels[i + 2] = 0xFF - 0x7F * this.darkenToMidnight();
			}

		}

		//foreground palette swapping
		for (let x = 0; x < 24; x ++) { //192 pixels across, 8 pixels per tile, 24 tiles
			for (let y = 0; y < 13; y++) { //64 pixels down, 8 pixels per tile, 8 tiles
				let tileAddress = x * 8 * 4 + y * 192 * 8 * 4;
				let tilePal = this.alarmState !== 0 ? this.tilePalettes[x][y] : floor(frameCount/15)%4;
				let pal = this.paletteColours;
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						let pixelAddress = tileAddress + i * 4 + j * 192 * 4;
						let p = fg.pixels[pixelAddress];
						//kill the alpha
						fg.pixels[pixelAddress+3] = (fg.pixels[pixelAddress+3] > 127 ? 255 : 0);
						if (p < 0x55) { //'black'
							fg.pixels[pixelAddress] =    pal[tilePal*12] - pal[tilePal*12] * this.darkenToMidnight() * 0.7;
							fg.pixels[pixelAddress+1] =  pal[tilePal*12+1] - pal[tilePal*12+1] * this.darkenToMidnight() * 0.7;
							fg.pixels[pixelAddress+2] =  pal[tilePal*12+2] - pal[tilePal*12+2] * this.darkenToMidnight() * 0.2;
						} else if (p < 0xAA) {
							fg.pixels[pixelAddress] =    pal[tilePal*12+3] - pal[tilePal*12+3] * this.darkenToMidnight() * 0.6;
							fg.pixels[pixelAddress+1] =  pal[tilePal*12+4] - pal[tilePal*12+4] * this.darkenToMidnight() * 0.7;
							fg.pixels[pixelAddress+2] =  pal[tilePal*12+5] - pal[tilePal*12+5] * this.darkenToMidnight() * 0.2;
						} else if (p < 0xFF) {
							fg.pixels[pixelAddress] =    pal[tilePal*12+6] - pal[tilePal*12+6] * this.darkenToMidnight() * 0.4;
							fg.pixels[pixelAddress+1] =  pal[tilePal*12+7] - pal[tilePal*12+7] * this.darkenToMidnight() * 0.5;
							fg.pixels[pixelAddress+2] =  pal[tilePal*12+8] - pal[tilePal*12+8] * this.darkenToMidnight() * 0.1;
						} else {
							fg.pixels[pixelAddress] =    pal[tilePal*12+9] -  pal[tilePal*12+9] * this.darkenToMidnight() * 0.5;
							fg.pixels[pixelAddress+1] =  pal[tilePal*12+10] - pal[tilePal*12+10] * this.darkenToMidnight() * 0.5;
							fg.pixels[pixelAddress+2] =  pal[tilePal*12+11] - pal[tilePal*12+11] * this.darkenToMidnight() * 0.1;
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
		//text("FPS: "+round(frameRate()), 10, 20);
	}

	darkenToMidnight() {
		return abs((this.currentHour - 12)) / 12;
	}



}

class TerrainLine {
	constructor(palette, shade, thickness, x, y, startHeight, endHeight, drawOutline, drawHighlight) {
		this.pos = createVector(x, y);
		this.startHeight = startHeight;
		this.endHeight = endHeight;
		this.thickness = thickness;
		this.palette = palette;
		this.shade = shade;
		this.drawOutline = drawOutline;
		this.drawHighlight = drawHighlight;

		this.rotatedPos = this.pos.copy();
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