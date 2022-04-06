/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFF0";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  const backgroundColor  = "#FFFFF0";
  const strokeColor = "#000000";
  const redColour = "#FF0000";
  const blueColour = "#0000FF";
  const yellowColour = "#FFFF00";

  push();
  rectMode(CENTER);

  strokeWeight(5);
  stroke(strokeColor);

  let posx = 50;
  let posy = 150;

  // determine parameters for second circle
  let squareSize = letterData["squareSize"];
  let squareX = posx + letterData["squareX"];
  let squareY = posy + letterData["squareY"];

  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];
  let rectX = posx + letterData["rectX"];
  let rectY = posy + letterData["rectY"];

  let lineX = posx + letterData["lineX"];
  let lineY = posy + letterData["lineY"];
  let lineLength = letterData['lineLength'];
  let lineHeight = letterData['lineHeight'];


  let squareArea = squareSize*squareSize;
  let rectArea = rectWidth*rectHeight;
  let lineArea = lineLength*lineHeight;

  let colour1;
  let colour2;
  let colour3;

  // if(squareArea<rectArea<lineArea){
  //   colour1 = redColour;
  //   colour2 = blueColour;
  //   colour3 = yellowColour;
  // }
  // else if(rectArea<squareArea<lineArea){
  //   colour1 = blueColour;
  //   colour2 = redColour;
  //   colour3 = yellowColour;
  // }
  // else if(squareArea<lineArea<rectArea){
  //   colour1 = redColour;
  //   colour2 = yellowColour;
  //   colour3 = blueColour;
  // }
  // else if(rectArea<lineArea<squareArea){
  //   colour1 = blueColour;
  //   colour2 = yellowColour;
  //   colour3 = redColour;
  // }
  // else if(lineArea<squareArea<rectArea){
  //   colour1 = yellowColour;
  //   colour2 = redColour;
  //   colour3 = blueColour;
  // }
  // else{
  //   colour1 = yellowColour;
  //   colour2 = blueColour;
  //   colour3 = redColour;
  // }



  fill(redColour);
  rect(squareX, squareY, squareSize);
  fill(blueColour);
  rect(rectX, rectY, rectWidth, rectHeight);
  fill(yellowColour);
  rect(lineX, lineY, lineLength, lineHeight);

  // //strokeWeight(5);
  // if(letterData['lineAngle'] == 0){
  // //  line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
  //   line(lineX, lineY, lineX, lineY+lineLength);
  //
  // }
  // else{
  //   //line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
  //   line(lineX, lineY, lineX+lineLength, lineY);
  //
  // }
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["squareX"]    = map(percent, 0, 100, oldObj["squareX"], newObj["squareX"]);
  new_letter["squareY"] = map(percent, 0, 100, oldObj["squareY"], newObj["squareY"]);
  new_letter["squareSize"] = map(percent, 0, 100, oldObj["squareSize"], newObj["squareSize"]);
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["rectHeight"] = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);
  new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineLength"] = map(percent, 0, 100, oldObj["lineLength"], newObj["lineLength"]);
  new_letter["lineHeight"] = map(percent, 0, 100, oldObj["lineHeight"], newObj["lineHeight"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
