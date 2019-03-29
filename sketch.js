const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "x": -50,
  "y": -10,
  "x2": 50,
  "y2": -10,
  "start": 140,
  "stop": 40
}

const letterB = {
  "x": -70,
  "y": 1,
  "x2": 70,
  "y2": 1,
  "start": 10,
  "stop": 350
}

const letterC = {
  "x": -110,
  "y": -10,
  "x2": -30,
  "y2": 10,
  "start": 50,
  "stop": -50
}

const colorBack    = "#a8c0dd"; // blue blackground
const colorStroke  = "#ffffff"; // white stroke

function setup () {

  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(8);

  // angle mode from radians to degrees for arc
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {

  // determine parameters for the line
  let lineX1 = posx + letterData["x"];
  let lineY1 = posy + letterData["y"];
  let lineX2 = posx + letterData["x2"];
  let lineY2 = posy + letterData["y2"];
  
  // determine start and stop parameters for the arc
  let arcStart = letterData["start"];
  let arcStop = letterData["stop"];

  // draw an arc and line
  noFill();
  arc(posx, posy, 150, 150, arcStart, arcStop);
  line(lineX1, lineY1, lineX2, lineY2);
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
