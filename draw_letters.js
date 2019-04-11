const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#7ea3dd";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
noStroke();

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];


fill(colorStroke)
rect(0,0,100,200)
fill(colorFront2)
  triangle(letterData["v1x"],letterData["v1y"],letterData["v2x"],letterData["v2y"],letterData["v3x"],letterData["v3y"]);
  triangle(letterData["v4x"],letterData["v4y"],letterData["v5x"],letterData["v5y"],letterData["v6x"],letterData["v6y"]);
  fill(colorFront1)
  triangle(letterData["v7x"],letterData["v7y"],letterData["v8x"],letterData["v8y"],letterData["v9x"],letterData["v9y"]);



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