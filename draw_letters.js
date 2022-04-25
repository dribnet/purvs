/* these are optional special variables which will change the system */
var systemBackgroundColor = "#16041c";
var systemLineColor = "#b2c7eb";
var systemBoxColor = "#00c800";

/* internal constants */
const lightRed  = "#cb644e";
const lightYellow  = "#b78b4c";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push()
  // determine parameters for red circle
  let circleR1 = letterData["circleR1"];
  let circleR2 = letterData["circleR2"];
  let circleR3 = letterData["circleR3"];
  let posR1x = letterData["r1x"];
  let posR1y = letterData["r1y"];
  let posR2x = letterData["r2x"];
  let posR2y = letterData["r2y"];
  let posR3x = letterData["r3x"];
  let posR3y = letterData["r3y"];
  //Yellow circle
  let circleY1 = letterData["circleY1"];
  let circleY2 = letterData["circleY2"];
  let circleY3 = letterData["circleY3"];
  let posY1x = letterData["y1x"];
  let posY1y = letterData["y1y"];
  let posY2x = letterData["y2x"];
  let posY2y = letterData["y2y"];
  let posY3x = letterData["y3x"];
  let posY3y = letterData["y3y"];
  //red lines
  let redline1 = letterData["redline1"]
  let redline2 = letterData["redline2"]
  let rl1x = letterData["rl1x"];
  let rl1y = letterData["rl1y"];
  let rl2x = letterData["rl2x"];
  let rl2y = letterData["rl2y"];
  //yellow lines
  let yellowline1 = letterData["yellowline1"]
  let yellowline2 = letterData["yellowline2"]
  let yl1x = letterData["yl1x"];
  let yl1y = letterData["yl1y"];
  let yl2x = letterData["yl2x"];
  let yl2y = letterData["yl2y"];

  // yellow circles
  noStroke()
  fill(lightYellow);
  ellipse(posY1x, posY1y, circleY1, circleY1);
  ellipse(posY2x, posY2y, circleY2, circleY2);
  ellipse(posY3x, posY3y, circleY3, circleY3);
  //yellow lines
  rect(yl1x, yl1y, yellowline1, 10);
  rect(yl2x, yl2y, 10, yellowline2);
  // red
  fill(lightRed);
  ellipse(posR1x, posR1y, circleR1, circleR1);
  ellipse(posR2x, posR2y, circleR2, circleR2);
  ellipse(posR3x, posR3y, circleR3, circleR3);
  //red lines
  rect(rl1x, rl1y, 10, redline1);
  rect(rl2x, rl2y, 10, redline2);
  pop()
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
