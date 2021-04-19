/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000"
var systemLineColor = "#4ecdc4";
var systemBoxColor = "#ff8c42";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //set up the sketch
  angleMode(DEGREES); //angle mode to degrees

  // determine parameters for second circle
  let size = letterData["size"];
  let size1 = letterData["size1"];
  let size2 = letterData["size2"];
  let posx = letterData["recOffsetx"];
  let posy = letterData["recOffsety"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let pos3x = letterData["arcOffsetx"];
  let pos3y = letterData["arcOffsety"];
  let rectAngle = letterData["rectAngle"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];

   noStroke();

  //Draw an ellipse
  fill('#db1c5f'); //red
  ellipseMode(CORNER);
  ellipse(pos2x, pos2y, size1, size1);


  //Draw an arc
  fill('#4c5bd8');//blue
  arc(pos3x, pos3y, size2, size2, angleStart, angleEnd);


  // draw a rectangle with round corners and rotate it
  fill("#fadf43");//yellow
  push();
  translate(posx,posy);
  rotate(rectAngle);
  rect(0, 0, 15, size, 20);
  pop();

  bubbles(posx, posy, pos2x, pos2y, pos3x, pos3y);
}

function bubbles(posx, posy, pos2x, pos2y, pos3x, pos3y){

 push();
 ellipseMode(CENTER);
 noFill();
 strokeWeight(2);
 stroke('#fadf43');//yellow
 ellipse(pos2x, pos2y, 20);
 stroke('#4c5bd8');//blue
 ellipse(pos3x, pos3y, 10);
 stroke('#db1c5f');//red
 ellipse(posx, posy, 30);
 pop();

}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["recOffsetx"] = map(percent, 0, 100, oldObj["recOffsetx"], newObj["recOffsetx"]);
  new_letter["recOffsety"] = map(percent, 0, 100, oldObj["recOffsety"], newObj["recOffsety"]);
  new_letter["rectAngle"] = map(percent, 0, 100, oldObj["rectAngle"], newObj["rectAngle"]);
  new_letter["size1"] = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["size2"] = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["arcOffsetx"] = map(percent, 0, 100, oldObj["arcOffsetx"], newObj["arcOffsetx"]);
  new_letter["arcOffsety"] = map(percent, 0, 100, oldObj["arcOffsety"], newObj["arcOffsety"]);
  new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleEnd"] = map(percent, 0, 100, oldObj["angleEnd"], newObj["angleEnd"]);
  return new_letter;
}

var swapWords = [
  "WASSILYK",
  "BAUHAUS!",
  "BY LAURA"
]