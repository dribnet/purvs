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
  "size" : 100,
  "size2": 80,
  "X2": 10,
  "Y2": 0,
  "start": 120,
  "end" : -60,
  "start2": 240,
  "end2": 60
}

const letterB = {
  "size" : 100,
  "size2": 70,
  "X2": -20,
  "Y2": +30,
  "start": 90,
  "end" : -90,
  "start2": 240,
  "end2": 60
}

const letterC = {
  "size" : 100,
  "size2": 70,
  "X2": 10,
  "Y2": 10,
  "start": 90,
  "end" : -90,
  "start2" : 90,
  "end2": 270
}

const colorFront1  = "#f55a42";
const colorFront2  = "#42b6f5";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

const red1 = 250;
const green1 = 255;
const blue1 = 0;
const red2 = 250;
const green2 = 0;
const blue2 = 175;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size = letterData["size"];
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["X2"];
  let pos2y = posy + letterData["Y2"];
  let start2 = letterData["start2"];
  let end2 = letterData["end2"];
  let start = letterData["start"];
  let end = letterData["end"];


  // draw two arcs
  fill(red1, green1, blue1, 150);
  angleMode(DEGREES);
  arc(posx, posy, size, size, start, end);
  fill(red2, green2, blue2, 150);
  arc(pos2x, pos2y, size2, size2, start2, end2);
  
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
