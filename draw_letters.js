const colorFront  = "#199cff";
const colorStroke = "#ffaa00";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

  var c=0;
  var r1=0;
  var r2=0;
  var r3=0;
  var r4=0;
  var r5=0;
  var ry1=0;
  var ry2=0;
  var ry3=0;
  var ry4=0;
  var ry5=0;
function drawLetter(letterData) {
  // color/stroke setup
  fill(255);
  stroke(255);
  strokeWeight(7);
rectMode(CENTER);
  // determine parameters for second circle
  let x1 = letterData["x1"]+r1;
  let y1 = letterData["y1"]+ry1;
  let x2 = letterData["x2"]+r2;
  let y2 = letterData["y2"]+ry2;
  let x3 = letterData["x3"]+r3;
  let y3 = letterData["y3"]+ry3;
  let x4 = letterData["x4"]+r4;
  let y4 = letterData["y4"]+ry4;
  let x5 = letterData["x5"]+r5;
  let y5 = letterData["y5"]+ry5;
line(x1,y1,x2,y2);
line(x2,y2,x3,y3);
line(x3,y3,x4,y4);
line(x4,y4,x5,y5);
stroke(255);
rect(x1,y1,3,3);
rect(x2,y2,3,3);
rect(x3,y3,3,3);
rect(x4,y4,3,3);
rect(x4,y4,3,3);
rect(x5,y5,3,3);
if(c>1000){
  c=0;
  r1=random(-7,7);
  r2=random(-7,7);
  r3=random(-7,7);
  r4=random(-7,7);
  r5=random(-7,7);
  ry1=random(-7,7);
  ry2=random(-7,7);
  ry3=random(-7,7);
  ry4=random(-7,7);
  ry5=random(-7,7);
}
c++;
}
function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x1"]=map(percent,0,100,oldObj["x1"],newObj["x1"]);
  new_letter["y1"]=map(percent,0,100,oldObj["y1"],newObj["y1"]);
  new_letter["x2"]=map(percent,0,100,oldObj["x2"],newObj["x2"]);
  new_letter["y2"]=map(percent,0,100,oldObj["y2"],newObj["y2"]);
  new_letter["x3"]=map(percent,0,100,oldObj["x3"],newObj["x3"]);
  new_letter["y3"]=map(percent,0,100,oldObj["y3"],newObj["y3"]);
  new_letter["x4"]=map(percent,0,100,oldObj["x4"],newObj["x4"]);
  new_letter["y4"]=map(percent,0,100,oldObj["y4"],newObj["y4"]);
  new_letter["x5"]=map(percent,0,100,oldObj["x5"],newObj["x5"]);
  new_letter["y5"]=map(percent,0,100,oldObj["y5"],newObj["y5"]);
  return new_letter;
}