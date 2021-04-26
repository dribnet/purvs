/* these are optional special variables which will change the system */
var systemBackgroundColor = "#5b3849";
var systemLineColor = "#ccc2b6";
var systemBoxColor = "#ccc2b6";

/* internal constants */
const strokeColor = "#fef8d0";
const dark1  = "#dca99a";
const light1  = "#cbd3ae";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);

  let offset1_X = letterData["offset1_X"];
  let offset2_X = letterData["offset2_X"];
  let offset3_X = letterData["offset3_X"];
  let offset4_X = letterData["offset4_X"];
  let offset5_X = letterData["offset5_X"];

  let offset1_Y = letterData["offset1_Y"];
  let offset2_Y = letterData["offset2_Y"];
  let offset3_Y = letterData["offset3_Y"];
  let offset4_Y = letterData["offset4_Y"];
  let offset5_Y = letterData["offset5_Y"];

  let size1 = letterData["size1"];
  let size2 = letterData["size2"];
  let size3 = letterData["size3"];
  let size4 = letterData["size4"];
  let size5 = letterData["size5"];

  let rotate1 = letterData["rotate1"];
  let rotate2 = letterData["rotate2"];
  let rotate3 = letterData["rotate3"];
  let rotate4 = letterData["rotate4"];

  // FIRST TRIANGLE
  push();
  translate(CENTER);
  rotate(rotate1);
  fill(dark1);
  stroke(dark1);
  scale(size1);
  quad(offset1_X, offset1_Y, offset1_X-10, offset1_Y+10, offset1_X, offset1_Y+100, offset1_X+10, offset1_Y+10);
  pop();

  // SECOND TRIANGLE
  push();
  translate(CENTER);
  rotate(rotate2);
  stroke(light1);
  noFill();
  scale(size2);
  quad(offset2_X, offset2_Y, offset2_X-10, offset2_Y+10, offset2_X, offset2_Y+100, offset2_X+10, offset2_Y+10);
  pop();

  // THIRD TRIANGLE
  push();
  translate(CENTER);
  rotate(rotate3);
  fill(dark1);
  stroke(dark1);
  scale(size3);
  quad(offset3_X, offset3_Y, offset3_X-10, offset3_Y+10, offset3_X, offset2_Y+100, offset3_X+10, offset3_Y+10);
  pop();

  // FOURTH TRIANGLE
  push();
  translate(CENTER);
  rotate(rotate4);
  stroke(light1);
  noFill();
  scale(size4);
  quad(offset4_X, offset4_Y, offset4_X+10, offset4_Y-10, offset4_X, offset4_Y-100, offset4_X-10, offset4_Y-10);
  pop();

  // CIRCLE
  push();
  fill(dark1);
  noStroke();
  ellipse(offset5_X, offset5_Y, size5, size5);
  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);


  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
