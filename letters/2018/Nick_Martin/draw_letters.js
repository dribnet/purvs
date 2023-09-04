const colorFront  = "#199cff";
const colorStroke = "#233f11";
var swapWords = [
"POLYFONT",
"EXTREEM!",
"  RETRO",
"ALPHABET"
]

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let x = 25; 
  let y = 0; 
  // color/stroke setup
  fill(colorFront);
  noStroke();
  //translate(50, 50);

  // determine parameters for second circle
  let pos1x = letterData["offset1x"];
  let pos1y = letterData["offset1y"];
  let pos2x = letterData["offset2x"];
  let pos2y = letterData["offset2y"];
  let pos3x = letterData["offset3x"];
  let pos3y = letterData["offset3y"];
  let pos4x = letterData["offset4x"];
  let pos4y = letterData["offset4y"];

  // draw two circles
  fill(34, 151, 158, 185);
  beginShape();
  vertex(0+x, 0+y);
  vertex(0, 0);
  vertex(pos1x, pos1y);
  vertex(pos2x, pos2y);
  vertex(pos3x, pos3y);
  vertex(pos4x, pos4y);
  endShape(CLOSE);

  fill(230, 167, 1, 185);
  beginShape();
  vertex(5+x, 2+y);
  vertex(5, 2);
  vertex(5+pos1x, 2+pos1y);
  vertex(5+pos2x, 2+pos2y);
  vertex(5+pos3x, 2+pos3y);
  vertex(5+pos4x, 2+pos4y);
  endShape(CLOSE);

  fill(206, 72, 43, 185);
  beginShape();
  vertex(10+x, 4+y);
  vertex(10, 4);
  vertex(10+pos1x, 4+pos1y);
  vertex(10+pos2x, 4+pos2y);
  vertex(10+pos3x, 4+pos3y);
  vertex(10+pos4x, 4+pos4y);
  endShape(CLOSE);
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["offset1x"] = map(percent, 0, 100, oldObj["offset1x"], newObj["offset1x"]);
  new_letter["offset1y"] = map(percent, 0, 100, oldObj["offset1y"], newObj["offset1y"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  return new_letter;
}
