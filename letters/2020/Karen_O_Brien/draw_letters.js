const colorFront1  = "#199cff";//blue
const colorFront2  = "#f54242";//red
const colorFront3  = "#e9f5df";//white
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
  stroke(colorFront1);
  noStroke();

  // determine parameters for second circle
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];
  let x2 = letterData["x2"];
  let y2 = letterData["y2"];
  let x3 = letterData["x3"];
  let y3 = letterData["y3"];
  let x4 = letterData["x4"];
  let y4 = letterData["y4"];
  let x5 = letterData["x5"];
  let y5 = letterData["y5"];
  let x6 = letterData["x6"];
  let y6 = letterData["y6"];
  let x7 = letterData["x7"];
  let y7 = letterData["y7"];
  let x8 = letterData["x8"];
  let y8 = letterData["y8"];
  let x9 = letterData["x9"];
  let y9 = letterData["y9"];
  let x10 = letterData["x10"];
  let y10 = letterData["y10"];

  //blue
  fill(colorFront1);
  rect(x1+6,y1,15.5);
  rect(x2+6,y2,15.5);
  rect(x3+6,y3,15.5);
  rect(x4+6,y4,15.5);
  rect(x5+6,y5,15.5);
  rect(x6+6,y6,15.5);
  rect(x7+6,y7,15.5);
  rect(x8+6,y8,15.5);
  rect(x9+6,y9,15.5);
  rect(x10+6,y10,15.5);

  //red
  fill(colorFront2);
  rect(x1-6,y1,15.5);
  rect(x2-6,y2,15.5);
  rect(x3-6,y3,15.5);
  rect(x4-6,y4,15.5);
  rect(x5-6,y5,15.5);
  rect(x6-6,y6,15.5);
  rect(x7-6,y7,15.5);
  rect(x8-6,y8,15.5);
  rect(x9-6,y9,15.5);
  rect(x10-6,y10,15.5);

  //white
  fill(colorFront3);
  rect(x1,y1,15.5);
  rect(x2,y2,15.5);
  rect(x3,y3,15.5);
  rect(x4,y4,15.5);
  rect(x5,y5,15.5);
  rect(x6,y6,15.5);
  rect(x7,y7,15.5);
  rect(x8,y8,15.5);
  rect(x9,y9,15.5);
  rect(x10,y10,15.5);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["x7"] = map(percent, 0, 100, oldObj["x7"], newObj["x7"]);
  new_letter["x8"] = map(percent, 0, 100, oldObj["x8"], newObj["x8"]);
  new_letter["x9"] = map(percent, 0, 100, oldObj["x9"], newObj["x9"]);
  new_letter["x10"] = map(percent, 0, 100, oldObj["x10"], newObj["x10"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["y7"] = map(percent, 0, 100, oldObj["y7"], newObj["y7"]);
  new_letter["y8"] = map(percent, 0, 100, oldObj["y8"], newObj["y8"]);
  new_letter["y9"] = map(percent, 0, 100, oldObj["y9"], newObj["y9"]);
  new_letter["y10"] = map(percent, 0, 100, oldObj["y10"], newObj["y10"]);
  return new_letter;
}

var swapWords = [
  "GAMEOVER",
  "YOU DIED",
  " ARCADE "
]
