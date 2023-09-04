const colorFront1  = "#292929";
const colorFront2  = "#138701";
const colorStroke  = "#138701";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)
  ellipseMode(CENTER)
  rectMode(CENTER)
  
  //Parameters for TWO Rectangles, same size, different offsets
  let size1 = letterData["sizex"]; //Rectangle size X
  let size2 = letterData["sizey"] //Rectangle size y
  let pos2x = 50 + letterData["offsetx"]; //Rectangle 1 offset X
  let pos2y = 100 + letterData["offsety"]; //Rectangle 1 offset Y
  let rect2posx = 50 + letterData["rect2x"]; //Rectangle 2 offset X
  let rect2posy = 100 + letterData["rect2y"]; //Rectangle 2 offset Y
  //Parameters for TWO Ellipses, same size, different offsets
  let cirs1 = letterData["cirsize1"] //Ellipse size X
  let cirs2 = letterData["cirsize2"] //Ellipse size Y
  let cirpos2x = 50 + letterData["ciroffsetx"] //Ellipse 1 offset X
  let cirpos2y = 100 + letterData["ciroffsety"] //Ellipse 1 offset Y
  let cir2pos2x = 50 + letterData["cir2offsetx"] //Ellipse 2 offset X
  let cir2pos2y = 100 + letterData["cir2offsety"] //Ellipse 2 offset Y

  stroke(colorStroke);
  strokeWeight(4);
  fill(colorFront1);
  //Base rectangle for all letters
  rect(50, 100, 100, 100);
  
  fill(colorFront2);
  //Shapes that go inside the Base rectangle, makes letters using negative space
  ellipse(cirpos2x, cirpos2y, cirs1, cirs2)
  ellipse(cir2pos2x, cir2pos2y, cirs1, cirs2)
  rect(pos2x, pos2y, size1, size2)
  rect(rect2posx, rect2posy, size1, size2)

  rectMode(CORNER) //Center boundary boxes
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //Interpolate both Rectangles, Size and Offsets
  new_letter["sizex"]    = map(percent, 0, 100, oldObj["sizex"], newObj["sizex"]);
  new_letter["sizey"]    = map(percent, 0, 100, oldObj["sizey"], newObj["sizey"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["rect2x"]    = map(percent, 0, 100, oldObj["rect2x"], newObj["rect2x"]);
  new_letter["rect2y"]    = map(percent, 0, 100, oldObj["rect2y"], newObj["rect2y"]);
  //Interpolate both Ellipses, Size and Offsets
  new_letter["ciroffsetx"]    = map(percent, 0, 100, oldObj["ciroffsetx"], newObj["ciroffsetx"]);
  new_letter["ciroffsety"]    = map(percent, 0, 100, oldObj["ciroffsety"], newObj["ciroffsety"]);
  new_letter["cirsize1"]    = map(percent, 0, 100, oldObj["cirsize1"], newObj["cirsize1"]);
  new_letter["cirsize2"]    = map(percent, 0, 100, oldObj["cirsize2"], newObj["cirsize2"]);
  new_letter["cir2offsetx"]    = map(percent, 0, 100, oldObj["cir2offsetx"], newObj["cir2offsetx"]);
  new_letter["cir2offsety"]    = map(percent, 0, 100, oldObj["cir2offsety"], newObj["cir2offsety"]);
  return new_letter;
}

var swapWords = [
  "NEOBLOCK",
  "CREATIVE",
  "CODING02"
]