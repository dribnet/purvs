
//Red
const red1 = 255
const green1 = 0
const blue1 = 0

//Yellow
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

  let redtriAx = 50 + letterData["redoffsetx"];
  let redtriAy = 100 + letterData["pinkoffsety"];
  let redtriA2x = 50 + letterData["offset2x"];
  let redtriA2y = 100 + letterData["offset2y"];
  let redtriA3x = 50 + letterData["offset3x"];
  let redtriA3y = 100 + letterData["offset3y"];

  let yellowtrix = 50 + letterData["offsetx2"];
  let yellowtriy = 100 + letterData["offsety2"];
  let yellowtri2x = 50 + letterData["offset2x2"];
  let yellowtri2y = 100 +letterData["offset2y2"];
  let yellowtri3x = 50 + letterData["offset3x2"];
  let yellowtri3y = 100 + letterData["offset3y2"];

  let opacity2 = letterData["opacity"];


  strokeWeight(0);

  fill(red1,green1,blue1);
  triangle(redtriAx, redtriAy,redtriA2x, redtriA2y, redtriA3x, redtriA3y);

  fill(red4,green4,blue4,opacity2);
  triangle(yellowtrix, yellowtriy, yellowtri2x, yellowtri2y, yellowtri3x, yellowtri3y);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["redoffsetx"] = map(percent, 0, 100, oldObj["redoffsetx"], newObj["redoffsetx"]);
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

  new_letter["opacity"] = map(percent, 0, 100, oldObj["opacity"], newObj["opacity"]);

  return new_letter;
}

var swapWords = [
  "DYSLEXIC",
  "LANGUAGE",
  "ASSEMBLY",
  "EMPLOYEE",
  "DESCRIBE",
  "BAAAAAAA",
]