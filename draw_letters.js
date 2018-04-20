const colorFront  = "#199cff";
const colorStroke = "#233f11";
const ballCol   = 255;
const speed = 1.2;
let countingUp = 1; 
let counter = 0;
let r = 0;
let g = 0;
let b = 0;
let ballSpeed = 6;


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
  DrawBall(directionVector, posVectorS);
}

function DrawFromVectors(directionVector, posVectorS) {
  for (i = 0; i < 100; i++) {
    //create a vector for the movement we will take (multiplication of i is the length of the line)
    movementVector = p5.Vector.mult(directionVector,(i*speed));
    //add the starting position vector to the movement vector to get it the right place
    posVectorN  = p5.Vector.add(posVectorS, movementVector); 
    //get the x & y components
    xCompon = posVectorN.x;
    yCompon = posVectorN.y;
    drawFromComponents(xCompon, yCompon);
  }
}

function DrawBall(directionVector, posVectorS, xpos, ypos) {

	//find out which direction the ball is going in, & switch it round if we're at the end of the line.
	if (countingUp == 1 ) {
		counter++;
	}
	else {
		counter--
	}
	if (counter >= (100*ballSpeed)) {
		countingUp = 0;
	}
	else if (counter < 0) {
		countingUp = 1;
	}

	fill(ballCol);
	xStart = posVectorS.x;
	yStart = posVectorS.y;
	xPos = directionVector.x*counter*speed/ballSpeed;
	yPos = directionVector.y*counter*speed/ballSpeed;
	xPosDraw = xStart + xPos;
	yPosDraw = yStart + yPos;
	posVectorCurrent = createVector(xPosDraw,yPosDraw);
	//draw the ball
	ellipse(xPosDraw, yPosDraw, 6,6);
}

function drawFromComponents(xCompon, yCompon) {
r++;
g++;
b++; 

fill (r, g, b); 
//draw the circle!
ellipse(xCompon, yCompon, 4,4);
}
//Percent will  range from  0-100,  and this  function  should  return  a new 
//object  which is  in  between the oldData and newData.
function interpolate_letter(percent, oldData, newData) {
  //amount between 0 & 1.0
  amount = percent/100;
  oldStartPos1 = createVector(oldData["StartX1"], oldData["StartY1"] ); 
  oldStartPos2 = createVector(oldData["StartX2"], oldData["StartY2"] ); 
  oldStartPos3 = createVector(oldData["StartX3"], oldData["StartY3"] ); 
  oldDirPos1 = createVector(oldData["DirX1"], oldData["DirY1"] ); 
  oldDirPos2 = createVector(oldData["DirX2"], oldData["DirY2"] ); 
  oldDirPos3 = createVector(oldData["DirX3"], oldData["DirY3"] ); 
  newStartPos1 = createVector(newData["StartX1"], newData["StartY1"] ); 
  newStartPos2 = createVector(newData["StartX2"], newData["StartY2"] ); 
  newStartPos3 = createVector(newData["StartX3"], newData["StartY3"] ); 
  newDirPos1 = createVector(newData["DirX1"], newData["DirY1"] ); 
  newDirPos2 = createVector(newData["DirX2"], newData["DirY2"] ); 
  newDirPos3 = createVector(newData["DirX3"], newData["DirY3"] );
  //calculate & normalize the direction vector for the old & new lines
  normalDirOld1 = CalculateNormalizedDir(oldStartPos1, oldDirPos1);
  normalDirOld2 = CalculateNormalizedDir(oldStartPos2, oldDirPos2);
  normalDirOld3 = CalculateNormalizedDir(oldStartPos3, oldDirPos3);
  normalDirNew1 = CalculateNormalizedDir(newStartPos1, newDirPos1);
  normalDirNew2 = CalculateNormalizedDir(newStartPos2, newDirPos2);
  normalDirNew3 = CalculateNormalizedDir(newStartPos3, newDirPos3);

  for (i = 0; i < 100; i++) {
    movementOld1 = CalculateMovementVector(normalDirOld1,i);
    movementOld2 = CalculateMovementVector(normalDirOld2,i);
    movementOld3 = CalculateMovementVector(normalDirOld3,i);
    movementNew1 = CalculateMovementVector(normalDirNew1,i);
    movementNew2 = CalculateMovementVector(normalDirNew2,i);
    movementNew3 = CalculateMovementVector(normalDirNew3,i);
    //make it start in the right place
    posOldN1  = p5.Vector.add(oldStartPos1, movementOld1); 
    posOldN2  = p5.Vector.add(oldStartPos2, movementOld2); 
    posOldN3  = p5.Vector.add(oldStartPos3, movementOld3); 
    posNewN1  = p5.Vector.add(newStartPos1, movementNew1); 
    posNewN2  = p5.Vector.add(newStartPos2, movementNew2); 
    posNewN3  = p5.Vector.add(newStartPos3, movementNew3);

    lerped1 = CalculateLerp(posOldN1, posNewN1, amount);
    lerped2 = CalculateLerp(posOldN2, posNewN2, amount);
    lerped3 = CalculateLerp(posOldN3, posNewN3, amount);


    //get the x & y components
    xCompon1 = lerped1.x;
    yCompon1 = lerped1.y;
    xCompon2 = lerped2.x;
    yCompon2 = lerped2.y;
    xCompon3 = lerped3.x;
    yCompon3 = lerped3.y;
    drawFromLerp(xCompon1, yCompon1);
    drawFromLerp(xCompon2, yCompon2);
    drawFromLerp(xCompon3, yCompon3);
  }
}

function CalculateNormalizedDir(startVec, dirVec) {
  directionVector = p5.Vector.sub(dirVec, startVec); 
  directionVector.normalize();
  return directionVector;
}

function CalculateMovementVector(normalDirectionVector, i) {
  movementVec = p5.Vector.mult(normalDirectionVector,(i*speed));
  return movementVec;
}

function CalculateLerp(oldVector, newVector, amount) {
  lerpedVec = p5.Vector.lerp(oldVector,newVector,amount)
  return lerpedVec;
}

function drawFromLerp(xCompon, yCompon) {
r++;
g++;
b++; 

fill (r, g, b); 
ellipse(xCompon, yCompon, 4,4);
}
