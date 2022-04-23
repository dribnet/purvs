/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  //let rectSizeA = letterData["rectSizeL"];
  //let rectSizeB = letterData["rectSizeS"];
  // let rectPosX = posx + letterData["rectLocatL"];
  // let rectPosY = posy + letterData["rectLocatS"];

push();
  angleMode(DEGREES);
  //fill(darkBlue);
  noFill();
  strokeWeight(4);
  arc(letterData["arcA_PosX"], letterData["arcA_PosY"], letterData["arcA_SizeX"], letterData["arcA_SizeY"], letterData["arcA_Begin"], letterData["arcA_End"]);
  strokeWeight(2);
  //arc(letterData["arcA_PosX"]*1.05, letterData["arcA_PosY"]*0.95, letterData["arcA_SizeX"], letterData["arcA_SizeY"], letterData["arcA_Begin"], letterData["arcA_End"]);
  fill(lightBlue);
  rectMode(CENTER);
  rect(letterData["rectA_PosX"], letterData["rectA_PosY"], letterData["rectA_SizeX"], letterData["rectA_SizeY"], 14);
  strokeWeight(4);
  rect(letterData["rectB_PosX"], letterData["rectB_PosY"], letterData["rectB_SizeX"], letterData["rectB_SizeY"], 14);
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcA_PosX"] = map(percent, 0, 100, oldObj["arcA_PosX"], newObj["arcA_PosX"]);
  new_letter["arcA_PosY"] = map(percent, 0, 100, oldObj["arcA_PosY"], newObj["arcA_PosY"]);
  new_letter["arcA_SizeX"] = map(percent, 0, 100, oldObj["arcA_SizeX"], newObj["arcA_SizeX"]);
  new_letter["arcA_SizeY"] = map(percent, 0, 100, oldObj["arcA_SizeY"], newObj["arcA_SizeY"]);
  new_letter["arcA_Begin"] = map(percent, 0, 100, oldObj["arcA_Begin"], newObj["arcA_Begin"]);
  new_letter["arcA_End"] = map(percent, 0, 100, oldObj["arcA_End"], newObj["arcA_End"]);

  new_letter["rectA_PosX"] = map(percent, 0, 100, oldObj["rectA_PosX"], newObj["rectA_PosX"]);
  new_letter["rectA_PosY"] = map(percent, 0, 100, oldObj["rectA_PosY"], newObj["rectA_PosY"]);
  new_letter["rectA_SizeX"] = map(percent, 0, 100, oldObj["rectA_SizeX"], newObj["rectA_SizeX"]);
  new_letter["rectA_SizeY"] = map(percent, 0, 100, oldObj["rectA_SizeY"], newObj["rectA_SizeY"]);

  new_letter["rectB_PosX"] = map(percent, 0, 100, oldObj["rectB_PosX"], newObj["rectB_PosX"]);
  new_letter["rectB_PosY"] = map(percent, 0, 100, oldObj["rectB_PosY"], newObj["rectB_PosY"]);
  new_letter["rectB_SizeX"] = map(percent, 0, 100, oldObj["rectB_SizeX"], newObj["rectB_SizeX"]);
  new_letter["rectB_SizeY"] = map(percent, 0, 100, oldObj["rectB_SizeY"], newObj["rectB_SizeY"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
