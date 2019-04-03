const colorFront1  = "#8886a1";
const colorFront2  = "#f4b093";
const colorFront3 = "9fcedf";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
 
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];
  let rectangleX = letterData["rectX"];
  let rectangleY = letterData["rectY"];
  let rectangleWidth = letterData["rectW"];
  let rectangleHeight = letterData["rectH"];
  let arcposX = letterData["arcX"];
  let arcposY = letterData["arcY"];
  let arcStart = letterData["arcS"];
  let arcEnd = letterData["arcE"];
  let arcWidth = letterData["arcW"];
  let arcHeight = letterData["arcH"];


  fill(130,130,130);
  noStroke();
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
  fill(100,230,130);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);
  fill(230,230,0);
  arc(arcposX,arcposY,arcWidth,arcHeight,arcStart,arcEnd);
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