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
  "size1": 1,
  "size3": 1,
  "offsetx1": 77,
  "offsety1": -75,
  "offsetx2": 24,
  "offsety2": -109,
  "offsetx3": 0,
  "offsety3": -72,
  "tilt1": 0,
  "tilt2": 0,
  "tilt3": 32,
  "tilt4": 32
}

const letterB = {
  "size1": 0.9,
  "size3": 0.9,
  "offsetx1": -23,
  "offsety1": -60,
  "offsetx2": 12,
  "offsety2": -55,
  "offsetx3": 7,
  "offsety3": -140,
  "tilt1": -15,
  "tilt2": -90,
  "tilt3": 110,
  "tilt4": 90
}

const letterC = {
  "size1": 1,
  "size3": 1.5,
  "offsetx1": 4,
  "offsety1": -135,
  "offsetx2": 24,
  "offsety2": -70,
  "offsetx3": -10,
  "offsety3": -130,
  "tilt1": 60,
  "tilt2": 55,
  "tilt3": -160,
  "tilt4": 71

}
const colorFront  = "#033806";//green rgb(3, 56, 6)
const colorBack   = "#f5f4f7";//sliver rgb(245, 244, 247)
const colorStroke = "#233f11";//darkgreen rgb(35, 63, 17)

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);
  // color/stroke setup
  fill(colorFront);
  noStroke();
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  
  // determine parameters for second circle
  let sizeR1 = letterData["size1"];
  let sizeR3 = letterData["size3"];
  let posR2x = posx + letterData["offsetx1"];
  let posR2y = posy + letterData["offsety1"];
  let posR3x = posx + letterData["offsetx2"];
  let posR3y = posy + letterData["offsety2"];
  let posR4x = posx + letterData["offsetx3"];
  let posR4y = posy + letterData["offsety3"];
  let R1 = letterData["tilt1"];
  let R2 = letterData["tilt2"];
  let R3 = letterData["tilt3"];
  let R4 = letterData["tilt4"];

  push();
  fill(53, 124, 59, 180);
  translate(posx, posy);
  scale(sizeR1);
  rotate(R1);
  triangle(0, 0, -50, 0, 50, -150);
  pop();

  push();
  fill(122, 188, 166, 150);
  translate(posR2x, posR2y);
  rotate(R2);
  triangle(0, 0, -25, 75, 25, 75);
  pop();

  push();
  fill(122, 188, 130, 150);
  translate(posR3x, posR3y);
  scale(sizeR3);
  rotate(R3);
  triangle(0, 0, 0, -48, 63, 0);
  pop();

  push();
  fill(61, 112, 10, 100);
  translate(posR4x, posR4y);
  rotate(R4);
  triangle(0, 0, 0, -45, 65, -45);
  pop();

 
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
