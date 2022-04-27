/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0d0d0d";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#0d0d0d";
const gold  = "#f5ce42";
const black = "#917504";
//const black = "#0d0d0d";
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
  let size = 18;
  let angle = letterData["angle"];
  let posx = 50;
  let posy = 100;


  let pos2x = letterData["offsetBottom"];
  let pos2y = 50;

  let pos3x = 50;
  let pos3y = letterData["offsetRight"];

  let pos4x = letterData["offsetTop"];
  let pos4y = - 50;

  let pos5x = - 50;
  let pos5y = letterData["offsetLeft"];;

  let centerValX = letterData["centerValX"];
  let centerValY = letterData["centerValY"];
  let leftVal    = letterData["leftVal"];
  let rightVal   = letterData["rightVal"];
  let topVal     = letterData["topVal"];
  let bottomVal  = letterData["bottomVal"];

  push();
  translate(posx, posy)
  scale(0.8);
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(4.5);
  push();
  rotate(angle);

  //Center
  stroke(gold);
  fill(backgroundColor);
  rect(0, 0, size, size + centerValY);

  //Center 2
  stroke(gold);
  fill(gold);
  rect(0, 0, size + centerValX, size);
  pop();

  //Right
  stroke(white);
  fill(backgroundColor);
  rect(pos3x, pos3y, size, size + rightVal);

  //Bottom
  stroke(black);
  fill(black);
  rect(pos2x, pos2y, size + bottomVal, size);

  //Top
  stroke(white);
  fill(white);
  rect(pos4x, pos4y, size + topVal, size);

  //Left
  stroke(black)
  fill(backgroundColor);
  rect(pos5x, pos5y, size, size + leftVal);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultPositioning = 0;

  if(percent < 50){
    new_letter["angle"]         = map(percent, 0, 50, oldObj["angle"], defaultPositioning);
    new_letter["offsetBottom"]  = map(percent, 0, 50, oldObj["offsetBottom"], defaultPositioning);
    new_letter["offsetTop"]     = map(percent, 0, 50, oldObj["offsetTop"], defaultPositioning);
    new_letter["offsetRight"]   = map(percent, 0, 50, oldObj["offsetRight"], defaultPositioning);
    new_letter["offsetLeft"]    = map(percent, 0, 50, oldObj["offsetLeft"], defaultPositioning);
    new_letter["centerValX"]    = map(percent, 0, 50, oldObj["centerValX"], defaultPositioning);
    new_letter["centerValY"]    = map(percent, 0, 50, oldObj["centerValY"], defaultPositioning);
    new_letter["leftVal"]       = map(percent, 0, 50, oldObj["leftVal"], defaultPositioning);
    new_letter["rightVal"]      = map(percent, 0, 50, oldObj["rightVal"], defaultPositioning);
    new_letter["topVal"]        = map(percent, 0, 50, oldObj["topVal"], defaultPositioning);
    new_letter["bottomVal"]     = map(percent, 0, 50, oldObj["bottomVal"], defaultPositioning);
  }else{
    new_letter["angle"]         = map(percent, 51, 100, defaultPositioning, newObj["angle"]);
    new_letter["offsetBottom"]  = map(percent, 51, 100, defaultPositioning, newObj["offsetBottom"]);
    new_letter["offsetTop"]     = map(percent, 51, 100, defaultPositioning, newObj["offsetTop"]);
    new_letter["offsetRight"]   = map(percent, 51, 100, defaultPositioning, newObj["offsetRight"]);
    new_letter["offsetLeft"]    = map(percent, 51, 100, defaultPositioning, newObj["offsetLeft"]);
    new_letter["centerValX"]    = map(percent, 51, 100, defaultPositioning, newObj["centerValX"]);
    new_letter["centerValY"]    = map(percent, 51, 100, defaultPositioning, newObj["centerValY"]);
    new_letter["leftVal"]       = map(percent, 51, 100, defaultPositioning, newObj["leftVal"]);
    new_letter["rightVal"]      = map(percent, 51, 100, defaultPositioning, newObj["rightVal"]);
    new_letter["topVal"]        = map(percent, 51, 100, defaultPositioning, newObj["topVal"]);
    new_letter["bottomVal"]     = map(percent, 51, 100, defaultPositioning, newObj["bottomVal"]);
}
  return new_letter;
}

var swapWords = [
  "BOXFRONT",
  "SQUAREME",
  "5POINTS?",
  "WHOASKED",
  "NATHANP?",
  "MADBRO??"
]
