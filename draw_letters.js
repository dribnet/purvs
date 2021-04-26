/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0d0c24";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //set up the sketch
angleMode(DEGREES);
noStroke();
  // color/stroke setup
  let size = letterData["size"];
  //let posx = letterData["offsetx"];
  //let posy = letterData["offsety"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let sizeTwo = letterData["size2"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];
  let sizeThree = letterData["size3"];
  let pos4x = letterData["offsetx4"];
  let pos4y = letterData["offsety4"];
  let angleOne = letterData["angleStart"];
  let angleTwo = letterData["angleStop"];
  let colourScheme = letterData["colour"];
 
  sun(50, 150, 75);  //the main circle
  moon(pos2x, pos2y, size, size);
  stroke (61, 58, 112);
  //strokeWeight(3);
  fill(35, 32, 97, 200)
  planetOne(pos3x, pos3y, sizeTwo, sizeTwo);
  fill(colourScheme)
  noStroke();
  shootingStar(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo)

  strokeWeight(1.5);

// push();
// beginShape();
// for (let i=0; i<359; i++) {
// var r = map(sin(i*8), -1, 1, 22, 28);
// var x = r * cos(i);
// var y = r * sin(i);
// vertex(x, y);
// }
// endShape(CLOSE);
// pop();
}

function shootingStar (pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo) {
fill(255, 242, 218, 200)
arc(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo);
push();
stroke (255);
strokeWeight(0);
fill(255);
beginShape();
for (let i=0; i<359; i++) {
var r1 = map(sin(i*8), -1, 1, sizeThree/15-sizeThree/12, sizeThree/15);
var r2 = map(sin(i*12), -1, 1, sizeThree/15-sizeThree/12, sizeThree/15);
var r = r1 +r2;
var x = r * cos(i);
var y = r * sin(i);
vertex(pos4x+x, pos4y+y);
}
endShape(CLOSE);
pop();

}

function planetOne (pos3x, pos3y, sizeTwo, sizeTwo) {
  noStroke();
  fill(35, 32, 97, 200)
  ellipse(pos3x, pos3y, sizeTwo, sizeTwo);
  strokeWeight(1);
  stroke(129, 206, 227, 150);
noFill();
  for (f=0; f<3; f++){
var offsety = f*sizeTwo/10
bezier(pos3x+sizeTwo/1.85, pos3y+offsety, pos3x+sizeTwo/2.25, pos3y+sizeTwo/6+offsety, pos3x-sizeTwo/2.25, pos3y-sizeTwo/6+offsety, pos3x-sizeTwo/1.85, pos3y+offsety);
}

}

function sun (x, y) {

fill(144, 102, 189, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 38, 42);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(219, 105, 177, 100);  
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 36, 40);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(219, 105, 177, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 34, 38);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(224, 101, 159, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 32, 36);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(224, 142, 101, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 30, 34);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(224, 181, 101, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 28, 32);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(237, 225, 111, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 26, 30);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(255, 250, 105, 100);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 24, 28);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);

fill(255, 255, 255, 80);
beginShape();
for (let i=0; i<359; i++) {
var r = map(sin(i*8), -1, 1, 22, 26);
var sunx = r * cos(i);
var suny = r * sin(i);
vertex(x+sunx, y+suny);
}
endShape(CLOSE);
}

function moon (pos2x, pos2y, size, size)   {
  stroke(150, 150, 180);
  strokeWeight(2);
  fill(120, 120, 150);
beginShape();
for (let i=0; i<359; i++) {
var r1 = map(sin(i*3), -1, 1, size/4-size/32, size/4);
var r2 = map(sin(i*6), -1, 1, size/4-size/32, size/4);
var r = r1 +r2;
var x = r * cos(i);
var y = r * sin(i);
vertex(pos2x+x, pos2y+y);
}
endShape(CLOSE);

noStroke();
fill(150, 150, 180)
ellipse (pos2x-size/6, pos2y+size/6, size/2.5, size/2.5)
ellipse (pos2x+size/4.5, pos2y-size/6, size/3, size/3)
ellipse (pos2x+size/8, pos2y, size/6, size/6)
ellipse (pos2x-size/4, pos2y-size/4, size/5, size/5)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["size2"] = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["size3"] = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleStop"] = map(percent, 0, 100, oldObj["angleStop"], newObj["angleStop"]);
  new_letter["colour"] = map(percent, 0, 100, oldObj["colour"], newObj["colour"]);
  return new_letter;
}


var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]