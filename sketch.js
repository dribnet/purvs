const canvasWidth = 960;
const canvasHeight = 500;

/*


 */

const letterA = {
  "x1": 0,
  "y1": -50,
  "s1": 200,
  "start1": 45,
  "stop1": 110,
  "x2": 0,
  "y2": -50,
  "s2": 200,
  "start2": 70,
  "stop2": 135
}

const letterB = {
  "x1": 0,
  "y1": -50,
  "s1": 200,
  "start1": -90,
  "stop1": 90,
  "x2": 0,
  "y2": -50,
  "s2": 200,
  "start2": 30,
  "stop2": 330
}

const letterC = {
  "x1": 30,
  "y1": -50,
  "s1": 200,
  "start1": 40,
  "stop1": 320,
  "x2": -30,
  "y2": -50,
  "s2": 200,
  "start2": 40,
  "stop2": 320
}

const colorFront1  = "#c70000";
const colorFront2  = "#00c7c7";
const colorBack    = "#e3eded";
const colorStroke  = "#000000";

const red1 = 230;
const green1 = 0;
const blue1 = 0;
const red2 = 0;
const green2 = 100;
const blue2 = 100;

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
/////////////////////////////////////////////////////////////////
function drawLetter(posx, posy, letterData) {
  // determine parameters
  let arcX1 = posx + letterData["x1"];
  let arcY1 = posy + letterData["y1"];
  let arcSize1 = letterData["s1"];
  let arcStart1 = letterData["start1"];
  let arcStop1 = letterData["stop1"];

  let arcX2 = posx + letterData["x2"];
  let arcY2 = posy + letterData["y2"];
  let arcSize2 = letterData["s2"];
  let arcStart2 = letterData["start2"];
  let arcStop2 = letterData["stop2"];

  // draw arcs
  angleMode(DEGREES);
  noStroke();
  fill(red1, green1, blue1, 125);
  arc(arcX1, arcY1, arcSize1, arcSize1, arcStart1, arcStop1);
  fill(red2, green2, blue2, 125);
  arc(arcX2, arcY2, arcSize2, arcSize2, arcStart2, arcStop2);

}
///////////////////////////////////////////////////////////////////
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
