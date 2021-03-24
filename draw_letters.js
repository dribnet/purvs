/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";   //changed but kept just in case.
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
   // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  
  let col1 = letterData["ColourPlanet"];
  let col2 = letterData["ColourSun"]

  // draw two circles                                                                            
  fill(darkBlue);
  ellipse(50, 100, 100, 100);
  if(col2 == 0){
 fill(250,180,0);
  }
  else if (col2 == 1) {
    fill(255,255,0);
  }
  else if (col2 == 2) {
    fill(255,255,255);
  }
  ellipse(50, 100, 50, 50);

  if(col1 == 0){
    fill(5, 13, 255);
  }
  else if (col1 == 1) {
    fill(255, 34, 0);
  }
  else if (col1 == 2) {
    fill(11, 207, 4);
  }
  else if (col1 == 3) {
    fill(180, 5, 255);
  }
  else if (col1 == 4) {
    fill(0,0,0);
  }

  ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]