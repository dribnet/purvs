/* these are optional special variables which will change the system */
var systemBackgroundColor = "#d0cd94";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor = "#241623";
const strokeColor = "#03045e";

const frontColour = "#241623";
const backColour = "#241623";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  ellipseMode(CENTER);
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
  let sizex2 = letterData["2sizeX"];
  let sizey2 = letterData["2sizeY"];
  let offX2 = letterData["2offsetx"];
  let offY2 = letterData["2offsety"];

  let ibStroke = posx + letterData["2curveX"];
  let ibStroke2 = posy + letterData["2curveY"];
  let ibMidX = posx + letterData["2curveMidX"];
  let ibMidY = posy + letterData["2curveMidY"];
  let iminusBS = posx - letterData["2curveX"];
  let iminusBS2 = posy - letterData["2curveY"];
  let itransX = letterData["2translateX"];
  let itransY = letterData["2translateY"];

  // draw two circles
  fill(frontColour);
  strokeWeight(2);
  stroke("#03045e");

  // ellipse(offX2, offY2, sizex2, sizey2);
  push();
  translate(transX, transY);
  beginShape();
  curveVertex(bMidX, bMidY);
  curveVertex(minusBS, minusBS2); //top wertex
  curveVertex(bStroke, bStroke2); //bottom vertex
  curveVertex(bMidX, minusBS2)
  endShape();
//  line()
  pop();
  ellipse(pos2x, pos2y, sizexx, sizeyy);

  push();
  translate(itransX,itransY);
  beginShape();
  curveVertex(ibMidX, ibMidY);
  curveVertex(iminusBS,iminusBS2); //top wertex
  curveVertex(ibStroke, ibStroke2); //bottom vertex
  curveVertex(ibMidX, iminusBS2)
  endShape();
//  line()
  pop();




}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeX"] = map(percent, 0, 100, oldObj["sizeX"], newObj["sizeX"]);
  new_letter["sizeY"] = map(percent, 0, 100, oldObj["sizeY"], newObj["sizeY"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["curveMidX"] = map(percent,0,100,oldObj["curveMidX"], newObj["curveMidX"]);
  new_letter["curveMidY"] = map(percent,0,100,oldObj["curveMidY"], newObj["curveMidY"]);
  new_letter["curveX"] = map(percent,0,100,oldObj["curveX"], newObj["curveX"]);
  new_letter["curveY"] = map(percent,0,100,oldObj["curveY"], newObj["curveY"]);
  new_letter["translateX"] = map(percent,0,100,oldObj["translateX"], newObj["2translateX"]);
  new_letter["translateY"] = map(percent,0,100,oldObj["translateY"], newObj["2translateY"]);
  new_letter["2curveMidX"] = map(percent,0,100,oldObj["2curveMidX"], newObj["2curveMidX"]);
  new_letter["2curveMidY"] = map(percent,0,100,oldObj["2curveMidY"], newObj["2curveMidY"]);
  new_letter["2curveX"] = map(percent,0,100,oldObj["2curveX"], newObj["2curveX"]);
  new_letter["2curveY"] = map(percent,0,100,oldObj["2curveY"], newObj["2curveY"]);
  new_letter["2translateX"] = map(percent,0,100,oldObj["2translateX"], newObj["2translateX"]);
  new_letter["2translateY"] = map(percent,0,100,oldObj["2translateY"], newObj["2translateY"]);



  return new_letter;
}

var swapWords = [
  "PHYSICAL",
  "ACADEMIC",
  "SUPERIOR"
]
