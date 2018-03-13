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
	}

	createCharacterParticles(characterIndex, x, y) {
		noStroke();
		for (var i = 0; i < 35; i++) {
			if (this.numbers[characterIndex][i] === 1) {
				fill(this.textColour);
				ellipse(x + (i % 5) * this.particleGap,
					y + floor(i / 5) * this.particleGap,
					this.particleGap);
			}
		}
	}

	update(hour, minute, second, milli, alarm) {
		var xOffset = this.particleGap+this.characterGap;
		var yOffset = height/2;
		background(0x00);
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
	}
	draw() {
		translate(-0.5, -0.5);
		//background(this.backgroundColour);

		//TODO: particle drawing code here
	}



}
