var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

function setup() {
	// create the drawing canvas, save the canvas element
	var main_canvas = createCanvas(canvasWidth, canvasHeight);
	main_canvas.parent('canvasContainer');

	// create sliders
	slider1 = createSlider(0, 100, 50);
	slider2 = createSlider(0, 100, 50);
	slider3 = createSlider(0, 100, 50);
	slider4 = createSlider(0, 100, 50);
	slider5 = createSlider(0, 100, 50);

	slider1.parent('slider1Container');
	slider2.parent('slider2Container');
	slider3.parent('slider3Container');
	slider4.parent('slider4Container');
	slider5.parent('slider5Container');

	faceSelector = createSelect();
	faceSelector.option('1');
	faceSelector.option('2');
	faceSelector.option('3');
	faceSelector.option('all')
	faceSelector.value('all');
	faceSelector.parent('selector1Container');

	// rotation in degrees
	angleMode(DEGREES);

}

// global variables for colors
var bg_color1 = [140,190,255];
var bg_color2 = [47, 59, 64];
var bg_color3 = [50, 50, 50];

var fg_color1 = "#FFE271";
var fg_color2 = "#ffffff";

var stroke_color3 = [0, 0, 0];
var fg_jeans = "#3C5A7F";

function drawFace1(x, y, w, h, height_value, eye_value, mouth_value, hair_value, eyeNumber_value) {
	push();
	rectMode(CENTER);
	translate(x, y);
	//rotate(tilt_value);

	var extent = 0;
	if (h < w) {
		extent = h / 2;
	} else {
		extent = w / 2;
	}
	var scale = extent / 220.0;

	fill(fg_color1);
	noStroke();
	//ellipse(0, 0, 300 * scale, 400 * scale);
	ellipse(0, (-100 - height_value / 2) * scale, 250 * scale, (150 + height_value) * scale);
	fill(fg_jeans);
	ellipse(0, (140 + height_value / 2) * scale, 250 * scale, (150 + height_value) * scale);
	rect(0, (95 + height_value / 2) * scale, 250 * scale, (90 + height_value) * scale);
	fill(fg_color1);
	rect(0, (-25 - height_value / 2) * scale, 250 * scale, (160 + height_value) * scale);

	// draw eye
	fill(0);
	rect(0, -80 * scale, 250 * scale, 30 * scale);

	if (eyeNumber_value == 1) {
		fill("#BDBDBD");
		ellipse(0, -80 * scale, 100 * scale, 100 * scale);
		fill("#919191");
		ellipse(0, -80 * scale, 90 * scale, 90 * scale);
		fill(255);
		ellipse(0, -80 * scale, 80 * scale, 80 * scale);

		fill(0);
		ellipse(eye_value * scale, -80 * scale, 30 * scale, 30 * scale);
		fill("#7D4A1B");
		ellipse(eye_value * scale, -80 * scale, 25 * scale, 25 * scale);
		fill(0);
		ellipse(eye_value * scale, -80 * scale, 15 * scale, 15 * scale);
		fill(255);
		ellipse((10 + eye_value) * scale, -80 * scale, 5 * scale, 5 * scale);
	}
	else{
		fill("#BDBDBD");
		ellipse(-50* scale, -80 * scale, 100 * scale, 100 * scale);
		ellipse(50* scale, -80 * scale, 100 * scale, 100 * scale);
		
		fill("#919191");
		ellipse(-50* scale, -80 * scale, 90 * scale, 90 * scale);
		ellipse(50* scale, -80 * scale, 90 * scale, 90 * scale);
		fill(255);
		arc(-50* scale, -80 * scale, 80 * scale, 80 * scale, 0, 180);
		arc(50* scale, -80 * scale, 80 * scale, 80 * scale, 0, 180);

		fill(0);
		ellipse(((eye_value-50)* scale), -80 * scale, 30 * scale, 30 * scale);
		ellipse(((eye_value+50)* scale), -80 * scale, 30 * scale, 30 * scale);
		
		fill("#7D4A1B");
		ellipse(((eye_value-50)* scale), -80 * scale, 25 * scale, 25 * scale);
		ellipse(((eye_value+50)* scale), -80 * scale, 25 * scale, 25 * scale);
		fill(0);
		ellipse(((eye_value-50)* scale), -80 * scale, 15 * scale, 15 * scale);
		ellipse(((eye_value+50)* scale), -80 * scale, 15 * scale, 15 * scale);
		fill(255);
		ellipse((-40 + eye_value) * scale, -80 * scale, 5 * scale, 5 * scale);
		ellipse((60 + eye_value) * scale, -80 * scale, 5 * scale, 5 * scale);

		fill(fg_color1);
		arc(-50* scale, -80 * scale, 80 * scale, 80 * scale, 180, 0);
		arc(50* scale, -80 * scale, 80 * scale, 80 * scale, 180, 0);
	}

	// mouth-hole with background color
	fill(0);
	ellipse(0, 10 * scale, 80 * scale, 40 * scale);
	fill(fg_color1);
	ellipse(mouth_value * scale, 3 * scale, 90 * scale, 40 * scale);

	//pocket
	noFill();
	stroke(0);
	rect(0, 100 * scale, 100 * scale, 40 * scale);
	fill(fg_jeans);
	arc(0, 120 * scale, 100 * scale, 80 * scale, 0, 180);
	noStroke();

	// hair
	fill(0);

	rotate(-34);
	for (var i = 0; i < 4; i++) {
		rotate(4);
		rect(0, (-190-height_value) * scale, hair_value * scale, 30 * scale);
	}

	rotate(52);
	for (var i = 0; i < 4; i++) {
		rotate(-4);
		rect(0, (-190-height_value) * scale, hair_value * scale, 30 * scale);
	}
	pop();
}

function drawFace2(x, y, w, h, redTop_value, eye_value, mouth_value,color_value) {
	push();
	rectMode(CENTER);
	translate(x, y);

	var extent = 0;
	if (h < w) {
		extent = h / 2;
	} else {
		extent = w / 2;
	}
	var scale = extent / 220.0;
	scale*= 1.8;
	var darkColor = color(0,0,0);
	var color3 = color(31,143,255);
	var fillColor = lerpColor(color3,darkColor,color_value);
    //face
	stroke(stroke_color3);
	fill(fillColor);
	triangle(-90* scale,-120* scale,-50* scale,-50* scale,-30* scale,-80* scale);
	triangle(90* scale,-120* scale,50* scale,-50* scale,30* scale,-80* scale);
	fill("#ec1010");
	triangle(0,redTop_value* scale,-20* scale,-50* scale,20* scale,-50* scale);
	fill(fillColor);
	arc(0,0,140* scale,180* scale,180,0);
	fill("#f4a478");
	arc(0,0,120* scale,200* scale,0,180);
	fill(fillColor);
	noStroke();
	triangle(0,20* scale,-10* scale,0,10* scale,0);
	
	//eyes
	stroke(stroke_color3);
	fill("#ffc227");
	rotate(-50);
	ellipse(10* scale,-40* scale,eye_value* scale,(eye_value+20)* scale);
	rotate(100);
	ellipse(-10* scale,-40* scale,eye_value* scale,(eye_value+20)* scale);
	rotate(-50);
	
	//mouth
	fill("#762d41");
	arc(0,40* scale,40* scale,mouth_value* scale,0,180);
	
	pop();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value,eyebrows) {
	push();
	rectMode(CENTER);
	translate(x, y);


	var extent = 0;
	if (h < w) {
		extent = h / 2;
	} else {
		extent = w / 2;
	}
	var scale = extent / 220.0;

	stroke(stroke_color3);
	fill(fg_color2);
	
	//face
	for(var i = -220; i < 0; i += 20)
		rect(0, i * scale ,(300 + i/2 + width_value) * scale, 15 * scale);
	for(var i = 0; i < 220; i += 20)
		rect(0, i * scale ,(300 - i/2 + width_value) * scale, 15 * scale);
	
	//eyes
	fill(0);
	ellipse(width_value* scale,-30* scale,eye_value* scale,eye_value* scale);
	ellipse( - width_value* scale,-30* scale,eye_value* scale,eye_value* scale);
	
	rect(width_value* scale,-eyebrows* scale,eye_value*3* scale,eye_value* scale);
	rect( - width_value* scale,-eyebrows* scale,eye_value*3* scale,eye_value* scale);
	//mouth
	
	ellipse(0,100* scale,mouth_value* scale,mouth_value* scale);
	
	
	pop();
}

function draw() {
	noStroke();

	var mode = faceSelector.value();

	if (mode != 'all') {
		if (mode == '1') {
			background(bg_color1);
		} else if (mode == '2') {
			background(bg_color2);
		} else if (mode == '3') {
			background(bg_color3);
		}
	}

	var s1 = slider1.value();
	var s2 = slider2.value();
	var s3 = slider3.value();
	var s4 = slider4.value();
	var s5 = slider5.value();

	// use same size / y_pos for all faces
	var face_w = canvasWidth / 4;
	var face_h = face_w;
	var face_y = height / 2;
	var face_x = width / 2;

	if (mode == '1' || mode == 'all') {
		// draw 1st face
		fill(bg_color1);
		rect(0, 0, width / 3, height);
		var height_value = map(s1, 0, 100, -20, 20);
		var mouth_value = map(s3, 0, 100, -10, 10);
		var eye_value = map(s2, 0, 100, -25, 25);
		var hair_value = map(s4, 0, 100, 0, 6);
		var eyeNumber_value = Math.floor(map(s5, 0, 100, 1, 2.9));
		if (mode == 'all') {
			face_x = width / 6;
		}
		drawFace1(face_x, face_y, face_w, face_h, height_value, eye_value, mouth_value, hair_value, eyeNumber_value);
	}

	if (mode == '2' || mode == 'all') {
		// draw 2nd face
		fill(bg_color2);
		rect(width / 3, 0, 2 * width / 3, height);
		var redTop_value = map(s1, 0, 100, -150, -90);
		var mouth_value = map(s3, 0, 100, 10, 90);
		var eye_value = map(s2, 0, 100, 25, 35);
		var color_value = map(s4, 0, 100, 0, 1);
		if (mode == 'all') {
			face_x = 3 * width / 6;
		}
		drawFace2(face_x, face_y, face_w, face_h, redTop_value, eye_value, mouth_value,color_value);
	}

	if (mode == '3' || mode == 'all') {
		// draw 3nd face
		fill(bg_color3);
		rect(2 * width / 3, 0, width, height);
		var width_value = map(s1, 0, 100, 0, 100);
		var mouth_value = map(s3, 0, 100, 0, 100);
		var eye_value = map(s2, 0, 100, 10, 40);
		var eyebrows = map(s4, 0, 100, 70, 130);
		if (mode == 'all') {
			face_x = 5 * width / 6;
		}
		drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value,eyebrows);
	}
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	} else if (key == '@') {
		saveBlocksImages(true);
	}
}
