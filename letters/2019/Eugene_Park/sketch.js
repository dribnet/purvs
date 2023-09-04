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
  "size": 200,
  "offsetx": 80,
  "offsety": 200,
  "offsetx2": 80,
  "offsety2": 200,
  "offset2x": 40,
  "offset2y": 200,
  "offset2x2": 40,
  "offset2y2": 200,
  "xoffset": 0,
  "yoffset": 100
}

const letterB = {
  "size": 200,
  "offsetx": 50,
  "offsety": 50,
  "offsetx2": 40,
  "offsety2": 100,
  "offset2x": -40,
  "offset2y": 100,
  "offset2x2": 40,
  "offset2y2": 200,
  "xoffset": 100,
  "yoffset": 120
}

const letterC = {
  "size": 200,
  "offsetx": 30,
  "offsety": 50,
  "offsetx2": 100,
  "offsety2": 45,
  "offset2x": 80,
  "offset2y": 200,
  "offset2x2": 80,
  "offset2y2": 200,
  "xoffset": -100,
  "yoffset": 50

}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx - letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];
  let pos2x2 = posx + letterData["offset2x"];
  let pos2y2 = posy + letterData["offset2y"];
  let pos3x2 = posx - letterData["offset2x2"];
  let pos3y2 = posy + letterData["offset2y2"];
  let posx2 = posx + letterData["xoffset"];
  let posy2 = posy + letterData["yoffset"];

  // draw two circles
  fill(colorFront1);
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  triangle(posx,posy,pos2x,pos2y,pos3x,pos3y);
  fill(colorFront2);
  triangle(posx2,posy2,pos2x2,pos2y2,pos3x2,pos3y2);
  //arc(posx,posy,size2/2,size2/2, 0, PI);
  // fill(255,50);
  // bezier(1,100,200,200,100,200,300,300);
  // bezier(1,110,200,210,100,210,300,310);
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
