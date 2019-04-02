const colorFront1  = "#264953";
const colorFront2  = "#16625E";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size4"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 50  + letterData["offsetx2"];
  let pos3y = 150 + letterData["offsety2"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 15, 25, 25);
  ellipse(pos3x, pos3y, 25, 25);
  fill(colorFront2);
  rectMode(CENTER);
  rect(pos2x, pos2y, size2, size3);
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