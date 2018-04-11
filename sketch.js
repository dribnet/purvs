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
  "offsetx": -25,
  "offsety": 10
 
}

const letterB = {
  "size": 50,
  "offsetx": -25,
  "offsety": -20
}

const letterC = {
  "size": 50,
  "offsetx": 25,
  "offsety": -50
}

const colorFront  = "#ffffff";
const colorBack   = "#a3659c";
const colorStroke = "#e3eded";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx+10"];
  let pos3y = posy + letterData["offsety+10"];

  // draw two circles
  rect(posx-25, posy-100, size2, size2);
  rect(pos2x, pos2y, size2, size2);
  
}

function draw () {

  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  fill(0);
  rect(center_x - 325, center_y - 140, 150, 200);
  rect(center_x -75, center_y - 140, 150, 200);
  rect(center_x + 175, center_y - 140, 150, 200);
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
