/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
//const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";
//const strokeColor  = "#233f11";
const backgroundColor  = (227, 237, 237);
const strokeColor      = (2, 30, 189);

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
  let width = 90
  let height = 90
  let posx = 50
  let posy = 150

  // let cutoutOpacity1 = letterData["opacity1"]
  //let cutoutOpacity2 = letterData["opacity2"]

  let angleOne = letterData["angleStart"];
  let angleTwo = letterData["angleStop"];
  
  // draw two circles
  fill(125, 238, 255);  //green
  //fill(245, 179, 243);  //light pink
  ellipse(posx, posy, width, height);
  stroke (29, 55, 207);
  strokeWeight(3);
  fill(226, 150, 255);
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
  new_letter["size2"] = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["size3"] = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleStop"] = map(percent, 0, 100, oldObj["angleStop"], newObj["angleStop"]);
  return new_letter;
}

// "size": 60,
//   "offsetx": 50,
//   "offsety": 185,
//   "size2": 30,
//   "offsetx3": 50,
//   "offsety3": 130,
//   "size3": 100,
//   "offsetx4": 0,
//   "offsety4": -70,
//   "angleStart": 0, //-210
//   "angleStop": 0,  //30

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]