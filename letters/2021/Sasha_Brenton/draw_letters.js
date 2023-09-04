var systemBackgroundColor = "#e6e6e6";
var systemLineColor = "#e6e6e6";
var systemBoxColor = "#e6e6e6";



function drawLetter(letterData) {
  push()

  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  let posx = 50; //center of letter box
  let posy = 150;

  //renaming and initiaizing variables
  let shapeType = letterData["backgroundShapeType"];
  let shapeRotate = letterData["backgroundShapeRotate"];
  let shapeColour1 = letterData["backgroundShapeColour1"]
  let shapeColour2 = letterData["backgroundShapeColour2"]
  let triPosX = letterData["trianglePosX"];
  let triPosY = letterData["trianglePosY"];
  let triRotate = letterData["triangleRotate"];
  let triSize = letterData["triangleSize"];
  let lines1Xpos = letterData["lines1VerticalXpos"];
  let lines2Ypos = letterData["lines2HorizontalYpos"];
  let lines3Ypos = letterData["lines3HorizontalYpos"];
  let linesrotate = letterData["linesHorizonalRotate"];
  let lines1opacity = 0;
  let lines2opacity = 0;
  let lines3opacity = 0;

  

  // background shape
  push()
    if (shapeType < 2){ //square
      translate(posx, posy); //centers square so it can be rotated
      rotate(shapeRotate);
      fill(85, shapeColour1, shapeColour2); //lighter blue
      rect(posx-50, posy-150, 100, 100);

    } else if (shapeType >1 && shapeType < 3){ //circle
      fill(85, shapeColour1, shapeColour2); //darker blue
      ellipse(posx, posy, 100, 100); 
      //circle doesnt need rotate, as it would stay the same
      

    } else if (shapeType > 2){ //triangle
      translate(posx, posy); //centers triangle so it can be rotated
      rotate(shapeRotate);
      fill(85, shapeColour1, shapeColour2); //greeny blue
      triangle(posx-50, posy-200, posx, posy-100, posx-100, posy-100);
    }

  pop()
  //



  //foreground triangle
  push();
  fill(255);
  translate(posx, posy); //centers triangle so it can be rotated
  rotate(triRotate);
  scale(triSize);
  triangle(triPosX, triPosY, 30+triPosX, 50+triPosY, -30+triPosX, 50+triPosY);
  pop();
  //



  //vertical lines
  if (lines1Xpos <= 0){ //if x postion of lines is < 0 then lines disappear
    lines1opacity = 0;
  } else if (lines1Xpos >0){
    lines1opacity =255;
  }

  push();
  stroke(255,lines1opacity);
  strokeWeight(1.5);
  translate(posx, posy);
  for (var i=1; i<5; i=i+1){ //for loop that creates 4 lines, 5 pixels apart
    line(posx-105+(i*5)+lines1Xpos, posy-200, posx-105+(i*5)+lines1Xpos, posy-100);
  } 
  pop(); 
  //



  //horizontal lines 1
  if (lines2Ypos <= 0){ //if y postion of lines is < 0 then lines disappear
    lines2opacity = 0;
  } else if (lines2Ypos >0){
    lines2opacity =255;
  }

  push();
  stroke(255,lines2opacity);
  strokeWeight(1.5);
  translate(posx, posy);
  rotate(linesrotate);
  for (var y=1; y<5; y=y+1){ //for loop that creates 4 lines, 5 pixels apart
    line(posx-100, posy-205+(y*5)+lines2Ypos, posx, posy-205+(y*5)+lines2Ypos);
  }
  pop();
  //



  //horizontal lines 2
  if (lines3Ypos <= 0){ //if y postion of lines is < 0 then lines disappear
    lines3opacity = 0;
  } else if (lines3Ypos >0){
    lines3opacity =255
  }

  push();
  stroke(255,lines3opacity);
  strokeWeight(1.5);
  translate(posx, posy);
  rotate(linesrotate);
  for (var x=1; x<5; x=x+1){ //for loop that creates 4 lines, 5 pixels apart
    line(posx-100, posy-205+(x*5)+lines3Ypos, posx, posy-205+(x*5)+lines3Ypos);
  }
  pop();
  //




  pop();
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultCharacter = getObjFromChar("default");

  if (percent < 50){ //when percent is below half change letter to defult
    new_letter["backgroundShapeType"]    = map(percent, 0, 50, oldObj["backgroundShapeType"], defaultCharacter["backgroundShapeType"]);
    new_letter["backgroundShapeRotate"]    = map(percent, 0, 50, oldObj["backgroundShapeRotate"], defaultCharacter["backgroundShapeRotate"]);
    new_letter["backgroundShapeColour1"] = map(percent, 0, 50, oldObj["backgroundShapeColour1"], defaultCharacter["backgroundShapeColour1"]);
    new_letter["backgroundShapeColour2"] = map(percent, 0, 50, oldObj["backgroundShapeColour2"], defaultCharacter["backgroundShapeColour2"]);
    new_letter["trianglePosX"]    = map(percent, 0, 50, oldObj["trianglePosX"], defaultCharacter["trianglePosX"]);
    new_letter["trianglePosY"] = map(percent, 0, 50, oldObj["trianglePosY"], defaultCharacter["trianglePosY"]);
    new_letter["triangleRotate"] = map(percent, 0, 50, oldObj["triangleRotate"], defaultCharacter["triangleRotate"]);
    new_letter["triangleSize"] = map(percent, 0, 50, oldObj["triangleSize"], defaultCharacter["triangleSize"]);
    new_letter["lines1VerticalXpos"] = map(percent, 0, 50, oldObj["lines1VerticalXpos"], defaultCharacter["lines1VerticalXpos"]);
    new_letter["lines2HorizontalYpos"] = map(percent, 0, 50, oldObj["lines2HorizontalYpos"], defaultCharacter["lines2HorizontalYpos"]);
    new_letter["lines3HorizontalYpos"] = map(percent, 0, 50, oldObj["lines3HorizontalYpos"], defaultCharacter["lines3HorizontalYpos"]);
    new_letter["linesHorizonalRotate"] = map(percent, 0, 50, oldObj["linesHorizonalRotate"], defaultCharacter["linesHorizonalRotate"]);

  } else{ //else change the letter to the new letter
    new_letter["backgroundShapeType"]    = map(percent, 51, 100, defaultCharacter["backgroundShapeType"], newObj["backgroundShapeType"]);
    new_letter["backgroundShapeRotate"]    = map(percent, 51, 100, defaultCharacter["backgroundShapeRotate"], newObj["backgroundShapeRotate"]);
    new_letter["backgroundShapeColour1"] = map(percent, 0, 50, oldObj["backgroundShapeColour1"], defaultCharacter["backgroundShapeColour1"]);
    new_letter["backgroundShapeColour2"] = map(percent, 0, 50, oldObj["backgroundShapeColour2"], defaultCharacter["backgroundShapeColour2"]);
    new_letter["trianglePosX"]    = map(percent, 51, 100, defaultCharacter["trianglePosX"], newObj["trianglePosX"]);
    new_letter["trianglePosY"] = map(percent, 51, 100, defaultCharacter["trianglePosY"], newObj["trianglePosY"]);
    new_letter["triangleRotate"] = map(percent, 51, 100, defaultCharacter["triangleRotate"], newObj["triangleRotate"]);
    new_letter["triangleSize"] = map(percent, 51, 100, defaultCharacter["triangleSize"], newObj["triangleSize"]);
    new_letter["lines1VerticalXpos"] = map(percent, 51, 100, defaultCharacter["lines1VerticalXpos"], newObj["lines1VerticalXpos"]);
    new_letter["lines2HorizontalYpos"] = map(percent, 51, 100, defaultCharacter["lines2HorizontalYpos"], newObj["lines2HorizontalYpos"]);
    new_letter["lines3HorizontalYpos"] = map(percent, 51, 100, defaultCharacter["lines3HorizontalYpos"], newObj["lines3HorizontalYpos"]);
    new_letter["linesHorizonalRotate"] = map(percent, 51, 100, defaultCharacter["linesHorizonalRotate"], newObj["linesHorizonalRotate"]);
  }


  return new_letter;
}


var swapWords = [
  "NAUTICAL",
  "ABSTRACT",
  "NEGATIVE"
]