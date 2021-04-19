/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

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

let TopAxis = -75+letterData["offsetRightTop"]//change when porting to draw_letters
let TopMidAxis = -100 +letterData["offsetMidTop"]
let LeftAxis = -50
let BottomSideAxis = 75 +letterData["offsetBottom"]
let BottomMidAxis = BottomSideAxis +25 +letterData["offsetBottomMid"]
let RightAxis = 50
let RightMidAxisY = 0
let RightMidAxisX =  50+ letterData["offsetMidRight"]
let leftMidNodeX = -50 +letterData["offsetMidLeft"]
let leftMidNodeY = 0



let ShapeRotation = letterData["Rotation"]


let lineColor = color(255,255,255,5);

angleMode(DEGREES);

c = color(215, 66, 245);
c.setAlpha(10);
let illumination = 2

for (let i = 0; i < 12; i++){
	illumination = illumination+i
MainShape(c,illumination,1,1);
}


noFill();
MainShape(lineColor,3,1,50,100);

MainShape(lineColor,3,1);



function MainShape (StrokeColour,lineWeight,shapeSizeX, posX, posY){



stroke(StrokeColour);
strokeWeight(lineWeight);

push();


translate(50,100);
scale(shapeSizeX);
rotate(ShapeRotation);

fill(215, 66, 245, 2);
beginShape();
vertex(LeftAxis, TopAxis);
vertex(RightAxis-25,TopMidAxis)
vertex(RightAxis, TopAxis);
vertex(RightMidAxisX,RightMidAxisY)
vertex(RightAxis,BottomSideAxis );
vertex(RightAxis-25, BottomMidAxis);
vertex(LeftAxis,BottomSideAxis);
vertex(leftMidNodeX,leftMidNodeY);
endShape(CLOSE);

NodePoints();

pop();
}

function NodePoints (){


stroke(lineColor);
strokeWeight(10);

point(LeftAxis, TopAxis);
point(RightAxis-25,TopMidAxis)
point(RightAxis, TopAxis);
point(RightMidAxisX,RightMidAxisY)
point(RightAxis,BottomSideAxis );
point(RightAxis-25, BottomMidAxis);
point(LeftAxis,BottomSideAxis);
point(leftMidNodeX,leftMidNodeY);

}
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetRightTop"]    = map(percent, 0, 100, oldObj["offsetRightTop"], newObj["offsetRightTop"]);
  new_letter["offsetMidTop"] = map(percent, 0, 100, oldObj["offsetMidTop"], newObj["offsetMidTop"]);
  new_letter["offsetMidRight"] = map(percent, 0, 100, oldObj["offsetMidRight"], newObj["offsetMidRight"]);
  new_letter["offsetMidLeft"] = map(percent, 0, 100, oldObj["offsetMidLeft"], newObj["offsetMidLeft"]);
  new_letter["Rotation"] = map(percent, 0, 100, oldObj["Rotation"], newObj["Rotation"]);
  new_letter["offsetBottom"]    = map(percent, 0, 100, oldObj["offsetBottom"], newObj["offsetBottom"]);
  new_letter["offsetBottomMid"] = map(percent, 0, 100, oldObj["offsetBottomMid"], newObj["offsetBottomMid"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]