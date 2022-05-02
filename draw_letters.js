/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffbe8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  // Fix editor mode being in degrees
  angleMode(RADIANS);
  strokeJoin(ROUND);

  // color/stroke setup
  stroke('#deaa28');
  strokeWeight(0.2);
  fill('#dec028');

  let visible = [];
  for (let i = 1; i < 16; i++) {
    visible.push(letterData['tile' + i]);
  }

  // draw two circles
  drawHexagonagon(50, 100, 55, visible);

  if (letterData.beeX || letterData.beeY) {
    drawBee(letterData.beeX, letterData.beeY, 0.75);
  }
}

function drawBee(x, y, scaleFactor) {

  push();
  translate(x, y);
  scale(scaleFactor);

  strokeWeight(1.5);
  stroke(0);


  // Wing back
  push();
  fill(200, 200, 255);
  translate(2, -18);
  rotate(1.9);
  ellipse(0, 0, 20, 10);
  pop();

  // Stinger
  fill(0);
  noStroke();
  triangle(20, 5, 30, 0, 20, 5);
  
  stroke(0);

  // Body
  fill('#ffb508');
  ellipse(0, 0, 40, 30);

  // Stripe
  noFill();
  strokeWeight(7);
  bezier(
    0, -12,
    5, -10,
    5, 10,
    0, 12);
    
  bezier(
    12, -9,
    15, -8,
    15, 8,
    12, 9);
  strokeWeight(1.5);

  // Wing front
  push();
  fill(200, 200, 255);
  translate(6, -17);
  rotate(2.19);
  ellipse(0, 0, 20, 10);
  pop();

  // Eye
  fill(0);
  ellipse(-12, -2, 4, 4);

  // Mouth
  noFill();
  bezier(
    -19, 4,
    -18, 5,
    -16, 6,
    -14, 4);

  // Antennae
  bezier(
    -19, -5,
    -21, -8,
    -23, -8,
    -25, -7);
  bezier(
    -16, -9,
    -18, -12,
    -23, -12,
    -25, -11);

  // Feet
  bezier(
    -11, 13,
    -12, 14,
    -12, 18,
    -11, 19);
  bezier(
    -6, 15,
    -7, 16,
    -7, 20,
    -6, 21);
  bezier(
    11, 13,
    10, 14,
    10, 18,
    11, 19);
  bezier(
    6, 15,
    5, 16,
    5, 20,
    6, 21);

  pop();
}

function drawHexagonagon(x, y, size, visible) {
  translate(x, y);  

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

  scale(0.7);

  stroke('#e6dab5');
  beginShape();
  vertex(-1, 0);
  vertex(-0.5, -hexagonHeightRatio);
  vertex(0.5, -hexagonHeightRatio);
  endShape();

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  for(let i = 2; i < 16; i++) {
    new_letter["tile" + i] = map(percent, 0, 100, oldObj["tile" + i], newObj["tile" + i]);
  }

  new_letter["beeX"] = map(percent, 0, 100, oldObj["beeX"], newObj["beeX"]);
  new_letter["beeY"] = map(percent, 0, 100, oldObj["beeY"], newObj["beeY"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "12345678",
  "CAB?CAB?",
  "BAAAAAAA"
]
