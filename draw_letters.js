const colorFront  = "#000000";
const colorStroke = "white";

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

  //fill(191, 121, 0, 70);
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
  fill('white');
  ellipse(posx1, posy1, 36, 36);
  ellipse(posx2, posy2, 76, 76);
  stroke(colorStroke);
  line(linex1,liney1,linex2,liney2);
}

function interpolate_letter(percent, oldObj, newObj){

  let new_letter = {};
  new_letter["posX1"] = map(percent, 0, 100, oldObj["posX1"], newObj["posX1"]);
  new_letter["posY1"] = map(percent, 0, 100, oldObj["posY1"], newObj["posY1"]);
  new_letter["posX2"] = map(percent, 0, 100, oldObj["posX2"], newObj["posX2"]);
  new_letter["posY2"] = map(percent, 0, 100, oldObj["posY2"], newObj["posY2"]);

  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
  return new_letter;
}