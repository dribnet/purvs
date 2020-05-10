const red1 = 230;
const green1 = 30;
const blue1 = 20;
const red2 = 20;
const green2 = 90;
const blue2 = 110;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
  let arcX1 = 50 + letterData["x1"];
  let arcY1 = 100 + letterData["y1"];
  let arcSize1 = letterData["s1"];
  let arcStart1 = letterData["start1"];
  let arcStop1 = letterData["stop1"];

  let arcX2 = 50 + letterData["x2"];
  let arcY2 = 100 + letterData["y2"];
  let arcSize2 = letterData["s2"];
  let arcStart2 = letterData["start2"];
  let arcStop2 = letterData["stop2"];

  // draw arcs
  angleMode(DEGREES);
  noStroke();
  fill(red1, green1, blue1, 150);
  arc(arcX1, arcY1, arcSize1, arcSize1, arcStart1, arcStop1);
  fill(red2, green2, blue2, 150);
  arc(arcX2, arcY2, arcSize2, arcSize2, arcStart2, arcStop2);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["s1"] = map(percent, 0, 100, oldObj["s1"], newObj["s1"]);
  new_letter["start1"]    = map(percent, 0, 100, oldObj["start1"], newObj["start1"]);
  new_letter["stop1"]    = map(percent, 0, 100, oldObj["stop1"], newObj["stop1"]);
  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["s2"]    = map(percent, 0, 100, oldObj["s2"], newObj["s2"]);
  new_letter["start2"]    = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
  new_letter["stop2"]    = map(percent, 0, 100, oldObj["stop2"], newObj["stop2"]);
  return new_letter;
}

var swapWords = [
  "JAMIELUM",
  "?WEMMEW?",
  "BAAAAAAA"
]
