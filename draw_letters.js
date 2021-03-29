/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
//const strokeColor = "#7a0901";
const darkRed = "#9e0d03";
const midRed = "#eb4034";
const lightRed = "#ff6257";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //setup the sketch
  angleMode(DEGREES);

  // color/stroke setup
  //stroke(strokeColor);
  //strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size2"]
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let pos3x = letterData["offsetx2"];
  let pos3y = letterData["offsety2"];

  noStroke()

  // draw three circles
  fill(darkRed);
  ellipse(50, 150, 100, 100);

  fill(midRed);
  ellipse(pos2x, pos2y, size2, size2);

  fill(lightRed);
  ellipse(pos3x, pos3y, size3, size3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]