
//Red
const red1 = 255
const green1 = 0
const blue1 = 0

//Yellow
const red2 = 255
const green2 = 229
const blue2 = 0

const strokeWeight2 = 0

//255, 239, 97

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let redtriAx = 50 + letterData["redoffsetx"];
  let redtriAy = 100 + letterData["redoffsety"];
  let redtriA2x = 50 + letterData["redoffset2x"];
  let redtriA2y = 100 + letterData["redoffset2y"];
  let redtriA3x = 50 + letterData["redoffset3x"];
  let redtriA3y = 100 + letterData["redoffset3y"];

  let yellowtrix = 50 + letterData["yellowoffsetx"];
  let yellowtriy = 100 + letterData["yellowoffsety"];
  let yellowtri2x = 50 + letterData["yellowoffset2x"];
  let yellowtri2y = 100 +letterData["yellowoffset2y"];
  let yellowtri3x = 50 + letterData["yellowoffset3x"];
  let yellowtri3y = 100 + letterData["yellowoffset3y"];

  let opacity2 = letterData["opacity"];

  strokeWeight(strokeWeight2);

  fill(red1,green1,blue1);
  triangle(redtriAx, redtriAy,redtriA2x, redtriA2y, redtriA3x, redtriA3y);

  fill(red2,green2,blue2,opacity2);
  triangle(yellowtrix, yellowtriy, yellowtri2x, yellowtri2y, yellowtri3x, yellowtri3y);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["redoffsetx"] = map(percent, 0, 100, oldObj["redoffsetx"], newObj["redoffsetx"]);
  new_letter["redoffsety"] = map(percent, 0, 100, oldObj["redoffsety"], newObj["redoffsety"]);
  new_letter["redoffset2x"] = map(percent, 0, 100, oldObj["redoffset2x"], newObj["redoffset2x"]);
  new_letter["redoffset2y"] = map(percent, 0, 100, oldObj["redoffset2y"], newObj["redoffset2y"]);
  new_letter["redoffset3x"] = map(percent, 0, 100, oldObj["redoffset3x"], newObj["redoffset3x"]);
  new_letter["redoffset3y"] = map(percent, 0, 100, oldObj["redoffset3y"], newObj["redoffset3y"]);


  new_letter["yellowoffsetx"] = map(percent, 0, 100, oldObj["yellowoffsetx"], newObj["yellowoffsetx"]);
  new_letter["yellowoffsety"] = map(percent, 0, 100, oldObj["yellowoffsety"], newObj["yellowoffsety"]);
  new_letter["yellowoffset2x"] = map(percent, 0, 100, oldObj["yellowoffset2x"], newObj["yellowoffset2x"]);
  new_letter["yellowoffset2y"] = map(percent, 0, 100, oldObj["yellowoffset2y"], newObj["yellowoffset2y"]);
  new_letter["yellowoffset3x"] = map(percent, 0, 100, oldObj["yellowoffset3x"], newObj["yellowoffset3x"]);
  new_letter["yellowoffset3y"] = map(percent, 0, 100, oldObj["yellowoffset3y"], newObj["yellowoffset3y"]);

  if(percent < 99){
    new_letter["opacity"] = oldObj["opacity"];
    new_letter["opacity"] = oldObj["opacity"];

  }
  else{
  new_letter["opacity"] = map(percent, 0, 100, oldObj["opacity"], newObj["opacity"]);
  new_letter["opacity"] = map(percent, 0, 100, oldObj["opacity"], newObj["opacity"]);
  }

  return new_letter;
}

var swapWords = [
  "DYSTYPES",
  "LANGUAGE",
  "ASSEMBLY",
  "O0!O0!O0",
  "QUADPLEX",
  "FIZZING!",
  "TAXATION",
  "RACECAR9",
  "DESCRIBE",
  "CALENDAR",
  "12345678",
  "VAPORIZE",
  "HANDWRIT",
  "MISSPELL",
  "ORIGINAL",
  "LITERARY",
  "JACKPOTS",
  "KNITWEAR",






]