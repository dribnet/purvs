const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
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
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for first arc
  let CenterPointX1 = letterData["CPX1"];
  let CenterPointY1 = letterData["CPY1"];
  let StartAngle1 = letterData["SA1"];
  let EndAngle1 = letterData["EA1"];
  let Radius1 = letterData["R1"];
  // determine parameters for second arc
  let CenterPointX2 = letterData["CPX2"];
  let CenterPointY2 = letterData["CPY2"];
  let StartAngle2 = letterData["SA2"];
  let EndAngle2 = letterData["EA2"];
  let Radius2 = letterData["R2"];
  // determine parameters for rectangle
  let PosX1 = letterData["X1"];
  let PosY1 = letterData["Y1"];
  let PosX2 = letterData["X2"];
  let PosY2 = letterData["Y2"];


  // draw two arcs and a rectangle
  fill(255);
  rect(PosX1, PosY1, PosX2, PosY2);
  noFill();
  arc(CenterPointX1, CenterPointY1, Radius1, Radius1, StartAngle1, EndAngle1, PIE);
  arc(CenterPointX2, CenterPointY2, Radius2, Radius2, StartAngle2, EndAngle2, PIE);
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