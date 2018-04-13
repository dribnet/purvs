const colorFront  = "#000000";
const colorStroke = "#fffaf2";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //bounding box
  //stroke('red');
  //rect(0, 0, 100, 200);

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  fill(191, 121, 0, 70);
  strokeWeight(4);

  let posx1 = letterData["posX1"];
  let posx2 = letterData["posX2"];
  let posy1 = letterData["posY1"];
  let posy2 = letterData["posY2"];
  let linex1 = letterData["linex1"];
  let linex2 = letterData["linex2"];
  let liney1 = letterData["liney1"];
  let liney2 = letterData["liney2"];

  // draw two circles
  ellipse(50, 130, 136, 136);
  noStroke();
  fill(130, 78, 0, 70);
  ellipse(posx1, posy1, 36, 36);
  ellipse(posx2, posy2, 76, 76);
  stroke(colorStroke);
  line(linex1,liney1,linex2,liney2)
}