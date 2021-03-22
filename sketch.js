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
  "size": 100,
  "offsetx": 0,
  "offsety": -45,
  "rotation":45
}

const letterB = {
  "size": 70,
  "offsetx": 45,
  "offsety": 3,
  "rotation":45
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 0,
  "rotation":100
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkPurple  = "#582C70";
const lightPurple  = "#BD5DF0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES);
  rectMode(CENTER);

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

  // draw two circles
  fill(darkPurple);
  ellipse(posx, posy, 150, 150);
  fill(lightPurple);
  push();
  translate(pos2x, pos2y);
  rotate(letterData["rotation"]);
  rect(0, 0, size2, size2);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
