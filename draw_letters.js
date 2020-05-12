const colorFront1  = "#EFBDEB";
const colorFront2  = "#B68CB8";
const colorFront3  = "#6461A0";

const colorStroke  = "#114B5F";

//Dark Purple
const red1 = 255
const green1 = 0
const blue1 = 0

//Dark Turquisoe 
const red4 = 255
const green4 = 229
const blue4 = 0

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let pinktriAx = 50 + letterData["pinkoffsetx"];
  let pinktriAy = 150 + letterData["pinkoffsety"];
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

  new_letter["pinkoffsetx"] = map(percent, 0, 100, oldObj["pinkoffsetx"], newObj["pinkoffsetx"]);
  new_letter["pinkoffsety"] = map(percent, 0, 100, oldObj["pinkoffsety"], newObj["pinkoffsety"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);


  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offset2x2"] = map(percent, 0, 100, oldObj["offset2x2"], newObj["offset2x2"]);
  new_letter["offset2y2"] = map(percent, 0, 100, oldObj["offset2y2"], newObj["offset2y2"]);
  new_letter["offset3x2"] = map(percent, 0, 100, oldObj["offset3x2"], newObj["offset3x2"]);
  new_letter["offset3y2"] = map(percent, 0, 100, oldObj["offset3y2"], newObj["offset3y2"]);


  new_letter["strokeW"] = map(percent, 0, 100, oldObj["strokeW"], newObj["strokeW"]);

  new_letter["opacity"] = map(percent, 0, 100, oldObj["opacity"], newObj["opacity"]);

  return new_letter;
}

var swapWords = [
  "AZBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]