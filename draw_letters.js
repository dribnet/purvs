const colorFront1  = "#00ffff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // determine parameters for second lines
  let posx = letterData["x1"];
  let posy = letterData["y1"];


  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];


  let pos5x = letterData["x5"];
  let pos5y = letterData["y5"];
  let pos6x = letterData["x6"];
  let pos6y = letterData["y6"];

  let pos7x = letterData["x7"];
  let pos7y = letterData["y7"];
  let pos8x = letterData["x8"];
  let pos8y = letterData["y8"];



  // draw two circles
  fill(colorFront1);
  line(posx, posy, 50, 100);
  fill(colorFront2);
  line(pos3x, pos3y, 50, 100);
  fill(colorFront1);
  line(pos5x, pos5y, pos6x, pos6y);
  fill(colorFront2);
  line(pos7x, pos7y, pos8x, pos8y);
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