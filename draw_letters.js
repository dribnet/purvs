const colorFront1  = "#EFBDEB";
const colorFront2  = "#B68CB8";
const colorFront3  = "#6461A0";
const colorBackground    = "#000000";
const colorStroke  = "#114B5F";

//Red
const red1 = 255
const green1 = 0
const blue1 = 0

//Blue
const red2 = 74
const green2 = 107
const blue2 = 255

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  strokeWeight(4);
  


  // determine parameters for second circle
  let pos2x =  50+ letterData["sectionx"];
  let pos2y =  100+ letterData["sectiony"];
  let pos3x =  50+ letterData["section2x"];
  let pos3y =  100+ letterData["section2y"];
  let pos4x =  50+ letterData["section3x"];
  let pos4y =  100+ letterData["section3y"];

  let pos2x2 =  50+ letterData["sectionx2"];
  let pos2y2 =  100+ letterData["sectiony2"];
  let pos3x2 =  50+ letterData["section2x2"];
  let pos3y2 =  100+ letterData["section2y2"];
  let pos4x2 =  50+ letterData["section3x2"];
  let pos4y2 =  100+ letterData["section3y2"];

  let opacitytriangle = letterData["opacity"];

  fill(red1,green1,blue1);
  triangle(pos2x, pos2y,pos3x, pos3y, pos4x, pos4y);

  fill(red2,green2,blue2, opacitytriangle);
  triangle(pos2x2,pos2y2,pos3x2, pos3y2, pos4x2, pos4y2);

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