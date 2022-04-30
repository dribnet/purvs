/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0077b6";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";
const black  = "#000000";
const white  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  let posx = 50;
  let posy = 100;

  // determine parameters for second circle
  let rectPosX = posx + letterData["rectPositionX"];
  let rectPosY = posy + letterData["rectPositionY"];
  let rectWidth = letterData["rectwidth"];
  let rectHeight = letterData["rectheight"];

  let tri1X = posx + letterData["triPosition1X"];
  let tri1Y = posy + letterData["triPosition1Y"];
  let tri2X = posx + letterData["triPosition2X"];
  let tri2Y = posy + letterData["triPosition2Y"];
  let tri3X = posx + letterData["triPosition3X"];
  let tri3Y = posy + letterData["triPosition3Y"];

  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);

  fill(black);
  rect(posx, posy, 100, 200);

  fill(white);
  rect(rectPosX, rectPosY, rectWidth, rectHeight);

  push();
  fill(white);
  beginShape();
  vertex(tri1X, tri1Y);
  vertex(tri2X, tri2Y);
  vertex(tri3X, tri3Y);
  endShape();
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rectPositionX"]    = map(percent, 0, 100, oldObj["rectPositionX"], newObj["rectPositionX"]);
  new_letter["rectPositionY"] = map(percent, 0, 100, oldObj["rectPositionY"], newObj["rectPositionY"]);
  new_letter["rectwidth"] = map(percent, 0, 100, oldObj["rectwidth"], newObj["rectwidth"]);
  new_letter["rectheight"] = map(percent, 0, 100, oldObj["rectheight"], newObj["rectheight"]);

  new_letter["triPositionX"] = map(percent, 0, 100, oldObj["triPositionX"], newObj["triPositionX"]);
  new_letter["triPositionY"] = map(percent, 0, 100, oldObj["triPositionY"], newObj["triPositionY"]);
  new_letter["triangleScale"] = map(percent, 0, 100, oldObj["triangleScale"], newObj["triangleScale"]);
  new_letter["triangleRotate"] = map(percent, 0, 100, oldObj["triangleRotate"], newObj["triangleRotate"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
