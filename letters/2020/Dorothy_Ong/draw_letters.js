
const colorFill  = "#FCD9E8"; // font fill colour
const colorStroke  =  "#F0B8DD"; // candy pink stroke
const colorShadow = "BDDBBE"; // font shadow
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {

  // determine parameters for lines
  let lineX1 = letterData["lineX"];
  let lineY1 = letterData["lineY"];
  let lineX2 = letterData["linex2"];
  let lineY2 = letterData["liney2"];
  let lineX3 = letterData["lineX1"];
  let lineY3 = letterData["lineY1"];
  let lineX4 = letterData["lineX2"];
  let lineY4 = letterData["lineY2"];
  let lineX5 = letterData["lineX3"];
  let lineY5 = letterData["lineY3"];
  let lineX6 = letterData["lineX4"];
  let lineY6 = letterData["lineY4"];
  //determine circle parameters
  let circSize = letterData["circ"];
  let circSize2 = letterData["circ2"];

  // determine circ2 x,y positions
  let circXpos = letterData["circ2X"];
  let circYpos = letterData["circ2Y"];

  // draw background circle shadow
  noStroke();
  fill(189,219,190,145); // darker blue with opacity
  ellipse(circXpos,circYpos,circSize2,circSize2);

  // draw foreground circle
  strokeWeight(10)
  stroke(colorStroke)
  fill(colorFill);
  ellipse(50,150,circSize,circSize);
  
  // draw line stroke
  strokeWeight(5);
  stroke(colorStroke);
  line(lineX1, lineY1, lineX2, lineY2);
  line(lineX3, lineY3, lineX4, lineY4);
  line (lineX5, lineY5, lineX6, lineY6);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["circ"] = map(percent, 0, 100, oldObj["circ"], newObj["circ"]);
 
  if(percent<40){
    new_letter["lineX"] = oldObj["lineX"]; 
    new_letter["lineY"] = oldObj["lineY"];
    new_letter["linex2"] = oldObj["linex2"];
    new_letter["liney2"] = oldObj["liney2"];
    new_letter["lineX1"] =  oldObj["lineX1"];
    new_letter["lineY1"] =  oldObj["lineY1"];
    new_letter["lineX2"] = oldObj["lineX2"];
    new_letter["lineY2"] =  oldObj["lineY2"];
    new_letter["lineX3"] = oldObj["lineX3"];
    new_letter["lineY3"] = oldObj["lineY3"];
    new_letter["lineX4"] = oldObj["lineX4"];
    new_letter["lineY4"] = oldObj["lineY4"];
    new_letter["circ2"] = oldObj["circ2"];
    new_letter["circ2X"] = oldObj["circ2X"];
    new_letter["circ2Y"] = oldObj["circ2Y"];
  }
  else{
    new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
    new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
    new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
    new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
    new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
    new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);
    new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
    new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
    new_letter["lineX3"] = map(percent, 0, 100, oldObj["lineX3"], newObj["lineX3"]);
    new_letter["lineY3"] = map(percent, 0, 100, oldObj["lineY3"], newObj["lineY3"]);
    new_letter["lineX4"] = map(percent, 0, 100, oldObj["lineX4"], newObj["lineX4"]);
    new_letter["lineY4"] = map(percent, 0, 100, oldObj["lineY4"], newObj["lineY4"]);
    new_letter["circ2"] = map(percent, 0, 100, oldObj["circ2"], newObj["circ2"]);
    new_letter["circ2X"] = map(percent, 0, 100, oldObj["circ2X"], newObj["circ2X"]);
    new_letter["circ2Y"] = map(percent, 0, 100, oldObj["circ2Y"], newObj["circ2Y"]);
  }
  
  
  return new_letter;
}

var swapWords = [
  "EYECANDY", //name of font since it has the colours of bright cotton candy
  "DOUGHNUT",
  "HONEYBUN",
  "LEMONICE",
  "NAPOLEON",
  "SHERBETS",
  "DELICACY",
  "AMBROSIA",
  "APPLEPIE",
  "CUSTARDS",
  "PARFAITS",
  "PUDDINGS",
  "EGGWHITE",
  "RICHCAKE",
  "LOLLIPOP",
  "ICECREAM",
  "CARAMELS",
  "PASTRIES",
  "LICORICE",
  "GUMDROPS",
  "SOURBALL",
  "12345678"
]
