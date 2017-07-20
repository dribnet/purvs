var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

function setup () {
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
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

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

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
  rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke(stroke_color3);
  fill(fg_color3);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color3);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  var follicles = [
    [346,138],
    [391,120],
    [391,67],
    [439,76],
    [463,42],
    [487,18],
    [481,101],
    [520,102],
    [520,78],
    [533,54],
    [560,108],
    [580,76],
    [596,124],
    [618,124]
  ];

  resetMatrix();
  fill(colorHair);
  var radius = hair_value * scale;
  for(var i=0; i<follicles.length; i++) {
    ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
  }
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke(stroke_color2)
  fill(fg_color2);
  rect(0, 0, (300 + width_value) * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color2);
    rect( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color2);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color2);
    rect(-60 * scale, -80 * scale, 50 * scale, 30 * scale);
    rect( 60 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color2);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 60 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  rectMode(CORNER);
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
    rect(0, 0, width/3, height);
    if (mode == 'all') {
      face_x = width / 6;
    }
    var tilt_value = map(s1, 0, 100, -90, 90);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    var width_value = map(s1, 0, 100, 0, 100);
    var color_scheme = Math.floor(map(s2, 0, 100, 1, 4));
    var face_shape = s3;
    var mouth_style = map(s4, 0, 100, 250, -150);
    var eye_distance = map(s5, 0, 100, 50, 0);
    drawRobot(face_x, face_y, face_w, face_h, width_value, color_scheme, face_shape, mouth_style, eye_distance);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    var width_value = map(s1, 0, 100, 0, 100);
    var color_scheme = Math.floor(map(s2, 0, 100, 1, 4));
    var mouth_value = map(s3, 0, 100, 0, 200);
    drawBearFace(face_x, face_y, face_w, face_h, width_value, color_scheme, mouth_value);
    //drawFace3(face_x, face_y, face_w, face_h, width_value, color_scheme, mouth_value);
  }
}

function drawRobot(x, y, w, h, width_value, eye_value, face_shape, mouth_style, eye_distance) {
  push();
  rectMode(CENTER);
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke(stroke_color2)
  fill(fg_color2);
  rect(0, 0, (300 + width_value) * scale, 400 * scale, face_shape, face_shape);

  //left eye
  fill(255, 255, 255);
  ellipse(-(25 + eye_distance), -60, 50, 55);
  fill(0, 0, 0);
  ellipse(-(18 + eye_distance), -55, 15, 21);
  fill(255, 255, 255);
  ellipse(-(16 + eye_distance), -54, 7, 11);

  //right eye
  fill(255, 255, 255);
  ellipse(25 + eye_distance, -60, 50, 55);
  fill(0, 0, 0);
  ellipse(18 + eye_distance, -55, 15, 21);
  fill(255, 255, 255);
  ellipse(16 + eye_distance, -54, 7, 11);

  // mouth
  noFill();
  strokeWeight(10);
  curve(0, mouth_style, -50, 40, 50, 40, 0, mouth_style);

  rectMode(CORNER);
  pop();
}


var bearColorSchemes = {
    1: {
        'stroke' : '#080303',
        'face' : '#080303',
        'eyes' : '#ffffff',
        'mouth' : '#ffffff',
        'outer-ear' : '#080303',
        'inner-ear' : '#ffffff',
        'nose' : '#080303',
        'cheeks' : '#f11a1d',
    },
    2: {
        'stroke' : '#553624',
        'face' : '#c78314',
        'eyes' : '#553624',
        'mouth' : '#ffffff',
        'outer-ear' : '#c78314',
        'inner-ear' : '#fed104',
        'nose' : '#553624',
        'cheeks' : '#c78314',
    },
    3: {
        'stroke' : '#0d0908',
        'face' : '#faa610',
        'eyes' : '#0d0908',
        'mouth' : '#ac0316',
        'outer-ear' : '#faa610',
        'inner-ear' : '#0d0908',
        'nose' : '#0d0908',
        'cheeks' : '#faa610',
    },
    4: {
        'stroke' : '#020202',
        'face' : '#926a2d',
        'eyes' : '#ffffff',
        'mouth' : '#f9d98d',
        'outer-ear' : '#926a2d',
        'inner-ear' : '#020202',
        'nose' : '#020202',
        'cheeks' : '#f9d98d',
    }
}


function drawBearFace(x, y, w, h, width_value, color_scheme, mouth_value) {
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke(bearColorSchemes[color_scheme]['stroke'])
  
  //left ear
  fill(bearColorSchemes[color_scheme]['outer-ear']);
  ellipse(-70, -70, (125 + width_value) * scale, (125 + width_value) * scale);
  fill(bearColorSchemes[color_scheme]['inner-ear']);
  ellipse(-65, -65, (50 + width_value) * scale, (50 + width_value) * scale);
  //right ear
  fill(bearColorSchemes[color_scheme]['outer-ear']);
  ellipse(70, -70, (125 + width_value) * scale, (125 + width_value) * scale);
  fill(bearColorSchemes[color_scheme]['inner-ear']);
  ellipse(65, -65, (50 + width_value) * scale, (50 + width_value) * scale);

  //face
  fill(bearColorSchemes[color_scheme]['face']);
  ellipse(0, 0, (300 + width_value) * scale, (300 + width_value) * scale);

  //eyes
  fill(bearColorSchemes[color_scheme]['eyes']);
  ellipse(-20, -20, 15, 15);
  ellipse(20, -20, 15, 15);

  //mouth
  fill(bearColorSchemes[color_scheme]['mouth']);
  ellipse(0, 15, 45, 45);

  //nose
  fill(bearColorSchemes[color_scheme]['nose']);
  ellipse(0, 5, 10, 10);

  fill(89, 49, 39,  0);
  arc(0, 10, 30, 30, QUARTER_PI, PI);

  pop();
}  

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
