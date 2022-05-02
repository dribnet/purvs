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
  // strokeWeight(0);
  // rect(-5, 40, 120, 170);

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

  // //Original
  // new_letter["numLineSquares"] = map(percent, 0, 100, oldObj["numLineSquares"], newObj["numLineSquares"]);
  // new_letter["lineSquaresX"] = map(percent, 0, 100, oldObj["lineSquaresX"], newObj["lineSquaresX"]);
  // new_letter["lineSquaresY"] = map(percent, 0, 100, oldObj["lineSquaresY"], newObj["lineSquaresY"]);
  // new_letter["rectYellowX"] = map(percent, 0, 100, oldObj["rectYellowX"], newObj["rectYellowX"]);
  // new_letter["rectYellowY"] = map(percent, 0, 100, oldObj["rectYellowY"], newObj["rectYellowY"]);
  // new_letter["rectYellowWidth"] = map(percent, 0, 100, oldObj["rectYellowWidth"], newObj["rectYellowWidth"]);
  // new_letter["rectYellowHeight"] = map(percent, 0, 100, oldObj["rectYellowHeight"], newObj["rectYellowHeight"]);
  // new_letter["rectRedX"] = map(percent, 0, 100, oldObj["rectRedX"], newObj["rectRedX"]);
  // new_letter["rectRedY"] = map(percent, 0, 100, oldObj["rectRedY"], newObj["rectRedY"]);
  // new_letter["rectRedWidth"] = map(percent, 0, 100, oldObj["rectRedWidth"], newObj["rectRedWidth"]);
  // new_letter["rectRedHeight"] = map(percent, 0, 100, oldObj["rectRedHeight"], newObj["rectRedHeight"]);
  // new_letter["square1X"] = map(percent, 0, 100, oldObj["square1X"], newObj["square1X"]);
  // new_letter["square1Y"] = map(percent, 0, 100, oldObj["square1Y"], newObj["square1Y"]);
  // new_letter["square2X"] = map(percent, 0, 100, oldObj["square2X"], newObj["square2X"]);
  // new_letter["square2Y"] = map(percent, 0, 100, oldObj["square2Y"], newObj["square2Y"]);

  // // Hard coded two step
  // //0-50%
  // new_letter["numLineSquares"] = map(percent, 0, 50, oldObj["numLineSquares"], 2);
  // new_letter["lineSquaresX"] = map(percent, 0, 50, oldObj["lineSquaresX"], 85);
  // new_letter["lineSquaresY"] = map(percent, 0, 50, oldObj["lineSquaresY"], 110);
  // new_letter["rectYellowX"] = map(percent, 0, 50, oldObj["rectYellowX"], 55);
  // new_letter["rectYellowY"] = map(percent, 0, 50, oldObj["rectYellowY"], 20);
  // new_letter["rectYellowWidth"] = map(percent, 0, 50, oldObj["rectYellowWidth"], 30);
  // new_letter["rectYellowHeight"] = map(percent, 0, 50, oldObj["rectYellowHeight"], 150);
  // new_letter["rectRedX"] = map(percent, 0, 50, oldObj["rectRedX"], 85);
  // new_letter["rectRedY"] = map(percent, 0, 50, oldObj["rectRedY"], 20);
  // new_letter["rectRedWidth"] = map(percent, 0, 50, oldObj["rectRedWidth"], 60);
  // new_letter["rectRedHeight"] = map(percent, 0, 50, oldObj["rectRedHeight"], 90);
  // new_letter["square1X"] = map(percent, 0, 50, oldObj["square1X"], 115);
  // new_letter["square1Y"] = map(percent, 0, 50, oldObj["square1Y"], 110);
  // new_letter["square2X"] = map(percent, 0, 50, oldObj["square2X"], 115);
  // new_letter["square2Y"] = map(percent, 0, 50, oldObj["square2Y"], 140);
  //
  // //51-100%
  // new_letter["numLineSquares"] = map(percent, 51, 100, 2, newObj["numLineSquares"]);
  // new_letter["lineSquaresX"] = map(percent, 51, 100, 85, newObj["lineSquaresX"]);
  // new_letter["lineSquaresY"] = map(percent, 51, 100, 110, newObj["lineSquaresY"]);
  // new_letter["rectYellowX"] = map(percent, 51, 100, 55, newObj["rectYellowX"]);
  // new_letter["rectYellowY"] = map(percent, 51, 100, 20, newObj["rectYellowY"]);
  // new_letter["rectYellowWidth"] = map(percent, 51, 100, 30, newObj["rectYellowWidth"]);
  // new_letter["rectYellowHeight"] = map(percent, 51, 100, 150, newObj["rectYellowHeight"]);
  // new_letter["rectRedX"] = map(percent, 51, 100, 85, newObj["rectRedX"]);
  // new_letter["rectRedY"] = map(percent, 51, 100, 20, newObj["rectRedY"]);
  // new_letter["rectRedWidth"] = map(percent, 51, 100, 60, newObj["rectRedWidth"]);
  // new_letter["rectRedHeight"] = map(percent, 51, 100, 90, newObj["rectRedHeight"]);
  // new_letter["square1X"] = map(percent, 51, 100, 115, newObj["square1X"]);
  // new_letter["square1Y"] = map(percent, 51, 100, 110, newObj["square1Y"]);
  // new_letter["square2X"] = map(percent, 51, 100, 115, newObj["square2X"]);
  // new_letter["square2Y"] = map(percent, 51, 100, 140, newObj["square2Y"]);

  //Grid to letter
  new_letter["numLineSquares"] = map(percent, 0, 100, 2, newObj["numLineSquares"]);
  new_letter["lineSquaresX"] = map(percent, 0, 100, 85, newObj["lineSquaresX"]);
  new_letter["lineSquaresY"] = map(percent, 0, 100, 110, newObj["lineSquaresY"]);
  new_letter["rectYellowX"] = map(percent, 0, 100, 55, newObj["rectYellowX"]);
  new_letter["rectYellowY"] = map(percent, 0, 100, 20, newObj["rectYellowY"]);
  new_letter["rectYellowWidth"] = map(percent, 0, 100, 30, newObj["rectYellowWidth"]);
  new_letter["rectYellowHeight"] = map(percent, 0, 100, 150, newObj["rectYellowHeight"]);
  new_letter["rectRedX"] = map(percent, 0, 100, 85, newObj["rectRedX"]);
  new_letter["rectRedY"] = map(percent, 0, 100, 20, newObj["rectRedY"]);
  new_letter["rectRedWidth"] = map(percent, 0, 100, 60, newObj["rectRedWidth"]);
  new_letter["rectRedHeight"] = map(percent, 0, 100, 90, newObj["rectRedHeight"]);
  new_letter["square1X"] = map(percent, 0, 100, 115, newObj["square1X"]);
  new_letter["square1Y"] = map(percent, 0, 100, 110, newObj["square1Y"]);
  new_letter["square2X"] = map(percent, 0, 100, 115, newObj["square2X"]);
  new_letter["square2Y"] = map(percent, 0, 100, 140, newObj["square2Y"]);


  // // New letter two step
  // let interpolChar = getObjFromChar("interpol");
  //
  // //0-50%
  // new_letter["numLineSquares"] = map(percent, 0, 50, oldObj["numLineSquares"], interpolChar["numLineSquares"]);
  // new_letter["lineSquaresX"] = map(percent, 0, 50, oldObj["lineSquaresX"], interpolChar["lineSquaresX"]);
  // new_letter["lineSquaresY"] = map(percent, 0, 50, oldObj["lineSquaresY"], interpolChar["lineSquaresY"]);
  // new_letter["rectYellowX"] = map(percent, 0, 50, oldObj["rectYellowX"], interpolChar["rectYellowX"]);
  // new_letter["rectYellowY"] = map(percent, 0, 50, oldObj["rectYellowY"], interpolChar["rectYellowY"]);
  // new_letter["rectYellowWidth"] = map(percent, 0, 50, oldObj["rectYellowWidth"], interpolChar["rectYellowWidth"]);
  // new_letter["rectYellowHeight"] = map(percent, 0, 50, oldObj["rectYellowHeight"], interpolChar["rectYellowHeight"]);
  // new_letter["rectRedX"] = map(percent, 0, 50, oldObj["rectRedX"], interpolChar["rectRedX"]);
  // new_letter["rectRedY"] = map(percent, 0, 50, oldObj["rectRedY"], interpolChar["rectRedY"]);
  // new_letter["rectRedWidth"] = map(percent, 0, 50, oldObj["rectRedWidth"], interpolChar["rectRedWidth"]);
  // new_letter["rectRedHeight"] = map(percent, 0, 50, oldObj["rectRedHeight"], interpolChar["rectRedHeight"]);
  // new_letter["square1X"] = map(percent, 0, 50, oldObj["square1X"], interpolChar["square1X"]);
  // new_letter["square1Y"] = map(percent, 0, 50, oldObj["square1Y"], interpolChar["square1Y"]);
  // new_letter["square2X"] = map(percent, 0, 50, oldObj["square2X"], interpolChar["square2X"]);
  // new_letter["square2Y"] = map(percent, 0, 50, oldObj["square2Y"], interpolChar["square2Y"]);
  //
  // //51-100%
  // new_letter["numLineSquares"] = map(percent, 51, 100, interpolChar["numLineSquares"], newObj["numLineSquares"]);
  // new_letter["lineSquaresX"] = map(percent, 51, 100, interpolChar["lineSquaresX"], newObj["lineSquaresX"]);
  // new_letter["lineSquaresY"] = map(percent, 51, 100, interpolChar["lineSquaresY"], newObj["lineSquaresY"]);
  // new_letter["rectYellowX"] = map(percent, 51, 100, interpolChar["rectYellowX"], newObj["rectYellowX"]);
  // new_letter["rectYellowY"] = map(percent, 51, 100, interpolChar["rectYellowY"], newObj["rectYellowY"]);
  // new_letter["rectYellowWidth"] = map(percent, 51, 100, interpolChar["rectYellowWidth"], newObj["rectYellowWidth"]);
  // new_letter["rectYellowHeight"] = map(percent, 51, 100, interpolChar["rectYellowHeight"], newObj["rectYellowHeight"]);
  // new_letter["rectRedX"] = map(percent, 51, 100, interpolChar["rectRedX"], newObj["rectRedX"]);
  // new_letter["rectRedY"] = map(percent, 51, 100, interpolChar["rectRedY"], newObj["rectRedY"]);
  // new_letter["rectRedWidth"] = map(percent, 51, 100, interpolChar["rectRedWidth"], newObj["rectRedWidth"]);
  // new_letter["rectRedHeight"] = map(percent, 51, 100, interpolChar["rectRedHeight"], newObj["rectRedHeight"]);
  // new_letter["square1X"] = map(percent, 51, 100, interpolChar["square1X"], newObj["square1X"]);
  // new_letter["square1Y"] = map(percent, 51, 100, interpolChar["square1Y"], newObj["square1Y"]);
  // new_letter["square2X"] = map(percent, 51, 100, interpolChar["square2X"], newObj["square2X"]);
  // new_letter["square2Y"] = map(percent, 51, 100, interpolChar["square2Y"], newObj["square2Y"]);

  return new_letter;
}

var swapWords = [
  "DE STIJL",
  "MONDRIAN",
  "ARTWORKS",
  "PAINTERS"
]
