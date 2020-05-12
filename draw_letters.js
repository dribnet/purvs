const colorFront1  = "#CA3433";
const colorFront2  = "#57595D";
const colorStroke  = "#233f11";
const col1 = 180;
const col2 = 181;
const col3 = 178;
const trans = 200;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  let triangleX1 = letterData["triangleXPos1"];
  let triangleY1 = letterData["triangleYPos1"];
  let triangleX2 = letterData["triangleXPos2"];
  let triangleY2 = letterData["triangleYPos2"];
  let triangleX3 = letterData["triangleXPos3"];
  let triangleY3 = letterData["triangleYPos3"];
  let triangleX4 = letterData["triangleXPos4"];
  let triangleY4 = letterData["triangleYPos4"];
  let triangleX5 = letterData["triangleXPos5"];
  let triangleY5 = letterData["triangleYPos5"];
  let triangleX6 = letterData["triangleXPos6"];
  let triangleY6 = letterData["triangleYPos6"];
  let rectX = letterData["rectXPos"];
  let rectY = letterData["rectYPos"];
  let rectW = letterData["rectWPos"];
  let rectH = letterData["rectHPos"];

    fill(colorFront1);
    triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
    fill(col1,col2,col3,trans);
    triangle(triangleX4,triangleY4,triangleX5,triangleY5,triangleX6,triangleY6);
    rect(rectX,rectY,rectW,rectH)

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