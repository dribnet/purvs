const colorFront  = "#f8f8ff";
const colorStroke = "#ffc482";

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
  strokeWeight(5);

  // determine parameters for second circle
    line(0, 165, letterData["point1X"], letterData["point1Y"]);

  line(letterData["point1X"], letterData["point1Y"], letterData["point2X"], letterData["point2Y"]);
  line(letterData["point3X"], letterData["point3Y"], letterData["point4X"], letterData["point4Y"]);
  line(letterData["point5X"], letterData["point5Y"], letterData["point6X"], letterData["point6Y"]);
}
