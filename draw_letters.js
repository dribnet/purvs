const colorFront1  = "#3A606E"; //navy
const colorFront2  = "#E5C2BC"; // pink
 //const colorStroke  = "##ffffff";
const colorStroke  = "#E5C2BC";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  
    // determine parameters for the circle and arc
  let size2 = letterData["height"];
  let size1 = letterData["width"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 110 + letterData["offsety"];
  let start =letterData["angleStart"];
  let finish =letterData["angleStop"];
  let ellipseYpos = letterData["ellipseY"];

    // draw circle
  stroke(colorStroke);
  strokeWeight(5);
  fill(colorFront1);
  ellipse(50,ellipseYpos, 90, 90);

  // draw arc
  noStroke();
  fill(colorFront2);
  arc(pos2x, pos2y, size1, size2, start, finish);
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