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

 //angleMode(DEGREES);

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": -135,
  "offsety1": 0,
  "offsetx1": -135

}

const letterB = {  
  "size": 150,
  "offsetx":0,
  "offsety": -350,
   "offsety1": 0,
  "offsetx1": -350

}

const letterC = {
  "size": 100,
  "offsetx": 60,
  "offsety": -290,
   "offsety1": 0,
  "offsetx1": 0
}

const colorFront1  = "#052342";
const colorFront2  = "#0c427a";
const colorBack    = (30);
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
  noStroke();
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx1"];
  let pos3y = posy + letterData["offsety2"];

  // draw two circles
  fill(255);
  triangle(posx,posy-200,posx-100,posy + 100,posx+100,posy+100);
  //ellipse(posx, posy, 150, 150);
  fill(0);
  triangle(pos2x, pos2y, pos2x-50,pos2y + 300,pos2x+50,pos2y+300);
  //triangle(pos3x, pos3y, pos3x-50, pos3y+320,pos3x+50, pos3y+320);

  //ellipse(pos2x, pos2y, size2, size2);
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
