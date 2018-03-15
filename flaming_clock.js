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
		this.backgroundColour  = color(0x44);


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

	update(hour, minute, second, milli, alarm) {
		let xOffset = this.particleGap + this.characterGap;
		let yOffset = height / 2;

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

	draw(hour, minute, second, milli, alarm) {
		background(this.backgroundColour);

		//draw the character outlines before drawing the particle outlines:
		this.drawTimeOutlines(hour, minute, second, milli, alarm);

		//draw the particle outlines
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].drawOutline();
		}

		//draw the character interiors before drawing the particle interiors:
		this.drawTimeInteriors(hour, minute, second, milli, alarm);

		//draw the particle interiors
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].drawFill();
		}
	}

	createCharacterParticles(characterIndex, x, y) {
		noStroke();
		for (let i = 0; i < 35; i++) {
			if (this.numbers[characterIndex][i] === 1 && random(1) < 0.125) {
				this.particles.push(new Particle(x + (i % 5) * this.particleGap, y + floor(i / 5) * this.particleGap + random(7.5), true));
			}
		}
	}

	drawTimeOutlines(hour, minute, second, milli, alarm) {
		let xOffset = this.particleGap + this.characterGap;
		let yOffset = height / 2;

		//hours
		this.drawCharacterOutline(floor(hour / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterOutline(hour % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.drawCharacterOutline(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//minutes
		this.drawCharacterOutline(floor(minute / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterOutline(minute % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.drawCharacterOutline(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//seconds
		this.drawCharacterOutline(floor(second / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterOutline(second % 10, xOffset, yOffset);
	}

	drawTimeInteriors(hour, minute, second, milli, alarm) {
		let xOffset = this.particleGap + this.characterGap;
		let yOffset = height / 2;

		//hours
		this.drawCharacterBody(floor(hour / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterBody(hour % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.drawCharacterBody(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//minutes
		this.drawCharacterBody(floor(minute / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterBody(minute % 10, xOffset, yOffset);
		xOffset += this.characterGap;
		//:
		this.drawCharacterBody(10, xOffset, yOffset);
		xOffset += this.characterGap;
		//seconds
		this.drawCharacterBody(floor(second / 10), xOffset, yOffset);
		xOffset += this.characterGap;
		this.drawCharacterBody(second % 10, xOffset, yOffset);
	}

	drawCharacterOutline(characterIndex, x, y) {
		noStroke();
		for (let i = 0; i < 35; i++) {
			if (this.numbers[characterIndex][i] === 1) {
				fill(0xDD);
				ellipse(x + (i % 5) * this.particleGap,
					y + floor(i / 5) * this.particleGap,
					35);
			}
		}
	}

	drawCharacterBody(characterIndex, x, y) {
		for (let i = 0; i < 35; i++) {
			if (this.numbers[characterIndex][i] === 1) {
				fill(0x11);
				ellipse(x + (i % 5) * this.particleGap,
					y + floor(i / 5) * this.particleGap,
					25);
			}
		}
	}

}

class Particle {
	constructor(x, y, filled) {
		this.loc = createVector(x, y);
		this.vel = createVector(random(-1,1), -1);
		this.life = 45;
		this.outlineWeight = 5;
		this.filled = filled
	}
	update() {
		this.loc.add(this.vel);
		this.vel.mult(0.99);
		this.vel.add(0, -0.015 - 0.1*noise(this.loc.x*0.2, this.loc.y*0.2)*(this.life/45)); //particles floating away
		this.vel.add((noise(this.loc.x*0.1,this.loc.y*0.1)-0.5)*0.35, 0); //left and right sway
		this.life -= 1;
	}
	drawOutline() {
		fill(0xDD);
		ellipse(this.loc.x,this.loc.y, 40*(this.life/45));
	}
	drawFill() {
		fill(0x11);
		ellipse(this.loc.x,this.loc.y, max(0, 40*(this.life/45)-this.outlineWeight*2));
	}
}