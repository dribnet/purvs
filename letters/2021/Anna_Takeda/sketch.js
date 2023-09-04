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
  "size": 90,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "size": 100,
  "offsetx": 50,
  "offsety": -100
}

const letterC = {
  "size": 100,
  "offsetx": 0,
  "offsety": 25
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#56800a";
const lightBlue  = "#8dcc18";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  // // draw two circles
  // fill(darkBlue);
  // ellipse(posx, posy, 150, 150);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);

  // draw two triangles A
  noStroke();
  fill(86, 128, 10);
  triangle(canvasWidth / 2 - 250, canvasHeight / 2 -25, canvasWidth / 2 - 220, canvasHeight / 2 +25, canvasWidth / 2 - 280, canvasHeight / 2 +25);
  fill(141, 204, 24);
  quad(canvasWidth / 2 - 282, canvasHeight / 2 +30, canvasWidth / 2 - 218, canvasHeight / 2 +30, canvasWidth / 2 - 188, canvasHeight / 2 +80, canvasWidth / 2 - 312, canvasHeight / 2 +80,)
  // draw ellipses B
  fill(86, 128, 10);
  rect(canvasWidth / 2 -50, canvasHeight / 2 -25, 50, 50);
  ellipse(canvasWidth / 2, canvasHeight / 2, 50);
  fill(141, 204, 24);
  rect(canvasWidth / 2 -50, canvasHeight / 2 +30, 60, 50);
  ellipse(canvasWidth / 2 + 10, canvasHeight / 2 + 55, 50);
  // draw ellipse C
  angleMode(DEGREES);
  fill(86, 128, 10);
  arc(canvasWidth / 2 + 250, canvasHeight / 2 +25, 100, 100, 180, 320);
  fill(141, 204, 24);
  arc(canvasWidth / 2 + 250, canvasHeight / 2 +30, 100, 100, 40, 180);
  ellipse(canvasWidth / 2 + 10, canvasHeight / 2 + 55, 50);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
