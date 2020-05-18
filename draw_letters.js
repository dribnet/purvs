const colorFront1  = "#199cff"; //light blue
const colorFront2  = "#fcba03"; //Dark blue
const colorStroke  = "#233f11";
//const colorBack = "#050403";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  stroke(colorStroke);
  strokeWeight(1);
  //Fill(10);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y =  letterData["offsety"];
  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];


  // draw two rectangles
  fill(161, 42, 42); //Red Rectangle
  rect(0, 0, 100, 200);

  fill(212, 86, 34); //Orange rectangle
  rect(0, 0, rectWid, rectLen);
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