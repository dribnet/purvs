/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";
const strokeColor = "#03045e";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let T1 = 32;
  let T2 = 100;

  // determine parameters for second circle
  let Width = letterData["Width"]; // Arc1 width
  let Height = letterData["Height"]; // Arc1 Height
  let Width1 = letterData["Width1"]; // Arc2 width
  let Height1 = letterData["Height1"]; // Arc2 Height
  let Lx = letterData["Lx"]; // Line x
  let Ly = letterData["Ly"]; // Line y
  let Ly1 = letterData["Ly1"]; // Line y2
  let posx = letterData["offsetx0"]; // Arrow position
  let posy = letterData["offsety0"];
  let pos1x = letterData["offsetx1"]; // Line position
  let pos1y = letterData["offsety1"];
  let pos2x = letterData["offsetx2"]; // Arc1 position
  let pos2y = letterData["offsety2"];
  let pos3x = letterData["offsetx3"]; // Arc2 position
  let pos3y = letterData["offsety3"];
  let angle = letterData["RotateAngle"]; // Arc1 angle
  let angle2 = letterData["RotateAngle2"]; // Line angle
  let angle3 = letterData["RotateAngle3"]; // Arrow angle
  let angle4 = letterData["RotateAngle4"]; // Arc2 angle


  push() // Arrow
  scale(0.5);
  translate(posx, posy + 15);
  rotate(angle3)
  stroke(0);
  fill(0);
  strokeWeight(5);
  triangle(T1, T2, T1 + 18, T2 - 45, T1 + 36, T2);
  line(T1 + 18, T2, T1 + 18, T2 * 2.5);
  pop()

  push() //line
  translate(pos1x, pos1y);
  rotate(angle2)
  stroke(0);
  strokeWeight(5);
  line(Lx, Ly, Lx, Ly1);
  pop()

  push() // Arc1
  scale(1.2)
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(10);
  rotate(angle)
  arc(pos2x, pos2y, Width, Height, 0, 180, OPEN);
  pop()

  push() // Arc2
  scale(1.2)
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(5);
  rotate(angle4)
  arc(pos3x, pos3y, Width1, Height1, 0, 180, OPEN);
  pop()

}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
