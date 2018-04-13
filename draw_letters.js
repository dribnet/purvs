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
  angleMode(DEGREES);

  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  let x = 0;
  let y = 0;
  let scale = letterData["scale"];

  // determine parameters for second circle
// Postion of blue arc
  let posx = x + letterData["x"];
  let posy = y + letterData["y"];

// Postion of green arc
  let pos2x = x + letterData["x2"];
  let pos2y = y + letterData["y2"];

// Postion of filled arc
  let pos3x = x + letterData["x3"];
  let pos3y = y + letterData["y3"];

// Rotation of blue arc
  let pos5x = x + letterData["x5"];
  let pos5y = y + letterData["y5"];

// Rotation of green arc
  let pos6x = x + letterData["x6"];
  let pos6y = y + letterData["y6"];

// Rotation of filled arc
  let pos7x = x + letterData["x7"];
  let pos7y = y + letterData["y7"];

angleMode(DEGREES);

  strokeWeight(8);
  stroke(30,144,255);
  noFill();
  // The blue arc
  arc(posx, pos2y, 20*scale ,20*scale, pos5x, pos5y);
noStroke();
  fill(255,215,0);
  // The yellow arc
  arc(pos2x, pos3y, 20*scale, 33*scale, pos7x, pos7y);
  strokeWeight(8);
  stroke(154,205,50);
  noFill();
  // The green arc
  arc(pos3x, pos2y, 18*scale, 5*scale, pos6x, pos6y);
}
