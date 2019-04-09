const colorFront1  = "#00ffff";
const colorFront2  = "#59ccff";
const colorStroke  = "#FFFFFF";

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



  // draw lines
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
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["x7"] = map(percent, 0, 100, oldObj["x7"], newObj["x7"]);
  new_letter["y7"] = map(percent, 0, 100, oldObj["y7"], newObj["y7"]);
  new_letter["x8"] = map(percent, 0, 100, oldObj["x8"], newObj["x8"]);
  new_letter["y8"] = map(percent, 0, 100, oldObj["y8"], newObj["y8"]);
  return new_letter;
}

var swapWords = [
  "ANGULARY",// FRONT NAME 
  "BARBECUE",
  "DUMPLING",
  "EGGPLANT",
  "LEMONADE",
  "ICECREAM",
  "MUSHROOM",
  "02121997"
]