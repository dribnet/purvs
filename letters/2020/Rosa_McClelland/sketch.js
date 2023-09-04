const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "leaf2Posx": 50,
  "leaf2Posy": 0,
  "rotate1": 30,
  "rotate2": -30,
  "rotate3": -90,
  "stickPosx": -35,
  "stickPosy": 30
}

const letterB = {
  "leaf2Posx": 0,
  "leaf2Posy": -90,
  "rotate1": 90,
  "rotate2": 90,
  "rotate3": 0,
  "stickPosx": -60,
  "stickPosy": -100
}

const letterC = {
  "leaf2Posx": 0,
  "leaf2Posy": -75,
  "rotate1": -45,
  "rotate2": 45,
  "rotate3": 45,
  "stickPosx": 40,
  "stickPosy": -120
}

const colorFront1  = "#38ad1f";
const colorLeaf  = "#66cf51";
const colorBack    = "#e3eded";
const colorStick = "#a15f45";
const colorStroke  = "#38ad1f";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(leaf1Posx, leaf1Posy, letterData) {
  // determine parameters for second circle
  let leaf2Posx = leaf1Posx + letterData["leaf2Posx"];
  let leaf2Posy = leaf1Posy + letterData["leaf2Posy"];
  let angle1 = letterData["rotate1"];
  let angle2 = letterData["rotate2"];
  let angle3 = letterData["rotate3"];
  let stickPosx = leaf1Posx + letterData["stickPosx"];
  let stickPosy = leaf1Posy + letterData["stickPosy"];
  
  fill(colorLeaf);
  stroke(colorStroke);
  strokeWeight(4);
  push();
  translate(leaf1Posx,leaf1Posy);
  rotate(angle1);
  ellipse(0, 0, 90, 150);
  pop();
  
  push();
  translate(leaf2Posx,leaf2Posy);
  rotate(angle2);
  ellipse(0, 0, 90, 150);
  pop();

  fill(colorStick);
  noStroke();
  push();
  translate(stickPosx,stickPosy);
  rotate(angle3);
  rect(0, 0, 10, 120);
  pop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y-20, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y-20, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
