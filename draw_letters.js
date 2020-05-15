const colorFont1   = "#9BEDFF"; 
const colorFont2   = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData, posx, posy) {

  angleMode(DEGREES);
  // color/stroke setup
  stroke(colorStroke);

  // determine parameters for second circle
  let size2 = letterData["size"];
  posx =letterData["offsetx"]; 
  posy = 0 + letterData["offsety"]; 
  linex1 = 0 + letterData["linex1"]; 
  linex2 = 0 + letterData["linex2"]; 
  liney1 = 0 + letterData["liney1"]; 
  liney2 = 0 + letterData["liney2"]; 
  numRaysVal = 0 + letterData["numRaysVal"];
  numRaysVal2 = 0 + letterData["numRaysVal2"];
  rotateVal = 0 + letterData["rotateVal"];
  rangeVal = 0 + letterData["rangeVal"];
  rayAmount = 0 + letterData["rayAmount"];
  strokeVal = 0 + letterData["strokeVal"];
  arcStroke = 0 + letterData["arcStroke"];



//draw rainbow
push();
translate(posx, posy);
rotate(7);
  noFill();
  strokeWeight(arcStroke);
  stroke(colorFont5);
  arc(0, 0, 60, 60, 160, PI + QUARTER_PI, TWO_PI); 
  stroke(colorFont4);
  arc(0, 0, 49, 49, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont3);
  arc(0, 0, 38, 38, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont1);
  arc(0, 0, 28, 28, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont2);
  arc(0, 0, 12, 12, 160, PI + QUARTER_PI, TWO_PI);

//rays
var colorArray = [colorFont1, colorFont2, colorFont3, colorFont4, colorFont5];
push();
let range = rangeVal;
let numRays = numRaysVal;
rotate(-(range/2)); 

for (i = 0; i < rayAmount; i ++){ 
   rotate(rotateVal / numRays - numRaysVal2); 
  strokeWeight(strokeVal);
  stroke(colorArray[i % colorArray.length]);
 line(linex1, linex2, liney1, liney2) 

}

pop();
pop();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["linex1"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["numRaysVal"] = map(percent, 0, 100, oldObj["numRaysVal"], newObj["numRaysVal"]);
  new_letter["numRaysVal2"] = map(percent, 0, 100, oldObj["numRaysVal2"], newObj["numRaysVal2"]);
  new_letter["rotateVal"] = map(percent, 0, 100, oldObj["rotateVal"], newObj["rotateVal"]);
  new_letter["rangeVal"] = map(percent, 0, 100, oldObj["rangeVal"], newObj["rangeVal"]);
  new_letter["rayAmount"] = map(percent, 0, 100, oldObj["rayAmount"], newObj["rayAmount"]);
  new_letter["strokeVal"] = map(percent, 0, 100, oldObj["strokeVal"], newObj["strokeVal"]);
  new_letter["arcStroke"] = map(percent, 0, 100, oldObj["arcStroke"], newObj["arcStroke"]);
  return new_letter;
}

var swapWords = [
  "RAINBOWS",
  "KIERAMCK",
  "ABCD1234"
]