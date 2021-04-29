/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";
const sizeX = 50;
const sizeY = 18;

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
  
  // parameters for placement
  let posx = 50;
  let posy = 100;
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  //determine parameters for left block
  let squaresL = letterData["squaresL"];
  let skipL = letterData["skipL"];
  //determine parameters for right block
  let squaresR = letterData ["squaresR"]; 
  let skipR = letterData["skipR"];
  
  let i = 0;
  fill(0);
  while (i <= squaresR){
    if(i == letterData["skipR"]||i ==letterData["skipR2"]||i ==letterData["skipR3"]||i ==letterData["skipR4"]||i ==letterData["skipR5"]||i ==letterData["skipR6"]||i ==letterData["skipR7"]||i ==letterData["skipR8"]){
      posy += sizeY;
      i++;
    }
    else{
      rect(posx, posy-100, sizeX, sizeY);
      posy += sizeY;
      i++;
    }
  }
  i=0;
  fill(0);
  while (i<= squaresL){
    if (i == letterData["skipL"]||i ==letterData["skipL2"]||i ==letterData["skipL3"]||i ==letterData["skipL4"]||i ==letterData["skipL5"]||i ==letterData["skipL6"]||i ==letterData["skipL7"]||i ==letterData["skipL8"]){
    pos2y += sizeY;
    i++;
    }
    else{
    rect(pos2x, pos2y, sizeX, sizeY);
    pos2y += sizeY;
    i++;
  }
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"]= map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["squaresL"] = map(percent, 0, 100, oldObj["squaresL"], newObj["squaresL"]);
  new_letter["squaresR"] = map(percent, 0, 100, oldObj["squaresR"], newObj["squaresR"]);
  new_letter["skipL"] = map(percent, 0, 100, oldObj["skipL"], newObj["skipL"]);
  new_letter["skipR"] = map(percent, 0, 100, oldObj["skipR"], newObj["skipR"]);
  return new_letter;
}

var swapWords = [
  "2BLOCKED",
  "ALPHABET",
  "STRUGGLE"
  
]