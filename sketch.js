var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
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

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value_W, mouth_value_H,eyebrows,eyebrowsAngle) {
	push();
	rectMode(CENTER);
	translate(x, y);


	var extent = 0;
	if (h < w) {
		extent = h / 2;
	} else {
		extent = w / 2;
	}
	var scale = extent / 240.0;

	stroke(stroke_color3);
	fill(fg_color2);
	
	//face
	for(var i = -220; i < 0; i += 20)
		rect(0, i * scale ,(300 + i/2 + width_value) * scale, 15 * scale);
	for(var i = 0; i < 220; i += 20)
		rect(0, i * scale ,(300 - i/2 + width_value) * scale, 15 * scale);
	
	//eyes
	fill(0);
	var eyeDistance = map(width_value,0,100,20,80);
	ellipse(eyeDistance* scale,-30* scale,eye_value* scale,eye_value* scale);
	ellipse( - eyeDistance* scale,-30* scale,eye_value* scale,eye_value* scale);
	
	//eyebrows
	rotate(eyebrowsAngle);
	rect(eyeDistance* scale,-eyebrows* scale,eyeDistance* scale,15* scale);
	rotate(-eyebrowsAngle*2);
	rect( - eyeDistance* scale,-eyebrows* scale,eyeDistance* scale,15* scale);
	rotate(eyebrowsAngle);
	
	//mouth
	ellipse(0,100* scale,mouth_value_W* scale, mouth_value_H* scale);
	pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color3);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face
  /*fill(bg_color1);

  var height_value = focusedRandom(-20, 20);
		var mouth_value = focusedRandom(-10, 10);
		var eye_value = focusedRandom(-25, 25);
		var hair_value = focusedRandom(0, 6);
		var eyeNumber_value = int(focusedRandom(1, 2.9));

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      height_value = focusedRandom(-20, 20);
	  mouth_value = focusedRandom(-10, 10);
	  eye_value = focusedRandom(-25, 25);
	  hair_value = focusedRandom(0, 6);
	  eyeNumber_value = int(focusedRandom(1, 2.9));
      drawFace1(x, y, w, h, height_value, eye_value, mouth_value, hair_value, eyeNumber_value);
    }
  }*/
	
  // draw 3rd face
  fill(bg_color3);

		var width_value =focusedRandom(0, 100);
		var mouth_value_W = focusedRandom( 30, 100);
	    var mouth_value_H = focusedRandom( 0, 50);
		var eye_value = focusedRandom (10, 40);
		var eyebrows = focusedRandom(70, 130);
	    var eyebrowsAngle = focusedRandom(-15, 15);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      width_value = focusedRandom(0, 100);
	  mouth_value_W = focusedRandom( 30, 100);
	  mouth_value_H = focusedRandom( 20, 50);
		
	  eye_value = focusedRandom (10, 40);
	  eyebrows = focusedRandom(70, 130);
	  eyebrowsAngle = focusedRandom(-15, 15);
      drawFace3(x, y, w, h, width_value, eye_value, mouth_value_W, mouth_value_H,eyebrows,eyebrowsAngle);
    }
  }
   
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}