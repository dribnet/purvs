const colorFront1  = "#8886a1";
const colorFront2  = "#4b6fb9";
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
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];



  fill(204,133,151);
  noStroke();
  arc(arcposX,arcposY,arcWidth,arcHeight,arcStart,arcEnd);
  fill(38,53,84);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);
  fill(70,103,96);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectW"] = map(percent, 0, 100, oldObj["rectW"], newObj["rectW"]);
  new_letter["rectH"] = map(percent, 0, 100, oldObj["rectH"], newObj["rectH"]);
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
  new_letter["triX1"] = map(percent, 0, 100, oldObj["triX1"], newObj["triX1"]);
  new_letter["triY1"] = map(percent, 0, 100, oldObj["triY1"], newObj["triY1"]);
  new_letter["triX2"] = map(percent, 0, 100, oldObj["triX2"], newObj["triX2"]);
  new_letter["triY2"] = map(percent, 0, 100, oldObj["triY2"], newObj["triY2"]);
  new_letter["triX3"] = map(percent, 0, 100, oldObj["triX3"], newObj["triX3"]);
  new_letter["triY3"] = map(percent, 0, 100, oldObj["triY3"], newObj["triY3"]);

  let old_arc_diff = oldObj["arcE"] - oldObj["arcS"]
  if(old_arc_diff < 0) {
    old_arc_diff = old_arc_diff + 2 * PI;
  }
  let new_arc_diff = newObj["arcE"] - newObj["arcS"]
  if(new_arc_diff < 0) {
    new_arc_diff = new_arc_diff + 2 * PI;
  }
  let cur_arc_diff = map(percent, 0, 100, old_arc_diff, new_arc_diff);
  print(old_arc_diff, new_arc_diff, cur_arc_diff);  
  new_letter["arcE"] = new_letter["arcS"]  + cur_arc_diff;

  let new_percent = {};
  if(percent < 30) {
    new_percent = map(percent, 0, 30, 0, -30);
  }
  else {
    new_percent = map(percent, 30, 100, -30, 30);
  }

  return new_letter;
}

var swapWords = [
  "TOYFONT.",
  "FACEBOOK.",
  "ALPHABET"
]

