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

  "triangleX": 0,
  "triangleY": -15,
  "triangleScale": 1.2
}

const letterB = {

  "triangleX": 50,
  "triangleY": -120,
  "triangleScale": 1.5,
  "triangleRotate": 90
}

const letterC = {

  "triangleX": -10,
  "triangleY": 0,
  "triangleScale": 1.2,
  "triangleRotate": 270
}

const backgroundColor  = "#ffffff";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const white = "#ffffff";
const purple = "#a93fe2";



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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let triX = posx + letterData["triangleX"];
  let triY = posy + letterData["triangleY"];
  let triscale = letterData["triangleScale"];
  let triRotate = letterData["triangleRotate"];


  // draw two circles
  angleMode(DEGREES);

  fill(lightBlue);
  ellipse(posx, posy, 150, 150);
  //fill(lightBlue);
  //ellipse(pos2x, pos2y, size2, size2);

  push();
  noStroke();
  fill(purple);
  translate(triX, triY);
  scale(triscale);
  rotate(triRotate);
  triangle(0, 0, 50, 75, -50, 75);
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
