/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const white  = "#ffffff";
const strokeColor  = "#baf0f8";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  
  let posx = 10;
  let posy = 100;
  stroke(strokeColor);
  noStroke();
  let pos1x = posx + letterData["Rect1x"];
  let pos1y = posy + letterData["Rect1y"];
  let pos2x = posx + letterData["Rect2x"];
  let pos2y = posy + letterData["Rect2y"];
  let pos3x = posx + letterData["Rect3x"];
  let pos3y = posy + letterData["Rect3y"];
  let pos4x = posx + letterData["Rect4x"];
  let pos4y = posy + letterData["Rect4y"];
  let pos5x = posx + 40;
  let pos5y = posy + 0;

  let height1y = letterData["Rect1h"];
  let height2y = letterData["Rect2h"];
  let height3y = letterData["Rect3h"];
  let height4y = letterData["Rect4h"];
  let height5y = 178;
  let width5x = 114;

  let rot1 = letterData["Rect1r"];
  let rot2 = letterData["Rect2r"];
  let rot3 = letterData["Rect3r"];
  let rot4 = letterData["Rect4r"];
  // square 1
  push();
  strokeCap(SQUARE);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  fill(white);
  push();
  translate(pos1x, pos1y);
  rotate(rot1);
  rect(0, 0, 30, height1y);
  pop();

  push();
  translate(pos2x, pos2y);
  rotate(rot2);
  rect(0, 0, 30, height2y);
  pop();

  push();
  translate(pos3x, pos3y);
  rotate(rot3);
  rect(0, 0, 30, height3y);
  pop();

  push();
  translate(pos4x, pos4y);
  rotate(rot4);
  rect(0, 0, 30, height4y);
  pop();
  
  push();
  fill(0, 0, 0, 0);
  stroke(strokeColor);
  strokeWeight(20);
  translate(pos5x, pos5y);
  rect(0, 0, width5x, height5y);
  pop();
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["Rect1x"] = map(percent, 0, 100, oldObj["Rect1x"], newObj["Rect1x"]);
  new_letter["Rect1y"] = map(percent, 0, 100, oldObj["Rect1y"], newObj["Rect1y"]);
  new_letter["Rect2x"] = map(percent, 0, 100, oldObj["Rect2x"], newObj["Rect2x"]);
  new_letter["Rect2y"] = map(percent, 0, 100, oldObj["Rect2y"], newObj["Rect2y"]);
  new_letter["Rect3x"] = map(percent, 0, 100, oldObj["Rect3x"], newObj["Rect3x"]);
  new_letter["Rect3y"] = map(percent, 0, 100, oldObj["Rect3y"], newObj["Rect3y"]);
  new_letter["Rect4x"] = map(percent, 0, 100, oldObj["Rect4x"], newObj["Rect4x"]);
  new_letter["Rect4y"] = map(percent, 0, 100, oldObj["Rect4y"], newObj["Rect4y"]);
  new_letter["Rect1h"] = map(percent, 0, 100, oldObj["Rect1h"], newObj["Rect1h"]);
  new_letter["Rect2h"] = map(percent, 0, 100, oldObj["Rect2h"], newObj["Rect2h"]);
  new_letter["Rect3h"] = map(percent, 0, 100, oldObj["Rect3h"], newObj["Rect3h"]);
  new_letter["Rect4h"] = map(percent, 0, 100, oldObj["Rect4h"], newObj["Rect4h"]);
  new_letter["Rect1r"] = map(percent, 0, 100, oldObj["Rect1h"], newObj["Rect1h"]);
  new_letter["Rect2r"] = map(percent, 0, 100, oldObj["Rect2h"], newObj["Rect2h"]);
  new_letter["Rect3r"] = map(percent, 0, 100, oldObj["Rect3h"], newObj["Rect3h"]);
  new_letter["Rect4r"] = map(percent, 0, 100, oldObj["Rect4h"], newObj["Rect4h"]);
  return new_letter;
}

var swapWords = [
  "FUTURBLK",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
