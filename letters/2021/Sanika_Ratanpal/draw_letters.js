/* these are optional special variables which will change the system */
var systemBackgroundColor = "#44a684"; //green 
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#44a684";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";

let rotateAmount = 0;
let wheelRotate = 100; //maximum limit of rotation
let WheelColour =30; //opacity of the wheel

//potential background colours:
//ffea00 yellow 
//44a684 green 
//000000 black
//f7b068 peach 
//5dc29f lighter green 

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


//help code that i can use when making sure all my arcs are drawing properly. Written by Course coordinator Tom.
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

//drawing the background lemon 
  push();
  translate(50,100);
  rotate(rotateAmount);
  wheel(0,0, wheelRotate, WheelColour);
  pop();

 //lines and arcs that will draw the letters
  stroke(255, 240, 3);
  strokeWeight(4.5);
  push();
  noFill();
  arc(50, 100, 100, 100, arcStartAngle, arcStopAngle);
  arc(50, 100, 100, 100, SecondarcStartAngle, SecondarcStopAngle);
  pop();

  if(line1 == true){
   line(50, 150, 50, 50) //vertical line
  }
  if(line2 == true){
   line(50, 100, 85, 65) // Diagonal line 1
  }
  if(line3 == true){
   line(50, 100, 100, 100) // Horizontal Line
  }
  if(line4 == true){
    line(50, 100, 85, 135) // Diagonal line 2
  }
  if(line5 == true){
   line(50,100, 15, 135) // Diagonal line 3
  }
  if(line6 == true){
   line(50, 100, 15, 65) // Diagonal line 4
  }

}


function wheel(x,y, wheelRotate, WheelColour){
 
 //background wheel that the letters will be drawn on
  push()

  fill(245, 255, 171, WheelColour);
  stroke (245, 255, 171, 100);
  strokeWeight(2);

 //straight lines on the Wheel
  line(x, y+50, x, y-50)
  line(x+50, y, x-50, y)
  line(x+35, y-35, x-35, y+35)
  line(x-35, y-35, x+35, y+35)

 // Lemon Rind Ellipses
  stroke(245, 255, 171, 200); // Yellow
  strokeWeight(2.5);
  ellipse(x,y,111);
  
  stroke(255, 255, 255, 150); // white
  strokeWeight(2.5);
  ellipse(x,y,103);

 pop()
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  rotateAmount = map(percent, 0, wheelRotate, 0, 180); // map to rotate the wheel for a new letter

  if (percent <=45){
  WheelColour = map(percent, 0, 40, 30, 70); // map to control the poacity of the wheel
  }else {
 WheelColour = map(percent, 40, 90, 70, 30);
  }

  return new_letter;
}

var swapWords = [
  "LEMONADE", //my font is called lemonade
  "?CITRUS?",
  "VITAMIN?",
  "?SUMMER?",
  "DRINKING",
  "CHILLING",
]
