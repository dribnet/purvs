/* these are optional special variables which will change the system */
var systemBackgroundColor = "#292929";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#292929";
const gold  = "#f5ce42";
const black  = "#0d0d0d";
const white = "ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
  let size = letterData["size"];
  let size2 = size*2/3;
  let size3 = size2/2;
  let posx = 50;
  let posy = 125;
  let pos2x = posx  + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];

  // draw two circles

  //Ellipse 1
  fill(backgroundColor)
  strokeWeight(3);
  stroke(gold);
  ellipse(posx, posy, size, size);

  //Ellipse 2
  strokeWeight(4);
  stroke(black);
  ellipse(pos2x, pos2y, size2, size2);

  //Ellipse
  noStroke();
  fill(white);
  ellipse(pos3x, pos3y, size3, size3);
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
