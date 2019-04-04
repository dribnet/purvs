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
  "shift1": 200,
  "shift2": 200
}

const letterB = {
  "size": 200,
  "shift3": 450,
  "shift4": 200
}

const letterC = {
  "size": 200,
  "shift5": 700,
  "shift6": 200
}

const colorFront1  = "#ce4040"; 
const colorFront2  = "#d67e7e";
const colorBack    = "#919191";
const colorStroke  = "#6d1b1b";

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
  let pos2x = letterData["shift1"];
  let pos2y = letterData["shift2"];
  let pos3x = letterData["shift3"];
  let pos3y = letterData["shift4"];
  let pos4x = letterData["shift5"];
  let pos4y = letterData["shift6"];

  // draw two circles
  fill(colorFront1);
  ellipse(pos2x, pos2y, 30, 30);
  fill(colorFront2);
  ellipse(pos2x -40, pos2y +50, 20, 20);
  ellipse(pos2x +40, pos2y +50, 20, 20);
  ellipse(pos2x -40, pos2y +100, 30, 30);
  ellipse(pos2x +40, pos2y +100, 30, 30);

  fill(colorFront1);
  ellipse(pos3x +60, pos3y +80, 30, 30);
  ellipse(pos3x, pos3y +100, 20, 20);
  fill(colorFront2);
  ellipse(pos3x, pos3y, 30, 30);
  ellipse(pos3x, pos3y +50, 20, 20);
  ellipse(pos3x +60, pos3y +20, 20, 20);

  fill(colorFront1);
  ellipse(pos4x, pos4y +20, 20, 20);
  ellipse(pos4x, pos4y +80, 20, 20);
  fill(colorFront2);
  ellipse(pos4x +70, pos4y, 30, 30);
  ellipse(pos4x +70, pos4y +100, 20, 20);

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
