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
  stroke(strokeColor);
  strokeWeight(3);
  noFill();
  ellipseMode(CORNER);

  rect(letterData["vertRectX"],letterData["vertRectY"],letterData["vertRectWidth"],letterData["vertRectHeight"], roundCorner);
  circle(letterData["circleX"],letterData["circleY"],letterData["circleSize"]);
  rect(letterData["horizRectX"],letterData["horizRectY"],letterData["horizRectWidth"],letterData["horizRectHeight"], roundCorner);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
