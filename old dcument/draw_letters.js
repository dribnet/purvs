const colorFront1  = "#fcba03";
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
  strokeWeight(5);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let startA = letterData["start"];
  let endA = letterData["stop"];
  let pos3x = letterData["rectx"];
  let pos3y = letterData["recty"];

  


  // draw two circles
  
  noFill();
  arc(pos2x, pos2y, size2, size2,startA,endA);
  noFill();
  rect(pos3x, pos3y, 100, 100);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
  new_letter["rectx"] = map(percent, 0, 100, oldObj["rectx"], newObj["rectx"]);
  new_letter["recty"] = map(percent, 0, 100, oldObj["recty"], newObj["recty"]);
  return new_letter;
}

var swapWords = [
  "AB",
  "AB",
  "BA"
]