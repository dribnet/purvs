const colorStroke  = "#233f11";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  angleMode(DEGREES);
  stroke(colorStroke);
  strokeWeight(4);

  // ARC ONE
  let arcX = letterData["arcX"];
  let arcY = letterData["arcY"];
  let arcStart = letterData["arcS"];
  let arcEnd = letterData["arcE"];
  // ARC TWO
  let arcX2 = letterData["arcX2"];
  let arcY2 = letterData["arcY2"];
  let arcStart2 = letterData["arcS2"];
  let arcEnd2 = letterData["arcE2"];
  // ARC SHARED PARAMETERS
  let arcHeight = letterData["arcH"];
  let arcWidth = letterData["arcW"];
  //RECTANGLE 
  let rectangleX = letterData["rectX"];
  let rectangleY = letterData["rectY"];
  let rectangleWidth = letterData["rectW"];
  let rectangleHeight = letterData["rectH"];
  
  // DARWING THE SHAPES
  let colourArc1 = color("#5488A3");
  colourArc1.setAlpha(200);
  fill(colourArc1);
  noStroke();
  arc(arcX,arcY,arcWidth,arcHeight,arcStart,arcEnd);
  let colourArc2 = color("#98CCD3");
  colourArc2.setAlpha(200);
  fill(colourArc2);
  noStroke();
  arc(arcX2,arcY2,arcWidth,arcHeight,arcStart2,arcEnd2);
  let colourRect = color("#364E68");
  colourRect.setAlpha(200);
  fill(colourRect);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
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