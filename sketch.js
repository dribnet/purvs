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
var bg_color1 = "#400B00";
var bg_color2 = [102, 58, 0];
var bg_color2 = 0;
var bg_color3 = [28, 58, 100];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];

var fg_color3 = [0, 131, 178];
var fg_color3_spots = [255, 150];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, pupilSize, chin, faceDown, fireOpacity) {
  push();
  translate(x, y);
  rotate(tilt_value);
  translate(0,-15);
    
  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  fill(0);
  //ellipse(0, 0, 300 * scale, 400 * scale);
     fill(fg_color1);
//    fill(200);
//    quad(0, 120, -30, 110, 0, 0, 30, 110);
//  quad(40, 110, 70, 70, 69, 0, 40, 66);
//  quad(-40, 110, -70, 70, -69, 0, -40, 66);
//    fill(255);
//  quad(0, 120, -30, 110, 0, 0, 30, 110);
//  quad(0, 120, 40, 110, 59, 20, 30, 66);
//  quad(0, 120, -40, 110, -59, 20, -30, 66);
     stroke("#400B00");
       fill(255,204,0);
    fill(255,167,78);
    fill(64, 57,11, 100);
    fill(255, 227,42, fireOpacity);
    quad(0, chin, -70, 75, -90, 10, 70, 75);
    quad(0, chin, -70, 75, 80, -10, 70, 75);
    quad(0, chin, -70, 75, -70, -30, 70, 75);
    quad(0, chin, -70, 75, 60, -50, 70, 75);
    quad(0, chin, -70, 75, -50, -80, 70, 75);
    quad(0, chin, -70, 75, 10, -120, 70, 75);
    fill(255);

       push();
    translate(0,faceDown);
  // eyes

//
//  if (eye_value >= 2) {
//    fill(bg_color1);
//  
    stroke(0);
    ellipse(-50 * scale, 110 * scale, 50 * scale, 50 * scale);
    ellipse( 50 * scale, 110 * scale, 50 * scale, 50 * scale);
//
    fill(0);
    ellipse(-50 * scale, 110 * scale, pupilSize * scale, pupilSize * scale);
    ellipse( 50 * scale, 110 * scale, pupilSize * scale, pupilSize * scale);
//  }

  // mouth
    noStroke();
  fill("#400B00");
  ellipse(0 * scale, 150 * scale, 100 * scale, mouth_value * scale);
    pop();
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value, roundness, size, size2, spotsAmount, tiltValue, grayness) {
  rectMode(CENTER);
        noStroke();
  push();
  translate(x, y);
    push();
    rotate(tiltValue);
  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

    var fg_color3 = [0, 131, 178];
  fill(fg_color3);
    
    //bigRect
  rect(0, 0, size * scale, size * scale, roundness);
    fill(200, grayness);
    rect(0, 0, size * scale, size * scale, roundness);
    //spots
    fill(fg_color3_spots);
     if (spotsAmount > 0) {
  rect(45,-50,size2/6* scale, size2/6 * scale, roundness/3);       }
      if (spotsAmount > 1) {
    rect(-40,30,size2/5* scale, size2/5 * scale, roundness/3);
         }
      if (spotsAmount > 2) {
    rect(46,46,size2/4* scale, size2/4 * scale, roundness/2);
          }
     if (spotsAmount > 3) {
    rect(-30,-54,size2/4* scale, size2/4 * scale, roundness/2);
          }
     if (spotsAmount > 4) {
rect(5,5,size2/7* scale, size2/7 * scale, roundness/2);
          }
  pop();
  stroke(stroke_color3);
    //eyes
    fill(0);
    ellipse(-55 * scale, 30 * scale, 45 * scale, 45 * scale);
    ellipse( 55 * scale, 30 * scale, 45 * scale, 45 * scale);
    
    //mouth
    ellipse( 0 * scale, 70 * scale, 20 * scale, 15 * scale);
    
    //white of eyes
    fill(255);
    translate(5, -5);
    ellipse(-55 * scale, 30 * scale, 15 * scale, 15 * scale);
    ellipse( 55 * scale, 30 * scale, 15 * scale, 15 * scale);
  resetMatrix();
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
      var tilt_value = 0;
    var mouth_value = map(s3, 0, 100, 1, 30);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    var pupilSize =  map(s2, 0, 100, 10, 30);
      var chin = map(s1, 0, 100, 100, 120);
      var faceDown = map(s1, 0, 100, 0, 10);
      var fireOpacity = map(s4, 0, 100, 50, 180);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value, pupilSize, chin, faceDown, fireOpacity);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    var roundness = map(s1, 0, 100, 0, 120);
    var size = map(s1, 0, 100, 270, 330); 
    var size2 = 270;
    var spotsAmount = Math.floor(map(s2, 0, 100, 0, 5));
      var tiltValue = map(s3, 0, 100, 0, 360);
      var grayness = map(s4, 0, 100, 0, 200);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value, roundness, size, size2, spotsAmount, tiltValue, grayness);
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
