/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFA"
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* Constants for letters */
const strokeColor = "#000000"; // Colour of outlines of letters
const redColour = "#ff4242";
const blueColour = "#79d8f2";
const yellowColour = "#fcfa58";
const squareSize = 30; // Width of white squares

/* Constants for background canvases */
const lightGreyColour = "#e7e8e0"; // Grey for fill of canvas
const darkGreyColour = "#afb0ab"; // Grey for border of canvas, nail and strings


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // Relative position of letters
  let posx = -50;
  let posy = 30;

  // White square 1 parameters
  let square1X = posx + letterData["square1X"]; // X position of one white square
  let square1Y = posy + letterData["square1Y"]; // Y position of one white square

  // White square 2 parameters
  let square2X = posx + letterData["square2X"]; // X position of the other white square
  let square2Y = posy + letterData["square2Y"]; // Y position of the other white square

  // Yellow rectangle parameters
  let rectYellowX = posx + letterData["rectYellowX"]; // X position of the yellow rectangle
  let rectYellowY = posy + letterData["rectYellowY"]; // Y position of the yellow rectangle
  let rectYellowWidth = letterData["rectYellowWidth"]; // Width of the yellow rectangle
  let rectYellowHeight = letterData["rectYellowHeight"]; // Height of the yellow rectangle

  // Red rectangle parameters
  let rectRedX = posx + letterData["rectRedX"]; // X position of the red rectangle
  let rectRedY = posy + letterData["rectRedY"]; // Y position of the red rectangle
  let rectRedWidth = letterData["rectRedWidth"]; // Width of the red rectangle
  let rectRedHeight = letterData["rectRedHeight"]; // Height of the red rectangle

  // Square stack parameters
  let numLineSquares = letterData["numLineSquares"]; // Number of squares in the stack of squares
  let lineSquaresX = posx + letterData["lineSquaresX"]; // X position of the stack of squares
  let lineSquaresY = posy + letterData["lineSquaresY"]; // Y position of the stack of squares


  //DRAW CANVAS
  drawCanvas();


  //DRAW LETTER
  strokeWeight(4);
  stroke(strokeColor);

  // Two white squares
  fill(255);
  rect(square1X, square1Y, squareSize, squareSize);
  rect(square2X, square2Y, squareSize, squareSize);

  // Stack of white squares with one blue square
  for (i = 0; i < numLineSquares; i++) {
    // If the square is the second one being drawn, make it blue. Otherwise make it white.
    if (i == 1) {
      fill(blueColour);
    }
    else {
      fill(255);
    }

    rect(lineSquaresX, lineSquaresY + squareSize * i, squareSize, squareSize);
  }

  // Draw the yellow rectangle
  fill(yellowColour);
  rect(rectYellowX, rectYellowY, rectYellowWidth, rectYellowHeight);

  // Draw the red rectangle
  fill(redColour);
  rect(rectRedX, rectRedY, rectRedWidth, rectRedHeight);

}


/*
 * Draw the grey canvas behind the letter.
 */
function drawCanvas() {
  // Nail dot
  stroke(darkGreyColour);
  fill(darkGreyColour);
  ellipse(50, -20, 5, 5);

  // Strings
  strokeWeight(2);
  line(50, -20, 20, 10);
  line(50, -20, 80, 10);

  // Canvas
  stroke(lightGreyColour);
  fill(lightGreyColour);
  rect(-5, 10, 110, 230);

  // Border at top and bottom of canvas
  strokeWeight(4);
  stroke(darkGreyColour);
  line(-5, 10, 105, 10);
  line(-5, 240, 110, 240);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  let interpolChar = getObjFromChar("interpol"); // Get the character to start the interpolation with

  // Interpolate between the interpolation character and the new letter
  new_letter["numLineSquares"] = map(percent, 0, 100, interpolChar["numLineSquares"], newObj["numLineSquares"]);
  new_letter["lineSquaresX"] = map(percent, 0, 100, interpolChar["lineSquaresX"], newObj["lineSquaresX"]);
  new_letter["lineSquaresY"] = map(percent, 0, 100, interpolChar["lineSquaresY"], newObj["lineSquaresY"]);
  new_letter["rectYellowX"] = map(percent, 0, 100, interpolChar["rectYellowX"], newObj["rectYellowX"]);
  new_letter["rectYellowY"] = map(percent, 0, 100, interpolChar["rectYellowY"], newObj["rectYellowY"]);
  new_letter["rectYellowWidth"] = map(percent, 0, 100, interpolChar["rectYellowWidth"], newObj["rectYellowWidth"]);
  new_letter["rectYellowHeight"] = map(percent, 0, 100, interpolChar["rectYellowHeight"], newObj["rectYellowHeight"]);
  new_letter["rectRedX"] = map(percent, 0, 100, interpolChar["rectRedX"], newObj["rectRedX"]);
  new_letter["rectRedY"] = map(percent, 0, 100, interpolChar["rectRedY"], newObj["rectRedY"]);
  new_letter["rectRedWidth"] = map(percent, 0, 100, interpolChar["rectRedWidth"], newObj["rectRedWidth"]);
  new_letter["rectRedHeight"] = map(percent, 0, 100, interpolChar["rectRedHeight"], newObj["rectRedHeight"]);
  new_letter["square1X"] = map(percent, 0, 100, interpolChar["square1X"], newObj["square1X"]);
  new_letter["square1Y"] = map(percent, 0, 100, interpolChar["square1Y"], newObj["square1Y"]);
  new_letter["square2X"] = map(percent, 0, 100, interpolChar["square2X"], newObj["square2X"]);
  new_letter["square2Y"] = map(percent, 0, 100, interpolChar["square2Y"], newObj["square2Y"]);

  return new_letter;
}

var swapWords = [
  "DE STIJL",
  "ARTWORKS",
  "PAINTERS",
  "MONDRIAN",
  "12345678"
]
