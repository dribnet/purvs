// const colorFront1  = "#505050";
// const colorFront2  = "#e0a3a3";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();

  // determine parameters for second circle
  let size1 = letterData["size"];
  let pos1x = letterData["t1x"];
  let pos1y = letterData["t1y"];
  let pos2x = letterData["t2x"];
  let pos2y = letterData["t2y"];
  let pos3x = letterData["t3x"];
  let pos3y = letterData["t3y"];
  let pos4x = letterData["t4x"];
  let pos4y = letterData["t4y"];
  let pos5x = letterData["t5x"];
  let pos5y = letterData["t5y"];
  let pos6x = letterData["t6x"];
  let pos6y = letterData["t6y"];
  let pos7x = letterData["e1x"];
  let pos7y = letterData["e1y"];
  let pos8x = letterData["e2x"];
  let pos8y = letterData["e2y"];
  let pos9x = letterData["e3x"];
  let pos9y = letterData["e3y"];
  let pos10x = letterData["e4x"];
  let pos10y = letterData["e4y"];
  let pos11x = letterData["r1x"];
  let pos11y = letterData["r1y"];
  let pos12x = letterData["r2x"];
  let pos12y = letterData["r2y"];

  fill(224, 163, 163, 180);
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  if ( (typeof pos4x !== 'undefined') &&
       (typeof pos4y !== 'undefined') &&
       (typeof pos5x !== 'undefined') &&
       (typeof pos5y !== 'undefined') &&
       (typeof pos6x !== 'undefined') &&
       (typeof pos6y !== 'undefined')) {
    triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  }

  fill(80, 200);
  ellipse(pos7x, pos7y, 20, 20);
  if ( (typeof pos8x !== 'undefined') &&
       (typeof pos8y !== 'undefined')) {
    ellipse(pos8x, pos8y, 20, 20);    
  }
  if ( (typeof pos9x !== 'undefined') &&
       (typeof pos9x !== 'undefined')) {
    ellipse(pos9x, pos9y, 20, 20);
  }
  if ( (typeof pos10x !== 'undefined') &&
       (typeof pos10x !== 'undefined')) {
    ellipse(pos10x, pos10y, 20, 20);
  }

  rect(pos11x, pos11y, size1, 15);
  if ( (typeof pos12x !== 'undefined') &&
       (typeof pos12y !== 'undefined')) {
    rect(pos12x, pos12y, size1, 15);
  }

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["t1x"] = map(percent, 0, 100, oldObj["t1x"], newObj["t1x"]);
  new_letter["t1y"] = map(percent, 0, 100, oldObj["t1y"], newObj["t1y"]);
  new_letter["t2x"] = map(percent, 0, 100, oldObj["t2x"], newObj["t2x"]);
  new_letter["t2y"] = map(percent, 0, 100, oldObj["t2y"], newObj["t2y"]);
  new_letter["t3x"] = map(percent, 0, 100, oldObj["t3x"], newObj["t3x"]);
  new_letter["t3y"] = map(percent, 0, 100, oldObj["t3y"], newObj["t3y"]);
  new_letter["t4x"] = map(percent, 0, 100, oldObj["t4x"], newObj["t4x"]);
  new_letter["t4y"] = map(percent, 0, 100, oldObj["t4y"], newObj["t4y"]);
  new_letter["t5x"] = map(percent, 0, 100, oldObj["t5x"], newObj["t5x"]);
  new_letter["t5y"] = map(percent, 0, 100, oldObj["t5y"], newObj["t5y"]);
  new_letter["t6x"] = map(percent, 0, 100, oldObj["t6x"], newObj["t6x"]);
  new_letter["t6y"] = map(percent, 0, 100, oldObj["t6y"], newObj["t6y"]);
  new_letter["e1x"] = map(percent, 0, 100, oldObj["e1x"], newObj["e1x"]);
  new_letter["e1y"] = map(percent, 0, 100, oldObj["e1y"], newObj["e1y"]);
  new_letter["e2x"] = map(percent, 0, 100, oldObj["e2x"], newObj["e2x"]);
  new_letter["e2y"] = map(percent, 0, 100, oldObj["e2y"], newObj["e2y"]);
  new_letter["e3x"] = map(percent, 0, 100, oldObj["e3x"], newObj["e3x"]);
  new_letter["e3y"] = map(percent, 0, 100, oldObj["e3y"], newObj["e3y"]);
  new_letter["e4x"] = map(percent, 0, 100, oldObj["e4x"], newObj["e4x"]);
  new_letter["e4y"] = map(percent, 0, 100, oldObj["e4y"], newObj["e4y"]);
  new_letter["r1x"] = map(percent, 0, 100, oldObj["r1x"], newObj["r1x"]);
  new_letter["r1y"] = map(percent, 0, 100, oldObj["r1y"], newObj["r1y"]);
  new_letter["r2x"] = map(percent, 0, 100, oldObj["r2x"], newObj["r2x"]);
  new_letter["r2y"] = map(percent, 0, 100, oldObj["r2y"], newObj["r2y"]);


  let new_percent = 0;
  if (percent < 30){
    new_letter["size"] = oldObj["size"];
  }
  else if(percent > 60){
    new_letter["size"] = newObj["size"];
  }
  else {
    new_letter["size"] = map (percent, 40, 60, oldObj["size"], newObj["size"]);
  }
  return new_letter;

}


var swapWords = [
  "MORSE CO",
  "TRIANGLE",
  "01234567"
]