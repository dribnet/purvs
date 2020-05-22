const colourFront1  = "#a83232";
const colourFront2  ="#58375c";
const colourFront3 ="#37465c";
const colorFront4  = "#f8fae6";
const colorBack1    = "#362319";
const colorStroke  = "#362319";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  
  let size2y = letterData["sizerecty"];
  let pos2y = letterData["offsetrecty"];
  let postri1ax = letterData["trianglePoint1ax"];
  let postri1ay = letterData["trianglePoint1ay"];
  let postri2ax = letterData["trianglePoint2ax"];
  let postri2ay = letterData["trianglePoint2ay"];                                                            
  let postri3ax = letterData["trianglePoint3ax"];
  let postri3ay = letterData["trianglePoint3ay"];
  let postri1bx = letterData["trianglePoint1bx"];
  let postri1by = letterData["trianglePoint1by"];
  let postri2bx = letterData["trianglePoint2bx"];
  let postri2by = letterData["trianglePoint2by"];
  let postri3bx = letterData["trianglePoint3bx"];
  let postri3by = letterData["trianglePoint3by"];
  let postri1cx = letterData["trianglePoint1cx"];
  let postri1cy = letterData["trianglePoint1cy"];
  let postri2cx = letterData["trianglePoint2cx"];
  let postri2cy = letterData["trianglePoint2cy"];
  let postri3cx = letterData["trianglePoint3cx"];
  let postri3cy = letterData["trianglePoint3cy"];

  fill(colourFront1);
  triangle(postri1ax, postri1ay-50, postri2ax+50,postri2ay-100,postri3ax+100,postri3ay-50);
  fill(colourFront2)
  triangle(postri1bx, postri1by, postri2bx+50,postri2by-50,postri3bx+100,postri3by);
  fill(colourFront3)
  triangle(postri1cx, postri1cy+50, postri2cx+50,postri2cy,postri3cx+100,postri3cy+50);
 
  fill(colorFront4)
 
  strokeWeight(1.5)
  stroke(colorStroke)
  fill(220,190);
  rect(40, pos2y, 20, size2y);
}




function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
 
  new_letter["sizerecty"]    = map(percent, 0, 100, oldObj["sizerecty"], newObj["sizerecty"]);
  new_letter["offsetrecty"] = map(percent, 0, 100, oldObj["offsetrecty"], newObj["offsetrecty"]);
  new_letter["trianglePoint1ax"] = map(percent, 0, 100, oldObj["trianglePoint1ax"], newObj["trianglePoint1ax"]);
  new_letter["trianglePoint1ay"] = map(percent, 0, 100, oldObj["trianglePoint1ay"], newObj["trianglePoint1ay"]);
  new_letter["trianglePoint2ay"] = map(percent, 0, 100, oldObj["trianglePoint2ay"], newObj["trianglePoint2ay"]);
  new_letter["trianglePoint2ax"] = map(percent, 0, 100, oldObj["trianglePoint2ax"], newObj["trianglePoint2ax"]);
  new_letter["trianglePoint3ax"] = map(percent, 0, 100, oldObj["trianglePoint3ax"], newObj["trianglePoint3ax"]);
  new_letter["trianglePoint3ay"] = map(percent, 0, 100, oldObj["trianglePoint3ay"], newObj["trianglePoint3ay"]);
  new_letter["trianglePoint1by"] = map(percent, 0, 100, oldObj["trianglePoint1by"], newObj["trianglePoint1by"]);
  new_letter["trianglePoint1bx"] = map(percent, 0, 100, oldObj["trianglePoint1bx"], newObj["trianglePoint1bx"]);
  new_letter["trianglePoint2bx"] = map(percent, 0, 100, oldObj["trianglePoint2bx"], newObj["trianglePoint2bx"]);
  new_letter["trianglePoint2by"] = map(percent, 0, 100, oldObj["trianglePoint2by"], newObj["trianglePoint2by"]);
  new_letter["trianglePoint3by"] = map(percent, 0, 100, oldObj["trianglePoint3by"], newObj["trianglePoint3by"]);
  new_letter["trianglePoint3bx"] = map(percent, 0, 100, oldObj["trianglePoint3bx"], newObj["trianglePoint3bx"]);
  new_letter["trianglePoint1cx"] = map(percent, 0, 100, oldObj["trianglePoint1cx"], newObj["trianglePoint1cx"]);
  new_letter["trianglePoint1cy"] = map(percent, 0, 100, oldObj["trianglePoint1cy"], newObj["trianglePoint1cy"]);
  new_letter["trianglePoint2cy"] = map(percent, 0, 100, oldObj["trianglePoint2cy"], newObj["trianglePoint2cy"]);
  new_letter["trianglePoint2cx"] = map(percent, 0, 100, oldObj["trianglePoint2cx"], newObj["trianglePoint2cx"]);
  new_letter["trianglePoint3cx"] = map(percent, 0, 100, oldObj["trianglePoint3cx"], newObj["trianglePoint3cx"]);
  new_letter["trianglePoint3cy"] = map(percent, 0, 100, oldObj["trianglePoint3cy"], newObj["trianglePoint3cy"]);
  return new_letter;
} 
var swapWords = [
  "TAPEFONT",
  "CARDTAPE",
  "?A98YQP?",
]