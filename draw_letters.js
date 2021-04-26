/* these are optional special variables which will change the system */
var systemBackgroundColor = "#6e6e6e";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#6e6e6e";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);

let arcStartAngle = letterData ["arcStart"];
let arcStopAngle = letterData["arcStop"];
let SecondarcStartAngle = letterData ["SecondarcStart"];
let SecondarcStopAngle = letterData["SecondarcStop"];
let line1 = letterData["VerticalLine"];
let line2 = letterData ["Diagonalline1"]
let line3 = letterData ["horizontalline"]
let line4 = letterData ["Diagonalline2"]
let line5 = letterData ["Diagonalline3"]
let line6 = letterData ["Diagonalline4"]

//potential parameters set by true/false statements or if statements. so maybe parametrs could include
// "verticalline"
// "horizontalline"
// "arc1" etc. something like that

  if(arcStartAngle == null) {
    print("Warning: missing arcStartAngle");
    print(letterData);
    arcStartAngle = 0;
  }
  if(arcStopAngle == null) {
    print("Warning: missing arcStopAngle");
    print(letterData);
    arcStopAngle = 0;
  }

// push();
// wheel(50, 100);
// pop();

push();
translate(50,100);
rotate(rotateAmount);
wheel(0,0, wheelRotate, WheelColour);
pop();

 //lines and arcs that will draw the letters

  stroke(255,0,0);
  strokeWeight(3);
  push();
  noFill();
  arc(50, 100, 100, 100, arcStartAngle, arcStopAngle);
  arc(50, 100, 100, 100, SecondarcStartAngle, SecondarcStopAngle);
  pop();

  if(line1 == true){
   push();
   line(50, 150, 50, 50)
   stroke(255, 255, 255, 150)
   line(53, 150, 53, 50)
   pop();
  }
  if(line2 == true){
    push();
   line(50, 100, 85, 65)
   stroke(255, 255, 255, 150)
   line(53, 103, 88, 68)
pop();
  }
  if(line3 == true){
  push();
   line(50, 100, 100, 100)
   stroke(255, 255, 255, 150)
   line(53, 103, 97, 103)
    pop();
  }
  if(line4 == true){
    push();
    line(50, 100, 85, 135)
   stroke(255, 255, 255, 150)
   line(47, 103, 82, 138)
    pop();
  }
  if(line5 == true){
   line(50,100, 15, 135)
  }
  if(line6 == true){
   line(50, 100, 15, 65)
  }

}


let rotateAmount = 0;
  let wheelRotate = 100;
  let WheelColour;
function wheel(x,y, wheelRotate, WheelColour){
  push()
  //background wheel that the letters will be drawn on
  noFill();
  stroke(252, 3, 3, WheelColour);
  strokeWeight(2);
  //main wheel
  ellipse(x,y,100,100);
  line(x, y+50, x, y-50)
  line(x+50, y, x-50, y)
  line(x+35, y-35, x-35, y+35)
  line(x-35, y-35, x+35, y+35)

  stroke(252, 3, 3, 20);
  strokeWeight(1);
 ellipse(x,y,110,110);
 pop()
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  rotateAmount = map(percent, 0, wheelRotate, 0, 180);

  if (percent <=45){
  WheelColour = map(percent, 0, 40, 40, 100);
  }else {
 WheelColour = map(percent, 40, 90, 100, 40);
  }

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
