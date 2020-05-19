const colorFront1  = "#3A606E"; //navy
const colorFront2  = "#E5C2BC"; // pink
const colorFront3 = "#8ACEB4"; //green
 //const colorStroke  = "#ffffff";
const colorStroke  = "#8ACEB4";


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
  let arcHeight = letterData["height"];
  let arcWidth = letterData["width"];
  let posx = 50 + letterData["offsetx"];
  let posy = 110 + letterData["offsety"];
  let start =letterData["angleStart"];
  let finish =letterData["angleStop"];
  let ellipseYpos = letterData["ellipseY"];
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  let rectWidth = letterData["rectW"];
  let rectHeight = letterData["rectH"];


    // draw circle
  stroke(colorStroke);
  strokeWeight(5);
  fill(colorFront1);
  ellipse(50,ellipseYpos, 90, 90);

  //draw rect
    noStroke();
    fill(colorFront3);
    rect(rectX, rectY, rectWidth, rectHeight)

  // draw arc
  fill(colorFront2);
  arc(posx, posy, arcWidth, arcHeight, start, finish);
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