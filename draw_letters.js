const colorFront1  = "#f55a42";
const colorFront2  = "#42b6f5";
const colorStroke  = "#233f11";

const red1 = 250;
const green1 = 255;
const blue1 = 0;
const red2 = 250;
const green2 = 0;
const blue2 = 175;




/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  noStroke();

//variables 
let size = letterData["size"];
let size2 = letterData["size2"];
let pos2x = 50 + letterData["X2"];
let pos2y = 100 + letterData["Y2"];
let start2 = letterData["start2"];
let end2 = letterData["end2"];
let start = letterData["start"];
let end = letterData["end"];


//draws arcs
fill(red1, green1, blue1, 150);
angleMode(DEGREES);
arc(50, 100, size, size, start, end);
fill(red2, green2, blue2, 150);
arc(pos2x, pos2y, size2, size2, start2, end2);





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