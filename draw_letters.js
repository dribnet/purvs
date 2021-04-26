/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
//const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const darkRed = "#4f0000"
const lightRed = "#cc0000"

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  let size = letterData["size"];

  let rec1x = letterData["rx1"];
  let rec1y = letterData["ry1"];

  let rec2x = letterData["rx2"]
  let rec2y = letterData["ry2"]

  let rec3x = letterData["rx3"]
  let rec3y = letterData["ry3"]

  let rec4x = letterData["rx4"]
  let rec4y = letterData["ry4"]

  let rec5x = letterData["rx5"]
  let rec5y = letterData["ry5"]

  let rec6x = letterData["rx6"]
  let rec6y = letterData["ry6"]

  let rec7x = letterData["rx7"]
  let rec7y = letterData["ry7"]


  // draw two circles
  noFill();
  //rectMode(CENTER)
  noStroke()
  rect(0, 0, 80, 80);

  stroke(strokeColor)
  rect(rec1x, rec1y, size, size);
  rect(rec2x, rec2y, size, size);
  rect(rec3x, rec3y, size, size);
  rect(rec4x, rec4y, size, size);
  rect(rec5x, rec5y, size, size);
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]