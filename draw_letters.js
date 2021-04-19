/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#FFFFFF";
var systemBoxColor = "#FFFFFF";

/* internal constants */

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

const strokeColor = "#000000";
const translatex = 50;
const translatey = 100;

function drawLetter(letterData) {
  // color/stroke setup
  push();
  translate(translatex,translatey);
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let size3 = letterData["size_3"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];


  // draw two circles
  fill('#0');
  ellipse(0, 0, 100, 100);

  fill('#000000');
  ellipse(pos2x, pos2y, size2, size2);

 fill('#000000');
  ellipse(pos3x, pos3y, size3, size3);

pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
   new_letter["size_3"]    = map(percent, 0, 100, oldObj["size_3"], newObj["size_3"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]