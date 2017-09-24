var inMapMode = true;
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

function generate() {
	if (!inMapMode) {
		fill(30);
		rect(0, 0, 960, 500);
		push();
		translate(25, 25);
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 11; j++) {
				stroke(255);
				strokeWeight(2);
				line(50 * i, 50 * j, 50 + 50 * i, 50 + 50 * j);
				line(50 * i, 50 * j, 50 + 50 * i, -50 + 50 * j);

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
		fill(10,10,40);
		rect(0, 0, 960, 500);
		noStroke();
		for (var i = 0; i < 35; i++) {
			for (var j = 0; j < 20; j++) {
				var distance = 40;
				var posX = distance * i + random(-distance / 2, distance / 2);
				var posY = distance * j + random(-distance / 2, distance / 2);
				var noiseVal = noise(posX / 100, posY / 100);
				this.drawLanscape(noiseVal, posX, posY);
			}
		}
	}
}

function drawLanscape(v, posX, posY) {
	var size = v * 15;
	if (v < 0.4) {
	} else if (v < .5) { //clouds
		fill(10, 10, random(10, 40), 100);
		ellipse(posX + random(-20, 20), posY + random(-10, 10), size * random(20,40), size * random(20,40));

	} else if (v < 0.6) {
		color1 = color(0, 0, 30);
		color2 = color(255, 255, 150);
		c = lerpColor(color1, color2, map(v, 0.5, 0.6, 0, 1));
		fill(c);
		var bokehSize = size * map(v, 0.5, 0.6, 1, .2);
		ellipse(posX, posY, bokehSize, bokehSize);

	} else if (v < 0.7) { //stars
		fill(255, 255, 150);
		ellipse(posX, posY, size / 6, size);
		ellipse(posX, posY, size, size / 6);

	} else if (v < .8) {

	} else if (v < .9) {
		var meteorLengthX, meteorLengthY;
		random(0, 1) < .5 ? meteorLengthX = -random(size, size * 1.5) / 2 : meteorLengthX = random(size, size * 1.5) / 2;
		random(0, 1) < .5 ? meteorLengthY = -random(size, size * 1.5) / 2 : meteorLengthY = random(size, size * 1.5) / 2;
		stroke(255, 255, 180);
		strokeWeight(2);
		line(posX - meteorLengthX, posY - meteorLengthY, posX + meteorLengthX, posY + meteorLengthY);
		noStroke();
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
