/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor = "#ffffff";
let drawWidth = 960;
let drawHeight = 500;

function drawLetter(letterData) {
  let posx = 50;
  let posy = 150;
  let radius = 50;

  stroke(strokeColor);

  let letterPos = createVector(posx, posy);

  for (let i = 1; i < 5; i++) {
    drawLineSegment(letterPos, letterData["point" + i], letterData["point" + (i+1)]);
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["point1"] = map(percent, 0, 100, oldObj["point1"], newObj["point1"]);
  new_letter["point2"] = map(percent, 0, 100, oldObj["point2"], newObj["point2"]);
  new_letter["point3"] = map(percent, 0, 100, oldObj["point3"], newObj["point3"]);
  new_letter["point4"] = map(percent, 0, 100, oldObj["point4"], newObj["point4"]);
  new_letter["point5"] = map(percent, 0, 100, oldObj["point5"], newObj["point5"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
