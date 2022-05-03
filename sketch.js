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
  "1Trix1": 50,
  "1Triy1": 120,
  "1Trix2": 100,
  "1Triy2": 40,
  "1Trix3": 130,
  "1Triy3": 120,

  "2Trix1": 100,
  "2Triy1": 200,
  "2Trix2": 200,
  "2Triy2": 100,
  "2Trix3": 300,
  "2Triy3": 200,
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
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

  // draw two circles
  noStroke();
  fill(darkBlue);
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  //ellipse(posx, posy, 150, 150);
  fill(lightBlue);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  //ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
