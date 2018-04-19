const colorFront  = "#033806";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 
function drawLetter(letterData) {
  //rotation in degrees (for tilt variable)
  angleMode(DEGREES);
  
  /*
  //show bounding box
  noFill();
  stroke('red');
  rect(0, 0, 100, 200);
  */

  // color/stroke setup
  const colorFront  = "#033806";//green rgb(3, 56, 6)
  const colorBack   = "#f5f4f7";//sliver rgb(245, 244, 247)
  const colorStroke = "#233f11";//darkgreen rgb(35, 63, 17)
  fill(colorFront);
  noStroke();

  let posx=60; //60
  let posy=250; //250
  
  // determine parameters for second circle
  let sizeR1 = letterData["size1"];
  let sizeR3 = letterData["size3"];
  let posR1x = posx + letterData["offsetx1"];
  let posR1y = posy + letterData["offsety1"];
  let posR2x = posx + letterData["offsetx2"];
  let posR2y = posy + letterData["offsety2"];
  let posR3x = posx + letterData["offsetx3"];
  let posR3y = posy + letterData["offsety3"];
  let posR4x = posx + letterData["offsetx4"];
  let posR4y = posy + letterData["offsety4"];
  let R1 = letterData["tilt1"];
  let R2 = letterData["tilt2"];
  let R3 = letterData["tilt3"];
  let R4 = letterData["tilt4"];

  // draw four triangles
  push();
  scale(0.6);

  push();
  fill(53, 124, 59, 180);
  translate(posR1x, posR1y);
  scale(sizeR1);
  rotate(R1);
  triangle(0, 0, -50, 0, 50, -150);
  pop();

  push();
  fill(122, 188, 166, 150);
  translate(posR2x, posR2y);
  rotate(R2);
  triangle(0, 0, -25, 75, 25, 75);
  pop();

  push();
  fill(122, 188, 130, 150);
  translate(posR3x, posR3y);
  scale(sizeR3);
  rotate(R3);
  triangle(0, 0, 0, -48, 63, 0);
  pop();

  push();
  fill(61, 112, 10, 100);
  translate(posR4x, posR4y);
  rotate(R4);
  triangle(0, 0, 0, -45, 65, -45);
  pop();

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["size1"] = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["size3"] = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["tilt1"] = map(percent, 0, 100, oldObj["tilt1"], newObj["tilt1"]);
  new_letter["tilt2"] = map(percent, 0, 100, oldObj["tilt2"], newObj["tilt2"]);
  new_letter["tilt3"] = map(percent, 0, 100, oldObj["tilt3"], newObj["tilt3"]);
  new_letter["tilt4"] = map(percent, 0, 100, oldObj["tilt4"], newObj["tilt4"]);

  return new_letter;

}

var SwapWords = [
  "TRIANGLE",
  "FORESTRY",
  "MOUNTAIN",
  "CLONDILY",
  "SUNSHINE",
  "MOONBEAM",
  "POLESTAR",
  "CANICULA",
  "04071997"
]
