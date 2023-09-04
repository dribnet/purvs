/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E6E6E6";
var systemLineColor = "#0B0B3B";
var systemBoxColor = "#424242";


const strokeColor  = "#233f11";



function drawLetter(letterData) {
  push();
  rectMode(CENTER);
  //Setup the sketch
  angleMode(DEGREES);
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];
  
  // draw two circles
  fill(255);
  ellipse(50, 150, 100, 100);//the constant circle present in every letter and number
  fill(0);
  arc(pos2x, pos2y, size2, size2, startAngle, stopAngle, CHORD);//the second circle/arc that is changed throughout the alphabet
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

//Below is the code to get my alphabet to flow smoothly between one another

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"] = map(percent, 0, 100, oldObj["end"], newObj["end"]);

  return new_letter;
}

var swapWords = [ //These are the words that will first be displayed on the interaction part of the website.
  "YIN?YANG",
  "HALFHALF",
  "GUNG?FU?"
]