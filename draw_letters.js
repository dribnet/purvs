/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffcd6";
var systemLineColor = "#FFFFFF";
var systemBoxColor = "#FFFFFF";

/* internal constants */
// #fffcd6 Yellow -------------------------------------
// #a091ff blue -------------------
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

const strokeColor = "#000000";
const translatex = 50;
const translatey = 100;
function drawLetter(letterData) {
  // color/stroke setup
  let sw = letterData["SW"];
  let startx = letterData["startx"];
  let starty = letterData["starty"];
  let endx = letterData["endx"];
  let endy = letterData["endy"];
  // let SW = letterData["SW"];

  let startx2 = letterData["startx2"];
  let starty2 = letterData["starty2"];
  let endx2 = letterData["endx2"];
  let endy2 = letterData["endy2"];
  // let SW2 = letterData["SW2"];

  let startx3 = letterData["startx3"];
  let starty3 = letterData["starty3"];
  let endx3 = letterData["endx3"];
  let endy3 = letterData["endy3"];

  let startx4 = letterData["startx4"];
  let starty4 = letterData["starty4"];
  let endx4 = letterData["endx4"];
  let endy4 = letterData["endy4"];

push();
  translate(translatex,translatey);
  stroke(strokeColor);
  strokeWeight(4);
  // drawing size chaning blue line 
  push();
  stroke('#76c8ff');
  // strokeWeight(80);
  strokeWeight(sw);
  line(startx, starty, endx, endy);
  pop();
 // drawing blue Line2
 push();
  stroke('#76c8ff');
  strokeWeight(30);
  line(startx2, starty2, endx2, endy2);
  pop();
 // drawing yellow Line3
 push();
  stroke('#fffcd6');
  strokeWeight(30);
  line(startx3, starty3, endx3, endy3);
  pop();
  // drawing light blue line 4
  push();
  stroke('#c6f4ff');
  strokeWeight(15);
  line(startx4, starty4, endx4, endy4);
  pop();
  
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["startx"] = map(percent, 0, 100, oldObj["startx"], newObj["startx"]);
  new_letter["starty"] = map(percent, 0, 100, oldObj["starty"], newObj["starty"]);
  new_letter["endx"] = map(percent, 0, 100, oldObj["endx"], newObj["endx"]);
  new_letter["endy"] = map(percent, 0, 100, oldObj["endy"], newObj["endy"]);
  new_letter["SW"] = map(percent, 0, 100, oldObj["SW"], newObj["SW"]);

  new_letter["startx2"] = map(percent, 0, 100, oldObj["startx2"], newObj["startx2"]);
  new_letter["starty2"] = map(percent, 0, 100, oldObj["starty2"], newObj["starty2"]);
  new_letter["endx2"] = map(percent, 0, 100, oldObj["endx2"], newObj["endx2"]);
  new_letter["endy2"] = map(percent, 0, 100, oldObj["endy2"], newObj["endy2"]);
 // new_letter["SW2"] = map(percent, 0, 100, oldObj["SW2"], newObj["SW2"]);

  new_letter["startx3"] = map(percent, 0, 100, oldObj["startx3"], newObj["startx3"]);
  new_letter["starty3"] = map(percent, 0, 100, oldObj["starty3"], newObj["starty3"]);
  new_letter["endx3"] = map(percent, 0, 100, oldObj["endx3"], newObj["endx3"]);
  new_letter["endy3"] = map(percent, 0, 100, oldObj["endy3"], newObj["endy3"]);

  new_letter["startx4"] = map(percent, 0, 100, oldObj["startx4"], newObj["startx4"]);
  new_letter["starty4"] = map(percent, 0, 100, oldObj["starty4"], newObj["starty4"]);
  new_letter["endx4"] = map(percent, 0, 100, oldObj["endx4"], newObj["endx4"]);
  new_letter["endy4"] = map(percent, 0, 100, oldObj["endy4"], newObj["endy4"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]