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
  beginShape();
  vertex(vertexx1, vertexy1);
  vertex(vertexx2, vertexy2);
  vertex(vertexx3, vertexy3);
  vertex(vertexx4, vertexy4);
  vertex(vertexx5, vertexy5);
  endShape(CLOSE);

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