const colorFront1  = "#CDC1DE";
const colorFront2  = "#BDACD4";
const colorStroke  = "#746CC0";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // parameters
  let linex1 = letterData["linex1"];
  let liney1 = letterData["liney1"];
  let linex2 = letterData["linex2"];
  let liney2 = letterData["liney2"];

  let linex3 = letterData["linex3"];
  let liney3 = letterData["liney3"];
  let linex4 = letterData["linex4"];
  let liney4 = letterData["liney4"];

  // line
  stroke(116,108,192);
  strokeWeight(5);
  line(linex1, liney1, linex2, liney2);

  stroke(116,108,192);
  strokeWeight(5);
  line(linex3, liney3, linex4, liney4);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]