const colorFront1  = "#4fb3a2";
const colorFront2  = "#ff9aa2";
const colorFront3  = "#ffb7b2";
const colorStroke  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];

  let pointX1 = letterData["ptX1"];
  let pointY1 = letterData["ptY1"];
  let pointX2 = letterData["ptX2"];
  let pointY2 = letterData["ptY2"];
  let pointX3 = letterData["ptX3"];
  let pointY3 = letterData["ptY3"]

  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
 
  // draw two circles
  
  fill(colorFront3);
  strokeWeight();
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  
  fill(colorFront2);
  triangle(pointX1, pointY1, pointX2, pointY2, pointX3, pointY3);
  fill(colorFront1);
  rect(rectX, rectY, rectWid, rectLen);


}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["triX1"] = map(percent, 0, 100, oldObj["triX1"], newObj["triX1"]);
  new_letter["triY1"] = map(percent, 0, 100, oldObj["triY1"], newObj["triY1"]);
  new_letter["triX2"] = map(percent, 0, 100, oldObj["triX2"], newObj["triX2"]);
  new_letter["triY2"] = map(percent, 0, 100, oldObj["triY2"], newObj["triY2"]);
  new_letter["triX3"] = map(percent, 0, 100, oldObj["triX3"], newObj["triX3"]);
  new_letter["triY3"] = map(percent, 0, 100, oldObj["triY3"], newObj["triY3"]);
  new_letter["ptX1"] = map(percent, 0, 100, oldObj["ptX1"], newObj["ptX1"]);
  new_letter["ptY1"] = map(percent, 0, 100, oldObj["ptY1"], newObj["ptY1"]);
  new_letter["ptX2"] = map(percent, 0, 100, oldObj["ptX2"], newObj["ptX2"]);
  new_letter["ptY2"] = map(percent, 0, 100, oldObj["ptY2"], newObj["ptY2"]);
  new_letter["ptX3"] = map(percent, 0, 100, oldObj["ptX3"], newObj["ptX3"]);
  new_letter["ptY3"] = map(percent, 0, 100, oldObj["ptY3"], newObj["ptY3"]);
  new_letter["rectL"] = map(percent, 0, 100, oldObj["rectL"], newObj["rectL"]);
  new_letter["rectW"] = map(percent, 0, 100, oldObj["rectW"], newObj["rectW"]);
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
    return new_letter;
}

var swapWords = [
  "TRI2LINE",
  "GEORGIAW",
  "DIRECTLY",
  "TRAINING",
  "01234567",
  "89ANGLES",
  "RUNNING1",
  "SQUARELI",
  "QUESTION",
  "ZIGZAGZI",
  "EVIDENCE",
  "PROBLEMS",
  "BUSINESS",
  "FLOWERSS",
  "  XRAY  ",
  "  HERO  ",
  "JOGGING1",
  "  KITE  ",
  "TRIANGLE"
]