/* these are optional special variables which will change the system */

var systemBackgroundColor = '#71d19b';
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const dark  = "#1f1a2e";
const light  = "#bacbcf";
const strokeColor  = "#547780";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup



  stroke(strokeColor);
  strokeWeight(0);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

// let x1 = letterData["x1"];
// let y1 = letterData["y1"];
// let x2 = letterData["x2"];
// let y2 = letterData["y2"];
// let x3 = letterData["x3"];
// let y3 = letterData["y3"];
// let x4 = letterData["x4"];
// let y4 = letterData["y4"];
// let x5 = letterData["x5"];
// let y5 = letterData["y5"];
// let x6 = letterData["x6"];
// let y6 = letterData["y6"];
// let x7 = letterData["x7"];
// let y7 = letterData["y7"];
// let x8 = letterData["x8"];
// let y8 = letterData["y8"];







  // draw two circles
  fill(dark);
  ellipse(50,100,100,100);
  fill(light);
//  ellipse(pos2x, pos2y, size2, size2);

fill(systemBackgroundColor);
  beginShape();
vertex(letterData["x1"],letterData["y1"]);
bezierVertex(letterData["x2"],letterData["y2"],letterData["x3"],letterData["y3"],letterData["x4"],letterData["y4"]);
bezierVertex(letterData["x4"],letterData["y4"],letterData["x5"],letterData["y5"],letterData["x6"],letterData["y6"]);
bezierVertex(letterData["x6"],letterData["y6"],letterData["x7"],letterData["y7"],letterData["x8"],letterData["y8"]);
endShape();

  // beginShape();
  // vertex(x1,y1);
  // bezierVertex(x2,y2,x3,y3,x4,y4);
  // bezierVertex(x4,y4,x5,y5,x6,y6);
  // bezierVertex(x6,y6,x7,y7,x8,y8);
  // endShape();


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
