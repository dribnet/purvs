/* these are optional special variables which will change the system */
var systemBackgroundColor = "#161513";
var systemLineColor = "#5a5137";
var systemBoxColor = "#8FAF6F";

/* internal constants */
const darkBlue  = "#e1ddd3";
const lightBlue  = "#161513";
const strokeColor  = "#e1ddd3";
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
  fill(strokeColor);
  letterform(letterData["size"],
             letterData["orientation1"],letterData["orientation2"],
             letterData["edge1"],letterData["edge2"],
             letterData["angle1"],letterData["angle2"],
             letterData["offsetX1"],letterData["offsetY1"],
             letterData["offsetX2"],letterData["offsetY2"],
             letterData["rX"],letterData["rY"],
             letterData["rW"],letterData["rH"]);
  pop();
}
function letterform(size,
                    orientation1,orientation2,
                    edge1, edge2,
                    angle1,angle2,
                    offsetX1,offsetY1,
                    offsetX2,offsetY2,
                    rX,rY,rW,rH){
  rect(rX,rY,rW,rH);
  push();
  customShape(angle1,edge1,orientation1,offsetX1,offsetY1,size);
  customShape(angle2,edge2,orientation2,offsetX2,offsetY2,size);
  pop();
}
function customShape (angle,edge,orientation,offsetX,offsetY,size){ 
  // right = 1, left = -1
  let radius = size;
  let offset = dist(radius, radius / 5, radius - radius / 5, radius / 5);
  push();
  angleMode(DEGREES); 
  rotate(angle);
  beginShape();
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
    vertex(offsetX - edge,offsetY - radius * orientation);
    quadraticVertex(
      offsetX - radius,
      offsetY - radius * orientation,
      offsetX - radius,
      offsetY + 0
    ); 
  endShape(CLOSE);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["orientation1"]    = map(percent, 0, 100, oldObj["orientation1"], newObj["orientation1"]);
  new_letter["orientation2"] = map(percent, 0, 100, oldObj["orientation2"], newObj["orientation2"]);
  new_letter["edge1"] = map(percent, 0, 100, oldObj["edge1"], newObj["edge1"]);
  new_letter["edge2"]    = map(percent, 0, 100, oldObj["edge2"], newObj["edge2"]);
  new_letter["angle1"] = map(percent, 0, 100, oldObj["angle1"], newObj["angle1"]);
  new_letter["angle2"]    = map(percent, 0, 100, oldObj["angle2"], newObj["angle2"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["circleY"], newObj["circleY"]);
  new_letter["offsetX2"]    = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["rX"] = map(percent, 0, 100, oldObj["rX"], newObj["rX"]);
  new_letter["rY"] = map(percent, 0, 100, oldObj["rY"], newObj["rY"]);
  new_letter["rW"] = map(percent, 0, 100, oldObj["rW"], newObj["rW"]);
  new_letter["rH"] = map(percent, 0, 100, oldObj["rH"], newObj["rH"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]