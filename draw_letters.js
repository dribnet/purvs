const colorFront1  = "#ffe6b3";
const colorFront2  = "#ff8000";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
   let size2 = letterData["size"];
  //the positions for the rectangles
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let size3 = letterData["size2"];
  let pos3x = 50  + letterData["arcx"];
  let pos3y = 150 + letterData["arcy"];

  // DRAW
  stroke(colorFront1);
  noFill();
  //line(pos2x, pos2y, size2, size2);
  rect(pos2x, pos2y, size2, size2);

  push();
  noStroke();
  fill(colorFront2)
  arc(pos3x, pos3y, size3, size3, PI, TWO_PI);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["l1x"] = map(percent, 0, 100, oldObj["l1x"], newObj["l1x"]);
  new_letter["l1y"] = map(percent, 0, 100, oldObj["l1y"], newObj["l1y"]);
  new_letter["l2x"] = map(percent, 0, 50, oldObj["l2x"], newObj["l2y"]);
  new_letter["l2y"] = map(percent, 0, 0, oldObj["l2y"], newObj["l2y"]);
  
  new_letter["a1x"] = map(percent, 0, 100, oldObj["a1x"], newObj["a1x"]);
  new_letter["a1y"] = map(percent, 0, 100, oldObj["a1y"], newObj["a1y"]);
  new_letter["a1Start"] = map(percent, 0, 100, oldObj["a1Start"], newObj["a1Start"]);
  new_letter["aw"] = map(percent, 0, 100, oldObj["aw"], newObj["aw"]);
  new_letter["ah"] = map(percent, 0, 100, oldObj["ah"], newObj["ah"]);

  new_letter["a2x"] = map(percent, 0, 100, oldObj["a2x"], newObj["a2x"]);
  new_letter["a2y"] = map(percent, 0, 100, oldObj["a2y"], newObj["a2y"]);
  new_letter["a2Start"] = map(percent, 0, 100, oldObj["a2Start"], newObj["a2Start"]);
  new_letter["a2w"] = map(percent, 0, 100, oldObj["a2w"], newObj["a2w"]);
  new_letter["a2h"] = map(percent, 0, 100, oldObj["a2h"], newObj["a2h"]);
  return new_letter;
}

var swapWords = [
  "HEADLINE",
  "LINEARCS",
  "?LINEAR?"
]