const colorFront1  = "#9C2B21";// dark red
const colorFront2  = "#F8B6AA";// light pink
const colorStroke  = "#F8DED2";// stroke colour


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  // let size2 = letterData["size"];
  // let pos2x = 50 +letterData["offsetx"];
  // let pos2y = 100 +letterData["offsety"];
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];
  
  let triangle2X1 = letterData["2triX1"];
  let triangle2Y1 = letterData["2triY1"];
  let triangle2X2 = letterData["2triX2"];
  let triangle2Y2 = letterData["2triY2"];
  let triangle2X3 = letterData["2triX3"];
  let triangle2Y3 = letterData["2triY3"];

  // draw two circles
  stroke(colorStroke);
  strokeWeight(2.5);
    fill(colorFront1);

  triangle(0, 150, 50, 50, 100, 150);
  
  fill(colorFront2);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);

  fill(colorFront2);
  triangle(triangle2X1, triangle2Y1, triangle2X2, triangle2Y2, triangle2X3, triangle2Y3);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
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