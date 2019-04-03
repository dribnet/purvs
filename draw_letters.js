const colorFront1  = "#264953";
const colorFront2  = "#16625E";
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
  strokeWeight(1);

  let size2 = letterData["size_3"];
  let size3 = letterData["size_3"];
  let size4 = letterData["size_4"];
  let size5 = letterData["size_5"];
  let posx  = 50  + letterData["offsetx"];
  let posy  = 150 + letterData["offsety"];
  let pos2x = 50  + letterData["offsetx_2"];
  let pos2y = 150 + letterData["offsety_2"];
  let pos3x = 50  + letterData["offsetx_3"];
  let pos3y = 150 + letterData["offsety_3"];
  let pos4x = 50  + letterData["offsetx_4"];
  let pos4y = 150 + letterData["offsety_4"];
  let pos5x = 50  + letterData["offsetx_5"];
  let pos5y = 150 + letterData["offsety_5"];

  //circles
  fill(colorFront1);
  ellipse(posx, posy, 25, 25);
  ellipse(pos2x, pos2y, 25, 25);
  ellipse(pos3x, pos3y, 25, 25);
  ellipse(pos4x, pos4y, 25, 25);
  ellipse(pos5x, pos5y, 25, 25);
  
  //ovals
  fill(colorFront2);
  ellipse(posx, posy, size2, size3);
  ellipse(pos2x, pos2y, size2, size3);
  ellipse(pos3x, pos3y, size2, size3);
  ellipse(pos4x, pos4y, size2, size3);
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