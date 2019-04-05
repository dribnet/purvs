const colorFront1  = "#2a3a54";
const colorFront2  = "#f24324";
const colorStroke  = "#260a00";

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

  strokeWeight(1);

  // determine parameters for second circle
  let pos2x = -10  + letterData["c1x"];
  let pos2y = -20 + letterData["c1y"];
  let widthx = letterData["lx"];
  let heighty = letterData["ly"];

  // draw two circles


  //straight line

stroke(colorFront2);
fill(colorFront1);
strokeWeight(8);
//noFill();
  ellipse(letterData["c1x"], letterData["c1y"], letterData["size", "size"]);

//first long ellipse
  noStroke();
fill(colorFront2);
  ellipse(widthx,heighty,letterData["lw1"],letterData["lh1"]);
  //second long ellipse
  ellipse(letterData["lx2"],letterData["ly2"],letterData["lw2"],letterData["lh2"]);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["lw1"]    = map(percent, 0, 100, oldObj["lw1"], newObj["lw1"]);
  new_letter["lw2"]    = map(percent, 0, 100, oldObj["lw2"], newObj["lw2"]);
  new_letter["lh1"]    = map(percent, 0, 100, oldObj["lh1"], newObj["lh1"]);
  new_letter["lh2"]    = map(percent, 0, 100, oldObj["lh2"], newObj["lh2"]);
  new_letter["c1x"]    = map(percent, 0, 100, oldObj["c1x"], newObj["c1x"]);
  new_letter["c1y"]    = map(percent, 0, 100, oldObj["c1y"], newObj["c1y"]);
  new_letter["lx"]    = map(percent, 0, 100, oldObj["lx"], newObj["lx"]);
  new_letter["ly"]    = map(percent, 0, 100, oldObj["ly"], newObj["ly"]);
  new_letter["lx2"]    = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
  new_letter["ly2"]    = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
