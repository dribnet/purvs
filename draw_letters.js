const red1 = 230;
const green1 = 0;
const blue1 = 0;
const red2 = 0;
const green2 = 100;
const blue2 = 100;

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
  fill(red1, green1, blue1, 130);
  arc(arcX1, arcY1, arcSize1, arcSize1, arcStart1, arcStop1);
  fill(red2, green2, blue2, 130);
  arc(arcX2, arcY2, arcSize2, arcSize2, arcStart2, arcStop2);

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
