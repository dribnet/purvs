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

var fg_color1 = [255, 246, 229];
var fg_color2 = [196, 141, 106];
var fg_color3 = [255, 231, 191];

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
  stroke(140,106,42);
  strokeWeight(2)
  ellipse(0, 0, 400 * scale, 400 * scale);
  fill(245,236,219);
  ellipse(0, 0, 300 * scale, 300 * scale);
  noStroke();


  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(250, 250, 250);
    ellipse(0 * scale, 0 * scale, 120 * scale, 80 * scale);
    fill(232,147,0);
    ellipse(0 * scale, 0 * scale, 40 * scale, 40 * scale);
  }

  if (eye_value >= 2) {
    fill(250, 250, 250);
    ellipse(-70 * scale, -40 * scale, 120 * scale, 80 * scale);
    ellipse( 70 * scale, -40 * scale, 90 * scale, 70 * scale);

    fill(232,147,0);
    ellipse(-60 * scale, -40 * scale, 40 * scale, 40 * scale);
    ellipse( 60 * scale, -40 * scale, 40 * scale, 40 * scale);
  }

  // mouth
  stroke(173,79,54);
  strokeWeight(20);
  noFill()
  curve(-100, -100, -35, 35, 35, 35, 100, -100);
  fill(178, 126, 81);
  noStroke();
  //ellipse(0 * scale, 70 * scale, 150 * scale, 30 * scale);
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

  noStroke();
  fill(196, 153, 106);
  rect(0, 0, 315 * scale, 315 * scale, 20);
  ellipse(-40, -100, 110, 90);
  ellipse(40, -100, 110, 90);

  fill(fg_color3);
  rect(0, 0, 300 * scale, 300 * scale, 20);
  ellipse(-40, -100, 100, 80);
  ellipse(40, -100, 100, 80);

  // tomatoes

  fill(176, 36, 26);
  ellipse(-75 * scale, -100 * scale, 120 * scale, 120 * scale);
  ellipse( 75 * scale, -100 * scale, 120 * scale, 120 * scale);

  fill(240,82,67);
  ellipse(-75 * scale, -100 * scale, 110 * scale, 110 * scale);
  ellipse( 75 * scale, -100 * scale, 110 * scale, 110 * scale);

  fill(255,128,125)
  ellipse(-75 * scale, -100 * scale, 50 * scale, 20 * scale);
  ellipse(-75 * scale, -100 * scale, 20 * scale, 50 * scale);
  ellipse(75 * scale, -100 * scale, 50 * scale, 20 * scale);
  ellipse(75 * scale, -100 * scale, 20 * scale, 50 * scale);
  push();
  translate(-75*scale, -100*scale);
  rotate(45);
  ellipse(0, 0, 20 * scale, 50 * scale);
  rotate(90);
  ellipse(0, 0, 20 * scale, 50 * scale);
  pop();
  push();
  translate(75*scale, -100*scale);
  rotate(45);
  ellipse(0, 0, 20 * scale, 50 * scale);
  rotate(90);
  ellipse(0, 0, 20 * scale, 50 * scale);
  pop();

  //seeds
  fill(255,166,51);
  //left
  // ellipse( -75 * scale, -60 * scale, 10 * scale, 20 * scale);
  // ellipse( -75 * scale, -140 * scale, 10 * scale, 20 * scale);
  // ellipse( -115 * scale, -100 * scale, 20 * scale, 10 * scale);
  // ellipse( -35 * scale, -100 * scale, 20 * scale, 10 * scale);
  // //right
  // ellipse( -75 * scale, -140 * scale, 10 * scale, 20 * scale);
  // ellipse( 75 * scale, -140 * scale, 10 * scale, 20 * scale);
  // ellipse( 115 * scale, -100 * scale, 20 * scale, 10 * scale);
  // ellipse( 35 * scale, -100 * scale, 20 * scale, 10 * scale);


  // avacado
  fill(219, 200, 124);
  stroke(70, 145, 31);
  strokeWeight(2);
  arc(0, 40, 100, 50, 180, QUARTER_PI);
  noStroke();
  fill(fg_color3);
  ellipse((10 + eye_value), 45, 35, 30);
  //ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  // var follicles = [
  //   [346,138],
  //   [391,120],
  //   [391,67],
  //   [439,76],
  //   [463,42],
  //   [487,18],
  //   [481,101],
  //   [520,102],
  //   [520,78],
  //   [533,54],
  //   [560,108],
  //   [580,76],
  //   [596,124],
  //   [618,124]
  // ];

  // resetMatrix();
  // fill(colorHair);
  // var radius = hair_value * scale;
  // for(var i=0; i<follicles.length; i++) {
  //   ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
  // }
  pop();
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
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

  noStroke();
  fill(fg_color2);
  ellipse(0, 0, 650 * scale * scale, 400 * scale);

  // eyes

    fill(0,0,0);
    ellipse(-45 * scale, -50 * scale, 20 * (width_value/100), 20 * scale);
    ellipse( 45 * scale, -50 * scale, 20 * (width_value/100), 20 * scale);

    fill(255,255,255,120);
    stroke(0,0,0);
    strokeWeight(3);
    rect(-45 * scale, -50 * scale, 65 * scale, 45 * scale, 8);
    rect( 45 * scale, -50 * scale, 65 * scale, 45 * scale, 8);

    line(-5, -30, 5, -30);




  // mouth
  fill(bg_color3);
  noStroke();
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  rectMode(CORNER);

    //hair

  fill(0,0,0);
  rotate(30);
  ellipse(-95,-5,30,80);
  rotate(-60);
  ellipse(95,-5,30,80);

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
    var mouth_value = map(s3, 0, 100, 0, 100);
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
