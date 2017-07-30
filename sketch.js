var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;

function setup() {
	// create the drawing canvas, save the canvas element
	var main_canvas = createCanvas(canvasWidth, canvasHeight);
	main_canvas.parent('canvasContainer');

	curRandomSeed = int(focusedRandom(0, 100));
	// rotation in degrees
	angleMode(DEGREES);
}

function changeRandomSeed() {
	curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color3 = [50, 50, 50];
var fg_color2 = "#ffffff";

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value_W, mouth_value_H, eyebrowsHeight, eyebrowsAngle, hasNose) {
	push();
	rectMode(CENTER);
	translate(x, y);

	var extent = 0;
	h < w ? extent = h / 2 : extent = w / 2;
	var scale = extent / 240.0;
	noStroke();
	fill(fg_color2);

	//face
	for (var i = -220; i < 0; i += 20)
		rect(0, i * scale, (300 + i / 2 + width_value) * scale, 15 * scale);
	for (var i = 0; i < 220; i += 20)
		rect(0, i * scale, (300 - i / 2 + width_value) * scale, 15 * scale);

	//eyes
	//adjust the distance between eyes according to the width of face
	var eyeDistance = map(width_value, 0, 100, 20, 80);
	fill(0);
	ellipse(eyeDistance * scale, -30 * scale, eye_value * scale, eye_value * scale);
	ellipse(-eyeDistance * scale, -30 * scale, eye_value * scale, eye_value * scale);

	//eyebrows
	fill(0);
	rotate(eyebrowsAngle);
	rect(eyeDistance * scale, -eyebrowsHeight * scale, eyeDistance * scale, 15 * scale);
	rotate(-eyebrowsAngle * 2);
	rect(-eyeDistance * scale, -eyebrowsHeight * scale, eyeDistance * scale, 15 * scale);
	rotate(eyebrowsAngle);

	//mouth
	ellipse(0, 100 * scale, mouth_value_W * scale, mouth_value_H * scale);
	
	//nose
	if(hasNose) triangle(0, 0,-5,13,5,13);
	pop();
}

var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
	curRandomSeed = curRandomSeed + 1;
	lastSwapTime = millis();
}

function mouseClicked() {
	changeRandomSeed();
}

function draw() {
	if (millis() > lastSwapTime + millisPerSwap)
		changeRandomSeed();

	resetFocusedRandom(curRandomSeed);
	noStroke();
	background(bg_color3);

	// draw 3rd face
	fill(bg_color3);
	var hasNose = true;

	var width_value = focusedRandom(0, 100, 4, 50);
	var mouth_value_W = focusedRandom(30, 100, 3, 50);
	var mouth_value_H = focusedRandom(0, 50, 4, 50);
	var eye_value = focusedRandom(20, 40, 5, 70);
	var eyebrowsHeight = focusedRandom(70, 130,3,50);
	var eyebrowsAngle = focusedRandom(-15, 15, 3, 50);

	var w = canvasWidth / 7;
	var h = canvasHeight / 4;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 7; j++) {
			var y = h / 2 + h * i;
			var x = w / 2 + w * j;
			//20% of them don't have noses
			random(0,1) < 0.2 ? hasNose = false: hasNose = true;
			width_value = focusedRandom(0, 100, 4, 50);
			mouth_value_W = focusedRandom(30, 100, 3, 50);
			mouth_value_H = focusedRandom(20, 50, 4, 50);
			eye_value = focusedRandom(20, 40, 5, 70);
			eyebrowsHeight = focusedRandom(70, 130,3,50);
			eyebrowsAngle = focusedRandom(-15, 15, 3, 50);
			drawFace3(x, y, w, h, width_value, eye_value, mouth_value_W, mouth_value_H, eyebrowsHeight, eyebrowsAngle,hasNose);
		}
	}
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	} else if (key == '@') {
		saveBlocksImages(true);
	}
}
