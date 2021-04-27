/* these are optional special variables which will change the system */
var systemBackgroundColor = "#5bc8ac"; // turquoise
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */ 
const pink  = "#f18d9e";
const aqua  = "#98dbc6";
const yellow = "#e6d72a";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 
function drawLetter(letterData) {
  // setup
  angleMode(DEGREES);
  noStroke();

  // determine parameters for 
  let size2 = letterData["size"];

  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  let arcStart = letterData["start"];
  let arcMode = letterData["mode"];

  // draw circle and triangles
  fill(pink);
  ellipse(0, 0, 150, 150);
  fill(aqua);
  arc(pos2x, pos2y, size2, size2, arcStart, arcMode);
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