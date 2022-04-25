/* these are optional special variables which will change the system */
var systemBackgroundColor = "#808080";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#808080";
const gold  = "#f5ce42";
const black  = "#0d0d0d";
const white = "ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
  let size = letterData["size"];

  let posx = 62.5;
  let posy = 130;

  let pos2x = posx + letterData["offsetBottom"];
  let pos2y = posy + 50;

  let pos3x = posx + 50;
  let pos3y = posy + letterData["offsetRight"];

  let pos4x = posx + letterData["offsetTop"];
  let pos4y = posy - 50;

  let pos5x = posx - 50;
  let pos5y = posy + letterData["offsetLeft"];;

  let centerValX = letterData["centerValX"];
  let centerValY = letterData["centerValY"];
  let leftVal = letterData["leftVal"];
  let rightVal = letterData["rightVal"];
  let topVal = letterData["topVal"];
  let bottomVal = letterData["bottomVal"];

  push();
  scale(0.8);
  rectMode(CENTER);
  //Center
  noStroke()
  fill(gold);
  rect(posx, posy, size + centerValX, size);

  //Center 2
  noStroke()
  fill(gold);
  rect(posx, posy, size, size + centerValY);

  //Right
  fill(white);
  rect(pos3x, pos3y, size, size + rightVal);

  //Bottom
  fill(black);
  rect(pos2x, pos2y, size + bottomVal, size);

  //Top
  fill(white);
  rect(pos4x, pos4y, size + topVal, size);

  //Left
  fill(black);
  rect(pos5x, pos5y, size, size + leftVal);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetBottom"]  = map(percent, 0, 100, oldObj["offsetBottom"], newObj["offsetBottom"]);
  new_letter["offsetTop"]     = map(percent, 0, 100, oldObj["offsetTop"], newObj["offsetTop"]);
  new_letter["offsetRight"]   = map(percent, 0, 100, oldObj["offsetRight"], newObj["offsetRight"]);
  new_letter["offsetLeft"]    = map(percent, 0, 100, oldObj["offsetLeft"], newObj["offsetLeft"]);
  new_letter["centerValX"]    = map(percent, 0, 100, oldObj["centerValX"], newObj["centerValX"]);
  new_letter["centerValY"]    = map(percent, 0, 100, oldObj["centerValY"], newObj["centerValY"]);
  new_letter["leftVal"]       = map(percent, 0, 100, oldObj["leftVal"], newObj["leftVal"]);
  new_letter["rightVal"]      = map(percent, 0, 100, oldObj["rightVal"], newObj["rightVal"]);
  new_letter["topVal"]        = map(percent, 0, 100, oldObj["topVal"], newObj["topVal"]);
  new_letter["bottomVal"]     = map(percent, 0, 100, oldObj["bottomVal"], newObj["bottomVal"]);
  return new_letter;
}

var swapWords = [
  "BOXFRONT",
  "SQUAREME",
  "FIVESPOT",
  "ZOIDBERG",
  "DEEZNUTS"
]
