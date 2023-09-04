/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor = "#ffffff";
let drawWidth = 960;
let drawHeight = 500;

let stars = []; // Initialise array for background stars
for (let i = 0; i < 70; i++) { // Fill stars array with background stars with placeholder positions
  stars[i] = {
    "x": 0,
    "y": 0
  }
}

function drawLetter(letterData) {
  let letterPos = createVector(50, 150); // Position of letter in bounding box

  randomSeed(letterData["randomSeed"]); // Set the seed for the random positions of the background stars

  stroke(255, letterData["starsAlpha"]);
  strokeWeight(2);
  for (let i = 0; i < stars.length; i++) {
    // Set positions of background stars
    stars[i].x = random(-60, 60);
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  // Map old points to new points
  new_letter["point1"] = map(percent, 0, 100, oldObj["point1"], newObj["point1"]);
  new_letter["point2"] = map(percent, 0, 100, oldObj["point2"], newObj["point2"]);
  new_letter["point3"] = map(percent, 0, 100, oldObj["point3"], newObj["point3"]);
  new_letter["point4"] = map(percent, 0, 100, oldObj["point4"], newObj["point4"]);
  new_letter["point5"] = map(percent, 0, 100, oldObj["point5"], newObj["point5"]);

  // Map the old background stars to the new background stars
  if (percent < 50) {
    new_letter["randomSeed"] = oldObj["randomSeed"];
    new_letter["starsAlpha"] = map(percent, 0, 49, oldObj["starsAlpha"], 0);
  } else {
    new_letter["randomSeed"] = newObj["randomSeed"];
    new_letter["starsAlpha"] = map(percent, 50, 100, 0, newObj["starsAlpha"]);
  }

  return new_letter;
}

var swapWords = [
  "?LUMINA?",
  "???BY???",
  "ZAVIER?B",
  "SKYLIGHT"
]
