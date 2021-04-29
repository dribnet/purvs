/* these are optional special variables which will change the system */
var systemBackgroundColor = "#292929";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#d9d9d9";
const lightBlue  = "#59ccff";
const strokeColor  = "#7ade50";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle

  // draw circle and line
  fill(darkBlue);
  ellipse(50, 150, 75, 75);
  fill(lightBlue);

  let line1x1 = letterData["l1x1"];
  let line1y1 = letterData["l1y1"];
  let line1x2 = letterData["l1x2"];
  let line1y2 = letterData["l1y2"];
  let line2x1 = letterData["l2x1"];
  let line2y1 = letterData["l2y1"];
  let line2x2 = letterData["l2x2"];
  let line2y2 = letterData["l2y2"];
  let line3x1 = letterData["l3x1"];
  let line3y1 = letterData["l3y1"];
  let line3x2 = letterData["l3x2"];
  let line3y2 = letterData["l3y2"];
  let line4x1 = letterData["l4x1"];
  let line4y1 = letterData["l4y1"];
  let line4x2 = letterData["l4x2"];
  let line4y2 = letterData["l4y2"];

  line(line1x1,line1y1,line1x2,line1y2);
  line(line2x1,line2y1,line2x2,line2y2);
  line(line3x1,line3y1,line3x2,line3y2);
  line(line4x1,line4y1,line4x2,line4y2);



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["l1x1"]    = map(percent, 0, 100, oldObj["l1x1"], newObj["l1x1"]);
  new_letter["l1y1"]    = map(percent, 0, 100, oldObj["l1y1"], newObj["l1y1"]);
  new_letter["l1x2"]    = map(percent, 0, 100, oldObj["l1x2"], newObj["l1x2"]);
  new_letter["l1y2"]    = map(percent, 0, 100, oldObj["l1y2"], newObj["l1y2"]);
  new_letter["l2x1"]    = map(percent, 0, 100, oldObj["l2x1"], newObj["l2x1"]);
  new_letter["l2y1"]    = map(percent, 0, 100, oldObj["l2y1"], newObj["l2y1"]);
  new_letter["l2x2"]    = map(percent, 0, 100, oldObj["l2x2"], newObj["l2x2"]);
  new_letter["l2y2"]    = map(percent, 0, 100, oldObj["l2y2"], newObj["l2y2"]);
  new_letter["l3x1"]    = map(percent, 0, 100, oldObj["l3x1"], newObj["l3x1"]);
  new_letter["l3y1"]    = map(percent, 0, 100, oldObj["l3y1"], newObj["l3y1"]);
  new_letter["l3x2"]    = map(percent, 0, 100, oldObj["l3x2"], newObj["l3x2"]);
  new_letter["l3y2"]    = map(percent, 0, 100, oldObj["l3y2"], newObj["l3y2"]);
  new_letter["l4x1"]    = map(percent, 0, 100, oldObj["l4x1"], newObj["l4x1"]);
  new_letter["l4y1"]    = map(percent, 0, 100, oldObj["l4y1"], newObj["l4y1"]);
  new_letter["l4x2"]    = map(percent, 0, 100, oldObj["l4x2"], newObj["l4x2"]);
  new_letter["l4y2"]    = map(percent, 0, 100, oldObj["l4y2"], newObj["l4y2"]);
  return new_letter;
}

var swapWords = [
  "SEATOWN?",
  "PROGRESS",
  "ICANDOIT",
  "BOOKFAIR",
  "WHATISIT"
]