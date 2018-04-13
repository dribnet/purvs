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

  noFill();
  stroke('red');
  strokeWeight(1);
  rect(0,0,100,200);

  // determine parameters for second circle  
  fill(colorFront);
  stroke(colorStroke);

  angleMode(DEGREES);

  let trans1X = letterData["translate1X"];
  let trans1Y = letterData["translate1Y"];
  let rot1 = letterData["rotate1"];

  let trans2X = letterData["translate2X"];
  let trans2Y = letterData["translate2Y"];
  let rot2 = letterData["rotate2"];
  let sw1 = letterData["strokeweight1"];
  let sw2 = letterData["strokeweight2"];

  strokeWeight(4);
  line(10, 150, 90, 70);

  //first right angle
  push();
  strokeWeight(sw1);

  translate(trans1X, trans1Y);
  rotate(rot1);
  line(0, 0, 0, 30);
  line(0, 30, 30, 30);
  pop()

  //second right angle
  push(); 
  strokeWeight(sw2);
  translate(trans2X, trans2Y);
  rotate(rot2);
  line(0, 0, 0, 30);
  line(0, 30, 30, 30);
  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["translate1X"] = map(percent, 0, 100, oldObj["translate1X"], newObj["translate1X"]);
  new_letter["translate1Y"] = map(percent, 0, 100, oldObj["translate1Y"], newObj["translate1Y"]);
  new_letter["rotate1"] = map(percent, 0, 100, oldObj["rotate1"], newObj["rotate1"]);

  new_letter["translate2X"] = map(percent, 0, 100, oldObj["translate2X"], newObj["translate2X"]);
  new_letter["translate2Y"] = map(percent, 0, 100, oldObj["translate2Y"], newObj["translate2Y"]);
  new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["strokeweight1"] = map(percent, 0, 100, oldObj["strokeweight1"], newObj["strokeweight1"]);
  new_letter["strokeweight2"] = map(percent, 0, 100, oldObj["strokeweight2"], newObj["strokeweight2"]);
  return new_letter;
}