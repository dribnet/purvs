/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffa414";
var systemBoxColor = "#fcbb15";

function drawLetter(letterData) {

  let T1 = 32;
  let T2 = 100;
  let white = (255);

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
  stroke(white);
  noFill();
  strokeWeight(5);
  triangle(T1, T2, T1 + 18, T2 - 45, T1 + 36, T2);
  line(T1 + 18, T2, T1 + 18, T2 * 2.5);
  pop()

  push() //line
  translate(pos1x, pos1y);
  rotate(angle2)
  stroke(white);
  strokeWeight(5);
  line(Lx, Ly, Lx, Ly1);
  pop()

  push() // Arc1
  scale(1.2)
  angleMode(DEGREES);
  noFill();
  stroke(67, 171, 174);
  strokeWeight(10);
  rotate(angle)
  arc(pos2x, pos2y, Width, Height, 0, 180, OPEN);
  pop()

  push() // Arc2
  scale(1.2)
  angleMode(DEGREES);
  noFill();
  stroke(white);
  strokeWeight(5);
  rotate(angle4)
  arc(pos3x, pos3y, Width1, Height1, 0, 180, OPEN);
  pop()

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["Width"] = map(percent, 0, 90, oldObj["Width"], newObj["Width"]); //arc1
  new_letter["Height"] = map(percent, 0, 90, oldObj["Height"], newObj["Height"]);
  new_letter["offsetx2"] = map(percent, 0, 90, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 90, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["RotateAngle"] = map(percent, 0, 90, oldObj["RotateAngle"], newObj["RotateAngle"]);

  new_letter["Width1"] = map(percent, 0, 90, oldObj["Width1"], newObj["Width1"]); //arc2
  new_letter["Height1"] = map(percent, 0, 90, oldObj["Height1"], newObj["Height1"]);
  new_letter["offsetx3"] = map(percent, 0, 90, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 90, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["RotateAngle4"] = map(percent, 0, 90, oldObj["RotateAngle4"], newObj["RotateAngle4"]);

  new_letter["Lx"] = map(percent, 0, 90, oldObj["Lx"], newObj["Lx"]); // line
  new_letter["Ly"] = map(percent, 0, 90, oldObj["Ly"], newObj["Ly"]);
  new_letter["Ly1"] = map(percent, 0, 90, oldObj["Ly1"], newObj["Ly1"]);
  new_letter["offsetx1"] = map(percent, 0, 90, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 90, oldObj["offsety1"], newObj["offsety1"]);

  new_letter["offsetx0"] = map(percent, 0, 90, oldObj["offsetx0"], newObj["offsetx0"]); //arrow
  new_letter["offsety0"] = map(percent, 0, 90, oldObj["offsety0"], newObj["offsety0"]);
  new_letter["RotateAngle2"] = map(percent, 0, 90, oldObj["RotateAngle2"], newObj["RotateAngle2"]);
  new_letter["RotateAngle3"] = map(percent, 0, 90, oldObj["RotateAngle3"], newObj["RotateAngle3"]);


  return new_letter;
}

var swapWords = [
  ".ARROWS.",
  "..FONT..",
]
