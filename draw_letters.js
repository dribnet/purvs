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

  let posx=0;
  let posy=0;
  let scale = 0;
  fill(colorFront);
  noStroke ();

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos3x = posx + letterData["offset2x"];
  let pos4x = posx + letterData["offset3x"];
  let pos2y = posy + letterData["offsety"];
  let pos3y = posy + letterData["offset2y"];
  let pos4y = posy + letterData["offset3y"];
  let pos5y = posy + letterData["offset4y"];

  // draw two circles
  rect(pos4x, posy, 30, 200);
  rect(pos3x, pos5y, 30, size2);
  fill (255, 0, 0);
  rect(0, pos2y, 100, 10);
  rect(0, pos3y,100, 10);
  rect(0, pos4y, 100, 10);
}
