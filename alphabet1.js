var col1;
var col2;
var col3;


const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;


}

function draw() {
    col1 = color(99,116,111); //dark green
  col2 = color(121,198,195); //light green
  col3 = color(221,66,66); //red
scale(2);
translate(35,30);
  noStroke();
  
  A1();
  A2();
  A3();
  A4();
  A5();
  A6();
  A7();
  A10();
  B1();
  B2();
  B3();
  B4();
  B5();
  B6();
  B7();
  B8();
  C1();
  C2();
  C3();
  C4();
  C5();
  C6();
  C7();
}
function A1(){
  
  push();
  scale(4);
  push();
  fill(col1);
 
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();
  push();
  fill(col2);
  translate(0.2,0);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(20,15);
  vertex(20,21);
  vertex(15,25);
  endShape();
  pop();
  push();
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(15,11);
  vertex(10,15);
  vertex(15,20);
  endShape();
  pop();
  pop();
}
function A2(){
  push();
  fill(col1);
  translate(0,20);
  scale(4);
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
 
  pop();
}
function A3(){
  
  push();
  translate(0,40);
  scale(4);
  fill(col1);
  push();
 
  
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();
  fill(col2);
push();
translate(0.2,0);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(20,23);
  vertex(15,25);
  vertex(15,20);
  endShape()
  pop();
  pop();
}
function A10(){
  push();
  translate(0,21);
  scale(4);
  push();
   
  fill(col3);
  beginShape();//(iii)
  translate(0.1,0);
  vertex(15,20);

  vertex(20,16);
  vertex(25.5,19);
  vertex(20,23);

  endShape();
  pop();
  push();
  fill(col1);
  beginShape(); //(i)
  vertex(15,20);
  vertex(20,23);
  vertex(20,28);
  vertex(15,25);
  vertex(15,20);
  endShape();
  pop();
  beginShape();//(ii)
  fill(col2);
  vertex(20,23);
  vertex(20,28);
  vertex(26,24);
  vertex(27,18);
  vertex(20,23);
  endShape();
}
function A4(){

  push();
  translate(20,-16);
  scale(4);
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(15,11);
  vertex(10,15);
  vertex(14,20);
  endShape();
  pop();
}
function A5(){
   push();
   scale(4);

  
   push();
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(25,11);
  vertex(30,15);
  vertex(26,19);
  vertex(20,15);
  
  endShape();
  pop();

  fill(col1);
  beginShape();//(i)
  vertex(26,19);
  vertex(20,15);
  vertex(20,21);
  vertex(26,24.5);

  endShape();
  push();
  fill(col2);
  beginShape(); //(ii)
  vertex(30,15);
  vertex(30,21);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();
  pop();
}
function A6(){
  push();
  scale(4);
  translate(0,5);
  fill(col2);
  beginShape(); //(ii)
  vertex(30,15);
  vertex(30,21);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();
}
function A7(){
  push();
  scale(4);
  translate(0,10);
  push();
  fill(col2);
  beginShape(); //(ii)
  vertex(30,15);
  vertex(30,21);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();
  fill(col1);
  beginShape(); //(i)
  vertex(26,24.5);
  vertex(26,19);
  vertex(19,23);
  vertex(26,24.5);
  endShape();
  pop();
}
function B1(){
  push();
  
  translate(30,-5);
  fill(col1);
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
 
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(15,11);
  vertex(10,15);
  vertex(15,20);
  endShape();
  pop();
}
function B2(){
  push();
  translate(30,0);
  fill(col1);
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();

push();
  fill(col2);
translate(30.2,1);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(20,23);
  vertex(15,25);
  vertex(15,20);
  endShape()
  pop();
}
function B3(){
  push();
  translate(30,5);
  fill(col1);
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();
}
function B4(){
  push();
  translate(5,-9);
  beginShape(); //(iii)
  fill(col3);
  vertex(50,15);
  vertex(45,11);
  vertex(40,15);
  vertex(44,20);
  endShape();
  pop();
}
function B5(){
  
  push();
  translate(30,-5);
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(25,11);
  vertex(30,15);
  vertex(26,19);
  vertex(20,15);
  
  endShape();
  pop();
  push();
  translate(30,-5);
  fill(col2);
  beginShape(); //(ii)
  vertex(30,15);
  vertex(30,21);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();

}
function B7(){
  push();
  translate(25,0);
  fill(col2);
  beginShape(); //(ii)
  vertex(31,14);
  vertex(31,19.5);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();
   pop();
   scale(4);
translate(25.1,5);
  fill(col1);
  beginShape();//(i)
  vertex(26,19);
  vertex(20,15);
  vertex(20,21);
  vertex(26,24.5);

  endShape();
}
function B8(){
   push();
   translate(5.5,5.8);
  fill(col1);
  beginShape(); //(i)
  vertex(14,19);
  vertex(20,23);
  vertex(20,28);
  vertex(14,24);
  vertex(14,20);
  endShape();
  pop();
  push();
  translate(5.5,5.8);
  beginShape();//(ii)
  fill(col2);
  vertex(20,23);
  vertex(20,28);
  vertex(26,24);
  vertex(27,18);
  vertex(20,23);
  endShape();
  pop();
}
function B6(){
  push();
  translate(35,2.9);
  beginShape();//(ii)
  fill(col2);
  vertex(20,22.8);
  vertex(20,28);
  vertex(25,23.5);
  vertex(25,18);
  vertex(20,22.8);
  endShape();
  pop();
  push();
  translate(32.5,1);
  fill(col1);
  beginShape(); //(i)
  vertex(23.5,25);
  vertex(23,18);
  vertex(19,23);
  vertex(23.5,25);
  endShape();
  pop();
  
  push();
  fill(col3);
translate(40.6,0);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(19,21);
  vertex(15,25);
  vertex(15,20);
  endShape()
  pop();
}

function C1(){
   push();
   translate(40,-6);
  beginShape(); //(iii)
  fill(col3);
  vertex(20,15);
  vertex(15,11);
  vertex(10,15);
  vertex(15,20);
  endShape();
  pop();
  push();
  translate(40,-6);
  fill(col1);
 
  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();
    push();
    translate(40,-6);
  fill(col2);
  translate(0.2,0);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(20,15);
  vertex(20,21);
  vertex(15,25);
  endShape();
  pop();
}
function C2(){
    push();
    translate(40,-1);
  fill(col2);
  translate(0.2,0);
  beginShape(); //(ii)
  vertex(15,20);
  vertex(20,15);
  vertex(20,21);
  vertex(15,25);
  endShape();
  pop();
   push();
  fill(col1);
  translate(40,-1);

  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
 
  pop();
}
function C3(){
   push();
  fill(col1);
  translate(40,4);

  beginShape(); //(i)
  vertex(10,15);
  vertex(15,20);
  vertex(15,25);
  vertex(10,20);
  vertex(10,15);
  endShape();
 
  pop();
 
}
function C4(){
   push();
   
  fill(col3);
  beginShape();//(iii)
  translate(38.9,-14);
  vertex(15,20);

  vertex(20,16);
  vertex(26,19);
  vertex(20,24);

  endShape();
  pop();
}
function C5(){
   push();
   
  fill(col3);
  beginShape();//(iii)
  translate(45.1,-11);
  vertex(15,20);

  vertex(19.5,16);
  vertex(25.5,19);
  vertex(20,23);

  endShape();
  pop();
  push();
  translate(39.5,-7.6);
  fill(col2);
  beginShape(); //(ii)
  vertex(31,15.5);
  vertex(31,21);
  vertex(26,24.5);
  vertex(26,19);
  endShape();
  pop();
  push();
  translate(50,-6);
  fill(col1);
 
  beginShape(); //(i)
  vertex(10,15);
  vertex(15.5,18);
  vertex(15.5,23);
  vertex(10,20);
  vertex(10,15);
  endShape();
  pop();
}
function C7(){
   push();
   
  fill(col3);
  beginShape();//(iii)
  translate(40,4);
  vertex(15,20);

  vertex(20,16);
  vertex(25.5,19);
  vertex(20,23);

  endShape();
  pop();
   push();
   translate(45,8);
  fill(col1);
 
  beginShape(); //(i)
  vertex(10,16);
  vertex(15,19);
  vertex(15,25);
  vertex(10,21);
  vertex(10,16);
  endShape();
  pop();
   push();
  translate(34.1,8.5);
  fill(col2);
  beginShape(); //(ii)
  vertex(31.5,14.5);
  vertex(31.5,21);
  vertex(26,24.5);
  vertex(26,18);
  endShape();
  pop();
}
function C6(){
   push();
   
  fill(col3);
  beginShape();//(iii)
  translate(45,0.2);
  vertex(15,20);

  vertex(20.8,16.7);
  vertex(25.5,19);
  vertex(20,23);

  endShape();
  pop();
   push();
  translate(39,5.2);
  fill(col2);
  beginShape(); //(ii)
  vertex(31.5,14);
  vertex(31.5,21);
  vertex(26,24.5);
  vertex(26,18);
  endShape();
  pop();
}