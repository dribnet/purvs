/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const White  = "#FFFAFA";
const black  = "#353935";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  strokeWeight(5);
  fill(White);
  stroke(black);

  let posx = 0;
  let posy = 0;
  // determine parameters for second circle
  // This code is the foundation of my current project all the credit goes to jeremymaih here is a link to his code https://bl.ocks.org/jeremymaih/99e8644e3b6b4ec8ef263a254e0f017f/a389cc22435a93266aad7e4361f7d655367b045e
  let pos1x = posx + letterData["Rect1x"];
  let pos1y = posy + letterData["Rect1y"];

  let pos2x = posx + letterData["Rect2x"];
  let pos2y = posy + letterData["Rect2y"];

  let pos3x = posx + letterData["Rect3x"];
  let pos3y = posy + letterData["Rect3y"];


  let height1y = letterData["Rect1h"];
  let height2y = letterData["Rect2h"];
  let height3y = letterData["Rect3h"];
  let height4y = letterData["Rect4h"];
  // let height5y = letterData["Rect5h"];
  let rectwidth = letterData["width"];
  let rect2width = letterData["width2"];
  let rect3width = letterData["width3"];

  let rot1 = letterData["Rect1r"];
  let rot2 = letterData["Rect2r"];
  let rot3 = letterData["Rect3r"];

  let cornerVal = letterData["corners"];



  push();  // based off jeremymaih’s code structure
  angleMode(DEGREES);
  rectMode(CENTER);

  push();
  fill(2,250,216);//turq
  translate(pos1x, pos1y);//retangle 1
  rotate(rot1);
  rect(0, 0, rectwidth, height1y,cornerVal);
  pop();

  push();
  fill(200,3,80);//red
  translate(pos2x, pos2y);//rectangle 2
  rotate(rot2);
  rect(0,0,rect2width,height2y,cornerVal);//left side of the A
  pop();

  push();
  fill(153,2,214);//purple
  translate(pos3x, pos3y);//Rectangle 3
  rotate(rot3);
  rect(0,0,rect3width,height3y,cornerVal);
  pop();


  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["Rect1x"]  = map(percent, 50, 100, oldObj["Rect1x"], newObj["Rect1x"]);
  new_letter["Rect1y"] = map(percent, 0, 100, oldObj["Rect1y"], newObj["Rect1y"]);
  new_letter["Rect2x"] = map(percent, 50, 100, oldObj["Rect2x"], newObj["Rect2x"]);
  new_letter["Rect2y"] = map(percent, 0, 100, oldObj["Rect2y"], newObj["Rect2y"]);
  new_letter["Rect3x"] = map(percent, 50, 100, oldObj["Rect3x"], newObj["Rect3x"]);
  new_letter["Rect3y"] = map(percent, 0, 100, oldObj["Rect3y"], newObj["Rect3y"]);
  new_letter["Rect1h"] = map(percent, 0, 100, oldObj["Rect1h"], newObj["Rect1h"]);
  new_letter["Rect2h"] = map(percent, 0, 100, oldObj["Rect2h"], newObj["Rect2h"]);
  new_letter["Rect3h"] = map(percent, 0, 100, oldObj["Rect3h"], newObj["Rect3h"]);
  new_letter["Rect4h"] = map(percent, 0, 100, oldObj["Rect4h"], newObj["Rect4h"]);
  new_letter["width"] = map(percent, 0, 100, oldObj["width"], newObj["width"]);
  new_letter["width2"] = map(percent, 0, 100, oldObj["width2"], newObj["width2"]);
  new_letter["width3"] = map(percent, 0, 100, oldObj["width3"], newObj["width3"]);
  new_letter["Rect1r"] = map(percent, 0, 100, oldObj["Rect1r"], newObj["Rect1r"]);
  new_letter["Rect2r"] = map(percent, 0, 100, oldObj["Rect2r"], newObj["Rect2r"]);
  new_letter["Rect3r"] = map(percent, 0, 100, oldObj["Rect3r"], newObj["Rect3r"]);
  new_letter["corners"] = map(percent, 0, 100, oldObj["corners"], newObj["corners"]);

  // if(percent == 50);{
  //   new_letter["Rect2x"] = map(percent, 0, 100, oldObj["Rect2x"], newObj["Rect2x"]);
  // }
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "QUARTERS"
]
