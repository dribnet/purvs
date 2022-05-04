/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
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
  stroke(strokeColor);
  strokeWeight(4);
  let posx = 10;
  let posy = 100;
  // determine parameters for second circle
  let pos1x = posx + letterData["1Trix1"];
  let pos1y = posy + letterData["1Triy1"];
  let pos2x = posx + letterData["1Trix2"];
  let pos2y = posy + letterData["1Triy2"];
  let pos3x = posx + letterData["1Trix3"];
  let pos3y = posy + letterData["1Triy3"];

  let pos4x = posx + letterData["2Trix1"];
  let pos4y = posy + letterData["2Triy1"];
  let pos5x = posx + letterData["2Trix2"];
  let pos5y = posy + letterData["2Triy2"];
  let pos6x = posx + letterData["2Trix3"];
  let pos6y = posy + letterData["2Triy3"];

  let pos7x = posx + letterData["3Trix1"];
  let pos7y = posy + letterData["3Triy1"];
  let pos8x = posx + letterData["3Trix2"];
  let pos8y = posy + letterData["3Triy2"];
  let pos9x = posx + letterData["3Trix3"];
  let pos9y = posy + letterData["3Triy3"];
  
  // draw two circles
  noStroke();
  fill(darkBlue);
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  //ellipse(posx, posy, 150, 150);
  fill(lightBlue);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  triangle(pos7x, pos7y, pos8x, pos8y, pos9x, pos9y);
  //ellipse(pos2x, pos2y, size2, size2);

  // draw two circles

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
