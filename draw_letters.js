/* these are optional special variables which will change the system */
var systemBackgroundColor = "#d1d1ff";
var systemLineColor = "#4d4ddb";
var systemBoxColor = "#4d4ddb";

/* internal constants */
const strokeColor  = "#233f11";
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

  push()
  strokeWeight(1);
  stroke(strokeColor);
  //setup the sketch
  angleMode(DEGREES)

  // determine parameters for letter
  let HeadY = letterData["HeadY"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];

  // // draw two circles
  
   //fill(lightYellow);
  // ellipse(50, 150, 100, 100);

  // fill(brightGreen);
  // arc(pos2x, pos2y, size2, size2,startAngle, stopAngle,CHORD);
  let faceSize = 100;
  let mouthHight = 30;
  let mouthWidth = 60;

  fill(lightYellow);
  rect(50-faceSize/2, HeadY, faceSize, faceSize, 20);

  // mouth
  ellipse(50,HeadY+2*(faceSize/3), mouthWidth,mouthHight);
  // eyes

  ellipse(30,HeadY+faceSize/4,10);
  ellipse(70,HeadY+faceSize/4,10);
  
  pop()
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]