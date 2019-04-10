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
  "lineA_x1": -20,
  "lineA_y1": -100,
  "lineA_x2": 90,
  "lineA_y2": 100,
  "lineB_x1": 20,
  "lineB_y1": -100,
  "lineB_x2": -90,
  "lineB_y2": 100,
}

const letterB = {
  "lineA_x1": -40,
  "lineA_y1": 0,
  "lineA_x2": 80,
  "lineA_y2": 0,
  "lineB_x1": -40,
  "lineB_y1": 0,
  "lineB_x2": 80,
  "lineB_y2": 0,
}

const letterC = {
  "lineA_x1": -40,
  "lineA_y1": -100,
  "lineA_x2": 70,
  "lineA_y2": -100,
  "lineB_x1": -40,
  "lineB_y1": 100,
  "lineB_x2": 70,
  "lineB_y2": 100,
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#595959";
const colorStroke  = "#e2e2e2";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(6);
  rectMode(CENTER);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let lAx1 = posx + letterData["lineA_x1"];
  let lAy1 = posy + letterData["lineA_y1"];
  let lAx2 = posx + letterData["lineA_x2"];
  let lAy2 = posy + letterData["lineA_y2"];
  let lBx1 = posx + letterData["lineB_x1"];
  let lBy1 = posy + letterData["lineB_y1"];
  let lBx2 = posx + letterData["lineB_x2"];
  let lBy2 = posy + letterData["lineB_y2"];
  // draw two circles
  noFill();
  rect(posx, posy, 30, 200);
  fill(colorFront2);
  line(lAx1, lAy1, lAx2, lAy2);
  line(lBx1, lBy1, lBx2, lBy2);
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
