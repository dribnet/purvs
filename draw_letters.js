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
  let size2 = size*2/3;
  let size3 = size2/2;
  let posx = 50;
  let posy = 125;
  let angle1 = letterData["angle1"];
  let angle2 = letterData["angle2"];

  ellipseMode(CENTER);
  angleMode(DEGREES);

  //Ellipse 1
  fill(backgroundColor)
  strokeWeight(4);
  stroke(gold);
  ellipse(posx, posy, size, size);

  //Ellipse 2
  push();
  translate(posx, posy);
  strokeWeight(4);
  stroke(black);
  rotate(angle1);

  ellipse(0, -25, size2, size2);
  pop();

  //Ellipse
  push();
  translate(posx, posy);
  noStroke();
  fill(white);
  rotate(angle2);

  ellipse(0, -22, size3, size3);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "OLYMPIUM",
  "JAVELINS",
  "ZOIDBERG"
]
