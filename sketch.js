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
  "size": 60,
  "offsetx": 45,
  "offsety": 35
}

const letterB = {
  "size": 60,
  "offsetx": 45,
  "offsety": 15
}

const letterC = {
  "size": 60,
  "offsetx": 90,
  "offsety": 40
}

const backgroundColor  = "#ffb3ff";
const strokeColor      = "#0000b3";

const darkGrey  = "#282626";
const darkRed  = "#AF0A37";

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
  drawLetter(center_x - 400, center_y, letterA);
  drawLetter(center_x - 100  , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(darkGrey);
  rect(posx, posy, 150, 200);
  fill(darkRed);
  rect(pos2x, pos2y, size2, size2+50);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
