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
  let posx2 = letterData["posx"];
  let posy2 = letterData["posy"];
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let triangleX1 = letterData["movetriX1"]
  let triangleX1toX2 = letterData["triX1toX2"]
  let triangleX1toX3 = letterData["triX1toX3"]
  let triangleY1 = letterData["movetriY1"]
  let triangleY1toY2 = letterData["triY1toY2"]
  let triangleY1toY3 = letterData["triY1toY3"]

  // draw one half_circle and triangle
  noStroke();
  fill(255,70,67,200);
  arc(posx2,posy2,100,100,ArcStart,ArcEnd);
  fill(64,102,93,200);
  triangle(posx2+triangleX1,posy2+triangleY1,posx2+triangleX1+triangleX1toX2,posy2+triangleY1+triangleY1toY2, posx2+triangleX1+triangleX1toX3, posy2+triangleY1+triangleY1toY3);
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