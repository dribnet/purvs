const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";
"#e3eded"
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let circle1x = letterData["circle1x"];
  let circle1y = letterData["circle1y"];
  let circle2x = letterData["circle2x"];
  let circle2y = letterData["circle2y"];
  let circle3x = letterData["circle3x"];
  let circle3y = letterData["circle3y"];
  let size = letterData["size"];



 
  noStroke();
  //push();
  strokeWeight(1);
  fill('#ff59c4');
  push();
  //translate(posx, posy);
  rectMode(CENTER);
  translate(50, 100);
  rect(0, 0, 100, 100, 20);  
  pop();

  fill('#e3eded');
  push();
  translate(50, 100);


  if(size > 100){
    ellipse(circle1x, circle1y, 60, size);
  } else {
    ellipse(circle1x, circle1y, size, size);
  }

  ellipse(circle2x, circle2y, 40, 40);
  ellipse(circle3x, circle3y, 40, 40);

  pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]