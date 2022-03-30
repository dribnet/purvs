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
  "rectwidth": 80,
  "rectheight": 90,

  "triPositionX": 0,
  "triPositionY": -70
}

const letterB = {
  "rectPositionX": 0,
  "rectPositionY": 50,
  "rectwidth": 80,
  "rectheight": 50,

  "triangleRotate": 90,
  "triPositionX": 20,
  "triPositionY": -40
}

const letterC = {
  "triangleScale": 2,
  "triangleRotate": -90,
  "triPositionX": -40,
  "triPositionY": 0
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
  let triPosX = posx + letterData["triPositionX"];
  let triPosY = posy + letterData["triPositionY"];
  let triscale = letterData["triangleScale"];
  let triRotate = letterData["triangleRotate"];

  // draw two circles
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);

  fill(black);
  rect(posx, posy, 150, 200);

  fill(white);
  rect(rectPosX, rectPosY, rectWidth, rectHeight);

  push();
  translate(triPosX, triPosY);
  fill(white);
  scale(triscale);
  rotate(triRotate);
  triangle(0, 0, 40, 60, - 40, 60);
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
