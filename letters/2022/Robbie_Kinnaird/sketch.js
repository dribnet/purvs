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
  "rotation": 0,
  "offsetx": 0,
  "offsety": 15,

}

const letterB = {
  "rotation": 1.5,
  "offsetx": 40,
  "offsety": -40,

}

const letterC = {
  "rotation": 2.7,
  "offsetx": 50,
  "offsety": 20,

}
//FIND + REPLACE THESE W LESS COLOUR SPECIFIC TERMS
const backgroundColor  = "#ffffff";
const strokeColor      = "#ffffff";

const darkBlue  = "#000000";
const lightBlue  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  let size2 = letterData["rotation"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);
  push();
  translate(pos2x,pos2y)
  rotate(size2);
  triangle(-60,60,0,-50,60,60);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
