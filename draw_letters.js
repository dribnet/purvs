const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#000000";

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
  strokeWeight(10);

  let posx = 50  + letterData["offsetx"];
  let posy = 150 + letterData["offsety"];
  let posx2 = 50  + letterData["offsetx2"];
  let posy2 = 150 + letterData["offsety2"];

  let posx3 = 50  + letterData["offsetx3"];
  let posy3 = 150 + letterData["offsety3"];
  let posx4 = 50  + letterData["offsetx4"];
  let posy4 = 150 + letterData["offsety4"];

  let posx5 = 50  + letterData["offsetx5"];
  let posy5 = 150 + letterData["offsety5"];
  let posx6 = 50  + letterData["offsetx6"];
  let posy6 = 150 + letterData["offsety6"];

  let posx7 = 50  + letterData["offsetx7"];
  let posy7 = 150 + letterData["offsety7"];
  let posx8 = 50  + letterData["offsetx8"];
  let posy8 = 150 + letterData["offsety8"];

  // draw two circles
  fill(colorFront1);
  line(posx, posy, posx2, posy2);
  line(posx3, posy3, posx4, posy4);
  line(posx5, posy5, posx6, posy6);
  line(posx7, posy7, posx8, posy8);
  strokeWeight(4);
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