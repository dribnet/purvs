const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBackg    = "#2B2118";
const colorStroke  = "#A8763E";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(colorStroke);
  strokeWeight(10);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();

  // determine parameters for second circle
  let pointoneX = 0+letterData["pointoneX"];
  let pointoneY = 0+letterData["pointoneY"];
  let pointtwoX = 0+letterData["pointtwoX"];
  let pointtwoY = 0+letterData["pointtwoY"];
  let pointthreeX = 0+letterData["pointthreeX"];
  let pointthreeY = 0+letterData["pointthreeY"];

  const baselineY = 0 +200;

  // beginShape();
  // vertex (0, 0);
  // vertex (0, baselineY);
  // vertex (pointoneX, pointoneY);
  // vertex (pointtwoX, pointtwoY);
  // vertex (pointthreeX,pointthreeY);
  // endShape();

  line (0,0,0,baselineY);
  line (0,baselineY,pointoneX,pointoneY);
  line (pointoneX,pointoneY,pointtwoX,pointtwoY);
  line (pointtwoX,pointtwoY,pointthreeX,pointthreeY);
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["pointoneX"]    = map(percent, 0, 100, oldObj["pointoneX"], newObj["pointoneX"]);
  new_letter["pointoneY"] = map(percent, 0, 100, oldObj["pointoneY"], newObj["pointoneY"]);
  new_letter["pointtwoX"] = map(percent, 0, 100, oldObj["pointtwoX"], newObj["pointtwoX"]);
  new_letter["pointtwoY"] = map(percent, 0, 100, oldObj["pointtwoY"], newObj["pointtwoY"]);
  new_letter["pointthreeX"] = map(percent, 0, 100, oldObj["pointthreeX"], newObj["pointthreeX"]);
  new_letter["pointthreeY"] = map(percent, 0, 100, oldObj["pointthreeY"], newObj["pointthreeY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]