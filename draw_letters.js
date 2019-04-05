
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  // determine parameters
  let ex = letterData["ex"];
  let ey = letterData["ey"];
  let ew = letterData["ew"];
  let eh = letterData["eh"];

  let ex2 = letterData["ex2"];
  let ey2 = letterData["ey2"];
  let ew2 = letterData["ew2"];
  let eh2 = letterData["eh2"];

  let l1x = letterData["l1x"];
  let l1y = letterData["l1y"];
  let l2x = letterData["l2x"];
  let l2y = letterData["l2y"];

  let ax = letterData["ax"];
  let ay = letterData["ay"];
  let aw = letterData["aw"];
  let ah = letterData["ah"];

  //darker ellipse
  fill(255, 171, 0);
  noStroke();
  ellipse(ex, ey, ew, eh);

  //lighter ellipse
  fill(255, 221, 153);
  noStroke();
  ellipse(ex2, ey2, ew2, eh2);

  //line
  stroke(255);
  strokeWeight(3);
  line(l1x, l1y, l2x, l2y);

  //arc
  stroke(255);
  noFill();
  arc(ax, ay, aw, ah, 0, 3, CLOSE);

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