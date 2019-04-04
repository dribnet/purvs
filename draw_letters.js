// const colorFront1  = "#505050";
// const colorFront2  = "#e0a3a3";

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
  let pos2x = letterData["e1x"];
  let pos2y = letterData["e1y"];
  let pos3x = letterData["r1x"];
  let pos3y = letterData["r1y"];
  let pos4x = letterData["r2x"];
  let pos4y = letterData["r2y"];
  let pos5x = letterData["r3x"];
  let pos5y = letterData["r3y"];
  let pos6x = letterData["t1x"];
  // let pos6y = letterData["t1y"];
  // let pos7x = letterData["t2x"];
  // let pos7y = letterData["t2y"];
  // let pos8x = letterData["t3x"];
  // let pos8y = letterData["t3y"];

  // draw circle and rect
  fill(80, 200);
  ellipse(pos2x, pos2y, 25, 25);
  rect(pos3x, pos3y, 100, 15);

  fill(224, 163, 163, 180);
  rect(pos4x, pos4y, 15, 120);
  rect(pos5x, pos5y, 15, 120);

  // triangle(pos6x, pos6y, pos7x, pos7y, pos8x, pos8y);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["e1x"] = map(percent, 0, 100, oldObj["e1x"], newObj["e1x"]);
  new_letter["e1y"] = map(percent, 0, 100, oldObj["e1y"], newObj["e1y"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]