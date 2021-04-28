const canvasWidth = 960;
const canvasHeight = 500;

/* 
MY PARAMETERS
2 triangles = 12 parameters per letterform. 
The first triangle uses the parameter points 1A, 2A, 3A, 1B, 2B, 3B. 
The second triangle uses the parameter points 1C, 2C, 3C, 1D, 2D, 3D.
 */

const letterA = {
    "point1A": 50,
    "point2A": 0,
    "point3A": 100,
    "point1B": 0,
    "point2B": 200,
    "point3B": 200,
    "point1C": 25,
    "point2C": 75,
    "point3C": 50,
    "point1D": 150,
    "point2D": 150,
    "point3D": 194
}

const letterB = {
    "point1A": 0,
    "point2A": 0,
    "point3A": 100,
    "point1B": 0,
    "point2B": 194,
    "point3B": 0,
    "point1C": 0,
    "point2C": 100,
    "point3C": 0,
    "point1D": 100,
    "point2D": 100,
    "point3D": 200
}

const letterC = {
    "point1A": 0,
    "point2A": 0,
    "point3A": 100,
    "point1B": 0,
    "point2B": 150,
    "point3B": 0,
    "point1C": 0,
    "point2C": 100,
    "point3C": 0,
    "point1D": 50,
    "point2D": 200,
    "point3D": 200
}

const backgroundColor = "#c9afaf"; // grey-red colour
const strokeColor = "#f2f2f2"; // slightly grey
const colourRed  = "#a83636"; // off-red colour
const colourBlack  = "#1f1f1f"; // off-black colour

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
  stroke('#ffffff');
  let A1 = posx + letterData["point1A"];
  let A2 = posx + letterData["point2A"];
  let A3 = posx + letterData["point3A"];
  let B1 = posy + letterData["point1B"];
  let B2 = posy + letterData["point2B"];
  let B3 = posy + letterData["point3B"];
  let C1 = posx + letterData["point1C"];
  let C2 = posx + letterData["point2C"];
  let C3 = posx + letterData["point3C"];
  let D1 = posy + letterData["point1D"];
  let D2 = posy + letterData["point2D"];
  let D3 = posy + letterData["point3D"];

  // draw triangles
  fill('#808080');
  triangle(A1, B1, A2, B2, A3, B3);
  fill('#000000');
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
