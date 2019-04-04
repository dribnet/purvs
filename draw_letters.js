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

  //grabbing contants from letters js

  //first line
  let l1x = letterData["pos1x"];
  let l2x = letterData["pos2x"];
  let l1y = letterData["pos1y"];
  let l2y = letterData["pos2y"];

  //second line
  let l1i = letterData["pos1i"];
  let l2i = letterData["pos1i"];
  let l1j = letterData["pos1j"];
  let l2j = letterData["pos1j"];
  //third line
  let l1q = letterData["pos1q"];
  let l2q = letterData["pos1q"];
  let l1w = letterData["pos1w"];
  let l2w = letterData["pos1w"];


  //lines for alphabet
  fill(0);
  strokeWeight(5);

  line(l1x, l1y, l2x, l2y);

  line(l1i, l1j, l2i+50, l2j);

  line(l1q, l1w, l2q+50, l2w+50);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["pos1x"] = map(percent, 0, 100, oldObj["pos1x"], newObj["pos1x"]);
  new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
  new_letter["pos1y"] = map(percent, 0, 100, oldObj["pos1y"], newObj["pos1y"]);
  new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);

  new_letter["pos1i"] = map(percent, 0, 100, oldObj["pos1i"], newObj["pos1i"]);
  new_letter["pos2i"] = map(percent, 0, 100, oldObj["pos2i"], newObj["pos2i"]);
  new_letter["pos1j"] = map(percent, 0, 100, oldObj["pos1j"], newObj["pos1j"]);
  new_letter["pos2j"] = map(percent, 0, 100, oldObj["pos2j"], newObj["pos2j"]);

  new_letter["pos1q"] = map(percent, 0, 100, oldObj["pos1q"], newObj["pos1q"]);
  new_letter["pos2q"] = map(percent, 0, 100, oldObj["pos2q"], newObj["pos2q"]);
  new_letter["pos1w"] = map(percent, 0, 100, oldObj["pos1w"], newObj["pos1w"]);
  new_letter["pos2w"] = map(percent, 0, 100, oldObj["pos2w"], newObj["pos2w"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
