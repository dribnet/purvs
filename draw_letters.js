/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


const posx = 50
const posy = 0
let size = letterData["size"];
let pos2x = posx + letterData["offsetx"];
let pos2y = posy + letterData["offsety"];

  stroke(255);
  strokeWeight(1);
  strokeCap(PROJECT);
  

for (let i = 0; i < 9; i++) {
  line(posx,posy,pos2x-50+(i*size),200);
  line(posx-50,posy,pos2x+(i*size),200);
  line(posx-50,posy,pos2x-50+(i*size),200);
  line(posx,200,pos2x-50+(i*size),pos2y);
}
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