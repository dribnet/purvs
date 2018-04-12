const colorFront  = "#000000";
const colorStroke = "#ffffff";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let pos3x = letterData["offsetx2"];
  let pos3y = letterData["offsety2"];
  let pos4x = letterData["offsetx3"];
  let pos4y = letterData["offsety3"];
  let pos5x = letterData["offsetx4"];
  let pos5y = letterData["offsety4"];
  // draw two squares
  rect(0, 75, 100, 125);
  rect(pos2x, pos2y, size2, size2);
  rect(pos3x, pos3y, size2, size2);
  rect(pos4x, pos4y, size2, size2);
  rect(pos5x, pos5y, size2, size2);
}
 