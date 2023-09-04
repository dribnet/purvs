/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  strokeWeight(4);

  const lines  = "#ff4800";
  const colorBack   = "#000000";
  const glow = "#ffb187";
  const star = "#fcfcfc";


  let dotSize = 15;


//*****DRAW LINES***//
//P1 = 25, 20
//P2 = 95, 20
//P3 = 15, 100
//P4 = 85, 100
//P5 = 5, 180
//P6 = 75, 180

p1x = letterData["p1x"];
p1y = letterData["p1y"];
p2x = letterData["p2x"];
p2y = letterData["p2y"];
p3x = letterData["p3x"];
p3y = letterData["p3y"];
p4x = letterData["p4x"];
p4y = letterData["p4y"];
p5x = letterData["p5x"];
p5y = letterData["p5y"];
p6x = letterData["p6x"];
p6y = letterData["p6y"];


fill(glow); 
stroke(glow); 
strokeWeight(16); 

//point one
line(25, 20, p1x, p1y);
//point two
line(95, 20, p2x, p2y);
//point three
line(15, 100, p3x, p3y);
//point four
line(85, 100, p4x, p4y);
//point five
line(5, 180, p5x, p5y);
//point six
line(75, 180, p6x, p6y);

fill(lines); 
stroke(lines); 
strokeWeight(9); 


//point one
line(25, 20, p1x, p1y);
//point two
line(95, 20, p2x, p2y);
//point three
line(15, 100, p3x, p3y);
//point four
line(85, 100, p4x, p4y);
//point five
line(5, 180, p5x, p5y);
//point six
line(75, 180, p6x, p6y);


strokeWeight(1);
fill(star); 
stroke(star); 

if(p1x!=null && p1y!=null){
//POINT ONE STAR
push();
translate(p1x,p1y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}


if(p2x!=null && p2y!=null){
//POINT TWO STAR
push();
translate(p2x,p2y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}

if(p3x!=null && p3y!=null){
//POINT THREE STAR
push();
translate(p3x,p3y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}

if(p4x!=null && p4y!=null){
//POINT FOUR STAR
push();
translate(p4x,p4y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}

if(p5x!=null && p5y!=null){
//POINT FIVE STAR
push();
translate(p5x,p5y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}

if(p6x!=null && p6y!=null){
//POINT SIX STAR
push();
translate(p6x,p6y-2);
scale(1.3, 1.3);

beginShape();
vertex(0,-8);
vertex(3,-2);
vertex(9,0);
vertex(4,4);
vertex(5,10);
vertex(0,5);
vertex(-5,10);
vertex(-4, 4);
vertex(-9,0);
vertex(-3,-2);
endShape(CLOSE);
pop();
}


}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["p1x"] = map(percent, 0, 100, oldObj["p1x"], newObj["p1x"]);
  new_letter["p1y"] = map(percent, 0, 100, oldObj["p1y"], newObj["p1y"]);

  new_letter["p2x"] = map(percent, 0, 100, oldObj["p2x"], newObj["p2x"]);
  new_letter["p2y"] = map(percent, 0, 100, oldObj["p2y"], newObj["p2y"]);

  new_letter["p3x"] = map(percent, 0, 100, oldObj["p3x"], newObj["p3x"]);
  new_letter["p3y"] = map(percent, 0, 100, oldObj["p3y"], newObj["p3y"]);

  new_letter["p4x"] = map(percent, 0, 100, oldObj["p4x"], newObj["p4x"]);
  new_letter["p4y"] = map(percent, 0, 100, oldObj["p4y"], newObj["p4y"]);

  new_letter["p5x"] = map(percent, 0, 100, oldObj["p5x"], newObj["p5x"]);
  new_letter["p5y"] = map(percent, 0, 100, oldObj["p5y"], newObj["p5y"]);

  new_letter["p6x"] = map(percent, 0, 100, oldObj["p6x"], newObj["p6x"]);
  new_letter["p6y"] = map(percent, 0, 100, oldObj["p6y"], newObj["p6y"]);
  return new_letter;
}

var swapWords = [
  "STARDUST",
  "PROJECT2",
  "MDDNFONT"
]