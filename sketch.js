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
  "size": 30,
  "sectionx": 50,
  "sectiony": 0,
  "sectionx1": 0,
  "sectiony1": 80,
  "sectionx2": 0,
  "sectiony2": 80,
}

const letterB = {
  "size": 150,
  "section3x": 0,
  "section3y": -145
}

const letterC = {
  "size": 50,
  "section3x1": 30,
  "section3y1": 0
}

const colorFront1  = "#C6DDFE";
const colorFront2  = "#6A6298";
const colorBack    = "#C4B5CC";
const colorStroke  = "#233f11";

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

  let pos2x = posx + letterData["sectionx"];
  let pos2y = posy + letterData["sectiony"];
  let posx1 = posx + letterData["sectionx1"];
  let posy1 = posy + letterData["sectiony1"];
  let pos2x1 = posx + letterData["sectionx2"];
  let pos2y1 = posy + letterData["sectiony2"];

  let pos3x = posx + letterData["section3x"];
  let pos3y = posy + letterData["section3y"];
  let pos3x1 = posx + letterData["section3x1"];
  let pos3y1 = posy + letterData["section3y1"];

  // draw two circles
  fill(colorFront2);
  line(pos2x, pos2y, posx1, posy1);
  fill(colorFront1);

  triangle(pos2x, pos2y, pos2x + 10, pos2y +35, pos2x - 9, pos2y + 35,);
  triangle(pos2y +35, pos2x - 9, pos2x + 30, posy1, pos2x - 9, posy1,);
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
