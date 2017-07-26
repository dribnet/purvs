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
var bg_color1 = [255, 255, 255];
var face_stroke = [0, 0, 0];

function drawRandomFace(x, y, w, h, eye_value, mouth_value) {
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
  var face_col = [247, 236, 212, alpha_ran];
  var eye_col = [119, 156, 82];

  //random face variables
  var scale = extent / 220.0;
  var offset = focusedRandom(-8, 8);
  var offset2 = focusedRandom(-3, 3);
  var offset3 = focusedRandom(1, 3);
  var faceW = focusedRandom(0, 25);
  var faceH = focusedRandom(0, 25);
  var faceH2 = focusedRandom(0, 15);

  fill(face_col);
  ellipse(0 + offset, 0 + offset, 100 + faceW, 100 + faceH);

  noFill();
  stroke(face_stroke);
  strokeWeight(0.2);
  ellipse(0, 0, 100 + faceW, 100 + faceH);
  ellipse(0 + offset2, 0 + offset2, 100 + faceW, 100 + faceH2);

  // eyes
  if (eye_value == 1) {
    // blue eyes
    alpha_ran2 = focusedRandom(80, 200);
    noStroke();
    fill(120, 152, 255, alpha_ran2);
    ellipse(20 + offset2, -20 + offset2, 10, 10);
    ellipse(-20 + offset2, -20 + offset2, 10, 10);
    stroke(0, 0, 0);
    line(-30 + offset2, -25, -15, -30);
    line(30, -25, 15, -30 + offset2);
  }

  if (eye_value == 2) {
    // black with under eyes
    fill(0, 0, 0);
    ellipse(15 + offset, -15, 7, 7);
    ellipse(-15, -15, 7, 7);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(.3);
    ellipse(-15, -15 + offset3, 7 , 7);
    ellipse(15 + offset, -15 + offset3, 7, 7);
  }

  if (eye_value == 3) {
    alpha_ran2 = focusedRandom(50, 150);
    // green cross eyes
    strokeWeight(.5);
    line(-20 + offset2, -20, -10, -10);
    line(-10 + offset3, -20, -20, -10);
    translate(32, 0);
    line(-20, -20 + offset3, -10, -10);
    line(-10, -20 + offset2, -20, -10);
    noStroke();
    fill(119, 156, 82, alpha_ran2);
    ellipse(-15, -15, 10 + offset2, 10 + offset2);
    ellipse(-46, -15, 10 + offset2, 10 + offset2);
    noFill();
  }

  if (eye_value == 4) {
  // arc eyes
  strokeWeight(.7);
  arc(-20, -10, 10 + offset, 10 + offset, 180, PI);
  arc(20, -10, 10 + offset, 10 + offset, 180, PI);
  }

  if (eye_value == 5) {
  // arch eyes with circle
  strokeWeight(.7);
  arc(-20, -10, 10 + offset, 10 + offset, 180, PI);
  arc(20, -10, 10 + offset, 10 + offset, 180, PI);
  ellipse(20, -8, 5 + offset2, 5 + offset2);
  ellipse(-20, -8, 5 + offset2, 5 + offset2);
  }

  if (eye_value == 6) {
  // arch eyes with circle
  strokeWeight(focusedRandom(.5, 3));
  line(-28, -10, -8, -10);
  line(28, -10, 8, -10);
  }

  // mouth
  //fill(bg_color1);
  //ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // draw face
  fill(bg_color1);

  eye_value = Math.floor(focusedRandom(1, 7));
  mouth_value = focusedRandom(30, 140);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      eye_value = int(focusedRandom(1, 7));
      mouth_value = focusedRandom(30, 140);
      drawRandomFace(x, y, w, h, eye_value, mouth_value);
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
