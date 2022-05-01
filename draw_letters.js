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

  if(percent < 40){
    new_letter["offsetBottom"]  = map(percent, 0, 40, oldObj["offsetBottom"], 0);
    new_letter["offsetTop"]     = map(percent, 0, 40, oldObj["offsetTop"], 0);
    new_letter["offsetRight"]   = map(percent, 0, 40, oldObj["offsetRight"], 0);
    new_letter["offsetLeft"]    = map(percent, 0, 40, oldObj["offsetLeft"], 0);
    new_letter["centerValX"]    = map(percent, 0, 40, oldObj["centerValX"], 0);
    new_letter["centerValY"]    = map(percent, 0, 40, oldObj["centerValY"], 0);
    new_letter["leftVal"]       = map(percent, 0, 40, oldObj["leftVal"], 0);
    new_letter["rightVal"]      = map(percent, 0, 40, oldObj["rightVal"], 0);
    new_letter["topVal"]        = map(percent, 0, 40, oldObj["topVal"], 0);
    new_letter["bottomVal"]     = map(percent, 0, 40, oldObj["bottomVal"], 0);
  }else if(40 < percent && percent < 60){
    new_letter["offsetBottom"]  = map(percent, 41, 60, 0, 0);
    new_letter["offsetTop"]     = map(percent, 41, 60, 0, 0);
    new_letter["offsetRight"]   = map(percent, 41, 60, 0, 0);
    new_letter["offsetLeft"]    = map(percent, 41, 60, 0, 0);
    new_letter["centerValX"]    = map(percent, 41, 60, 0, 0);
    new_letter["centerValY"]    = map(percent, 41, 60, 0, 0);
    new_letter["leftVal"]       = map(percent, 41, 60, 0, 0);
    new_letter["rightVal"]      = map(percent, 41, 60, 0, 0);
    new_letter["topVal"]        = map(percent, 41, 60, 0, 0);
    new_letter["bottomVal"]     = map(percent, 41, 60, 0, 0);
  }
  else if (percent > 60){
    new_letter["offsetBottom"]  = map(percent, 61, 100, 0, newObj["offsetBottom"]);
    new_letter["offsetTop"]     = map(percent, 61, 100, 0, newObj["offsetTop"]);
    new_letter["offsetRight"]   = map(percent, 61, 100, 0, newObj["offsetRight"]);
    new_letter["offsetLeft"]    = map(percent, 61, 100, 0, newObj["offsetLeft"]);
    new_letter["centerValX"]    = map(percent, 61, 100, 0, newObj["centerValX"]);
    new_letter["centerValY"]    = map(percent, 61, 100, 0, newObj["centerValY"]);
    new_letter["leftVal"]       = map(percent, 61, 100, 0, newObj["leftVal"]);
    new_letter["rightVal"]      = map(percent, 61, 100, 0, newObj["rightVal"]);
    new_letter["topVal"]        = map(percent, 61, 100, 0, newObj["topVal"]);
    new_letter["bottomVal"]     = map(percent, 61, 100, 0, newObj["bottomVal"]);
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
