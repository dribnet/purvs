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

  //setup the sketch 
  angleMode(DEGREES)
  noStroke();
  // determine parameters for letter
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  let startAngle = letterData["ArcStart"];
  let stopAngle = letterData["ArcEnd"];
  let sideTriangle = letterData["TrianglePoint"];
  // draw two circles
  fill(lightBlue);
  triangle(pos2x-25-size2, pos2y+sideTriangle, pos2x, pos2y-50,pos2x+25+size2,pos2y+sideTriangle);
  fill(lightBlue);
  arc(50, 100, 100, 100,startAngle,stopAngle);
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