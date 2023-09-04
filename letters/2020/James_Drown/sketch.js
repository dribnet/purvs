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
  "offset1x": 0,
  "offset1y": 0,
  "offset2x": 0,
  "offset2y": 0,
  "arcStart": 120,
  "arcEnd" : 60
}

const letterB = {
  "size": 80,
  "offset1x": 0,
  "offset1y": 0,
  "offset2x": 0,
  "offset2y": -90,
  "arcStart": 270,
  "arcEnd": 90
}

const letterC = {
  "size": 80,
  "offset1x": 0,
  "offset1y": 0,
  "offset2x": 0,
  "offset2y": 0,
  "arcStart": 30,
  "arcEnd": 330
}

const colorFront1  = "#e71d36";
const colorFront2  = "#ef626c";
const colorBack    = "#e3eded";
const colorStroke  = "#2e282a";

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
  // determine parameters for circles
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offset1x"];
  let pos2y = posy + letterData["offset1y"];
  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  angleMode(DEGREES);

  // draw two circles
  fill(colorFront1);
  arc(posx, posy, 150, 150, arcStart, arcEnd);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
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
