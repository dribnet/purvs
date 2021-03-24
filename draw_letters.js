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
  let colour = letterData["boxColour"];
  let triPosX = letterData["offsetx"];
  let triPosY = letterData["offsety"];
  let triRotate = letterData["triangleRotate"];
  let triSize = letterData["triangleSize"];
  let leftLineLength = letterData["length"];


  // background shape
  fill(colour);

  if (shapeType == 1){
    rect(posx, posy, 100, 100);
  } else if (shapeType == 2){
    ellipse(posx, posy, 100, 100);
  } else if (shapeType == 3){
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

  //left lines
  push();
  if (leftLineLength > 0){
    stroke(260);
    strokeWeight(1.5);
    line(posx-45, posy-50, posx-45, posy-50+leftLineLength);
    line(posx-40, posy-50, posx-40, posy-50+leftLineLength);
    line(posx-35, posy-50, posx-35, posy-50+leftLineLength);
    line(posx-30, posy-50, posx-30, posy-50+leftLineLength);
  }
pop();

pop()
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]