/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF";
// var systemBackgroundColor = "#FADF4B";
var systemLineColor = "#000090";
var systemBoxColor = "#5479A3";

/* internal constants */
const berryBlue = "#50B1D4";
const bubblegumPink = "#DC5889";
const yellowBello = "#FADF4B";

const strokeColor = "#000000";
const outlineColor = (0, 0, 0, 0);

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
  let size = letterData["size"];
  let size1 = letterData["size1"];
  let width = letterData["width"];
  let height = letterData["height"];
  let posx = 50 + letterData["offsetx"];
  let posy = 150 + letterData["offsety"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];
  let pos2x = 50 + letterData["offsetx2"];
  let pos2y = 150 + letterData["offsety2"];
  let pos3x = 40 + letterData["offsetx3"];
  let pos3y = 120 + letterData["offsety3"];
  let angle = letterData["angle"];
  let translatex = letterData["translatex"];
  let translatey = letterData["translatey"];

  push();
  //Creates a drop shadow with no stroke
  noStroke();
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = strokeColor;

  //Draws an arc
  fill(bubblegumPink);
  arc(posx, posy, size, size, arcStart, arcEnd);

  //Draws an ellipse
  fill(yellowBello);
  ellipse(pos2x, pos2y, size1, size1);

  //Draws a rect and rotates it
  fill(berryBlue);
  push();
  translate(pos3x, pos3y);
  rotate(angle);
  rect(0, 0, width, height);
  pop();
  pop();

  //Outline of the letters that are drawn
  var outline = true;
  if (outline) {
    noFill();
    stroke(strokeColor);
    strokeWeight(2.5);

    push();
    translate(pos3x - 7, pos3y - 7);
    rotate(angle);
    rect(0, 0, width, height);
    pop();

    arc(posx - 7, posy - 7, size, size, arcStart, arcEnd);

    ellipse(pos2x - 7, pos2y - 7, size1, size1);
  }
  //Texture of the letters
  dots(pos3x, pos3y, width, height, angle, translatex, translatey);
}

//The function that creates the dot texture that we will call in the main function
function dots(pos3x, pos3y, widthx, heighty, angle, translatex, translatey) {
  var gap = 13; //How far apart the dots will be
  var xMultiplier = int(widthx / gap); //The width of the row of dots
  var yMultiplier = int(heighty / gap); //The height of the row of dots

  push();
  translate(translatex, translatey);
  if (angle > 0) {
    rotate(angle);
  }

  for (var x = 0 + pos3x; x <= pos3x + (gap * xMultiplier); x += gap) {
    for (var y = 0 + pos3y; y <= pos3y + (gap * yMultiplier); y += gap) {
      noStroke();
      fill(255);
      ellipse(x, y, 6, 6);
    }
  }
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 25, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

  new_letter["size1"] = map(percent, 25, 100, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);

  new_letter["width"] = map(percent, 25, 100, oldObj["width"], newObj["width"]);
  new_letter["height"] = map(percent, 25, 100, oldObj["height"], newObj["height"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["angle"] = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);
  return new_letter;
}

var swapWords = [
  "BAZINGA!", //Name of my font
  "MUNDANE!",
  "QUESTION",
  "ADVOCATE",
  "BOUNDARY",
  "COLORFUL",
  "RIDICULE"
]
