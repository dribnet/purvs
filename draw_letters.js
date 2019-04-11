const colorFront1  = "#ce0027";
const colorFront2  = "#efa6a6";
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
  rect(10, 60, 80, 140);

  fill(colorFront2);
  arc(pos2x+10, pos2y, size2, size3, arc1, arc2);
  
  fill(colorFront2);
  arc(pos3x+10, pos3y, size5, size6, arc3, arc4);
  
 

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["sizee11"]    = map(percent, 0, 100, oldObj["sizee11"], newObj["sizee11"]);
  new_letter["sizee21"]    = map(percent, 0, 100, oldObj["sizee21"], newObj["sizee21"]);
  new_letter["sizee22"]    = map(percent, 0, 100, oldObj["sizee22"], newObj["sizee22"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx1"]    = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety2"]    = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["arc11"]    = map(percent, 0, 1, oldObj["arc11"], newObj["arc11"]);
  new_letter["arc12"]    = map(percent, 0, 1, oldObj["arc12"], newObj["arc12"]);
  new_letter["arc21"]    = map(percent, 0, 1, oldObj["arc21"], newObj["arc21"]);
  new_letter["arc22"]    = map(percent, 0, 1, oldObj["arc22"], newObj["arc22"]);




  return new_letter;
}

var swapWords = [
  "PAPERCUT",
  "SPINNING",
  "CUTTING?",
  "ORGANIC?",
  "DECREASE"

]