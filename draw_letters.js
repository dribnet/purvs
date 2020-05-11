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
  colourArc1.setAlpha(250);
  fill(colourArc1);
  noStroke();
  arc(arcX,arcY,arcWidth,arcHeight,arcStart,arcEnd);
  let colourArc2 = color("#98CCD3");
  colourArc2.setAlpha(250);
  fill(colourArc2);
  noStroke();
  arc(arcX2,arcY2,arcWidth,arcHeight,arcStart2,arcEnd2);
  let colourRect = color("#364E68");
  colourRect.setAlpha(250);
  fill(colourRect);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcX"]     = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"]     = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  
  new_letter["arcS"]     = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"]     = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  new_letter["arcX2"]    = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"]    = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);
  new_letter["arcS2"]    = map(percent, 0, 100, oldObj["arcS2"], newObj["arcS2"]);
  new_letter["arcE2"]    = map(percent, 0, 100, oldObj["arcE2"], newObj["arcE2"]);
  new_letter["arcH"]     = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
  new_letter["arcW"]     = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["rectX"]    = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"]    = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectW"]    = map(percent, 0, 100, oldObj["rectW"], newObj["rectW"]);
  new_letter["rectH"]    = map(percent, 0, 100, oldObj["rectH"], newObj["rectH"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]