/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";


const backgroundColor  = "#908aff";
//const strokeColor      = "#171717";

const orange  = "#eb5e34";
const yellow  = "#ebab34";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  push();
  scale(0.6)
  // determine parameters for second circle
  let posx = 85
  let posy = 250


  let size2 = letterData["size"];
  pos2x = posx + letterData["offsetx"];
  pos2y = posy + letterData["offsety"];
  let cor1 = letterData["corner1"];
  let cor2 = letterData["corner2"];
  let cor3 = letterData["corner3"];
  let cor4 = letterData["corner4"];

  // draw two circles
  rectMode(CENTER)
  fill(orange);
  rect(posx, posy, 150, 150, cor1, cor2, cor3, cor4);
  fill(yellow);
  rect(pos2x, pos2y, size2, size2, cor1, cor2, cor3, cor4);
  pop();
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
