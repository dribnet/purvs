const colorFront1 = "#e71d36";
const colorFront2 = "#ef626c";
const colorStroke = "#2e282a";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for circles
  let pos2x = 50 + letterData["offset1x"];
  let pos2y = 100 - letterData["offset1y"];
  let pos3x = 50 + letterData["offset2x"];
  let pos3y = 100 + letterData["offset2y"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  angleMode(DEGREES);

  // draw two circles
  fill(colorFront1);
  arc(50, 100, 100, 100, arcStart, arcEnd);
  fill(colorFront2);
  ellipse(pos2x, pos2y, 40, 40);
  ellipse(pos3x, pos3y, 40, 40);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offset1x"] = map(percent, 0, 100, oldObj["offset1x"], newObj["offset1x"]);
  new_letter["offset1y"] = map(percent, 0, 100, oldObj["offset1y"], newObj["offset1y"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);
  return new_letter;
}

var swapWords = [
  "REDBERRY",
  "CRITICAL",
  "PIERCING"
]