const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // fill/stroke setup
  noFill();
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["primary_size"];
  let size3 = letterData["secondary_size"];
  let pos2x = 10 + letterData["prim_offsetx"];
  let pos2y = 100 + letterData["prim_offsety"];
  let pos3x = 10 + letterData["sec_offsetx"];
  let pos3y = 100 + letterData["sec_offsety"];

  // draw two circles
  stroke(71, 145, 121);
  rect(10, 100, 80, 80);
  stroke(119, 175, 142);
  rect(pos3x, pos3y, size3 + 10, size3);
  stroke(212, 242, 198);
  rect(pos2x, pos2y, size2 + 10, size2);
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["primary_size"]    = map(percent, 0, 100, oldObj["primary_size"], newObj["primary_size"]);
  new_letter["prim_offsetx"] = map(percent, 0, 100, oldObj["prim_offsetx"], newObj["prim_offsetx"]);
  new_letter["prim_offsety"] = map(percent, 0, 100, oldObj["prim_offsety"], newObj["prim_offsety"]);
  new_letter["sec_offsetx"] = map(percent, 0, 100, oldObj["sec_offsetx"], newObj["sec_offsetx"]);
  new_letter["sec_offsety"] = map(percent, 0, 100, oldObj["sec_offsety"], newObj["sec_offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]