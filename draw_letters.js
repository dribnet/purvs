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
  let posy = 165 + letterData["offsety"];
  let posx2 = 50  + letterData["offsetx2"];
  let posy2 = 165 + letterData["offsety2"];

  let posx3 = 50  + letterData["offsetx3"];
  let posy3 = 165 + letterData["offsety3"];
  let posx4 = 50  + letterData["offsetx4"];
  let posy4 = 165 + letterData["offsety4"];

  let posx5 = 50  + letterData["offsetx5"];
  let posy5 = 165 + letterData["offsety5"];
  let posx6 = 50  + letterData["offsetx6"];
  let posy6 = 165 + letterData["offsety6"];

  let posx7 = 50  + letterData["offsetx7"];
  let posy7 = 165 + letterData["offsety7"];
  let posx8 = 50  + letterData["offsetx8"];
  let posy8 = 165 + letterData["offsety8"];

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
  new_letter["offfsetx"]    = map(percent, 0, 100, oldObj["offfsetx"], newObj["offfsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offfsetx2"]    = map(percent, 0, 100, oldObj["offfsetx2"], newObj["offfsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offfsetx3"]    = map(percent, 0, 100, oldObj["offfsetx3"], newObj["offfsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offfsetx4"]    = map(percent, 0, 100, oldObj["offfsetx4"], newObj["offfsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offfsetx5"]    = map(percent, 0, 100, oldObj["offfsetx5"], newObj["offfsetx5"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);
  new_letter["offfsetx6"]    = map(percent, 0, 100, oldObj["offfsetx6"], newObj["offfsetx6"]);
  new_letter["offsety6"] = map(percent, 0, 100, oldObj["offsety6"], newObj["offsety6"]);
  new_letter["offfsetx7"]    = map(percent, 0, 100, oldObj["offfsetx7"], newObj["offfsetx7"]);
  new_letter["offsety7"] = map(percent, 0, 100, oldObj["offsoffsety7ety"], newObj["offsety7"]);
  new_letter["offfsetx8"]    = map(percent, 0, 100, oldObj["offfsetx8"], newObj["offfsetx8"]);
  new_letter["offsety8"] = map(percent, 0, 100, oldObj["offsety8"], newObj["offsety8"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]