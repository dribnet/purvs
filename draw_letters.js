const colorFront1  = "#BFA273";
const colorFront2  = "#E84855";
const colorStroke1  = "#331D0D";
const colorStroke2  = "#A61109";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  // color/stroke setup
  stroke(colorStroke1);
  strokeWeight(3);
  angleMode(DEGREES); 
  rectMode(CENTER);
  ellipseMode(CENTER);

  // determine parameters for second circle
  let posX1 = letterData["X1"];
  let posY1 = letterData["Y1"];
  let posX2 = letterData["X2"];
  let posY2 = letterData["Y2"];
  let posX3 = letterData["X3"];
  let posY3 = letterData["Y3"];
  let posX4 = letterData["X4"];
  let posY4 = letterData["Y4"];
    
  let rotR1 = letterData["R1"];
  let rotR2 = letterData["R2"];
  let rotR3 = letterData["R3"];
  let rotR4 = letterData["R4"];
    
  // draw the matches
  unit(posX1, posY1, rotR1, posX2, posY2, rotR2, posX3, posY3, rotR3, posX4, posY4, rotR4);

  rectMode(CORNER);
}

//function interpolate_letter(percent, oldObj, newObj) {
//  let new_letter = {};
//  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
//  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
//  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
//  return new_letter;
//}

function unit(uX1, uY1, uR1, uX2, uY2, uR2, uX3, uY3, uR3, uX4, uY4, uR4){
push();
//    first match
    push();
    translate(uX1, uY1);
    rotate(uR1);
    fill(colorFront1);
    rect(0, 0, 10, 90, 3);
    
    fill(colorFront2);
    stroke(colorStroke2);
    ellipse(0, 0 - 31, 20, 30);
    pop();
    
//    second match
    push();
    translate(uX2, uY2);
    rotate(uR2);
    fill(colorFront1);
    rect(0, 0, 10, 90, 3);
    
    fill(colorFront2);
    stroke(colorStroke2);
    ellipse(0, 0 - 31, 20, 30);
    pop();
    
//    third match
    push();
    translate(uX3, uY3);
    rotate(uR3);
    fill(colorFront1);
    rect(0, 0, 10, 90, 3);
    
    fill(colorFront2);
    stroke(colorStroke2);
    ellipse(0, 0 - 31, 20, 30);
    pop();
    
//    forth match
    push();
    translate(uX4, uY4);
    rotate(uR4);
    fill(colorFront1);
    rect(0, 0, 10, 90, 3);
    
    fill(colorFront2);
    stroke(colorStroke2);
    ellipse(0, 0 - 31, 20, 30);
    pop();
pop();

}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
