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
  const defaultStroke = 8

  // glow line constants
  const glowBlue = color(66, 198, 255, 50);
  const glowStroke = 18

  // horizontal line
  stroke(lightBlue);
  strokeWeight(defaultStroke);
  line(L1Xstartcoord, horizLineY, L1Xstopcoord, horizLineY);

  // horizontal line glow
  stroke(glowBlue);
  strokeWeight(glowStroke);
  line(L1Xstartcoord, horizLineY, L1Xstopcoord, horizLineY);

  // vertical line
  stroke(lightBlue);
  strokeWeight(defaultStroke);
  line(vertLineX, L2Ystartcoord, vertLineX, L2Ystopcoord);

  // vertical line glow
  stroke(glowBlue);
  strokeWeight(glowStroke);
  line(vertLineX, L2Ystartcoord, vertLineX, L2Ystopcoord);

  // arc
  stroke(lightBlue);
  strokeWeight(defaultStroke);
  noFill();
  arc(50, 100, archSize, archSize, arcStartA, arcStopA);

  // arc glow
  stroke(glowBlue);
  strokeWeight(glowStroke);
  noFill();
  arc(50, 100, archSize, archSize, arcStartA, arcStopA);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcStartAngle"] = map(percent, 0, 100, oldObj["arcStartAngle"], newObj["arcStartAngle"]);
  new_letter["arcStopAngle"] = map(percent, 0, 100, oldObj["arcStopAngle"], newObj["arcStopAngle"]);
  new_letter["Line1_X_startcoord"] = map(percent, 0, 100, oldObj["Line1_X_startcoord"], newObj["Line1_X_startcoord"]);
  new_letter["Line1_X_stopcoord"] = map(percent, 0, 100, oldObj["Line1_X_stopcoord"], newObj["Line1_X_stopcoord"]);
  new_letter["horizontalLineY"] = map(percent, 0, 100, oldObj["horizontalLineY"], newObj["horizontalLineY"]);
  new_letter["verticalLineX"] = map(percent, 0, 100, oldObj["verticalLineX"], newObj["verticalLineX"]);
  new_letter["Line2_Y_startcoord"] = map(percent, 0, 100, oldObj["Line2_Y_startcoord"], newObj["Line2_Y_startcoord"]);
  new_letter["Line2_Y_stopcoord"] = map(percent, 0, 100, oldObj["Line2_Y_stopcoord"], newObj["Line2_Y_stopcoord"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
