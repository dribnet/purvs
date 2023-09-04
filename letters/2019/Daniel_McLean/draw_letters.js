const colorFront1  = "#ff6600";
const colorFront2  = "#59ccff";
const colorStroke  = "#000000";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  let vertexx1 = letterData["x1"];
  let vertexy1 = letterData["y1"];
  let vertexx2 = letterData["x2"];
  let vertexy2 = letterData["y2"];
  let vertexx3 = letterData["x3"];
  let vertexy3 = letterData["y3"];
  let vertexx4 = letterData["x4"];
  let vertexy4 = letterData["y4"];
  let vertexx5 = letterData["x5"];
  let vertexy5 = letterData["y5"];

  // draw two circles
  fill(colorFront1);
  strokeWeight(5);
  beginShape();
  vertex(vertexx1, vertexy1);
  vertex(vertexx2, vertexy2);
  vertex(vertexx3, vertexy3);
  vertex(vertexx4, vertexy4);
  vertex(vertexx5, vertexy5);
  endShape(OPEN);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["y5"]    = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  return new_letter;
}

var swapWords = [
  "5PTPOLYS",
  "PENTAGON",
  "DANSCOOL"
]
