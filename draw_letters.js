const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let pos2x = 5 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let topRectW = letterData["topRectWidth"];
  let middleRectW = letterData["middleRectWidth"];
  let botRectW = letterData["bottomRectWidth"];
  let topRectH = letterData["topRectHeight"];
  let middleRectH = letterData["middleRectHeight"];
  let botRectH = letterData["bottomRectHeight"];
  let leftRectW = letterData["leftRectWidth"];
  let leftRectH = letterData["leftRectHeight"];
  let rightRectW = letterData["rightRectWidth"];
  let rightRectH = letterData["rightRectHeight"];
  let leftHalfRectH = letterData["leftRectHalfHeight"];

  fill(colorFront1);
    fill(colorFront1)
    rect(pos2x,0,leftRectW,leftRectH); //left vertical strip (A,B,C)
    fill(colorFront2)
    rect(pos2x + 75, 0, rightRectW, rightRectH); //right vertical strip (A,B)
    fill(colorStroke)
    rect(pos2x,pos2y - 45,middleRectW, middleRectH); //middle horizontal strip (A,B)
    rect(pos2x,pos2y - 135,topRectW,topRectH); //top horizontal strip (A,B,C)
    rect(pos2x,pos2y + 45, botRectW, botRectH); //bottom horizontal strip (B,C)

    rect(pos2x,pos2y - 40,leftRectW,leftHalfRectH); //left vertical half strip (D)
    

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