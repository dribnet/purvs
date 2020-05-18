const colorFront1  = "#292929";
const colorFront2  = "#138701";
const colorStroke  = "#138701";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)
  ellipseMode(CENTER)
  rectMode(CENTER)
  // determine parameters for second circle
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"]
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let cirpos2x = 50 + letterData["ciroffsetx"]
  let cirpos2y = 100 + letterData["ciroffsety"]
  let cirs1 = letterData["cirsize1"]
  let cirs2 = letterData["cirsize2"]
  let cir2pos2x = 50 + letterData["cir2offsetx"]
  let cir2pos2y = 100 + letterData["cir2offsety"]

  // draw two circles
  stroke(colorStroke);
  strokeWeight(4);
  fill(colorFront1);
  rect(50, 100, 100, 100);
  fill(colorFront2);
  ellipse(cirpos2x, cirpos2y, cirs1, cirs2)
  ellipse(cir2pos2x, cir2pos2y, cirs1, cirs2)
  rect(pos2x, pos2y, size1, size2)

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizex"]    = map(percent, 0, 100, oldObj["sizex"], newObj["sizex"]);
  new_letter["sizey"]    = map(percent, 0, 100, oldObj["sizey"], newObj["sizey"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

new_letter["ciroffsetx"]    = map(percent, 0, 100, oldObj["ciroffsetx"], newObj["ciroffsetx"]);
new_letter["ciroffsety"]    = map(percent, 0, 100, oldObj["ciroffsety"], newObj["ciroffsety"]);
new_letter["cirsize1"]    = map(percent, 0, 100, oldObj["cirsize1"], newObj["cirsize1"]);
new_letter["cirsize2"]    = map(percent, 0, 100, oldObj["cirsize2"], newObj["cirsize2"]);
new_letter["cir2offsetx"]    = map(percent, 0, 100, oldObj["cir2offsetx"], newObj["cir2offsetx"]);
new_letter["cir2offsety"]    = map(percent, 0, 100, oldObj["cir2offsety"], newObj["cir2offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]