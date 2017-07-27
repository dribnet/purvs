var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var faceSelector;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.parent('selector1Container');

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

var bg_color1 = "pink";
var bg_color2 = "#f9f9f9";

var ch3_bodyPrimary = "#cccccc";
var ch3_bodySecondary = "#808080";
var ch3_detailPrimary = "#000000";
var ch3_detailSecondary = "#ffffff";

var ch2_face = "#ffe8d9";
var ch2_shadow = "#eda3a3";
var ch2_hair = "#2c229a";
var ch2_detailPrimary = "#1c007c";
var ch2_detailSecondary = "#f3bec5";
var ch2_pupil = "#ffffff";;

function drawFace1(x, y, w, h, ear_length, eye_value, look_direction, mouth_size, orientation_value) {
  push();
  rectMode(CENTER);
  var scale = 0.23;
    
  if (orientation_value == 2) {
  translate(x - 10, y);
    } else {
    translate(x, y);
    }
    
    // ear (back)
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(ch3_bodyPrimary);
    rect(50 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);

  // eye (back)
    if (eye_value === 2 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( 180 * scale, -80 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((look_direction + 70) * scale, -80 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc(185 * scale, -80 * scale, 130 * scale, 110 * scale, 210, 270);
    }

    // draw face
    if (orientation_value == 1) {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(20 * scale, 0 * scale, 350 * scale, 300 * scale, 0, 200 * scale, 200 * scale, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(-160 * scale, 0, 80 * scale, 300 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(-160 * scale, 0, 30 * scale, 150 * scale);
    } 
    else {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(45 * scale, 0 * scale, 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(45 * scale, 160 * scale, 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(45 * scale, 160 * scale, 150 * scale, 30 * scale);
    
    }

    // ear (front)
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(ch3_bodyPrimary);
    rect(0 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);
    noStroke();
    fill(ch3_bodyPrimary);
    rectMode(CORNER);
    rect(-35 * scale, -120 * scale, 70 * scale, (ear_length / 2) * scale);
    
    // eye middle
    if (eye_value === 1 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( 150 * scale, -80 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((look_direction + 40) * scale, -80 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc(155 * scale, -80 * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
  // eye (front)
    
    if (eye_value === 2 || eye_value == 3) {
        // eye fill
    noStroke();
    fill(ch3_detailSecondary);
    ellipse( 110 * scale, -60 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(look_direction * scale, -60 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
        // eye outline
    noFill();
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    ellipse( 110 * scale, -60 * scale, 80 * scale, 80 * scale);
    // eyebrow
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    noFill();
    arc(115 * scale, -60 * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
    
    // draw nose
    noStroke();
    fill(ch3_detailPrimary);
    push();
    rotate(-10);
    ellipse(200 * scale, 0 * scale, 50 * scale, 35 * scale);
    pop();

  // mouth
    
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    push();
    rotate(30);
  fill(ch3_detailSecondary);
  ellipse(155 * scale, -20 * scale, 30 * scale, mouth_size * scale);
    pop();
  pop();
}

function drawFace2(x, y, w, h, hair_value, mullet_length, fringe_length, beard_length, mouth_value) {
  push();
    
  rectMode(CENTER);
  translate(x, y);
    
  var scale = 0.2;
    
    // draw back hair
    if (hair_value >= 320) {
    fill(ch2_hair);
    ellipse(0 * scale, -100 * scale, hair_value * scale, hair_value * scale);
    }
    
    // draw mullet
    if (mullet_length >= 180) {
    push();
    rectMode(CORNER);
    fill(ch2_hair);
    rect(-175 * scale, -150 * scale, 350 * scale, mullet_length * scale, 100 * scale, 100 * scale, 0, 0);
    pop();
    }
    
    // draw ears
    fill(ch2_shadow);
    ellipse(-150 * scale, -40 * scale, 60 * scale, 60 * scale);
    fill(ch2_face);
    ellipse(150 * scale, -40 * scale, 60 * scale, 60 * scale);

    // draw head 
  fill(ch2_shadow);
  rect(0, 0, 300 * scale, 450 * scale, 200 * scale);
  fill(ch2_face);
  rect(10 * scale, 0, 280 * scale, 450 * scale, 200 * scale);

    // draw fringe
    if (hair_value >= 320) {
        if (fringe_length >= -25) {
    fill(ch2_hair);
    arc(0 * scale, -100 * scale, 320 * scale, 320 * scale, 190 - fringe_length, 350 + fringe_length, CHORD);
        }
    }
    
    // draw beard
    if (beard_length >= 230) {
    fill(ch2_hair);
    rectMode(CORNER);
  rect(-150 * scale, 0 * scale, 320 * scale, beard_length * scale, 200 * scale);
    rectMode(CENTER);
    }
    
    
  // draw eyes
    fill(ch2_detailPrimary);
    ellipse(-50 * scale, -80 * scale, 23 * scale, 30 * scale);
    ellipse( 80 * scale, -80 * scale, 23 * scale, 30 * scale);
    //draw pupils
    fill(ch2_pupil);
    ellipse(-50 * scale, -83 * scale, 10 * scale, 13 * scale);
    ellipse( 80 * scale, -83 * scale, 10 * scale, 13 * scale);
  

    // draw cheeks
    fill(ch2_detailSecondary);
    ellipse(-50 * scale, -40 * scale, 45 * scale, 25 * scale);
    ellipse(80 * scale, -40 * scale, 45 * scale, 25 * scale);
    
    // draw nose
    fill(ch2_shadow);
    rect(25 * scale, -30 * scale, 35 * scale, 80 * scale, 100 * scale);
    fill(ch2_detailSecondary);
    rect(28 * scale, -30 * scale, 30 * scale, 80 * scale, 100 * scale);
    
  // mouth
    if (mouth_value == 1) {
  fill(ch2_detailPrimary);
  rect(20 * scale, 70 * scale, 25 * scale, 80 * scale, 100 * scale);
    // draw tongue
    fill(ch2_detailSecondary);
    ellipse(20 * scale, 100 * scale, 25 * scale, 25 * scale);
    arc(7.5 * scale, 100 * scale, 50 * scale, 50 * scale, 270, 360);
    }
    else if (mouth_value == 2) {
  fill(ch2_detailPrimary);
  rect(20 * scale, 70 * scale, 80 * scale, 25 * scale, 100 * scale);
    // draw tongue
    fill(ch2_detailSecondary);
    ellipse(20 * scale, 100 * scale, 25 * scale, 25 * scale);
    arc(7.5 * scale, 100 * scale, 50 * scale, 50 * scale, 270, 360);
    }
    else if (mouth_value == 3) {
  fill(ch2_detailPrimary);
  ellipse(20 * scale, 70 * scale, 30 * scale, 30 * scale);
    }
    else if (mouth_value == 4) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 50 * scale, 120 * scale, 120 * scale, 0, 180);
        fill(ch2_pupil);
        rect(20 * scale, 55 * scale, 90 * scale, 10 * scale);
    }
    else if (mouth_value == 5) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 50 * scale, 120 * scale, 120 * scale, 0, 180);
        fill(ch2_pupil);
        rect(10 * scale, 55 * scale, 70 * scale, 10 * scale);
        rect(60 * scale, 55 * scale, 10 * scale, 10 * scale);
    }
    else if (mouth_value == 6) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 90 * scale, 70 * scale, 70 * scale, 180, 360);
    }
pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

var mode = faceSelector.value();
  noStroke();

    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
  



  // draw face

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;

  if (mode == '1') {
    for(var i=0; i<3; i++) {
      for(var j=0; j<5; j++) {
        var y = h/2 + h*i;
        var x = w/2 + w*j;
        var ear_length = focusedRandom(80, 350);
      var eye_value = Math.floor(focusedRandom(1, 4));
      var look_direction = focusedRandom(95, 125);
      var mouth_size = focusedRandom(20, 70);
      var orientation_value = Math.floor(focusedRandom(1, 3));
        drawFace1(x, y, w, h, ear_length, eye_value, look_direction, mouth_size, orientation_value);
      }
    }  
  } if (mode == '2') {
    for(var i=0; i<3; i++) {
      for(var j=0; j<5; j++) {
        var y = h/2 + h*i;
        var x = w/2 + w*j;
        var hair_value = focusedRandom(319, 450);
    var mullet_length = focusedRandom(179, 400);
    var fringe_length = focusedRandom(-26, 10);
    var beard_length = focusedRandom(229, 400);
    var mouth_value = Math.floor(focusedRandom(1, 7));
       drawFace2(x, y, w, h, hair_value, mullet_length, fringe_length, beard_length, mouth_value);
      }
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