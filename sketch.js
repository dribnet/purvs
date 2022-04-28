const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "rectPositionX": 0,
  "rectPositionY": 60,
  "rectwidth": 60,
  "rectheight": 90,

  "triPosition1X": 0,
  "triPosition1Y": -70,
  "triPosition2X": 30,
  "triPosition2Y": -10,
  "triPosition3X": -30,
  "triPosition3Y": -10

}

const letterB = {
  "rectPositionX": 0,
  "rectPositionY": 50,
  "rectwidth": 60,
  "rectheight": 50,

  "triPosition1X": -30,
  "triPosition1Y": -10,
  "triPosition2X": -30,
  "triPosition2Y": -70,
  "triPosition3X": 30,
  "triPosition3Y": -40
}

const letterC = {
  "rectPositionX": 0,
  "rectPositionY": 0,
  "rectwidth": 0,
  "rectheight": 0,

  "triPosition1X": -50,
  "triPosition1Y": 0,
  "triPosition2X": 50,
  "triPosition2Y": -100,
  "triPosition3X": 50,
  "triPosition3Y": 100
}

const backgroundColor  = "#ffffff";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const black  = "#000000";
const white  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let rectPosX = posx + letterData["rectPositionX"];
  let rectPosY = posy + letterData["rectPositionY"];
  let rectWidth = letterData["rectwidth"];
  let rectHeight = letterData["rectheight"];

  let tri1X = posx + letterData["triPosition1X"];
  let tri1Y = posy + letterData["triPosition1Y"];
  let tri2X = posx + letterData["triPosition2X"];
  let tri2Y = posy + letterData["triPosition2Y"];
  let tri3X = posx + letterData["triPosition3X"];
  let tri3Y = posy + letterData["triPosition3Y"];

  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);

  fill(black);
  rect(posx, posy, 100, 200);

  fill(white);
  rect(rectPosX, rectPosY, rectWidth, rectHeight);

  push();
  fill(white);
  beginShape();
  vertex(tri1X, tri1Y);
  vertex(tri2X, tri2Y);
  vertex(tri3X, tri3Y);
  endShape();
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
