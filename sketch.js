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
  "RectWidth": 90,
  "RectHeight": 90,
  "offsetx": -50,
  "offsety": 35,
  "rectBehind": false
}

const letterB = {
  "RectWidth": 40,
  "RectHeight": 150,
  "offsetx": -40,
  "offsety": -60,
  "rectBehind": true
}

const letterC = {
  "RectWidth": 100,
  "RectHeight": 100,
  "offsetx": 30,
  "offsety": 0,
  "rectBehind": false
}

const backgroundColor = "#caf0f8";
const strokeColor = "#03045e";

const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let rectWidth = letterData["RectWidth"];
  let rectHeight = letterData["RectHeight"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let drawOrderModifier = letterData["rectBehind"];

  if (drawOrderModifier) {
    rectMode(CENTER)
    fill(lightBlue);
    rect(pos2x, pos2y, rectWidth, rectHeight);
    fill(darkBlue);
    ellipse(posx, posy, 150, 150);
  } else {
    fill(darkBlue);
    ellipse(posx, posy, 150, 150);

    rectMode(CENTER)
    fill(lightBlue);
    rect(pos2x, pos2y, rectWidth, rectHeight);
  }

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
