var canvasWidth = 960;
var canvasHeight = 500;
var radio, slider1, slider2, slider3, slider4;
var faceSelector;

// global variables for colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [238, 238, 238];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];

var stroke_color1 = [95, 52, 8];

var randomHue = [];
var randomSaturation = [];
var randomBrightness = [];
var randomLength = [];

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create radio
  radio = createRadio();
  radio.option(1);
  radio.option(2);
  radio.option(3);
  radio.option(4);
  radio.value(3);
  radio.parent('radio1Container');

  // create sliders
  slider1 = createSlider(0, 100, 35);
  slider2 = createSlider(0, 100, 0);
  slider3 = createSlider(0, 100, 80);
  slider4 = createSlider(0, 100, 20);
  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
  
  //setup arrays required for random saturation and brightness values used in the monster face
  for(var i=0; i<1440; i++){
	randomHue[i] = random(0, 360);
	randomSaturation[i] = random(25, 75);
	randomBrightness[i] = random(50, 100);
	randomLength[i] = random(0, 250);
 }

  // rotation in degrees
  angleMode(DEGREES);
}

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
  push();
  translate(x, y);
  rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  fill(fg_color1);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color1);
    ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color1);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color1);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color1);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function drawMonsterFace(x, y, shape, hue, eye_value, mouth_value, scale) {
  push();
  translate(x-107, y);
  colorMode(HSB);
  
  for(var i=0; i<1440; i++){
	//create a random fill colour
	if(i % 5 == 0){
		fill(randomHue[i], randomSaturation[i], randomBrightness[i]);
	}
	else {
		fill(hue, randomSaturation[i], randomBrightness[i]);
	}
	push();
	translate(112, 10);
	var degree = map(i, 0, 720, 0, 360);
	rotate(i);
	if(shape == 1){
		var j = 0;
		while(j < (randomLength[i] * scale)) {
		  rect(j, j % 4, 2, 2);
		  j++;
		}
		//rect(randomLength[i] * scale, 0, 15, 15, 5, 5, 5, 5);
	}
	else if(shape == 2){
		ellipse(randomLength[i] * scale, 0, 15, 15);
	}
	else if(shape == 3){
		rect(0, 0, randomLength[i] * scale, 2);
	}
	else if(shape == 4){
		triangle(randomLength[i] * scale - 10, 15, randomLength[i] * scale, 0, randomLength[i] * scale + 10, 15);
	}
	pop();	
 }
  
  pop();
}

function drawRobotFace(x, y, face_height, hue, num_antennas, face_shape, mouth_style, eye_distance, scale) {
  push();
  rectMode(CENTER);
  translate(x, y);
  colorMode(HSB);
  
  stroke(hue, 50, 90);
  fill(hue, 90, 50);
  
  //antenna
  var yVariation = ((300 + face_height) * scale) /2;
  var xVariation = (300 * scale) /2;
  if(num_antennas == 1 || num_antennas == 3){
	  triangle(-20, -20, 0, -50 - yVariation, 20, -20);
	  ellipse(0, 10 - yVariation, 40, 40);
	  ellipse(0, -50 - yVariation, 15, 15);
  }
  if(num_antennas == 2 || num_antennas == 4){
	triangle(-10, -10, -70, -45 - yVariation, 10, -10);
	ellipse(-70, -45 - yVariation, 10, 10);
	triangle(-10, -10, 70, -45 - yVariation, 10, -10);
	ellipse(70, -45 - yVariation, 10, 10);
  }
  if(num_antennas == 3 || num_antennas == 4){
	//left antenna
	stroke(hue, 90, 50);
	fill(hue, 50, 90);
	strokeWeight(0);
	rect(-xVariation, -40, 130, 5);
	noFill();
	strokeWeight(4);
	ellipse(-xVariation - 40, -40, 12, 50);
	ellipse(-xVariation - 60, -40, 8, 30);
	
	//right antenna
	stroke(hue, 90, 50);
	fill(hue, 50, 90);
	strokeWeight(0);
	rect(xVariation, -40, 130, 5, 20, 20);
	noFill();
	strokeWeight(4);
	ellipse(xVariation + 40, -40, 12, 50);
	ellipse(xVariation + 60, -40, 8, 30);
  }
  
  stroke(hue, 50, 90);
  strokeWeight(1);
  fill(hue, 90, 50);
	  
  //head
  var bottomCorners = face_shape - 50;
  bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
  if(face_shape <= 100) {
	rect(0, 0, 300 * scale, (300 + face_height) * scale, face_shape, face_shape, bottomCorners, bottomCorners);
  }
  else {
	bottomCorners = bottomCorners - ((face_shape - 100) * 2);
	bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
	if(face_shape >= 150){
		quad(xVariation - 5, yVariation*0.25, xVariation  + ((face_shape - 150) / 10), yVariation*0.25, xVariation + (face_shape - 150), yVariation - 5, xVariation - 5, yVariation - 5); 
		quad(-xVariation - 1, yVariation*0.25, -xVariation - 1 - ((face_shape - 150) / 10), yVariation*0.25, -xVariation - (face_shape - 150), yVariation - 5, -xVariation + 1, yVariation - 5); 
	}
	rect(0, 0, 300 * scale, (300 + face_height) * scale, face_shape, face_shape, bottomCorners, bottomCorners);
  }
 
  
  
  
  //eyes 
  var i=40;
  var fillObj = {
	40: [0, 0, 100],
	16: [0, 0, 0],
	8: [hue, 50, 90]
  }
  var xPos=(25 + eye_distance), yPos=-40;
  //eyes holder
  rect(0, yPos, 110 + (eye_distance*2), 60, 45, 45, 45, 45);
  fill(0);
  rect(0, yPos, 100 + (eye_distance*2), 50, 45, 45, 45, 45);
  stroke(0);
  
  while(i>=8){
	if(i == 40 || i == 16){
		fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
		//left eye
		ellipse(-xPos, yPos, i, i);
		//right_eye
		ellipse(xPos, yPos, i, i);
	}
	if(i == 8){
		fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
		//left eye
		rect(-xPos, yPos, i, i);
		//right_eye
		rect(xPos, yPos, i, i);
	}
	i=i-8;
  }

  // mouth
  noFill();
  stroke(hue, 30, 90);
  strokeWeight(2);
  var i=40, j=50; 
  if(mouth_style <= 20){
	i=35, j=55; 
  }
  while(i<=j){
	line(-mouth_style, i, mouth_style, i);
	if(mouth_style < 30){
		line(-50, i, -35, i);
		line(50, i, 35, i);
	}
	if(mouth_style < 20){
		line(-30, i, -mouth_style - 5, i);
		line(30, i, mouth_style + 5, i);
	}
	i = i + 5;
  }

  colorMode(RGB);
  rectMode(CORNER);
  pop();
}

/* JSON Object to the define the four possible color schemes for the bear face */
var bearColorSchemes = {
    1: {
        'stroke' : '#080303',
        'face' : '#080303',
        'outer-eyes' : '#ffffff',
        'inner-eyes' : '#080303',
        'mouth' : '#ffffff',
        'outer-ear' : '#080303',
        'inner-ear' : '#ffffff',
        'nose' : '#080303',
        'cheeks' : '#f11a1d',
    },
    2: {
        'stroke' : '#553624',
        'face' : '#c78314',
        'outer-eyes' : '#553624',
        'inner-eyes' : '#553624',
        'mouth' : '#ffffff',
        'outer-ear' : '#c78314',
        'inner-ear' : '#fed104',
        'nose' : '#553624',
        'cheeks' : '#c78314',
    },
    3: {
        'stroke' : '#020202',
        'face' : '#926a2d',
        'outer-eyes' : '#ffffff',
        'inner-eyes' : '#020202',
        'mouth' : '#f9d98d',
        'outer-ear' : '#926a2d',
        'inner-ear' : '#020202',
        'nose' : '#020202',
        'cheeks' : '#f9d98d',
    },
    4: {
        'stroke' : '#0d0908',
        'face' : '#faa610',
        'outer-eyes' : '#0d0908',
        'inner-eyes' : '#ffffff',
        'mouth' : '#f8df8f',
        'outer-ear' : '#faa610',
        'inner-ear' : '#0d0908',
        'nose' : '#ac0316',
        'cheeks' : '#faa610',
    }
}

function drawBearFace(x, y, color_scheme, face_size, mouth_size, eye_x, eye_y, eye_size, inner_ear_x, inner_ear_y, scale) {
  push();
  translate(x, y);

  stroke(bearColorSchemes[color_scheme]['stroke'])

  //left ear
  fill(bearColorSchemes[color_scheme]['outer-ear']);
  ellipse(-70, -70, (125 + face_size) * scale, (125 + face_size) * scale);
  fill(bearColorSchemes[color_scheme]['inner-ear']);
  ellipse(-inner_ear_x, -inner_ear_y, (50 + face_size) * scale, (50 + face_size) * scale);
  //right ear
  fill(bearColorSchemes[color_scheme]['outer-ear']);
  ellipse(70, -70, (125 + face_size) * scale, (125 + face_size) * scale);
  fill(bearColorSchemes[color_scheme]['inner-ear']);
  ellipse(inner_ear_x, -inner_ear_y, (50 + face_size) * scale, (50 + face_size) * scale);

  //face
  fill(bearColorSchemes[color_scheme]['face']);
  ellipse(0, 0, (300 + face_size) * scale, (300 + face_size) * scale);

  //outer mouth
  fill(bearColorSchemes[color_scheme]['mouth']);
  ellipse(0, 25, mouth_size, mouth_size*0.83);

  //nose
  stroke(bearColorSchemes[color_scheme]['nose'])
  fill(bearColorSchemes[color_scheme]['nose']);
  ellipse(0, 20, 12, 12);
  strokeWeight(6);
  curve(0,25, 0, 25, -15, 35, 0, 5);
  curve(0,25, 0, 25, 15, 35, 0, 5);

  //cheeks
  stroke(bearColorSchemes[color_scheme]['stroke'])
  strokeWeight(0);
  fill(bearColorSchemes[color_scheme]['cheeks']);
  ellipse(-70, 15, 45, 45);
  ellipse(70, 15, 45, 45);

  strokeWeight(1);
  //outer eyes
  fill(bearColorSchemes[color_scheme]['outer-eyes']);
  ellipse(-eye_x, eye_y, eye_size, eye_size);
  ellipse(eye_x, eye_y, eye_size, eye_size);
  //inner eyes
  fill(bearColorSchemes[color_scheme]['inner-eyes']);
  ellipse(-eye_x, eye_y, eye_size/4, eye_size/4);
  ellipse(eye_x, eye_y, eye_size/4, eye_size/4);

  pop();
}

function draw () {
  noStroke();

  var mode = faceSelector.value();

  if (mode != 'all') {
    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
    else if (mode == '3') {
      background(bg_color3);
    }
  }

  var s1 = radio.value();
  var s2 = slider1.value();
  var s3 = slider2.value();
  var s4 = slider3.value();
  var s5 = slider4.value();


  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;
  var extent = 0;
  if(face_h < face_w) {
    extent = face_h / 2;
  }
  else {
    extent = face_w / 2;
  }
  var scale = extent / 220.0;
  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    if (mode == 'all') {
      face_x = width / 6;
    }
    var shape = s1;
	var hue = map(s2, 0, 100, 350, 0);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    drawMonsterFace(face_x, face_y, shape, hue, eye_value, mouth_value, scale);
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    var num_antennas = s1;
	var face_height = map(s2, 0, 100, 0, 200);
    var hue = map(s2, 0, 100, 0, 350);
		
    var face_shape = map(s3, 0, 100, 0, 200);
    var mouth_style = map(s4, 0, 100, 50, 10);
    var eye_distance = map(s5, 0, 100, 50, 0);
    drawRobotFace(face_x, face_y, face_height, hue, num_antennas, face_shape, mouth_style, eye_distance, scale);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    var color_scheme = s1;
    var face_size = map(s2, 0, 100, 0, 100);
    var mouth_size = map(s3, 0, 100, 60, 130);
    var eye_x = map(s4, 0, 100, 50, 20);
    var eye_y = map(s4, 0, 100, 0, -40);
    var eye_size = map(s4, 0, 100, 20, 40);
    var inner_ear_x = map(s5, 0, 100, 63, 83);
    var inner_ear_y = map(s5, 0, 100, 63, 54);
    drawBearFace(face_x, face_y, color_scheme, face_size, mouth_size, eye_x, eye_y, eye_size, inner_ear_x, inner_ear_y, scale);
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
