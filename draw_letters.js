const colorPink  = "#F4A8C8";
const colorWhite = "#FFFFFF";
const colorStrokeWhite  = "#FFFFFF";
const colorStrokeDarkPink  = "#ed5896";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  // ------- PARAMETERS ------- //

  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  let sizeLine1 = letterData["sizeLine"];
  let sizeCirc1 = letterData["sizeCirc"];
  let sizeCirc2 = letterData["sizeCirc2"];
  let circ2x = letterData["circx1"];
  let circ2y = letterData["circy1"];
  let circ3x = letterData["circx2"];
  let circ3y = letterData["circy2"];
  let linePosX1 = letterData["linex1"];
  let linePosY1 = letterData["liney1"];
  let linePosX2 = letterData["linex2"];
  let linePosY2 = letterData["liney2"];
  let linePosY3 = letterData["liney3"];

  // ------- DRAWS TWO CIRCLES WITH OUTER WHITE STROKE ------- //

  push();
  stroke(colorStrokeWhite);
  strokeWeight(6);
  fill(colorPink);
  ellipse(circ2x, circ2y, sizeCirc1, sizeCirc1);

  fill(colorPink);
  ellipse(circ3x, circ3y, sizeCirc2, sizeCirc2);

  // ------- DRAWS TWO LINES WITH OUTER WHITE STROKE ------- //

  stroke(colorStrokeWhite);
  strokeWeight(6);
  fill(colorWhite);
  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);
  pop();

  // ------- DRAWS TWO CIRCLES WITH INNER DARK PINK STROKE ------- //

  push();
  stroke(colorStrokeDarkPink);
  strokeWeight(2);
  fill(colorPink);
  ellipse(circ2x, circ2y, sizeCirc1, sizeCirc1);

  fill(colorPink);
  ellipse(circ3x, circ3y, sizeCirc2, sizeCirc2);

  // ------- DRAWS TWO LINES WITH INNER DARK PINK STROKE ------- //

  stroke(colorStrokeDarkPink);
  strokeWeight(2);
  fill(colorWhite);
  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeLine"] = map(percent, 0, 100, oldObj["sizeLine"], newObj["sizeLine"]);
  new_letter["sizeCirc"] = map(percent, 0, 100, oldObj["sizeCirc"], newObj["sizeCirc"]);
  new_letter["sizeCirc2"] = map(percent, 0, 100, oldObj["sizeCirc2"], newObj["sizeCirc2"]);
  new_letter["circx1"] = map(percent, 0, 100, oldObj["circx1"], newObj["circx1"]);
  new_letter["circy1"] = map(percent, 0, 100, oldObj["circy1"], newObj["circy1"]);
  new_letter["circx2"] = map(percent, 0, 100, oldObj["circx2"], newObj["circx2"]);
  new_letter["circy2"] = map(percent, 0, 100, oldObj["circy2"], newObj["circy2"]);
  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
  new_letter["liney3"] = map(percent, 0, 100, oldObj["liney3"], newObj["liney3"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]