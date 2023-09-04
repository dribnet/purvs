/* these are optional special variables which will change the system */
var systemBackgroundColor = "#908aff";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

const backgroundColor  = "#908aff";

const orange  = "#eb5e34"; // background rect colour
const yellow  = "#ebab34"; // internal rect colour

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

  // Parameters

    // parameters for rect 1
    let w1 = letterData["width1"]; // width
    let h1 = letterData["height1"]; // height
    let posX = letterData["offsetX1"]; // X position
    let posY = letterData["offsetY1"]; // Y position


    // parameters for rect 2
    let w2 = letterData["width2"]; // width
    let h2 = letterData["height2"]; // height
    let posX2 = letterData["offsetX2"]; // X position
    let posY2 = letterData["offsetY2"]; // Y position
    let corA1 = letterData["cornerA1"]; // corner 1 roundness
    let corA2 = letterData["cornerA2"]; // corner 2 roundness
    let corA3 = letterData["cornerA3"]; // corner 3 roundness
    let corA4 = letterData["cornerA4"]; // corner 4 roundness


    // parameters for rect 3
    let w3 = letterData["width3"]; // width
    let h3 = letterData["height3"]; // height
    let posX3 = letterData["offsetX3"]; // X position
    let posY3 = letterData["offsetY3"]; // Y position
    let corB1 = letterData["cornerB1"]; // corner 1 roundness
    let corB2 = letterData["cornerB2"]; // corner 2 roundness
    let corB3 = letterData["cornerB3"]; // corner 3 roundness
    let corB4 = letterData["cornerB4"]; // corner 4 roundness


  // Draw Rectangles

    rectMode(CENTER) // set rect mode to center
    noStroke() // turn stroke off for rectangles

    // background rect
    fill(orange); // set colour
    rect(83, 250, 155, 155, 20, 20, 20, 20);

    // rect 01
    fill(yellow); // set colour
    rect(posX, posY, w1, h1);

    // rect 02
    fill(yellow); // set colour
    rect(posX2, posY2, w2, h2, corA1, corA2, corA3, corA4);

    // rect 03
    fill(yellow); // set colour
    rect(posX3, posY3, w3, h3, corB1, corB2, corB3, corB4);

    pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  // first rect
  new_letter["width1"]    = map(percent, 0, 100, oldObj["width1"], newObj["width1"]); // width 1 map
  new_letter["height1"] = map(percent, 0, 100, oldObj["height1"], newObj["height1"]); // height 1 map
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]); // X pos 1 map
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]); // Y pos 1 map

  // second rect
  new_letter["width2"] = map(percent, 0, 100, oldObj["width2"], newObj["width2"]); // width 2 map
  new_letter["height2"] = map(percent, 0, 100, oldObj["height2"], newObj["height2"]); // height 2 map
  new_letter["offsetX2"] = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]); // X pos 2 map
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]); // Y pos 2 map
  new_letter["cornerA1"] = map(percent, 0, 100, oldObj["cornerA1"], newObj["cornerA1"]); // corner A1 map
  new_letter["cornerA2"] = map(percent, 0, 100, oldObj["cornerA2"], newObj["cornerA2"]); // corner A2 map
  new_letter["cornerA3"] = map(percent, 0, 100, oldObj["cornerA3"], newObj["cornerA3"]); // corner A3 map
  new_letter["cornerA4"] = map(percent, 0, 100, oldObj["cornerA4"], newObj["cornerA4"]); // corner A4 map

  // third rect
  new_letter["width3"] = map(percent, 0, 100, oldObj["width3"], newObj["width3"]); // width 3 map
  new_letter["height3"] = map(percent, 0, 100, oldObj["height3"], newObj["height3"]); // height 3 map
  new_letter["offsetX3"] = map(percent, 0, 100, oldObj["offsetX3"], newObj["offsetX3"]); // X pos 3 map
  new_letter["offsetY3"] = map(percent, 0, 100, oldObj["offsetY3"], newObj["offsetY3"]); // Y pos 3 map
  new_letter["cornerB1"] = map(percent, 0, 100, oldObj["cornerB1"], newObj["cornerB1"]); // corner B1 map
  new_letter["cornerB2"] = map(percent, 0, 100, oldObj["cornerB2"], newObj["cornerB2"]); // corner B2 map
  new_letter["cornerB3"] = map(percent, 0, 100, oldObj["cornerB3"], newObj["cornerB3"]); // corner B3 map
  new_letter["cornerB4"] = map(percent, 0, 100, oldObj["cornerB4"], newObj["cornerB4"]); // corner B4 map

  return new_letter;
}

var swapWords = [
  "RECTFONT",
  "BENJAMIN",
  "?PILBROW",
  "70S?STYL",
  "?YELLOW?",
  "?ORANGE?",
  "?PURPLE?"
]
