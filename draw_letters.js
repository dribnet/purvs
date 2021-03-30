/* these are optional special variables which will change the system */
var systemBackgroundColor = "#c9afaf";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const colourRed  = "#a83636";
const colourBlack  = "#1f1f1f";
const strokeColor  = "#f2f2f2";

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
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let A1 = letterData["point1A"];
  let A2 = letterData["point2A"];
  let A3 = letterData["point3A"];
  let B1 = letterData["point1B"];
  let B2 = letterData["point2B"];
  let B3 = letterData["point3B"];
  let C1 = letterData["point1C"];
  let C2 = letterData["point2C"];
  let C3 = letterData["point3C"];
  let D1 = letterData["point1D"];
  let D2 = letterData["point2D"];
  let D3 = letterData["point3D"];

  // draw two triangles
  fill(colourRed);
  triangle(A1, B1, A2, B2, A3, B3);
  fill(colourBlack);
  triangle(C1, D1, C2, D2, C3, D3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["point1A"] = map(percent, 0, 100, oldObj["point1A"], newObj["point1A"]);
  new_letter["point2A"] = map(percent, 0, 100, oldObj["point2A"], newObj["point2A"]);
  new_letter["point3A"] = map(percent, 0, 100, oldObj["point3A"], newObj["point3A"]);
  new_letter["point1B"] = map(percent, 0, 100, oldObj["point1B"], newObj["point1B"]);
  new_letter["point2B"] = map(percent, 0, 100, oldObj["point2B"], newObj["point2B"]);
  new_letter["point3B"] = map(percent, 0, 100, oldObj["point3B"], newObj["point3B"]);
  new_letter["point1C"] = map(percent, 0, 100, oldObj["point1C"], newObj["point1C"]);
  new_letter["point2C"] = map(percent, 0, 100, oldObj["point2C"], newObj["point2C"]);
  new_letter["point3C"] = map(percent, 0, 100, oldObj["point3C"], newObj["point3C"]);
  new_letter["point1D"] = map(percent, 0, 100, oldObj["point1D"], newObj["point1D"]);
  new_letter["point2D"] = map(percent, 0, 100, oldObj["point2D"], newObj["point2D"]);
  new_letter["point3D"] = map(percent, 0, 100, oldObj["point3D"], newObj["point3D"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]