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
  "size1": 100,
  "size2": 120,
  "offsetx": 0,
  "offsety": 30
}

const letterB = {
  "size1": 100,
  "size2": 70,
  "offsetx": 30,
  "offsety": 30
}

const letterC = {
  "size1": 100,
  "size2": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#1B1918";
const strokeColor      = "#1B1918";

const white  = "#ffffff";
const black  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(6);

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
  let size1 = letterData["size1"];
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(white);
  ellipse(posx, posy, 150, 150);
  fill(black);
  ellipse(pos2x, pos2y, size1, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
