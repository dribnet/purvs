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
  "RScale": 20,
  "R1x": 30,
  "R1y": -100,
  "T1x": 80,
  "T1y": 20
}

const letterB = {
  "RScale": 50,
  "R1x": 0,
  "R1y": -50,
  "T1x": -6,
  "T1y": -125
}

const letterC = {
  "RScale": 40,
  "R1x": 30,
  "R1y": -100,
  "T1x": -60,
  "T1y": -27
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#f3f3e7";
const colorStroke  = "#231f1C";

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
  let size2 = letterData["RScale"];
  let pos2x = posx + letterData["R1x"];
  let pos2y = posy + letterData["R1y"];
  let pos3x = posx + letterData["T1x"];
  let pos3y = posy + letterData["T1y"];

  // draw two circles
  fill(32,28,27,255);
  noStroke();
  rect(posx, posy-100, 50, 150);
  
  push();
  fill(37,108,160,255);
  triangle(100+posx, 50+posy, pos2x, pos2y, 86+pos3x, 75+pos3y);
  pop();

  fill(248,136,28,255);
  rect(pos2x, pos2y, size2, size2); 
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