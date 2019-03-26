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
  "offsetx": -50,
  "offsety": 105,

  "offsetx2": 50,
  "offsety2": 105
}

const letterB = {
  "size": 80,
  "offsetx": 90,
  "offsety": -40,

  "offsetx2": 90,
  "offsety2": 40
}

const letterC = {
  "size": 80,
  "offsetx": 80,
  "offsety": -90,

  "offsetx2": 80,
  "offsety2": 90
}

const colorFront1  = "#fa00ff";
const colorFront2  = "#4b78ff";
const colorBack    = "#2b2b2b";
const colorStroke  = "#1e1e1e";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];

  // draw three circles
  fill(colorFront1);
  ellipse(posx, posy, 100, 150);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);

  fill(colorFront2);
  ellipse(pos3x, pos3y, size2, size2);
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
