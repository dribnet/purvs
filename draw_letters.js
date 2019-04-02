const colorFront1  = "#F1A334";
const colorFront2  = "#296EAD";
const colorStroke  = "#296EAD";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

const parameters = {
  //"size": 50,
  "wid": 50,
  "hei": 100,
  "b2offsetx": 130,
  "b2offsety": 210,
  "b3offsetx": 130,
  "b3offsety": 195,
  "b4offsetx": 120,
  "b4offsety": 110
}

function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3.5);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  let w = letterData["wid"];
  let h = letterData["hei"];
  let b2posx = 50 + letterData["b2offsetx"];
  let b2posy = 150 + letterData["b2offsety"];
  let b3posx = 50 + letterData["b3offsetx"];
  let b3posy = 150 + letterData["b3offsety"];
  let b4posx = 50 + letterData["b4offsetx"];
  let b4posy = 150 + letterData["b4offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 110, 130, 180);
  fill(colorFront2);
  //ellipse(b2posx, b2posy, letterData["wid"], letterData["hei"]);
  //ellipse(b3posx, b3posy, letterData["wid"], letterData["hei"]);
  rect(b2posx, b2posy, letterData["wid"], letterData["hei"]);
  rect(b3posx, b3posy, letterData["wid"], letterData["hei"]);
  rect(b4posx, b4posy, letterData["wid"], letterData["hei"]);
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
