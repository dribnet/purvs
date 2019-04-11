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
  rectMode(CORNER)
}

//function interpolate_letter(percent, oldObj, newObj) {
//  let new_letter = {};
//  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
//  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
//  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
//  return new_letter;
//}

function unit(uX1, uY1, uR1, uX2, uY2, uR2, uX3, uY3, uR3, uX4, uY4, uR4){

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
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"] = map(percent, 0, 100, oldObj["X1"], newObj["X1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["Y1"], newObj["Y1"]);
  new_letter["R1"] = map(percent, 0, 100, oldObj["R1"], newObj["R1"]);
  new_letter["X2"] = map(percent, 0, 100, oldObj["X2"], newObj["X2"]);

  new_letter["Y2"] = map(percent, 0, 100, oldObj["Y2"], newObj["Y2"]);
  new_letter["R2"] = map(percent, 0, 100, oldObj["R2"], newObj["R2"]);
  new_letter["X3"] = map(percent, 0, 100, oldObj["X3"], newObj["X3"]);
  new_letter["Y3"] = map(percent, 0, 100, oldObj["Y3"], newObj["Y3"]);
  
  new_letter["R3"] = map(percent, 0, 100, oldObj["R3"], newObj["R3"]);
  new_letter["X4"] = map(percent, 0, 100, oldObj["X4"], newObj["X4"]);
  new_letter["Y4"] = map(percent, 0, 100, oldObj["Y4"], newObj["Y4"]);
  new_letter["R4"] = map(percent, 0, 100, oldObj["R4"], newObj["R4"]);
  return new_letter;
}

var swapWords = [
  "FIREWORK",
  "CHILDREN",
  "BIRTHDAY",
  "BUILDING",
  "TIMELESS",
  "HOMETOWN"

]
