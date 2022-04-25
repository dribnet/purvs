/* these are optional special variables which will change the system */
var systemBackgroundColor = "#3d3737";
var systemLineColor = "#8ce6aa";
var systemBoxColor = "#f74f4f";

/* internal constants */
const darkBlue  = "#f5eddc";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
noStroke();


  // determine parameters for second circle
  let sq1_posx = 0 + letterData["sq1_posx"];
  let sq1_posy = 0 + letterData["sq1_posy"];

  let sq2_posx = 0 + letterData["sq2_posx"];
  let sq2_posy = 0 + letterData["sq2_posy"];

  let sq3_posx = 0 + letterData["sq3_posx"];
  let sq3_posy = 0 + letterData["sq3_posy"];

  let sq4_posx = 0 + letterData["sq4_posx"];
  let sq4_posy = 0 + letterData["sq4_posy"];

  let sq5_posx = 0 + letterData["sq5_posx"];
  let sq5_posy = 0 + letterData["sq5_posy"];

  let sq6_posx = 0 + letterData["sq6_posx"];
  let sq6_posy = 0 + letterData["sq6_posy"];

  let sq7_posx = 0 + letterData["sq7_posx"];
  let sq7_posy = 0 + letterData["sq7_posy"];

  let sq8_posx = 0 + letterData["sq8_posx"];
  let sq8_posy = 0 + letterData["sq8_posy"];

  let sq9_posx = 0 + letterData["sq9_posx"];
  let sq9_posy = 0 + letterData["sq9_posy"];

  let sq10_posx = 0 + letterData["sq10_posx"];
  let sq10_posy = 0 + letterData["sq10_posy"];

//bacground grid

/*
fill(240, 100, 100, 75);
    rect(2.5, 2.5, 20, 20);
      rect(27.5, 2.5, 20, 20);
        rect(52.5, 2.5, 20, 20);
          rect(77.5, 2.5, 20, 20);

    rect(2.5, 27.5, 20, 20);
      rect(27.5, 27.5, 20, 20);
        rect(52.5, 27.5, 20, 20);
          rect(77.5, 27.5, 20, 20);

    rect(2.5, 52.5, 20, 20);
      rect(27.5, 52.5, 20, 20);
        rect(52.5, 52.5, 20, 20);
          rect(77.5, 52.5, 20, 20);

    rect(2.5, 77.5, 20, 20);
      rect(27.5, 77.5, 20, 20);
        rect(52.5, 77.5, 20, 20);
          rect(77.5, 77.5, 20, 20);

    rect(2.5, 102.5, 20, 20);
      rect(27.5, 102.5, 20, 20);
        rect(52.5, 102.5, 20, 20);
          rect(77.5, 102.5, 20, 20);
*/

fill(0, 0, 255, 175);
rect(sq1_posx+2, sq1_posy+2, 20, 20);
rect(sq2_posx+2, sq2_posy+2, 20, 20);
rect(sq3_posx+2, sq3_posy+2, 20, 20);
rect(sq4_posx+2, sq4_posy+2, 20, 20);
rect(sq5_posx+2, sq5_posy+2, 20, 20);
rect(sq6_posx+2, sq6_posy+2, 20, 20);
rect(sq7_posx+2, sq7_posy+2, 20, 20);
rect(sq8_posx+2, sq8_posy+2, 20, 20);
rect(sq9_posx+2, sq9_posy+2, 20, 20);
rect(sq10_posx+2, sq10_posy+2, 20, 20);

fill(255, 100, 100, 175);
rect(sq1_posx-2, sq1_posy+2, 20, 20);
rect(sq2_posx-2, sq2_posy+2, 20, 20);
rect(sq3_posx-2, sq3_posy+2, 20, 20);
rect(sq4_posx-2, sq4_posy+2, 20, 20);
rect(sq5_posx-2, sq5_posy+2, 20, 20);
rect(sq6_posx-2, sq6_posy+2, 20, 20);
rect(sq7_posx-2, sq7_posy+2, 20, 20);
rect(sq8_posx-2, sq8_posy+2, 20, 20);
rect(sq9_posx-2, sq9_posy+2, 20, 20);
rect(sq10_posx-2, sq10_posy+2, 20, 20);

  fill(darkBlue);
  rect(sq1_posx, sq1_posy, 20, 20);
  rect(sq2_posx, sq2_posy, 20, 20);
  rect(sq3_posx, sq3_posy, 20, 20);
  rect(sq4_posx, sq4_posy, 20, 20);
  rect(sq5_posx, sq5_posy, 20, 20);
  rect(sq6_posx, sq6_posy, 20, 20);
  rect(sq7_posx, sq7_posy, 20, 20);
  rect(sq8_posx, sq8_posy, 20, 20);
  rect(sq9_posx, sq9_posy, 20, 20);
  rect(sq10_posx, sq10_posy, 20, 20);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sq1_posx"]    = map(percent, 0, 100, oldObj["sq1_posx"], newObj["sq1_posx"]);
  new_letter["sq1_posy"] = map(percent, 0, 100, oldObj["sq1_posy"], newObj["sq1_posy"]);
  new_letter["sq2_posx"]    = map(percent, 0, 100, oldObj["sq2_posx"], newObj["sq2_posx"]);
  new_letter["sq2_posy"] = map(percent, 0, 100, oldObj["sq2_posy"], newObj["sq2_posy"]);
  new_letter["sq3_posx"]    = map(percent, 0, 100, oldObj["sq3_posx"], newObj["sq3_posx"]);
  new_letter["sq3_posy"] = map(percent, 0, 100, oldObj["sq3_posy"], newObj["sq3_posy"]);
  new_letter["sq4_posx"]    = map(percent, 0, 100, oldObj["sq4_posx"], newObj["sq4_posx"]);
  new_letter["sq4_posy"] = map(percent, 0, 100, oldObj["sq4_posy"], newObj["sq4_posy"]);
  new_letter["sq5_posx"]    = map(percent, 0, 100, oldObj["sq5_posx"], newObj["sq5_posx"]);
  new_letter["sq5_posy"] = map(percent, 0, 100, oldObj["sq5_posy"], newObj["sq5_posy"]);
  new_letter["sq6_posx"]    = map(percent, 0, 100, oldObj["sq6_posx"], newObj["sq6_posx"]);
  new_letter["sq6_posy"] = map(percent, 0, 100, oldObj["sq6_posy"], newObj["sq6_posy"]);
  new_letter["sq7_posx"]    = map(percent, 0, 100, oldObj["sq7_posx"], newObj["sq7_posx"]);
  new_letter["sq7_posy"] = map(percent, 0, 100, oldObj["sq7_posy"], newObj["sq7_posy"]);
  new_letter["sq8_posx"]    = map(percent, 0, 100, oldObj["sq8_posx"], newObj["sq8_posx"]);
  new_letter["sq8_posy"] = map(percent, 0, 100, oldObj["sq8_posy"], newObj["sq8_posy"]);
  new_letter["sq9_posx"]    = map(percent, 0, 100, oldObj["sq9_posx"], newObj["sq9_posx"]);
  new_letter["sq9_posy"] = map(percent, 0, 100, oldObj["sq9_posy"], newObj["sq9_posy"]);
  new_letter["sq10_posx"]    = map(percent, 0, 100, oldObj["sq10_posx"], newObj["sq10_posx"]);
  new_letter["sq10_posy"] = map(percent, 0, 100, oldObj["sq10_posy"], newObj["sq10_posy"]);
  return new_letter;
}

var swapWords = [
  "HENRY_BE",
  "HOWDYALL",
  "PIXELSSS"
]
