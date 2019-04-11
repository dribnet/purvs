const colorFront1  = "#FFBFDC";
const colorFront2  = "#E60066";
const colorStroke  = "#E60066";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

const parameters = {
  //"size": 50,
  "width": 50,
  "height": 100,
  "c2offsetx": 130,
  "c2offsety": 210,
  "c3offsetx": 130,
  "c3offsety": 195
}

function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3.5);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  let w = letterData["width"];
  let h = letterData["height"];
  let c2posx = 50 + letterData["c2offsetx"];
  let c2posy = 150 + letterData["c2offsety"];
  let c3posx = 50 + letterData["c3offsetx"];
  let c3posy = 150 + letterData["c3offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 150, 75, 75);
  fill(colorFront2);
  ellipse(c2posx, c2posy, letterData["width"], letterData["height"]);
  ellipse(c3posx, c3posy, letterData["width"], letterData["height"]);
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
