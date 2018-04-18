const colorRing = [89, 255, 202];
const colorLine = "#8da89f";

const arcSize = 80;
const lineWeight = 4;
const arcWeight = 10;

var swapWords = [
	"TYPOGAMY",
	"AQUANEON"
]

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

  //draw line underneath ring
  drawLine(length1, tilt1, posx1, posy1);
  
  stroke(colorRing);
  strokeWeight(arcWeight);
  //draw ring
  arc(posx, posy, arcSize, arcSize, start, end); 
  
  //draw line above ring
  drawLine(length2, tilt2, posx2, posy2);
}


function drawLine(length, tilt, posx, posy) {
  strokeWeight(lineWeight);
  stroke(colorLine);
  if(length>0){
	  push();
	  translate(posx, posy);
	  rotate(tilt);
	  line(0, 0, length, 0);
	  pop();
  }
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //arc angle pauses at a 360 when halfway
  if(percent<30){
    new_letter["arc Start"] = map(percent, 0, 40, oldObj["arc Start"], 360);
    new_letter["arc End"] = map(percent, 0, 40, oldObj["arc End"], 360);
  }
  else if(percent< 70){
     new_letter["arc Start"] = 360;
     new_letter["arc End"] = 360;
  }
  else{
    new_letter["arc Start"] = map(percent, 60, 100, 360, newObj["arc Start"]);
    new_letter["arc End"] = map(percent, 60, 100, 360, newObj["arc End"]);
  }
  new_letter["arc X"] = map(percent, 0, 100, oldObj["arc X"], newObj["arc X"]);
  new_letter["arc Y"] = map(percent, 0, 100, oldObj["arc Y"], newObj["arc Y"]);
  
  //animate lines
  new_letter["length1"] = map(percent, 0, 100, oldObj["length1"], newObj["length1"]);
  //lines dont tilt or move if transitioning to an invisible line
  if(newObj["length1"]==0){
    new_letter["tilt1"] = oldObj["tilt1"];
    new_letter["position X1"] = oldObj["position X1"];
    new_letter["position Y1"] = oldObj["position Y1"];
  }
  else if(oldObj["length1"]==0){
    new_letter["tilt1"] = newObj["tilt1"];
    new_letter["position X1"] = newObj["position X1"];
    new_letter["position Y1"] = newObj["position Y1"];
  }
  else{
    new_letter["tilt1"] = map(percent, 0, 100, oldObj["tilt1"], newObj["tilt1"]);
    new_letter["position X1"] = map(percent, 0, 100, oldObj["position X1"], newObj["position X1"]);
    new_letter["position Y1"] = map(percent, 0, 100, oldObj["position Y1"], newObj["position Y1"]);
  }
  
  new_letter["length2"] = map(percent, 0, 100, oldObj["length2"], newObj["length2"]);
  //lines dont tilt or move if transitioning to an invisible line
  if(newObj["length2"]==0){
    new_letter["tilt2"] = oldObj["tilt2"];
    new_letter["position X2"] = oldObj["position X2"];
    new_letter["position Y2"] = oldObj["position Y2"];
  }
  else if(oldObj["length2"]==0){
    new_letter["tilt2"] = newObj["tilt2"];
    new_letter["position X2"] = newObj["position X2"];
    new_letter["position Y2"] = newObj["position Y2"];
  }
  else{
    new_letter["tilt2"] = map(percent, 0, 100, oldObj["tilt2"], newObj["tilt2"]);
    new_letter["position X2"] = map(percent, 0, 100, oldObj["position X2"], newObj["position X2"]);
    new_letter["position Y2"] = map(percent, 0, 100, oldObj["position Y2"], newObj["position Y2"]);
  }
  
  return new_letter;
}