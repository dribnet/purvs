const colorFront1  = "#2bad8f";
const colorFront2  = "#2b8aad";
//const colorBack    = "#2bad4e";   BACKGROUND COLOUR
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)
  // determine parameters for triangles
  let size2 = letterData["size"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let stroke1 = letterData["stroke1"];
  let stroke2 = letterData["stroke2"];
  let sizer2 = letterData["scale2"];

  // draw some lines:
  // line(posx, posy, posx+50, posy+50);
  // line(pos2x, pos2y, pos2x-50, pos2y-50);
  // draw some triangles:
  strokeWeight(stroke2);
  fill(colorFront2);
  triangle(50, 100-25, 50+50, 100+50, 50-50, 100+50);
  strokeWeight(stroke1);
  fill(colorFront1);
  push();
  scale(sizer2);
  translate(-(sizer2-1)*240, -(sizer2-1)*30);
  triangle(pos2x, pos2y-12.5, pos2x+25, pos2y+25, pos2x-25, pos2y+25);
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
// change these to be more appropriate for my design - font name - other relevant words
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]