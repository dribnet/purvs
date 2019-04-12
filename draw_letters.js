const colorFront1  = "#000000";
const colorFront2  = "#494343";
const colorStroke  = "#b53434";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
angleMode(DEGREES)

// determining parameters for ARCS

let size2 = letterData["size"];
let x_arc1 =  letterData["x_arc1"];
let y_arc1 =  letterData["y_arc1"];
let x_arc2 =  letterData["x_arc2"];
let y_arc2 =  letterData["y_arc2"];
let arcsize1 =letterData["arcsize1"];
let arcsize2 =letterData["arcsize2"];
let deg_arc1 =letterData["deg_arc1"];
let deg_arc2 =letterData["deg_arc2"];
let deg_arc3 =letterData["deg_arc3"];
let deg_arc4 =letterData["deg_arc4"];

//determining parameters for lINES

let linex1 =  letterData["linex1"];
let liney1 =  letterData["liney1"];
let linex2 =  letterData["linex2"];
let liney2 =  letterData["liney2"];
let linex3 =  letterData["linex3"];
let liney3 =  letterData["liney3"];
let liney4 = letterData["liney4"];
let linex4 = letterData["linex4"];

// SHADOW BEHIND ALPHABET

//amount the shadow has been moved down
var fade = -3.5;

//stroke colour
stroke(50,0,0)

noFill();
strokeWeight(6)
arc(x_arc1,y_arc1-fade,arcsize1,arcsize1,deg_arc1,deg_arc2);
arc(x_arc2,y_arc2-fade,arcsize2,arcsize2,deg_arc3,deg_arc4);

line(linex1,liney1-fade,linex2,liney2-fade)
line(linex3,liney3-fade,linex4,liney4-fade)

// DRAWING ALPHABET

stroke(138,42,42)
noFill();
strokeWeight(3)
arc(x_arc1,y_arc1,arcsize1,arcsize1,deg_arc1,deg_arc2);
arc(x_arc2,y_arc2,arcsize2,arcsize2,deg_arc3,deg_arc4);

line(linex1,liney1,linex2,liney2)
line(linex3,liney3,linex4,liney4)


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcsize1"] = map(percent, 0, 100, oldObj["arcsize1"], newObj["arcsize1"]);
  new_letter["arcsize2"] = map(percent, 0, 100, oldObj["arcsize2"], newObj["arcsize2"]);
  new_letter["x_arc1"] = map(percent, 0, 100, oldObj["x_arc1"], newObj["x_arc1"]);
  new_letter["y_arc1"] = map(percent, 0, 100, oldObj["y_arc1"], newObj["y_arc1"]);
  new_letter["x_arc2"] = map(percent, 0, 100, oldObj["x_arc2"], newObj["x_arc2"]);
  new_letter["y_arc2"] = map(percent, 0, 100, oldObj["y_arc2"], newObj["y_arc2"]);
  new_letter["deg_arc1"] = map(percent, 0, 100, oldObj["deg_arc1"], newObj["deg_arc1"]);
  new_letter["deg_arc2"] = map(percent, 0, 100, oldObj["deg_arc2"], newObj["deg_arc2"]);
  new_letter["deg_arc3"] = map(percent, 0, 100, oldObj["deg_arc3"], newObj["deg_arc3"]);
  new_letter["deg_arc4"] = map(percent, 0, 100, oldObj["deg_arc4"], newObj["deg_arc4"]);
  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
  new_letter["linex3"] = map(percent, 0, 100, oldObj["linex3"], newObj["linex3"]);
  new_letter["liney3"] = map(percent, 0, 100, oldObj["liney3"], newObj["liney3"]);
  new_letter["linex4"] = map(percent, 0, 100, oldObj["linex4"], newObj["linex4"]);
  new_letter["liney4"] = map(percent, 0, 100, oldObj["liney4"], newObj["liney4"]);

  return new_letter;
}

var swapWords = [
  "DRACONIC",
  "ISCOOOOL",
  "BANANASS"
]
