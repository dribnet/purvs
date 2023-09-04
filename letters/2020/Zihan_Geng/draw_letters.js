const colorFront1  = "#f71735";//big, main
const colorFront2  = "#5aa9e6";//small
const colorFront3  = "#fdfffc";//small
const colorFront4  = "#273043";//small


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
  stroke(colorStroke);
  strokeWeight(2);

  // determine parameters for second circle
  let posx1 = 50+letterData["x1"];
  let posy1 = 100+letterData["y1"];
  let posw1 = letterData["w1"];
  let posh1 = letterData["h1"];

  let posx2 = 50+letterData["x2"];
  let posy2 = 100+letterData["y2"];
  let posw2 = letterData["w2"];
  let posh2 = letterData["h2"];

  let posx3 = 50+letterData["x3"];
  let posy3 = 100+letterData["y3"];
  let posw3 = letterData["w3"];
  let posh3 = letterData["h3"];


  let posx4 = 50+letterData["x4"];
  let posy4 = 100+letterData["y4"];
  let posw4 = letterData["w4"];
  let posh4 = letterData["h4"];

  // draw two circles
  push()
  rectMode(CENTER)
  fill(colorFront4)
  rect(50, 100, 100, 200, 20)

  fill(colorFront1);
  rect(posx1, posy1, posw1, posh1, 15)

  fill(colorFront2);
  rect(posx2, posy2, posw2, posh2, 15)

  fill(colorFront3);
  rect(posx3, posy3, posw3, posh3, 15)
  rect(posx4, posy4, posw4, posh4, 15)
  pop()

  //   fill(colorFront1);
  // ellipse(50, 150, 75, 75);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["w1"] = map(percent, 0, 100, oldObj["w1"], newObj["w1"]);
  new_letter["h1"] = map(percent, 0, 100, oldObj["h1"], newObj["h1"]);

  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["w2"] = map(percent, 0, 100, oldObj["w2"], newObj["w2"]);
  new_letter["h2"] = map(percent, 0, 100, oldObj["h2"], newObj["h2"]);

  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["w3"] = map(percent, 0, 100, oldObj["w3"], newObj["w3"]);
  new_letter["h3"] = map(percent, 0, 100, oldObj["h3"], newObj["h3"]);

  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["w4"] = map(percent, 0, 100, oldObj["w4"], newObj["w4"]);
  new_letter["h4"] = map(percent, 0, 100, oldObj["h4"], newObj["h4"]);
  return new_letter;
}

var swapWords = [
  "SWITCHGM",
  "ZHANGENG",
  "BPSZKMV2",
  "WELCOME!",

]