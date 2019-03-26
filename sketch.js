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
  "size": 120,
  "offsetx": -5,
  "offsety": 50,
  "offset2x": -5,
  "offset2y": 50
}

const letterB = {
  "size": 100,
  "offsetx": -5,
  "offsety": -35,
  "offset2x": -5,
  "offset2y": 35
}

const letterC = {
  "size": 160,
  "offsetx": 30,
  "offsety": 0,
  "offset2x": 30,
  "offset2y": 0
}

const colorFront1  = "#64D5CA";
const colorFront2  = "#E8FFFE";
const colorBack    = "#E8FFFE";
const colorStroke  = "#64D5CA";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorFront2);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  
  let pos3x = posx + letterData["offset2x"];
  
  let pos3y = posy + letterData["offset2y"];

  // draw two circles
  fill(colorFront1);
  rect(posx-80, posy-100, 150, 200);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
  fill(colorFront2)
  ellipse(pos3x, pos3y, size3, size3);
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
