const colorFront1  = "#302217";
const colorFront2  = "#d3b472";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let size2 = letterData["size"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  //main arc
  let MArcS = letterData["mainArcStart"]
  let MArcE = letterData["mainArcEnd"]
  let MArcX = 50 + letterData["mainArcX"]
  let MArcY = 100 + letterData["mainArcY"]
  let MArcSize = letterData["mainArcSize"]

  let SArcSize1 = letterData["subArcSize1"]
  let SArcSize2 = letterData["subArcSize2"]

  //sub arc 1
  let SArcS1 = letterData["subArc1Start"]
  let SArcE1 = letterData["subArc1End"]
  let SArcX1 = 50 + letterData["subArc1X"]
  let SArcY1 = 100 + letterData["subArc1Y"]

  //sub arc 2
  let SArcS2 = letterData["subArc2Start"]
  let SArcE2 = letterData["subArc2End"]
  let SArcX2 = 50 + letterData["subArc2X"]
  let SArcY2 = 100 + letterData["subArc2Y"]

  // draw arcs
  noStroke();
  fill(colorFront1);
  ellipseMode(CENTER);
  arc(MArcX, MArcY, MArcSize, MArcSize, MArcS, MArcE)
  fill(colorFront2);
  arc(SArcX1, SArcY1, SArcSize1, SArcSize1, SArcS1, SArcE1)

  arc(SArcX2, SArcY2, SArcSize2, SArcSize2, SArcS2, SArcE2)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["mainArcStart"]    = map(percent, 0, 100, oldObj["mainArcStart"], newObj["mainArcStart"]);
  new_letter["mainArcEnd"] = map(percent, 0, 100, oldObj["mainArcEnd"], newObj["mainArcEnd"]);
  new_letter["mainArcY"] = map(percent, 0, 100, oldObj["mainArcY"], newObj["mainArcY"]);
  new_letter["mainArcX"] = map(percent, 0, 100, oldObj["mainArcX"], newObj["mainArcX"]);
  new_letter["mainArcSize"]    = map(percent, 50, 100, oldObj["mainArcSize"], newObj["mainArcSize"]);

  new_letter["subArcSize1"] = map(percent, 0, 100, oldObj["subArcSize1"], newObj["subArcSize1"]);
  new_letter["subArcSize2"] = map(percent, 0, 100, oldObj["subArcSize2"], newObj["subArcSize2"]);

  new_letter["subArc1Start"]    = map(percent, 0, 100, oldObj["subArc1Start"], newObj["subArc1Start"]);
  new_letter["subArc1End"] = map(percent, 0, 100, oldObj["subArc1End"], newObj["subArc1End"]);
  new_letter["subArc1X"] = map(percent, 0, 100, oldObj["subArc1X"], newObj["subArc1X"]);
  new_letter["subArc1Y"]    = map(percent, 0, 100, oldObj["subArc1Y"], newObj["subArc1Y"]);

  new_letter["subArc2Start"] = map(percent, 0, 100, oldObj["subArc2Start"], newObj["subArc2Start"]);
  new_letter["subArc2End"] = map(percent, 0, 100, oldObj["subArc2End"], newObj["subArc2End"]);
  new_letter["subArc2X"]    = map(percent, 0, 100, oldObj["subArc2X"], newObj["subArc2X"]);
  new_letter["subArc2Y"] = map(percent, 0, 100, oldObj["subArc2Y"], newObj["subArc2Y"]);
  return new_letter;
}

var swapWords = [
  "ARCSDECO",
  "STANDOUT",
  "DISPLAYS",
  "BOUTIQUE",
  "TYPEFACE",
  "SUNLIGHT"

]