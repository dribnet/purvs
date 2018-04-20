const colorFront  = "#199cff";
const colorStroke = "#233f11";
const ballCol   = "#FF7F66";
let r = 0;
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
  noStroke(0);
  calculateVectors(letterData["StartX1"],letterData["StartY1"], letterData["DirX1"], letterData["DirY1"] );
  calculateVectors(letterData["StartX2"],letterData["StartY2"], letterData["DirX2"], letterData["DirY2"] );
  calculateVectors(letterData["StartX3"],letterData["StartY3"], letterData["DirX3"], letterData["DirY3"] );
}

function calculateVectors(x1,y1,x2,y2) {
  //reset colour values
  r = 33;
  g = 133;
  b = 196;
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
    movementVector = p5.Vector.mult(directionVector,(i*1.4));
    //add the starting position vector to the movement vector to get it the right place
    posVectorN  = p5.Vector.add(posVectorS, movementVector); 
    //get the x & y components
    xCompon = posVectorN.x;
    yCompon = posVectorN.y;
    drawFromComponents(xCompon, yCompon);
  }
}

function drawFromComponents(xCompon, yCompon) {
r++;
g++;
b++; 

fill (r, g, b); 
//draw the circle!
ellipse(xCompon, yCompon, 3,3);
}
