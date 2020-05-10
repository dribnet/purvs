const colorFront1  = "#F15025";
const colorFront2  = "#FFFFFF";
const colorStroke  = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let size3 = letterData["sizeW"];
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];
  let rectRad = letterData["radi"];
  let posEllx = letterData["ellPosx"];
  let posElly = letterData["ellPosy"];

  // draw two circles
  strokeWeight(5);
  stroke(colorStroke);
  fill(colorFront1);
  ellipse(posEllx, posElly, size2, size3);
  fill(colorFront2);
  rect(pos2x, pos2y, rectWid, rectLen, rectRad);
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