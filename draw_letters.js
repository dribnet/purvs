const colorFront1  = "#fae"; 
const colorFront2  = "#59ccff";
const colorStroke  = "#FFFFFF";

function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // triangle parameters

  let FirstPosx = letterData["T11x"]; // x First point of triangle 1
  let FirstPosy = letterData["T11y"] // y First point of triangle 
  let SecondPosx = letterData["T12x"]; // x Second point of triangle 1
  let SecondPosy = letterData["T12y"]; // y Second point of triangle 1
  let ThirdPosx = letterData["T13x"]; // x Third point of triangle 1
  let ThirdPosy = letterData["T13y"]; // y Third point of triangle 1

  let SFirstPosx = letterData["T21x"]; // x First point of triangle 2
  let SFirstPosy = letterData["T21y"] // y First point of triangle 2
  let SSecondPosx = letterData["T22x"]; // x Second point of triangle 2
  let SSecondPosy = letterData["T22y"]; // y Second point of triangle 2
  let SThirdPosx = letterData["T23x"]; // x Third point of triangle 2
  let SThirdPosy = letterData["T23y"]; // y Third point of triangle 2

  let rotatetri1 = letterData ["rot1"]; // Rotation for first triangle
  let rotatetri2 = letterData ["rot2"]; // Rotation for second triangle

push();
translate(50,70);
scale(0.5);

  push();
    rotate(rotatetri1);
    triangle(FirstPosx, FirstPosy, SecondPosx, SecondPosy, ThirdPosx, ThirdPosy);
  pop(); 

  push();
    rotate(rotatetri2)
    triangle(SFirstPosx, SFirstPosy, SSecondPosx, SSecondPosy, SThirdPosx, SThirdPosy);
  pop();

  //draw first tri
  push();
    fill(colorFront1);
    rotate(rotatetri1);
    triangle(FirstPosx, FirstPosy, SecondPosx, SecondPosy, ThirdPosx, ThirdPosy);
  pop();

  //draw second tri
  push();
    fill(colorFront2);
    rotate(rotatetri2);
    triangle(SFirstPosx, SFirstPosy, SSecondPosx, SSecondPosy, SThirdPosx, SThirdPosy);
  pop();

pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["T11x"] = map(percent, 0, 100, oldObj["T11x"], newObj["T11x"]);
  new_letter["T11y"] = map(percent, 0, 100, oldObj["T11y"], newObj["T11y"]);
  new_letter["T12x"] = map(percent, 0, 100, oldObj["T12x"], newObj["T12x"]);
  new_letter["T12y"] = map(percent, 0, 100, oldObj["T12y"], newObj["T12y"]);
  new_letter["T13x"] = map(percent, 0, 100, oldObj["T13x"], newObj["T13x"]);
  new_letter["T13y"] = map(percent, 0, 100, oldObj["T13y"], newObj["T13y"]);
  new_letter["T21x"] = map(percent, 0, 100, oldObj["T21x"], newObj["T21x"]);  
  new_letter["T21y"] = map(percent, 0, 100, oldObj["T21y"], newObj["T21y"]); 
  new_letter["T22x"] = map(percent, 0, 100, oldObj["T22x"], newObj["T22x"]);  
  new_letter["T22y"] = map(percent, 0, 100, oldObj["T22y"], newObj["T22y"]);  
  new_letter["T23x"] = map(percent, 0, 100, oldObj["T23x"], newObj["T23x"]);
  new_letter["T23y"] = map(percent, 0, 100, oldObj["T23y"], newObj["T23y"]);
  new_letter["rot1"] = map(percent, 0, 100, oldObj["rot1"], newObj["rot1"]);
  new_letter["rot2"] = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);

 


  return new_letter;
}

var swapWords = [
  "SHARPEST",
  "TRIANGLE",
  "ALPHABET"
]