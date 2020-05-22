const colorLeaf  = "#b75129";
const colorStroke  = "#a42a21";
const colorStick = "#753922";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  
  angleMode(DEGREES);

  let leaf1Posx = letterData["offsetx"];
  let leaf1Posy = letterData["offsety"];
  let leaf2Posx = leaf1Posx + letterData["leaf2Posx"];
  let leaf2Posy = leaf1Posy + letterData["leaf2Posy"];
  let angle1 = letterData["rotate1"];
  let angle2 = letterData["rotate2"];
  let angle3 = letterData["rotate3"];
  let stickPosx = leaf1Posx + letterData["stickPosx"];
  let stickPosy = leaf1Posy + letterData["stickPosy"];
  let circlex = leaf1Posx + letterData["circlex"];
  let circley = leaf1Posy + letterData["circley"];
  let circlew = letterData["circlew"];
  let circleh = letterData["circleh"];
  
  fill(colorLeaf);
  stroke(colorStroke);
  strokeWeight(4);
  push();
  translate(leaf1Posx,leaf1Posy);
  rotate(angle1);
  drawLeaf(0,0);
  pop();
 
  push();
  translate(leaf2Posx,leaf2Posy);
  rotate(angle2);
  drawLeaf(0,0);
  pop();

  fill("#d9b07e"); //same colour as background
  noStroke();
  ellipse(circlex,circley,circlew,circleh);

  fill(colorStick);
  stroke(colorStick);
  strokeWeight(3);
  push();
  translate(stickPosx,stickPosy);
  rotate(angle3);
  drawStick(0,0);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["leaf2Posx"] = map(percent, 0, 100, oldObj["leaf2Posx"], newObj["leaf2Posx"]);
  new_letter["leaf2Posy"] = map(percent, 0, 100, oldObj["leaf2Posy"], newObj["leaf2Posy"]);
  new_letter["rotate1"] = map(percent, 0, 100, oldObj["rotate1"], newObj["rotate1"]);
  new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["rotate3"] = map(percent, 0, 100, oldObj["rotate3"], newObj["rotate3"]);
  new_letter["stickPosx"] = map(percent, 0, 100, oldObj["stickPosx"], newObj["stickPosx"]);
  new_letter["stickPosy"] = map(percent, 0, 100, oldObj["stickPosy"], newObj["stickPosy"]);
  new_letter["circlex"] = map(percent, 0, 100, oldObj["circlex"], newObj["circlex"]);
  new_letter["circley"] = map(percent, 0, 100, oldObj["circley"], newObj["circley"]);
  new_letter["circlew"] = map(percent, 0, 100, oldObj["circlew"], newObj["circlew"]);
  new_letter["circleh"] = map(percent, 0, 100, oldObj["circleh"], newObj["circleh"]);
  return new_letter;
}

var swapWords = [
  "AUTUMNAL",
  "?NATURE?",
  "SEASONAL",
  "OUTDOORS",
  "?CRISPY?",
  "PLAYFUL?"
]

function drawLeaf(x,y){

beginShape();  //leaf shape
vertex(x,y-50);
bezierVertex(x+40,y-45,x+30,y+25,x,y+50);
bezierVertex(x-30,y+25,x-40,y-45,x,y-50);
endShape(CLOSE);

beginShape();  //center vein
curveVertex(x,y);
curveVertex(x,y-50);
curveVertex(x-2,y-10);
curveVertex(x+2,y+30);
curveVertex(x,y);
endShape();

beginShape(); //first small vein
curveVertex(x,y-40);
curveVertex(x,y-40);
curveVertex(x+8,y-35);
curveVertex(x+16,y-25);
curveVertex(x+16,y-25);
endShape();

beginShape(); //second small vein
curveVertex(x-2,y-23);
curveVertex(x-2,y-23);
curveVertex(x-11,y-15);
curveVertex(x-18,y-5);
curveVertex(x-18,y-5);
endShape();

beginShape(); //third small vein
curveVertex(x-1,y-5);
curveVertex(x-1,y-5);
curveVertex(x+8,y+3);
curveVertex(x+15,y+13);
curveVertex(x+15,y+13);
endShape();

beginShape(); //fourth small vein
curveVertex(x-2,y+15);
curveVertex(x-2,y+15);
curveVertex(x-6,y+18);
curveVertex(x-10,y+25);
curveVertex(x-10,y+25);
endShape();

}

function drawStick(x,y){
  beginShape();
  curveVertex(x-1,y+80);
  curveVertex(x-1,y+85);
  curveVertex(x+2,y+80);
  curveVertex(x+3,y+34);
  curveVertex(x+5,y+19);
  curveVertex(x+6,y);
  curveVertex(x+1,y+29);
  curveVertex(x-1,y+20);
  curveVertex(x-4,y+12);
  curveVertex(x-2,y+22);
  curveVertex(x-1,y+49);
  curveVertex(x-8,y+36);
  curveVertex(x-5,y+46);
  curveVertex(x-1,y+55);
  curveVertex(x-1,y+85);
  endShape(CLOSE);
}