const colorFront  = "#199cff";
const colorStroke = "#ffaa00";

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
  strokeWeight(7);
rectMode(CENTER);
  // determine parameters for second circle
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];
  let x2 = letterData["x2"];
  let y2 = letterData["y2"];
  let x3 = letterData["x3"];
  let y3 = letterData["y3"];
  let x4 = letterData["x4"];
  let y4 = letterData["y4"];
  let x5 = letterData["x5"];
  let y5 = letterData["y5"];
line(x1,y1,x2,y2);
line(x2,y2,x3,y3);
line(x3,y3,x4,y4);
line(x4,y4,x5,y5);
stroke(colorFront);
ellipse(x1,y1,3,3);
ellipse(x2,y2,3,3);
ellipse(x3,y3,3,3);
ellipse(x4,y4,3,3);
ellipse(x4,y4,3,3);
ellipse(x5,y5,3,3);
}
