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
  let x = 25; 
  let y = 0; 
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  //translate(50, 50);

  // determine parameters for second circle
  let pos1x = letterData["offset1x"];
  let pos1y = letterData["offset1y"];
  let pos2x = letterData["offset2x"];
  let pos2y = letterData["offset2y"];
  let pos3x = letterData["offset3x"];
  let pos3y = letterData["offset3y"];
  let pos4x = letterData["offset4x"];
  let pos4y = letterData["offset4y"];

  // draw two circles
  beginShape();
  vertex(0+x, 0+y);
  vertex(0, 0);
  vertex(pos1x, pos1y);
  vertex(pos2x, pos2y);
  vertex(pos3x, pos3y);
  vertex(pos4x, pos4y);
  endShape(CLOSE);
}
