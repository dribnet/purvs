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
var bg_color1 = [255, 200, 100];
var bg_color2 = [205, 250, 100];
var bg_color3 = [105, 255, 100];

var fg_color1 = [0, 200, 250,255];
var fg_color2 = [50, 200, 200,100];
var fg_color3 = [100, 200, 150,100];

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
  fg_color1[3] = Math.floor((slider5.value()*255)/100);
  fg_color1[2] =  Math.floor((slider4.value()*255)/100);
  fill(fg_color1);
  rectMode(CENTER);
  rect(0, 0, 300 * scale, 400 * scale);
  rect(0, 60, 230 * scale, 200 * scale);
  rect(0, 65, 180 * scale, 210 * scale);
  rect(0, -60, 230 * scale, 200 * scale);
  rect(0, -65, 180 * scale, 210 * scale);

  rect(-60, -60, 230 * scale, 50 * scale);
  rect(-60, -60, 180 * scale, 90 * scale);

  rect(60, -60, 230 * scale, 50 * scale);
  rect(60, -60, 180 * scale, 90 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color1);
    rect( 0, -80 * scale, 80 * scale, 80 * scale);
    fill(fg_color1);
    ellipse(0 * scale, -80 * scale, 20 * scale, 20 * scale);
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

  noStroke();
  fg_color2[3] =  Math.floor((slider5.value()*255)/100);
  fg_color2[1] =  Math.floor((slider4.value()*255)/100);
  fill(fg_color3);
  rect(0, 0, 300 * scale, 400 * scale);
  rect(70, -40, 100 * scale, 200 * scale);
  rect(-70, -40, 100 * scale, 200 * scale);

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color2);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color2);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  var follicles = [
    [346,438],
    [391,420],
    [391,473],
    [439,463],
    [463,423],
    [487,487],
    [481,401],
    [520,452],
    [520,486],
    [533,443],
    [560,408],
    [580,466],
    [596,424],
    [618,454],
    [346,38],
    [391,20],
    [391,73],
    [439,23],
    [463,23],
    [487,87],
    [481,101],
    [520,52],
    [520,86],
    [533,43],
    [560,08],
    [580,66],
    [596,24],
    [618,24],
    []
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
  noStroke();
  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  noStroke()
  fill(fg_color2);
  fg_color3[3] =  Math.floor((slider5.value()*255)/100);
  fg_color3[0] =  Math.floor((slider4.value()*255)/100);
  rect(0, 0, (500 + width_value) * scale, 400 * scale);

  //Ears
  rect(-100, -100, (100 + width_value) * scale, (100 + width_value) * scale);
  rect(100, -100, (100 + width_value) * scale, (100 + width_value) * scale);



  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse( 0, -80 * scale, 120 * scale, 120 * scale);
    fill(fg_color2);
    ellipse(0 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color3);
    rect(-60 * scale, -80 * scale, 80 * scale, 80 * scale);
    rect( 60 * scale, -80 * scale, 80 * scale, 80 * scale);

    fill(fg_color2);
    ellipse( 60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( -60 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color3);

  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  //Teeth
  rect(-20, 40, (10 + width_value) * scale, (100 + width_value) * scale);
  rect(20, 40, (10 + width_value) * scale, (100 + width_value) * scale);
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
    var tilt_value = map(s1, 0, 100, -18, 18);
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
    var eye_value = map(s2, 0, 100, 15, -15);
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
    var mouth_value = map(s3, 0, 100, 0, 130);
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
