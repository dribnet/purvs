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
  let circleR1 = letterData["circleR1"]; //First red circle
  let circleR2 = letterData["circleR2"]; //secound red circle
  let circleR3 = letterData["circleR3"]; //thrid red circle
  let posR1x = letterData["r1x"]; //First red circle x
  let posR1y = letterData["r1y"]; //First red circle y
  let posR2x = letterData["r2x"]; //secound red circle x
  let posR2y = letterData["r2y"]; //secound red circle y
  let posR3x = letterData["r3x"]; //thrid red circle x
  let posR3y = letterData["r3y"]; //thrid red circle y
  //Yellow circle
  let circleY1 = letterData["circleY1"]; //First yellow circle
  let circleY2 = letterData["circleY2"]; //secound yellow circle
  let circleY3 = letterData["circleY3"]; //thrid yellow circle
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
  new_letter["circleR1"] = map(percent, 0, 100, oldObj["circleR1"], newObj["circleR1"]);
  new_letter["circleR2"] = map(percent, 0, 100, oldObj["circleR2"], newObj["circleR2"]);
  new_letter["circleR3"] = map(percent, 0, 100, oldObj["circleR3"], newObj["circleR3"]);
  new_letter["r1x"] = map(percent, 0, 100, oldObj["r1x"], newObj["r1x"]);
  new_letter["r1y"] = map(percent, 0, 100, oldObj["r1y"], newObj["r1y"]);
  new_letter["r2x"] = map(percent, 0, 100, oldObj["r2x"], newObj["r2x"]);
  new_letter["r2y"] = map(percent, 0, 100, oldObj["r2y"], newObj["r2y"]);
  new_letter["r3x"] = map(percent, 0, 100, oldObj["r3x"], newObj["r3x"]);
  new_letter["r3y"] = map(percent, 0, 100, oldObj["r3y"], newObj["r3y"]);
  new_letter["circleY1"] = map(percent, 0, 100, oldObj["circleY1"], newObj["circleY1"]);
  new_letter["circleY2"] = map(percent, 0, 100, oldObj["circleY2"], newObj["circleY2"]);
  new_letter["circleY3"] = map(percent, 0, 100, oldObj["circleY3"], newObj["circleY3"]);
  new_letter["y1x"] = map(percent, 0, 100, oldObj["y1x"], newObj["y1x"]);
  new_letter["y1y"] = map(percent, 0, 100, oldObj["y1y"], newObj["y1y"]);
  new_letter["y2x"] = map(percent, 0, 100, oldObj["y2x"], newObj["y2x"]);
  new_letter["y2y"] = map(percent, 0, 100, oldObj["y2y"], newObj["y2y"]);
  new_letter["y3x"] = map(percent, 0, 100, oldObj["y3x"], newObj["y3x"]);
  new_letter["y3y"] = map(percent, 0, 100, oldObj["y3y"], newObj["y3y"]);
  new_letter["redline1"] = map(percent, 0, 100, oldObj["redline1"], newObj["redline1"]);
  new_letter["redline2"] = map(percent, 0, 100, oldObj["redline2"], newObj["redline2"]);
  new_letter["rl1x"] = map(percent, 0, 100, oldObj["rl1x"], newObj["rl1x"]);
  new_letter["rl1y"] = map(percent, 0, 100, oldObj["r1y"], newObj["rl1y"]);
  new_letter["rl2x"] = map(percent, 0, 100, oldObj["rl2x"], newObj["rl2x"]);
  new_letter["rl2y"] = map(percent, 0, 100, oldObj["rl2y"], newObj["rl2y"]);
  new_letter["yellowline1"] = map(percent, 0, 100, oldObj["yellowline1"], newObj["yellowline1"]);
  new_letter["yellowline2"] = map(percent, 0, 100, oldObj["yellowline2"], newObj["yellowline2"]);
  new_letter["yl1x"] = map(percent, 0, 100, oldObj["yl1x"], newObj["yl1x"]);
  new_letter["yl1y"] = map(percent, 0, 100, oldObj["yl1y"], newObj["yl1y"]);
  new_letter["yl2x"] = map(percent, 0, 100, oldObj["yl2x"], newObj["yl2x"]);
  new_letter["yl2y"] = map(percent, 0, 100, oldObj["yl2y"], newObj["yl2y"]);
  return new_letter;
}

var swapWords = [
  "DOTNLINE",
  "COMPUTER",
  "RED.....",
  ".YELLOW."
]
