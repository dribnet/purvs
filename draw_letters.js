const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";
const colorball  = "#FF9270";

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
  noStroke();
  angleMode(DEGREES);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50  + letterData["offsetx"];
  //let pos2y = 150 + letterData["offsety"];


  
  let c1 = letterData["point1"];
  let c2 = letterData["point2"];
  let c3 = letterData["point3"];
  let c4 = letterData["point4"];
  let c5 = letterData["point5"];
  let c6 = letterData["point6"];
  let posbx = 50 + letterData["bx"];
  let posby = 100 + letterData["by"];
   let posb1x = 50 + letterData["bx1"];
  let posb1y = 100 + letterData["by1"];


  // draw two circles
  fill(colorFront1);
  ellipse(50, 100, 75, 75);
  fill(colorball);
  //ellipse(pos2x, pos2y, size2, size2);\
  ellipse(posbx, posby, 20);
  ellipse(posb1x, posb1y, 20);
  triangle(c5, c6, 50 + c1, 100 + c2, 50 + c3, 100 + c4);
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