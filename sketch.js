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
  "size": 80,
  "offsetx1": 77,
  "offsety1": -75,
  "offsetx2": 24,
  "offsety2": -109,
  "offsetx3": -2,
  "offsety3": -73,
  "tilt1": 0,
  "tilt2": 0,
  "tilt3": 32,
  "tilt4": 34
}

const letterB = {
  "size": 150,
  "offsetx1": 0,
  "offsety1": 35,
  "offsetx2": 0,
  "offsety2": 35,
  "offsetx3": 0,
  "offsety3": 35,
  "tilt1": 0,
  "tilt2": 0,
  "tilt3": 150,
  "tilt4": -30
}

const letterC = {
  "size": 100,
  "offsetx1": 0,
  "offsety1": 35,
  "offsetx2": 0,
  "offsety2": 35,
  "offsetx3": 0,
  "offsety3": 35,
  "tilt1": 0,
  "tilt2": 0,
  "tilt3": 0,
  "tilt4": 0
}

//const colorFront  = "#199cff";//blue
//const colorBack   = "#e3eded";//lightblue
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
  /*
  stroke(colorStroke);
  strokeWeight(1);*/

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
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

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
  
  push();
  translate(posx, posy);
  rotate(R1);
  triangle(0, 0, -50, 0, 50, -150);
  //text("rotation =" + RotateData, -30, -30);
  pop();

  push();
  translate(posR2x, posR2y);
  rotate(R2);
  triangle(0, 0, -25, 75, 25, 75);
  pop();

  push();
  fill(0);
  translate(posR3x, posR3y);
  rotate(R3);
  triangle(0, 0, 0, -48, 63, 0);
  pop();

  push();
  fill(255);
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
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
