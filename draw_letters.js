const colorFront  = "#199cff";
const colorStroke = "#233f11";
const ballCol   = 255;
const speed = 1.2;
let countingUp = 1; 
let counter = 0;
let r = 0;
let g = 0;
let b = 0;
//lower is faster, higher is slower
//i like it higher, makes it real smooth & satisfying
let ballSpeed = 10;


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


 function drawLetter(letterData) {
  frameRate(30); //otherwise it changes speed on different computers
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
  //make it go all the way along the line at the right speed!
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
  let lerped = {};
  //amount between 0 & 1.0
  amount = percent/100;
  //calulate position vectors between old & new
  lerpStart1 = CalculateLerp(oldData["StartX1"], newData["StartX1"], oldData["StartY1"], newData["StartY1"],amount); 
  lerpDir1 = CalculateLerp(oldData["DirX1"], newData["DirX1"], oldData["DirY1"], newData["DirY1"],amount); 
  lerpStart2 = CalculateLerp(oldData["StartX2"], newData["StartX2"], oldData["StartY2"], newData["StartY2"],amount); 
  lerpDir2 = CalculateLerp(oldData["DirX2"], newData["DirX2"], oldData["DirY2"], newData["DirY2"],amount); 
  lerpStart3 = CalculateLerp(oldData["StartX3"], newData["StartX3"], oldData["StartY3"], newData["StartY3"],amount); 
  lerpDir3 = CalculateLerp(oldData["DirX3"], newData["DirX3"], oldData["DirY3"], newData["DirY3"],amount); 
  //set the return object
   lerped["StartX1"] = lerpStart1.x;
   lerped["StartY1"] = lerpStart1.y;
   lerped["DirX1"] = lerpDir1.x;
   lerped["DirY1"] = lerpDir1.y;
   lerped["StartX2"] = lerpStart2.x;
   lerped["StartY2"] = lerpStart2.y;
   lerped["DirX2"] = lerpDir2.x;
   lerped["DirY2"] = lerpDir2.y;
   lerped["StartX3"] = lerpStart3.x;
   lerped["StartY3"] = lerpStart3.y;
   lerped["DirX3"] = lerpDir3.x;
   lerped["DirY3"] = lerpDir3.y;
  return lerped;

}

//lep made sense since I was using so many vectors!
function CalculateLerp(oldX,newX,oldY,newY,amount) {
  oldVec = createVector(oldX,oldY);
  newVec = createVector(newX,newY);
  lerped = p5.Vector.lerp(oldVec,newVec,amount);
  return lerped;
}
