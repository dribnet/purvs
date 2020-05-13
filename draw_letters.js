const color        = "#F1FAF1";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  ellipseMode(CENTER);
  angleMode(DEGREES);

  noFill();
  strokeWeight(2.5);

  var width  = 80;
  var height = 80;

  var posX1 = 50 + letterData["offsetX1"];
  var posY1 = 100 + letterData["offsetY1"];
  var start1 = letterData["start1"];
  var end1 = letterData["end1"];

  var posX2 = 50 + letterData["offsetX2"];
  var posY2 = 100 + letterData["offsetY2"];
  var start2 = letterData["start2"];
  var end2 = letterData["end2"];

  var rectWidth = letterData["lineWidth"];
  var rectHeight = letterData["lineHeight"];

  noStroke();
  fill(color);
  ellipse(posX1,posY1, width);
  ellipse(posX2,posY2, width);
  noFill();
  stroke(colorStroke);

  push();
    arc(posX1, posY1, width, height, start1, end1, OPEN);
  pop();
  rect(50-(rectWidth/2), 100-(rectHeight/2), rectWidth, rectHeight, 20);
  push();
    arc(posX2, posY2, width, height, start2, end2, OPEN);
  pop();
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