const colour_LightSquare = "#ededed";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
//const colorBack    = "#333333";
const colorStroke  = "#233f11";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  var posx = 0
  var posy = 75
  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];

  let arc2Start = letterData["arc2Start"];
  let arc2Finish = letterData["arc2Finish"];

  let arcX = posx+25
  let arcY= posy+25
  let arc2X= posx+75


  angleMode (DEGREES);

//white square
  fill (colour_LightSquare);
  rect (posx, posy, 100, 50);

noFill ();
stroke(1);
strokeWeight (1);
ellipse (arcX, arcY, 35,35);
ellipse (arc2X, arcY, 35,35);

strokeWeight(5);
arc(arcX, arcY, 35, 35, arcStart , arcFinish);
arc(arc2X, arcY, 35, 35, arc2Start , arc2Finish);

noStroke ();
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