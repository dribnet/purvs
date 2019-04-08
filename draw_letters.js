const colorFront1  = "#fffd99";
const colorFront2  = "#ff99f3";
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

  // determine parameters for second circle
  let size1x = letterData["sizeB1x"];
  let size1y = letterData["sizeB1y"];

  let size2x = letterData["sizeB2x"];
  let size2y = letterData["sizeB2y"];

  let posx = 0;
  let posy = 80;

  let pos1x = posx + letterData["posB1x"];
  let pos1y = posy + letterData["posB1y"];

  let pos2x = posx + letterData["posB2x"];
  let pos2y = posy + letterData["posB2y"];

  let pos3x = posx + letterData["posB3x"];
  let pos3y = posy + letterData["posB3y"];

  let pos4x = posx + letterData["posB4x"];
  let pos4y = posy + letterData["posB4y"];


  // draw two circles
  fill(colorFront1);

  rect(posx, posy, 120, 120);

  fill(colorFront2);

  rect(pos1x, pos1y, size1x, size1y);
   rect(pos2x,pos2y, size1x, size1y);
  rect(pos3x, pos3y, size2x,size2y);
    rect(pos4x, pos4y, size2x, size2y);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizex"]    = map(percent, 0, 100, oldObj["sizex"], newObj["sizex"]);
  new_letter["sizey"]    = map(percent, 0, 100, oldObj["sizey"], newObj["sizey"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]