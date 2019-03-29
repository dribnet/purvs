const colorFront1  = "#349e55";
const colorFront2  = "#75d192";
const colorStroke  = "#233f11";

const mainOffsetX = 50;
const mainOffsetY = 150;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  angleMode(DEGREES);
  // determine parameters for second circle
  let smallWidth2 = letterData["smallWidth"];
  let smallHeight2 = letterData["smallHeight"];
  let pos2x = mainOffsetX + letterData["offsetx"];
  let pos2y = mainOffsetY + letterData["offsety"];
  let smallAngle2 = letterData["smallAngle"];
  let semiRotate2 = letterData["semiRotate"];

  // draw two circles

  //back circle
  fill(colorFront1);
  push();
  if(semiRotate2 != null){
    translate(mainOffsetX,mainOffsetY)
    rotate(semiRotate2);
    arc(mainOffsetX, mainOffsetY, 100, 100, 0, 180, CHORD);
  }else{
    ellipse(mainOffsetX, mainOffsetY, 100, 100);
  }
  
  pop();

  //front circle
  fill(colorFront2);
  push();
  if(smallAngle2 != 0){
    translate(0,0);
    rotate(smallAngle2);
  }
  ellipse(pos2x, pos2y, smallWidth2, smallHeight2);
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