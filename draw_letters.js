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
  // let cs = letterData["cs"];
  // let cf = letterData["cf"];
  let bottomletterR =letterData["bottomletterR"];
  let bottomletterX = letterData["bottomletterX"];
  let bottomletterY = letterData["bottomletterY"];
  let bRa1 = letterData["bRa1"];
  let bRa2 = letterData["bRa2"];
  let topletterX = letterData["topletterX"];
  let topletterY = letterData["topletterY"];
  let topletterR = letterData["topletterR"];
  let tRa1 = letterData["tRa1"];
  let tRa2 = letterData["tRa2"];
  // let handleX = letterData["handleX"];
  // let handleY = letterData["handleY"];
  bottomletter(bottomletterX, bottomletterY, bottomletterR, bRa1, bRa2);
  // handle(bottomletterX ,bottomletterY, bottomletterR, topletterX, topletterY, topletterR);
  topletter(topletterX, topletterY, topletterR,tRa1, tRa2);
}

function bottomletter(bottomletterX, bottomletterY, bottomletterR, bRa1, bRa2) {
  stroke(216, 41, 149);
  noFill();
  arc(bottomletterX+3, bottomletterY+3, bottomletterR, bottomletterR / 2, bRa1, bRa2);
  noStroke();
  fill(44, 149, 247);
  arc(bottomletterX, bottomletterY, bottomletterR, bottomletterR / 2, bRa1, bRa2);
}

function handle(bottomletterX, bottomletterY, bottomletterR, topletterX, topletterY, topletterR) {
  stroke(0);
  line(bottomletterX - bottomletterR / 2, bottomletterY, topletterX - topletterR / 2, topletterY);
  line(bottomletterX + bottomletterR / 2, bottomletterY, topletterX + topletterR / 2, topletterY);
}


function topletter(topletterX, topletterY, topletterR, tRa1, tRa2) {
  stroke(44, 149, 247);
  noFill();
  arc(topletterX-3, topletterY-3, topletterR, topletterR / 2, tRa1, tRa2);
  stroke(216, 41, 149);
  noFill();
  arc(topletterX, topletterY, topletterR, topletterR / 2, tRa1, tRa2);
}

// var swapWords = [
//   "FONTNAME"
// ]

// function interpolate_letter(percent, oldObj, newObj) {
//   let new_letter = {};
//   new_letter["bottomletterX"] = map(percent, 0, 100, oldObj["bottomletterX"], newObj["bottomletterX"]);
//   new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
//   new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
//   return new_letter
// }
