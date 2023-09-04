const colorFront1  = "#7A14A6";
const colorFront2  = "#BF0F90";
const colorFill1 = "#7A14A6";
const colorFill2 = "#BF0F90";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  //noFill();
  strokeWeight(4);

  // determine parameters for squares
  //purple square
  let size1 = letterData["size1"];
  let pos1x = 50 + letterData["offsetx1"];
  let pos1y = 150 + letterData["offsety1"];

  //pink square
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two squares
  //purple square
  stroke(colorFront1);
  fill(colorFill1);
  rect(pos1x, pos1y, size1, size1);
  //pink square
  stroke(colorFront2);
  fill(colorFill2)
  rect(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //purple square
  new_letter["size1"] = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
 
  //pink square
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "FLY-HIGH",
  "FLAGFONT",
  "CONDORDE",
  "12345678"
]