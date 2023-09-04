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
  "size": 90,
  "offsetx": 40,
  "offset2x": 90,
  "offsety": 95,
  "offset2y": 00,
  "offset3y": 115
}

const letterB = {
  "size": 90,
  "offsetx": 40,
  "offset2x": 90,
  "offsety": 95,
  "offset2y": 00,
  "offset3y": 190
}

const letterC = {
  "size": 120,
  "offsetx": 40,
  "offset2x": 50,
  "offsety": 10,
  "offset2y": 00,
  "offset3y": 190
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  noStroke ();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos3x = posx + letterData["offset2x"];
  let pos2y = posy + letterData["offsety"];
  let pos3y = posy + letterData["offset2y"];
  let pos4y = posy + letterData["offset3y"];

  // draw two circles
  rect(posx, posy, 40, 200);
  rect(pos3x, posy, 40, 200);
  rect(pos2x, pos2y, size2, 10);
  rect(pos2x, pos3y, size2, 10);
  rect(pos2x, pos4y, size2, 10);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x -340, center_y-100, 10, letterA);
  drawLetter(center_x -90      , center_y-100, 10, letterB);
  drawLetter(center_x + 160, center_y-100, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
