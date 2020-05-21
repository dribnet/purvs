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
"size": 210,
  "offsetx": 60,
  "offsety": 100,
  "rectL": 100,
  "rectW": 20,
}

const letterB = {
  "size": 150,
  "offsetx": 100,
  "offsety": 80,
  "rectL": 20,
  "rectW": 50
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 80,
  "rectL": 50,
  "rectW": 100
}

const colorFront1  = "#199cff"; //light blue
const colorFront2  = "#59ccff"; //Dark blue
const colorBack    = "#050403"; //Background
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];

  // draw two rectangles
  fill(161, 42, 42); //Red Rectangle
  rect(posx, posy, 150, 200);

  fill(62, 0, 0); //Orange rectangle
  rect(pos2x, pos2y, rectWid, rectLen);
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