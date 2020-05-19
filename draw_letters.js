const colorBackg    = "#2B2118";
const colorStroke  = "#e6eef4";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(colorStroke);
  strokeWeight(17);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();

  // determine parameters for each x,y coordinate
  let pointoneX = letterData["pointoneX"]*.8;
  let pointoneY = letterData["pointoneY"]*.8;
  let pointtwoX = letterData["pointtwoX"]*.8;
  let pointtwoY = letterData["pointtwoY"]*.8;
  let pointthreeX =letterData["pointthreeX"]*.8;
  let pointthreeY = letterData["pointthreeY"]*.8;

  const baselineY = 0 +185; //straight line from 0 to 200

  beginShape();
  curveVertex (15, 15);
  curveVertex (15, 15);
  curveVertex (15, baselineY);
  curveVertex (pointoneX, pointoneY);
  curveVertex (pointtwoX, pointtwoY);
  curveVertex (pointthreeX,pointthreeY);
  curveVertex (pointthreeX,pointthreeY);
  endShape();

  for (let i = 10; i < 200; i += 10) { //ridges through the letters
    if (i % 20 === 0) {
      stroke("#03a0a5");
      strokeWeight (3);
      bezier(0, i, 50, -500+i, 50, 100+i, 100, i);
    }
  }

  // line (0,0,0,baselineY);
  // line (0,baselineY,pointoneX,pointoneY);
  // line (pointoneX,pointoneY,pointtwoX,pointtwoY);
  // line (pointtwoX,pointtwoY,pointthreeX,pointthreeY);
  
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
  "DIRTWORM",
  "CAB?CAB?",
  "BAAAAAAA"
]