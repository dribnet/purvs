
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
  line(lin2x, lin2y, lin2xx, lin2yy);
  line(lin3x , lin3y, lin3xx, lin3yy);
  pop();


  rect(pos1x, pos1y, 30, 30,5);
  rect(pos2x, pos2y, 30, 30,5);
 
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