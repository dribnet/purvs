
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //let size2 = letterData["size"];
  let lin2x = letterData["lineX"];//line1
  let lin2y = letterData["lineY"];
  let lin2xx = letterData["lineXX"];//line second point
  let lin2yy = letterData["lineYY"];

  let lin3x = letterData["lineX2"];//line2
  let lin3y = letterData["lineY2"];
  let lin3xx = letterData["lineXX2"];//line second point
  let lin3yy = letterData["lineYY2"];

  
  let pos1x = letterData["offsetx1"];//small1
  let pos1y = letterData["offsety1"];
  let pos2x = letterData["offsetx2"];//small2
  let pos2y = letterData["offsety2"];

  push();
  strokeWeight(18);
  stroke(255, 214, 130);
  line(lin2x, lin2y, lin2xx, lin2yy);
  line(lin3x , lin3y, lin3xx, lin3yy);
  pop();

  push();
  strokeWeight(25);
  stroke(255, 214, 100,80);
  line(lin2x, lin2y, lin2xx, lin2yy);
  line(lin3x , lin3y, lin3xx, lin3yy);
  pop();

  strokeWeight(2);
  stroke(255, 214, 130);
  fill(255, 238, 204);
  rect(pos1x, pos1y, 22, 22,5);
  rect(pos2x, pos2y, 22, 22,5);

  strokeWeight(3);
  stroke(255, 214, 130);
  fill(255, 231, 183,99);
  rect(pos1x, pos1y, 27, 27,5);
  rect(pos2x, pos2y, 27, 27,5);
 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["lineX"]    = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineXX"] = map(percent, 0, 100, oldObj["lineXX"], newObj["lineXX"]);
  new_letter["lineYY"] = map(percent, 0, 100, oldObj["lineYY"], newObj["lineYY"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  new_letter["lineXX2"] = map(percent, 0, 100, oldObj["lineXX2"], newObj["lineXX2"]);
  new_letter["lineYY2"] = map(percent, 0, 100, oldObj["lineYY2"], newObj["lineYY2"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  return new_letter;
}

var swapWords = [
  "EZY WARM",
  "KEEGAN D",
  "CODING ?"
]