/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e6e6e6";
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
  push()

  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  let posx = 50;
  let posy = 150;

  let shapeType = letterData["backgroundShapeType"];
  let shapeRotate = letterData["backgroundShapeRotate"];
  let triPosX = letterData["offsetx"];
  let triPosY = letterData["offsety"];
  let triRotate = letterData["triangleRotate"];
  let triSize = letterData["triangleSize"];
  let lines1Xpos = letterData["linesVerticalXpos"];
  let lines2Ypos = letterData["lines1HorizontalYpos"];
  let lines3Ypos = letterData["lines2HorizontalYpos"];
  let linesrotate = letterData["lines2HorizonalRotate"];
  let lines1opacity = 0;
  let lines2opacity = 0;
  let lines3opacity = 0;

  

  // background shape
  // fill('#59ccff');

  push()
    if (shapeType < 2){ //square
      translate(posx, posy);
      rotate(shapeRotate);
      fill('#59ccff');
      rect(posx-50, posy-150, 100, 100);

    } else if (shapeType >1 && shapeType < 3){ //circle
      fill('#52b4ff');
      ellipse(posx, posy, 100, 100); //circle doesnt need rotate, as it would stay the same
      

    } else if (shapeType > 2){ //triangle
      translate(posx, posy);
      rotate(shapeRotate);
      fill('#53d2dc');
      triangle(posx-50, posy-200, posx, posy-100, posx-100, posy-100);
    }

  pop()


  //foreground triangle
  push();
    if (triSize > 0){
      fill(260);
      translate(posx, posy);
      rotate(triRotate);
      scale(triSize)
      triangle(triPosX, triPosY, 30+triPosX, 50+triPosY, -30+triPosX, 50+triPosY);
    }
  pop();



  //vertical lines
  if (lines1Xpos <= 0){ //if x postion of lines is < 0 then lines disappear
    lines1opacity = 0
  } else if (lines1Xpos >0){
    lines1opacity =255
  }

  push();
  stroke(255,lines1opacity);
  strokeWeight(1.5);
  translate(posx, posy)
  for (var i=1; i<5; i=i+1){
    line(posx-105+(i*5)+lines1Xpos, posy-200, posx-105+(i*5)+lines1Xpos, posy-100);
  } 
  pop(); 



  //horizontal lines 1
  if (lines2Ypos <= 0){ //if y postion of lines is < 0 then lines disappear
    lines2opacity = 0
  } else if (lines2Ypos >0){
    lines2opacity =255
  }

  push();
  stroke(255,lines2opacity);
  strokeWeight(1.5);
  translate(posx, posy)
  rotate(linesrotate)
  for (var y=1; y<5; y=y+1){
    line(posx-100, posy-205+(y*5)+lines2Ypos, posx, posy-205+(y*5)+lines2Ypos);
  }
  pop();


  //horizontal lines 2
  if (lines3Ypos <= 0){ //if y postion of lines is < 0 then lines disappear
    lines3opacity = 0
  } else if (lines3Ypos >0){
    lines3opacity =255
  }

  push();
  stroke(255,lines3opacity);
  strokeWeight(1.5);
  translate(posx, posy)
  rotate(linesrotate)
  for (var x=1; x<5; x=x+1){
    line(posx-100, posy-205+(x*5)+lines3Ypos, posx, posy-205+(x*5)+lines3Ypos);
  }
  pop();



  pop();
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["backgroundShapeType"]    = map(percent, 0, 100, oldObj["backgroundShapeType"], newObj["backgroundShapeType"]);
  new_letter["backgroundShapeRotate"]    = map(percent, 0, 100, oldObj["backgroundShapeRotate"], newObj["backgroundShapeRotate"]);
  new_letter["offsetx"]    = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["triangleRotate"] = map(percent, 0, 100, oldObj["triangleRotate"], newObj["triangleRotate"]);
  new_letter["triangleSize"] = map(percent, 0, 100, oldObj["triangleSize"], newObj["triangleSize"]);
  new_letter["linesVerticalXpos"] = map(percent, 0, 100, oldObj["linesVerticalXpos"], newObj["linesVerticalXpos"]);
  new_letter["lines1HorizontalYpos"] = map(percent, 0, 100, oldObj["lines1HorizontalYpos"], newObj["lines1HorizontalYpos"]);
  new_letter["lines2HorizontalYpos"] = map(percent, 0, 100, oldObj["lines2HorizontalYpos"], newObj["lines2HorizontalYpos"]);


  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]