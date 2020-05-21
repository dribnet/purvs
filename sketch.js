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
    "sizeLine": 80,
    "sizeCirc": 30,
    "circX1": 35,
    "circY1": -10,
    "circX2": -75,
    "circY2": -10,
    "lineX1": -100, //left
    "lineY1": -100, //top
    "lineX2": -20,
    "lineY2": 100,
    "lineY3": 100,
   }

const letterB = {
    "sizeLine": 120,
    "sizeCirc": 160,
    "circX1": 0,
    "circY1": 0,
    "lineX1": -110, //left
    "lineY1": 0, //top
    "lineX2": -10,
    "lineY2": 0,
    "lineY3": 0,
   }

const letterC = {
    "sizeLine": 100,
    "sizeCirc": 30,
    "circX1": 35,
    "circY1": -30,
    "circX2": -50,
    "circY2": -10,
    "lineX1": -20, // -20
    "lineY1": -150, // 130
    "lineX2": -70, // ! -70 !
    "lineY2": 20, //! 20 !
    "lineY3": -100, //!

   }

const colorFront1  = "#DB7F8E";
const colorFront2  = "#FFDBDA";
const colorBack    = "#604D53";
const colorStroke  = "#ffffff";

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
  let sizeLine1 = letterData["sizeLine"];
  let sizeCirc1 = letterData["sizeCirc"];
  let circPosX1 = posx + letterData["circX1"];
  let circPosY1 = posy + letterData["circY1"];
  let circPosX2 = posx + letterData["circX2"];
  let circPosY2 = posy + letterData["circY2"];
  let linePosX1 = posx + letterData["lineX1"];
  let linePosY1 = posy + letterData["lineY1"];
  let linePosX2 = posx + letterData["lineX2"];
  let linePosY2 = posy + letterData["lineY2"];
  let linePosY3 = posy + letterData["lineY3"];

  // draw two circles
  fill(colorFront1);
  ellipse(circPosX1, circPosY1, sizeCirc1, sizeCirc1);

  fill(colorFront1);
  ellipse(circPosX2, circPosY2, sizeCirc1, sizeCirc1);

  beginShape();
  fill(colorFront2);
  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);
  endShape();
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
