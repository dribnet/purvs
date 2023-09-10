var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color1 = [238, 234, 240];
var face_stroke = [0, 0, 0];

function drawRandomFace(x, y, w, h, face_value, eye_value, mouth_value, mouth_type_value, nose_value, nose_type_value, cheek_value, cheek_value_on) {
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var alpha_ran = focusedRandom(80, 200);
  var alpha_ran2 = focusedRandom(20, 60);
  var face_col = [247, 236, 212, alpha_ran];
  var eye_col = [119, 156, 82];
  var cheek_col = [224, 125, 229, alpha_ran2];

  //random face variables
  var scale = extent / 220.0;
  var offset = focusedRandom(-8, 8);
  var offset2 = focusedRandom(-3, 3);
  var offset3 = focusedRandom(1, 3);
  var offset4 = focusedRandom(-5, 2);
  var faceW = focusedRandom(0, 25);
  var faceH = focusedRandom(0, 25);
  var faceH2 = focusedRandom(0, 15);

  if (face_value == 1) {
    fill(face_col);
    ellipse(0 + offset, 0 + offset, 100 + faceW, 100 + faceH);

    noFill();
    stroke(face_stroke);
    strokeWeight(0.2);
    ellipse(0, 0, 100 + faceW, 100 + faceH);
    ellipse(0 + offset2, 0 + offset2, 100 + faceW, 100 + faceH2);
  }

  else {
    push();
    rectMode(CENTER);
    rotate(focusedRandom(0, 180, 5));
    fill(face_col);
    rect(0 + offset, 0 + offset, 80 + faceW, 80 + faceH);
    noFill();
    stroke(face_stroke);
    strokeWeight(0.2);
    rect(0, 0, 100 + faceW, 80 + faceH);
    rect(0 + offset2, 0 + offset2, 80 + faceW, 80 + faceH2);
    pop();

    noFill();
    stroke(face_stroke);
    strokeWeight(0.2);
  }


  // eyes
  if (eye_value == 1) {
    // blue eyes
    alpha_ran2 = focusedRandom(80, 200);
    noStroke();
    fill(120, 152, 255, alpha_ran2);
    ellipse(20 + offset2, -20 + offset2, 10 + offset4, 10 + offset4);
    ellipse(-20 + offset2, -20 + offset2, 10 + offset4, 10 + offset4);
    strokeWeight(.4);
    stroke(0, 0, 0);
  }

  if (eye_value == 2) {
    // black with under eyes
    push();
    fill(0, 0, 0);
    ellipse(15, -15, 7, 7);
    ellipse(-15, -15, 7, 7);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(.3);
    ellipse(-15, -15 + offset3, 7 , 7);
    ellipse(15, -15 + offset3, 7, 7);
    pop();
  }

  if (eye_value == 3) {
    alpha_ran3 = focusedRandom(10, 150);
    // green cross eyes
    strokeWeight(.5);
    line(-20 + offset2, -20, -10, -10);
    line(-10 + offset3, -20, -20, -10);
    push();
    strokeWeight(.5);
    translate(32, 0);
    line(-20, -20 + offset3, -10, -10);
    line(-10, -20 + offset2, -20, -10);

    noStroke();
    fill(119, 156, 82, alpha_ran3);
    ellipse(-15, -15, 10 + offset4, 10 + offset4);
    ellipse(-46, -15, 10 + offset4, 10 + offset4);
    pop();
    noFill();
  }

  if (eye_value == 4) {
    // arch eyes with circle
    strokeWeight(.7);
    arc(-20, -10, 10 + offset, 10 + offset, 180, PI);
    arc(20, -10, 10 + offset, 10 + offset, 180, PI);
    ellipse(20, -8, 5 + offset2, 5 + offset2);
    ellipse(-20, -8, 5 + offset2, 5 + offset2);
  }


  // nose and brow
  // right facing nose
  if (nose_type_value == 1 & eye_value != 4){
    strokeWeight(0.4);
    // left brow
    line(-30 + offset2, -30, 0, -30);
    // right brow
    line(30, -30, 10 + offset2, -30 + offset2);
    // nose
    line(0, -30, -10, 0 + nose_value);
    line(-10, 0 + nose_value, 5, 0 + nose_value);
  }

  // left facing nose
  if (nose_type_value == 2 & eye_value != 4){
    strokeWeight(0.4);
    // right brow
    line(30 + offset, -30 + offset2, 10, -30);
    // left brow
    line(-32, -30, 0, -30);
    // nose
    line(0, -30, 10, 0 + nose_value);
    line(10, 0 + nose_value, 5, 0 + nose_value);
  }

  // angle brows and nose
  if (nose_type_value == 3 & eye_value != 4){
    strokeWeight(0.4);
    // left brow
    line(-12, -35, -5, -20);
    line(-12, -35, -35 + nose_value/2, -30);
    // right brow
    line(12, -35, 5, -20);
    line(12, -35, 30 + nose_value/2, -20);
    // nose
    line(4, -15, 5, 5 + nose_value/2);
    line(-4, -15, -5, 5 + nose_value/2);
    // nose bottom
    line(0, 10 + nose_value/2, -10, 5 + nose_value/2);
    line(0, 10 + nose_value/2, 10, 5 + nose_value/2);
  }

  // straight brows, angle nose
  if (nose_type_value == 4 & eye_value != 4){
    strokeWeight(0.4);
    // right brow
    line(30, -30 + nose_value/4, 5, -30 + nose_value/4);
    // left brow
    line(-30, -30 + nose_value/4, -5, -30 + nose_value/4);
    // nose
    line(4, -15, 5, 5 + nose_value/2);
    line(-4, -15, -5, 5 + nose_value/2);
    // nose bottom
    line(0, 10 + nose_value/2, -10, 5 + nose_value/2);
    line(0, 10 + nose_value/2, 10, 5 + nose_value/2);
  }

  if (eye_value == 4 || nose_type_value ==5) {
    // nose bottom
    noFill();
    strokeWeight(0.4);
    line(-5, 10 + nose_value/2, -10, 5 + nose_value/2);
    line(5, 10 + nose_value/2, 10, 5 + nose_value/2);
    line(0, -15 - nose_value, 10, 5 + nose_value/2);
    line(-5, 10 + nose_value/2, 5, 10 + nose_value/2);
    if (eye_value != 4){
      strokeWeight(0.4);
      // right brow
      line(30, -30 + nose_value/4, 5, -30 + nose_value/4);
      // left brow
      line(-30, -30 + nose_value/4, -5, -30 + nose_value/4);
    }
  }


  // mouth
  if (nose_type_value == 3 || nose_type_value == 4 || mouth_type_value == 1){
    push();
    noFill();
    rotate(180);
    strokeWeight(0.5);
    arc(0, -20 - nose_value/2, 30 * mouth_value, 20 * mouth_value, 180, PI);
    pop();
    
  } 

  else/* if (mouth_value == 1) */{
    push();
    noFill();
    rotate(180);
    strokeWeight(0.5);
    ellipse(0, -20 - nose_value/1.5, 10 * mouth_value, 10 * mouth_value);
    pop();
  }

  if (cheek_value_on > 1){
    // cheeks
    // left
    noStroke();
    fill(cheek_col);
    ellipse(-35, 0 + cheek_value, 20 + cheek_value, 20 + cheek_value);
    // right
    noStroke();
    fill(cheek_col);
    ellipse(35, 0 + cheek_value, 20 + cheek_value, 20 + cheek_value);
  }

  pop();
}

// distribution

function getRandomSetOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 4;
  }
  else if(random_result < 20) {
    return 2;
  }
  else if(random_result < 50) {
    return 3;
  }
  else {
    return 1;
  }
}

function getRandomFace() {
  random_result = focusedRandom(0, 100);
  if(random_result < 30) {
    return 2;
  }
  else {
    return 1;
  }
}

function getRandomNoseType() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 4;
  }
  if(random_result < 15) {
    return 3;
  }
  if(random_result < 40) {
    return 5;
  }
  if(random_result < 50) {
    return 2;
  }
  else {
    return 1;
  }
}

var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // draw face
  fill(bg_color1);

  var w = canvasWidth / 8.2 - 10.5;
  var h = canvasHeight / 5;
  for(var i=0; i<5; i++) {
    for(var j=0; j<8.2; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      eye_value = getRandomSetOfEyes();
      face_value = getRandomFace();
      mouth_value = focusedRandom(0.5, 2);
      mouth_type_value = Math.floor(focusedRandom(1,3,1,1));
      nose_value = focusedRandom(-5, 20);
      nose_type_value = getRandomNoseType();
      cheek_value = focusedRandom(0, 8);
      cheek_value_on = focusedRandom(0, 2);
      drawRandomFace(x, y, w, h, face_value, eye_value, mouth_value, mouth_type_value, nose_value, nose_type_value, cheek_value, cheek_value_on);
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
