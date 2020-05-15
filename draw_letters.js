const colorFront1  = "#C9D1D3FA"; //green
const colorFront2  = "#ff402bD9"; //white
const colorStroke  = "#1c1c1c80"; //stroke colour


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
  let rectwidth = letterData["rectlength"];
  let recthigh = letterData["rectheight"];
  let rectwidth_two = letterData["nofill_length"];
  let recthigh_two = letterData["nofill_height"];
  let rect_twox = letterData["rect_twoposx"];
  let rect_twoy = letterData["rect_twoposy"];
  let tri_onex = letterData["triangleleftx"];
  let tri_twox = letterData["triangletopx"];
  let tri_threex = letterData["trianglerightx"];
  let tri_oney = letterData["trianglelefty"];
  let tri_twoy = letterData["triangletopy"];
  let tri_threey = letterData["trianglerighty"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  // draw two circles
  noStroke();
  fill(colorFront1);
  rect(pos2x, pos2y, rectwidth, recthigh);
  stroke(colorFront2);
  strokeWeight(10);
  noFill();
  rect(rect_twox, rect_twoy, rectwidth_two, recthigh_two);
  stroke(colorStroke);
  fill(colorBack);
  triangle(tri_onex, tri_oney, tri_twox, tri_twoy, tri_threex, tri_threey);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //mapping filled in square
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["rectlength"] = map(percent, 0, 100, oldObj["rectlength"], newObj["rectlength"]);
  new_letter["rectheight"] = map(percent, 0, 100, oldObj["rectheight"], newObj["rectheight"]);
  //mapping stroke only rect
  new_letter["nofill_length"] = map(percent, 0, 100, oldObj["nofill_length"], newObj["nofill_length"]);
  new_letter["nofill_height"] = map(percent, 0, 100, oldObj["nofill_height"], newObj["nofill_height"]);
  new_letter["rect_twoposx"] = map(percent, 0, 100, oldObj["rect_twoposx"], newObj["rect_twoposx"]);
  new_letter["rect_twoposy"] = map(percent, 0, 100, oldObj["rect_twoposy"], newObj["rect_twoposy"]);
  //mapping triangles
  new_letter["triangleleftx"] = map(percent, 0, 100, oldObj["triangleleftx"], newObj["triangleleftx"]);
  new_letter["trianglelefty"] = map(percent, 0, 100, oldObj["trianglelefty"], newObj["trianglelefty"]);
  new_letter["triangletopx"] = map(percent, 0, 100, oldObj["triangletopx"], newObj["triangletopx"]);
  new_letter["triangletopy"] = map(percent, 0, 100, oldObj["triangletopy"], newObj["triangletopy"]);
  new_letter["trianglerightx"] = map(percent, 0, 100, oldObj["trianglerightx"], newObj["trianglerightx"]);
  new_letter["trianglerighty"] = map(percent, 0, 100, oldObj["trianglerighty"], newObj["trianglerighty"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]