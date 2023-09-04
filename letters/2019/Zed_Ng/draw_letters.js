/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


function drawLetter(letterData) {



  for (i = 0; i < 8; i++) { //LOOP TO ANIMATE AND CREATE STROKES
    push();
    translate(50, 100); //PLACE ORIGIN TO CENTER OF LETTER
    rotate(random(-0.05, 0.05)); //"VIBRATION" RANGE
    stroke(random(100, 250)); //STROKE TONE RANGE
    noFill();
    strokeWeight(2);
    beginShape(); //CREATING LETTERS BASED ON VERTEXES LISTED IN LETTERS.JS
    vertex(letterData["point1x"], letterData["point1y"]);
    vertex(letterData["point2x"], letterData["point2y"]);
    vertex(letterData["point3x"], letterData["point3y"]);
    vertex(letterData["point4x"], letterData["point4y"]);
    vertex(letterData["point5x"], letterData["point5y"]);
    vertex(letterData["point6x"], letterData["point6y"]);
    endShape();
    pop();
  };
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};


  if (typeof exhibition_mode !== 'undefined') {
      // the variable is defined
     if (percent > 10 && percent < 90){ //LOOP TO ANIMATE AND CREATE STROKES
      rotate(random(-0.05,0.05));
    };
  }


  new_letter["point1x"] = map(percent, 0, 100, oldObj["point1x"], newObj["point1x"]);
  new_letter["point1y"] = map(percent, 0, 100, oldObj["point1y"], newObj["point1y"]);
  new_letter["point2x"] = map(percent, 0, 100, oldObj["point2x"], newObj["point2x"]);
  new_letter["point2y"] = map(percent, 0, 100, oldObj["point2y"], newObj["point2y"]);
  new_letter["point3x"] = map(percent, 0, 100, oldObj["point3x"], newObj["point3x"]);
  new_letter["point3y"] = map(percent, 0, 100, oldObj["point3y"], newObj["point3y"]);
  new_letter["point4x"] = map(percent, 0, 100, oldObj["point4x"], newObj["point4x"]);
  new_letter["point4y"] = map(percent, 0, 100, oldObj["point4y"], newObj["point4y"]);
  new_letter["point5x"] = map(percent, 0, 100, oldObj["point5x"], newObj["point5x"]);
  new_letter["point5y"] = map(percent, 0, 100, oldObj["point5y"], newObj["point5y"]);
  new_letter["point6x"] = map(percent, 0, 100, oldObj["point6x"], newObj["point6x"]);
  new_letter["point6y"] = map(percent, 0, 100, oldObj["point6y"], newObj["point6y"]);



  return new_letter;
}

var swapWords = [
  "SKETCHIE",
  "VICTORIA",
  "NGZIYONG"
]
