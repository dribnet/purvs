
const colorStroke = "#f4d2d0"; //pink

function drawLetter(letterData) {
  
 //static rect box
  noStroke(); 
  fill(243,232,228,170); 
  rect(8,15,90,165);

//rect box shadow top
  noStroke(); 
  fill(201,211,223,160); 
  quad(8,15,25,10,110,10,98,15);

//rect box shadow side
  noStroke(); 
  fill(158,174,197,160); 
  quad(98,15,110,10,110,165,98,180);

//Parameters for lines

  let l1x = letterData["l1x"];
  let l1y = letterData["l1y"];
  let l2x = letterData["l2x"];
  let l2y = letterData["l2y"];
  let l3x = letterData["l3x"];
  let l3y = letterData["l3y"];
  let l4x = letterData["l4x"];
  let l4y = letterData["l4y"];
  let l5x = letterData["l5x"];
  let l5y = letterData["l5y"];
  let l6x = letterData["l6x"];
  let l6y = letterData["l6y"];
  let l7x = letterData["l7x"];
  let l7y = letterData["l7y"];
  let l8x = letterData["l8x"];
  let l8y = letterData["l8y"];

//Lines
  stroke(colorStroke);
  strokeWeight(3);
  line(l1x,l1y,l2x,l2y);

  stroke(colorStroke);
  strokeWeight(3);
  line(l3x,l3y,l4x,l4y);

  stroke(colorStroke);
  strokeWeight(3);
  line(l5x,l5y,l6x,l6y);

  stroke(colorStroke);
  strokeWeight(3);
  line(l7x,l7y,l8x,l8y);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["l1x"] = map(percent, 0, 100, oldObj["l1x"], newObj["l1x"]);
  new_letter["l1y"] = map(percent, 0, 100, oldObj["l1y"], newObj["l1y"]);
  new_letter["l2x"] = map(percent, 0, 100, oldObj["l2x"], newObj["l2x"]);
  new_letter["l2y"] = map(percent, 0, 100, oldObj["l2y"], newObj["l2y"]);
  new_letter["l3x"] = map(percent, 0, 100, oldObj["l3x"], newObj["l3x"]);
  new_letter["l3y"] = map(percent, 0, 100, oldObj["l3y"], newObj["l3y"]);
  new_letter["l4x"] = map(percent, 0, 100, oldObj["l4x"], newObj["l4x"]);
  new_letter["l4y"] = map(percent, 0, 100, oldObj["l4y"], newObj["l4y"]);
  new_letter["l5x"] = map(percent, 0, 100, oldObj["l5x"], newObj["l5x"]);
  new_letter["l5y"] = map(percent, 0, 100, oldObj["l5y"], newObj["l5y"]);
  new_letter["l6x"] = map(percent, 0, 100, oldObj["l6x"], newObj["l6x"]);
  new_letter["l6y"] = map(percent, 0, 100, oldObj["l6y"], newObj["l6y"]);
  new_letter["l7x"] = map(percent, 0, 100, oldObj["l7x"], newObj["l7x"]);
  new_letter["l7y"] = map(percent, 0, 100, oldObj["l7y"], newObj["l7y"]);
  new_letter["l8x"] = map(percent, 0, 100, oldObj["l8x"], newObj["l8x"]);
  new_letter["l8y"] = map(percent, 0, 100, oldObj["l8y"], newObj["l8y"]);
  return new_letter;
}

var swapWords = [
  "TYPOFONT",
  "MANGO",
  "ABSTRACT"
]