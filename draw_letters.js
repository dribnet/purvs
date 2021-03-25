/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor      = "#233f11";




/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //set up the sketch
  angleMode(DEGREES); //angle mode to degrees

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size = letterData["size"];
  let size1 = letterData["size1"];
  let size2 = letterData["size2"];
  let posx = letterData["recOffsetx"];
  let posy = letterData["recOffsety"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let pos3x = letterData["arcOffsetx"];
  let pos3y = letterData["arcOffsety"];
  let RectAngle = letterData["RectAngle"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];
  let opacity = letterData["opacity"];

  // draw a rectangle and rotate it
  noStroke();
  fill(219, 32, 122);

  push();
  translate(posx,posy);
  rotate(RectAngle);
  rect(0, 0, 15, size);
  pop();


  //Draw an ellipse
  fill(144, 21, 135);//Mauve
  ellipseMode(CORNER);
  ellipse(pos2x, pos2y, size1, size1);


  //Draw an arc
  fill(169, 9, 69);//Red
  arc(pos3x, pos3y, size2, size2, angleStart, angleEnd);

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