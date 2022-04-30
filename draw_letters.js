/* these are optional special variables which will change the system */
var systemBackgroundColor = "#eee3d1";
var systemLineColor = "#5f5e66";
var systemBoxColor = "#3d93e0";

/* internal constants */
const colWings = "#df8d9e";
const colRect = "#718e00";
const roundCorner = 100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  push();
    noStroke();
    rectShape(
      letterData["rX"],
      letterData["rY"],
      letterData["rW"],
      letterData["rH"]
      );
    customShape(
      letterData["size"],
      letterData["orientation1"],
      letterData["orientation2"],
      letterData["edge1"],
      letterData["edge2"],
      letterData["angle"],
      letterData["offsetX1"],
      letterData["offsetY1"],
      letterData["offsetX2"],
      letterData["offsetY2"]
    );
  pop();
}
function rectShape(rX,rY,rW,rH){
  push();
    fill(colRect);
    rect(rX, rY, rW, rH);
  pop();
}
function customShape(
  radius,
  orient1,
  orient2,
  edge1,
  edge2,
  angle,
  offsetX1,
  offsetY1,
  offsetX2,
  offsetY2
  ) {
  push();
    fill(colWings);
    angleMode(DEGREES);
    rotate(angle);
    beginShape();
    halfShape(radius, offsetX1, offsetY1, orient1, edge1);
    halfShape(radius, offsetX2, offsetY2, orient2, edge2);
    endShape(CLOSE);
  pop();
  }
function halfShape(radius, offsetX, offsetY, orientation, edge) {
  let offset = dist(radius, radius / 5, radius - radius / 5, radius / 5);
  // orient right = 1, left = -1
  vertex(offsetX - radius, offsetY + 0);
  quadraticVertex(
    offsetX - radius,
    offsetY - offset * orientation,
    offsetX - radius + offset,
    offsetY - offset * orientation
  );
  vertex(offsetX + radius - offset, offsetY - offset * orientation);
  quadraticVertex(
    offsetX + radius,
    offsetY - offset * orientation,
    offsetX + radius,
    offsetY - 0
  );
  vertex(offsetX + radius, offsetY - offset * orientation);
  quadraticVertex(
    offsetX + radius,
    offsetY - radius * orientation,
    offsetX + 0,
    offsetY - radius * orientation
  );
  vertex(offsetX - edge, offsetY - radius * orientation);
  quadraticVertex(
    offsetX - radius,
    offsetY - radius * orientation,
    offsetX - radius,
    offsetY + 0
  );
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let targetWidth = 200;
  let targetHeight = 200;
  let targetX = 0;
  let targetY = 50;
  let size = 100;
  let targetOrient = 1;
  let targetEdge = 0;
  let defaultChar = getObjFromChar("C");

  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["angle"] = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);
  new_letter["offsetX1"] = map(percent,0,100,oldObj["offsetX1"],newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent,0,100,oldObj["offsetY1"],newObj["offsetY1"]);
  new_letter["offsetX2"] = map(percent,0,100,oldObj["offsetX2"],newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent,0,100,oldObj["offsetY2"],newObj["offsetY2"]);
  new_letter["rX"] = map(percent, 0, 100, oldObj["rX"], newObj["rX"]);
  new_letter["rY"] = map(percent, 0, 100, oldObj["rY"], newObj["rY"]);
  new_letter["rW"] = map(percent, 0, 100, oldObj["rW"], newObj["rW"]);
  new_letter["rH"] = map(percent, 0, 100, oldObj["rH"], newObj["rH"]);

  if (percent < 50) {
    new_letter["edge1"] = map(percent, 0, 50, oldObj["edge1"], targetEdge);
    new_letter["edge2"] = map(percent, 0, 50, oldObj["edge2"], targetEdge);
  } else {
    new_letter["edge1"] = map(percent, 51, 100, targetEdge, newObj["edge1"]);
    new_letter["edge2"] = map(percent, 51, 100, targetEdge, newObj["edge2"]);
  }

  if (percent < 50) {
    new_letter["orientation1"] = map(percent,0,50,oldObj["orientation1"],targetOrient);
    new_letter["orientation2"] = map(percent,0,50,oldObj["orientation2"],targetOrient);
  } else {
    new_letter["orientation1"] = map(percent,51,100,targetOrient,newObj["orientation1"]);
    new_letter["orientation2"] = map(percent,51,100,targetOrient,newObj["orientation2"]);
  }
  return new_letter;
}

var swapWords = [
  "WISTERIA","01010101","23456789","GENERATE","?WINGED?","CREATURE",
  "PAPILLON","?NECTAR?","MARIPOSA","BLOOMING","?GARDEN?","INJURIES",
  "FLOURISH","BEDAZZLE","SWEETEST","LOVINGLY","TENDERLY","CLUELESS",
  "DAYDREAM","ROMANTIC","FOLKLORE","EVERMORE","ROTATION",
  "ENVELOPE","FLIPPING","?UNFOLD?","SPINNING","DISASTER","ENVISION",
  "MAXIMISE","EXTENDED","AUTONOMY","FRAGMENT","ILLUSION",
  "EXERCISE","DIVISION","DESIGNER","HEADLINE","CAMPAIGN","NONSENSE",
  "MOUNTAIN","CEMETERY","SCENARIO"
]