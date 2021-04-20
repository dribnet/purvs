/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ed93e3";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
// determine parameters
  let sqx = letterData["posx"];
  let sqy = letterData["posy"];
  let crqx = letterData["posx2"];
  let crqy = letterData["posy2"];
  let li1x = letterData["posx3"];
  let li1y = letterData["posy3"];
  let li2x = letterData["posx4"];
  let li2y = letterData["posy4"];
  let sizex = letterData["sizex"];
  let sizey = letterData["sizey"];
  let sizex2 = letterData["sizex2"];//red line
  let sizey2 = letterData["sizey2"];//red line
  let sizex3 = letterData["sizex3"];
  let sizey3 = letterData["sizey3"];
  let sizex4 = letterData["sizex4"];
  let sizey4 = letterData["sizey4"];

  //A  
  strokeWeight(3);
  stroke(255, 0, 25);
  line(li2x,li2y,sizex2,sizey2);//red
  stroke(255, 247, 0);
  line(li1x,li1y,sizex4,sizey4);//yellow
  stroke(0,0,0);//black
  fill(3, 252, 44);
  rect(sqx,sqy,sizex,sizey);
  fill(0, 242, 255);
  ellipse(crqx,crqy,sizex3,sizey3);
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