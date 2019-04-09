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

  const lines  = "#24ad96";
  const dots = "#006aff";
  const colorBack   = "#000000";
  const glow = "#c4fff5";



/**
   //Create variables from letterData
  p1p2 = letterData["p1p2"];
  p3p4 = letterData["p3p4"];
  p5p6 = letterData["p5p6"];
  p1p3 = letterData["p1p3"];
  p2p4 = letterData["p2p4"];
  p3p5 = letterData["p3p5"];
  p4p6 = letterData["p4p6"];
  p1p6 = letterData["p1p6"];
  p2p5 = letterData["p2p5"];
*/
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
strokeWeight(22); 

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
strokeWeight(12); 


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


//*****DRAW DOTS******
strokeWeight(4);
fill(dots); 
stroke(dots); 


//POINT ONE
//ellipse(25, 20, dotSize);//top left p1  
beginShape();
vertex(25,12);
vertex(27,20);
vertex(32,20);
vertex(28,22);
vertex(30,30);
vertex(25,25);
vertex(20,30);
vertex(22,22);
vertex(18,20);
vertex(23,20);
endShape(CLOSE);

//POINT TWO
//ellipse(95, 20, dotSize);//top right p2 
beginShape();
vertex(95,12);
vertex(97,20);
vertex(102,20);
vertex(98,22);
vertex(100,30);
vertex(95,25);
vertex(90,30);
vertex(92,22);
vertex(88,20);
vertex(93,20);
endShape(CLOSE);

//POINT THREE
//ellipse(15, 100, dotSize); //mid left p3 
beginShape();
vertex(15, 92);
vertex(17,100);
vertex(22, 100);
vertex(18, 102);
vertex(20, 110);
vertex(15, 105);
vertex(10, 110);
vertex(12, 102);
vertex(8, 100);
vertex(13, 100);
endShape(CLOSE);

//POINT FOUR
//ellipse(85, 100, dotSize); //mid right p4 
beginShape();
vertex(85, 92);
vertex(87, 100);
vertex(92, 100);
vertex(88, 102);
vertex(90, 110);
vertex(85, 105);
vertex(80, 110);
vertex(82, 102);
vertex(78, 100);
vertex(83, 100);
endShape(CLOSE);

//POINT FIVE
//ellipse(5, 180, dotSize); //bottom left p5 
beginShape();
vertex(6, 172);
vertex(8, 180);
vertex(13, 180);
vertex(9, 182);
vertex(11, 190);
vertex(6, 185);
vertex(1, 190);
vertex(3, 182);
vertex(0, 180);
vertex(4, 180);
endShape(CLOSE);

//POINT SIX
//ellipse(75, 180, dotSize); //bottom right p6 
beginShape();
vertex(75, 172);
vertex(77, 180);
vertex(82, 180);
vertex(78, 182);
vertex(80, 190);
vertex(75, 185);
vertex(70, 190);
vertex(72, 182);
vertex(68, 180);
vertex(73, 180);
endShape(CLOSE);


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
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]