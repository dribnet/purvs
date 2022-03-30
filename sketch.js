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
  "Rect1x": 10,
  "Rect1y": 0,
  "Rect1h": 150,
  "Rect1r": 15,

  "Rect2x": 75,
  "Rect2y": 0,
  "Rect2h": 150,
  "Rect2r": -15,

  "Rect3x": 42,
  "Rect3y": 20,
  "Rect3h": 35,
  "Rect3r": 90,

  "Rect4x": 0,
  "Rect4y": 0,
  "Rect4h": 0,
  "Rect4r": 0,

  "Rect5x": 40,
  "Rect5y": 0,
  "Rect5h": 150,
  "Rect5w": 160
}

const letterB = {
  "Rect1x": 0,
  "Rect1y": 0,
  "Rect1h": 150,
  "Rect1r": 0,

  "Rect2x": 50,
  "Rect2y": 50,
  "Rect2h": 90,
  "Rect2r": 90,

  "Rect3x": 90,
  "Rect3y": 15,
  "Rect3h": 100,
  "Rect3r": 0,

  "Rect4x": 50,
  "Rect4y": -20,
  "Rect4h": 90,
  "Rect4r": 90,

  "Rect5x": 40,
  "Rect5y": 0,
  "Rect5h": 150,
  "Rect5w": 160
}

const letterC = {
  "Rect1x": -40,
  "Rect1y": 0,
  "Rect1h": 150,
  "Rect1r": 0,

  "Rect2x": 20,
  "Rect2y": 50,
  "Rect2h": 100,
  "Rect2r": 90,

  "Rect3x": 20,
  "Rect3y": -50,
  "Rect3h": 100,
  "Rect3r": 90,

  "Rect4x": 55,
  "Rect4y": -20,
  "Rect4h": 30,
  "Rect4r": 0,

  "Rect5x": 0,
  "Rect5y": 0,
  "Rect5h": 150,
  "Rect5w": 160
}

const backgroundColor  = "#1B1918";
const strokeColor      = "#1B1918";

const white  = "#ffffff";
const black  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  noStroke();
  strokeCap(SQUARE);
  angleMode(DEGREES);
  rectMode(CENTER);

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
  // determine parameters for second circle
  let pos1x = posx + letterData["Rect1x"];
  let pos1y = posy + letterData["Rect1y"];
  let pos2x = posx + letterData["Rect2x"];
  let pos2y = posy + letterData["Rect2y"];
  let pos3x = posx + letterData["Rect3x"];
  let pos3y = posy + letterData["Rect3y"];
  let pos4x = posx + letterData["Rect4x"];
  let pos4y = posy + letterData["Rect4y"];
  let pos5x = posx + letterData["Rect5x"];
  let pos5y = posy + letterData["Rect5y"];

  let height1y = letterData["Rect1h"];
  let height2y = letterData["Rect2h"];
  let height3y = letterData["Rect3h"];
  let height4y = letterData["Rect4h"];
  let height5y = letterData["Rect5h"];
  let width5x = letterData["Rect5w"];

  let rot1 = letterData["Rect1r"];
  let rot2 = letterData["Rect2r"];
  let rot3 = letterData["Rect3r"];
  let rot4 = letterData["Rect4r"];

  // square 1
  noStroke();
  fill(white);
  push();
  translate(pos1x, pos1y);
  rotate(rot1);
  rect(0, 0, 30, height1y);
  pop();

  push();
  translate(pos2x, pos2y);
  rotate(rot2);
  rect(0, 0, 30, height2y);
  pop();

  push();
  translate(pos3x, pos3y);
  rotate(rot3);
  rect(0, 0, 30, height3y);
  pop();

  push();
  translate(pos4x, pos4y);
  rotate(rot4);
  rect(0, 0, 30, height4y);
  pop();

  fill(0, 0, 0, 0);
  stroke(strokeColor);
  strokeWeight(20);
  rect(pos5x,pos5y, width5x, height5y);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
