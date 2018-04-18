const colorFront  = "#199cff";
const colorStroke = "#233f11";

var swapWords = [
  "COOLWORD",
  "NEATFONT",
  "ABCDEFGH"
]

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  noFill();
  strokeWeight(1);
  stroke(255, 0, 0);
  rect(0, 0, 100, 200);
  strokeWeight(6);
  angleMode(DEGREES);
  // 11 variables define all the letters and numbers, I use const to define colours and shadow
  let bottomletterR =letterData["bottomletterR"];
  let bottomletterX = letterData["bottomletterX"];
  let bottomletterY = letterData["bottomletterY"];
  let bRa1 = letterData["bRa1"];
  let bRa2 = letterData["bRa2"];
  let topletterX = letterData["topletterX"];
  let topletterY = letterData["topletterY"];
  let topletterR = letterData["topletterR"];
  let topletterR1 = letterData["topletterR1"];
  let tRa1 = letterData["tRa1"];
  let tRa2 = letterData["tRa2"];
  bottomletter(bottomletterX, bottomletterY, bottomletterR, bRa1, bRa2);
  topletter(topletterX, topletterY, topletterR, topletterR1, tRa1, tRa2);
}

// This function gives the stroke to create contour without filling colour
function bottomletter(bottomletterX, bottomletterY, bottomletterR, bRa1, bRa2) {
  noStroke();
  fill(227, 22, 115, 200);
  arc(bottomletterX+5, bottomletterY+5, bottomletterR, bottomletterR / 2, bRa1, bRa2);
  // stroke();
  fill(26, 176, 239);
  arc(bottomletterX, bottomletterY, bottomletterR, bottomletterR / 2, bRa1, bRa2);
}



//This function gives the shape with colour
function topletter(topletterX, topletterY, topletterR, topletterR1, tRa1, tRa2) {
  // stroke(44, 149, 247);
  fill(26, 176, 239, 160);
  arc(topletterX+5, topletterY, topletterR+8, topletterR1, tRa1, tRa2);
  stroke(227, 22, 115);
  noFill();
  arc(topletterX, topletterY, topletterR, topletterR1, tRa1, tRa2);
}

// var swapWords = [
//   "FONTNAME"
// ]

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["bottomletterX"] = map(percent, 0, 100, oldObj["bottomletterX"], newObj["bottomletterX"]);
  new_letter["bottomletterY"] = map(percent, 0, 100, oldObj["bottomletterY"], newObj["bottomletterY"]);
  new_letter["bottomletterR"] = map(percent, 0, 100, oldObj["bottomletterR"], newObj["bottomletterR"]);
  new_letter["bRa1"] = map(percent, 0, 100, oldObj["bRa1"], newObj["bRa1"]);
  new_letter["bRa2"] = map(percent, 0, 100, oldObj["bRa2"], newObj["bRa2"]);
  new_letter["topletterX"] = map(percent, 0, 100, oldObj["topletterX"], newObj["topletterX"]);
  new_letter["topletterY"] = map(percent, 0, 100, oldObj["topletterY"], newObj["topletterY"]);
  new_letter["topletterR"] = map(percent, 0, 100, oldObj["topletterR"], newObj["topletterR"]);
  new_letter["topletterR1"] = map(percent, 0, 100, oldObj["topletterR1"], newObj["topletterR1"]);
  new_letter["tRa1"] = map(percent, 0, 100, oldObj["tRa1"], newObj["tRa1"]);
  new_letter["tRa2"] = map(percent, 0, 100, oldObj["tRa2"], newObj["tRa2"]);

  return new_letter
}
