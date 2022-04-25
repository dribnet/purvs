/* these are optional special variables which will change the system */
var systemBackgroundColor = "#202945";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
// colours
const backgroundColor = "#202945"; // dark navy
const darkBlue = "#0c4c63";
const lightBlue = "#42cdff";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for the arch angle and the position of the two lines
  let arcStartA = letterData["arcStartAngle"];
  let arcStopA = letterData["arcStopAngle"];

  // horizontal line
  let L1Xstartcoord = letterData["Line1_X_startcoord"];
  let L1Xstopcoord = letterData["Line1_X_stopcoord"];
  let horizLineY = letterData["horizontalLineY"];

  // x,y start point coordinates of line 2
  let vertLineX = letterData["verticalLineX"];
  let L2Ystartcoord = letterData["Line2_Y_startcoord"];
  let L2Ystopcoord = letterData["Line2_Y_stopcoord"];

  // draw
  angleMode(DEGREES);
  const archSize = 100;

  // horizontal line
  stroke(lightBlue);
  strokeWeight(8);
  line(L1Xstartcoord, horizLineY, L1Xstopcoord, horizLineY);

  // vertical line
  stroke(lightBlue);
  strokeWeight(8);
  line(vertLineX, L2Ystartcoord, vertLineX, L2Ystopcoord);

  stroke(lightBlue);
  strokeWeight(8);
  noFill();
  arc(50, 100, archSize, archSize, arcStartA, arcStopA);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
