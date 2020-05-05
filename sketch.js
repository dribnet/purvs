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
  "width": 80,
  "height": 140,
  "offsetx": 50,
  "offsety": 14,
  "angleStart": 270,
  "angleStop": 90
}

const letterB = {
  "width": 80,
  "height": 200,
  "offsetx": -39,
  "offsety": -35,
  "angleStart": 90,
  "angleStop": 270
}

const letterC = {
  "width": 150,
  "height": 150,
  "offsetx": 0,
  "offsety": 0,
  "angleStart": 335,
  "angleStop": 75
}

const colorFront1  = "#3A606E";
const colorFront2  = "#E5C2BC";
// const colorBack    = "#e3eded";
const colorBack    = "#D4F5F5";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(colorStroke);
  noStroke()
  //strokeWeight(1);

  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for the circle and arc
  let size2 = letterData["height"];
  let size1 = letterData["width"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let start =letterData["angleStart"];
  let finish =letterData["angleStop"];

  fill(colorFront1);
  ellipse(posx, posy, 150, 150);

  fill(colorFront2);
  arc(pos2x, pos2y, size1, size2, start, finish);
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
