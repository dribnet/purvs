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
  "offsetx": 35,
  "offsety": 80
}

const letterB = {
  "size": 100,
  "offsetx": 60,
  "offsety": -35
}

const letterC = {
  "size": 80,
  "offsetx": 75,
  "offsety": 40
}

const backgroundColor  = "#b7a9eb";
const strokeColor      = "#233f11";

const darkBlue  = "#6248c2";
const lightBlue  = "#b7a9eb";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // square insides
  fill(darkBlue);
  rect(posx, posy, 150, 150, 20);
  fill(lightBlue);
rect(pos2x, pos2y, size2, size2, 20);
fill(lightBlue);
//rect(pos2x-50, pos2y-50, size2, size2, 20);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
