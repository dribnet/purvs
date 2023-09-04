const colorStroke  = "#233f11";
const colourArc1  = "#5488A3";
const colourArc2  = "#98CCD3";
const colourRect  = "#364E68";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
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
  let arcSize = letterData["arcSize"];
  // ARC SHARED PARAMETERS
  let rectSize = letterData["arcSize"];
  // RECTANGLE ONE
  let rectangleX = letterData["rectX"];
  let rectangleY = letterData["rectY"];
  // RECTANGLE TWO
  let rectangleX2 = letterData["rectX2"];
  let rectangleY2 = letterData["rectY2"];
  // DARWING THE SHAPES
  // ARC ONE
  fill(colourArc1);
  noStroke();
  arc(arcX,arcY,arcSize,arcSize,arcStart,arcEnd);
  // ARC TWO
  fill(colourArc2);
  noStroke();
  arc(arcX2,arcY2,arcSize,arcSize,arcStart2,arcEnd2);
  // RECTANGLES ONE & TWO
  fill(colourRect);
  rect(rectangleX,rectangleY,50,50);
  rect(rectangleX2,rectangleY2,50,50);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcX"]     = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"]     = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcX2"]    = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"]    = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);
  new_letter["arcSize"]  = map(percent, 0, 100, oldObj["arcSize"], newObj["arcSize"]);
  new_letter["rectX"]    = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"]    = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectX2"]   = map(percent, 0, 100, oldObj["rectX2"], newObj["rectX2"]);
  new_letter["rectY2"]   = map(percent, 0, 100, oldObj["rectY2"], newObj["rectY2"]);
 // WHILE PERCENT IS LESS THAN 40 KEEP ARCS STARTING AND END POSITIONS IN THEIR OLD STATE 
 if(percent < 40){
  new_letter["arcS"] = oldObj["arcS"];
  new_letter["arcE"] = oldObj["arcE"];
  new_letter["arcS2"] = oldObj["arcS2"];
  new_letter["arcE2"] = oldObj["arcE2"];
 }
 else{
  new_letter["arcS"]     = map(percent/2, 0, 50, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"]     = map(percent/2, 0, 50, oldObj["arcE"], newObj["arcE"]);
  new_letter["arcS2"]    = map(percent/2, 0, 50, oldObj["arcS2"], newObj["arcS2"]);
  new_letter["arcE2"]    = map(percent/2, 0, 50, oldObj["arcE2"], newObj["arcE2"]);
 }
  return new_letter;
}

var swapWords = [
  "NEOTERIC",
  "ABSTRACT",
  "CHEERFUL",
  "ARTISTIC",
  "POWERFUL",
  "POSITIVE",
  "THIRTEEN"
]