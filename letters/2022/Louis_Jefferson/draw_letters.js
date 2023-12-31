/* these are optional special variables which will change the system */
var systemBackgroundColor = "#640A65";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkPink  = "#FD40FF";
const lightPink  = "#FEC3FF";
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


  noStroke();
  fill(darkPink);
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  
  fill(lightPink);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  triangle(pos7x, pos7y, pos8x, pos8y, pos9x, pos9y);



}





function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["1Trix1"] = map(percent, 20, 80, oldObj["1Trix1"], newObj["1Trix1"]);
  new_letter["1Triy1"] = map(percent, 20, 80, oldObj["1Triy1"], newObj["1Triy1"]);
  new_letter["1Trix2"] = map(percent, 20, 80, oldObj["1Trix2"], newObj["1Trix2"]);
  new_letter["1Triy2"] = map(percent, 20, 80, oldObj["1Triy2"], newObj["1Triy2"]);
  new_letter["1Trix3"] = map(percent, 20, 80, oldObj["1Trix3"], newObj["1Trix3"]);
  new_letter["1Triy3"] = map(percent, 20, 80, oldObj["1Triy3"], newObj["1Triy3"]);

  new_letter["2Trix1"] = map(percent, 20, 80, oldObj["1Trix1"], newObj["1Trix1"]);
  new_letter["2Triy1"] = map(percent, 20, 80, oldObj["1Triy1"], newObj["1Triy1"]);
  new_letter["2Trix2"] = map(percent, 20, 80, oldObj["1Trix2"], newObj["1Trix2"]);
  new_letter["2Triy2"] = map(percent, 20, 80, oldObj["1Triy2"], newObj["1Triy2"]);
  new_letter["2Trix3"] = map(percent, 20, 80, oldObj["1Trix3"], newObj["1Trix3"]);
  new_letter["2Triy3"] = map(percent, 20, 80, oldObj["1Triy3"], newObj["1Triy3"]);

  new_letter["3Trix1"] = map(percent, 20, 80, oldObj["1Trix1"], newObj["1Trix1"]);
  new_letter["3Triy1"] = map(percent, 20, 80, oldObj["1Triy1"], newObj["1Triy1"]);
  new_letter["3Trix2"] = map(percent, 20, 80, oldObj["1Trix2"], newObj["1Trix2"]);
  new_letter["3Triy2"] = map(percent, 20, 80, oldObj["1Triy2"], newObj["1Triy2"]);
  new_letter["3Trix3"] = map(percent, 20, 80, oldObj["1Trix3"], newObj["1Trix3"]);
  new_letter["3Triy3"] = map(percent, 20, 80, oldObj["1Triy3"], newObj["1Triy3"]);
  return new_letter;
}

var swapWords = [
  " JAGGED",
  "QUESTION",
  "1233456789"
]
