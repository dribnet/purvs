const colorFront1  = "#199cff";
const colorFront2  = "#fcba03";
const colorStroke  = "#f5dd42";
//const colorBack    = "#0a193d";
//const backgroundColour = "#0a193d";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


function drawLetter(letterData) {
  angleMode(DEGREES);
  strokeWeight(4);
  stroke(colorStroke);
  
 // background(backgroundColour);
 // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+ letterData["offsetx"];
  let pos2y =  letterData["offsety"];
  let startA = letterData["start"];
  let endA = letterData["stop"];

  let strokeWei = letterData["strokeW"];

  //noFill();
  // draw two circles
    drawMoon();
  strokeWeight(strokeWei);

  let lightBlue = color("#199cff");
  lightBlue.setAlpha(125);
  fill(lightBlue);

  //fill(colorFront2);
  arc(pos2x, pos2y, size2, size2, startA,endA);
}


function drawMoon(){
  fill("#f5dd42");
  ellipse(50, 150, 100, 100);
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
  new_letter["strokeW"] = map(percent, 0, 100, oldObj["strokeW"], newObj["strokeW"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]