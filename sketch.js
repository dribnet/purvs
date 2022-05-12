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
  "1Trix1": 0.4,
  "1Triy1": 71,
  "1Trix2": 39.4,
  "1Triy2": -46,
  "1Trix3": 83.4,
  "1Triy3": 71,

  "2Trix1": 37,
  "2Triy1": 11,
  "2Trix2": 68,
  "2Triy2": 62,
  "2Trix3": 15,
  "2Triy3": 62

  //"3Trix1": 23,
  //"3Triy1": 45,
  //"3Trix2": 63,
  //"3Triy2": 12,
  //"3Trix3": 95,
  //"3Triy3": 43
}

const letterB = {
  "1Trix1": 0,
  "1Triy1": -31,
  "1Trix2": 13,
  "1Triy2": -97,
  "1Trix3": 10.8,
  "1Triy3": 89,

  "2Trix1": 13,
  "2Triy1": -1,
  "2Trix2": 72.4,
  "2Triy2": -52,
  "2Trix3": 13,
  "2Triy3": -79,

  "3Trix1": 14.8,
  "3Triy1": 86,
  "3Trix2": 13,
  "3Triy2": 8,
  "3Trix3": 59.2,
  "3Triy3": 56
}

const letterC = {
  "1Trix1": 8.8,
  "1Triy1": 14,
  "1Trix2": 79,
  "1Triy2": -91,
  "1Trix3": 10.8,
  "1Triy3": -82,

  "2Trix1": 38.8,
  "2Triy1": 65,
  "2Trix2": 10.8,
  "2Triy2": -58,
  "2Trix3": -0.2,
  "2Triy3": 50,

  "3Trix1": -4.4,
  "3Triy1": 83,
  "3Trix2": 83.4,
  "3Triy2": 50,
  "3Trix3": 4.2,
  "3Triy3": 11
}

const backgroundColor  = "#640A65";
const strokeColor      = "#03045e";

const darkPink  = "#FD40FF";
const lightPink  = "#FEC3FF";

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
  let pos1x = posx + letterData["1Trix1"];
  let pos1y = posy + letterData["1Triy1"];
  let pos2x = posx + letterData["1Trix2"];
  let pos2y = posy + letterData["1Triy2"];
  let pos3x = posx + letterData["1Trix3"];
  let pos3y = posy + letterData["1Triy3"];

  let pos4x = posx + letterData["2Trix1"];
  let pos4y = posy + letterData["2Triy1"];
  let pos5x = posx + letterData["2Trix2"];
  let pos5y = posy + letterData["2Triy2"];
  let pos6x = posx + letterData["2Trix3"];
  let pos6y = posy + letterData["2Triy3"];

  let pos7x = posx + letterData["3Trix1"];
  let pos7y = posy + letterData["3Triy1"];
  let pos8x = posx + letterData["3Trix2"];
  let pos8y = posy + letterData["3Triy2"];
  let pos9x = posx + letterData["3Trix3"];
  let pos9y = posy + letterData["3Triy3"];

  // draw two circles
  noStroke();
  fill(darkPink);
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  //ellipse(posx, posy, 150, 150);
  fill(lightPink);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  triangle(pos7x, pos7y, pos8x, pos8y, pos9x, pos9y);

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
}
