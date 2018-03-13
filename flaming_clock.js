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
		let particleGap = width / 20;
		this.textColour = color(0xFF, 0xFF, 0x00);
		this.backgroundColour  = color(0x30);;

		this.values = obj;

		//values for the clock digits, 0-9 and :
		let numbers = [
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
			if (numbers[characterIndex][i] === 1) {
				fill(textColour);
				rect(x + (i % 5) * particleGap, (yOffset + floor(i / 5)) * particleGap, particleGap, particleGap);
			}
		}
	}

	update(hour, minute, second, milli, alarm) {
		var xOffset = 9;
		var yOffset = 12;
		//hours
		createCharacterParticles(floor(hour / 10), xOffset, yOffset);
		xOffset += 6;
		createCharacterParticles(time.hour % 10, xOffset, yOffset);
		xOffset += 6;
		//:
		createCharacterParticles(10, xOffset, yOffset);
		xOffset += 6;
		//minutes
		createCharacterParticles(floor(minute / 10), xOffset, yOffset);
		xOffset += 6;
		createCharacterParticles(minute % 10, xOffset, yOffset);
		xOffset += 6;
		//:
		createCharacterParticles(10, xOffset, yOffset);
		xOffset += 6;
		//seconds
		createCharacterParticles(floor(second / 10), xOffset, yOffset);
		xOffset += 6;
		createCharacterParticles(second % 10, xOffset, yOffset);
	}
	draw() {
		translate(-0.5, -0.5);
		background(backgroundColour);

		//TODO: particle drawing code here
	}



}
