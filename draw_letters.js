const color        = "#1c2541";
const colorStroke  = "#8d99ae";

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
  push();
    arc(posX2, posY2, width, height, start2, end2, OPEN);
  pop();
  fill(color);
    if(rectWidth == 0 && rectHeight == 0){
      noStroke();
    }
    rect(50-(rectWidth/2), 100-(rectHeight/2), rectWidth, rectHeight, 20);
  noFill();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["offsetX1"]    = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"]    = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]);
  new_letter["start1"]      = map(percent, 0, 100, oldObj["start1"], newObj["start1"]);
  new_letter["end1"]        = map(percent, 0, 100, oldObj["end1"], newObj["end1"]);

  if(percent < 20){
    new_letter["offsetX2"] = oldObj["offsetX2"];
    new_letter["offsetY2"] = oldObj["offsetY2"];
    new_letter["start2"] = oldObj["start2"];
    new_letter["end2"] = oldObj["end2"];
  }else{
    new_letter["offsetX2"]    = map(percent, 20, 100, oldObj["offsetX2"], newObj["offsetX2"]);
    new_letter["offsetY2"]    = map(percent, 20, 100, oldObj["offsetY2"], newObj["offsetY2"]);
    new_letter["start2"]      = map(percent, 20, 100, oldObj["start2"], newObj["start2"]);
    new_letter["end2"]        = map(percent, 20, 100, oldObj["end2"], newObj["end2"]);
  }

  if(percent < 50){
    new_letter["lineWidth"] = oldObj["lineWidth"];
    new_letter["lineHeight"] = oldObj["lineHeight"];
  }else{
    new_letter["lineWidth"]   = map(percent, 50, 100, oldObj["lineWidth"], newObj["lineWidth"]);
    new_letter["lineHeight"]  = map(percent, 50, 100, oldObj["lineHeight"], newObj["lineHeight"]);
  }

  return new_letter;
}

var swapWords = [
  "GALAXSIC",
  " IAMONE ",
  "WITH THE",
  " FORCE! "
]