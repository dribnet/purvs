const colorFront1  = "#EFBDEB";
const colorFront2  = "#B68CB8";
const colorFront3  = "#6461A0";

const colorStroke  = "#114B5F";

//Dark Purple
const red1 = 239
const green1 = 189
const blue1 = 235

//Middle Purple
const red2 = 182
const green2 = 140
const blue2 = 184

//light pink
const red3 = 100
const green3 = 97
const blue3 = 160

//Dark Turquisoe 
const red4 = 17
const green4 = 75
const blue4 = 95

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let pos3x = letterData["offset2x"];
  let pos3y = letterData["offset2y"];
  let pos4x = letterData["offset3x"];
  let pos4y = letterData["offset3y"];

  let pos2x2 = letterData["offsetx2"];
  let pos2y2 = letterData["offsety2"];
  let pos3x2 = letterData["offset2x2"];
  let pos3y2 = letterData["offset2y2"];
  let pos4x2 = letterData["offset3x2"];
  let pos4y2 = letterData["offset3y2"];



  let stroke2W = letterData["strokeW"];
  let opacity2 = letterData["opacity"];

  let archHeight = letterData["archH"];
  let archWidth = letterData["archW"];

  strokeWeight(stroke2W);

  fill(red1,green1,blue1);
  triangle(pos2x, pos2y,pos3x, pos3y, pos4x, pos4y);

  fill(red4,green4,blue4,opacity2);
  triangle(pos2x2, pos2y2,pos3x2, pos3y2, pos4x2, pos4y2);

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