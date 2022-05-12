/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#000000";
const lightBlue  = "#ffffff";
const yellow  = "##fcf803";
const strokeColor  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let pos3x = 50  + letterData["offsetx3"];
  let pos3y = 150 + letterData["offsety3"];
  let rightAngle = letterData["angleR"];
  let leftAngle = letterData["angleL"];
  let rightAngle2 = letterData["angleR2"];
  let leftAngle2 = letterData["angleL2"];
  let ArcSize = 80 + letterData["sizeArc"]; // arc size

  let size1T = letterData["sizexT"]; // second square
  let size2T = letterData["sizeyT"];
  let pos2xT = 50  + letterData["offsetxT"];
  let pos2yT = 150 + letterData["offsetyT"];

  // draw two circles
  fill(lightBlue);
  arc(pos2x, pos2y, ArcSize, ArcSize, rightAngle2, leftAngle2, PIE);
  
  fill(darkBlue);
  arc(pos3x, pos3y, ArcSize, ArcSize, rightAngle, leftAngle, PIE);
  fill(lightBlue);
  
  rect(pos2x, pos2y, size1, size2);
  fill(darkBlue);
  rect(pos2xT, pos2yT, size1T, size2T);

  
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizex"]    = map(percent, 0, 100, oldObj["sizex"], newObj["sizex"]);
  new_letter["sizey"]    = map(percent, 0, 100, oldObj["sizey"], newObj["sizey"]);
  new_letter["sizeArc"]    = map(percent, 0, 100, oldObj["sizeArc"], newObj["sizeArc"]); // arc size
  

  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  
  new_letter["angleR"] = map(percent, 0, 100, oldObj["angleR"], newObj["angleR"]);
  new_letter["angleL"] = map(percent, 0, 100, oldObj["angleL"], newObj["angleL"]);
  new_letter["angleR2"] = map(percent, 0, 100, oldObj["angleR2"], newObj["angleR2"]);
  new_letter["angleL2"] = map(percent, 0, 100, oldObj["angleL2"], newObj["angleL2"]);

  let arcTarget = 0;

  if(percent < 99){
  
  
  new_letter["offsetx"] = map(percent, 0, 99, oldObj["offsetx"], arcTarget); // offset arcs
  new_letter["offsety3"] = map(percent, 0, 99, oldObj["offsety3"], arcTarget);
  }

  else{
 
  new_letter["offsetx"] = map(percent, 99, 100, arcTarget, newObj["offsetx"]); // offset arcs
  new_letter["offsety3"] = map(percent, 99, 100, arcTarget, newObj["offsety3"]);
 

  }

  return new_letter;
}

var swapWords = [
  "DAB?DAB?",
  "BAAAAAAA"
]
