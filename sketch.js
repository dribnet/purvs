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
   TriAng
 *
 */

const letterA = {
  "size": 170,
  "offsetx": 50,
  "offsety": 100,
  "TriAng": 5,
  "triStart": 30

}

const letterB = {
  "size": 150,
  "offsetx": 100,
  "offsety": -145,
  "TriAng": 55,
  "triStart": 20
}

const letterC = {
  "size": 100,
  "offsetx": 200,
  "offsety": 100,
  "TriAng": 105,
  "triStart": 10
}

const backgroundColor  = "#e3eded";
const purple  = "#b29af5";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

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
  let size1 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let TriAng = letterData["TriAng"];
  let triStart = letterData["triStart"];

  push();
  translate(posx,posy);
  rotate(TriAng);
  let triStart2 = triStart - triStart/2;
  let triStart3 = triStart + triStart/2;
  let pos4y = pos2y + pos2y/2;
  fill(0);
  triangle(triStart2, pos2y, triStart3, pos2y, triStart, pos4y);
  pop();






}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }

  else if (key == '@') {
    saveBlocksImages(true);
  }
}
