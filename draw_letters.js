const colorFront1  = "#199cff";//blue
const colorFront2  = "#f54242";//red
const colorFront3  = "#ffffff";//white
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
  rect(x1+5,y1,15);
  rect(x2+5,y2,15);
  rect(x3+5,y3,15);
  rect(x4+5,y4,15);
  rect(x5+5,y5,15);
  rect(x6+5,y6,15);
  rect(x7+5,y7,15);
  rect(x8+5,y8,15);
  rect(x9+5,y9,15);
  rect(x10+5,y10,15);

  //red
  fill(colorFront2);
  rect(x1-5,y1,15);
  rect(x2-5,y2,15);
  rect(x3-5,y3,15);
  rect(x4-5,y4,15);
  rect(x5-5,y5,15);
  rect(x6-5,y6,15);
  rect(x7-5,y7,15);
  rect(x8-5,y8,15);
  rect(x9-5,y9,15);
  rect(x10-5,y10,15);

  //white
  fill(colorFront3);
  rect(x1,y1,15);
  rect(x2,y2,15);
  rect(x3,y3,15);
  rect(x4,y4,15);
  rect(x5,y5,15);
  rect(x6,y6,15);
  rect(x7,y7,15);
  rect(x8,y8,15);
  rect(x9,y9,15);
  rect(x10,y10,15);
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
