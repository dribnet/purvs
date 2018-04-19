const colorFront  = "#e3eded";
const colorStroke = "#e3eded";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // fill and stroke
  //fill(colorFront);
  //stroke(colorStroke);

  // determine parameters for second circle
  let posx = letterData["x"];
  let posy = letterData["y"];
  let pos1x = letterData["x1"];
  let pos1y = letterData["y1"];
  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];
  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];


  strokeWeight(5);
  noFill();
  stroke(255);
  ellipse(50+pos2x, 100+pos2y, 40, 40);
  stroke(0);
  strokeWeight(15);
  ellipse(50+pos3x, 100+pos3y, 80, 80);
  strokeWeight(5);
  stroke(255);
  ellipse(50+pos3x, 100+pos3y, 80, 80);
  // draw two circles
  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(50+posx, 100+posy, 20, 20);
  ellipse(50+pos1x, 100+pos1y, 60, 60);

  
}
