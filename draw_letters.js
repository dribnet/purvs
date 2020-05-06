const colorArc  = "#61DDC9";
const colorTri = "#FF6F80";
const colorStroke  = "#FF797";
//#F070A1 #16FFBD

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  // determine parameters for second circle
  let pos2x =  50 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let trix1 = letterData["triangleX1"];
  let trix2 = letterData["triangleX2"];
  let trix3 = letterData["triangleX3"];
  let triy1 = letterData["triangleY1"];
  let triy2 = letterData["triangleY2"];
  let triy3 = letterData["triangleY3"];
  let arcs = letterData["arcStart"];
  let arce = letterData["arcEnd"];
  let arcsx = letterData["arcSizeX"];
  let arcsy = letterData["arcSizeY"];

  // draw two circles
  stroke(colorStroke);
  strokeWeight(15);
  
  push();
  scale(0.65);

  fill(colorArc);
  arc(pos2x, pos2y, arcsx, arcsy, arcs, arce);
  fill(colorTri);
  triangle(trix1, triy1, trix2 , triy2, trix3, triy3);
  pop();
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