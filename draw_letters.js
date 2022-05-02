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
  // let pos4x = posx + letterData["Rect4x"];
  // let pos4y = posy + letterData["Rect4y"];
  // let pos5x = posx + letterData["Rect5x"];
  // let pos5y = posy + letterData["Rect5y"];

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
  // let rot4 = letterData["Rect4r"];

  let cornerVal = letterData["corners"];



  push();  // based off jeremymaih’s code structure
  angleMode(DEGREES);
  rectMode(CENTER);

  push();
  translate(pos1x, pos1y);
  rotate(rot1);
  rect(0, 0, rectwidth, height1y,cornerVal);
  pop();

  push();
  translate(pos2x, pos2y);
  rotate(rot2);
  rect(0,0,rect2width,height2y,cornerVal);//left side of the A
  pop();

  push();
  translate(pos3x, pos3y);
  rotate(rot3);
  rect(0,0,rect3width,height3y,cornerVal);//left side of the A
  pop();


  pop();

}

function interpolate_letter(perc90t, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "QUARTERS"
]
