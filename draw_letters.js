/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor  = "#233f11";
const brightGreen  = "#59ff8b";
const lightBlue  = "#59ccff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  push()
  //setup the sketch
  angleMode(DEGREES)

  // determine parameters for letter
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];

  // draw two circles
  
   fill(lightBlue);
  ellipse(50, 150, 100, 100);

  fill(brightGreen);
  arc(pos2x, pos2y, size2, size2,startAngle, stopAngle,CHORD);
  
  pop()
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