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
  "offsetx1":-75,
  "offsety1":75,
  "offsetx2":75,
  "offsety2":75,
  "offsetx3":0,
  "offsety3":-75
}

const letterB = {
  "offsetx1":-75,
  "offsety1":-75,
  "offsetx2":-75,
  "offsety2":75,
  "offsetx3":75,
  "offsety3":50
}

const letterC = {
  "offsetx1":75,
  "offsety1": -75,
  "offsetx2":75,
  "offsety2":75,
  "offsetx3":-75,
  "offsety3":0
}

const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorBack    = "#dddddd";
const colorStroke  = "#AAAAAA";

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
  rectMode(CENTER);

  let pos2x = posx + letterData["offsetx1"];
  let pos2y = posy + letterData["offsety1"];
  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];
  let pos4x = posx + letterData["offsetx3"];
  let pos4y = posy + letterData["offsety3"];

  // draw two circles
  fill(colorFront1);
  rect(posx,posy,150,150);
  fill(colorFront2);
  triangle(pos2x,pos2y,pos4x,pos4y,pos3x,pos3y);
  fill(colorStroke);
  triangle(pos2x,pos2y,posx,posy,pos3x,pos3y);
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
