/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E1E5C6";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#4F708D";

const strokeColor  = "#233f11";
const orange  = "#F27E4D";
const beige = "#E1E5C6";
      
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  const lightBlue  = color(245, 232, 91,140); //make yellow 
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

  // determine parameters bigger circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // determine  parameters smaller circle
  let pos3x =  letterData["smalllength"];
  let pos3y =   letterData["smallheight"]; 
  let size3 = letterData["sizesmall"] -50;
 let posxrl =  letterData["leftrectW"];
  let posyrl =  letterData["leftrectH"]; 
  let posxrr = letterData["RightrectW"];
 let posyrr =   letterData["RightrectH"];

 angleMode(DEGREES); 



  // draw rect left
 fill(orange);
  rect(0, 80, posxrl, posyrl);

// draw rect right
  fill(orange);
  rect(70, 80, posxrr, posyrr);


  //bigger circle
  fill(lightBlue, 140);
circle(pos2x, pos2y, size2);

//DRAW circle 2
  fill(darkBlue);
  circle(pos3x, pos3y, size3);
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