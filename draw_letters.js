/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
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
