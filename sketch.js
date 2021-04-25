const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "points": [3, 6, 1, 4]
}

const letterB = {
  "points": [4, 0, 6, 2, 0]
}

const letterC = {
  "points": [2, 4, 6]
}

const backgroundColor = "#000000";
const strokeColor = "#ffffff";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // clear screen
  background(backgroundColor);

  // color/stroke setup
  stroke(strokeColor);

  // draw background stars
  for (let i = 0; i < 600; i++) {
    strokeWeight(random(1, 4));
    point(random(width), random(height));
  }

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  let letterPos = createVector(posx, posy);

  for (let i = 0; i < letterData["points"].length - 1; i++) {
    drawLineSegment(letterPos, letterData["points"][i], letterData["points"][i + 1]);
  }
}

function drawLineSegment(letterPos, point1, point2) {
  let radius = 50;
  let linePoint = 30;
  let lineAngle = PI / 16;

  let lineStartX = radius * cos(point1 * PI / 4) + letterPos.x;
  let lineStartY = radius * sin(point1 * PI / 4) + letterPos.y;

  let lineEndX = radius * cos(point2 * PI / 4) + letterPos.x;
  let lineEndY = radius * sin(point2 * PI / 4) + letterPos.y;

  let lineVector = createVector(lineEndX - lineStartX, lineEndY - lineStartY); // Get the vector for the current line segment

  stroke(255);
  strokeWeight(1.5);
  noFill();
  line(lineStartX, lineStartY, lineStartX + lineVector.x, lineStartY + lineVector.y);

  strokeWeight(8);
  point(lineStartX, lineStartY);
  point(lineEndX, lineEndY);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
