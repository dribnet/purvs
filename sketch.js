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

const number0 = {
  "sq1x": -20,
  "sq1y": -75,
  "sq2x": -20,
  "sq2y": 30,
  "rect1x": -45,
  "rect1y": -25,
  "rect2x": -20,
  "rect2y": -50
}

const number1 = {
  "sq1x": 30,
  "sq1y": 0,
  "sq2x": 30,
  "sq2y": -50,
  "rect1x": 30,
  "rect1y": -100,
  "rect2x": -70,
  "rect2y": -50
}

const number2 = {
  "sq1x": -20,
  "sq1y": 0,
  "sq2x": 30,
  "sq2y": 0,
  "rect1x": -90,
  "rect1y": -75,
  "rect2x": -80,
  "rect2y": -130
}

const colorFront1  = "#efab4b";
const colorFront2  = "#d9ef4b";
const colorBack    = "#d9ef4b";
const colorStroke  = "#d9ef4b";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle

  let pos1x = posx + letterData["sq1x"];
  let pos1y = posy + letterData["sq1y"];
  let pos2x= posx + letterData["sq2x"];
  let pos2y = posy + letterData["sq2y"];
  let pos3x= posx + letterData["rect1x"];
  let pos3y = posy + letterData["rect1y"];
  let pos4x= posx + letterData["rect2x"];
  let pos4y = posy + letterData["rect2y"];

  // draw one rect
  fill(colorFront1);
  rect(posx -70, posy -100, 150, 200);
  //draw two squares, two rectangles
  fill(colorFront2);
  rect(pos1x, pos1y, 50, 50);
  rect(pos2x, pos2y, 50, 50);
  rect(pos3x, pos3y, 100, 50);
  rect(pos4x, pos4y, 50, 100);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters 0, 1, 2 from saved data
  drawLetter(center_x - 250, center_y, number0);
  drawLetter(center_x      , center_y, number1);
  drawLetter(center_x + 250, center_y, number2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
