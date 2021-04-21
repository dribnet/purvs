/* these are optional special variables which will change the system */
// var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

 //internal constants 
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
// function drawLetter(letterData) {

function drawLetter(letterData) {
  angleMode(DEGREES)
  // determine parameters for second circle
  let quadx = letterData["quadXLoki"];

  let quady = letterData["quadYLoki"];

  let RotationAngle = letterData["quadrotation"];

  let GreenDot1x = letterData["GreenDot1xpos"];

  let GreenDot1y = letterData["GreenDot1ypos"];

  let GreenDot2x = letterData["greenDot2xpos"]

  let GreenDot2y = letterData["GreenDot2ypos"];

  let GreenDot3x = letterData["GreenDot3xpos"];

  let GreenDot3y = letterData["GreenDot3ypos"];

  let RedObjectAngle = letterData["RedRotation"];

  let BlackLinex = letterData["BlackLinexpos"];

  let BlackLiney = letterData["BlackLineypos"];

  let CirlceSize = letterData["BlueCircleSize"];

  let CirclexPos = letterData["BlueCirclexPos"];

  let CircleyPos = letterData["BlueCircleyPos"];

  let RedxPos = letterData["RedxPosition"]

  let RedyPos = letterData["RedyPosition"]

    angleMode(DEGREES)






//Yellow Quad
  push();
  scale(0.5)
  noStroke()
  fill(250, 250, 20)
  translate(quadx,quady);
  rotate(RotationAngle)
  quad(0, 0, -100, 100, -80, 120, -20, 130, 30, 30, 30, 30); // soft edges not working
  pop()

//blue ellipse
  push();
  scale(0.5)
  stroke(20, 20, 20)
  fill(20, 20, 200)
  circle(CirclexPos, CircleyPos, CirlceSize)
  circle(CirclexPos, CircleyPos, CirlceSize/2)
  pop()


//red lolliepop
  push();
  scale(0.4)
  noStroke()
  translate(RedxPos, RedyPos)
  rotate(RedObjectAngle)
  fill(200, 20, 20);
  rect(70, 5, 150, 10)
  ellipse(210, 10, 70, 70)
  pop()

//black lines
  push();
  scale(0.4)
  noStroke()
  fill(10, 10, 10)
  quad(BlackLinex+5, BlackLiney+30, BlackLinex+11, BlackLiney+28, BlackLinex+10, BlackLiney+60, BlackLinex+6, BlackLiney+61)
  quad(BlackLinex+60, BlackLiney+110, BlackLinex+88, BlackLiney+109, BlackLinex+90, BlackLiney+115, BlackLinex+62, BlackLiney+114)
  quad(BlackLinex+33, BlackLiney+66, BlackLinex+36, BlackLiney+69, BlackLinex+50, BlackLiney+41, BlackLinex+47, BlackLiney+39)
  quad(BlackLinex+53, BlackLiney+86, BlackLinex+56, BlackLiney+89, BlackLinex+80, BlackLiney+71, BlackLinex+77, BlackLiney+64)
  pop()

  //3 green dots
  push();
  scale(0.5)
  stroke(20, 200, 20)
  fill(20, 20, 20);
  circle(GreenDot1x, GreenDot1y, 20);
  circle(GreenDot2x, GreenDot2y, 20);
  circle(GreenDot3x, GreenDot3y, 20);
  pop()


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