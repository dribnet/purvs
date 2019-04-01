const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#7ea3dd";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
noStroke();

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];


fill(colorStroke)
rect(0,0,100,200)
fill(colorFront2)
  triangle(letterData["v1x"],letterData["v1y"],letterData["v2x"],letterData["v2y"],letterData["v3x"],letterData["v3y"]);
  fill(colorFront1)
triangle(letterData["bv1x"],letterData["bv1y"],letterData["bv2x"],letterData["bv2y"],letterData["bv3x"],letterData["bv3y"]);

fill(colorFront2)
  triangle(letterData["cv1x"],letterData["cv1y"],letterData["cv2x"],letterData["cv2y"],letterData["cv3x"],letterData["cv3y"]);
triangle(letterData["dv1x"],letterData["dv1y"],letterData["dv2x"],letterData["dv2y"],letterData["dv3x"],letterData["dv3y"]);
fill(colorFront1)
triangle(letterData["ev1x"],letterData["ev1y"],letterData["ev2x"],letterData["ev2y"],letterData["ev3x"],letterData["ev3y"]);
 fill(colorFront2)
triangle(letterData["gv1x"],letterData["gv1y"],letterData["gv2x"],letterData["gv2y"],letterData["gv3x"],letterData["gv3y"]);

triangle(letterData["iv1x"],letterData["iv1y"],letterData["iv2x"],letterData["iv2y"],letterData["iv3x"],letterData["iv3y"]);
triangle(letterData["kv1x"],letterData["kv1y"],letterData["kv2x"],letterData["kv2y"],letterData["kv3x"],letterData["kv3y"]);



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