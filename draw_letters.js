
const colorRing = "#baffed";
const colorLine = "#777a79";

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

  // determine parameters
  let start = letterData["arc Start"];
  let end = letterData["arc End"];
  let posx = letterData["arc X"];
  let posy = letterData["arc Y"];
  let length1 = letterData["length1"];
  let tilt1 = letterData["tilt1"];
  let posx1 = letterData["position X1"];
  let posy1 = letterData["position Y1"];
  let length2 = letterData["length2"];
  let tilt2 = letterData["tilt2"];
  let posx2 = letterData["position X2"];
  let posy2 = letterData["position Y2"];

  strokeWeight(4);
  stroke(colorLine);
  //draw line underneath ring
  if(length1>0){
	drawLine(length1, tilt1, posx1, posy1);
  }
  
  stroke(colorRing);
  strokeWeight(10);
  //draw ring
  arc(posx, posy, 80, 80, start, end); 
  
  strokeWeight(4);
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

