const colorFront  = "#199cff";
const colorStroke = "#233f11";
const center_x = 50;
const center_y = 100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  noFill();
  stroke('red');
  strokeWeight(1);
  rect(0,0,100,200);

  // determine parameters for second circle  
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // rect(0,0,100,200);

  let trans1X = letterData["translate1X"];
  let trans1Y = letterData["translate1Y"];
  let rot1 = letterData["rotate1"];

  let trans2X = letterData["translate2X"];
  let trans2Y = letterData["translate2Y"];
  let rot2 = letterData["rotate2"];

push();
  // scale(0.5);

  // //Drawing static base line
  // push();
  // translate(center_x, center_y);
  // rotate(45);
  // translate(-center_x, -center_y);
  // line(center_x, 400, center_x, 100);
  // pop()

  // // draw 1st right angle.
  // push();
  // translate(trans1X,trans1Y);
  // rotate(rot1);
  // line(0, 0, 0, 100);
  // line(0, 100, 100, 100);
  // pop();

  // // draw 2nd right angle.
  // push();
  // translate(trans2X, trans2Y);
  // rotate(rot2);
  // line(0, 0, 0, 100);
  // line(0, 100, 100, 100);
  // pop();

pop();

}
