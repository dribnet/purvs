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
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let sizeX = letterData["sizeX"];
  let sizeY = letterData["sizeY"];
  let offsetX = letterData["offsetX"] -sizeX;
  let offsetY = letterData["offsetY"] - sizeY;


  // draw two circles
  stroke(0,0,0,0);
  fill(colorFront1);
  triangle(50, 0, 100, 200, 0, 200)
  stroke(255);
  fill(0,0,0,0);
  triangle(offsetX, sizeY + offsetY, sizeX + offsetX, sizeY + offsetY, sizeX / 2 + offsetX, offsetY)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeY"]    = map(percent, 0, 100, oldObj["sizeY"], newObj["sizeY"]);
  new_letter["sizeX"]    = map(percent, 0, 100, oldObj["sizeX"], newObj["sizeX"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]