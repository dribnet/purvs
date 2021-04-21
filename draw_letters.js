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
  let targetHeadY = -30;  
  if(percent < 50){
  new_letter["HeadY"]  = map(percent, 0, 50, oldObj["HeadY"], targetHeadY);
  } 
  else{
  new_letter["HeadY"]  = map(percent, 51, 100, targetHeadY, newObj["HeadY"]);
  }

 //new_letter["HeadY"]  = map(percent, 50, 100, oldObj["HeadY"], newObj["HeadY"]);
   new_letter["mouthH"] = map(percent, 0, 100, oldObj["mouthH"], newObj["mouthH"]);
   new_letter["mouthW"] = map(percent, 0, 100, oldObj["mouthW"], newObj["mouthW"]);
  return new_letter;

   //let inbetweenLetter = getObjFromChar("default");
//    let inbetweenTarget = 0
//   if(percent < 50){
//     new_letter["HeadY"]  = map(percent, 0, 50, oldObj["HeadY"],inbetweenTarget);
//   }
// else{
//   new_letter["HeadY"]  = map(percent, 50, 100, inbetweenTarget, newObj["HeadY"]);
 
// }
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "??face??"
]