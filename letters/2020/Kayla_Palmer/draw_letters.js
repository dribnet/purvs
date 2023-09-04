const colorBackg    = "#2B2118";
const colorLetters  = "#A8763E";
const colorNumbers = "#9C4D40";
const colorShadow = "#D2CBA5";
const toplineX = 15; //start of each letter (x and y)
const toplineY = 15;
const baselineY = 185; //base of the first  stroke of each letter
const shadowOffset = 10; //offset ofthe shadow fromthe base shapes


function drawLetter(letterData) {
  // determine parameters for each x,y coordinate
  let pointoneX = letterData["pointoneX"]*.8;
  let pointoneY = letterData["pointoneY"]*.8;
  let pointtwoX = letterData["pointtwoX"]*.8;
  let pointtwoY = letterData["pointtwoY"]*.8;
  let pointthreeX =letterData["pointthreeX"]*.8;
  let pointthreeY = letterData["pointthreeY"]*.8;
  //determines if the symbol is a letter or a number (sort of a true or false)
  let letterornumber = letterData["letterornumber"];

  //setup variables
  strokeWeight(17);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();
  //'shadow' shape
  stroke(colorShadow);
  beginShape(); 
  curveVertex (toplineX+shadowOffset, toplineY+shadowOffset);
  curveVertex (toplineX+shadowOffset, toplineY+shadowOffset);
  curveVertex (toplineX+shadowOffset, baselineY+shadowOffset);
  curveVertex (pointoneX+shadowOffset, pointoneY+shadowOffset);
  curveVertex (pointtwoX+shadowOffset, pointtwoY+shadowOffset);
  curveVertex (pointthreeX+shadowOffset,pointthreeY+shadowOffset);
  curveVertex (pointthreeX+shadowOffset,pointthreeY+shadowOffset);
  endShape();
  //shadow imperfections.
  letterImperfections(pointtwoX+shadowOffset,pointtwoY+shadowOffset,pointthreeX+shadowOffset,pointthreeY+shadowOffset,-1);
  letterImperfections(toplineX+shadowOffset,toplineY+shadowOffset,toplineX+shadowOffset,baselineY+shadowOffset,-1);

  //colour depending on if it is letter or number
  if (letterData["letterornumber"] > 0){
    stroke(colorLetters);
  } else {
    stroke(colorNumbers);
  }
  //letter shape
  beginShape(); 
  curveVertex (toplineX, toplineY);
  curveVertex (toplineX, toplineY);
  curveVertex (toplineX, baselineY);
  curveVertex (pointoneX, pointoneY);
  curveVertex (pointtwoX, pointtwoY);
  curveVertex (pointthreeX,pointthreeY);
  curveVertex (pointthreeX,pointthreeY);
  endShape();
  //imprefections
  letterImperfections(toplineX,toplineY,toplineX,baselineY,letterornumber);
  letterImperfections(pointtwoX,pointtwoY,pointthreeX,pointthreeY,letterornumber)
}

function letterImperfections (x1Value,y1Value,x2Value,y2Value,color){
 push();
  //letter or number or shadow colour
  if (color > 0){ 
    stroke(colorLetters);
  } else if (color == -1){
  stroke(colorShadow);
  } else {
    stroke(colorNumbers);
  }
strokeWeight(6);
//lines offset from existing lines
line(x1Value,y1Value,(x1Value+x2Value)/2-8,(y1Value+y2Value)/2+8);
line(x1Value,y1Value,(x1Value+x2Value)/2+7,(y1Value+y2Value)/2);
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["pointoneX"] = map(percent, 0, 100, oldObj["pointoneX"], newObj["pointoneX"]);
  new_letter["pointoneY"] = map(percent, 0, 100, oldObj["pointoneY"], newObj["pointoneY"]);
  new_letter["pointtwoX"] = map(percent, 0, 100, oldObj["pointtwoX"], newObj["pointtwoX"]);
  new_letter["pointtwoY"] = map(percent, 0, 100, oldObj["pointtwoY"], newObj["pointtwoY"]);
  new_letter["pointthreeX"] = map(percent, 0, 100, oldObj["pointthreeX"], newObj["pointthreeX"]);
  new_letter["pointthreeY"] = map(percent, 0, 100, oldObj["pointthreeY"], newObj["pointthreeY"]);
  new_letter["letterornumber"] = map(percent, 0, 100, oldObj["letterornumber"], newObj["letterornumber"]);
  return new_letter;
}

var swapWords = [
  "DIRTWORM",
  "TOMBTEXT",
  "DEEPDOWN"
]