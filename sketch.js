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
  "size": 150,
  "offsetx": 50,
  "offsety": -25,
  "rectL": 110,
  "rectW": 40,
  "radi": 3
}

const letterB = {
  "size": 150,
  "offsetx": -100,
  "offsety": -105,
  "rectL": 190,
  "rectW": 40,
  "radi": 3

}

const letterC = {
  "size": 180,
  "offsetx": 10,
  "offsety": -90,
  "rectL": 180,
  "rectW": 90,
  "radi": 10
}

const colorFront1  = "#F15025";
const colorFront2  = "#FFFFFF";
const colorBack    = "#2176AE";
const colorStroke  = "#000000";

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
  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];
  let rectRad = letterData["radi"];

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, size2, size2);
  fill(colorFront2);
  rect(pos2x, pos2y, rectWid, rectLen, rectRad);
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