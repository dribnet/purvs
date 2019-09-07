/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * earSize can vary from 0 to 10
 * earDist is the distance between ears and varies from 0 to 10
 * faceColor is 1,2,3,4 for yellow,blue,red, or violet respectively
 */
 let rando = [];
let outlines = 7;
function drawMickeyMouse(faceWidth, faceLength, browLength) {
  for(var i =0;i<outlines;i++){
    rando[i]=random(-0.3,0.3);
  }
  const yellow = color(255, 255, 255);
  const blue = color(0, 0, 200);
  const red = color(200, 0, 0);
  const violet = color(150, 0, 150);
  const error_green = color(0, 255, 0);

  // if(faceColor == 1) {
  //   fill(yellow);
  // }
  // else if (faceColor==2) {
  //   fill(blue);
  // }
  // else if (faceColor==3) {
  //   fill(red);
  // }
  // else if (faceColor == 4) {
  //   fill(violet);
  // }
  // else {
  //   fill(error_green);
  // }

  // head
  noFill();
  noStroke();
  scale(0.9);
    push();
  fill(0,0,0,0); //behind the zig zag colour
    fillBlob(faceWidth,faceLength,2,0);
  pop();
  stroke(3, 211, 252);//zig zag colour
  push();
  scale(1.05);
  strokeWeight(0.1);
  drawBlob(faceWidth,faceLength,2,0);
  drawBlob(faceWidth,faceLength,2,0);
  pop();
  strokeWeight(0.7);
  zig(faceWidth,faceLength,2,0,3);
  zag(faceWidth,faceLength,2,0,7);
  push();
  strokeWeight(0.3);
  stroke(33);//blob outline colour
  drawBlob(faceWidth,faceLength,2,0);
  features(faceWidth,faceLength,browLength);
  pop();
}

function fillBlob(faceWidth,faceLength,x,y){
  noStroke();
  drawBlob(faceWidth,faceLength,x,y);

}
function drawBlob(faceWidth,faceLength,x,y){
  for(var i =0; i<outlines; i++){
push();
translate(x+random(-0.5,0.5),y+random(-0.5,0.5));
  beginShape();
curveVertex(-7, -7+faceLength+random(-0.5,0.5));
curveVertex(-2+faceWidth+random(-0.5,0.5), -9);
curveVertex(2, -9);
curveVertex(7, -7);
curveVertex(7, 5+faceLength+random(-0.5,0.5));
curveVertex(0+faceWidth+random(-0.5,0.5), 7+faceLength+random(-0.5,0.5));
curveVertex(-5+faceWidth+random(-0.5,0.5), 5+faceLength+random(-0.5,0.5));
curveVertex(-5+faceWidth+random(-0.5,0.5), -2);
curveVertex(-2+faceWidth+random(-0.5,0.5), -9);
curveVertex(7, -7);
endShape();
pop();
}
}
function features(faceWidth,faceLength,browLength){
beginShape();
curveVertex(faceWidth-3,random(-3,3));
curveVertex(faceWidth+0.1,-7);
curveVertex(faceWidth+1+browLength,-7);
curveVertex(faceWidth+10,random(-3,3));
endShape();
}

function zig(faceWidth,faceLength,x,y,numOf){
  for(var i = 0;i<numOf;i++){
  beginShape();
for(var x =-10;x<8+faceLength;x++){
  vertex(random(faceWidth-1,7),x);
}
  endShape();
}
}

function zag(faceWidth,faceLength,x,y,numOf){
  for(var i = 0;i<numOf;i++){
beginShape();
for(var y =faceWidth-4;y<11;y++){
  vertex(y,random(faceLength+6,-8));
}
endShape();
}
}