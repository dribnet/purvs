const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorFront3  = "#aaaaaa";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
 noStroke();

  // determine parameters for second circle
  // draw two circles
  let px1 = letterData["x1"];
  let py1 = letterData["y1"];
  let px2 = letterData["x2"];
  let py2 = letterData["y2"];
  let px3 = letterData["x3"];
  let py3 = letterData["y3"];
  let px4 = letterData["x4"];
  let py4 = letterData["y4"];
  let px5 = letterData["x5"];
  let py5 = letterData["y5"];

  fill(colorFront2);
  triangle(px1,py1,px2,py2,px3,py3);
  scale(0.5);
  triangle(px1,py1,px2,py2,px3,py3);
  fill(colorFront1);
  triangle(px3,py3,px4,py4,px5,py5);
  
  // beginShape(TRIANGLES);
  // fill(colorFront2);
  // vertex(px1,py1);
  // vertex(px2,py2);
  // vertex(px3,py3);
  // fill(colorFront1);
  // vertex(px3,py3);
  // vertex(px4,py4);
  // vertex(px5,py5);
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