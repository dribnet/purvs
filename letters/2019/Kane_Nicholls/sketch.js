const canvasWidth = 960;
const canvasHeight = 500;
const PI = 3.14159;
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
  "CPX1": 50,
  "CPY1": 0,
  "R1": 400,
  "SA1": (7 * PI / 16),
  "EA1": (9 * PI / 16),

  "CPX2": 50,
  "CPY2": 0,
  "R2": 200,
  "SA2": (7 * PI / 16),
  "EA2": (9 * PI / 16),

  "X1": 10,
  "Y1": 0,
  "X2": 90,
  "Y2": 200
}

const letterB = {
  "CPX1": 50,
  "CPY1": 50,
  "R1": 100,
  "SA1": (-8 * PI / 16),
  "EA1": (8 * PI / 16),

  "CPX2": 50,
  "CPY2": 150,
  "R2": 100,
  "SA2": (-8 * PI / 16),
  "EA2": (8 * PI / 16),

  "X1": 0,
  "Y1": 0,
  "X2": 70,
  "Y2": 200
}

const letterC = {
  "CPX1": 50,
  "CPY1": 50,
  "R1": 100,
  "SA1": (14 * PI / 16),
  "EA1": (32 * PI / 16),

  "CPX2": 50,
  "CPY2": 150,
  "R2": 100,
  "SA2": (0 * PI / 16),
  "EA2": (18 * PI / 16),

  "X1": 0,
  "Y1": 0,
  "X2": 37.5,
  "Y2": 200
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for first arc
  let CenterPointX1 = posx + letterData["CPX1"];
  let CenterPointY1 = posy + letterData["CPY1"];
  let StartAngle1 = letterData["SA1"];
  let EndAngle1 = letterData["EA1"];
  let Radius1 = letterData["R1"];
  // determine parameters for second arc
  let CenterPointX2 = posx + letterData["CPX2"];
  let CenterPointY2 = posy + letterData["CPY2"];
  let StartAngle2 = letterData["SA2"];
  let EndAngle2 = letterData["EA2"];
  let Radius2 = letterData["R2"];
  // determine parameters for rectangle
  let PosX1 = posx + letterData["X1"];
  let PosY1 = posy + letterData["Y1"];
  let PosX2 = letterData["X2"];
  let PosY2 = letterData["Y2"];

  // draw a rectangle and two arcs 
  noStroke();
  fill(200);
  rect(PosX1, PosY1, PosX2, PosY2);
  fill(100,90);
  arc(CenterPointX1, CenterPointY1, Radius1, Radius1, StartAngle1, EndAngle1);
  fill(100,90);
  arc(CenterPointX2, CenterPointY2, Radius2, Radius2, StartAngle2, EndAngle2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y - 100, letterA);
  drawLetter(center_x - 50 , center_y - 100, letterB);
  drawLetter(center_x + 200, center_y - 100, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
