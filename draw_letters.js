const colorFront1  = "#000000";
const colorFront2  = "#32a852";
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
  ellipseMode(CENTER)
  // determine parameters for second circle
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"]
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let arc1 = letterData["arcx"]
  let arc2 = letterData["arcy"]

  // draw two circles
  fill(colorFront1);
  ellipse(50, 100, 100, 100);
  fill(colorFront2);
  arc(pos2x, pos2y, size1, size2, arc1, arc2)
  //ellipse(pos2x, pos2y, size2, size2);

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