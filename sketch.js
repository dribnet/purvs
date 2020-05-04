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
  "size": 36,
  "offsetx": 32,
  "offsety": 23,
}

const letterB = {
  "size": 20,
  "offsetx": 32,
  "offsety": 22,
}

const letterC = {
  "size": -20,
  "offsetx": 56,
  "offsety": 30,
}

const colorFront1  = "#ffba52"; //big square colour = light orange 
const colorFront2  = "#fc6203"; //small square colour = orange
const colorBack    = "#e3eded"; //bg colour
const colorStroke  = "#fc6203"; // stroke colour = orange

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
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw three rects
  fill(colorFront1);
  rect(posx, posy, 100, 100);
  fill(colorFront2);
  rect(pos2x, pos2y, 40, 30);
  rect(pos2x, pos2y+38, 40, size2);
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
