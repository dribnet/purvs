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
  noStroke();
  fill(200,200);
  rect(PosX1, PosY1, PosX2, PosY2);
  fill(255,30,30,90);
  arc(CenterPointX1, CenterPointY1, Radius1, Radius1, StartAngle1, EndAngle1);
  fill(30,144,255,90);
  arc(CenterPointX2, CenterPointY2, Radius2, Radius2, StartAngle2, EndAngle2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["CPX1"]    = map(percent, 0, 100, oldObj["CPX1"], newObj["CPX1"]);
  new_letter["CPY1"] = map(percent, 0, 100, oldObj["CPY1"], newObj["CPY1"]);
  new_letter["SA1"] = map(percent, 0, 100, oldObj["SA1"], newObj["SA1"]);
  new_letter["EA1"]    = map(percent, 0, 100, oldObj["EA1"], newObj["EA1"]);
  new_letter["R1"] = map(percent, 0, 100, oldObj["R1"], newObj["R1"]);

  new_letter["CPX2"] = map(percent, 0, 100, oldObj["CPX2"], newObj["CPX2"]);
  new_letter["CPY2"]    = map(percent, 0, 100, oldObj["CPY2"], newObj["CPY2"]);
  new_letter["SA2"] = map(percent, 0, 100, oldObj["SA2"], newObj["SA2"]);
  new_letter["EA2"] = map(percent, 0, 100, oldObj["EA2"], newObj["EA2"]);
  new_letter["R2"]    = map(percent, 0, 100, oldObj["R2"], newObj["R2"]);

  new_letter["X1"] = map(percent, 0, 100, oldObj["X1"], newObj["X1"]);
  new_letter["Y1"] = map(percent, 0, 100, oldObj["Y1"], newObj["Y1"]);
  new_letter["X2"]    = map(percent, 0, 100, oldObj["X2"], newObj["X2"]);
  new_letter["Y2"] = map(percent, 0, 100, oldObj["Y2"], newObj["Y2"]);
  return new_letter;
}

var swapWords = [
  // "ABCDEFG?",
  // "CAB?CAB?",
  // "BADBGFEC"
]
