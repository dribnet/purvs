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
  "offsetx": 0,
  "offsety": 0,
  "start": 140,
  "mode": 400
}

const letterB = {
  "size": 190,
  "offsetx": -10,
  "offsety": 120,
  "start": 270,
  "mode": 0
}

const letterC = {
  "size": 120,
  "offsetx": 0,
  "offsety": 0,
  "start": 410,
  "mode": -50
}

const backgroundColor  = "#5BC8AC"; // turquoise

const pink  = "#f18d9e";
const aqua  = "#98dbc6";
const yellow = "#e6d72a";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
  noStroke();
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

  let arcStart = letterData["start"];
  let arcMode = letterData["mode"];

  // draw two circles
  fill(pink);
  ellipse(posx, posy, 150, 150);
  fill(aqua);
  arc(pos2x, pos2y, size2, size2, arcStart, arcMode);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
