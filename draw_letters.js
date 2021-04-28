/* these are optional special variables which will change the system */
// var systemBackgroundColor = "#e3eded";
var systemLineColor = "#a39341";
var systemBoxColor = "#bfac4d";
 var systemBackgroundColor = "#faf7e6";
 //var systemBackgroundColor = "#fcf8e3";
 //internal constants 
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";


  // Here are my parametrics for my alphabet
function drawLetter(letterData) {
  angleMode(DEGREES)

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

  let RedxPos = letterData["RedxPosition"]

  let RedyPos = letterData["RedyPosition"]

  let BlackLinex = letterData["BlackLinexpos"];

  let BlackLiney = letterData["BlackLineypos"];

  let CirlceSize = letterData["BlueCircleSize"];

  let CirclexPos = letterData["BlueCirclexPos"];

  let CircleyPos = letterData["BlueCircleyPos"];



    angleMode(DEGREES)

//My drawn shapes for my alphabet

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
  rect(70, 5, 150, 10);
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
  strokeWeight(5)
  stroke(20, 200, 20)
  fill(20, 20, 20);
  circle(GreenDot1x, GreenDot1y, 20);
  circle(GreenDot2x, GreenDot2y, 20);
  circle(GreenDot3x, GreenDot3y, 20);
  pop()


}
  //animation functions
function interpolate_letter(percent, oldObj, newObj) {
  //animation of blue ball to make it pop out between letters
  let new_letter = {};
let Ballsize = 150;
if(oldObj > 10){

  new_letter["BlueCircleSize"] = map(percent, 0, 100, oldObj["BlueCircleSize"], Ballsize);

}
else{

   new_letter["BlueCircleSize"] = map(percent, 0, 100, Ballsize, newObj["BlueCircleSize"]);
}
  //maps for rest of parametrics
  new_letter["quadXLoki"] = map(percent, 0, 100, oldObj["quadXLoki"], newObj["quadXLoki"]);
  new_letter["quadYLoki"] = map(percent, 0, 100, oldObj["quadYLoki"], newObj["quadYLoki"]);
  new_letter["quadrotation"] = map(percent, 0, 100, oldObj["quadrotation"], newObj["quadrotation"]);
  new_letter["GreenDot1xpos"] = map(percent, 0, 100, oldObj["GreenDot1xpos"], newObj["GreenDot1xpos"]);
  new_letter["GreenDot1ypos"] = map(percent, 0, 100, oldObj["GreenDot1ypos"], newObj["GreenDot1ypos"]);
  new_letter["greenDot2xpos"] = map(percent, 0, 100, oldObj["greenDot2xpos"], newObj["greenDot2xpos"]);
  new_letter["GreenDot2ypos"] = map(percent, 0, 100, oldObj["GreenDot2ypos"], newObj["GreenDot2ypos"]);
  new_letter["GreenDot3xpos"] = map(percent, 0, 100, oldObj["GreenDot3xpos"], newObj["GreenDot3xpos"]);
  new_letter["GreenDot3ypos"] = map(percent, 0, 100, oldObj["GreenDot3ypos"], newObj["GreenDot3ypos"]);
  new_letter["RedRotation"] = map(percent, 0, 100, oldObj["RedRotation"], newObj["RedRotation"]);
  new_letter["RedxPosition"] = map(percent, 0, 100, oldObj["RedxPosition"], newObj["RedxPosition"]);
  new_letter["RedyPosition"] = map(percent, 0, 100, oldObj["RedyPosition"], newObj["RedyPosition"]);
  new_letter["BlackLinexpos"] = map(percent, 0, 100, oldObj["BlackLinexpos"], newObj["BlackLinexpos"]);
  new_letter["BlackLineypos"] = map(percent, 0, 100, oldObj["BlackLineypos"], newObj["BlackLineypos"]);
  new_letter["BlueCirclexPos"] = map(percent, 0, 100, oldObj["BlueCirclexPos"], newObj["BlueCirclexPos"]);
  new_letter["BlueCircleyPos"] = map(percent, 0, 100, oldObj["BlueCircleyPos"], newObj["BlueCircleyPos"]);



  return new_letter;
}

//words that represent my font and theme
var swapWords = [
  "FESTIVAL",
  "JAMBOREE",
  "CONFETTI",
  "CHEERFUL"
]