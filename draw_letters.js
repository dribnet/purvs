
// These are the different colours in the rainbow and rays 
const colorFont1   = "#9BEDFF"; 
const colorFont2   = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorStroke  = "#233f11";

function drawLetter(letterData, posx, posy) {

  angleMode(DEGREES);
  stroke(colorStroke);

  // Parameters that determine characteristics for ray shape
  let size2 = letterData["size"]; // Did not use this parameter
  posx =letterData["offsetx"];// X position of each letter
  posy = 0 + letterData["offsety"]; // Y position of each letter
  linex1 = 0 + letterData["linex1"]; // X-Coordinate of the first point
  linex2 = 0 + letterData["linex2"]; // Y-Coordinate of the first point
  liney1 = 0 + letterData["liney1"]; // X-Coordinate of the second point
  liney2 = 0 + letterData["liney2"]; // Y-Coordinate of the second point
  numRaysVal = 0 + letterData["numRaysVal"]; // Pushes the rays all together or moves them further apart
  numRaysVal2 = 0 + letterData["numRaysVal2"]; // Moves rays around, rotates them differently 
  rotateVal = 0 + letterData["rotateVal"]; // Determines how far apart rays are from one another, rotates them further 
  rangeVal = 0 + letterData["rangeVal"]; // Determines the range that the rays are rotating; around the rainbow
  rayAmount = 0 + letterData["rayAmount"]; // Determines the amount of lines drawn that make up the rays
  strokeVal = 0 + letterData["strokeVal"]; // Determines the stroke of each line that make up the rays 
  arcStroke = 0 + letterData["arcStroke"]; // Determines the stroke of the arcs that make up the rainbow



// Code for drawing the rainbow
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

// Code for drawing the rays
var colorArray = [colorFont1, colorFont2, colorFont3, colorFont4, colorFont5]; //Using an array to store the different colours
push();
let range = rangeVal;
let numRays = numRaysVal;
rotate(-(range/2)); 

// For-loop allows each ray to be drawn precisely and evenly
for (i = 0; i < rayAmount; i ++){ 
// This rotates the lines to be spread in the 'ray' shape
  rotate(rotateVal / numRays - numRaysVal2); 
  strokeWeight(strokeVal);
  stroke(colorArray[i % colorArray.length]); // This allows the code to cycle through the different colours, so each ray is a different colour of the rainbow
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
  "RAINBOWZ",
  "KI3R4M6K",
  "COLOURAY",
  "DAZZLING"


]