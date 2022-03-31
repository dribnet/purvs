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
  const squareColour = "#FF0000";
  const rectColour = "#0000FF";

  push();
  rectMode(CENTER);

  strokeWeight(3);
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

  fill(squareColour);
  rect(squareX, squareY, squareSize);
  fill(rectColour);
  rect(rectX, rectY, rectWidth, rectHeight);

  //strokeWeight(5);
  if(letterData['lineAngle'] == "vertical"){
  //  line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
    line(lineX, lineY, lineX, lineY+lineLength);

  }
  else{
    //line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
    line(lineX, lineY, lineX+lineLength, lineY);

  }
  pop();
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
