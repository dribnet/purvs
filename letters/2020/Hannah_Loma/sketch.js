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

//PARAMETERS
const letterA = {
  "size": 120,
  "offsetx": 3,
  "offsety": 100,
  "linex": -120,
  "liney": -70,
  "linex2": 0,
  "liney2": 95
}

const letterB = {
  "size": 180,
  "offsetx": 0,
  "offsety": -20,
  "linex": -80,
  "liney": -20,
  "linex2": -80,
  "liney2": -20
}

const letterC = {
  "size": 140,
  "offsetx": 20,
  "offsety": 100,
  "linex": -20,
  "liney": 130,
  "linex2": -70,
  "liney2": 20
}

const colorFront1  = "#199cff"; //dark blue
const colorFront2  = "#8ac2bf"; //light blue
const colorBack    = "#d5e3e3"; //background col
const colorStroke  = "#ffffff";

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
  let linePosx = posx + letterData["linex"];
  let linePosy = posy + letterData["liney"];
  let linePosx2 = posx + letterData["linex2"];
  let linePosy2 = posy + letterData["liney2"];

  // draw two circles
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
  fill(colorFront1);
  line(linePosx, pos2y, linePosx + size2, linePosy);
  line(linePosx2, linePosy, linePosx2 + size2, linePosy2);
  
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
