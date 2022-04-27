/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

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

  // determine parameters for second circle
  let rectPosX = posx + letterData["rectPositionX"];
  let rectPosY = posy + letterData["rectPositionY"];
  let rectWidth = letterData["rectwidth"];
  let rectHeight = letterData["rectheight"];
  let triPosX = posx + letterData["triPositionX"];
  let triPosY = posy + letterData["triPositionY"];
  let triscale = letterData["triangleScale"];
  let triRotate = letterData["triangleRotate"];

  // draw two circles
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);

  fill(black);
  rect(posx, posy, 150, 200);

  fill(white);
  rect(rectPosX, rectPosY, rectWidth, rectHeight);

  push();
  translate(triPosX, triPosY);
  fill(white);
  scale(triscale);
  rotate(triRotate);
  triangle(0, 0, 40, 60, - 40, 60);
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
