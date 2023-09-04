const colorFront  = "#000000";
const colorStroke = "#e3eded";

var swapWords = [
  "MEDITATE",
  "FH3  T78",
  "CIRCLES0"
  ]

function drawLetter(letterData) {

  // colour/stroke setup
  fill(colorFront);
  noStroke();
  strokeWeight(3);
  strokeCap(SQUARE);

  let alpha = letterData["alpha"];

  let posx1 = letterData["posX1"];
  let posx2 = letterData["posX2"];
  let posy1 = letterData["posY1"];
  let posy2 = letterData["posY2"];
  
  let linex1 = letterData["linex1"];
  let linex2 = letterData["linex2"];
  let liney1 = letterData["liney1"];
  let liney2 = letterData["liney2"];
	 
  let r = letterData["r"];
  let g = letterData["g"];
  let b = letterData["b"];
  
  //draw three circles and a line
  ellipse(50, 130, 115, 115);
  
  fill(227, 237, 237);
  ellipse(posx2, posy2, 70, 70);
  stroke(colorStroke);


  //changes the colour of the small circle for numbers and letters 
  fill(r, g, b, 200);
  ellipse(posx1, posy1, 26, 26);

  strokeWeight(9);
  stroke(227, 237, 237, alpha);
  line(linex1,liney1,linex2,liney2);
}

function interpolate_letter(percent, oldObj, newObj){

  let new_letter = {};

  //alpha is used for faing lines in/out
  new_letter["alpha"] = map(percent, 0, 100, oldObj["alpha"], newObj["alpha"]);

  new_letter["r"] = map(percent, 0, 100, oldObj["r"], newObj["r"]);
  new_letter["g"] = map(percent, 0, 100, oldObj["g"], newObj["g"]);
  new_letter["b"] = map(percent, 0, 100, oldObj["b"], newObj["b"]);

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