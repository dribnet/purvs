const colorFront  = "#199cff";
const colorStroke = "#233f11";

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

function bottomletter(bottomletterX, bottomletterY, bottomletterR, bRa1, bRa2) {
  noStroke();
  fill(227, 22, 115, 200);
  arc(bottomletterX+5, bottomletterY+5, bottomletterR, bottomletterR / 2, bRa1, bRa2);
  // stroke();
  fill(26, 176, 239);
  arc(bottomletterX, bottomletterY, bottomletterR, bottomletterR / 2, bRa1, bRa2);
}

// function handle(bottomletterX, bottomletterY, bottomletterR, topletterX, topletterY, topletterR) {
//   stroke(0);
//   line(bottomletterX - bottomletterR / 2, bottomletterY, topletterX - topletterR / 2, topletterY);
//   line(bottomletterX + bottomletterR / 2, bottomletterY, topletterX + topletterR / 2, topletterY);
// }


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

  return new_letter
}
