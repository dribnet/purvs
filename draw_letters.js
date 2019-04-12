
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  
const colorFront1  = "#efab4b";
const colorFront2  = "#d9ef4b";
const colorStroke  = "#d9ef4b";
const colorFront3  = "#efab4b";


  let pos1x = letterData["sq1x"];
  let pos1y = letterData["sq1y"];
  let pos2x= letterData["sq2x"];
  let pos2y = letterData["sq2y"];
  let pos3x= letterData["rect1x"];
  let pos3y = letterData["rect1y"];
  let pos4x= letterData["rect2x"];
  let pos4y = letterData["rect2y"];
  let pos5x = letterData["rect3x"]
  let pos5y = letterData["rect3y"]
push();
translate(50,100);
scale(0.6);
  stroke(colorStroke);
  strokeWeight(2);

  fill(colorFront3);
  rect(pos5x, pos5y, 150, 200);
  
  fill(colorFront2);

  rect(pos1x, pos1y, 50, 50);
  rect(pos2x, pos2y, 50, 50);
  rect(pos3x, pos3y, 100, 50);
  rect(pos4x, pos4y, 50, 100);
  
pop(); 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sq1x"]    = map(percent, 0, 100, oldObj["sq1x"], newObj["sq1x"]);
  new_letter["sq1y"] = map(percent, 0, 100, oldObj["sq1y"], newObj["sq1y"]);
  new_letter["sq2x"] = map(percent, 0, 100, oldObj["sq2x"], newObj["sq2x"]);
  new_letter["sq2y"] = map(percent, 0, 100, oldObj["sq2y"], newObj["sq2y"]);
  new_letter["rect1x"] = map(percent, 0, 100, oldObj["rect1x"], newObj["rect1y"]);
  new_letter["rect1y"] = map(percent, 0, 100, oldObj["rect1y"], newObj["rect1y"]);
  new_letter["rect2x"] = map(percent, 0, 100, oldObj["rect2x"], newObj["rect2x"]);
  new_letter["rect2y"] = map(percent, 0, 100, oldObj["rect2y"], newObj["rect2y"]);
  new_letter["rect3x"] = map(percent, 0, 100, oldObj["rect3x"], newObj["rect3x"]);
  new_letter["rect3y"] = map(percent, 0, 100, oldObj["rect3y"], newObj["rect3y"]);
  return new_letter;
}

var swapWords = [
  "ALL DONE",
  "ALEX B",
  "YAYAYAY"
]