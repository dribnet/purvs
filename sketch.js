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
  "smallWidth": 50,
  "smallHeight": 100,
  "offsetx": -185,
  "offsety": -210,
  "smallAngle": -15
}

const letterB = {
  "smallWidth": 50,
  "smallHeight": 200,
  "offsetx": -58,
  "offsety": -60,
  "smallAngle": 0
}

const letterC = {
  "smallWidth": 110,
  "smallHeight": 110,
  "offsetx": 20,
  "offsety": 0,
  "smallAngle": 0
}

const colorFront1  = "#349e55";
const colorFront2  = "#75d192";
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
  angleMode(DEGREES);
  // determine parameters for second circle
  let smallWidth2 = letterData["smallWidth"];
  let smallHeight2 = letterData["smallHeight"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let smallAngle2 = letterData["smallAngle"];

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  fill(colorFront2);
  push();
  if(smallAngle2 != 0){
    translate(posx,posy);
    rotate(smallAngle2);
  }
  ellipse(pos2x, pos2y, smallWidth2, smallHeight2);
  pop();
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
