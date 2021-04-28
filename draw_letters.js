/* these are optional special variables which will change the system */
var systemBackgroundColor = "#4B4544";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#009DE0";

//Sets up the alphabet draw
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(10);

  //x position
  let pos1x = letterData["x1"];
  let pos2x = letterData["x2"];
  let pos3x = letterData["x3"];
  let pos4x = letterData["x4"];
  let pos5x = letterData["x5"];
  
  //y position 
  let pos1y = letterData["y1"];
  let pos2y = letterData["y2"];
  let pos3y = letterData["y3"];
  let pos4y = letterData["y4"];
  let pos5y = letterData["y5"];

  // draws lines
  line(pos1x, pos1y, pos2x, pos2y);
  line(pos2x, pos2y, pos3x, pos3y);
  line(pos3x, pos3y, pos4x, pos4y);
  line(pos4x, pos4y, pos5x, pos5y);
}

//Animation for letters
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"]    = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["x5"]    = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);

  new_letter["y1"]    = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"]    = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"]    = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["y5"]    = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);

  return new_letter;
}
//These words are chosen so the user reads the key information about the font:
//RUNICTIM (Title of font), ENGLISH (The langue of the font), SCOTT AS (My name and initails)
var swapWords = [
  "RUNICTIM",
  "ENG LISH",
  "SCOTT AS"
]