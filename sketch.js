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
 "size": 120,
  "offsetx": 0,
  "offsety": -15,
  "rotate": 40
}

const letterB = {
 "size": 120,
  "offsetx": -60,
  "offsety": -150,
   "rotate": 0 
}

const letterC = {
  "size": 120,
  "offsetx": -20,
  "offsety": 5,
   "rotate": -50
}

const colorFront  = "#efd2ee";
const colorBack   = "##e2faff";
const colorStroke = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES);

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(10);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let rotation = letterData["rotate"];


push();
  translate(posx, posy);
  rotate (rotation);
  ellipse(0,0, 200, 220);
  pop();

  push();
  translate (pos2x,pos2y);
  rotate (rotation);
  rect(0, 0, size2, size2);
  pop();

  

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
