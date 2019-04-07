const colorMainRect  = "#e6f0f7";
const colorFrontRect  = "#99bbe0";
const colorStroke  = "#0f2133";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for moving rectangles
  let size2 = letterData["primary_size"];
  let size3 = letterData["secondary_size"];
  let pos2x = 10 + letterData["prim_offsetx"];
  let pos2y = 100 + letterData["prim_offsety"];
  let pos3x = 10 + letterData["sec_offsetx"];
  let pos3y = 100 + letterData["sec_offsety"];
  let pos4x = 10 + letterData["third_offsetx"];
  let pos4y = 100 + letterData["third_offsety"];
  let pos5x = 10 + letterData["fourth_offsetx"];
  let pos5y = 100 + letterData["fourth_offsety"];

  // draw five rectangles
  fill(colorMainRect);
  rect(10, 100, 80, 80);
  fill(colorFrontRect);
  rect(pos3x, pos3y, size3 + 10, size3);
  rect(pos4x, pos4y, size3 + 10, size3);
  rect(pos5x, pos5y, size2 + 10, size2);
  rect(pos2x, pos2y, size2 + 10, size2); 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["primary_size"]    = map(percent, 0, 100, oldObj["primary_size"], newObj["primary_size"]);
  new_letter["secondary_size"]    = map(percent, 0, 100, oldObj["secondary_size"], newObj["secondary_size"]);
  new_letter["prim_offsetx"] = map(percent, 0, 100, oldObj["prim_offsetx"], newObj["prim_offsetx"]);
  new_letter["prim_offsety"] = map(percent, 0, 100, oldObj["prim_offsety"], newObj["prim_offsety"]);
  new_letter["sec_offsetx"] = map(percent, 0, 100, oldObj["sec_offsetx"], newObj["sec_offsetx"]);
  new_letter["sec_offsety"] = map(percent, 0, 100, oldObj["sec_offsety"], newObj["sec_offsety"]);
  new_letter["third_offsetx"] = map(percent, 0, 100, oldObj["third_offsetx"], newObj["third_offsetx"]);
  new_letter["third_offsety"] = map(percent, 0, 100, oldObj["third_offsety"], newObj["third_offsety"]);
  new_letter["fourth_offsetx"] = map(percent, 0, 100, oldObj["fourth_offsetx"], newObj["fourth_offsetx"]);
  new_letter["fourth_offsety"] = map(percent, 0, 100, oldObj["fourth_offsety"], newObj["fourth_offsety"]);
  return new_letter;
}

var swapWords = [
  "OLDFOGEY",
  " SQUARE ",
  "  FONT  ",
  "MAIAHILL",
  "LETS GO?"
]