const colorFront  = "#199cff";
const colorStroke = "#233f11";
let col = 0;
let r = 255;
let g = 0;
let b = 0;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 function drawLetter(letterData) {
  fill(colorFront);
  strokeWeight(0.5);
  stroke('#222222');
  calculateVectors(letterData["StartX1"],letterData["StartY1"], letterData["DirX1"], letterData["DirY1"] );
  calculateVectors(letterData["StartX2"],letterData["StartY2"], letterData["DirX2"], letterData["DirY2"] );
  calculateVectors(letterData["StartX3"],letterData["StartY3"], letterData["DirX3"], letterData["DirY3"] );
}

function calculateVectors(x1,y1,x2,y2) {
  //reset colour values
  col = 0;
  r = 255;
  g = 0;
  b = 0;
  //start position vector
  posVectorS = createVector(x1,y1); 
  //the vector that sets the direction that the 'line' goes in
  posVectorD = createVector(x2,y2);
  //calculates directional vector going from positionS to positionD
  directionVector = p5.Vector.sub(posVectorD, posVectorS); 
  //normalize vector - obtains unit directional vector
  directionVector.normalize();
  DrawFromVectors(directionVector, posVectorS);
}

function DrawFromVectors(directionVector, posVectorS) {
  for (i = 0; i < 100; i++) {
    //create a vector for the movement we will take (multiplication of i is the length of the line)
    movementVector = p5.Vector.mult(directionVector,(2*i));
    //add the starting position vector to the movement vector to get it the right place
    posVectorN  = p5.Vector.add(posVectorS, movementVector); 
    //get the x & y components
    xCompon = posVectorN.x;
    yCompon = posVectorN.y;
    drawFromComponents(xCompon, yCompon);
  }
}

function drawFromComponents(xCompon, yCompon) {
  if(col == 0){ 
    g = g + 10;
    if(g >= 255) {
     col = 1;
   }
 }
 if(col == 1){ 
  r = r - 10;
  if(r <= 0) {
    col = 2;
  }
}
if(col == 2){ 
  b = b + 10;
  if(b >= 255) {
    col = 3;
  }
}
if(col == 3){ 
  g = g - 10;
  if(g <= 0) {
    col = 4;
  }
}
if(col == 4){ 
  r = r + 10;
  if(r >= 255) {
    col = 5;
  }
}
if(col == 5){ 
  b = b - 10;
  if(b <= 0) {
    col = 0;
  }
}
fill (r, g, b); 
//draw teh circle!
ellipse(xCompon, yCompon, 30,30);
}
