/* these are optional special variables which will change the system */
var systemBackgroundColor = "#d1d1ff";
var systemLineColor = "#4d4ddb";
var systemBoxColor = "#4d4ddb";

/* internal constants */
const strokeColor  = "#0db83a";
const brightGreen  = "#59ff8b";
const lightBlue  = "#59ccff";
const lightYellow = "#fff385"

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  randomSeed(42);
  push()
  strokeWeight(9);
  stroke(strokeColor);
  //setup the sketch
  angleMode(DEGREES)

  // determine parameters for letter
  let X1 = letterData["X1"];
  let Y1 = letterData["Y1"];
  let X2 = letterData["X2"];
  let Y2 = letterData["Y2"];

  //line(X1,Y1,X2,Y2);
  customLine(X1,Y1,X2,Y2);

  
  
  pop()
}


function customLine(X1,Y1,X2,Y2){

  strokeWeight(7);
  line(X1,Y1,X2,Y2);

  

  //////////////////// adding extra lines to my lines 
  //strokeWeight(4);
  // let offset = 10;
  // stroke(255, 110, 163);

  // line(X1,Y1+offset,X2,Y2+offset);
  // line(X1-offset,Y1,X2-offset,Y2);
  /////////////////////////////////////////

  stroke(0);
  strokeWeight(5);

  let xVal,yVal;

  for(let i = 0; i < 7; i++){
    xVal = map(i,0,6,X1, X2);
    yVal = map(i,0,6,Y1, Y2);
  point(xVal+(random(-5, 5)),yVal+(random(-5, 5)))
  }


 //  fill(225);
 //  let Xval, Yval;
 //    for (var i = 0; i <11; i++) {
 //    Xval = map(i, 0, 10,X1,X2);
 //    Yval = map(i, 0, 10,Y1,Y2);

 //    ellipse(Xval,Yval,20);
 // }
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["X1"]  = map(percent, 0, 100, oldObj["X1"], newObj["X1"]);
  new_letter["Y1"] = map(percent, 0, 100, oldObj["Y1"], newObj["Y1"]);
  new_letter["X2"] = map(percent, 0, 100, oldObj["X2"], newObj["X2"]);
  new_letter["Y2"] = map(percent, 0, 100, oldObj["Y2"], newObj["Y2"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "??face??"
]