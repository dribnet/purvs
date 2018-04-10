const colorFront  = "#ffb7ce";
const colorStroke = "#ffb7ce"; /*"#ffb7ce"*/

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
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let startx = 50 + letterData["x1"];
  let starty = 150 + letterData["y1"];
  let endx = 50 + letterData["x2"];
  let endy = 150 + letterData["y2"];


  // draw two circles
    fill(colorFront);
    ellipse(50, 150, 100, 100);

    fill(colorBack);
    stroke(colorBack);
    ellipse(pos2x, pos2y, size2, size2);

  //draw a line
  stroke(colorStroke);
  fill(colorFront);
  strokeWeight (30);
  line(startx, starty, endx, endy);
  strokeWeight (4);
}
