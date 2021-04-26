/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */

const champagnePink  = "#E9707F";
const pink  = "#E9707F";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);

  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // draw two circles
//   fill(darkBlue);
//   ellipse(50, 150, 75, 75);
//   fill(lightBlue);
//   ellipse(pos2x, pos2y, size2, size2);

  angleMode(DEGREES);
  strokeWeight(4);


  //Parameters
  let size = letterData["size"];
  let size1 = letterData["size1"];
  let angle = letterData["angle"];
  let arcSize = letterData["arcSize"];
  let pos1x = letterData["offsetx"];
  let pos1y = letterData["offsety"];
  let pos2x = letterData["offsetx2"];
  let pos2y = letterData["offsety2"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];
  let pos4x = letterData["offsetx4"];
  let pos4y = letterData["offsety4"];
  let pos5x = letterData["offsetx5"];
  let pos5y = letterData["offsety5"];
  let pos6x = letterData["offsetx6"];
  let pos6y = letterData["offsety6"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  //Draw arc
  push();
  fill(pink);
  blendMode(MULTIPLY);
  arc(pos2x+10, pos2y+60, size1+80, size1+50, arcStart, arcEnd);
  arc(pos3x+10, pos3y+60, size1+80, size1+50, arcStart, arcEnd);

  rect(pos4x-5, pos4y+5, size+30, size-10  ,arcSize, arcSize, arcSize, arcSize);
  rect(pos4x-5, pos5y+60, size+30, size-10  ,arcSize, arcSize, arcSize, arcSize);
  pop();

  //Draw rect

  fill(pink);
  // blendMode(MULTIPLY);
  noStroke();

  rect(pos1x-10, pos1y+30, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);
  rect(pos5x+30, pos5y+5, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);
  push();
  fill(champagnePink);
  translate(pos6x, pos6y);
  rotate(angle);
  rect(pos6x+30, pos6y+5, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);
  pop();
  
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