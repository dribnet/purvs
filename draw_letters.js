const colorFront1  = "#ff99f3";
const colorFront2  = "#99eeff";
const colorStroke  = "#99eeff";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size1x = letterData["sizeB1x"];
  let size1y = letterData["sizeB1y"];

  let size2x = letterData["sizeB2x"];
  let size2y = letterData["sizeB2y"];

  let posx = 0;
  let posy = 80;

  let pos1x = posx + letterData["posB1x"];
  let pos1y = posy + letterData["posB1y"];

  let pos2x = posx + letterData["posB2x"];
  let pos2y = posy + letterData["posB2y"];

  let pos3x = posx + letterData["posB3x"];
  let pos3y = posy + letterData["posB3y"];

  let pos4x = posx + letterData["posB4x"];
  let pos4y = posy + letterData["posB4y"];


  //Drawing a letter

  //Background base rectangle
  fill(colorFront1);

  rect(posx, posy, 120, 120);

  //Front smaller rectangles
  fill(colorFront2);

  rect(pos1x, pos1y, size1x, size1y);
  rect(pos2x,pos2y, size1x, size1y);
  rect(pos3x, pos3y, size2x,size2y);
  rect(pos4x, pos4y, size2x, size2y);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeB1x"]    = map(percent, 0, 100, oldObj["sizeB1x"], newObj["sizeB1x"]);
  new_letter["sizeB1y"]    = map(percent, 0, 100, oldObj["sizeB1y"], newObj["sizeB1y"]);
   new_letter["sizeB2x"]    = map(percent, 0, 100, oldObj["sizeB2x"], newObj["sizeB2x"]);
  new_letter["sizeB2y"]    = map(percent, 0, 100, oldObj["sizeB2y"], newObj["sizeB2y"]);
   new_letter["posB1x"]    = map(percent, 0, 100, oldObj["posB1x"], newObj["posB1x"]);
  new_letter["posB1y"]    = map(percent, 0, 100, oldObj["posB1y"], newObj["posB1y"]);
     new_letter["posB2x"]    = map(percent, 0, 100, oldObj["posB2x"], newObj["posB2x"]);
  new_letter["posB2y"]    = map(percent, 0, 100, oldObj["posB2y"], newObj["posB2y"]);
     new_letter["posB3x"]    = map(percent, 0, 100, oldObj["posB3x"], newObj["posB3x"]);
  new_letter["posB3y"]    = map(percent, 0, 100, oldObj["posB3y"], newObj["posB3y"]);
     new_letter["posB4x"]    = map(percent, 0, 100, oldObj["posB4x"], newObj["posB4x"]);
  new_letter["posB4y"]    = map(percent, 0, 100, oldObj["posB4y"], newObj["posB4y"]);
  

  return new_letter;
}

var swapWords = [
  "CUBEFONT",
  "NEGATIVE",
  "POSITIVE"
]