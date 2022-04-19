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
  let transY = letterData ["translateY"];

  // draw two circles
  fill(frontColour);
  strokeWeight(2);
  stroke("#03045e");
  // strokeWeight(0);
  ellipse(pos2x, pos2y, size2, size2);
  push();
  translate(transX,transY);
  beginShape();
  curveVertex(bMidX, bMidY);
  curveVertex(bStroke, bStroke2);//bottom vertex
  curveVertex(minusBS, minusBS2);//top wertex
  curveVertex(bMidX, minusBS2)
  endShape();
  pop();
//   push();
//     stroke("#03045e");
//   arc(pos2x,pos2y,size2,size2,offY*2,offX*2);
// pop();






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
