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
  "offsetx": 50,
  "offsety": 50
}

const letterB = {
  "size": 80,
  "offsetx": -40,
  "offsety": -80
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#e3eded";


const strokeColor      = "#233f11";
const darkRed  = "#9e0d03";
const lightRed  = "#eb4034";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(133, 11, 3);
  strokeWeight(7);
  //noStroke();

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

  // draw three circles
  fill(darkRed);
  ellipse(posx, posy, 150, 150);
  fill(lightRed);
  ellipse(pos2x, pos2y, size2, size2);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
