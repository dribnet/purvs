/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#00307d";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#00307d";
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

  push();
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);

  fill(darkBlue);
  rect(posx, posy, 100, 200); //backgroundd for letters

  fill(white);
  strokeWeight(10);
  stroke(white);
  strokeJoin(ROUND);
  rect(rectPosX, rectPosY, rectWidth, rectHeight); //rectangle for the empty space


  fill(white);
  strokeWeight(10);
  stroke(white);
  strokeJoin(ROUND);
  beginShape(); //triangle for the empty space
  vertex(tri1X, tri1Y);
  vertex(tri2X, tri2Y);
  vertex(tri3X, tri3Y);
  endShape(CLOSE);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rectPositionX"]    = map(percent, 0, 100, oldObj["rectPositionX"], newObj["rectPositionX"]);
  new_letter["rectPositionY"] = map(percent, 0, 100, oldObj["rectPositionY"], newObj["rectPositionY"]);
  new_letter["rectwidth"] = map(percent, 0, 100, oldObj["rectwidth"], newObj["rectwidth"]);
  new_letter["rectheight"] = map(percent, 0, 100, oldObj["rectheight"], newObj["rectheight"]);

  new_letter["triPosition1X"] = map(percent, 0, 100, oldObj["triPosition1X"], newObj["triPosition1X"]);
  new_letter["triPosition1Y"] = map(percent, 0, 100, oldObj["triPosition1Y"], newObj["triPosition1Y"]);
  new_letter["triPosition2X"] = map(percent, 0, 100, oldObj["triPosition2X"], newObj["triPosition2X"]);
  new_letter["triPosition2Y"] = map(percent, 0, 100, oldObj["triPosition2Y"], newObj["triPosition2Y"]);
  new_letter["triPosition3X"] = map(percent, 0, 100, oldObj["triPosition3X"], newObj["triPosition3X"]);
  new_letter["triPosition3Y"] = map(percent, 0, 100, oldObj["triPosition3Y"], newObj["triPosition3Y"]);
  return new_letter;
}

var swapWords = [
  "NEGATIVE",
  "TRICKART",
  "KONITIWA",
  "8018018;",
  "HAHAV5V5"
]
