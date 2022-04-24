/* these are optional special variables which will change the system */
var systemBackgroundColor = "#292929";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#292929";
const gold  = "#f5ce42";
const black  = "#0d0d0d";
const white = "ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters
  let size = letterData["size"];
  let posx = 50;
  let posy = 100;

  rectMode(CENTER);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["angle1"] = map(percent, 0, 100, oldObj["angle1"], newObj["angle1"]);
  new_letter["angle2"] = map(percent, 0, 100, oldObj["angle2"], newObj["angle2"]);
  return new_letter;
}

var swapWords = [
  "OLYMPIUM",
  "JAVELINS",
  "ZOIDBERG"
]
