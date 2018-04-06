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
  "size2": 35,


  "offsetx": -20,
  "offsety": 20,

  "offset2x": 20,
  "offset2y": 15,

  "offset3x": 0,
  "offset3y": -30
}

const letterB = {
  "size": 50,
  "size2": 35,


  "offsetx": 25,
  "offsety": 4,

  "offset2x": -10,
  "offset2y": 12,

  "offset3x": -10,
  "offset3y": -22

}

const letterC = {
  "size": 50,
  "size2": 35,

  "offsetx": 15,
  "offsety": -25,

 "offset2x": 20,
  "offset2y": 35,

  "offset3x": -25,
  "offset3y": -2
}

const colorFront  = "#ffbc14";
const colorBack   = "#ffbc14";
const colorStroke = "255";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size2"];

  
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];

  let pos4x = posx + letterData["offset3x"];
  let pos4y = posy + letterData["offset3y"];

  // draw circles
  ellipse(posx, posy, 150, 150);
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(pos3x, pos3y, size2, size2);
  ellipse(pos4x, pos4y, size3, size3);

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

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
