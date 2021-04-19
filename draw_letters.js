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
  strokeWeight(10);

  let pos1x = letterData["x1"];
  let pos2x = letterData["x2"];
  let pos3x = letterData["x3"];
  let pos4x = letterData["x4"];
  let pos5x = letterData["x5"];
  
  let pos1y = letterData["y1"];
  let pos2y = letterData["y2"];
  let pos3y = letterData["y3"];
  let pos4y = letterData["y4"];
  let pos5y = letterData["y5"];
  


  // draws lines
  line(pos1x, pos1y, pos2x, pos2y);
  line(pos2x, pos2y, pos3x, pos3y);
  line(pos3x, pos3y, pos4x, pos4y);
  line(pos4x, pos4y, pos5x, pos5y);
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