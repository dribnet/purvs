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
  "size": 100,
  "offsetx": 0,
  "offsety": 67.5,
  "offsetx2": -35,
  "offsety2": 35
}

const letterB = {
  "size": 100,
  "offsetx": 0,
  "offsety": -67.5,
  "offsetx2": 10,
  "offsety2": -49,
}

const letterC = {
  "size": 100,
  "offsetx": 67.5,
  "offsety": 0,
  "offsetx2": 50,
  "offsety2": 0
}

const backgroundColor  = "#292929";
const strokeColor      = "#0d0d0d";

const gold  = "#f5ce42";
const black  = "#0d0d0d";
const white = "ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  rectMode(CENTER);
  ellipseMode(CENTER);

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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];

  // draw two circles

  //Ellipse 1
  fill(backgroundColor)
  strokeWeight(4);
  stroke(gold);
  ellipse(posx, posy, 150, 150);

  //Ellipse 2
  strokeWeight(5);
  stroke(black);
  ellipse(pos2x, pos2y, size2, size2);

  //Ellipse
  noStroke();
  fill(white);
  ellipse(pos3x, pos3y, size2/2, size2/2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
