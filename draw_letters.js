const colorFront  = "#000000";
const colorStroke = "#e3eded";

function drawLetter(letterData) {

  // color/stroke setup
  fill(colorFront);
  noStroke();
  strokeWeight(3);

  let posx1 = letterData["posX1"];
  let posx2 = letterData["posX2"];
  let posy1 = letterData["posY1"];
  let posy2 = letterData["posY2"];
  let linex1 = letterData["linex1"];
  let linex2 = letterData["linex2"];
  let liney1 = letterData["liney1"];
  let liney2 = letterData["liney2"];

  // draw three circles and a line
  ellipse(50, 130, 140, 140);
  
  fill(227, 237, 237);
  ellipse(posx2, posy2, 83, 83);
  stroke(colorStroke);

  fill(244, 66, 80, 200);
  ellipse(posx1, posy1, 36, 36);

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