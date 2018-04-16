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
  "offsetx": 0,
  "offsety": 0,
  "offsetx1": 0,
  "offsety1": 0,
  "offsetx2": 0,
  "offsety2": 0
}

const letterB = {
  "offsetx": 0,
  "offsety": 0,
  "offsetx1": 0,
  "offsety1": 50,
  "offsetx2": 0,
  "offsety2": -50
}

const letterC = {
  "offsetx": -40,
  "offsety": 0,
  "offsetx1": 20,
  "offsety1": 0,
  "offsetx2": 0-20,
  "offsety2": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx1"];
  let pos3y = posy + letterData["offsety1"];
  let pos4x = posx + letterData["offsetx2"];
  let pos4y = posy + letterData["offsety2"];

  // draw two circles
  noStroke();
  fill(255);
  ellipse(posx, posy, 40, 40);
  ellipse(pos2x, pos2y, 80, 80);
  strokeWeight(5);
  stroke(255);
  noFill();
  ellipse(pos3x, pos3y, 60, 60);
  ellipse(pos4x, pos4y, 100, 100);
}

function draw () {
  // clear screen
  background(0);

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
