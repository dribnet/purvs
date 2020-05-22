const colorFront1  = "#a83232";
const colorFront2  = "#1f0b02";
const colorBack1    = "#ff8000";
const colorStroke  = "#a83232";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  let size2x = letterData["sizerectx"];
  let size2y = letterData["sizerecty"];

  let pos2x = letterData["offsetrectx"];
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

  angleMode(DEGREES)
  fill(colorFront1);

  triangle(postri1ax, postri1ay-50, postri2ax+50,postri2ay-100,postri3ax+100,postri3ay-50);

  triangle(postri1bx, postri1by, postri2bx+50,postri2by-50,postri3bx+100,postri3by);

  triangle(postri1cx, postri1cy+50, postri2cx+50,postri2cy,postri3cx+100,postri3cy+50);
 
  fill(colorFront2)
 
  strokeWeight(2)
  stroke(colorStroke)
  fill(0,220);
  rect(pos2x, pos2y, size2x, size2y);
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