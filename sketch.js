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
  "point1A": 0,
  "point2A": 80,
  "point3A": -120,
  "point1B": -120,
  "point2B": 100,
  "point3B": 100,
  "point1C": 0,
  "point2C": 20,
  "point3C": -60,
  "point1D": 115,
  "point2D": 20,
  "point3D": 20
}

const letterB = {
  "point1A": 80,
  "point2A": 170,
  "point3A": 170,
  "point1B": -370,
  "point2B": -140,
  "point3B": 0,
  "point1C": 80,
  "point2C": 170,
  "point3C": 170,
  "point1D": -250,
  "point2D": 100,
  "point3D": -20
  
}

const letterC = {
  "point1A": 80,
  "point2A": 420,
  "point3A": 420,
  "point1B": -620,
  "point2B": -140,
  "point3B": 60,
  "point1C": 80,
  "point2C": 420,
  "point3C": 420,
  "point1D": -380,
  "point2D": 100,
  "point3D": -20
}

const backgroundColor  = "#c9afaf";
const strokeColor      = "#f2f2f2";

const colourRed  = "#a83636";
const colourBlack  = "#1f1f1f";

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
  let A1 = posx + letterData["point1A"];
  let A2 = posy + letterData["point2A"];
  let A3 = posy + letterData["point3A"];
  let B1 = posx + letterData["point1B"];
  let B2 = posy + letterData["point2B"];
  let B3 = posy + letterData["point3B"];
  let C1 = posx + letterData["point1C"];
  let C2 = posy + letterData["point2C"];
  let C3 = posy + letterData["point3C"];
  let D1 = posx + letterData["point1D"];
  let D2 = posy + letterData["point2D"];
  let D3 = posy + letterData["point3D"];

  // draw triangles
  fill(colourRed);
  triangle(A1, B1, A2, B2, A3, B3);
  fill(colourBlack);
  triangle(C1, D1, C2, D2, C3, D3);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
