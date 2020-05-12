const colorFront1  = "#ff7c11";
//const colorFront1  = "#f5e611";

const colorStroke  = "#4a03ff";
//const colorStroke  = "#000000";

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
  let cPosx1 = 50 + letterData["cx1"];
  let cPosy1 = 100 + letterData["cy1"];
  let cPosx2 = 50 + letterData["cx2"];
  let cPosy2 = 100 + letterData["cy2"];

  let pos1x = 50 + letterData["x1"];
  let pos1y = 100 + letterData["y1"];
  let pos2x = 50 + letterData["x2"];
  let pos2y = 100 + letterData["y2"];

  // draw two circles
  fill(colorFront1)
  strokeWeight(0)
  rect(0,0, 100, 200, 10 )

  strokeWeight(20)
  line(pos1x, pos1y, pos2x, pos2y)
  ellipse(cPosx1, cPosy1, 0, 0)
  ellipse(cPosx2, cPosy2, 0, 0)
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