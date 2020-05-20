const colorBackg    = "#2B2118";
const colorLetters  = "#A8763E";
const colorNumbers = "#9C4D40";
const colorShadow = "#D2CBA5";
const toplineX = 15; //start of each letter (x and y)
const toplineY = 15;
const baselineY = 185; //base of the first  stroke of each letter


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


  strokeWeight(17);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();
  //letter shape
 stroke(colorShadow);
  beginShape(); 
  curveVertex (toplineX+10, toplineY+10);
  curveVertex (toplineX+10, toplineY+10);
  curveVertex (toplineX+10, baselineY+10);
  curveVertex (pointoneX+10, pointoneY+10);
  curveVertex (pointtwoX+10, pointtwoY+10);
  curveVertex (pointthreeX+10,pointthreeY+10);
  curveVertex (pointthreeX+10,pointthreeY+10);
  endShape();
  
  if (letterData["letterornumber"] > 0){
    stroke(colorLetters);
  } else {
    stroke(colorNumbers);
  }
  beginShape(); 
  curveVertex (toplineX, toplineY);
  curveVertex (toplineX, toplineY);
  curveVertex (toplineX, baselineY);
  curveVertex (pointoneX, pointoneY);
  curveVertex (pointtwoX, pointtwoY);
  curveVertex (pointthreeX,pointthreeY);
  curveVertex (pointthreeX,pointthreeY);
  endShape();

  ridges(0,105,-20); 
  
}

function ridges(xStart,xEnd,yStart){ //ridges through the letters
  for (let i = 10; i < 230; i += 10) { //for loop to fill the 100x200 rectangle
    if (i % 20 === 0) {
      stroke(colorBackg); //same col as background
      strokeWeight (3);
      bezier(xStart, i+yStart, 50, -50+i+yStart, 50, 40+i+yStart, xEnd, i+yStart);
    }
  }
}

function letterShape (){
beginShape();
curveVertex (xOne,yOne);
curveVertex (xOne,yOne);
curveVertex (xOne,yTwo);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["letterornumber"] =map(percent, 0, 100, oldObj["letterornumber"], newObj["letterornumber"]);
if(percent < 33){
  new_letter["pointoneX"] = map(percent, 0, 33, oldObj["pointoneX"], newObj["pointoneX"]);
  new_letter["pointoneY"] = map(percent, 0, 33, oldObj["pointoneY"], newObj["pointoneY"]);
  new_letter["pointtwoX"] =  oldObj["pointtwoX"];
  new_letter["pointtwoY"] =  oldObj["pointtwoY"];
  new_letter["pointthreeX"] =  oldObj["pointthreeX"];
  new_letter["pointthreeY"] =  oldObj["pointthreeY"];
}  else if (percent < 66){
  new_letter["pointoneX"] = newObj["pointoneX"];
  new_letter["pointoneY"] = newObj["pointoneY"];
  new_letter["pointtwoX"] =  map(percent, 33, 66, oldObj["pointtwoX"], newObj["pointtwoX"]);
  new_letter["pointtwoY"] =  map(percent, 33, 66, oldObj["pointtwoY"], newObj["pointtwoY"]);
  new_letter["pointthreeX"] =  oldObj["pointthreeX"];
  new_letter["pointthreeY"] =  oldObj["pointthreeY"];
} else if (percent > 66){
  new_letter["pointoneX"] = newObj["pointoneX"];
  new_letter["pointoneY"] = newObj["pointoneY"];
  new_letter["pointtwoX"] = newObj["pointtwoX"];
  new_letter["pointtwoY"] = newObj["pointtwoY"];
  new_letter["pointthreeX"] =  map(percent, 66, 100, oldObj["pointthreeX"], newObj["pointthreeX"]);
  new_letter["pointthreeY"] =  map(percent, 66, 100, oldObj["pointthreeY"], newObj["pointthreeY"]);

}

  // new_letter["pointoneX"]    = map(percent, 0, 100, oldObj["pointoneX"], newObj["pointoneX"]);
  // new_letter["pointoneY"] = map(percent, 0, 100, oldObj["pointoneY"], newObj["pointoneY"]);
  // new_letter["pointtwoX"] = map(percent, 0, 100, oldObj["pointtwoX"], newObj["pointtwoX"]);
  // new_letter["pointtwoY"] = map(percent, 0, 100, oldObj["pointtwoY"], newObj["pointtwoY"]);
  // new_letter["pointthreeX"] = map(percent, 0, 100, oldObj["pointthreeX"], newObj["pointthreeX"]);
  // new_letter["pointthreeY"] = map(percent, 0, 100, oldObj["pointthreeY"], newObj["pointthreeY"]);
  // new_letter["letterornumber"] = map(percent, 0, 100, oldObj["letterornumber"], newObj["letterornumber"]);
  return new_letter;
}

var swapWords = [
  "ABSTRACT",
  "SLIPPERY",
  "BLUEWORM"
]