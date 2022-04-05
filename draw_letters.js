/* these are optional special variables which will change the system */
var systemBackgroundColor = "#f2d4ff";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
// colours
const backgroundColor = "#f2d4ff"; // pastel purple

const darkPurple = "#7a1da3";
const lightPurple = "#cb4fff";
const golden = "#ffc800";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  const archSize = 100;

  // determine parameters for the arch angle and the position of the two lines
  let arcStopA = letterData["arcStopAngle"];

  // x,y start point coordinates of line 1
  let L1Xstartcoord = letterData["Line1_X_startcoord"];
  let L1Ystartcoord = letterData["Line1_Y_startcoord"];

  // x,y stop point coordinates of line 1
  let L1Xstopcoord = letterData["Line1_X_stopcoord"];
  let L1Ystopcoord = letterData["Line1_Y_stopcoord"];

  // x,y start point coordinates of line 2
  let L2Xstartcoord = letterData["Line2_X_startcoord"];
  let L2Ystartcoord = letterData["Line2_Y_startcoord"];

  // x,y stop point coordinates of line 2
  let L2Xstopcoord = letterData["Line2_X_stopcoord"];
  let L2Ystopcoord = letterData["Line2_Y_stopcoord"];

  stroke(lightPurple);
  strokeWeight(8);
  line(L1Xstartcoord, L1Ystartcoord, L1Xstopcoord, L1Ystopcoord);
  line(L2Xstartcoord, L2Ystartcoord, L2Xstopcoord, L2Ystopcoord);

  stroke(golden);
  strokeWeight(10);
  noFill();
  arc(50, 150, archSize, archSize, 0, arcStopA);

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
