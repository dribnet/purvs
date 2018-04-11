const colorFront  = "#199cff";
const colorStroke = "#233f11";

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
  let pos2y = 150+letterData["offsety"];

  // draw two circles
 // ellipse(50, 150, 100, 100);
 // ellipse(pos2x, pos2y, size2, size2);

 arc(pos2x, pos2y, size2,size2,15,-25,PI + QUARTER_PI, TWO_PI);

 let xval1 = letterData["x1"];
 // x1, y1, x2,y2
 line(xval1, 0,100,100);


}
