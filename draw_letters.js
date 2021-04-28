/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";
const sizex = 50;
const sizey = 18;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(0 );
  strokeWeight(4); 

  // determine parameters for second circle
  let posx = 50;
  let posy = 100;
  let squaresL = letterData["squaresL"];
  let squaresR = letterData ["squaresR"];
  let skipL = letterData["skipL"];
  let skipR = letterData["skipR"];
  let sizex = letterData["sizex"];
  let sizey = letterData["sizey"];
  let offsetx = letterData["offsetx"];
  let offsety = letterData ["offsety"];
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  let i = 0;
  // draw two circles
  fill(0);
  while (i <= letterData["squaresR"]){
    if(i == letterData["skipR"]||i ==letterData["skipR2"]||i ==letterData["skipR3"]||i ==letterData["skipR4"]||i ==letterData["skipR5"]||i ==letterData["skipR6"]||i ==letterData["skipR7"]||i ==letterData["skipR8"]){
      posy += letterData["sizey"];
      i++;
    }
    else{
      rect(posx, posy-100, letterData["sizex"], letterData["sizey"]);
      posy += letterData["sizey"];
      i++;
    }
  }
  i=0;
  fill(0);
  while (i<= letterData["squaresL"]){
    if (i == letterData["skipL"]||i ==letterData["skipL2"]||i ==letterData["skipL3"]||i ==letterData["skipL4"]||i ==letterData["skipL5"]||i ==letterData["skipL6"]||i ==letterData["skipL7"]||i ==letterData["skipL8"]){
    pos2y += letterData["sizey"];
    i++;
    }
    else{
    rect(pos2x, pos2y, letterData["sizex"],letterData["sizey"]);
    pos2y += letterData["sizey"];
    i++;
  }
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