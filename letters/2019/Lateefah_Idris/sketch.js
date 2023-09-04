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
  "size": 70,
  "offsetx": -30,
  "offsety": -15
}

const letterB = {
  "size": 70,
  "offsetx": 37,
  "offsety": 36
}

const letterC = {
  "size": 100,
  "offsetx": 0,
  "offsety": 10
}

const colorFront1  = "#260a00";
const colorFront2  = "#260a00";
const colorBack    = "#e3eded";
const colorStroke  = "#260a00";

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

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 10, 200);
  ellipse(posx+20, posy, 10, 300);
  rect(posx-50, posy, 150, 20);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
  fill(colorBack);
  noStroke();
  ellipse(posx+0, posy+10, 50, 50);


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
