/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FF3737";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */

const red  = "#AF2727";
const yellow  = "#FFE229";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  strokeWeight(4);
  angleMode(DEGREES);

  //Parameters

  //size

  let size = letterData["size"];
  let size1 = letterData["size1"];
  let arcSize = letterData["arcSize"];

  //position

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
  let pos7x = letterData["offsetx7"];
  let pos7y = letterData["offsety7"];

  //angle

  let angle = letterData["angle"];

  //arc
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  //Draw arc

  push();
  noStroke();
  fill(red);
  arc(pos2x+10, pos2y+60, size1+80, size1+50, arcStart, arcEnd);
  arc(pos3x+10, pos3y+60, size1+80, size1+50, arcStart, arcEnd);
  rect(pos4x-5, pos4y+5, size+30, size-10  ,arcSize, arcSize, arcSize, arcSize);
  rect(pos4x-5, pos5y+60, size+30, size-10  ,arcSize, arcSize, arcSize, arcSize);
  pop();

  //Draw rect

  push();
  noStroke();
  fill(red);
  rect(pos1x-10, pos1y+30, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);
  rect(pos5x+30, pos5y+5, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);

  translate(pos6x, pos6y);
  rotate(angle);
  rect(pos6x+30, pos6y+5, size-10, size + 100 ,arcSize, arcSize, arcSize, arcSize);
  pop();

  //Draw star

  push();
  noStroke();
  fill(yellow);
  translate(pos7x, pos7y);
  scale(0.15);
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
  pop();


}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["arcSize"]    = map(percent, 0, 100, oldObj["arcSize"], newObj["arcSize"]);

  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offsetx5"] = map(percent, 0, 100, oldObj["offsetx5"], newObj["offsetx5"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);
  new_letter["offsetx6"] = map(percent, 0, 100, oldObj["offsetx6"], newObj["offsetx6"]);
  new_letter["offsety6"] = map(percent, 0, 100, oldObj["offsety6"], newObj["offsety6"]);
  new_letter["offsetx7"] = map(percent, 0, 100, oldObj["offsetx7"], newObj["offsetx7"]);
  new_letter["offsety7"] = map(percent, 0, 100, oldObj["offsety7"], newObj["offsety7"]);

  new_letter["angle"] = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);

  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]