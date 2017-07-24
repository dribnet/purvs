var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4;
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

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');

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
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// global variables for colors
var bg_color1 = ["#67CCC2"];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = ["#FF9AF6"];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = ["#B25AAA"];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, randome) {
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
  ellipse(0, 0, 30 * scale, 400 * scale);
  fill (0,0);
  stroke (stroke_color1);
  ellipse(0, 0, random (30,30+randome) * scale, random(390, 390+randome) * scale);
  ellipse(0, 0, random (30,30+randome) * scale, random(390, 390+randome) * scale);


  // eyes
  if (eye_value === 1 || eye_value == 3) {

    ellipse(0 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale);

    ellipse(0 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale);
    ellipse(0 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome)* scale);
  }

  if (eye_value >= 2) {

    ellipse(-60 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale); 
    ellipse(-60 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale);
    ellipse(-60 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome)* scale);

    ellipse( 40 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale);
    ellipse(40 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome) * scale);
    ellipse(40 * scale, -80 * scale, random (10, 10+randome) * scale, random(10, 10+randome)* scale);
  }

  // mouth
  fill(bg_color1);
  noStroke();
  ellipse(0 * scale, 70 * scale, 150 * scale, (mouth_value+5) * scale);
  fill (0,0);
  stroke (stroke_color1);
  ellipse(0, 0, random (30,(30+randome)) * scale, random(390, (390+randome)) * scale);
  ellipse(0, 0, random (30,(30+randome)) * scale, random(390, (390+randome)) * scale);
  sleep (100);
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value, different) {
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
  fill (200, different);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes. first check for blinking
 
   fill (0,0);
   strokeWeight(5);
   stroke (1, different);
   bezier(30*scale, -80*scale, 35, -30, 35, -40, 70*scale, -80*scale);
   bezier(-30*scale, -80*scale, -35, -30, -35, -40, -70*scale, -80*scale);
   noStroke();
   fill(bg_color3);
   strokeWeight (1);
   ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
   ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

   fill(fg_color3);
   ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
   ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  


  // mouth
  fill(bg_color3);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  //cheeks
  fill(bg_color2);
  noStroke();
  ellipse (90, 60, different/2.5, 150);
  ellipse (-90, 60, different/2.5, 150);
  rectMode(CORNER);
 resetMatrix();
  print(different);
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value, randome) {
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

  rotate (-width_value);
  fill(fg_color2);
    //mouth


  stroke (0);
  rect (0,70,70,20,5);
  bezier (-35, 70, random(-30,-40), random(60,70), 25, random(70,80), 35,70);
  
  strokeWeight(1);
  fill (bg_color3);
  stroke (0);

  bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95* scale, -110* scale);
  bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
  bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
  bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);


  bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95* scale, 110* scale);
  bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);
  bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);
  bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);


  bezier (-95* scale, 110* scale, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95* scale, 110* scale);
  bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);
  bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);
  bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);


  bezier (95* scale, 110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95* scale, -110* scale);
  bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
  bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
  bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);



    // eyes
  if (eye_value >= 1){
  	fill(bg_color2);
  	rect( 0, -120 * scale, 50 * scale, 30 * scale);
  }

   if (eye_value == 2) {
   	fill(fg_color2);
    triangle(-21 * scale + (mouseX / 90), -120 * scale + (mouseY/90), -5 * scale+ (mouseX / 90), -115 * scale+ (mouseY/90), -6*scale+ (mouseX / 90), -129*scale+ (mouseY/90));
  }

  if (eye_value === 1) {
    fill(fg_color2);
    ellipse(-10 * scale + (mouseX / 90), -125 * scale + (mouseY/90), 20 * scale, 20 * scale);
  }

  if (eye_value == 3){
  	fill(fg_color2);
  	rect (-15 * scale + (mouseX / 90), -125 * scale + (mouseY/90), 20 * scale, 20 * scale);
  }
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
    var randome = map(s4,0,100,0,15);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value, randome);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    var different = map(s1, 0, 100, 0, 255);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value, different);
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
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value, randome);
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
