/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fcfcfc"; //off white
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const orange = "#f07800"; // orange colur
const black = "#1c1c1c"; // black colour
const grey = "#c2c2c2"; // grey oclour
const maroon = "#ad0000"; //maroon colour

function drawLetter(letterData) {

  let ax = letterData["ax"]; //var 1 orange arc x pos
  let ay = letterData["ay"]; //var 2 orange arc y pos
  let asize = letterData["asize"]; //var 3 orange arc size
  let astart = letterData["astart"]; //var 4 orange arc angle start
  let astop = letterData["astop"]; //var 5 orange arc angle stop

  let a2x = letterData["a2x"]; //var 6 black arc x pos
  let a2y = letterData["a2y"]; //var 7 black arc y pos
  let a2size = letterData["a2size"]; //var 8 black arc size
  let a2start = letterData["a2start"]; //var 9 black arc angle start
  let a2stop = letterData["a2stop"]; //var 10 black arc angle stop

  let thinrx = letterData["thinrx"]; //var 11 grey rect x pos
  let thinry = letterData["thinry"]; //var 12 grey rect y pos
  let thinrw = letterData["thinrw"]; //var 13 grey rect width
  let thinrh = letterData["thinrh"]; //var 14 grey rect height

  let marectx = letterData["marectx"]; //var 15 maroon rect xpos
  let marecty = letterData["marecty"]; //var 16 maroon rect y pos
  let marectw = letterData["marectw"]; //var 17 maroon rect width
  let marecth = letterData["marecth"]; //var 18 maroon rect height

  angleMode(DEGREES) // nicer to deal with, changes angle mode to degrees

  stroke(maroon);
  strokeWeight(24);
  strokeCap(SQUARE);
  noFill()
  arc(ax, ay, asize, asize, astart, astop, OPEN) // draws orange cirlce

  stroke(black); //changes stroke from orange to black
  strokeWeight(1); // changes stroke to 1 for thin line

  arc(ax, ay, asize, asize, astart, astop / 1.35, OPEN) //draws black line inside orange arc

  strokeWeight(12); //changes stroke back to 24
  arc(a2x, a2y, a2size, a2size, a2start, a2stop, OPEN) //draws thick black arc

  strokeWeight(0); //no stroke
  fill(grey);
  rect(thinrx, thinry, thinrw, thinrh) //draws grey rect

  fill(maroon);
  rect(marectx, marecty, marectw, marecth) //draws maroon rect

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
"BAUHAUS!",
  "HARRISON",
  "MATTHEWS"

]
