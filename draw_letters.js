const colorFront  = "#9b4f92";
const colorStroke = "#6d3454";


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
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 100+letterData["offsety"];
  let pos3x = 60+letterData["offsetx"];
  let pos3y = 110+letterData["offsety"];
  // draw two squares
  rect(0, 0, 200, 100);
  rect(pos2x, pos2y, size2, size2);
  rect(pos3x, pos3y, size2, size2);
}
