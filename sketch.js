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
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = [204, 101, 192, 2];
const colorFront2  = [204,101,192,150];
const colorBack    = [200,200,200];
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

function drawLetter1(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  // ellipse(posx, posy, 150, 150);
  triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  triangle(posx -75, posy+75, posx -75, posy-75, posx +75, posy);
  triangle(posx +75, posy-75, posx +75, posy+75, posx -75, posy);
  triangle(posx +75, posy-75, posx , posy+75, posx -75, posy -75);
  fill(colorFront2);
   triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  // ellipse(pos2x, pos2y, size2, size2);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  // ellipse(posx, posy, 150, 150);
  triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  triangle(posx -75, posy+75, posx -75, posy-75, posx +75, posy);
  triangle(posx +75, posy-75, posx +75, posy+75, posx -75, posy);
  triangle(posx +75, posy-75, posx , posy+75, posx -75, posy -75);
  // fill(colorFront2);
   triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  // ellipse(pos2x, pos2y, size2, size2);
}








function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter1(center_x - 250, center_y, letterA);
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
