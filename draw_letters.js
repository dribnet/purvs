/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {console.log(letterData)
  // color/stroke setup
  stroke(letterData.hexBorderColor);
  strokeWeight(0.2);
  fill(letterData.hexBackgroundColor);

  let visible = [];
  for (let i = 1; i < 16; i++) {
    visible.push(letterData['tile' + i]);
  }
    
  if (letterData['tile1'] == null) { pop(); return; }

  // draw two circles
  drawHexagonagon(50, 100, 60, visible);
}

function drawHexagonagon(x, y, size, visible) {
  translate(x, y);
  
  // Top top left
  visible[0] && drawHexagon(-size/2, -size*1.25/hexagonHeightRatio, (size/3) * visible[0]);
  

  // Top left
  visible[1] && drawHexagon(-size/2, -size*0.75/hexagonHeightRatio, (size/3) * visible[1]);
  
  // Top Center
  visible[2] && drawHexagon(0, -size/hexagonHeightRatio, (size/3) * visible[2]);
  
  // Top Right
  visible[3] && drawHexagon(size/2, -size*0.75/hexagonHeightRatio, (size/3) * visible[3]);

  
  // Top Middle Left
  visible[4] && drawHexagon(-size/2, -size*0.25/hexagonHeightRatio, (size/3) * visible[4]);
  
  // Top Middle Center
  visible[5] && drawHexagon(0, -size*0.5/hexagonHeightRatio, (size/3) * visible[5]);
  
  // Top Middle Right
  visible[6] && drawHexagon(size/2, -size*0.25/hexagonHeightRatio, (size/3) * visible[6]);

  
  // Middle Left
  visible[7] && drawHexagon(-size/2, size*0.25/hexagonHeightRatio, (size/3) * visible[7]);
  
  // Middle Center
  visible[8] && drawHexagon(0, 0, (size/3) * visible[8]);
  
  // Middle Right
  visible[9] && drawHexagon(size/2, size*0.25/hexagonHeightRatio, (size/3) * visible[9]);

  
  // Bottom Middle Left
  visible[10] && drawHexagon(-size/2, size*0.75/hexagonHeightRatio, (size/3) * visible[10]);
  
  // Bottom Middle Center
  visible[11] && drawHexagon(0, size*0.5/hexagonHeightRatio, (size/3) * visible[11]);
  
  // Bottom Middle Right
  visible[12] && drawHexagon(size/2, size*0.75/hexagonHeightRatio, (size/3) * visible[12]);

  
  // Bottom Left
  visible[13] && drawHexagon(-size/2, size*1.25/hexagonHeightRatio, (size/3) * visible[13]);
  
  // Bottom Center
  visible[14] && drawHexagon(0, size/hexagonHeightRatio, (size/3) * visible[14]);

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
  "12345678",
  "CAB?CAB?",
  "BAAAAAAA"
]
