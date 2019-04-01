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
  "sizeX": 60,
  "sizeY": 80,
  "offsetX": 80,
  "offsetY": 200
}

const letterB = {
  "sizeX": 60,
  "sizeY": -200,
  "offsetX": 80,
  "offsetY": 0,
}

const letterC = {
  "sizeX": 60,
  "sizeY": 120,
  "offsetX": 95,
  "offsetY": 180,
}

const colorFront1  = "#D8D8D8";
const colorFront2  = "#888080";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

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
  let sizeX = letterData["sizeX"];
  let sizeY = letterData["sizeY"];
  let offsetX = letterData["offsetX"] -sizeX;
  let offsetY = letterData["offsetY"] - sizeY;



  // ellipse(posx, posy, 150, 150);
  stroke(0,0,0,0);
  fill(colorFront1);
  triangle(50 + posx, 0 + posy, 100 + posx, 200 + posy, 0 + posx, 200 + posy)
  stroke(0,0,0,0);
  fill(colorFront2);
  triangle(offsetX + posx, sizeY + offsetY + posy, sizeX + offsetX + posx, sizeY + offsetY + posy, sizeX / 2 + offsetX + posx, offsetY + posy)
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



