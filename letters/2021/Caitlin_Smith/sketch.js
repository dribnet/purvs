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
  "size": 60,
  "offsetx": 45,
  "offsety": 90
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -150
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 30
}

const backgroundColor  = "#ffffff";
const strokeColor      = "#000000";

const darkBlue  = "#eda8d2";
const lightBlue  = "#cdb6fa";
const red  = "#ff0000";


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

  // draw two circles
  angleMode(DEGREES);
  noStroke();
  fill(red);
  rect(posx, posy, 55, 200, 20);
  fill(darkBlue);
  rect(posx, posy, 130, 55, 20);
  rect(posx, posy+90, 130, 50, 20);
  rect(posx, posy+170, 130, 50, 20);
  //rect(posx, posy, 150, 150);
  fill(lightBlue);
  rect(posx+80, posy, 55, 200, 20);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
