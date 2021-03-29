/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
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
  let colour = letterData["shapeColour"];
  let triPosX = letterData["offsetx"];
  let triPosY = letterData["offsety"];
  let triRotate = letterData["triangleRotate"];
  let triSize = letterData["triangleSize"];
  let lines1Xpos = letterData["linesVerticalXpos"];


  

  // background shape
  fill(colour);

  if (shapeType < 2){
    rect(posx, posy, 100, 100);
  } else if (shapeType >1 && shapeType < 3){
    ellipse(posx, posy, 100, 100);
  } else if (shapeType > 2){
    triangle(posx, posy-50, posx+50, posy+50, posx-50, posy+50);
  }


  //triangle
  push();
  translate(posx, posy);
  rotate(triRotate);
  scale(triSize)
  fill(260);
  triangle(triPosX, triPosY, 30+triPosX, 50+triPosY, -30+triPosX, 50+triPosY);
  pop();

  //vertical lines
  push();
    if (lines1Xpos > 0){
      stroke(260);
      strokeWeight(1.5);
      line(posx-50+lines1Xpos, posy-50, posx-50+lines1Xpos, posy+50);
      line(posx-45+lines1Xpos, posy-50, posx-45+lines1Xpos, posy+50);
      line(posx-40+lines1Xpos, posy-50, posx-40+lines1Xpos, posy+50);
      line(posx-35+lines1Xpos, posy-50, posx-35+lines1Xpos, posy+50);

    }
  pop();

pop()
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["backgroundShapeType"]    = map(percent, 0, 100, oldObj["backgroundShapeType"], newObj["backgroundShapeType"]);
  new_letter["shapeColour"] = newObj["shapeColour"];
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