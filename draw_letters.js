/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF";
var systemLineColor = "#000000";
var systemBoxColor = "#5479A3";


/* internal constants */

const strokeColor = "#000000";
const white = "#FFFFFF";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  // stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES);
  blendMode(DIFFERENCE);

  //Parameters
  let size = letterData["size"];
  let size1 = letterData["size1"];
  let width = letterData["width"];
  let height = letterData["height"];
  let posx = 50 + letterData["offsetx"];
  let posy = 150 + letterData["offsety"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];
  let pos2x = 50 + letterData["offsetx2"];
  let pos2y = 150 + letterData["offsety2"];
  let pos3x = 40 + letterData["offsetx3"];
  let pos3y = 120 + letterData["offsety3"];
  let angle = letterData["angle"];

  //Draws an arc
  noFill();
  stroke(white);
  strokeWeight(2.5);
  arc(posx, posy, size, size, arcStart, arcEnd);

  //Draws an ellipse
  noStroke();
  fill(white);
  ellipse(pos2x, pos2y, size1, size1);

  //Draws a rect and rotates it
  fill(white);
  push();
  translate(pos3x, pos3y);
  rotate(angle);
  rect(0, 0, width, height);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
