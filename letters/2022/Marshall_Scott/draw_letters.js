/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffaeb";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

const hexStrokeColor = '#e3a619';
const hexFillColor = '#f0ba07';

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // Use the same noise seed so it's not random
  noiseSeed(0);

  // Fix editor mode being in degrees
  angleMode(RADIANS);
  strokeJoin(ROUND);

  // color/stroke setup
  stroke(hexStrokeColor);
  strokeWeight(0.2);
  fill(hexFillColor);

  // draw two circles
  drawHexagonagon(50, 100, 55, letterData);

  // If bee has position set then draw it
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

function drawHexagonagon(x, y, size, letterData) {
  translate(x, y);  

  // Top left
  letterData['tile1'] && drawHexagon(-size/2, -size*0.75/hexagonHeightRatio, (size/3) * letterData['tile1']);
  
  // Top Center
  letterData['tile2'] && drawHexagon(0, -size/hexagonHeightRatio, (size/3) * letterData['tile2']);
  
  // Top Right
  letterData['tile3'] && drawHexagon(size/2, -size*0.75/hexagonHeightRatio, (size/3) * letterData['tile3']);

  
  // Top Middle Left
  letterData['tile4'] && drawHexagon(-size/2, -size*0.25/hexagonHeightRatio, (size/3) * letterData['tile4']);
  
  // Top Middle Center
  letterData['tile5'] && drawHexagon(0, -size*0.5/hexagonHeightRatio, (size/3) * letterData['tile5']);
  
  // Top Middle Right
  letterData['tile6'] && drawHexagon(size/2, -size*0.25/hexagonHeightRatio, (size/3) * letterData['tile6']);

  
  // Middle Left
  letterData['tile7'] && drawHexagon(-size/2, size*0.25/hexagonHeightRatio, (size/3) * letterData['tile7']);
  
  // Middle Center
  letterData['tile8'] && drawHexagon(0, 0, (size/3) * letterData['tile8']);
  
  // Middle Right
  letterData['tile9'] && drawHexagon(size/2, size*0.25/hexagonHeightRatio, (size/3) * letterData['tile9']);

  
  // Bottom Middle Left
  letterData['tile10'] && drawHexagon(-size/2, size*0.75/hexagonHeightRatio, (size/3) * letterData['tile10']);
  
  // Bottom Middle Center
  letterData['tile11'] && drawHexagon(0, size*0.5/hexagonHeightRatio, (size/3) * letterData['tile11']);
  
  // Bottom Middle Right
  letterData['tile12'] && drawHexagon(size/2, size*0.75/hexagonHeightRatio, (size/3) * letterData['tile12']);

  
  // Bottom Left
  letterData['tile13'] && drawHexagon(-size/2, size*1.25/hexagonHeightRatio, (size/3) * letterData['tile13']);
  
  // Bottom Center
  letterData['tile14'] && drawHexagon(0, size/hexagonHeightRatio, (size/3) * letterData['tile14']);

  translate(-x, -y);
}

const hexagonHeightRatio = 0.8660;

// Draw a hexagon with shine
function drawHexagon(x, y, size) {
  push();
  translate(x, y);
  scale(size*1);

  // Draw hexagon
  beginShape();
  vertex(-1, 0);
  vertex(-0.5, -hexagonHeightRatio);
  vertex(0.5, -hexagonHeightRatio);
  vertex(1, 0);
  vertex(0.5, hexagonHeightRatio);
  vertex(-0.5, hexagonHeightRatio);
  endShape(CLOSE);

  // Draw inner shine
  scale(0.7);

  stroke('#e6dab5');
  beginShape();
  vertex(-1, 0);
  vertex(-0.5, -hexagonHeightRatio);
  vertex(0.5, -hexagonHeightRatio);
  endShape();

  pop();
}

// Modify variables to interpolate between two letters
function interpolate_letter(percent, oldObj, newObj) {
  
  let new_letter = {};
  for(let i = 2; i < 16; i++) {

    // Calculate a period for the section to animate in, the animation takes 20% of the total time
    let startPercent = map(noise(i), 0, 1, 0, 80);
    let endPercent = startPercent + 20;
    
    // Animation hasn't started yet, so use old object
    if (startPercent > percent) { new_letter["tile" + i] = oldObj['tile' + i]; continue; }

    // Animation has finished, use new object 
    if (endPercent < percent) { new_letter["tile" + i] = newObj['tile' + i]; continue; }

    // Overshoot the required size by 5% of the animation to create a bounce back
    let overshoot = 5;

    // Map from the old object to the new object
    new_letter["tile" + i] = map(percent, startPercent, endPercent-overshoot, oldObj["tile" + i], newObj["tile" + i]);
  }

  // Make bee fly away for first half of animation
  if ((oldObj['beeX'] || oldObj['beeY']) && percent <= 50) {
    new_letter["beeX"] = map(percent, 0, 50, oldObj["beeX"], 0);
    new_letter["beeY"] = map(percent, 0, 50, oldObj["beeY"], oldObj["beeY"] - 20);
  }

  // Make new bee fly in for first half of animation
  if ((newObj['beeX'] || newObj['beeY']) && percent > 50) {
    new_letter["beeX"] = map(percent, 50, 100, 100, newObj["beeX"]);
    new_letter["beeY"] = map(percent, 50, 100, newObj["beeY"] - 20, newObj["beeY"]);
  }

  return new_letter;
}

var swapWords = [
  "HONEY BZ",
  "HEXAGONS",
  "BESTAGON",
  "IM A BEE",
  "BZZZZZZZ",
  "12345678",
]
