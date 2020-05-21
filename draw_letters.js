
// ------- COLOURS ------- //

const colorPink  = "#F4A8C8";
const colorWhite = "#FFFFFF";
const colorStrokeWhite  = "#FFFFFF";
const colorStrokeDarkPink  = "#ED5896";

// ------- STROKE WEIGHT ------- //

const innerStroke = 2;
const outerStroke = 7;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {

// ------- PARAMETERS ------- //

// SIZES //
let sizeLine1 = letterData["sizeLine"];
let sizeCirc1 = letterData["sizeCirc"];
let sizeCirc2 = letterData["sizeCirc2"];

// CIRCLES //
let circPosX1 = letterData["circX1"];
let circPosY1 = letterData["circY1"];
let circPosX2 = letterData["circX2"];
let circPosY2 = letterData["circY2"];

// LINES //
let linePosX1 = letterData["lineX1"];
let linePosY1 = letterData["lineY1"];
let linePosX2 = letterData["lineX2"];
let linePosY2 = letterData["lineY2"];
let linePosY3 = letterData["lineY3"];

  // ------- DRAWS TWO CIRCLES WITH OUTER WHITE STROKE ------- //

  beginShape();

  stroke(colorStrokeWhite);
  strokeWeight(outerStroke);

  fill(colorPink);
  ellipse(circPosX1, circPosY1, sizeCirc1, sizeCirc1);

  fill(colorPink);
  ellipse(circPosX2, circPosY2, sizeCirc2, sizeCirc2);

  endShape();

  // ------- DRAWS TWO LINES WITH OUTER WHITE STROKE ------- //
  
  beginShape();

  stroke(colorStrokeWhite);
  strokeWeight(outerStroke);

  fill(colorPink);

  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);

  endShape();

  // ------- DRAWS TWO CIRCLES WITH INNER DARK PINK STROKE ------- //

  beginShape();

  stroke(colorStrokeDarkPink);
  strokeWeight(innerStroke);

  fill(colorPink);
  ellipse(circPosX1, circPosY1, sizeCirc1, sizeCirc1);

  fill(colorPink);
  ellipse(circPosX2, circPosY2, sizeCirc2, sizeCirc2);

  endShape();

  // ------- DRAWS TWO LINES WITH INNER DARK PINK STROKE ------- //

  beginShape();

  stroke(colorStrokeDarkPink);
  strokeWeight(innerStroke);

  fill(colorPink);
  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);

  endShape();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeLine"] = map(percent, 0, 100, oldObj["sizeLine"], newObj["sizeLine"]);
  new_letter["sizeCirc"] = map(percent, 0, 100, oldObj["sizeCirc"], newObj["sizeCirc"]);
  new_letter["sizeCirc2"] = map(percent, 0, 100, oldObj["sizeCirc2"], newObj["sizeCirc2"]);
  new_letter["circX1"] = map(percent, 0, 100, oldObj["circX1"], newObj["circX1"]);
  new_letter["circY1"] = map(percent, 0, 100, oldObj["circY1"], newObj["circY1"]);
  new_letter["circX2"] = map(percent, 0, 100, oldObj["circX2"], newObj["circX2"]);
  new_letter["circY2"] = map(percent, 0, 100, oldObj["circY2"], newObj["circY2"]);
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  new_letter["lineY3"] = map(percent, 0, 100, oldObj["lineY3"], newObj["lineY3"]);
  return new_letter;
}


var swapWords = [
  "PINKNESS",
  "ADORABLE",
  "9824517!",
  "CUTESOME",
  "BLOOMING",
  "FLAMINGO",
  "ROSINESS",
  "BLUSHING",
  "FLAWLESS",
  "LEMONADE",
  "STUNNING",
  "BEAUTIFY",
  "FETCHING",
  "FLOURISH",
  "PRECIOUS",
  "12345678"
]