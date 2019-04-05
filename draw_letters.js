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

//--- Parameters & Random Numbers that don't mean anything ---//
const parameters = {
  "wid": 50,
  "hei": 100,
  "b2offsetx": 130,
  "b2offsety": 210,
  "b3offsetx": 130,
  "b3offsety": 195,
  "b4offsetx": 120,
  "b4offsety": 110,
  "b5offsetx": 100,
  "b5offsety": 100
}

function drawLetter(letterData) {

  //--- Colour/Stroke Setup ---//
  stroke(colorStroke);
  strokeWeight(1);

//--- Parameter Variables ---//
  let b2posx = 50 + letterData["b2offsetx"];
  let b2posy = 150 + letterData["b2offsety"];

  let b3posx = 50 + letterData["b3offsetx"];
  let b3posy = 150 + letterData["b3offsety"];

  let b4posx = 50 + letterData["b4offsetx"];
  let b4posy = 150 + letterData["b4offsety"];

  let b5posx = 50 + letterData["b5offsetx"];
  let b5posy = 150 + letterData["b5offsety"];

  //--- Draw Ellipse Base ---//
  fill(colorFront1);
  ellipse(50, 110, 110, 180);
  fill(colorFront2);

  //--- Draw Main Rectangles Inside Ellipse Base ---//
  rect(b2posx, b2posy, letterData["wid"], letterData["hei"]);
  rect(b3posx, b3posy, letterData["wid"], letterData["hei"]);
  rect(b4posx, b4posy, letterData["wid"], letterData["hei"]);
  rect(b5posx, b5posy, letterData["wid"], letterData["hei"]);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["wid"]    = map(percent, 0, 100, oldObj["wid"], newObj["wid"]);
  new_letter["hei"] = map(percent, 0, 100, oldObj["hei"], newObj["hei"]);
  new_letter["b2offsetx"] = map(percent, 0, 100, oldObj["b2offsetx"], newObj["b2offsetx"]);
  new_letter["b2offsety"] = map(percent, 0, 100, oldObj["b2offsety"], newObj["b2offsety"]);
  new_letter["b3offsetx"] = map(percent, 0, 100, oldObj["b3offsetx"], newObj["b3offsetx"]);
  new_letter["b3offsety"] = map(percent, 0, 100, oldObj["b3offsety"], newObj["b3offsety"]);
  new_letter["b4offsetx"] = map(percent, 0, 100, oldObj["b4offsetx"], newObj["b4offsetx"]);
  new_letter["b4offsety"] = map(percent, 0, 100, oldObj["b4offsety"], newObj["b4offsety"]);
  new_letter["b5offsetx"] = map(percent, 0, 100, oldObj["b5offsetx"], newObj["b5offsetx"]);
  new_letter["b5offsety"] = map(percent, 0, 100, oldObj["b5offsety"], newObj["b5offsety"]);
  return new_letter;
}

var swapWords = [
  "MEDIEVAL",
  "CREATIVE",
  "ETC12345"
]
