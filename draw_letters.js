var circleOn = 1;
var squareOn = 1;
var TriangleOn = 1;
var posx = 0;
var posy = 100;
var SizeOf = 5;
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
  //guidelines
  // noFill();
  // color('red');
  // rect(0, 0, 100, 200);

  // determine parameters for second circle

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



  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, SizeOf2, SizeOf2);
  stroke(0, 0, 0, Alpha);
  strokeWeight(2);
  fill(0, 0, 0, Alpha);
  if(squareOn>=80)
    rect(posx, posy, 20*SizeOf, 20*SizeOf);

  fill(colorCircle);
  if(circleOn>=60)
    ellipse((posx)+SizeOf*10, (posy)+SizeOf*10, 20*SizeOf, 20*SizeOf);

  fill(240, 240, 240, Alpha);
  if(TriangleOn>=70){
    triangle(posx, posy, posx+20*SizeOf, posy, posx+SizeOf*10,posy+SizeOf*10);
    triangle(posx, posy+SizeOf*20, posx+20*SizeOf, posy+SizeOf*20, posx+SizeOf*10,posy+SizeOf*10);
    //line(posx, posy, posx+20*SizeOf, posy+SizeOf*20);
    //line(posx, posy+SizeOf*20, posx+20*SizeOf, posy)
    //quad(posx+100, posy-100, posx+20 SizeOf, posy, posx+100, posy+100, posx, posy,)
  }

  
    
  fill(224, 0, 0, Alpha);
  for (var i = 0; i < 3; i++) {
    yTranslate=i*SizeOf*10;
    for (var j = 0; j < 3; j++) {
      xTranslate=j*SizeOf*10;
      if(circleGridArray[i][j]>=50)    
        ellipse((posx)+xTranslate, (posy)+yTranslate, 3*SizeOf, 3*SizeOf);
    }
  }


}
