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
    let size2x = letterData["sizex"];
  let size2y = letterData["sizey"];


let posx = 0;
let posy = 80;

   let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

    let posBX = posx + letterData["boxX"];
  let posBY = posy + letterData["boxY"];


  // draw two circles
  fill(colorFront1);

  rect(posx, posy, 120, 120);

  fill(colorFront2);

  rect(pos2x, pos2y, size2x, size2y);
    rect(posBX,posBY, size2x, size2y);
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