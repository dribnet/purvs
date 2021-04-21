/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffd885";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#ffd885";
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


wheel (50, 100);

 //lines and arcs that will draw the letters
  stroke(252, 3, 3);
  strokeWeight(3);
  arc(50, 100, 100, 100, arcStartAngle, arcStopAngle);
  arc(50, 100, 100, 100, SecondarcStartAngle, SecondarcStopAngle);

  if(line1 == true){
   line(50, 150, 50, 50)
   
  } 
  if(line2 == true){
   line(50, 100, 85, 65)
  }
  if(line3 == true){
   line(50, 100, 100, 100)
  }
  if(line4 == true){
   line(50, 100, 85, 135)
  }
  if(line5 == true){
   line(50,100, 15, 135)
  }
  if(line6 == true){
   line(50, 100, 15, 65)
  }

}

function wheel(x,y){
  //background wheel that the letters will be drawn on
  noFill();
stroke(252, 3, 3, 40);
strokeWeight(2);
//main wheel
  arc(50, 100, 100, 100, 0, 360);

  line(50, 150, 50, 50)
  line(100, 100, 0, 100)
  line(85, 65, 15, 135)
  line(15, 65, 85, 135)

  stroke(252, 3, 3, 20);
  strokeWeight(1);
 arc(50, 100, 110, 110, 0, 360);
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