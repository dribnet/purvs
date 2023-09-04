// This function draws each individual cube
function drawPart(posx, posy) {

  const col1 = "#f9d9e9"; //light pink
  const col2 = "#bbdade"; //blue
  const col3 = "#fefefe"; //white

  push();

  scale(0.5);
  noStroke();
  translate(posx, posy);
  
  //front face of my cube
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
  
  //side face of my cube
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

  //top face of my cube
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

// This function draw the two combined cubes, this is to shave off 2 x,y coordinate of 1cube.
function drawPart2(posx, posy) {

  const col1 = "#f9d9e9"; 
  const col2 = "#bbdade";
  const col3 = "#fefefe"; 

  push();

  scale(0.5);
  noStroke();
  translate(posx, posy);
  
  //first cube
  push();
  beginShape();
  fill(col1);
  stroke(col1);
  vertex(50,120);
  vertex(100,140);
  vertex(100,90);
  vertex(50,80);

  endShape();
  pop();

  push();
  fill(col2);
  stroke(col2);
  beginShape();
  vertex(100,140);
  vertex(100,90);
  vertex(130,70);
  vertex(130,110);
  endShape();
  pop();

  push();
  fill(187,218,222,0);
  stroke(187,218,222,0);
  beginShape();
  vertex(100,90);
  vertex(130,68);
  vertex(85,60);
  vertex(50,80);
  endShape();
  pop();

  pop();

  //second cube
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

function drawLetter(letterData) {


  let posx=0;
  let posy=0;


  let pos2x = posx + letterData["box2x"];
  let pos2y = posy + letterData["box2y"];

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

  //The way I placed the following drawCode determines 
  //which cubes go on top of which to create a 3D illution
  
  push();

  drawPart(pos1x, pos1y);

  drawPart(pos4x, pos4y);

  drawPart(pos2x, pos2y);

  drawPart(pos8x, pos8y);

  drawPart(pos5x, pos5y);

  drawPart2(pos6x, pos6y);  //drawpart2

  drawPart(pos7x, pos7y); // the frontest one

  pop();
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};

  new_letter["box2x"] = map(percent, 0, 100, oldObj["box2x"], newObj["box2x"]);
  new_letter["box2y"] = map(percent, 0, 100, oldObj["box2y"], newObj["box2y"]);

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
  "ILLUSION",
  "LOLLIPOP",
  "QUESTION",
  "COLORFUL",
  "ICECREAM",
  "BUBBLING"
]

