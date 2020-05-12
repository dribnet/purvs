const colorFront1  = "#75cc0a50"; //green
const colorFront2  = "#ccd9deFA"; //white
const colorStroke  = "#0f0f0f80"; //stroke colour

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(4);

  let rectwidth = letterData["rectlength"]
  let recthigh = letterData["rectheight"]
  let rectwidth_two = letterData["nofill_length"]
  let recthigh_two = letterData["nofill_height"]
  let rect_twox = letterData["rect_twoposx"]
  let rect_twoy = letterData["rect_twoposy"]
  let tri_onex = letterData["triangleleftx"]
  let tri_twox = letterData["triangletopx"]
  let tri_threex = letterData["trianglerightx"]
  let tri_oney = letterData["trianglelefty"]
  let tri_twoy = letterData["triangletopy"]
  let tri_threey = letterData["trianglerighty"]
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  // draw two circles
  noStroke();
  fill(colorFront1);
  rect(pos2x, pos2y, rectwidth, recthigh);
  stroke(colorFront2);
  strokeWeight(8);
  noFill();
  rect(rect_twox, rect_twoy, rectwidth_two, recthigh_two);
  stroke(colorStroke);
  fill(colorBack);
  triangle(tri_onex, tri_oney, tri_twox, tri_twoy, tri_threex, tri_threey);
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