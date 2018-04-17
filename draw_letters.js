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

  //scale of blue arc
  let scale = letterData["scale"];
  //scale of yellow arc
  let scale2 = letterData["scale2"];
  //scale of green arc
  let scale3 = letterData["scale3"];

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
  arc(posx, pos2y, 15*scale ,15*scale, pos5x, pos5y);
noStroke();
  fill(255,215,0);
  // The yellow arc
  arc(pos2x, pos3y, 15*scale2, 32*scale2, pos7x, pos7y);
  strokeWeight(8);
  stroke(154,205,50);
  noFill();
  // The green arc
  arc(pos3x, posy, 14*scale3, 3.5*scale3, pos6x, pos6y);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["x7"] = map(percent, 0, 100, oldObj["x7"], newObj["x7"]);
  new_letter["y7"] = map(percent, 0, 100, oldObj["y7"], newObj["y7"]);
  new_letter["scale"] = map(percent, 0, 100, oldObj["scale"], newObj["scale"]);
  new_letter["scale2"] = map(percent, 0, 100, oldObj["scale2"], newObj["scale2"]);
  new_letter["scale3"] = map(percent, 0, 100, oldObj["scale3"], newObj["scale3"]);
  return new_letter;
}

