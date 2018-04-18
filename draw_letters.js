const colorFront  = "#e2e2e0";
const colorStroke = "#333332";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for lines
  //anchor point 1 - inital placement of first curve
  let posx = 0;
  let posy = 0;

  let vert1x = posx + letterData["vertX"];
  let vert1y = posy + letterData["vertY"];

  //control point/handle for first curve
  let ctrl1Px = posx + letterData["ctrlPx"];
  let ctrl1Py = posy + letterData["ctrlPy"];

  //anchor point 2 - end of first curve
  let vert2x = posx + letterData["vertX2"];
  let vert2y = posy + letterData["vertY2"];

  //control point/handle for second curve
  let ctrl2Px = posx + letterData["ctrlPx2"];
  let ctrl2Py = posy + letterData["ctrlPy2"];

  //anchor point 3 - end of second curve
  let vert3x = posx + letterData["vertX3"];
  let vert3y = posy + letterData["vertY3"];

  // draw two lines
  push();
  noStroke();
  fill(colorFront);
  rect(posx, posy, 100, 200);
  pop();
  
  push();
  scale(1.6);
  translate(-22, -25);
  stroke(colorStroke);
  noFill();
  strokeWeight(10);
  beginShape();
  vertex(vert1x, vert1y);
  quadraticVertex(ctrl1Px, ctrl1Py, vert2x, vert2y);
  quadraticVertex(ctrl2Px, ctrl2Py, vert3x, vert3y);
  endShape();
  pop();
}
