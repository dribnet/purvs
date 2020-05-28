const colorFront1  = "#F50078";
const colorFront2  = "#F75C03";
const colorFront3  = "#30E510";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let size2 = letterData["squareSize"];
  let pos2x = 37.5 + letterData["offsetx"];
  let pos2y = 87.5 + letterData["offsety"];

    let size3 = letterData["circleSize"];
  let posCx = 37.5 + letterData["offsetCirclex"];
  let posCy = 87.5 + letterData["offsetCircleY"];

  // draw two circles
  fill(colorFront1);
  rect(37.5, 87.5, 25, 25);
  fill(colorFront2);
  rect(pos2x, pos2y, 25, 25);
    fill(colorFront3);
  circle(posCx, posCy, size3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "SHIPSEYE",
  "FLAGSHIP",
  "SIGNALS!",
  "MDDN 242"
]


