const colorFront1  = "#B8E1FF";
const colorFront2  = "#F7AEA5";
const colorFront3  = "#F2D1C9";

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
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  
  fill(colorFront2);
  triangle(pointX1, pointY1, pointX2, pointY2, pointX3, pointY3);
  fill(colorFront1);
  rect(rectX, rectY, rectWid, rectLen);


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