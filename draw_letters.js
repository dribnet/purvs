/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fcfcfc"; //off white
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const orange  = "#f07800";
const black = "#1c1c1c";
const grey = "#c2c2c2";
const maroon = "#ad0000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  // color/stroke setup

angleMode(DEGREES) // nicer to deal with, changes angle mode to degrees

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 60  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let ax = letterData["ax"];
  let ay = letterData["ay"];
  let asize = letterData["asize"];
  let astart = letterData["astart"];
  let astop = letterData["astop"];

  let a2x = letterData["a2x"];
  let a2y = letterData["a2y"];
  let a2size = letterData["a2size"];
  let a2start = letterData["a2start"];
  let a2stop = letterData["a2stop"];

  let thinrx = letterData["thinrx"]; //xpos
  let thinry = letterData["thinry"]; //ypos
  let thinrw = letterData["thinrw"]; //width
  let thinrh = letterData["thinrh"]; //height

  let marectx = letterData["marectx"]; //xpos
  let marecty = letterData["marecty"]; //ypos
  let marectw = letterData["marectw"]; //width
  let marecth = letterData["marecth"]; //height

  // draw two circles
  stroke(orange);
  strokeWeight(24);
  strokeCap(SQUARE);
noFill()
  arc(ax, ay, asize, asize, astart, astop, OPEN)

  stroke(black);
  strokeWeight(1);

  arc(ax, ay, asize, asize, astart, astop/1.35 , OPEN)

  stroke(black);
  strokeWeight(24);
  strokeCap(SQUARE);
noFill()
  arc(a2x, a2y, a2size, a2size, a2start, a2stop, OPEN)

  strokeWeight(0);
  fill(grey);
  rect(thinrx, thinry, thinrw, thinrh)

  strokeWeight(0);
  fill(maroon);
  rect(marectx, marecty, marectw, marecth)

  

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
