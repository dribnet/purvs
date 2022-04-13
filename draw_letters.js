/* these are optional special variables which will change the system */
var systemBackgroundColor = "#cfcec6";
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
  const redColour = "#ff4242";
  const blueColour = "#79d8f2";
  const yellowColour = "#fcfa58";
  const squareSize = 30;

  // push();
  // rectMode(CENTER);
  //
  strokeWeight(3);
  stroke(strokeColor);
  //
  // let posx = 50;
  // let posy = 150;
  //
  // // determine parameters for second circle
  // let squareSize = letterData["squareSize"];
  // let squareX = posx + letterData["squareX"];
  // let squareY = posy + letterData["squareY"];
  //
  // let rectWidth = letterData["rectWidth"];
  // let rectHeight = letterData["rectHeight"];
  // let rectX = posx + letterData["rectX"];
  // let rectY = posy + letterData["rectY"];
  //
  // let lineX = posx + letterData["lineX"];
  // let lineY = posy + letterData["lineY"];
  // let lineLength = letterData['lineLength'];
  // let lineHeight = letterData['lineHeight'];
  //
  //
  // let squareArea = squareSize*squareSize;
  // let rectArea = rectWidth*rectHeight;
  // let lineArea = lineLength*lineHeight;
  //
  // let colour1;
  // let colour2;
  // let colour3;
  //
  //
  // fill(redColour);
  // rect(squareX, squareY, squareSize);
  // fill(blueColour);
  // rect(rectX, rectY, rectWidth, rectHeight);
  // fill(yellowColour);
  // rect(lineX, lineY, lineLength, lineHeight);
  //
  // pop();

  let count = 0;

  let posx = -50;
  let posy = 30;

  let square1X = posx + letterData["square1X"];
  let square1Y = posy + letterData["square1Y"];
  let square2X = posx + letterData["square2X"];
  let square2Y = posy + letterData["square2Y"];

  let rect1Width = letterData["rect1Width"];
  let rect1Height = letterData["rect1Height"];
  let rect1X = posx + letterData["rect1X"];
  let rect1Y = posy + letterData["rect1Y"];

  let rect2Width = letterData["rect2Width"];
  let rect2Height = letterData["rect2Height"];
  let rect2X = posx + letterData["rect2X"];
  let rect2Y = posy + letterData["rect2Y"];

  let numLineSquares = letterData["numLineSquares"];
  let lineSquaresX = posx + letterData["lineSquaresX"];
  let lineSquaresY = posy + letterData["lineSquaresY"];
  let direction = letterData['direction'];


  // if(count == 3){
  //   fill(blueColour);
  // }
  // else if(count == 5){
  //   fill(yellowColour);
  // }
  // else if(count == 7){
  //   fill(redColour);
  // }
  // else{
  //   fill(255);
  // }

//  fill(255);
fill(255);
rect(square1X, square1Y, squareSize, squareSize);
count++;
fill(255);
rect(square2X, square2Y, squareSize, squareSize);


  // if(direction == 0){
  //   for (i=0; i<numLineSquares; i++){
  //     if(i == 1){
  //       fill(blueColour);
  //     }
  //     else{
  //       fill(255);
  //     }
  //     rect(lineSquaresX+squareSize*i, lineSquaresY, squareSize, squareSize);
  //     count++;
  //   }
  // }
  // else{
    for (i=0; i<numLineSquares; i++){
      if(i == 1){
        fill(blueColour);
      }
      else{
        fill(255);
      }
      rect(lineSquaresX, lineSquaresY+squareSize*i, squareSize, squareSize);
      count++;
    }
  // }

  fill(yellowColour);
  rect(rect1X, rect1Y, rect1Width, rect1Height);
  count++;
  fill(redColour);
  rect(rect2X, rect2Y, rect2Width, rect2Height);
  count++;




}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["squareX"]    = map(percent, 0, 100, oldObj["squareX"], newObj["squareX"]);
  // new_letter["squareY"] = map(percent, 0, 100, oldObj["squareY"], newObj["squareY"]);
  // new_letter["squareSize"] = map(percent, 0, 100, oldObj["squareSize"], newObj["squareSize"]);
  // new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  // new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  // new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  // new_letter["rectHeight"] = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);
  // new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  // new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  // new_letter["lineLength"] = map(percent, 0, 100, oldObj["lineLength"], newObj["lineLength"]);
  // new_letter["lineHeight"] = map(percent, 0, 100, oldObj["lineHeight"], newObj["lineHeight"]);

  new_letter["numLineSquares"] = map(percent, 0, 100, oldObj["numLineSquares"], newObj["numLineSquares"]);
  new_letter["lineSquaresX"] = map(percent, 0, 100, oldObj["lineSquaresX"], newObj["lineSquaresX"]);
  new_letter["lineSquaresY"] = map(percent, 0, 100, oldObj["lineSquaresY"], newObj["lineSquaresY"]);
  new_letter["rect1X"] = map(percent, 0, 100, oldObj["rect1X"], newObj["rect1X"]);
  new_letter["rect1Y"] = map(percent, 0, 100, oldObj["rect1Y"], newObj["rect1Y"]);
  new_letter["rect1Width"] = map(percent, 0, 100, oldObj["rect1Width"], newObj["rect1Width"]);
  new_letter["rect1Height"] = map(percent, 0, 100, oldObj["rect1Height"], newObj["rect1Height"]);
  new_letter["rect2X"] = map(percent, 0, 100, oldObj["rect2X"], newObj["rect2X"]);
  new_letter["rect2Y"] = map(percent, 0, 100, oldObj["rect2Y"], newObj["rect2Y"]);
  new_letter["rect2Width"] = map(percent, 0, 100, oldObj["rect2Width"], newObj["rect2Width"]);
  new_letter["rect2Height"] = map(percent, 0, 100, oldObj["rect2Height"], newObj["rect2Height"]);
  new_letter["square1X"]    = map(percent, 0, 100, oldObj["square1X"], newObj["square1X"]);
  new_letter["square1Y"] = map(percent, 0, 100, oldObj["square1Y"], newObj["square1Y"]);
  new_letter["square2X"]    = map(percent, 0, 100, oldObj["square2X"], newObj["square2X"]);
  new_letter["square2Y"] = map(percent, 0, 100, oldObj["square2Y"], newObj["square2Y"]);
//  new_letter["lineHeight"] = map(percent, 0, 100, oldObj["lineHeight"], newObj["lineHeight"]);
  return new_letter;
}

var swapWords = [
  "MONDRIAN",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
