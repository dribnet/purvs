/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";


const strokeColor  = "#233f11";
const darkBlue = "#199cff";
const lightBlue = "#59ccff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  rectMode(CENTER);
  //Setup the sketch
  angleMode(DEGREES);
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];
  
  // draw two circles
  fill(255);
  ellipse(50, 150, 100, 100);
  fill(0);
  arc(pos2x, pos2y, size2, size2, startAngle, stopAngle, CHORD);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
 
 let targetstart= 0;
 let defaultChar = getObjFromChar("default");
 if(percent < 50){
    new_letter["start"] = map(percent, 0, 180, oldObj["start"], defaultChar["start"]);
    new_letter["size"]    = map(percent, 0, 50, oldObj["size"], defaultChar["size"]);
    new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"], defaultChar["offsetx"]);
    new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"], defaultChar["offsety"]);
    new_letter["end"] = map(percent, 0, 180, oldObj["end"], defaultChar["end"]);

 }

 
if(percent > 50){
  new_letter["size"]    = map(percent, 50, 100, defaultChar["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 50, 100, defaultChar["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 50, 100, defaultChar["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 181, 360, defaultChar["start"], newObj["start"]);
  new_letter["end"] = map(percent, 181, 360, defaultChar["end"], newObj["end"]);
}
  return new_letter;
}

var swapWords = [
  "SMOOTHAF",
  "DEMONIC1",
  "EL137GMR"
]