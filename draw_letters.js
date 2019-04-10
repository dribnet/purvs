const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#d1d1d1";

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
  strokeWeight(8);
  rectMode(CENTER);

  // determine parameters for second circle
  let posy = letterData["rect_posy"];
  let posx = letterData["rect_posx"];
  let rect_xs = letterData["rect_xscale"];
  let rect_ys = letterData["rect_yscale"];
  let lAx1 = posx + letterData["lineA_x1"];
  let lAy1 = posy + letterData["lineA_y1"];
  let lAx2 = posx + letterData["lineA_x2"];
  let lAy2 = posy + letterData["lineA_y2"];
  let lBx1 = posx + letterData["lineB_x1"];
  let lBy1 = posy + letterData["lineB_y1"];
  let lBx2 = posx + letterData["lineB_x2"];
  let lBy2 = posy + letterData["lineB_y2"];
  let lCx1 = posx + letterData["lineC_x1"];
  let lCy1 = posy + letterData["lineC_y1"];
  let lCx2 = posx + letterData["lineC_x2"];
  let lCy2 = posy + letterData["lineC_y2"];
  // draw two circles
  noFill();
  rect(posx, posy, rect_xs, rect_ys);
  fill(colorFront2);
  line(lAx1, lAy1, lAx2, lAy2);
  line(lBx1, lBy1, lBx2, lBy2);
  line(lCx1, lCy1, lCx2, lCy2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rect_posy"] = map(percent, 0, 100, oldObj["rect_posx"], newObj["rect_posx"]);
  new_letter["rect_posx"] = map(percent, 0, 100, oldObj["rect_posx"], newObj["rect_posx"]);
  new_letter["rect_xscale"] = map(percent, 0, 100, oldObj["rect_xscale"], newObj["rect_xscale"]);
  new_letter["rect_yscale"] = map(percent, 0, 100, oldObj["rect_yscale"], newObj["rect_yscale"]);
  new_letter["lineA_x1"] = map(percent, 0, 100, oldObj["lineA_x1"], newObj["lineA_x1"]);
  new_letter["lineA_y1"] = map(percent, 0, 100, oldObj["lineA_y1"], newObj["lineA_y1"]);
  new_letter["lineA_x2"] = map(percent, 0, 100, oldObj["lineA_x2"], newObj["lineA_x2"]);
  new_letter["lineA_y2"] = map(percent, 0, 100, oldObj["lineA_y2"], newObj["lineA_y2"]);
  new_letter["lineB_x1"] = map(percent, 0, 100, oldObj["lineB_x1"], newObj["lineB_x1"]);
  new_letter["lineB_y1"] = map(percent, 0, 100, oldObj["lineB_y1"], newObj["lineB_y1"]);
  new_letter["lineB_x2"] = map(percent, 0, 100, oldObj["lineB_x2"], newObj["lineB_x2"]);
  new_letter["lineB_y2"] = map(percent, 0, 100, oldObj["lineB_y2"], newObj["lineB_y2"]);
  new_letter["lineA_x1"] = map(percent, 0, 100, oldObj["lineA_x1"], newObj["lineA_x1"]);
  new_letter["lineA_y1"] = map(percent, 0, 100, oldObj["lineA_y1"], newObj["lineA_y1"]);
  new_letter["lineA_x2"] = map(percent, 0, 100, oldObj["lineA_x2"], newObj["lineA_x2"]);
  new_letter["lineA_y2"] = map(percent, 0, 100, oldObj["lineA_y2"], newObj["lineA_y2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
