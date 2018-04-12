const colorStroke = "#233f11";
const colourOpac = 240;
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  // determine parameters for triangle points
  let p1 = createVector(letterData["pointOne"]["x"], letterData["pointOne"]["y"]);
  let p2 = createVector(letterData["pointTwo"]["x"], letterData["pointTwo"]["y"]);
  let p3 = createVector(letterData["pointThree"]["x"], letterData["pointThree"]["y"]);
  let p4 = createVector(letterData["pointFour"]["x"], letterData["pointFour"]["y"]);
  let p5 = createVector(letterData["pointFive"]["x"], letterData["pointFive"]["y"]);
  let p6 = createVector(letterData["pointSix"]["x"], letterData["pointSix"]["y"]);

  //paper fill
  fill(232, 232, 220, colourOpac);
  //colour fill
  //fill(255, 223, 17, colourOpac);

  push();
  angleMode(DEGREES);
  //rotate(random(-10,10));

  translate(50,100);

  beginShape();
  vertex(0 - p1.x, 0 - p1.y);
  vertex(0 - p2.x, 0 - p2.y);
  vertex(0 - p3.x, 0 - p3.y);
  endShape(CLOSE);

  //paper fill
  fill(242, 242, 242, colourOpac);
  //colour fill
  // fill(17, 215, 255,colourOpac);

  beginShape();
  vertex(0 - p4.x, 0 - p4.y);
  vertex(0 - p5.x, 0 - p5.y);
  vertex(0 - p6.x, 0 - p6.y);
  endShape(CLOSE);

  push();
  stroke(0,40);
  noFill();
  //ellipse(0,0,5,5);
  ellipse(0,0,letterSize*2,letterSize*2);
  fill(0);
  // ellipse(0 - p1.x, 0 - p1.y,pointSize,pointSize);
  // ellipse(0 - p4.x, 0 - p4.y,pointSize,pointSize);
  // ellipse(0 - p2.x, 0 - p2.y,pointSize,pointSize);
  // ellipse(0 - p5.x, 0 - p5.y,pointSize,pointSize);
  // ellipse(0 - p3.x, 0 - p3.y,pointSize,pointSize);
  // ellipse(0 - p6.x, 0 - p6.y,pointSize,pointSize);
  pop();

  pop();
}
