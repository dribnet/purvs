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


  angleMode(DEGREES);
  //fill(darkBlue);
  noFill();
  strokeWeight(4);
  arc(letterData["arcA_PosX"], letterData["arcA_PosY"], letterData["arcA_SizeX"], letterData["arcA_SizeY"], letterData["arcA_Begin"], letterData["arcA_End"]);
  strokeWeight(2);
  arc(letterData["arcA_PosX"]*1.05, letterData["arcA_PosY"]*0.95, letterData["arcA_SizeX"], letterData["arcA_SizeY"], letterData["arcA_Begin"], letterData["arcA_End"]);
  fill(lightBlue);
  rectMode(CENTER);
  rect(letterData["rectA_PosX"], letterData["rectA_PosY"], letterData["rectA_SizeX"], letterData["rectA_SizeY"], 14);
  strokeWeight(4);
  rect(letterData["rectB_PosX"], letterData["rectB_PosY"], letterData["rectB_SizeX"], letterData["rectB_SizeY"], 14);
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
