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
  "offsetx": 0,
  "offsety": 35,
  "corner1": 20,
  "corner2": 20,
  "corner3": 0,
  "corner4": 0
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "corner1": 0,
  "corner2": 20,
  "corner3": 20,
  "corner4": 0
}

const letterC = {
  "size": 100,
  "offsetx": 25,
  "offsety": 0,
  "corner1": 20,
  "corner2": 0,
  "corner3": 0,
  "corner4": 20
}

const backgroundColor  = "#908aff";
const strokeColor      = "#171717";

const orange  = "#eb5e34";
const yellow  = "#ebab34";

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
  let cor1 = letterData["corner1"];
  let cor2 = letterData["corner2"];
  let cor3 = letterData["corner3"];
  let cor4 = letterData["corner4"];

  // draw two circles
  rectMode(CENTER)
  fill(orange);
  rect(posx, posy, 150, 150, cor1, cor2, cor3, cor4);
  fill(yellow);
  rect(pos2x, pos2y, size2, size2, cor1, cor2, cor3, cor4);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
