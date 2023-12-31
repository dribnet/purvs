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
  "lenA": 100,
  "lenB": 150,
  "leanB": -50
}

const letterB = {
  "lenA": 150,
  "lenB": 50,
  "leanB": 0
}

const letterC = {
  "lenA": 100,
  "lenB": 10,
  "leanB": 30
}

const backgroundColor  = "#FFA46B";
const strokeColor      = "#E861C5";

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
  drawLetter(center_x + 0  , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let lenA = letterData["lenA"];
  let lenB = letterData["lenB"];
  let leanB = letterData["leanB"];

  // draw two lines
  strokeWeight(10);
  line(posx, posy, posx+0, posy-lenA);
  strokeWeight(5);
  line(posx+50, posy, posx+50+leanB, posy-lenB);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
