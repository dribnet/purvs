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
  "rx1": 0,
  "ry1": -55,

  "rx2": -50,
  "ry2": -5,

  "rx3": 50,
  "ry3": -5,

  "rx4": -70,
  "ry4": 55,

  "rx5": 70,
  "ry5": 55
}

const letterB = {
  "size": 80,
  "rx1": -30,
  "ry1": -55,

  "rx2": 30,
  "ry2": -55,

  "rx3": -30,
  "ry3": 0,

  "rx4": -30,
  "ry4": 55,

  "rx5": 40,
  "ry5": 55
}

const letterC = {
  "size": 80,
  "rx1": -40,
  "ry1": 0,

  "rx2": 0,
  "ry2": -40,

  "rx3": 60,
  "ry3": -55,

  "rx4": 0,
  "ry4": 40,

  "rx5": 60,
  "ry5": 55
}

const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const darkRed = "#4f0000"
const lightRed = "#cc0000"

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
  let size = letterData["size"];

  let rec1x = posx + letterData["rx1"];
  let rec1y = posy + letterData["ry1"];

  let rec2x = posx + letterData["rx2"]
  let rec2y = posy + letterData["ry2"]

  let rec3x = posx + letterData["rx3"]
  let rec3y = posy + letterData["ry3"]

  let rec4x = posx + letterData["rx4"]
  let rec4y = posy + letterData["ry4"]

  let rec5x = posx + letterData["rx5"]
  let rec5y = posy + letterData["ry5"]

  let rec6x = posx + letterData["rx6"]
  let rec6y = posy + letterData["ry6"]

  let rec7x = posx + letterData["rx7"]
  let rec7y = posy + letterData["ry7"]


  // draw two circles
  noFill();
  rectMode(CENTER)
  noStroke()
  rect(posx, posy, 80, 80);

  stroke(strokeColor)
  rect(rec1x, rec1y, size, size);
  rect(rec2x, rec2y, size, size);
  rect(rec3x, rec3y, size, size);
  rect(rec4x, rec4y, size, size);
  rect(rec5x, rec5y, size, size);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
