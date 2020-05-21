const colorArc  = "#61DDC9";
const colorTri = "#FF6F80";
const colorStroke  = "#FFFFFF";
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
  // set up parameters
  let posX =  50 + letterData["offsetX"];
  let posY = 100 + letterData["offsetY"];
  let triX1 = letterData["triangleX1"];
  let triX2 = letterData["triangleX2"];
  let triX3 = letterData["triangleX3"];
  let triY1 = letterData["triangleY1"];
  let triY2 = letterData["triangleY2"];
  let triY3 = letterData["triangleY3"];
  let arcS = letterData["arcStart"];
  let arcE = letterData["arcEnd"];
  let arcSX = letterData["arcSizeX"];
  let arcSY = letterData["arcSizeY"];

  //set up strokecolour and default weight
  stroke(colorStroke);
  strokeWeight(5);
  
  //set up actual alphabet stroke weight
  //scaled letters down to make easier to work with
  //soften stroke corners
  push();
  scale(0.65);
  strokeWeight(10);
  strokeJoin(ROUND);

  //draw arc and triangle
  fill(colorArc);
  arc(posX, posY, arcSX, arcSY, arcS, arcE, PIE);
  fill(colorTri);
  triangle(triX1, triY1, triX2 , triY2, triX3, triY3);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetX"] = map(percent, 0, 100, oldObj["offsetX"], newObj["offsetX"]);
  new_letter["offsetY"] = map(percent, 0, 100, oldObj["offsetY"], newObj["offsetY"]);
  new_letter["triangleX1"] = map(percent, 0, 100, oldObj["triangleX1"], newObj["triangleX1"]);
  new_letter["triangleX2"] = map(percent, 0, 100, oldObj["triangleX2"], newObj["triangleX2"]);
  new_letter["triangleX3"] = map(percent, 0, 100, oldObj["triangleX3"], newObj["triangleX3"]);
  new_letter["triangleY1"] = map(percent, 0, 100, oldObj["triangleY1"], newObj["triangleY1"]);
  new_letter["triangleY2"] = map(percent, 0, 100, oldObj["triangleY2"], newObj["triangleY2"]);
  new_letter["triangleY3"] = map(percent, 0, 100, oldObj["triangleY3"], newObj["triangleY3"]);
  //speed up the placement of arc start and end
  //speed up arc size transition
  new_letter["arcStart"] = map(percent*2, 0, 200, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent*2, 0, 200, oldObj["arcEnd"], newObj["arcEnd"]);
  new_letter["arcSizeX"] = map(percent*2, 0, 200, oldObj["arcSizeX"], newObj["arcSizeX"]);
  new_letter["arcSizeY"] = map(percent*2, 0, 200, oldObj["arcSizeY"], newObj["arcSizeY"]);
  return new_letter;
}

var swapWords = [
  "CANDYPIE",
  "LOLLIPOP",
  "PLAYFUL!",
  "ABSTRACT",
  "CONTRAST",
  "POPPING!",
  "CHEERFUL",
  "STYLIZED"
  
]