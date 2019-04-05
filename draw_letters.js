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
stroke(colorFront2);
strokeWeight(5);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

noFill();
  triangle(letterData["v1x"],letterData["v1y"],letterData["v2x"],letterData["v2y"],letterData["v3x"],letterData["v3y"]);
  triangle(letterData["v4x"],letterData["v4y"],letterData["v5x"],letterData["v5y"],letterData["v6x"],letterData["v6y"]);
  fill(colorFront1);
stroke(colorFront1);
  triangle(letterData["v7x"],letterData["v7y"],letterData["v8x"],letterData["v8y"],letterData["v9x"],letterData["v9y"]);



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["v1x"] = map(percent, 0, 100, oldObj["v1x"], newObj["v1x"]);
  new_letter["v1y"] = map(percent, 0, 100, oldObj["v1y"], newObj["v1y"]);
    new_letter["v2x"] = map(percent, 0, 100, oldObj["v2x"], newObj["v2x"]);
  new_letter["v2y"] = map(percent, 0, 100, oldObj["v2y"], newObj["v2y"]);
    new_letter["v3x"] = map(percent, 0, 100, oldObj["v3x"], newObj["v3x"]);
  new_letter["v3y"] = map(percent, 0, 100, oldObj["v3y"], newObj["v3y"]);
    new_letter["v4x"] = map(percent, 0, 100, oldObj["v4x"], newObj["v4x"]);
  new_letter["v4y"] = map(percent, 0, 100, oldObj["v4y"], newObj["v4y"]);
    new_letter["v5x"] = map(percent, 0, 100, oldObj["v5x"], newObj["v5x"]);
  new_letter["v5y"] = map(percent, 0, 100, oldObj["v5y"], newObj["v5y"]);
    new_letter["v6x"] = map(percent, 0, 100, oldObj["v6x"], newObj["v6x"]);
  new_letter["v6y"] = map(percent, 0, 100, oldObj["v6y"], newObj["v6y"]);
    new_letter["v7x"] = map(percent, 0, 100, oldObj["v7x"], newObj["v7x"]);
  new_letter["v7y"] = map(percent, 0, 100, oldObj["v7y"], newObj["v7y"]);
    new_letter["v8x"] = map(percent, 0, 100, oldObj["v8x"], newObj["v8x"]);
  new_letter["v8y"] = map(percent, 0, 100, oldObj["v8y"], newObj["v8y"]);
    new_letter["v9x"] = map(percent, 0, 100, oldObj["v9x"], newObj["v9x"]);
  new_letter["v9y"] = map(percent, 0, 100, oldObj["v9y"], newObj["v9y"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
