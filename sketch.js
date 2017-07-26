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
var bg_color2 = "#f5f5f5";
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

var bolt_color = "#C1C1BF",
    face_color1 = "#9ECB3D",
    eye_color1 = "#F7F7EB",
    pupil_color1 = "#20211E",
    hair_color1 = "#20211E",
    mouth_color1 = "#64B244";

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
  noStroke();
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

  // set fill to bolt color
  fill(bolt_color);
  // left bolt
  rotate(-4);
  beginShape();
  vertex(-170 * scale, 80 * scale);
  vertex(-150 * scale, 80 * scale);
  vertex(-150 * scale, 90 * scale);
  vertex(-100 * scale, 90 * scale);
  vertex(-100 * scale, 110 * scale);
  vertex(-150 * scale, 110 * scale);
  vertex(-150 * scale, 120 * scale);
  vertex(-170 * scale, 120 * scale);
  endShape();
  // right bolt
  rotate(8);
  beginShape();
  vertex(170 * scale, 80 * scale);
  vertex(150 * scale, 80 * scale);
  vertex(150 * scale, 90 * scale);
  vertex(100 * scale, 90 * scale);
  vertex(100 * scale, 110 * scale);
  vertex(150 * scale, 110 * scale);
  vertex(150 * scale, 120 * scale);
  vertex(170 * scale, 120 * scale);
  endShape();


  // set fill to face color
  fill(face_color1);
  // head
  rotate(-4);
  quad(-150 * scale, -150 * scale, 150 * scale, -175 * scale, 125 * scale, 180 * scale, -125 * scale, 180  * scale);

  // set fill to eye color
  fill(eye_color1);
  // eyes
  ellipse(-40 * scale, 0, 70 * scale, 70 * scale);
  ellipse(40 * scale, 0, 60 * scale, 60 * scale);

  // set fill back to pupil color
  fill(pupil_color1);
  // pupils
  ellipse(-30  * scale, 0, 10 * eye_value * scale, 10 * eye_value* scale);
  ellipse(30  * scale, 2  * scale, 10 * eye_value * scale, 10 * eye_value* scale);

  // set fill to hair/eyebrow color
  fill(hair_color1);
  // hair
  beginShape();
  vertex(-155 * scale, -155 * scale);
  vertex(155 * scale, -180 * scale);
  vertex(155 * scale, -70 * scale);
  vertex(130 * scale, -70 * scale);
  vertex(125 * scale, -90 * scale);
  vertex(115 * scale, -70 * scale);
  vertex(90 * scale, -70 * scale);
  vertex(85 * scale, -100 * scale);
  vertex(80 * scale, -70 * scale);
  vertex(60 * scale, -70 * scale);
  vertex(50 * scale, -90 * scale);
  vertex(40 * scale, -70 * scale);
  vertex(5 * scale, -70 * scale);
  vertex(0 * scale, -100 * scale);
  vertex(-10 * scale, -70 * scale);
  vertex(-60 * scale, -70 * scale);
  vertex(-65 * scale, -90 * scale);
  vertex(-75 * scale, -70 * scale);
  vertex(-100 * scale, -70 * scale);
  vertex(-110 * scale, -95 * scale);
  vertex(-120 * scale, -70 * scale);
  vertex(-155 * scale, -70 * scale);
  endShape();

  // eyebrows
  quad(-80 * scale, -35 * scale, 0, -45 * scale, 0 * scale, -30 * scale, -80 * scale, -20 * scale);
  quad(10 * scale, -40 * scale, 70 * scale, -30 * scale, 70 * scale, -15 * scale, 10 * scale, -25 * scale);

  // mouth
  fill(mouth_color1);
  var r = (mouth_value/10);
  rect(-100 * scale, 75 * scale, 200 * scale, 10 * scale + r);
  for (i=-90; i<100; i+=15){
    rect(i * scale, 65 * scale, 5 * scale, 30 * scale + r);
  }

  pop();
}

function drawFace(x, y, w, h, tilt_value, eye_value, mouth_value) {
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


function drawFace2(x, y, w, h, face_value, mouth_value, eye_value) {
  push();
  translate(x/1.2, y/2);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  // cheeks
  fill('#C74762');

  rotate(-35);
  ellipse(-145*scale,270*scale,60*scale,90*scale);

  rotate(55);
  ellipse(300*scale,180*scale,50*scale,80*scale)

  // reset for main face shapes
  rotate(-20);
  stroke('#1e1e1e');
  noFill();

  // face shapes
  beginShape();
  vertex(49*scale+(face_value*2),48*scale);
  vertex(82*scale-(face_value*2),326*scale+(face_value*2));
  vertex(295*scale+(face_value*2),254*scale-(face_value*2));
  vertex(183*scale-(face_value*2),0);
  vertex(49*scale+(face_value*2),48*scale);
  endShape();

  beginShape();
  vertex(115*scale-(face_value*2),133*scale);
  vertex(32*scale+(face_value*2),219*scale-(face_value*2));
  vertex(93*scale-(face_value*2),433*scale);
  vertex(187*scale+(face_value*2),433*scale);
  vertex(280*scale-(face_value*2),249*scale+(face_value*2));
  vertex(115*scale-(face_value*2),133*scale);
  endShape();


  // nose
  fill('#f5f5f5');
  triangle(145*scale,233*scale,130*scale,291*scale,172*scale,291*scale);

  // mouth
  triangle(148*scale,340*scale-mouth_value,121*scale,339*scale+mouth_value,167*scale,339*scale+mouth_value);

  // chin
  quad(144*scale,374*scale,134*scale,380*scale,142*scale,402*scale,156*scale,391*scale);

  // eye sockets
  fill(bg_color2);
  quad(183*scale,122*scale,192*scale,156*scale,244*scale,152*scale,239*scale,111*scale);
  quad(9*scale,94*scale,14*scale,137*scale,94*scale,129*scale,68*scale,89*scale,9*scale,94*scale);

  // eyes
  fill('#1e1e1e');
  triangle(187*scale,138*scale,218*scale,154*scale,243*scale,140*scale);
  triangle(14*scale,122*scale,56*scale,132*scale,86*scale,117*scale);

  fill('#f5f5f5');
  ellipse(52*scale,123*scale,22*scale,14*scale);
  ellipse(213*scale,143*scale,17*scale,12*scale);

  fill('#1e1e1e');
  ellipse(52*scale+eye_value,122*scale,8*scale,8*scale);
  ellipse(213*scale+eye_value,142*scale,6*scale,6*scale);

  // eyelids
  fill('#f5f5f5');
  triangle(14*scale,122*scale,56*scale,96*scale,86*scale,118*scale);
  triangle(188*scale,138*scale,201*scale,124*scale,241*scale,140*scale);

  pop();
}


function drawFacee(x, y, w, h, hair_value, eye_value, blink_value) {
  // rectMode(CENTER);
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

function draw() {
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
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var face_value = Math.floor(map(s1, 0, 100, -5, 5));
    var mouth_value = map(s3, 0, 100, -6, 6);
    var eye_value = map(s2, 0, 100, -3, 3);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, face_value, mouth_value, eye_value);
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
