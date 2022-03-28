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
  "sizeRect_x": 80,
  "sizeRect_y": 150,
  "offsetx": 70,
  "offsety": 35
}

const letterB = {
  "sizeRect_x": 100,
  "sizeRect_y": 100,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "sizeRect_x": 50,
  "sizeRect_y": 50,
  "offsetx": 30,
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

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let sizeRect_x = letterData["sizeRect_x"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  rect(posx, posy, 150, 150);
  fill(lightBlue);
  rect(pos1x, pos1y, sizeRect_x, sizeRect_x);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
