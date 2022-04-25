/* these are optional special variables which will change the system */
var systemBackgroundColor = "#aeffab";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
// const backgroundColor = "#aeffab";
const strokeColor = "#03045e";

const frontColour = "#af94ff";
const backColour = "#fb94ff";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  // ellipseMode(CENTER);
  // determine parameters for second circle
  let posx = 30
  let posy = 100
  let offX = letterData["offsetx"];
  let offY = letterData["offsety"];
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let bStroke = posx + letterData["curveX"];
  let bStroke2 = posy + letterData["curveY"];
  let bMidX = posx + letterData["curveMidX"];
  let bMidY = posy + letterData["curveMidY"];
  let minusBS = posx - letterData["curveX"];
  let minusBS2 = posy - letterData["curveY"];
  let transX = letterData["translateX"];
  let transY = letterData["translateY"];
  let sizexx = letterData["sizeX"];
  let sizeyy = letterData["sizeY"];
  let rotate1 = letterData["rotate"];
  let sizex2 = letterData["2sizeX"];
  let sizey2 = letterData["2sizeY"];
  let offX2 = letterData["2offsetx"];
  let offY2 = letterData["2offsety"];
  let rotate2 = letterData["2rotate"];

  // draw two circles
  fill(frontColour);
  strokeWeight(2);
  stroke("#03045e");
  push();
  // translate(offX2,offY2);
  rotate(rotate2);
  ellipse(offX2, offY2, sizex2, sizey2);
  pop();
  push();
  // translate(pos2x,pos2y);
  rotate(rotate1);
  ellipse(pos2x, pos2y, sizexx, sizeyy);
  pop();
  rotate(0);
  push();
  translate(transX, transY);
  beginShape();
  curveVertex(bMidX, bMidY);
  curveVertex(bStroke, bStroke2); //bottom vertex
  curveVertex(minusBS, minusBS2); //top wertex
  curveVertex(bMidX, minusBS2)
  endShape();
  pop();





}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
