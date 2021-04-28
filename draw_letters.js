/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#5F0820";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //set up the sketch
  rectMode(CORNER);
  // rectMode(CENTER);
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size2"];
  let size4 = letterData["size3"];
  let size5 = letterData["size4"];
  let size6 = letterData["size5"];
  let size7 = letterData["size6"];
  let size8 = letterData["size7"];



  let pos2x = 40  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 40 + letterData["offsetx2"];
  let pos3y = 150 + letterData["offsety2"];
  let pos4x = 40 + letterData["offsetx3"];
  let pos4y = 150 + letterData["offsety3"];
  let pos5x = 40 + letterData["offsetx4"];
  let pos5y = 150 + letterData["offsety4"];
  let pos6x = 40 + letterData["offsetx5"];
  let pos6y = 150 + letterData["offsety5"];
  let pos7x = 40 + letterData["offsetx6"];
  let pos7y = 150 + letterData["offsety6"];
  let pos8x = 40 + letterData["offsetx8"];
  let pos8y = 150 + letterData["offsety8"];


  // draw two circles
  fill(52, 52, 56);
  rect(0, 0, 100, 200);

  fill(255, 255, 255);
  line(100, 50, 100, 100);

  fill(196, 17, 66);
  rect(pos2x, pos2y, size2, size2+30);
  rect(pos3x, pos3y, size3, size3+30);
  rect(pos4x, pos4y, size4, size4+30);
  rect(pos5x, pos5y, size5+30, size5);
  rect(pos6x, pos6y, size6+30, size6);
  rect(pos7x, pos7y, size7, size7+30);
  rect(pos8x, pos8y, size8+30, size8);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size4"]    = map(percent, 0, 100, oldObj["size4"], newObj["size4"]);
  new_letter["size5"]    = map(percent, 0, 100, oldObj["size5"], newObj["size5"]);
  new_letter["size6"]    = map(percent, 0, 100, oldObj["size6"], newObj["size6"]);
  new_letter["size7"]    = map(percent, 0, 100, oldObj["size7"], newObj["size7"]);

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
  return new_letter;

}

var swapWords = [
  "TRAFFIC",
  "EGYPTIAN",
  "PYRAMID"
]