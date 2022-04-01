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
  "sizeEll_x": 50,
  "sizeEll_y":100,
  "offsetx": 2,
  "offsety": 25
}

const letterB = {
  "sizeEll_x": 100,
  "sizeEll_y": 100,
  "offsetx": 0,
  "offsety": -125
}

const letterC = {
  "sizeEll_x": 110,
  "sizeEll_y": 100,
  "offsetx": 22,
  "offsety": 0
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

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

function drawLetter(ell_x, ell_y, letterData) {
  // determine parameters for second circle
  let sizeEll_x = letterData["sizeEll_x"];
  let sizeEll_y = letterData["sizeEll_y"];
  let ell1_x = ell_x + letterData["offsetx"];
  let ell1_y = ell_y + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  ellipse(ell_x, ell_y, 150, 150);
  fill(lightBlue);
  ellipse(ell1_x, ell1_y, sizeEll_x, sizeEll_y);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
