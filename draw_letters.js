const colorFront  = "#199cff";


// This function draws each individual box
function drawPart(posx, posy) {

  const col1 = "#ffcc74"; 
  const col2 = "#ff7991"; //light green
  const col3 = "#4fc4d8"; //red

  push();
  scale(0.5);
  noStroke();
  translate(posx, posy);

  push();
  beginShape();
  fill(col1);
  stroke(col1);
  vertex(50,50);
  vertex(100,70);
  vertex(100,20);
  vertex(50,10);

  endShape();
  pop();

    push();
  fill(col2);
  stroke(col2);
  beginShape();
  vertex(100,70);
  vertex(100,20);
  vertex(130,0);
  vertex(130,40);
  endShape();
  pop();

push();
  fill(col3);
  stroke(col3);
  beginShape();
  vertex(100,20);
  vertex(130,-2);
  vertex(85,-10);
  vertex(50,10);
  endShape();
  pop();

  pop();

}

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // rotation in degrees (for tilt variable)
  // angleMode(DEGREES);

  let posx=0;
  let posy=0;
  // let scale=0;

  // show bounding box
  // noFill();
  // stroke('red');
  // rect(0, 0, 100, 200);

  // fill(colorFront);
  // stroke(colorStroke);

  let pos2x = posx + letterData["box2x"];
  let pos2y = posy + letterData["box2y"];

  let pos3x = posx + letterData["box3x"];
  let pos3y = posy + letterData["box3y"];

  let pos1x = posx + letterData["box1x"];
  let pos1y = posy + letterData["box1y"];

  let pos4x = posx + letterData["box4x"];
  let pos4y = posy + letterData["box4y"];

  let pos5x = posx + letterData["box5x"];
  let pos5y = posy + letterData["box5y"];

  let pos6x = posx + letterData["box6x"];
  let pos6y = posy + letterData["box6y"];

  let pos7x = posx + letterData["box7x"];
  let pos7y = posy + letterData["box7y"];

  let pos8x = posx + letterData["box8x"];
  let pos8y = posy + letterData["box8y"];

  
  // print(pos2y, pos3y)

  push();

  // drawPart(pos2x, pos2y);
  // drawPart(pos3x, pos3y);
  // drawPart(pos1x, pos1y);
  // drawPart(pos4x, pos4y);
  // drawPart(pos5x, pos5y);
  // drawPart(pos6x, pos6y);
  // drawPart(pos7x, pos7y);
  // drawPart(pos8x, pos8y);
  drawPart(pos1x, pos1y);
  drawPart(pos4x, pos4y);
  drawPart(pos2x, pos2y);
  drawPart(pos8x, pos8y);

  //three main
  drawPart(pos3x, pos3y); //three main
  drawPart(pos5x, pos5y);
  drawPart(pos6x, pos6y);

  drawPart(pos7x, pos7y); // the frontest one


  // drawPart(posx, posy, pos3x, pos3y);
  // drawPart(pos2x, pos2y, letterData["2x"], letterData["2y"]);
  // drawPart(pos3x, pos3y, scale, letterData["3x"], letterData["3y"]);
  pop();
}
function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["box2x"] = map(percent, 0, 100, oldObj["box2x"], newObj["box2x"]);
  new_letter["box2y"] = map(percent, 0, 100, oldObj["box2y"], newObj["box2y"]);

  new_letter["box3x"] = map(percent, 0, 100, oldObj["box3x"], newObj["box3x"]);
  new_letter["box3y"] = map(percent, 0, 100, oldObj["box3y"], newObj["box3y"]);

  new_letter["box4x"] = map(percent, 0, 100, oldObj["box4x"], newObj["box4x"]);
  new_letter["box4y"] = map(percent, 0, 100, oldObj["box4y"], newObj["box4y"]);
 
  new_letter["box1x"] = map(percent, 0, 100, oldObj["box1x"], newObj["box1x"]);
  new_letter["box1y"] = map(percent, 0, 100, oldObj["box1y"], newObj["box1y"]);

  new_letter["box5x"] = map(percent, 0, 100, oldObj["box5x"], newObj["box5x"]);
  new_letter["box5y"] = map(percent, 0, 100, oldObj["box5y"], newObj["box5y"]);

  new_letter["box6x"] = map(percent, 0, 100, oldObj["box6x"], newObj["box6x"]);
  new_letter["box6y"] = map(percent, 0, 100, oldObj["box6y"], newObj["box6y"]);

  new_letter["box7x"] = map(percent, 0, 100, oldObj["box7x"], newObj["box7x"]);
  new_letter["box7y"] = map(percent, 0, 100, oldObj["box7y"], newObj["box7y"]);

  new_letter["box8x"] = map(percent, 0, 100, oldObj["box8x"], newObj["box8x"]);
  new_letter["box8y"] = map(percent, 0, 100, oldObj["box8y"], newObj["box8y"]);

  return new_letter;

}
var swapWords = [
  "MAZEFONT",
  "PANCAKES",
  "CUTIEPIE",
  "COLORFUL",
  "UNPUZZLE",
  "LUNCHBOX",
  "JOYSTICK",
  "DUCKWALK",
  "WHEEZING",
  "UNBOXING",
  "ENJOYING",
  "BUBBLING"
]

