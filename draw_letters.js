
const colorFront1  = "#2bad8f";
const colorFront2  = "#2b8aad";
//const colorBack    = "#2bad4e";
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
  let pos2SmallX = 50 + letterData["offset2Smallx"];
  let pos2SmallY = 100 + letterData["offset2Smally"];
  let rotate1Small = letterData["rotate1S"];
  let rotate2Small = letterData["rotate2S"];
  let rotate1Big = letterData["rotate1B"];
  let stroke1Small = letterData["stroke1Small"];
  let stroke1Big = letterData["stroke1Big"];

  // draw some triangles:
  push();
  translate(50, 100);
  rotate(rotate1Big);
  strokeWeight(stroke1Big);
  noStroke();
  fill(colorFront2);
  triangle(0, -25, 50, 50, -50, 50);   // first big triangle
  pop();

  push();
  translate(-50,-100);
  translate(pos1SmallX, pos1SmallY);
  rotate(rotate1Small);
  strokeWeight(stroke1Small);
  noStroke();
  fill(colorFront1);
  triangle(0, -12.5, 25, 25, -25, 25);   // first small triangle
  pop();

  push();
  translate(-50,-100);
  translate(pos2SmallX, pos2SmallY);
  rotate(rotate2Small);
  strokeWeight(stroke1Small);
  noStroke();
  fill(colorFront1);
  triangle(0, -12.5, 25, 25, -25, 25);   // second small triangle
  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offset1Smallx"]    = map(percent, 0, 100, oldObj["offset1Smallx"], newObj["offset1Smallx"]);
  new_letter["offset1Smally"] = map(percent, 0, 100, oldObj["offset1Smally"], newObj["offset1Smally"]);
  new_letter["offset2Smallx"] = map(percent, 0, 100, oldObj["offset2Smallx"], newObj["offset2Smallx"]);
  new_letter["offset2Smally"] = map(percent, 0, 100, oldObj["offset2Smally"], newObj["offset2Smally"]);
  new_letter["rotate1S"] = map(percent, 0, 100, oldObj["rotate1S"], newObj["rotate1S"]);
  new_letter["rotate2S"] = map(percent, 0, 100, oldObj["rotate2S"], newObj["rotate2S"]);
  new_letter["rotate1B"] = map(percent, 0, 100, oldObj["rotate1B"], newObj["rotate1B"]);
  new_letter["stroke1Small"] = map(percent, 0, 100, oldObj["stroke1Small"], newObj["stroke1Small"]);
  new_letter["stroke1Big"] = map(percent, 0, 100, oldObj["stroke1Big"], newObj["stroke1Big"]);
  return new_letter;
}

var swapWords = [
  "TRIIFONT",
  "TRIIIMAX",
  "MAXCHICK",
  "TRIANGLE",
  "12345678"
]