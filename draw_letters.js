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
  let pos1SmallX = 50 + letterData["offset1Smallx"];
  let pos1SmallY = 100 + letterData["offset1Smally"];
  let stroke1Small = letterData["stroke1Small"];
  let stroke1Big = letterData["stroke1Big"];
  let rotate1Big = letterData["rotate1S"];
  let rotate2Big = letterData["rotate1S"];
  let rotate1Small = letterData["rotate1S"];
  let rotate2Small = letterData["rotate1S"];

  // draw some lines:
  // line(posx, posy, posx+50, posy+50);
  // line(pos2x, pos2y, pos2x-50, pos2y-50);
  // draw some triangles:
  strokeWeight(stroke1Big);
  fill(colorFront2);
  //triangle(50, 100-25, 50+50, 100+50, 50-50, 100+50);   // first big triangle

  push();
  translate(50, 100);
  rotate(rotate1Small);
  strokeWeight(stroke1Big);
  fill(colorFront2);
  triangle(0, -25, 50, 50, -50, 50);   // second big triangle
  pop();

  strokeWeight(stroke1Small);
  fill(colorFront1);
  triangle(pos1SmallX, pos1SmallY-12.5, pos1SmallX+25, pos1SmallY+25, pos1SmallX-25, pos1SmallY+25);   // first small triangle
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