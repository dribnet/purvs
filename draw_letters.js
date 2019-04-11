const colorFront1  = "#5F5F5F";
const colorFront2  = "#009366";
const colorStroke  = "#DEC300";

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
  strokeWeight(3);

  // determine parameters

  //parameters of the grey areas
  let pos1x = letterData["pos1x"];
  let pos2x = letterData["pos2x"];
  let pos3x = letterData["pos3x"];
  let pos4x = letterData["pos4x"];

  let pos1y = letterData["pos1y"];
  let pos2y = letterData["pos2y"];
  let pos3y = letterData["pos3y"];
  let pos4y = letterData["pos4y"];
  //parameters of the green-blue areas
  let cryspos1x = letterData["cryspos1x"];
  let cryspos2x = letterData["cryspos2x"];
  let cryspos3x = letterData["cryspos3x"];
  let cryspos4x = letterData["cryspos4x"];

  let cryspos1y = letterData["cryspos1y"];
  let cryspos2y = letterData["cryspos2y"];
  let cryspos3y = letterData["cryspos3y"];
  let cryspos4y = letterData["cryspos4y"];


  // draw letters
  push()
  translate(50, 100)

  fill(colorFront1); //anything of the grey color
  beginShape();
  vertex(pos1x, pos1y)
  vertex(pos2x, pos2y)
  vertex(pos3x, pos3y)
  vertex(pos4x, pos4y)
  vertex(pos1x, pos1y)
  endShape()

  fill(colorFront2); //anything of the green-blue color


  beginShape();
  vertex(cryspos1x, cryspos1y)
  vertex(cryspos2x, cryspos2y)
  vertex(cryspos3x, cryspos3y)
  vertex(cryspos4x, cryspos4y)
  vertex(cryspos1x, cryspos1y)
  endShape()

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["pos1x"] = map(percent, 0, 100, oldObj["pos1x"], newObj["pos1x"]);
  new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
  new_letter["pos3x"] = map(percent, 0, 100, oldObj["pos3x"], newObj["pos3x"]);
  new_letter["pos4x"] = map(percent, 0, 100, oldObj["pos4x"], newObj["pos4x"]);
  new_letter["pos1y"] = map(percent, 0, 100, oldObj["pos1y"], newObj["pos1y"]);
  new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);
  new_letter["pos3y"] = map(percent, 0, 100, oldObj["pos3y"], newObj["pos3y"]);
  new_letter["pos4y"] = map(percent, 0, 100, oldObj["pos4y"], newObj["pos4y"]);
  new_letter["cryspos1x"] = map(percent, 0, 100, oldObj["cryspos1x"], newObj["cryspos1x"]);
  new_letter["cryspos2x"] = map(percent, 0, 100, oldObj["cryspos2x"], newObj["cryspos2x"]);
  new_letter["cryspos3x"] = map(percent, 0, 100, oldObj["cryspos3x"], newObj["cryspos3x"]);
  new_letter["cryspos4x"] = map(percent, 0, 100, oldObj["cryspos4x"], newObj["cryspos4x"]);
  new_letter["cryspos1y"] = map(percent, 0, 100, oldObj["cryspos1y"], newObj["cryspos1y"]);
  new_letter["cryspos2y"] = map(percent, 0, 100, oldObj["cryspos2y"], newObj["cryspos2y"]);
  new_letter["cryspos3y"] = map(percent, 0, 100, oldObj["cryspos3y"], newObj["cryspos3y"]);
  new_letter["cryspos4y"] = map(percent, 0, 100, oldObj["cryspos4y"], newObj["cryspos4y"]);

  return new_letter;
}

var swapWords = [
  "GAIARUNE",
  "OBSELION",
  "ST LAMIA",
]
