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
  "size": 100,
  "offsetx": -105,
  "offsety": -50
}

const letterB = {
  "size": 100,
  "offsetx": -105,
  "offsety": -120
}

const letterC = {
  "size": 100,
  "offsetx": -105,
  "offsety": -165
}

const colorFront1  = "#7A14A6";
const colorFront2  = "#BF0F90";
const colorBack    = "#1C0A16";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noFill();
  strokeWeight(3.5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  stroke(colorFront1);
  rect(posx, posy, 100, 100);
  stroke(colorFront2);
  rect(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 300, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
