/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";


/* internal constants */
const darkBlue = "#199cff";
const lightBlue = "#59ccff";
const strokeColor = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let width = letterData["width"];
  let height = letterData["height"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 40 + letterData["offsetx3"];
  let pos3y = 120 + letterData["offsety3"];

  // draw two circles
  noFill();
  stroke(0);
  strokeWeight(2.5);
  ellipse(50, 150, 75, 75); //Main shape

  // ellipse(pos2x, pos2y, size2, size2);
  rect(pos3x, pos3y, width, height);
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
