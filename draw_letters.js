const colorFront1  = "#fc210d ";
const colorFront2  = "#fb4c18";
const colorFront3  = "#f8a32d";
const colorFront4  = "#f7ce38";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters - rectangles
  let rect1x = letterData["rect1x"];
  let rect1y = letterData["rect1y"];
  let rect1Width = letterData["rect1w"];
  let rect1Height = letterData["rect1h"];

  let rect2x = letterData["rect2x"];
  let rect2y = letterData["rect2y"];
  let rect2Width = letterData["rect2w"];
  let rect2Height = letterData["rect2h"];

  let rect3x = letterData["rect3x"];
  let rect3y = letterData["rect3y"];
  let rect3Width = letterData["rect3w"];
  let rect3Height = letterData["rect3h"];

  let rect4x = letterData["rect4x"];
  let rect4y = letterData["rect4y"];
  let rect4Width = letterData["rect4w"];
  let rect4Height = letterData["rect4h"];


  // draw shapes
  fill(colorFront4);
  noStroke();
  rect(rect4x, rect4y, rect4Width, rect4Height, 20);
  fill(colorFront3);
  noStroke();
  rect(rect3x, rect3y, rect3Width, rect3Height, 20);
  fill(colorFront2);
  noStroke();
  rect(rect2x, rect2y, rect2Width, rect2Height, 20);
  fill(colorFront1);
  noStroke();
  rect(rect1x, rect1y, rect1Width, rect1Height, 20);
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