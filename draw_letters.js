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

//Second Shape

let SecondShapeX = 50 + letterData["offsetsecondShapeX"]
let SecondShapeY = 100+ letterData["offsetsecondShapeY"]
let SecondShapeScale = letterData["secondShapeScale"]

let ShapeRotation = letterData["Rotation"]


let lineColor = color(255,255,255,5);

angleMode(DEGREES);

c = color(215, 66, 245);
c.setAlpha(10);
let illumination = 2
let Secondillumination = 3


let stepsAway = round(sqrt(sq(SecondShapeX)+sq(SecondShapeY))/10)

console.log(stepsAway)

if(Secondillumination<stepsAway){
for (let i = 0; i < 8; i++){
  Secondillumination = Secondillumination + i
MainShape(c,Secondillumination,SecondShapeScale,SecondShapeX,SecondShapeY);
}
}


c.setAlpha(10);
GlowShape();
// GlowShape();





function GlowShape (){

for (let i = 0; i < 8; i++){
	illumination = illumination+i
MainShape(c,illumination,.75,50,100);
}


noFill();
MainShape(lineColor,5,.75,50,100);

MainShape(lineColor,3,.75,50,100);
}


function MainShape (StrokeColour,lineWeight,shapeSizeX, posX, posY){



// stroke(StrokeColour);
stroke(StrokeColour);
strokeWeight(lineWeight);

push();


translate(posX,posY);
scale(shapeSizeX);
rotate(ShapeRotation);
strokeCap(ROUND);

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
NodePoints(); // adjust later ti fit opacity. 
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
  new_letter["offsetsecondShapeX"] = map(percent, 0, 100, oldObj["offsetsecondShapeX"], newObj["offsetsecondShapeX"]);
  new_letter["offsetsecondShapeY"] = map(percent, 0, 100, oldObj["offsetsecondShapeY"], newObj["offsetsecondShapeY"]);
  new_letter["secondShapeScale"] = map(percent, 0, 100, oldObj["secondShapeScale"], newObj["secondShapeScale"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]