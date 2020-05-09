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
  "arch": 100,
  "arcw": 80,
  "ell": 80,
  "offsetx": 0,
  "offsety": 0
  
}

const letterB = {
  "arch": 150,
  "arcw": 80,
  "ell": 80,
  "offsetx": 0,
  "offsety": 0
}

const letterC = {
  "arch": 100,
  "arcw": 100,
  "ell": 80,
  "offsetx": 0,
  "offsety": 0
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["arch"];
  let size2 = letterData["arcw"];
  let size3 = letterData["ell"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, size3);
  fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);
 //arc(pos2x, pos2y, size1, size2, 180,0);
 triangle(posx, posy, posx + 30, posy + 50, posx + 60, posy);
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
