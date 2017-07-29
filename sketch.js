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
var bg_color1 = "#E02B3B";
var bg_color2 = [0];
var bg_color3 = "#54C2FF";

var fg_color1 = [151, 102, 52];

var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];


//drawing 1
var gollum_skin ="#CAB4A7";
var gollum_eyeskin ="#96897F";
var gollum_eyes = "#54C2FF";
var gollum_tooth ="#FFF3C2";
//drawing 2
var squid_ward ="#95CDB8";
var squid_eyes ="#FFF3C2";
var squid_pupils = "#5b412a";
var squid_nose ="#7AA897";
//drawing 3
var skin ="#FFD6B3";
var chucky_hair = "#E02B3B";
var glasses_colour ="#7C00D7";

function drawFace1(x, y, w, h, brow_value, eye_value, ear_value, eye_scale, mouth_width) {
  push();
  translate(x, y);
  // rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  


  // ears
  fill(gollum_skin);
  ellipse(0, -20 * scale, 450 * scale, ear_value * scale);
  fill(gollum_eyeskin);
  ellipse(0, -20 * scale, 430 * scale, ear_value/1.5 * scale);
  
  // face
  fill(gollum_skin);
  ellipse(0, 0, 340 * scale, 420 * scale);

  // wrinkles
  strokeWeight(3);
  stroke(0);
  // line(-80 * scale, -120 * scale, 80 * scale, -120 * scale);
  // line(-70 * scale, -130 * scale, 70 * scale, -130 * scale);
  // line(-70 * scale, -140 * scale, 70 * scale, -140 * scale);
  line(-80 * scale, brow_value * scale, 80 * scale, brow_value * scale);
  line(-70 * scale, (brow_value - 10) * scale, 70 * scale, (brow_value - 10) * scale);
  line(-60 * scale, (brow_value - 20) * scale, 60 * scale, (brow_value - 20) * scale);

  noStroke();

  //eye bags
  fill(gollum_eyeskin);
  ellipse(-60 * scale, -30 * scale, 110 * scale, eye_scale * scale + 20);
  ellipse( 60 * scale, -30 * scale, 110 * scale, eye_scale * scale + 20);

  fill(255);
  // draw two eyes
  ellipse(-60 * scale, -40 * scale, 120 * scale, eye_scale * scale+20);
  ellipse( 60 * scale, -40 * scale, 120 * scale, eye_scale * scale+20);

  // set fill and multiple ellipses for eyeballs
  fill(gollum_eyes);
  ellipse((-60 + eye_value) * scale, -40 * scale, 90 * scale, eye_scale * scale);
  ellipse(( 60 + eye_value) * scale, -40 * scale, 90 * scale, eye_scale * scale);
  fill(0);
  ellipse((-60 + eye_value) * scale, -40 * scale, 50 * scale, eye_scale * scale);
  ellipse(( 60 + eye_value) * scale, -40 * scale, 50 * scale, eye_scale * scale);
  fill(255);
  ellipse((-60 + eye_value) * scale, -50 * scale, 5 * scale, 7.5 * scale);
  ellipse(( 60 + eye_value) * scale, -50 * scale, 5 * scale, 7.5 * scale);

  // mouth
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(0, 110 * scale, (10 + mouth_width) * scale, 10 * scale);

  fill(gollum_tooth);
  strokeWeight(1);
  stroke(0);
  triangle(5 * scale, 110 * scale, 15 * scale, 90 * scale, 25 * scale, 110 * scale);
  triangle(-5 * scale, 110 * scale, -15 * scale, 90 * scale, -25 * scale, 110 * scale);
    

  pop();
}

function drawFace2(x, y, w, h, nose_value, eye_direction, mouth_size) {
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
  //face shape
  fill(squid_ward);
  ellipse(0, -75 * scale, 400 * scale, 300 * scale);
  ellipse(0, 150 * scale, 400 * scale, 75 * scale);
  rect(-100 * scale, 0, 200 * scale, 150 * scale);


   // draw two eyes
  fill(squid_eyes);
  // strokeWeight(2);
  ellipse(-40 * scale, 10 * scale, 60 * scale, 100 * scale);
  ellipse( 40 * scale, 10 * scale, 60 * scale, 100 * scale);

  //mouth
  fill(0);
  ellipse(0, 150 * scale, 300 * scale, (10 + mouth_size) * scale);

  //pupils
  fill(squid_pupils);
  rect((-50 + eye_direction) * scale, -10 * scale, 20 * scale, 40 * scale);
  rect((30 + eye_direction) * scale, -10 * scale, 20 * scale, 40 * scale);

  //nose
  fill(squid_nose);
  ellipse(0, 150 * scale, 75 * scale, nose_value * scale);

  noStroke();
  resetMatrix();
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value, head_size) {
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

  //hair
  fill(chucky_hair);
  triangle(0, 0, 100 * scale, -190 * scale, 190 * scale, 25 * scale);
  triangle(-125 * scale, 0, 50 * scale, -210 * scale, 175 * scale, 25 * scale);
  triangle(-175 * scale, 25 * scale, 0, -220 * scale, 125 * scale, 0);
  triangle(25 * scale, 0, -50 * scale, -210 * scale, -175 * scale, 25 * scale);
  triangle(0, 0, -100 * scale, -190 * scale, -190 * scale, 25 * scale);
  
  //ears
  fill(skin);
  ellipse(-200 * scale, width_value * scale, 50 * scale, 50 * scale);
  ellipse(200 * scale, width_value * scale, 50 * scale, 50 * scale);


  //face
  fill(skin);
  ellipse(0, 40 * scale, 400 * scale, head_size * scale);

  //glasses
  noStroke();
  fill(glasses_colour);
  rect(0, 0, 100 * scale, 10 * scale);
  strokeWeight(10);
  stroke(glasses_colour);
  fill(255);
  rect(-50 * scale, 0, (30 + mouth_value) * scale, 60 * scale);
  rect(50 * scale, 0, (30 + mouth_value) * scale, 60 * scale);
  noStroke();

  //eyes
  fill(0);
  ellipse (-50 * scale,0, 15 * scale, 15 * scale);
  ellipse (50 * scale,0, 15 * scale, 15 * scale);


  //mouth
  fill(0);
  // ellipse(0, 105 * scale, 100 * scale, mouth_value * scale);
  ellipse(0, 110 * scale, 120 * scale, 10 * scale);

  //teeth
  fill(255);
  rect(11 * scale, 120 * scale, 20 * scale, 30 * scale, 10);
  rect(-11 * scale, 120 * scale, 20 * scale, 30 * scale, 10);



  rectMode(CORNER);
  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face
  fill(bg_color1);

  // tilt_value = focusedRandom(10, 50);
  // eye_value = Math.floor(focusedRandom(1, 3));
  // mouth_value = focusedRandom(30, 140);
  brow_value = focusedRandom(-90, -120);
  eye_value = focusedRandom(-15, 15);
  ear_value = focusedRandom(100, 300);
  eye_scale = focusedRandom(10, 200);
  mouth_width = focusedRandom(100, 200);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
        //bias to raised eyebrows
        brow_value = focusedRandom(-90, -150, 1, -130);
        //slight bias to look to the right of the screen
        eye_value = focusedRandom(-15, 15, 2, 5);
        ear_value = focusedRandom(50, 250);
        //bias toward large eyes with an emphasis on very large eyes
        eye_scale = focusedRandom(10, 150, 1, 100);
        mouth_width = focusedRandom(60, 200);
      // tilt_value = focusedRandom(10, 50);
      // eye_value = int(focusedRandom(1, 3));
      // mouth_value = focusedRandom(30, 140);
      drawFace1(x, y, w, h, brow_value, eye_value, ear_value, eye_scale, mouth_width);
    }
  }

  // drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}