class FlamingClock {
	//    time.hours goes from 0-23
	//    time.minutes goes from 0-59
	//    time.seconds goes from 0-59
	//    time.millis goes from 0-1000
	//    time.seconds_until_alarm is:
	//        < 0 if no alarm is set
	//        = 0 if the alarm is currently going off
	//        > 0 --> the number of seconds until alarm should go off

	constructor() {
		// helper variables
		this.particleGap = width/60;
		this.characterGap = width/10;
		this.textColour = color(0xFF, 0x00, 0xFF);
		this.backgroundColour  = color(0x30);


		//values for the clock digits, 0-9 and :
		this.numbers = [
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				0, 0, 0, 1, 0,
				0, 0, 1, 1, 0,
				0, 0, 0, 1, 0,
				0, 0, 0, 1, 0,
				0, 0, 0, 1, 0,
				0, 0, 0, 1, 0,
				0, 0, 0, 1, 0
			],
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				0, 0, 0, 0, 1,
				0, 0, 0, 1, 0,
				0, 0, 1, 0, 0,
				0, 1, 0, 0, 0,
				1, 1, 1, 1, 1
			],
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				0, 0, 0, 0, 1,
				0, 0, 1, 1, 0,
				0, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				0, 0, 0, 1, 0,
				0, 0, 1, 1, 0,
				0, 1, 0, 1, 0,
				1, 0, 0, 1, 0,
				1, 1, 1, 1, 1,
				0, 0, 0, 1, 0,
				0, 0, 0, 1, 0
			],
			[
				1, 1, 1, 1, 1,
				1, 0, 0, 0, 0,
				1, 1, 1, 1, 0,
				0, 0, 0, 0, 1,
				0, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 0,
				1, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				1, 1, 1, 1, 1,
				0, 0, 0, 0, 1,
				0, 0, 0, 0, 1,
				0, 0, 0, 1, 0,
				0, 0, 1, 0, 0,
				0, 1, 0, 0, 0,
				1, 0, 0, 0, 0
			],
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				0, 1, 1, 1, 0,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				1, 0, 0, 0, 1,
				0, 1, 1, 1, 1,
				0, 0, 0, 0, 1,
				0, 1, 1, 1, 0
			],
			[
				0, 0, 0, 0, 0,
				0, 0, 1, 0, 0,
				0, 0, 0, 0, 0,
				0, 0, 0, 0, 0,
				0, 0, 0, 0, 0,
				0, 0, 1, 0, 0,
				0, 0, 0, 0, 0
			]
		];

		//array to hold the active particles
		this.particles = [];
	}

	createCharacterParticles(characterIndex, x, y) {
		noStroke();
		for (let i = 0; i < 35; i++) {
			if (this.numbers[characterIndex][i] === 1) {
				this.particles.push(new Particle(x + (i % 5) * this.particleGap, y + floor(i / 5) * this.particleGap, true));
				// fill(this.textColour);
				// ellipse(x + (i % 5) * this.particleGap,
				// 	y + floor(i / 5) * this.particleGap,
				// 	this.particleGap);
			}
		}
	}

	update(hour, minute, second, milli, alarm) {
		let xOffset = this.particleGap + this.characterGap;
		let yOffset = height / 2;
		background(0x00);

		//create the new particles:
		//hours
		this.createCharacterParticles(floor(hour / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.createCharacterParticles(hour % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.createCharacterParticles(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//minutes
		this.createCharacterParticles(floor(minute / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.createCharacterParticles(minute % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.createCharacterParticles(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//seconds
		this.createCharacterParticles(floor(second / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.createCharacterParticles(second % 10, xOffset, yOffset);

		//update particles
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
		}

		//remove dead particles (any particle with life <= 0)
		this.particles = this.particles.filter(particle => particle.life > 0);
	}

	draw() {
		//background();

		//draw the particle outlines
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].drawOutline();
		}

		//draw the particle interiors
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].drawFill();
		}
	}

}

class Particle {
	constructor(x, y, filled) {
		this.loc = createVector(x, y);
		this.vel = createVector(random(-1,1), -1);
		this.life = 30;
		this.outlineWeight = 5;
		this.filled = filled
	}
	update() {
		this.loc.add(this.vel);
		this.life--;
	}
	drawOutline() {
		fill(0x00);
		ellipse(this.loc.x,this.loc.y, 30*(this.life/30));
	}
	drawFill() {
		fill(0xFF, 0x00, 0x00);
		ellipse(this.loc.x,this.loc.y, max(0, 30*(this.life/30)-this.outlineWeight*2));
	}
}