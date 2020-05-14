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
  strokeWeight(5);
  
  push();
  scale(0.65);
  strokeWeight(8);

  fill(colorArc);
  arc(pos2x, pos2y, arcsx, arcsy, arcs, arce, PIE);
  fill(colorTri);
  triangle(trix1, triy1, trix2 , triy2, trix3, triy3);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["triangleX1"] = map(percent, 0, 100, oldObj["triangleX1"], newObj["triangleX1"]);
  new_letter["triangleX2"] = map(percent, 0, 100, oldObj["triangleX2"], newObj["triangleX2"]);
  new_letter["triangleX3"] = map(percent, 0, 100, oldObj["triangleX3"], newObj["triangleX3"]);
  new_letter["triangleY1"] = map(percent, 0, 100, oldObj["triangleY1"], newObj["triangleY1"]);
  new_letter["triangleY2"] = map(percent, 0, 100, oldObj["triangleY2"], newObj["triangleY2"]);
  new_letter["triangleY3"] = map(percent, 0, 100, oldObj["triangleY3"], newObj["triangleY3"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);
  new_letter["arcSizeX"] = map(percent, 0, 100, oldObj["arcSizeX"], newObj["arcSizeX"]);
  new_letter["arcSizeY"] = map(percent, 0, 100, oldObj["arcSizeY"], newObj["arcSizeY"]);
  return new_letter;
}

var swapWords = [
  "PLAYFUL!",
  "CAB?CAB?",
  "BAAAAAAA"
]