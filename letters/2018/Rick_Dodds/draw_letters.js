var circleOn = 1;
var squareOn = 1;
var TriangleOn = 1;
var posx = 13;
var posy = 100;
var SizeOf = 3.7;
var CircleGridColor;

var circleGridArray = new Array(3);
for (var i = 0; i < circleGridArray.length; i++) {
  circleGridArray[i] = new Array(3);
}

for (var i = 0; i < circleGridArray.length; i++) {
  for (var j = 0; j < circleGridArray[i].length; j++) {
    circleGridArray[i][j]= 1;
  }
}


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


 function drawLetter(letterData) {
  //guidelines for debugging position
  // noFill();
  // color('red');
  // rect(0, 0, 100, 200);

  circleGridArray[0][0] = letterData["TL"];
  circleGridArray[0][1] = letterData["TM"];
  circleGridArray[0][2] = letterData["TR"];
  circleGridArray[1][0] = letterData["ML"];
  circleGridArray[1][1] = letterData["MM"];
  circleGridArray[1][2] = letterData["MR"];
  circleGridArray[2][0] = letterData["BL"];
  circleGridArray[2][1] = letterData["BM"];
  circleGridArray[2][2] = letterData["BR"];
  squareOn = letterData["Square"];
  circleOn = letterData["Circle"];
  TriangleOn = letterData["Triangle"];

  if ("Alpha" in letterData) {
    Alpha = letterData["Alpha"];
  }
  else {
    Alpha = 255;
  }

  //relative variables for resizing shapes
  rel20 = 20;
  rel10 = 10;
  relCirc = 3.6;

  //stroke variables
  strokeWeight(5);
  strokeJoin(ROUND);
  noStroke();
  

  //Square controlled here
  if(Alpha>=200)
    stroke(36, 48, 61, Alpha);
  fill(36, 48, 61, Alpha);
  if(squareOn>=70)
    rect(posx, posy, rel20*SizeOf, rel20*SizeOf);

  //Circle controlled here
  if(Alpha>=200)  
    stroke(216, 207, 203, Alpha);
  fill(216, 207, 203, Alpha);
  if(circleOn>=70)
    ellipse((posx)+SizeOf*rel10, (posy)+SizeOf*rel10, rel20*SizeOf, rel20*SizeOf);

  //Triangle controlled here
  if(Alpha>=200)  
    stroke(216, 207, 203, Alpha);
  fill(216, 207, 203, Alpha);
  if(TriangleOn>=70){
    triangle(posx, posy, posx+rel20*SizeOf, posy, posx+SizeOf*rel10,posy+SizeOf*rel10);
    triangle(posx, posy+SizeOf*rel20, posx+rel20*SizeOf, posy+SizeOf*rel20, posx+SizeOf*rel10,posy+SizeOf*rel10);

  }

  //Circle grid Controlled here
  if(Alpha>=200)
    stroke(193, 5, 5, Alpha);  
  fill(193, 5, 5, Alpha);
  for (var i = 0; i < 3; i++) {
    yTranslate=i*SizeOf*rel10;
    for (var j = 0; j < 3; j++) {
      xTranslate=j*SizeOf*rel10;
      if(circleGridArray[i][j]>=50)    
        ellipse((posx)+xTranslate, (posy)+yTranslate, relCirc*SizeOf, relCirc*SizeOf);
    }
  }
}

function interpolate_letter (percent, oldObj, newObj) {
  let new_letter = {};

//controls the fade in and out on animation
if(percent<=50){
  new_letter["Alpha"] = map(percent, 50, 0, 0, 255);
}else if(percent<=90){
  new_letter["Alpha"]= map(percent, 50, 100, 0, 255);
}else
new_letter["Alpha"]= 255;

new_letter["TL"] = map(percent, 0, 100, oldObj["TL"], newObj["TL"]);
new_letter["TM"] = map(percent, 0, 100, oldObj["TM"], newObj["TM"]);
new_letter["TR"] = map(percent, 0, 100, oldObj["TR"], newObj["TR"]);
new_letter["ML"] = map(percent, 0, 100, oldObj["ML"], newObj["ML"]);
new_letter["MM"] = map(percent, 0, 100, oldObj["MM"], newObj["MM"]);
new_letter["MR"] = map(percent, 0, 100, oldObj["MR"], newObj["MR"]);
new_letter["BL"] = map(percent, 0, 100, oldObj["BL"], newObj["BL"]);
new_letter["BM"] = map(percent, 0, 100, oldObj["BM"], newObj["BM"]);
new_letter["BR"] = map(percent, 0, 100, oldObj["BR"], newObj["BR"]);
new_letter["Square"] = map(percent, 0, 100, oldObj["Square"], newObj["Square"]);
new_letter["Circle"] = map(percent, 0, 100, oldObj["Circle"], newObj["Circle"]);
new_letter["Triangle"] = map(percent, 0, 100, oldObj["Triangle"], newObj["Triangle"]);
return new_letter;

}
