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
  let mouthHight = letterData["mouthH"];
  let mouthWidth = letterData["mouthW"];
  
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];

  let faceSize = 100;
  
  // drawface
  fill(lightYellow);
  rect(50-faceSize/2, HeadY, faceSize, faceSize, 20);

  // mouth
  ellipse(50,HeadY+2*(faceSize/3), mouthWidth,mouthHight);
  
  // eyes
  fill(0);
  ellipse(30,HeadY+faceSize/4,10);
  ellipse(70,HeadY+faceSize/4,10);
  
  pop()
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  let targetHeadY = -30; // this is the value that I want the HeadY to hit before moving on to its final destination

  let defaultChar = getObjFromChar("default"); // the variable defaultChar now contains all the infomation of the "default" section of letters.js

  if(percent < 50){
  new_letter["HeadY"]  = map(percent, 0, 50, oldObj["HeadY"], targetHeadY); // half way through the animation we want the HeadY to hit -30
  new_letter["mouthH"] = map(percent, 0, 50, oldObj["mouthH"], defaultChar["HeadY"]); // half way through the animation the face looks like default
   new_letter["mouthW"] = map(percent, 0, 50, oldObj["mouthW"], defaultChar["HeadY"]);
  } 
  else{
  new_letter["HeadY"]  = map(percent, 51, 100, targetHeadY, newObj["HeadY"]); // starting from -30 we are moving to the next letters HeadY
  new_letter["mouthH"]  = map(percent, 51, 100, defaultChar["mouthH"], newObj["mouthH"]); // moving from default to the new letter
  new_letter["mouthW"]  = map(percent, 51, 100, defaultChar["mouthW"], newObj["mouthW"]);
  }

 //new_letter["HeadY"]  = map(percent, 50, 100, oldObj["HeadY"], newObj["HeadY"]);  // if these are uncommented then the animation would be "straight"

  //new_letter["mouthH"] = map(percent, 0, 100, oldObj["mouthH"], newObj["mouthH"]);
  // new_letter["mouthW"] = map(percent, 0, 100, oldObj["mouthW"], newObj["mouthW"]);
  return new_letter;
}

var swapWords = [
  "HEADSING",
  "CAB?CAB?",
  "BAAAAAAA",
  "??face??",
  "TOGETHER",
  "12345678",
  "99TEST99"
]