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
  "size": 50,
  "offsetx": 25,
  "offsety": 25,
  "pos2ndrect": 275
}

const letterB = {
  "size": 50,
  "offsetx": 50,
  "offsety": 50,
  "pos2ndrect": 300
}

const letterC = {
  "size": 50,
  "offsetx": 50,
  "offsety": 50,
  "pos2ndrect": 250
}

const backgroundColor  = "#fffffe";
const strokeColor      = "#ff0000";

const darkBlue  = "#ffffff";
const lightBlue  = "#000000";

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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let scndrect = letterData['pos2ndrect'];

  // draw two circles
  fill(darkBlue);
  rect(posx, posy, 150, 150);
  fill(lightBlue);
  rect(pos2x, pos2y, size2, size2);
  rect(pos2x+50, scndrect, size2, size2)
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
