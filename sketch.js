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
  "sectionx": 50,
  "sectiony": 0,
  "sectionx1": 0,
  "sectiony1": 80,
  "sectionx2": 0,
  "sectiony2": 80,
}

const letterB = {
  "section3x": 0,
  "section3y": -10,
  "section3x1": 0,
  "section3y1": 80,
  "section3x2": 30,
  "section3y2": 0,
}

const letterC = {
  "section4x": 0,
  "section4y":-10,
  "section4x1": 0,
  "section4y1": 80,
  "section4x2": 10,
  "section4y2": 0
}

const colorFront1  = "#8B8B8B";
const colorFront2  = "#CAA088";
const colorBack    = "#A1B3A4";
const colorStroke  = "#4E5634";

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
  let pos3x2 = posx + letterData["section3x2"];
  let pos3y2 = posy + letterData["section3y2"];

  let pos4x = posx + letterData["section4x"];
  let pos4y = posy + letterData["section4y"];
  let pos4x1 = posx + letterData["section4x1"];
  let pos4y1 = posy + letterData["section4y1"];
  let pos4x2 = posx + letterData["section4x2"];
  let pos4y2 = posy + letterData["section4y2"];

  // draw two circles
  line(pos2x, pos2y, posx1, posy1);
  fill(colorFront1);
  triangle(pos2x, pos2y, pos2x + 10, pos2y +35, pos2x - 9, pos2y + 35,);
  fill(colorFront2);
  triangle(pos2y +35, pos2x - 9, pos2x + 30, posy1, pos2x - 9, posy1,);

  line(pos3x, pos3y, pos3x1, pos3y1);
  fill(colorFront1);
  triangle(pos3x2, pos3y2, pos3x2 + 10, pos3y2 +20, pos3x2 - 10, pos3y2 + 20,);
  fill(colorFront2);
  triangle(pos3x2, pos3y2 + 40, pos3x2 + 10, pos3y2 +60, pos3x2 - 10, pos3y2 + 60,);

  line(pos4x, pos4y, pos4x1, pos4y1);
  fill(colorFront1);
  triangle(pos4x2, pos4y2, pos4x2, pos4y2 - 20, pos4x2 + 20, pos4y2,);
  fill(colorFront2);
  triangle(pos4x2, pos4y2 + 80, pos4x2, pos4y2 + 100, pos4x2 + 20, pos4y2 + 80,);
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
