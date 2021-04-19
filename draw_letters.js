/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#e3eded";
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


noFill();
stroke(153, 0, 89, 40);
//main wheel
  arc(50, 100, 100, 100, 0, 360);
  line(50, 100+50, 50, 100-50)
  line(50+50, 100, 50-50, 100)
  line(50+35, 100-35, 50-35, 100+35)
  line(50-35, 100-35, 50+35, 100+35)

  //parameters
  stroke(153, 0, 89);
  arc(50, 100, 100, 100, arcStartAngle, arcStopAngle);
  arc(50, 100, 100, 100, SecondarcStartAngle, SecondarcStopAngle);

  if(line1 == true){
   line(50, 100+50, 50, 100-50)
  } 
  if(line2 == true){
   line(50, 100, 50+35, 100-35)
  }
  if(line3 == true){
   line(50, 100, 50+50, 100)
  }
  if(line4 == true){
   line(50, 100, 50+35, 100+35)
  }
  if(line5 == true){
   line(50,100, 50-35, 100+35)
  }
  if(line6 == true){
   line(50, 100, 50-35, 100-35)
  }



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