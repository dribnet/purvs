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
  "offsetx": 0,
  "offsety": 35,
  "start" : 60,
  "stop" : 180,
  "rectx":150,
  "recty":150
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "start" : 60,
  "stop" : 180
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "start" : 60,
  "stop" : 180
}

const colorFront1  = "#fcba03";
const colorFront2  = "#59ccff";
const colorFront3  = "#94acd4";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);
  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let startA = letterData["start"];
  let endA = letterData["stop"];
  let pos3x = letterData["rectx"];
  let pos3y = letterData["recty"];

  // draw two circles
  fill(colorFront2);
  ellipse(posx, posy, 150, 150);
  fill(colorFront1);
  arc(pos2x, pos2y, size2, size2,startA,endA);
  // draw rectangle
  fill(colorFront3);
  rect(pos3x, pos3y, 55, 55);
  
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
