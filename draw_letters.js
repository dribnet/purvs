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

//Nodes - These make up the custom shape used. These can be manipulated with letters.js

let width = letterData["offsetMidTop"] - letterData["offsetBottomMid"]
let WidthScaleChange = map(width,-25,25,-.15,.05)

let TopAxis = -75+letterData["offsetRightTop"]//change when porting to draw_letters
let TopMidAxis = -100 +letterData["offsetMidTop"]
let LeftAxis = -50 
let BottomSideAxis = 75 +letterData["offsetBottom"]
let BottomMidAxis = BottomSideAxis +25 +letterData["offsetBottomMid"]
let RightAxis = 50 
let RightMidAxisY = BottomSideAxis + TopAxis //was 0, this makes it more adpaptive but at the cost of how far i can change it. 
let RightMidAxisX =  RightAxis+ letterData["offsetMidRight"]
let leftMidNodeX = LeftAxis +letterData["offsetMidLeft"]
let leftMidNodeY = TopAxis + BottomSideAxis

// Translation Parameters -  Parameters used to adjust and polish letter forms to create more cohesive font family

let ShapeRotation = letterData["Rotation"]
let ShapeTranslationX = letterData["TranslateX"]
let ShapeTranslationY = letterData["TranslateY"]

//Second Shape - these are the parameters used to adjust and move the second shape that can help to create forms

let SecondShapeX = 50 + letterData["offsetsecondShapeX"]
let SecondShapeY = 100+ letterData["offsetsecondShapeY"]
let SecondShapeScale = letterData["secondShapeScale"]
let SecondShapeRotation = letterData["SecondShapeRotation"]

//Node Variables
let NodeSize = 10
let NodeTransitionSize = 2




let lineColor = color(255,255,255,5);

angleMode(DEGREES);
lineBright = color(247, 207, 255);
c = color(215, 66, 245);
// GreenColour = color(48,207,242,10)
OrangeColour = color(255,207,53,10)
GreenColour = color(4,217,178,10)
// GreenColour = color(52,140,101,10)
// OrangeColour = color(241,160,31,10)

c.setAlpha(10);
let illumination = 2



let ShapePosX = 50 + ShapeTranslationX
let ShapePosY = 100 + ShapeTranslationY

GlowShape();

function InnerContour (StrokeColour,lineWeight,shapeSizeX, posX, posY,solidFill, OffsetRotation){

fill(255,207,53,2) //Green

push();

beginShape()
noStroke();

vertex(LeftAxis, TopAxis);
vertex(RightAxis-50,TopMidAxis);
vertex(RightAxis, TopAxis);
vertex(RightMidAxisX,RightMidAxisY)


endShape(CLOSE);

beginShape()
vertex(LeftAxis,BottomSideAxis);
vertex(leftMidNodeX,leftMidNodeY);
vertex(RightAxis,BottomSideAxis );
vertex(RightAxis-50, BottomMidAxis);



endShape(CLOSE);

beginShape()
endShape(CLOSE);

pop();
}


function GlowShape (){

for (let i = 0; i < 10; i++){
	illumination = illumination+i
MainShape(GreenColour,illumination,.75,ShapePosX,ShapePosY,GreenColour,0);
MainShape(OrangeColour,illumination,SecondShapeScale,SecondShapeX,SecondShapeY,OrangeColour,SecondShapeRotation);
}


c.setAlpha(0);
transparentFill = color(0,0,0,0)
MainShape(lineBright,.5,.75,ShapePosX,ShapePosY,transparentFill, 0);
MainShape(lineBright,.5,SecondShapeScale,SecondShapeX,SecondShapeY,OrangeColour,SecondShapeRotation);

}

function NodePoints (){

stroke(lineColor);
strokeWeight(NodeSize);

point(LeftAxis, TopAxis);
point(RightAxis-50,TopMidAxis)
point(RightAxis, TopAxis);
point(RightMidAxisX,RightMidAxisY)
point(RightAxis,BottomSideAxis );
point(RightAxis-50, BottomMidAxis);
point(LeftAxis,BottomSideAxis);
point(leftMidNodeX,leftMidNodeY);

}

function MainShape (StrokeColour,lineWeight,shapeSizeX, posX, posY,solidFill, OffsetRotation){


stroke(StrokeColour);
strokeWeight(lineWeight);

push();


translate(posX,posY);
scale(shapeSizeX,shapeSizeX);
rotate(ShapeRotation + OffsetRotation);
strokeCap(ROUND);

noFill();
// fill(solidFill);

push();
scale(1+WidthScaleChange,1.05);
beginShape();
vertex(LeftAxis, TopAxis);
vertex(RightAxis-50,TopMidAxis)
vertex(RightAxis, TopAxis);
vertex(RightMidAxisX,RightMidAxisY)
vertex(RightAxis,BottomSideAxis );
vertex(RightAxis-50, BottomMidAxis);
vertex(LeftAxis,BottomSideAxis);
vertex(leftMidNodeX,leftMidNodeY);
endShape(CLOSE);

InnerContour();
NodePoints();
pop();
pop();
}

}


function interpolate_letter(percent, oldObj, newObj) {
 

 let NodeSize = 10
let NodeTransitionSize = 2


  let new_letter = {};

  if(percent < 50){

  new_letter["offsetRightTop"]    = oldObj["offsetRightTop"]
  new_letter["offsetMidTop"] = oldObj["offsetMidTop"]
  new_letter["offsetMidRight"] = oldObj["offsetMidRight"]
  new_letter["offsetMidLeft"] = oldObj["offsetMidLeft"]

  }
  else{
      new_letter["offsetRightTop"]    = map(percent, 51, 100, oldObj["offsetRightTop"], newObj["offsetRightTop"]);
  new_letter["offsetMidTop"] = map(percent, 51, 100, oldObj["offsetMidTop"], newObj["offsetMidTop"]);
  new_letter["offsetMidRight"] = map(percent, 51, 100, oldObj["offsetMidRight"], newObj["offsetMidRight"]);
  new_letter["offsetMidLeft"] = map(percent, 51, 100, oldObj["offsetMidLeft"], newObj["offsetMidLeft"]);
  }

  // new_letter["offsetRightTop"]    = map(percent, 0, 100, oldObj["offsetRightTop"], newObj["offsetRightTop"]);
  // new_letter["offsetMidTop"] = map(percent, 0, 100, oldObj["offsetMidTop"], newObj["offsetMidTop"]);
  // new_letter["offsetMidRight"] = map(percent, 0, 100, oldObj["offsetMidRight"], newObj["offsetMidRight"]);
  // new_letter["offsetMidLeft"] = map(percent, 0, 100, oldObj["offsetMidLeft"], newObj["offsetMidLeft"]);
  new_letter["offsetBottom"]    = map(percent, 0, 100, oldObj["offsetBottom"], newObj["offsetBottom"]);
  new_letter["offsetBottomMid"] = map(percent, 0, 100, oldObj["offsetBottomMid"], newObj["offsetBottomMid"]);
  new_letter["offsetsecondShapeX"] = map(percent, 0, 100, oldObj["offsetsecondShapeX"], newObj["offsetsecondShapeX"]);
  new_letter["offsetsecondShapeY"] = map(percent, 0, 100, oldObj["offsetsecondShapeY"], newObj["offsetsecondShapeY"]);
  new_letter["secondShapeScale"] = map(percent, 0, 100, oldObj["secondShapeScale"], newObj["secondShapeScale"]);
  new_letter["TranslateX"] = map(percent, 0, 100, oldObj["TranslateX"], newObj["TranslateX"]);
  new_letter["TranslateY"] = map(percent, 0, 100, oldObj["TranslateY"], newObj["TranslateY"]);

if(percent < 20){

  new_letter["Rotation"] = oldObj["Rotation"]
  new_letter["SecondShapeRotation"] = oldObj["SecondShapeRotation"]


} else {
      new_letter["Rotation"] = map(percent, 21, 100, oldObj["Rotation"], newObj["Rotation"]);
  new_letter["SecondShapeRotation"] = map(percent, 21, 100, oldObj["SecondShapeRotation"], newObj["SecondShapeRotation"]);

}



  return new_letter;
}

var swapWords = [
  "NEONVOLT",
  "DAFTPUNK",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]