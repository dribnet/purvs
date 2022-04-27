/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFA"//"#e7e8e0";//"#ebdbbc"//"#cfcec6";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";
const strokeColor = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  const strokeColor = "#000000";
  const redColour = "#ff4242";
  const blueColour = "#79d8f2";
  const yellowColour = "#fcfa58";
  const greyColour = "#e7e8e0";
  const squareSize = 30;

  let posx = -50;
  let posy = 30;

  let square1X = posx + letterData["square1X"];
  let square1Y = posy + letterData["square1Y"];
  let square2X = posx + letterData["square2X"];
  let square2Y = posy + letterData["square2Y"];

  let rectYellowWidth = letterData["rectYellowWidth"];
  let rectYellowHeight = letterData["rectYellowHeight"];
  let rectYellowX = posx + letterData["rectYellowX"];
  let rectYellowY = posy + letterData["rectYellowY"];

  let rectRedWidth = letterData["rectRedWidth"];
  let rectRedHeight = letterData["rectRedHeight"];
  let rectRedX = posx + letterData["rectRedX"];
  let rectRedY = posy + letterData["rectRedY"];

  let numLineSquares = letterData["numLineSquares"];
  let lineSquaresX = posx + letterData["lineSquaresX"];
  let lineSquaresY = posy + letterData["lineSquaresY"];
  let direction = letterData['direction'];




  fill(0);
  ellipse(50, 10, 5, 5);

  strokeWeight(2);
  line(50, 10, 20, 40);
  line(50, 10, 80, 40);

  fill(greyColour);
  rect(-5, 40, 110, 170);

  strokeWeight(4);
  stroke(strokeColor);

  fill(255);
  rect(square1X, square1Y, squareSize, squareSize);

  fill(255);
  rect(square2X, square2Y, squareSize, squareSize);


  for (i = 0; i < numLineSquares; i++) {
    if (i == 1) {
      fill(blueColour);
    } else {
      fill(255);
    }
    rect(lineSquaresX, lineSquaresY + squareSize * i, squareSize, squareSize);
  }


  fill(yellowColour);
  rect(rectYellowX, rectYellowY, rectYellowWidth, rectYellowHeight);

  fill(redColour);
  rect(rectRedX, rectRedY, rectRedWidth, rectRedHeight);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["numLineSquares"] = map(percent, 0, 100, oldObj["numLineSquares"], newObj["numLineSquares"]);
  new_letter["lineSquaresX"] = map(percent, 0, 100, oldObj["lineSquaresX"], newObj["lineSquaresX"]);
  new_letter["lineSquaresY"] = map(percent, 0, 100, oldObj["lineSquaresY"], newObj["lineSquaresY"]);
  new_letter["rectYellowX"] = map(percent, 0, 100, oldObj["rectYellowX"], newObj["rectYellowX"]);
  new_letter["rectYellowY"] = map(percent, 0, 100, oldObj["rectYellowY"], newObj["rectYellowY"]);
  new_letter["rectYellowWidth"] = map(percent, 0, 100, oldObj["rectYellowWidth"], newObj["rectYellowWidth"]);
  new_letter["rectYellowHeight"] = map(percent, 0, 100, oldObj["rectYellowHeight"], newObj["rectYellowHeight"]);
  new_letter["rectRedX"] = map(percent, 0, 100, oldObj["rectRedX"], newObj["rectRedX"]);
  new_letter["rectRedY"] = map(percent, 0, 100, oldObj["rectRedY"], newObj["rectRedY"]);
  new_letter["rectRedWidth"] = map(percent, 0, 100, oldObj["rectRedWidth"], newObj["rectRedWidth"]);
  new_letter["rectRedHeight"] = map(percent, 0, 100, oldObj["rectRedHeight"], newObj["rectRedHeight"]);
  new_letter["square1X"] = map(percent, 0, 100, oldObj["square1X"], newObj["square1X"]);
  new_letter["square1Y"] = map(percent, 0, 100, oldObj["square1Y"], newObj["square1Y"]);
  new_letter["square2X"] = map(percent, 0, 100, oldObj["square2X"], newObj["square2X"]);
  new_letter["square2Y"] = map(percent, 0, 100, oldObj["square2Y"], newObj["square2Y"]);

  return new_letter;
}

var swapWords = [
  "DE STIJL",
  "MONDRIAN",
  "ARTWORKS",
  "PAINTERS"
]
