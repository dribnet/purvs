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
var bg_color1 = [0, 0, 0];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, eye_value, chain_value) {
  push();
  translate(x, y);
  translate(0,-70);
  //rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  bg_color1 = [map(tilt_value,0,100,91,150),map(eye_value,0,100,45,65),map(eye_value,0,100,12,120)];
  //ellipse(0, 0, 300 * scale, 400 * scale);
  fill('#896c4e');
  beginShape();
  vertex(0, -125);
  bezierVertex(-84, -122,-130, -31, -128, 46);
  bezierVertex(-127, 105, -75, 131, 0, 130);
  bezierVertex(75, 131,127, 105,128, 46);
  bezierVertex(130, -31,84, -122,0, -125);
  endShape();

  beginShape();
  vertex(80,100);
  vertex(-80,100);
  vertex(0,170);
  endShape();

  ellipse(-95,-105,60,60);
  ellipse(95,-105,60,60);
  fill('#a58e65');
  ellipse(-97,-105,48,48);
  ellipse(97,-105,48,48);
  fill('#d3bfb4');

  beginShape();
  vertex(0, 20);
  bezierVertex(-22, 20, -64, 49, -63, 88);
  bezierVertex(-65, 104, -36, 128, 0, 128);
  bezierVertex(36, 128,65, 104,63, 88);
  bezierVertex(64, 49,22, 20,0, 20);
  endShape();

  fill('#5f4c2c');
  beginShape();
  vertex(-14, 37);
  bezierVertex(-14, 39, -6, 47, 0, 48);
  bezierVertex(6, 47, 14, 39, 14, 37);
  vertex(0,34);
  endShape();

  fill(map(tilt_value,0,100,247,0),map(eye_value,0,100,193,0),map(eye_value,0,100,61,0));
  beginShape();
  vertex(90,165);
  vertex(50,126);
  vertex(0,170);
  vertex(-50,126);
  vertex(-90,165);
  vertex(0,300);
  endShape();


  fill('#c1c1c1');
  beginShape();
  vertex(60,155);
  vertex(0,170);
  vertex(-60,155);
  vertex(0,map(eye_value,0,100,170,300));
  endShape();

  fill('#440044');
  beginShape();
  vertex(60,155);
  vertex(0,170);
  vertex(-60,155);
  vertex(0,map(eye_value,0,100,170,200));
  endShape();
  beginShape();
  vertex(20,map(eye_value,0,100,170,255));
  vertex(0,map(eye_value,0,100,170,180));
  vertex(-20,map(eye_value,0,100,170,255));
  vertex(0,map(eye_value,0,100,170,300));
  endShape();

  fill(map(tilt_value,0,100,255,193),map(eye_value,0,100,255,193),map(eye_value,0,100,255,193));
  beginShape();
  vertex(map(tilt_value,0,100,45,32),220);
  vertex(60,155);
  vertex(50,126);
  vertex(0,170);
  vertex(-50,126);
  vertex(-60,155);
  vertex(map(tilt_value,0,100,-45,-32),220);
  vertex(0,170);
  endShape();

  // chain
  fill(map(tilt_value,100,0,247,100),map(eye_value,0,100,193,100),map(eye_value,0,100,61,100));
  ellipse(55,133,chain_value,chain_value);
  ellipse(47,154,chain_value,chain_value);
  ellipse(35,172,chain_value,chain_value);
  ellipse(22,185,chain_value,chain_value);
  ellipse(11,195,chain_value,chain_value);
  ellipse(0,200,chain_value,chain_value);
  ellipse(-11,195,chain_value,chain_value);
  ellipse(-22,185,chain_value,chain_value);
  ellipse(-35,172,chain_value,chain_value);
  ellipse(-47,154,chain_value,chain_value);
  ellipse(-55,133,chain_value,chain_value);

  // eyes
  translate(-60,-10);
  rotate(10);
  //EYE1
  fill('#ffffff');
  ellipse(0,0,60,120);
  //PUPIL1
  fill(map(tilt_value,0,100,247,0),map(eye_value,0,100,193,0),map(eye_value,0,100,61,0));
  ellipse(5,-9,35,75);
  fill(map(tilt_value,0,100,0,208),map(eye_value,0,100,0,29),map(eye_value,0,100,0,95));
  ellipse(5,-4,30,60);
  fill(map(tilt_value,0,100,255,244),map(eye_value,0,100,255,241),map(eye_value,0,100,255,88));
  rotate(-20);
  ellipse(4,-19,13,21);
  fill('#FFFFFF');
  ellipse(7,-6,6,12);
  fill('#FFFFFF');
  ellipse(7,14,11,17);
  rotate(10);
  translate(120,0);
  rotate(-10);
  //EYE2
  fill('#ffffff');
  ellipse(0,0,60,120);
  //PUPIL2
  fill(map(tilt_value,0,100,247,0),map(eye_value,0,100,193,161),map(eye_value,0,100,61,186));
  ellipse(-5,-9,35,75);
  fill('#000000');
  ellipse(-5,-4,30,60);
  fill(map(tilt_value,0,100,255,212),map(eye_value,0,100,255,29),map(eye_value,0,100,255,96));
  ellipse(-8,-21,13,21);
  fill('#ffffff');
  ellipse(-6,-8,6,12);
  fill(map(tilt_value,0,100,255,244),map(eye_value,0,100,255,241),map(eye_value,0,100,255,88));
  ellipse(-3,14,11,17);
  rotate(10);
  translate(-60,10);

  //glasses
  fill(0,0,0,chain_value*10);
  strokeWeight(chain_value/2);
  stroke(map(tilt_value,100,0,247,100),map(eye_value,0,100,193,100),map(eye_value,0,100,61,100));
  rect(30,10,50,20);
  rect(-30,10,-50,20);
  line(-30,20,30,20);
  noStroke();
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
    var tilt_value = map(s1, 0, 100, -90, 90);
    var chain_value = map(s2, 0, 100, 0, 12);
    var eyeCol_value = map(s3, 0, 100, 0, 100);
    var suit_value = map(s5, 0, 100, 0, 200);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eyeCol_value, chain_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
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
