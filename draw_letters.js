// changed colorFronts to arrays so I could pass it into fill function and add alpha value 
const colorFront1  = [46, 139, 87]; // sea green #2E8B57
const colorFront2  = [173, 255, 87]; // greenyellow #ADFF2F
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
  stroke(199, 208, 221);
  strokeWeight(3);
  noFill();

  //determine parameters
  let arc1Start = letterData["arc1Start"];
  let arc1Stop = letterData["arc1Stop"];
  let arc1Size = letterData["arc1Size"];
  let arc2Start = letterData["arc2Start"];
  let arc2Stop = letterData["arc2Stop"];
  let arc2Size = letterData["arc2Size"];
  let lineX1 = letterData["lineX1"];
  let lineY1 = letterData["lineY1"];
  let lineX2 = letterData["lineX2"];
  let lineY2 = letterData["lineY2"];
  let offsetX1 = letterData["offsetX1"];
  let offsetY1 = letterData["offsetY1"];
  let offsetX2 = letterData["offsetX2"];
  let offsetY2 = letterData["offsetY2"];
  

  // draw two arcs
  arc(50 + offsetX1, 100 + offsetY1, arc1Size, arc1Size, radians(arc1Start), radians(arc1Stop));
  arc(50 + offsetX2, 100 + offsetY2, arc2Size, arc2Size, radians(arc2Start), radians(arc2Stop));
  line(50 + lineX1, 100 + lineY1, 50 + lineX2, 100 + lineY2);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]     = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"]  = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"]  = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcStop"] = map(percent, 0, 100, oldObj["arcStop"], newObj["arcStop"]);

  return new_letter;
}

var swapWords = [
  "MIDNIGHT",
  "EPICNICE",
  "THANKS34"
]