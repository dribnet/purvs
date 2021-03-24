/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
//const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";
//const strokeColor  = "#233f11";
const backgroundColor  = (227, 237, 237);
const strokeColor      = (255);

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //set up the sketch
angleMode(DEGREES);
noStroke();
  // color/stroke setup
  let size = letterData["size"];
  //let posx = letterData["offsetx"];
  //let posy = letterData["offsety"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let sizeTwo = letterData["size2"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];
  let sizeThree = letterData["size3"];
  let pos4x = letterData["offsetx4"];
  let pos4y = letterData["offsety4"];
  let width = 100
  let height = 100
  let posx = width/2
  let posy = height + height/2

  // let cutoutOpacity1 = letterData["opacity1"]
  //let cutoutOpacity2 = letterData["opacity2"]

  let angleOne = letterData["angleStart"];
  let angleTwo = letterData["angleStop"];
  
  // draw two circles
  fill(191, 227, 183);  //green
  //fill(245, 179, 243);  //light pink
  ellipse(posx, posy, width, height);
  fill(255, 255, 255, 145)
  //fill(220, 168, 237, 145);  //purple
  ellipse(pos2x, pos2y, size, size);
  fill(255, 255, 255, 145)
  //fill(237, 203, 168, cutoutOpacity2);  //orange
  ellipse(pos3x, pos3y, sizeTwo, sizeTwo);
  //fill(255, 255, 168, 145)  //yellow
  fill(255, 255, 255, 145)
  arc(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo)

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