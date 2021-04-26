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

// Translation Parameters -  Parameters used to adjust and polish letter forms to create more cohesive font family

let ShapeRotation = letterData["Rotation"]
let ShapeTranslationX = letterData["TranslateX"]
let ShapeTranslationY = letterData["TranslateY"]

//Second Shape - these are the parameters used to adjust and move the second shape that can help to create forms

let SecondShapeX = 50 + letterData["offsetsecondShapeX"]
let SecondShapeY = 100+ letterData["offsetsecondShapeY"]
let SecondShapeScale = letterData["secondShapeScale"]
let SecondShapeRotation = letterData["SecondShapeRotation"]


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


// let stepsAway = round(sqrt(sq(SecondShapeX)+sq(SecondShapeY))/10)

// console.log(stepsAway)

// if(Secondillumination<stepsAway){
// for (let i = 0; i < 8; i++){
//   Secondillumination = Secondillumination + i
// MainShape(c,Secondillumination,SecondShapeScale,SecondShapeX,SecondShapeY);
// }
// }

let ShapePosX = 50 + ShapeTranslationX
let ShapePosY = 100 + ShapeTranslationY

GlowShape();
// GlowShape();





function GlowShape (){

for (let i = 0; i < 10; i++){
	illumination = illumination+i
MainShape(GreenColour,illumination,.75,ShapePosX,ShapePosY,GreenColour,0);
MainShape(OrangeColour,illumination,SecondShapeScale,SecondShapeX,SecondShapeY,OrangeColour,SecondShapeRotation);
}

// fill(0,0,0,100);
// rect(0,0,100,200);
c.setAlpha(0);
transparentFill = color(0,0,0,0)
MainShape(lineBright,1,.75,ShapePosX,ShapePosY,transparentFill, 0);
}


function MainShape (StrokeColour,lineWeight,shapeSizeX, posX, posY,solidFill, OffsetRotation){



// stroke(StrokeColour);
stroke(StrokeColour);
strokeWeight(lineWeight);

push();


translate(posX,posY);
scale(shapeSizeX);
rotate(ShapeRotation + OffsetRotation);
strokeCap(ROUND);

noFill();
// fill(solidFill);
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

NodePoints();
pop();
}

function NodePoints (){

stroke(lineColor);
strokeWeight(10);

point(LeftAxis, TopAxis);
point(RightAxis-50,TopMidAxis)
point(RightAxis, TopAxis);
point(RightMidAxisX,RightMidAxisY)
point(RightAxis,BottomSideAxis );
point(RightAxis-50, BottomMidAxis);
point(LeftAxis,BottomSideAxis);
point(leftMidNodeX,leftMidNodeY);

}
}


function interpolate_letter(percent, oldObj, newObj) {
 

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
  new_letter["Rotation"] = map(percent, 0, 100, oldObj["Rotation"], newObj["Rotation"]);
  new_letter["offsetBottom"]    = map(percent, 0, 100, oldObj["offsetBottom"], newObj["offsetBottom"]);
  new_letter["offsetBottomMid"] = map(percent, 0, 100, oldObj["offsetBottomMid"], newObj["offsetBottomMid"]);
  new_letter["offsetsecondShapeX"] = map(percent, 0, 100, oldObj["offsetsecondShapeX"], newObj["offsetsecondShapeX"]);
  new_letter["offsetsecondShapeY"] = map(percent, 0, 100, oldObj["offsetsecondShapeY"], newObj["offsetsecondShapeY"]);
  new_letter["secondShapeScale"] = map(percent, 0, 100, oldObj["secondShapeScale"], newObj["secondShapeScale"]);
  new_letter["TranslateX"] = map(percent, 0, 100, oldObj["TranslateX"], newObj["TranslateX"]);
  new_letter["TranslateY"] = map(percent, 0, 100, oldObj["TranslateY"], newObj["TranslateY"]);
  new_letter["SecondShapeScale"] = map(percent, 0, 100, oldObj["SecondShapeScale"], newObj["SecondShapeScale"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]