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
  "rect1x": 100,
  "rect1y": 100,
  "rect1w": 35,
  "rect1h": 150,

  "rect2x": 100,
  "rect2y": 100,
  "rect2w": 110,
  "rect2h": 35,

  "rect3x": 175,
  "rect3y": 100,
  "rect3w": 35,
  "rect3h": 150,

  "rect4x": 100,
  "rect4y": 170,
  "rect4w": 110,
  "rect4h": 25 
}

const letterB = {
  "rect1x": 350,
  "rect1y": 100,
  "rect1w": 35,
  "rect1h": 150,

  "rect2x": 350,
  "rect2y": 100,
  "rect2w": 100,
  "rect2h": 75,

  "rect3x": 350,
  "rect3y": 150,
  "rect3w": 110,
  "rect3h": 100,
}

const letterC = {
  "rect1x": 600,
  "rect1y": 100,
  "rect1w": 110,
  "rect1h": 35,

  "rect2x": 600,
  "rect2y": 100,
  "rect2w": 35,
  "rect2h": 150,

  "rect3x": 600,
  "rect3y": 215,
  "rect3w": 110,
  "rect3h": 35,
}

const colorFront1  = "#ff598e";
const colorFront2  = "#fe767b";
const colorFront3  = "#fdb155";
const colorFront4  = "#fcce42";
const colorBack    = "#111c4f";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters - rectangles
  let rect1x = letterData["rect1x"];
  let rect1y = letterData["rect1y"];
  let rect1Width = letterData["rect1w"];
  let rect1Height = letterData["rect1h"];

  let rect2x = letterData["rect2x"];
  let rect2y = letterData["rect2y"];
  let rect2Width = letterData["rect2w"];
  let rect2Height = letterData["rect2h"];

  let rect3x = letterData["rect3x"];
  let rect3y = letterData["rect3y"];
  let rect3Width = letterData["rect3w"];
  let rect3Height = letterData["rect3h"];

  let rect4x = letterData["rect4x"];
  let rect4y = letterData["rect4y"];
  let rect4Width = letterData["rect4w"];
  let rect4Height = letterData["rect4h"];


  // draw shapes
  fill(colorFront4);
  rect(rect4x, rect4y, rect4Width, rect4Height, 20);
  fill(colorFront3);
  rect(rect3x, rect3y, rect3Width, rect3Height, 20);
  fill(colorFront2);
  rect(rect2x, rect2y, rect2Width, rect2Height, 20);
  fill(colorFront1);
  rect(rect1x, rect1y, rect1Width, rect1Height, 20);
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