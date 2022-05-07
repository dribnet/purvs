/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fcfcfc"; //off white
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";
const orange = "#f07800";
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

  // determine parameters for second circle
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

  angleMode(DEGREES) // nicer to deal with, changes angle mode to degrees

  // draw two circles
  stroke(orange);
  strokeWeight(24);
  strokeCap(SQUARE);
  noFill()
  arc(ax, ay, asize, asize, astart, astop, OPEN)

  stroke(black);
  strokeWeight(1);

  arc(ax, ay, asize, asize, astart, astop / 1.35, OPEN)

  stroke(black);
  strokeWeight(24);

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
  new_letter["ax"] = map(percent, 0, 100, oldObj["ax"], newObj["ax"]);
  new_letter["ay"] = map(percent, 0, 100, oldObj["ay"], newObj["ay"]);
  new_letter["asize"] = map(percent, 0, 100, oldObj["asize"], newObj["asize"])
  new_letter["astart"] = map(percent, 0, 100, oldObj["astart"], newObj["astart"]);
  new_letter["astop"] = map(percent, 0, 100, oldObj["astop"], newObj["astop"]);
  new_letter["a2x"] = map(percent, 0, 100, oldObj["a2x"], newObj["a2x"]);
  new_letter["a2y"] = map(percent, 0, 100, oldObj["a2y"], newObj["a2y"]);
  new_letter["a2size"] = map(percent, 0, 100, oldObj["a2size"], newObj["a2size"]);
  new_letter["a2start"] = map(percent, 0, 100, oldObj["a2start"], newObj["a2start"]);
  new_letter["a2stop"] = map(percent, 0, 100, oldObj["a2stop"], newObj["a2stop"]);
  new_letter["thinrx"] = map(percent, 0, 100, oldObj["thinrx"], newObj["thinrx"]);
  new_letter["thinry"] = map(percent, 0, 100, oldObj["thinry"], newObj["thinry"]);
  new_letter["thinrw"] = map(percent, 0, 100, oldObj["thinrw"], newObj["thinrw"]);
  new_letter["thinrh"] = map(percent, 0, 100, oldObj["thinrh"], newObj["thinrh"]);
  new_letter["marectx"] = map(percent, 0, 100, oldObj["marectx"], newObj["marectx"]);
  new_letter["marecty"] = map(percent, 0, 100, oldObj["marecty"], newObj["marecty"]);
  new_letter["marectw"] = map(percent, 0, 100, oldObj["marectw"], newObj["marectw"]);
  new_letter["marecth"] = map(percent, 0, 100, oldObj["marecth"], newObj["marecth"]);
  return new_letter;
}

var swapWords = [
  "HARRISON",
  "MATTHEWS",
  "BAUHAUS!"
]
