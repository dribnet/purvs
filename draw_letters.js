const colorRing = "#C8C8C8";
const colorLine = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
  stroke(colorLine);

  // determine parameters
  let start = letterData["arc Start"];
  let end = letterData["arc End"];
  let length1 = letterData["length1"];
  let tilt1 = letterData["tilt1"];
  let posx1 = letterData["position X1"];
  let posy1 = letterData["position Y1"];
  let length2 = letterData["length2"];
  let tilt2 = letterData["tilt2"];
  let posx2 = letterData["position X2"];
  let posy2 = letterData["position Y2"];

  //draw line underneath ring
  if(length1>0){
	drawLine(length1, tilt1, posx1, posy1);
  }
  
  stroke(colorRing);
  strokeWeight(10);
  //draw ring
  arc(50, 100, 100, 100, start, end); 
  
  strokeWeight(2);
  stroke(colorLine);
  //draw line above ring
  if(length2>0){
	drawLine(length2, tilt2, posx2, posy2);
  }
 
}


function drawLine(length, tilt, posx, posy) {
  push();
  translate(posx, posy);
  rotate(tilt);
  line(0, 0, length, 0);
  pop();
}

