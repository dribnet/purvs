const colorStroke  = "#ffffff"; //white stroke

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
  strokeWeight(8);

  angleMode(DEGREES);

  // determine parameters for the line
  let lineX1 = 50 + letterData["x"];
  let lineY1 = 150 + letterData["y"];
  let lineX2 = 50 + letterData["x2"];
  let lineY2 = 150 + letterData["y2"];

  //determine start and stop parameters for the arc
  let arcStart = letterData["start"];
  let arcStop = letterData["stop"];

  // draw an arc and line
  noFill();
  arc(50, 150, 90, 90, arcStart, arcStop);
  line(lineX1, lineY1, lineX2, lineY2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);

  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);

  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["start"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]