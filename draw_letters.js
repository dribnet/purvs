/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor = "#393d3d";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
//setup the sketch
angleMode(DEGREES)

  stroke(strokeColor);
  strokeWeight(8);
   
  

//inner line rotation from the centre
  let line1R = letterData["line1R"];
  let line2R = letterData["line2R"];
  let line3R = letterData["line3R"];
  let line4R = letterData["line4R"];
//start and end of outer arcs
  let arc1Start = letterData["arc1Start"];
  let arc1End = letterData["arc1End"];
  let arc2Start = letterData["arc2Start"];
  let arc2End = letterData["arc2End"];

  let lineOn = letterData["lineOn"];

  let lineLength = 47;

  if (lineOn<1) { lineLength = 0
  }

 
  noFill()
 
 
  arc(50, 150, 95, 95, arc1Start-90, arc1End-90)
  arc(50, 150, 95, 95, arc2Start-90, arc2End-90)
  

  push();
  translate(50, 150)
  rotate(line1R+180);
  line(0, 0, 0, lineLength);
  pop();

  push();
  translate(50, 150)
  rotate(line2R+180);
  line(0, 0, 0, lineLength);
  pop();
   

   push();
  translate(50, 150)
  rotate(line3R+180);
  line(0, 0, 0, lineLength);
  pop();
   

   push();
  translate(50, 150)
  rotate(line4R+180);
  line(0, 0, 0, lineLength);
  pop();
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