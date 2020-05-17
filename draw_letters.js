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
  // let arcX = posx+25
  // let arcY= posy+25
  // let arc2X= posx+75

  // let ahhxpos1 = xpos1+75;
  // let ahhypos1 = ypos1+25;
  // let ahhxpos2 = xpos2+75;
  // let ahhypos2 = ypos2+25;


  angleMode (DEGREES);

//white square
  fill (colour_LightSquare);
  rect (posx, posy, 100, 50, 5);


// fill(50)
// strokeWeight(5);
// ellipse (55,100,20,20);


noFill ();
strokeCap (SQUARE);
stroke(1);
strokeWeight (0.5);
ellipse (xpos1, ypos1, Size1, Size1);
ellipse (xpos2, ypos2, Size2,Size2);

strokeWeight(4);
arc(xpos1, ypos1, Size1, Size1, arcStart , arcFinish);
arc(xpos2, ypos2, Size2, Size2, arc2Start , arc2Finish);
strokeWeight(arc3opacity);
arc(xpos1, ypos1, Size1, Size1, arc3Start , arc3Finish);

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