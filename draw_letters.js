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

  let pinktriAx = 50 + letterData["offsetx"];
  let pinktriAy = 150 + letterData["offsety"];
  let pinktriA2x = 50 + letterData["offset2x"];
  let pinktriA2y = 150 + letterData["offset2y"];
  let pinktriA3x = 50 + letterData["offset3x"];
  let pinktriA3y = 150 + letterData["offset3y"];

  let greentrix = 50 + letterData["offsetx2"];
  let greentriy = 150 + letterData["offsety2"];
  let greentri2x = 50 + letterData["offset2x2"];
  let greentri2y = 150 +letterData["offset2y2"];
  let greentri3x = 50 + letterData["offset3x2"];
  let greentri3y = 150 + letterData["offset3y2"];



  let stroke2W = letterData["strokeW"];
  let opacity2 = letterData["opacity"];


  strokeWeight(stroke2W);

  fill(red1,green1,blue1);
  triangle(pinktriAx, pinktriAy,pinktriA2x, pinktriA2y, pinktriA3x, pinktriA3y);

  fill(red4,green4,blue4,opacity2);
  triangle(greentrix, greentriy,greentri2x, greentri2y, greentri3x, greentri3y);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "AZBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]