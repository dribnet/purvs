/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */

const darkRed = "#9e0d03";
const midRed = "#eb4034";
const lightRed = "#ff6257";
const lightestRed = "#ff9d96";
const darkBlue = "#006fff";
const midBlue = "#6babff";
const lightBlue = "#b3d4ff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //setup the sketch
  angleMode(DEGREES);

//parameters for the size of the circles
  let size2 = letterData["size"];
  let size3 = letterData["size2"];
  let size4 = letterData["size3"];

//parameters for the darkest circle
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

//parameters for the mid circle
  let pos3x = letterData["offsetx2"];
  let pos3y = letterData["offsety2"];

//parameters for the lightest circle
  let pos4x = letterData["offsetx3"];
  let pos4y = letterData["offsety3"];

  noStroke()

  // draw the four circles
  fill(darkRed);
  ellipse(50, 150, 100, 100);

  fill(midRed);
  ellipse(pos2x, pos2y, size2, size2);

  fill(lightRed);
  ellipse(pos3x, pos3y, size3, size3);

  fill(lightestRed);
  ellipse(pos4x, pos4y, size4, size4);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  return new_letter;
}

var swapWords = [
  "BLOODIED",
  "CLOTTED!",
  "SLASHED!",
  "ANTIBODY"
]