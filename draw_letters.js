const colour_LightSquare = "#ededed";


const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

function drawLetter(letterData) {
  angleMode (DEGREES);

  let xpos1 = letterData["xpos1"];
  let ypos1 = letterData["ypos1"];
  let xpos2 = letterData["xpos2"];
  let ypos2 = letterData["ypos2"];
  let Size1 = letterData["Size1"];
  let Size2 = letterData["Size2"];

  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];
  let arc2Start = letterData["arc2Start"];
  let arc2Finish = letterData["arc2Finish"];
  let arc3Start = letterData["arc3Start"];
  let arc3Finish = letterData["arc3Finish"];
  let arc3opacity = letterData["arc3opacity"]

//white square
  fill (colour_LightSquare);
  rect (0, 75, 100, 50, 10);
// circles
  noFill ();
  strokeCap (SQUARE);
  stroke(1);
  strokeWeight (0.5);
  ellipse (xpos1, ypos1, Size1, Size1);
  ellipse (xpos2, ypos2, Size2,Size2);
//arcs
  strokeWeight(4);
  arc(xpos1, ypos1, Size1, Size1, arcStart , arcFinish);
  arc(xpos2, ypos2, Size2, Size2, arc2Start , arc2Finish);
  strokeWeight(arc3opacity);
  arc(xpos1, ypos1, Size1, Size1, arc3Start , arc3Finish);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcFinish"] = map(percent, 0, 100, oldObj["arcFinish"], newObj["arcFinish"]);
  new_letter["arc2Start"] = map(percent, 0, 100, oldObj["arc2Start"], newObj["arc2Start"]);
  new_letter["arc2Finish"]    = map(percent, 0, 100, oldObj["arc2Finish"], newObj["arc2Finish"]);
  new_letter["arc3Start"]    = map(percent, 0, 100, oldObj["arc3Start"], newObj["arc3Start"]);
  new_letter["arc3Finish"]    = map(percent, 0, 100, oldObj["arc3Finish"], newObj["arc3Finish"]);
  new_letter["arc3opacity"]    = map(percent, 0, 100, oldObj["arc3opacity"], newObj["arc3opacity"]);
  new_letter["Size1"]    = map(percent, 0, 100, oldObj["Size1"], newObj["Size1"]);
  new_letter["Size2"]    = map(percent, 0, 100, oldObj["Size2"], newObj["Size2"]);
  new_letter["ypos1"]    = map(percent, 0, 100, oldObj["ypos1"], newObj["ypos1"]);
  new_letter["xpos1"]    = map(percent, 0, 100, oldObj["xpos1"], newObj["xpos1"]);
  new_letter["ypos2"]    = map(percent, 0, 100, oldObj["ypos2"], newObj["ypos2"]);
  new_letter["xpos2"]    = map(percent, 0, 100, oldObj["xpos2"], newObj["xpos2"]);
  return new_letter;
}

var swapWords = [
  "HEPTFONT",
  "TOGETHER",
  "ISBETTER"
]