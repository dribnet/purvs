/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkYellow  = "#deaa28";
const strokeYellow  = "#dec028";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeYellow);
  strokeWeight(0.2);
  fill(darkYellow);

  let visible = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  if (letterData['visible'] != null) { visible = letterData['visible']; }

  // draw two circles
  drawHexagonagon(50, 100, 60, visible);
}

function drawHexagonagon(x, y, size, visible) {
  translate(x, y);
  
  // Center
  visible[4] && drawHexagon(0, 0, (size/3) * visible[4]);
  
  // Center top
  visible[7] && drawHexagon(0, size/2/hexagonHeightRatio, (size/3) * visible[7]);
  
  // Center Bottom
  visible[1] && drawHexagon(0, -size/2/hexagonHeightRatio, (size/3) * visible[1]);
  
  // Top right
  visible[2] && drawHexagon(size/2, -size/4/hexagonHeightRatio, (size/3) * visible[2]);

  // Top left
  visible[0] && drawHexagon(-size/2, -size/4/hexagonHeightRatio, (size/3) * visible[0]);

  // Center right
  visible[5] && drawHexagon(size/2, size/4/hexagonHeightRatio, (size/3) * visible[5]);

  // Center left
  visible[3] && drawHexagon(-size/2, size/4/hexagonHeightRatio, (size/3) * visible[3]);
  
  // Bottom right
  visible[8] && drawHexagon(size/2, size*hexagonHeightRatio, (size/3) * visible[8]);

  // Bottom left
  visible[6] && drawHexagon(-size/2, size*hexagonHeightRatio, (size/3) * visible[6]);

  // Bottom bottom
  visible[9] && drawHexagon(0, size/hexagonHeightRatio, (size/3) * visible[9]);

  translate(-x, -y);
}

const hexagonHeightRatio = 0.8660;

function drawHexagon(x, y, size) {
  console.log(size)
  push();
  translate(x, y);
  scale(size*1);

  beginShape();
  vertex(-1, 0);
  vertex(-0.5, -hexagonHeightRatio);
  vertex(0.5, -hexagonHeightRatio);
  vertex(1, 0);
  vertex(0.5, hexagonHeightRatio);
  vertex(-0.5, hexagonHeightRatio);
  endShape(CLOSE);

  pop();
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
