/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


  // // determine parameters for second circle
 
// let TopAxis = 0
// let RightAxis = 0
// let BottomAxis = 200
// let LeftAxis = 100

//Nodes

let TopAxis = 25+letterData["offsetRightTop"]//change when porting to draw_letters
let TopMidAxis = letterData["offsetMidTop"]
let RightAxis = 0
let BottomSideAxis = 175
let BottomMidAxis = BottomSideAxis +25
let LeftAxis = 100
let leftMidAxisY = 100
let leftMidAxisX =  100+ letterData["offsetMidRight"]

stroke(255);
strokeWeight(1);



 line(RightAxis,TopAxis,RightAxis,BottomSideAxis); //right
 line(RightAxis,TopAxis,RightAxis,BottomSideAxis);

noFill();
beginShape();
vertex(RightAxis, TopAxis);
vertex(LeftAxis-25,TopMidAxis)
vertex(LeftAxis, TopAxis);
vertex(leftMidAxisX,leftMidAxisY)
vertex(LeftAxis,BottomSideAxis );
vertex(LeftAxis-25, BottomMidAxis);
vertex(RightAxis,BottomSideAxis);
endShape(CLOSE);
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetRightTop"]    = map(percent, 0, 100, oldObj["offsetRightTop"], newObj["offsetRightTop"]);
  new_letter["offsetMidTop"] = map(percent, 0, 100, oldObj["offsetMidTop"], newObj["offsetMidTop"]);
  new_letter["offsetMidRight"] = map(percent, 0, 100, oldObj["offsetMidRight"], newObj["offsetMidRight"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]