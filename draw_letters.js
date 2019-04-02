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
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let line1x = letterData["pos1x"];
  let line2x = letterData["pos2x"];
  let line1y = letterData["pos1y"];
  let line2y = letterData["pos2y"];
  // draw two circles
  //fill(colorFront1);

  noFill();
  //using vertices to create the lines for my alphabet and numbers
  beginShape();
    vertex(30, 20);
    vertex(85, 20);
    vertex(85, 75);
    vertex(30, 20);
  endShape();

  line(line1x, line1y, line2x, line2y);

  fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
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