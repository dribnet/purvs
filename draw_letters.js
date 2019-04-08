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

  let l1x = letterData["l1x"];
  let l1y = letterData["l1y"];
  let l2x = letterData["l2x"];
  let l2y = letterData["l2y"];

  let a1x = 50 + letterData["a1x"];
  let a1y = 90 + letterData["a1y"];
  let a1Start = letterData["a1Start"];
  let aw = letterData["aw"];
  let ah = letterData["ah"];

  let a2x = 50 + letterData["a2x"];
  let a2y = 90 + letterData["a2y"];
  let a2Start = letterData["a2Start"];
  let a2w = letterData["a2w"];
  let a2h = letterData["a2h"];

  //ellipse outline
  noFill();
  stroke(255, 221, 153);
  strokeWeight(3);
  ellipse(ex, ey, ew, eh);

  //line
  stroke(255);
  strokeWeight(5);
  line(l1x, l1y, l2x, l2y);

  //arcs
  noFill();
  stroke(255, 171, 0);
  strokeWeight(4);
  arc(a1x, a1y, aw, ah, radians(a1Start), radians(a1Start+180));

  stroke(255,69,0);
  strokeWeight(4);
  arc(a2x, a2y, a2w, a2h, radians(a2Start), radians(a2Start+180));
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["ex"] = map(percent, 0, 100, oldObj["ex"], newObj["ex"]);
  new_letter["ey"] = map(percent, 0, 100, oldObj["ey"], newObj["ey"]);
  new_letter["ew"] = map(percent, 0, 100, oldObj["ew"], newObj["ew"]);
  new_letter["eh"] = map(percent, 0, 100, oldObj["eh"], newObj["eh"]);

  new_letter["l1x"] = map(percent, 0, 100, oldObj["l1x"], newObj["l1x"]);
  new_letter["l1y"] = map(percent, 0, 100, oldObj["l1y"], newObj["l1y"]);
  new_letter["l2x"] = map(percent, 0, 100, oldObj["l2x"], newObj["l2y"]);
  new_letter["l2y"] = map(percent, 0, 100, oldObj["l2y"], newObj["l2y"]);
  
  new_letter["a1x"] = map(percent, 0, 100, oldObj["a1x"], newObj["a1x"]);
  new_letter["a1y"] = map(percent, 0, 100, oldObj["a1y"], newObj["a1y"]);
  new_letter["a1Start"] = map(percent, 0, 100, oldObj["a1Start"], newObj["a1Start"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]