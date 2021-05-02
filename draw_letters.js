/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */

const backgroundColor  = "#e3eded";
const strokeColor = "#233f11";
const darkPurple  = "#582C70";
const lightPurple  = "#BD5DF0";
const orange = "#F65502";



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
  angleMode(DEGREES);
  push();
  rectMode(CENTER);
  pop();

  // parameters for letters
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let rot = letterData["rotation"];
  let pos3x = letterData["arcPosX"];
  let pos3y = letterData["arcPosY"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["stop"];
  


  // draw two circles
  push();
  fill(darkPurple);
  ellipse(50, 150, 100, 100);
  pop();

  fill(lightPurple);
  push();
  translate(pos2x, pos2y);
  rotate(rot);
  rect(0, 0, size2, size2);
  pop();

  push();
  fill(orange);
  arc(pos3x, pos3y, 50, 50, startAngle, stopAngle, PIE);
  pop();
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