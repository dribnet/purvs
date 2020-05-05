const colorFront1  = "#199cff";
const colorFront2  = "#fcba03";
const colorStroke  = "#f5dd42";
//const colorBack    = "#0a193d";
//const backgroundColour = "#0a193d";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  angleMode(DEGREES);
  strokeWeight(4);
  stroke(colorStroke);
  
 // background(backgroundColour);
 // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+ letterData["offsetx"];
  let pos2y =  letterData["offsety"];
  let startA = letterData["start"];
  let endA = letterData["stop"];
noFill();
  // draw two circles

  ellipse(50, 150, 100, 100);
  fill(255, 155);
  //fill(colorFront2);
  arc(pos2x, pos2y, size2, size2, startA,endA);
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