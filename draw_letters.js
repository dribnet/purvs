const colorFront1  = "#ff598e";
const colorFront2  = "#fe767b";
const colorFront3  = "#fdb155";
const colorFront4  = "#fcce42";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters - rectangles
  let rect1x = letterData["rect1x"];
  let rect1y = letterData["rect1y"];
  let rect1Width = letterData["rect1w"];
  let rect1Height = letterData["rect1h"];

  let rect2x = letterData["rect2x"];
  let rect2y = letterData["rect2y"];
  let rect2Width = letterData["rect2w"];
  let rect2Height = letterData["rect2h"];

  let rect3x = letterData["rect3x"];
  let rect3y = letterData["rect3y"];
  let rect3Width = letterData["rect3w"];
  let rect3Height = letterData["rect3h"];

  let rect4x = letterData["rect4x"];
  let rect4y = letterData["rect4y"];
  let rect4Width = letterData["rect4w"];
  let rect4Height = letterData["rect4h"];


  // draw shapes
  fill(colorFront4);
  noStroke();
  rect(rect4x, rect4y, rect4Width, rect4Height, 20);
  fill(colorFront3);
  noStroke();
  rect(rect3x, rect3y, rect3Width, rect3Height, 20);
  fill(colorFront2);
  noStroke();
  rect(rect2x, rect2y, rect2Width, rect2Height, 20);
  fill(colorFront1);
  noStroke();
  rect(rect1x, rect1y, rect1Width, rect1Height, 20);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rect1x"] = map(percent, 0, 100, oldObj["rect1x"], newObj["rect1x"]);
  new_letter["rect1y"] = map(percent, 0, 100, oldObj["rect1y"], newObj["rect1y"]);
  new_letter["rect1w"] = map(percent, 0, 100, oldObj["rect1w"], newObj["rect1w"]);
  new_letter["rect1h"] = map(percent, 0, 100, oldObj["rect1h"], newObj["rect1h"]);

  new_letter["rect2x"] = map(percent, 0, 100, oldObj["rect2x"], newObj["rect2x"]);
  new_letter["rect2y"] = map(percent, 0, 100, oldObj["rect2y"], newObj["rect2y"]);
  new_letter["rect2w"] = map(percent, 0, 100, oldObj["rect2w"], newObj["rect2w"]);
  new_letter["rect2h"] = map(percent, 0, 100, oldObj["rect2h"], newObj["rect2h"]);

  new_letter["rect3x"] = map(percent, 0, 100, oldObj["rect3x"], newObj["rect3x"]);
  new_letter["rect3y"] = map(percent, 0, 100, oldObj["rect3y"], newObj["rect3y"]);
  new_letter["rect3w"] = map(percent, 0, 100, oldObj["rect3w"], newObj["rect3w"]);
  new_letter["rect3h"] = map(percent, 0, 100, oldObj["rect3h"], newObj["rect3h"]);

  new_letter["rect4x"] = map(percent, 0, 100, oldObj["rect4x"], newObj["rect4x"]);
  new_letter["rect4y"] = map(percent, 0, 100, oldObj["rect4y"], newObj["rect4y"]);
  new_letter["rect4w"] = map(percent, 0, 100, oldObj["rect4w"], newObj["rect4w"]);
  new_letter["rect4h"] = map(percent, 0, 100, oldObj["rect4h"], newObj["rect4h"]);
  return new_letter;
}

var swapWords = [
  "MYSUNSET",
  "BY LAURA",
  "12345678",
  "TYPEFACE",
  "BLACKOUT", //B
  "MARIGOLD", //M
  "SCULPTOR", //S
  "WEAPONRY", //W
  "HAZELNUT", //Z (in the list im looking at theres no words that star with z)
  "SNOWBIRD", //#787 (one of my favourite numbers)
  "DOMINATE", //#46 (my other favourite number)
  "TDMNFITA",
  "FLOURISH",
  "MYSTIQUE",
  "A1B2C3D4"
]