const colorFront  = "#ffffff";
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
  let posx = letterData["x"];
  let posy = letterData["y"];

  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];

  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];

  let pos4x = letterData["x4"];
  let pos4y = letterData["y4"];

  // draw four circles

  ellipse(posx, posy, 13, 13);
  ellipse(pos2x, pos2y, 13, 13);
  ellipse(pos3x, pos3y, 13, 13);
  ellipse(pos4x, pos4y, 13, 13);

  stroke(255,255,255,200)

  line(posx,posy,pos2x,pos2y)
  line(posx,posy,pos3x,pos3y)
  line(posx,posy,pos4x,pos4y)
  line(pos2x,pos2y,pos3x,pos3y)
  line(pos2x,pos2y,pos4x,pos4y)
  line(pos3x,pos3y,pos4x,pos4y)
}
