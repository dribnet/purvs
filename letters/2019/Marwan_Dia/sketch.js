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
  "size": 30,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "size": 30,
  "offsetx": 0,
  "offsety": -0
}

const letterC = {
  "size": 30,
  "offsetx": 0,
  "offsety": 0
}

const colorFront1  = "#199cff";
const colorFront2  = "#ffff00";
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


  // draw two circles
 
  fill(colorFront1);
  
  fill(colorFront2);

  // letter A

  rect(100, 250, 40, 40);
  rect(100, 200, 40, 40);
  rect(150, 170, 30, 30);
  rect(190, 200, 40, 40);
  rect(190, 250, 40, 40);
  rect(150, 250, 30, 10);

  // letter B

  rect(450, 180, 20, 110);
  rect(480, 270, 60,  20);
  rect(480, 240, 60,  20);

  // letter C

  rect(770, 180, 20, 110); 
  rect(790, 200, 70, 10);
   rect(790, 280, 50, 10);
  

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
