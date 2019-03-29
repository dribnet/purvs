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
  "x1": 300,
  "y1": 100,
  "x2": 250,
  "y2": 350,
  "x3": 300,
  "y3": 275,
  "x4": 350,
  "y4": 350,
  "x5": 350,
  "y5": 350
}

const letterB = {
  "x1": 400,
  "y1": 100,
  "x2": 400,
  "y2": 350,
  "x3": 450,
  "y3": 275,
  "x4": 410,
  "y4": 200,
  "x5": 450,
  "y5": 125
}

const letterC = {
  "x1": 600,
  "y1": 100,
  "x2": 500,
  "y2": 200,
  "x3": 625,
  "y3": 350,
  "x4": 575,
  "y4": 200,
  "x5": 675,
  "y5": 100
}

const colorFront1  = "#ff6600";
const colorFront2  = "#ffcc00";
const colorBack    = "#e6e6e6";
const colorStroke  = "#800000";

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
  let vertexx1 = letterData["x1"];
  let vertexy1 = letterData["y1"];
  let vertexx2 = letterData["x2"];
  let vertexy2 = letterData["y2"];
  let vertexx3 = letterData["x3"];
  let vertexy3 = letterData["y3"];
  let vertexx4 = letterData["x4"];
  let vertexy4 = letterData["y4"];
  let vertexx5 = letterData["x5"];
  let vertexy5 = letterData["y5"];

  // draw two circles
  fill(colorFront1);
  beginShape();
  vertex(vertexx1, vertexy1);
  vertex(vertexx2, vertexy2);
  vertex(vertexx3, vertexy3);
  vertex(vertexx4, vertexy4);
  vertex(vertexx5, vertexy5);
  endShape(CLOSE);

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
