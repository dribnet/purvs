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
  "offsetx": 72,
  "offsety": 0
}

const letterB = {
  "size": 100,
  "offsetx": -80,
  "offsety": -145
}

const letterC = {
  "size": 120,
  "offsetx": 45,
  "offsety": 0
}

const colorFront1  = "#45f442"; 
const colorFront2  = "#32c3ef";
const colorBack    = "#e3eded";
const colorStroke  = "#0a3804";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorFront2);
  strokeWeight(7);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  noFill();
  ellipse(posx, posy, 190, 200);
  fill(colorFront1);
  ellipse(pos2x, pos2y, size2 - 30, size2 + 50);
}

function draw () {
  // clear screen
  background(244, 223, 66);

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
