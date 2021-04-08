/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ebebeb";
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
  let lines2Ypos = letterData["linesHorizontalYpos"];


  

  // background shape
  fill('#59ccff');

  push()
    if (shapeType < 2){
      translate(posx, posy);
      rotate(shapeRotate);
      rect(posx-50, posy-150, 100, 100);

    } else if (shapeType >1 && shapeType < 3){
      ellipse(posx, posy, 100, 100); //circle doesnt need rotate, as it would stay the same

    } else if (shapeType > 2){
      translate(posx, posy);
      rotate(shapeRotate);
      triangle(posx-50, posy-200, posx, posy-100, posx-100, posy-100);
    }

  pop()


  //triangle
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
  push();
    if (lines1Xpos > 0){
      stroke(260);
      strokeWeight(1.5);
      translate(posx, posy)
      line(posx-100+lines1Xpos, posy-200, posx-100+lines1Xpos, posy-100);
      line(posx-95+lines1Xpos, posy-200, posx-95+lines1Xpos, posy-100);
      line(posx-90+lines1Xpos, posy-200, posx-90+lines1Xpos, posy-100);
      line(posx-85+lines1Xpos, posy-200, posx-85+lines1Xpos, posy-100);

    }
  pop();



  //horizontal lines
  push();
    if (lines2Ypos > 0){
      stroke(260);
      strokeWeight(1.5);
      translate(posx, posy)
      line(posx-100, posy-200+lines2Ypos, posx, posy-200+lines2Ypos);
      line(posx-100, posy-195+lines2Ypos, posx, posy-195+lines2Ypos);
      line(posx-100, posy-190+lines2Ypos, posx, posy-190+lines2Ypos);
      line(posx-100, posy-185+lines2Ypos, posx, posy-185+lines2Ypos);

    }
  pop();

pop()
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
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]