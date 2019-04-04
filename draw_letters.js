const colorFront1  = "#422d14";
const colorFront2  = "#a88a66";
const colorStroke  = "#a88a66";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  //stroke(colorStroke);
  //strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["sizee11"];
  let size5 = letterData["sizee21"];
  let size6 = letterData["sizee22"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 50  + letterData["offsetx1"];
  let pos3y = 150 + letterData["offsety2"];
  let arc1 = letterData["arc11"];
  let arc2 = letterData["arc12"];
  let arc3 = letterData["arc21"];
  let arc4 = letterData["arc22"];



 
  
  // draw two circles
  fill(colorFront1);
  rect(0, 60, 80, 140);

  fill(colorFront2);
  arc(pos2x, pos2y, size2, size3, arc1, arc2, );
  
  fill(colorFront2);
  arc(pos3x, pos3y, size5, size6, arc3, arc4, );
  
 

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