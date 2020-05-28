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
  "squareSize": 50,
  "offsetx": -50,
  "offsety": -25,
  "circleSize": 20,
  "offsetCirclex": -50,
  "offsetCircleY": -100
}

const letterB = {
  "squareSize": 50,
  "offsetx": -50,
  "offsety": -50,
  "circleSize": 20,
  "offsetCirclex": 100,
  "offsetCircleY": 150
}

const letterC = {
  "squareSize": 50,
  "offsetx": -25,
  "offsety": -50,
  "circleSize": 20,
  "offsetCirclex": 100,
  "offsetCircleY": -100
}

const colorFront1  = "#F50078";
const colorFront2  = "#F75C03";
const colorFront3  = "#30E510";
const colorBack    = "#040A32";

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
  // determine parameters for second circle
  let size2 = letterData["squareSize"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let size3 = letterData["circleSize"];
  let posCx = posx + letterData["offsetCirclex"];
  let posCy = posy + letterData["offsetCircleY"];

  // draw two circles
  fill(colorFront1);
  rect(posx, posy, 50, 50);
  fill(colorFront2);
  rect(pos2x, pos2y, size2, size2);
  fill(colorFront3);
  circle(posCx, posCy, size3);
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