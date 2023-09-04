const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "point1": 3,
  "point2": 6,
  "point3": 1,
  "point4": 4,
  "point5": 4,
  "randomSeed": 1
}

const letterB = {
  "point1": 4,
  "point2": 0,
  "point3": 6,
  "point4": 2,
  "point5": 0,
  "randomSeed": 2
}

const letterC = {
  "point1": 2,
  "point2": 4,
  "point3": 6,
  "point4": 6,
  "point5": 6,
  "randomSeed": 3
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

let stars = []; // Initialise array for background stars
for (let i = 0; i < 100; i++) { // Fill stars array with background stars with placeholder positions
  stars[i] = {
    "x": 0,
    "y": 0
  }
}

function drawLetter(posx, posy, letterData) {
  let letterPos = createVector(posx, posy);

  randomSeed(letterData["randomSeed"]); // Set the seed for the random positions of the background stars

  stroke(255, letterData["starsAlpha"]);
  strokeWeight(2);
  for (let i = 0; i < stars.length; i++) {
    // Set positions of background stars
    stars[i].x = random(-120, 120);
    stars[i].y = random(-height/2 - 120, height/2);

    point(letterPos.x + stars[i].x, letterPos.y + stars[i].y); // Draw background stars
  }

  // Draw lines of letter
  let firstLine = true;
  for (let i = 1; i < 5; i++) {
    drawLineSegment(letterPos, letterData["point" + i], letterData["point" + (i + 1)], firstLine);
    firstLine = false;
  }
}

// Custom line function
function drawLineSegment(letterPos, point1, point2, firstLineInLetter) {
  let radius = 45; // Radius of circle letters are drawn within

  // Calculate the vector of the line segment
  let lineStartX = radius * cos(point1 * PI / 4) + letterPos.x;
  let lineStartY = radius * sin(point1 * PI / 4) + letterPos.y;

  let lineEndX = radius * cos(point2 * PI / 4) + letterPos.x;
  let lineEndY = radius * sin(point2 * PI / 4) + letterPos.y;

  let lineVector = createVector(lineEndX - lineStartX, lineEndY - lineStartY);

  // Draw line segment
  stroke(255);
  strokeWeight(1.5);
  noFill();
  line(lineStartX, lineStartY, lineStartX + lineVector.x, lineStartY + lineVector.y);

  // Draw glowing stars
  if (firstLineInLetter) {
    star(lineStartX, lineStartY, random(4, 6));
  }
  star(lineEndX, lineEndY, random(4, 6));
}

// Custom point function for glowing stars
function star(x, y, size) {
  noStroke();
  for (let i = 3; i > 0; i--) {
    fill(255, 249, 209, map(pow(i, 2), 9, 1, 50, 255));
    ellipse(x, y, map(pow(i, 2), 9, 1, 3, 1) * size);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
