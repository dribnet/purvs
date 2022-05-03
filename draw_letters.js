/* these are optional special variables which will change the system */
var systemBackgroundColor = "#908aff";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";


const backgroundColor  = "#908aff";
//const strokeColor      = "#171717";

const orange  = "#eb5e34";
const yellow  = "#ebab34";

const test = 20;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  push();
  scale(0.6)

  // parameters for rect 1

  let w1 = letterData["width1"];
  let h1 = letterData["height1"];
  let posX = letterData["offsetX1"];
  let posY = letterData["offsetY1"];


  // parameters for rect 2

  let w2 = letterData["width2"];
  let h2 = letterData["height2"];
  let posX2 = letterData["offsetX2"];
  let posY2 = letterData["offsetY2"];
  let corA1 = letterData["cornerA1"];
  let corA2 = letterData["cornerA2"];
  let corA3 = letterData["cornerA3"];
  let corA4 = letterData["cornerA4"];


  // parameters for rect 3

  let w3 = letterData["width3"];
  let h3 = letterData["height3"];
  let posX3 = letterData["offsetX3"];
  let posY3 = letterData["offsetY3"];
  let corB1 = letterData["cornerB1"];
  let corB2 = letterData["cornerB2"];
  let corB3 = letterData["cornerB3"];
  let corB4 = letterData["cornerB4"];


  // draw rectangles

  rectMode(CENTER)
  noStroke()

  // background rect
  fill(orange);
  rect(83, 250, 155, 155, 20, 20, 20, 20);

  // rect 01
  fill(yellow);
  rect(posX, posY, w1, h1);

  // rect 02
  fill(yellow);
  rect(posX2, posY2, w2, h2, corA1, corA2, corA3, corA4);

  // rect 03
  fill(yellow);
  rect(posX3, posY3, w3, h3, corB1, corB2, corB3, corB4);

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["width1"]    = map(percent, 0, 100, oldObj["width1"], newObj["width1"]);
  new_letter["height1"] = map(percent, 0, 100, oldObj["height1"], newObj["height1"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]);
  new_letter["width2"] = map(percent, 0, 100, oldObj["width2"], newObj["width2"]);
  new_letter["height2"] = map(percent, 0, 100, oldObj["height2"], newObj["height2"]);
  new_letter["offsetX2"] = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["width3"] = map(percent, 0, 100, oldObj["width3"], newObj["width3"]);
  new_letter["height3"] = map(percent, 0, 100, oldObj["height3"], newObj["height3"]);
  new_letter["offsetX3"] = map(percent, 0, 100, oldObj["offsetX3"], newObj["offsetX3"]);
  new_letter["offsetY3"] = map(percent, 0, 100, oldObj["offsetY3"], newObj["offsetY3"]);
  new_letter["cornerA1"] = map(percent, 0, 100, oldObj["cornerA1"], newObj["cornerA1"]);
  new_letter["cornerA2"] = map(percent, 0, 100, oldObj["cornerA2"], newObj["cornerA2"]);
  new_letter["cornerA3"] = map(percent, 0, 100, oldObj["cornerA3"], newObj["cornerA3"]);
  new_letter["cornerA3"] = map(percent, 0, 100, oldObj["cornerA3"], newObj["cornerA3"]);
  new_letter["cornerB1"] = map(percent, 0, 100, oldObj["cornerB1"], newObj["cornerB1"]);
  new_letter["cornerB2"] = map(percent, 0, 100, oldObj["cornerB2"], newObj["cornerB2"]);
  new_letter["cornerB3"] = map(percent, 0, 100, oldObj["cornerB3"], newObj["cornerB3"]);
  new_letter["cornerB4"] = map(percent, 0, 100, oldObj["cornerB4"], newObj["cornerB4"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
