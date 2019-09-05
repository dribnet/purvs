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
function drawMickeyMouse(faceWidth, faceLength) {
  const yellow = color(255, 255, 255);
  const blue = color(0, 0, 200);
  const red = color(200, 0, 0);
  const violet = color(150, 0, 150);
  const error_green = color(0, 255, 0);

  noStroke();

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
  strokeWeight(0.3);
  stroke(0);
  noFill();
  for(var i =0; i<17; i++){
    var ran = random(-0.1,0.1);
    var ran2 = random(-0.1,0.1);
    push();
    scale(0.7);
  drawBlob(faceWidth+random(-0.3,0.3),faceLength+random(-0.3,0.3),0+i*ran,0+i*ran2);
  pop();

}
  //let earRadius = map(earSize, 0, 10, 4, 7);
  //let earXPos = map(earDist, 0, 10, 3, 7);
  //ellipse(-earXPos, -5, earRadius);
  //ellipse( earXPos, -5, earRadius);
  //stroke(0);
  //strokeWeight(1);
  //point(-7,-7);
}
function drawBlob(faceWidth,faceLength,x,y){

push();
translate(x,y);
//pop some colour here
  beginShape();
curveVertex(-7, -7+faceLength);
curveVertex(-2+faceWidth, -9);
curveVertex(2, -9);
curveVertex(7, -7);
curveVertex(7, 5+faceLength);
curveVertex(0+faceWidth, 7+faceLength);
curveVertex(-5+faceWidth, 5+faceLength);
curveVertex(-5+faceWidth, -2);
curveVertex(-2+faceWidth, -9);
curveVertex(7, -7);
endShape();
pop();
}