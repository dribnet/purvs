/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF";
var systemLineColor = "#000090";
var systemBoxColor = "#5479A3";

/* internal constants */
const berryBlue = "#50B1D4";
const bubblegumPink = "#DC5889";
const yellowBello = "#FADF4B";

const strokeColor = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  strokeWeight(4);
  angleMode(DEGREES);

  //Parameters
  //Arc
  let arcSize = letterData["arcSize"];
  let arcPosX = 50 + letterData["arcOffSetX"];
  let arcPosY = 150 + letterData["arcOffSetY"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];
  //Circle
  let ellipseSize = letterData["ellipseSize"];
  let ellipsePosX = 50 + letterData["ellipseOffSetX"];
  let ellipsePosY = 150 + letterData["ellipseOffSetY"];
  //Rect
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];
  let rectPosX = 40 + letterData["rectPosX"];
  let rectPosY = 120 + letterData["rectPosY"];
  let angleRotate = letterData["angleRotate"];
  let translateX = letterData["translateX"];
  let translateY = letterData["translateY"];

  push();
  //Creates a drop shadow with no stroke
  noStroke();
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = strokeColor;

  //Draws an arc
  fill(bubblegumPink);
  arc(arcPosX, arcPosY, arcSize, arcSize, arcStart, arcEnd);

  //Draws an ellipse
  fill(yellowBello);
  ellipse(ellipsePosX, ellipsePosY, ellipseSize, ellipseSize);

  //Draws a rect and rotates it
  fill(berryBlue);
  push();
  translate(rectPosX, rectPosY);
  rotate(angleRotate);
  rect(0, 0, rectWidth, rectHeight);
  pop();
  pop();

  //Outline of the letters that are drawn
  var outline = true;
  if (outline) {
    noFill();
    stroke(strokeColor);
    strokeWeight(2.5);

    push();
    translate(rectPosX - 7, rectPosY - 7);
    rotate(angleRotate);
    rect(0, 0, rectWidth, rectHeight);
    pop();

    arc(arcPosX - 7, arcPosY - 7, arcSize, arcSize, arcStart, arcEnd);

    ellipse(ellipsePosX - 7, ellipsePosY - 7, ellipseSize, ellipseSize);
  }
  //Texture of the letters
  dots(rectPosX, rectPosY, rectWidth, rectHeight, angleRotate, translateX, translateY);
}

//The function that creates the dot texture that we will call in the main function
function dots(rectPosX, rectPosY, widthx, heighty, angleRotate, translateX, translateY) {
  var gap = 13; //How far apart the dots will be
  var xMultiplier = int(widthx / gap); //The rectWidth of the row of dots
  var yMultiplier = int(heighty / gap); //The rectHeight of the row of dots

  push();
  translate(translateX, translateY);
  if (angleRotate > 0) {
    rotate(angleRotate);
  }

  for (var x = 0 + rectPosX; x <= rectPosX + (gap * xMultiplier); x += gap) {
    for (var y = 0 + rectPosY; y <= rectPosY + (gap * yMultiplier); y += gap) {
      noStroke();
      fill(255);
      ellipse(x, y, 6, 6);
    }
  }
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcSize"] = map(percent, 25, 100, oldObj["arcSize"], newObj["arcSize"]);
  new_letter["arcOffSetX"] = map(percent, 0, 100, oldObj["arcOffSetX"], newObj["arcOffSetX"]);
  new_letter["arcOffSetY"] = map(percent, 0, 100, oldObj["arcOffSetY"], newObj["arcOffSetY"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

  new_letter["ellipseSize"] = map(percent, 25, 100, oldObj["ellipseSize"], newObj["ellipseSize"]);
  new_letter["ellipseOffSetX"] = map(percent, 0, 100, oldObj["ellipseOffSetX"], newObj["ellipseOffSetX"]);
  new_letter["ellipseOffSetY"] = map(percent, 0, 100, oldObj["ellipseOffSetY"], newObj["ellipseOffSetY"]);

  new_letter["rectWidth"] = map(percent, 25, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["rectHeight"] = map(percent, 25, 100, oldObj["rectHeight"], newObj["rectHeight"]);
  new_letter["rectPosX"] = map(percent, 0, 100, oldObj["rectPosX"], newObj["rectPosX"]);
  new_letter["rectPosY"] = map(percent, 0, 100, oldObj["rectPosY"], newObj["rectPosY"]);
  new_letter["angleRotate"] = map(percent, 0, 100, oldObj["angleRotate"], newObj["angleRotate"]);
  new_letter["translateX"] = map(percent, 0, 100, oldObj["translateX"], newObj["translateX"]);
  new_letter["translateY"] = map(percent, 0, 100, oldObj["translateY"], newObj["translateY"]);
  return new_letter;
}

var swapWords = [
  "BAZINGA!", //Name of my font
  "MUNDANE!",
  "ADVOCATE",
  "QUESTION",
  "REBELLED",
  "RIDICULE",
  "BOUNDARY",
  "COLORFUL"
]
