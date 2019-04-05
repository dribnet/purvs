const colorFront1  = "#5F5F5F";
const colorFront2  = "#009366";
const colorStroke  = "#DEC300";

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
  let pos1x = letterData["pos1x"];
  let pos2x = letterData["pos2x"];
  let pos3x = letterData["pos3x"];
  let pos4x = letterData["pos4x"];

  let pos1y = letterData["pos1y"];
  let pos2y = letterData["pos2y"];
  let pos3y = letterData["pos3y"];
  let pos4y = letterData["pos4y"];

  let cryspos1x = letterData["cryspos1x"];
  let cryspos2x = letterData["cryspos2x"];
  let cryspos3x = letterData["cryspos3x"];
  let cryspos4x = letterData["cryspos4x"];

  let cryspos1y = letterData["cryspos1y"];
  let cryspos2y = letterData["cryspos2y"];
  let cryspos3y = letterData["cryspos3y"];
  let cryspos4y = letterData["cryspos4y"];

  // draw letters
  push()
  translate(50, 100)

  fill(colorFront1);
  beginShape();
  vertex(pos1x, pos1y)
  vertex(pos2x, pos2y)
  vertex(pos3x, pos3y)
  vertex(pos4x, pos4y)
  vertex(pos1x, pos1y)
  endShape()

  fill(colorFront2);
  beginShape();
  vertex(cryspos1x, cryspos1y)
  vertex(cryspos2x, cryspos2y)
  vertex(cryspos3x, cryspos3y)
  vertex(cryspos4x, cryspos4y)
  vertex(cryspos1x, cryspos1y)
  endShape()

  pop()
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