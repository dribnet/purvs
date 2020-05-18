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
  "offsetx": 0,
  "offsety": 35,
  "stroke1": 1,
  "stroke2": 5,
  "scale2": 1
}

const letterB = {
  "offsetx": 0,
  "offsety": -145,
  "stroke1": 3,
  "stroke2": 5,
  "scale2": 2
}

const letterC = {
  "offsetx": 30,
  "offsety": 0,
  "stroke1": 2,
  "stroke2": 5,
  "scale2": 1
}

const colorFront1  = "#2bad8f";
const colorFront2  = "#2b8aad";
const colorBack    = "#2bad4e";
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

function drawLetter(posx, posy, letterData, rotate) {
  // determine parameters for triangles
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let stroke1 = letterData["stroke1"];
  let stroke2 = letterData["stroke2"];
  let sizer2 = letterData["scale2"];

  strokeWeight(stroke2);
  fill(colorFront2);
  triangle(posx, posy-25, posx+50, posy+50, posx-50, posy+50);
  strokeWeight(stroke1);
  fill(colorFront1);
  push();
  scale(sizer2);
  translate(-(sizer2-1)*240, -(sizer2-1)*30);
  triangle(pos2x, pos2y-12.5, pos2x+25, pos2y+25, pos2x-25, pos2y+25);
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