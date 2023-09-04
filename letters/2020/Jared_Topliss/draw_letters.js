const colorFront1  = "#ff0000";
const colorFront2  = "#0023a1";
const colorStroke  = "#000000";


function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // Parameters for Arc 1
  let size2 = letterData["size"];
  let pos2x = 50 +  letterData["offsetx"];
  let pos2y =  100 +  letterData["offsety"];
  let startArc = letterData["startArc"];
  let stopArc = letterData["stopArc"];
 
 // Parameters for Arc 2
  let size3 = letterData["size2"];
  let posx2 = 50 +  letterData["offsetx2"];
  let posy2 =  100 +  letterData["offsety2"];
  let startArc2 = letterData["startArc2"];
  let stopArc2 = letterData["stopArc2"];

  // Draws Ellpise, and the two Arcs
  fill(colorFront1);
  ellipse(50, 150, 80, 80);
  fill(colorFront2);
  arc(pos2y, pos2x, size2, size2, startArc,stopArc);
  arc(posy2, posx2, size3, size3, startArc2,stopArc2);
}
// Animates/Interpolates Leters/Numbers
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["startArc"] = map(percent, 0, 100, oldObj["startArc"], newObj["startArc"]);
  new_letter["stopArc"] = map(percent, 0, 100, oldObj["stopArc"], newObj["stopArc"]);
  
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["startArc2"] = map(percent, 0, 100, oldObj["startArc2"], newObj["startArc2"]);
  new_letter["stopArc2"] = map(percent, 0, 100, oldObj["stopArc2"], newObj["stopArc2"]);

  return new_letter;
}

var swapWords = [
  "ARCSFONT",
  "JARED789",
  "ALPHABET",
  "TOGETHER",
  
]