const colour_DarkSquare = "#c9c9c9";
const colour_LightSquare = "#ededed";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
//const colorBack    = "#1c1c1c";
const colorStroke  = "#233f11";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(posx,posy, letterData) {
  // determine parameters for second circle
  //let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let Divide = letterData["DivideHeight"];
  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];

  let arc2Start = letterData["arc2Start"];
  let arc2Finish = letterData["arc2Finish"];

  let arcX = posx+50
  let arcY= posy+50
  let arc2X= posx+150

//black square
  fill (colour_DarkSquare);
  rect (posx, posy, 200, 100);
//white square
  fill (colour_LightSquare);
  rect (posx, pos2y, 200, -Divide);

noFill ();
stroke(5);
strokeWeight (5);
arc(arcX, arcY, 50, 50, arcStart , arcFinish);

arc(arc2X, arcY, 50, 50, arc2Start , arc2Finish);

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