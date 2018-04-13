
const colorFront  = "#FF9F00";
const colorStroke = "#7B14CC";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  rect(0,0,100,200);

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  let pos1x = letterData["x"];
  let pos1y = letterData["y"];
  let pos2x = letterData["2x"];
  let pos2y = letterData["2y"];
  let pos3x = letterData["3x"];
  let pos3y = letterData["3y"];
    
  let pos4x = letterData["4x"];
  let pos4y = letterData["4y"];
  let pos5x = letterData["5x"];
  let pos5y = letterData["5y"];
  let pos6x = letterData["6x"];
  let pos6y = letterData["6y"];

  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
}

// function interpolate_letter(percent, oldObj, newObj){
//   let new_letter = {};
//   new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
//   new_letter["offsetx"] = 0; //edit with my own parameters
//   new_letter["offsety"] = 0;
//   return new_letter;
// }