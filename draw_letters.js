const red1 = 239;
const green1 = 12;
const blue1 = 0;
const red2 = 0;
const green2 = 53;
const blue2 = 95;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
  let arcX1 = letterData["x1"];
  let arcY1 = letterData["y1"];
  let arcSize1 = letterData["s1"];
  let arcStop1 = letterData["stop1"];
  let rot1 = letterData["rot1"];

  let arcX2 = letterData["x2"];
  let arcY2 = letterData["y2"];
  let arcSize2 = letterData["s2"];
  let arcStop2 = letterData["stop2"];
  let rot2 = letterData["rot2"];

  // draw arcs
  push();
  angleMode(DEGREES);
  noStroke();

 push();
  fill(red1, green1, blue1, 150);
  translate(50 + arcX1, 100 + arcY1);
  rotate(rot1);
  arc(0, 0, arcSize1, arcSize1, 0, arcStop1);
pop();

push();
  fill(red2, green2, blue2, 150);
  translate(50 + arcX2, 100 + arcY2);
  rotate(rot2);
  arc(0, 0, arcSize2, arcSize2, 0, arcStop2);
pop();
pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["s1"] = map(percent, 0, 100, oldObj["s1"], newObj["s1"]);
  new_letter["stop1"]    = map(percent, 0, 100, oldObj["stop1"], newObj["stop1"]);
  new_letter["rot1"]    = map(percent, 0, 100, oldObj["rot1"], newObj["rot1"]);
  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["s2"]    = map(percent, 0, 100, oldObj["s2"], newObj["s2"]);
  new_letter["stop2"]    = map(percent, 0, 100, oldObj["stop2"], newObj["stop2"]);
  new_letter["rot2"]    = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);
  return new_letter;
}

var swapWords = [
  "OVERLAYS",
  "3WEM3WEM",
  "ROUNDEST",
  "REPRISAL",
  "JLJLJLJL",
  "ROTATION",
  "COVERUPS",
  "ICONISED"
]
