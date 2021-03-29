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
  noStroke();
  // // determine parameters for second circle
  let RecX = letterData["Rwidth"];
  let RecY = letterData["Rheight"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let CircleX =letterData["CircleX"];
  let CircleY = letterData["CircleY"];
  let CircleS = letterData["size"];
  let TriP = letterData["Trix"];
  let TriP2 = letterData["Trix2"];
  let TriPy = letterData["TriY"];
  let TriPy2 = letterData["TriY2"];
  // // draw two circles
   fill("#9c4887");
  // ellipse(posx, posy, 150, 150);
   
  // arc(pos2x, pos2y, size2, size2, angleS, angleE);

  rect(pos2x, pos2y, RecX, RecY);
  ellipse(CircleX, CircleY-50, CircleS);
  ellipse(CircleX, CircleY, CircleS);
  fill("#ba7599");
  beginShape();
  vertex(TriP, TriPy);
  vertex(TriP2, TriPy2);
  vertex(TriP2 + 60, TriPy2);  
  endShape();  

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