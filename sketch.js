var inMapMode = false;
var seed = 0.0;

function setup() {
	createCanvas(960, 500);
	this.generate();
}

function draw() {
	if (mouseIsPressed) {
		seed += 1;
		noiseSeed(seed);
		this.generate();
	}
}

//The white lines are generated randomly
function generate() {
	if (inMapMode) {
		fill(0);
		rect(0, 0, 960, 500);
		push();
		translate(25, 25);
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 11; j++) {
				stroke(255);
				strokeWeight(3);
				if (random(5) < 1) {
					line(50 * i, 50 * j, 50 + 50 * i, 50 * j);
				}
				if (random(5) < 1) {
					line(50 * i, 50 * j, 50 + 50 * i, 50 + 50 * j);
				}
				if (random(5) < 1) {
					line(50 * i, 50 * j, 50 * i, 50 + 50 * j);
				}
				if (random(5) < 1) {
					line(50 * i, 50 * j, 50 + 50 * i, -50 + 50 * j);
				}
				noStroke();
				if (j % 2 == 1 && i % 2 == 1) {
					fill(255, 255, 255);
				} else if (i % 2 == 1) {
					fill(255, 80, 40);
				} else if (j % 2 == 1) {
					fill(40, 255, 80);
				} else {
					fill(255, 255, 40);
				}
				this.shape(50 * i, 50 * j, 25);
			}
		}
		pop();
	} else {
		fill(0);
		rect(0, 0, 960, 500);
		noStroke();
		for (var i = 0; i < 35; i++) {
			for (var j = 0; j < 20; j++) {
				var distance = 30;
				var posX = distance * i + random(-distance/2, distance/2);
				var posY = distance * j + random(-distance/2, distance/2);
				var noiseVal = noise(posX / 100, posY / 100);
				var size = noiseVal * 35;
				this.setColor(noiseVal);
				ellipse(posX, posY, size, size);
			}
		}
	}
}

function setColor(v) {
	if (v < 0.5) {
		color1 = color(0, 0, 100);
		color2 = color(100, 100, 220);
		c = lerpColor(color1, color2, v * 2);
		fill(c);
	} else if (v < 0.7) {
		fill(0, 128, 0);
	} else if (v < 0.8) {
		fill(128, 128, 128);
	} else {
        fill(255);
	}
}

function shape(posX, posY, size) {
	ellipse(posX, posY, size, size);
	fill(0);
	ellipse(posX, posY, size / 2, size / 2);
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	} else if (key == ' ') {
		inMapMode = !inMapMode;
		this.generate();
	}
}
