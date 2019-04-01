const arcStrokeCol  = "#ffffff"; //white
const lineStrokeCol = "#96f9ff"; //light blue

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(arcStrokeCol);
  strokeWeight(8);

  angleMode(DEGREES);

  // determine parameters for the line
  let lineX1 = 50 + letterData["lineX1"];
  let lineY1 = 100 + letterData["lineY1"];
  let lineX2 = 50 + letterData["lineX2"];
  let lineY2 = 100 + letterData["lineY2"];

  //determine start and stop parameters for the arc
  let arcX = 50 + letterData["arcX"];
  let arcY = 100 + letterData["arcY"];

  let arcStart = letterData["start"];
  let arcStop = letterData["stop"];

  // draw an arc and line
  noFill();
  arc(arcX, arcY, 90, 90, arcStart, arcStop);

  //stroke(lineStrokeCol);
  line(lineX1, lineY1, lineX2, lineY2);
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);

  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);

  new_letter["arcX"] = map(percent, 0, 100, oldobj["arcX"], newobj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldobj["arcY"], newobj["arcY"]);

  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["start"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]