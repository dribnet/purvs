/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

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
  angleMode(DEGREES);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 0 + letterData["offsetx"];
  let pos2y = 0 + letterData["offsety"];

  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];

  // draw two circles
  fill(darkBlue);
  ellipse(50, 150, 80, 80);
  fill(lightBlue);
  arc(pos2x, pos2y, size2, size2, startAngle, stopAngle, CHORD);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"] = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "ABBDDADA",
  "DADABBDD"
]