const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "x": 38,
  "y": 70,
  "2x": 18,
  "2y": 158,
  "3x": 44,
  "3y": 36,
  "4x": 76,
  "4y": 126,
  "5x": 38,
  "5y": 126,
  "6x": 76,
  "6y": 126,
}

const letterB = {
  "x": 32,
  "y": 28.000000000000004,
  "2x": 32,
  "2y": 96,
  "3x": 84,
  "3y": 28.000000000000004,
  "4x": 34,
  "4y": 28.000000000000004,
  "5x": 82,
  "5y": 102,
  "6x": 32,
  "6y": 102,
  "7x": 82,
  "7y": 102,
  "8x": 82,
  "8y": 162
}

const letterC = {
  "x": 22,
  "y": 24,
  "2x": 78,
  "2y": 24,
  "3x": 22,
  "3y": 148,
  "4x": 22,
  "4y": 24,
  "5x": 78,
  "5y": 166,
  "6x": 24,
  "6y": 166,
}
//background
const colorBack    = "#7987a1";
//stroke
const colorStroke  = "#f4d2d0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for lines
  let l1x = posx + letterData["x"];
  let l1y = posy + letterData["y"];
  let l2x = posx + letterData["2x"];
  let l2y = posy + letterData["2y"];
  let l3x = posx + letterData["3x"];
  let l3y = posy + letterData["3y"];
  let l4x = posx + letterData["4x"];
  let l4y = posy + letterData["4y"];
  let l5x = posx + letterData["5x"];
  let l5y = posy + letterData["5y"];
  let l6x = posx + letterData["6x"];
  let l6y = posy + letterData["6y"];
  let l7x = posx + letterData["7x"];
  let l7y = posy + letterData["7y"];
  let l8x = posx + letterData["8x"];
  let l8y = posy + letterData["8y"];

  // draw lines
  fill(colorStroke);
  line(l1x,l1y,l2x,l2y);
  fill(colorStroke);
  line(l3x,l3y,l4x,l4y);
  fill(colorStroke);
  line(l5x,l5y,l6x,l6y);
  fill(colorStroke);
  line(l7x,l7y,l8x,l8y);
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
