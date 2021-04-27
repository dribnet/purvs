const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my ten variable per letter are:
 *
   five x and y coordinates to map out each letter
 *
 */

const letterA = {
  "x1": 200,
  "x2": 0,
  "x3": 0,
  "x4": 0,
  "x5": 100,

  "y1": 200,
  "y2": 0,
  "y3": 200,
  "y4": 100,
  "y5": 100,
}

const letterB = {
  "x1": 0,
  "x2": 200,
  "x3": 0,
  "x4": 0,
  "x5": 0,

  "y1": 200,
  "y2": 150,
  "y3": 100,
  "y4": 0,
  "y5": 200,
}

const letterC = {
  "x1": 200,
  "x2": 0,
  "x3": 200,
  "x4": 200,
  "x5": 200,

  "y1": 0,
  "y2": 100,
  "y3": 200,
  "y4": 200,
  "y5": 200,
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

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
  drawLetter(center_x     , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  rectMode(CENTER);
  // determine parameters for lines
  let pos1x = posx + letterData["x1"];
  let pos2x = posx + letterData["x2"];
  let pos3x = posx + letterData["x3"];
  let pos4x = posx + letterData["x4"];
  let pos5x = posx + letterData["x5"];
  

  let pos1y = posy + letterData["y1"];
  let pos2y = posy + letterData["y2"];
  let pos3y = posy + letterData["y3"];
  let pos4y = posy + letterData["y4"];
  let pos5y = posy + letterData["y5"];

  // draws lines
  line(pos1x, pos1y, pos2x, pos2y);
  line(pos2x, pos2y, pos3x, pos3y);
  line(pos3x, pos3y, pos4x, pos4y);
  line(pos4x, pos4y, pos5x, pos5y);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
