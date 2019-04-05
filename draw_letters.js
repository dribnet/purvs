const colorFront1  = "#ffffff";
const colorFront2  = "#ffffff";
const colorStroke  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  angleMode(DEGREES)
  // determine parameters for second circle
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

let linex1 =  letterData["linex1"];
let liney1 =  letterData["liney1"];
let linex2 =  letterData["linex2"];
let liney2 =  letterData["liney2"];
let linex3 =  letterData["linex3"];
let liney3 =  letterData["liney3"];
let liney4 = letterData["liney4"];
let linex4 = letterData["linex4"];
  
  // draw arcs
  noFill();
  strokeWeight(3)
  arc(x_arc1,y_arc1,arcsize1,arcsize1,deg_arc1,deg_arc2);
  arc(x_arc2,y_arc2,arcsize2,arcsize2,deg_arc3,deg_arc4);    
//ellipse(100,100,100,100)
  line(linex1,liney1,linex2,liney2)
  line(linex3,liney3,linex4,liney4)
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