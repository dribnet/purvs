/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

 var Xcenter = 0;
 var Ycenter = 0;
//X axis 10 & -10
 var X1 = 2.5;
 var X2 = 5;
 var X3 = 7.5;
 var X4 = 10;

 var X1B = X1*-1;
 var X2B = X2*-1;
 var X3B = X3*-1;
 var X4B = X4*-1;
//Y axis 10 & -10
 var Y1 = 2.5;
 var Y2 = 5;
 var Y3 = 7.5;
 var Y4 = 10;

 var Y1B = Y1*-1;
 var Y2B = Y2*-1;
 var Y3B = Y3*-1;
 var Y4B = Y4*-1;


function drawFace1() {
// background(36,45,50);
fill(255);
// strokeWeight(0.1);
noStroke();
//top of head

beginShape();
curveVertex(-6.5,-1.9);
curveVertex(-6.5,-1.9);
curveVertex(-7,-4);
curveVertex(-5,-8);
curveVertex(0,-10);
curveVertex(5,-8);
curveVertex(7,-4);
curveVertex(6.5,-1.9);
curveVertex(6.5,-1.9);
endShape();
//faceFront
beginShape();
//left
curveVertex(-6,-4);
curveVertex(-6,-4);
curveVertex(-6.2,-2);
curveVertex(-7,-1);
curveVertex(-6,0.5);
curveVertex(-5,1.5);
curveVertex(-3.5,2);
curveVertex(-3,2.5);
curveVertex(-2.5,4);
curveVertex(0,4.4);
//right
curveVertex(2.5,4);
curveVertex(3,2.5);
curveVertex(3,2);
curveVertex(5,1.5);
curveVertex(6,0.5);
curveVertex(7,-1);
curveVertex(6.2,-2);
curveVertex(6,-4);
curveVertex(6,-4);
endShape();

//jaw
beginShape();
curveVertex(-5.5,1);
curveVertex(-5.5,1);
curveVertex(-4.8,5);
curveVertex(-4.5,6);
curveVertex(-3.7,6.5);
curveVertex(0,6.8);
curveVertex(3.7,6.5);
curveVertex(4.5,6);
curveVertex(4.8,5);
curveVertex(5.5,1);

curveVertex(4,1.8);
curveVertex(3.7,4);
curveVertex(3,5.5);
curveVertex(2.6,6);
curveVertex(0,6.5);
curveVertex(-2.5,6);
curveVertex(-3,5.5);
curveVertex(-3.7,4);
curveVertex(-4,1.8);
curveVertex(-5.5,1);
curveVertex(-5.5,1);
endShape();

// frontjaw
beginShape();
curveVertex(-3.7,6);
curveVertex(-3.7,6);
curveVertex(-3.6,6.7);
curveVertex(-3,8.5);
curveVertex(-2,8.5);
curveVertex(2,8.5);
curveVertex(3,8.5);
curveVertex(3.6,6.7);
curveVertex(3.7,6);
curveVertex(-3.7,6);
curveVertex(-3.7,6);
endShape();


//DETAILING DRAWN ONTOP OF BASE SKULL

noFill();
stroke(0);
strokeWeight(0.1);
// jawBaseRight
beginShape();
curveVertex(5.5,1.2);
curveVertex(5.5,1.2);
curveVertex(4.8,5);
curveVertex(4.5,6);
curveVertex(3.7,6.5);
curveVertex(3.7,6.5);
endShape();

beginShape();
curveVertex(-5.5,1.2);
curveVertex(-5.5,1.2);
curveVertex(-4.8,5);
curveVertex(-4.5,6);
curveVertex(-3.7,6.5);
curveVertex(-3.7,6.5);
endShape();

beginShape();
curveVertex(5.5,1);
curveVertex(5.5,1);
curveVertex(4,1.8);
curveVertex(3.7,4);
curveVertex(3,5.5);
curveVertex(2.6,6);
curveVertex(0,6.5);
curveVertex(-2.5,6);
curveVertex(-3,5.5);
curveVertex(-3.7,4);
curveVertex(-4,1.8);
curveVertex(-5.5,1);
curveVertex(-5.5,1);
endShape();

//jawFront
strokeWeight(0.1);
beginShape();
curveVertex(-3.7,6);
curveVertex(-3.7,6);
curveVertex(-3.6,6.7);
curveVertex(-3,8.5);
curveVertex(-2,8.5);
curveVertex(2,8.5);
curveVertex(3,8.5);
curveVertex(3.6,6.7);
curveVertex(3.7,6);
curveVertex(3.7,6);

endShape();
//eyebrowL
beginShape();
curveVertex(-4,-5.5);
curveVertex(-4,-5.5);
curveVertex(-3,-5);
curveVertex(-2,-4.7);
curveVertex(-1,-4.5);
curveVertex(-0.5,-4);
curveVertex(-0.5,-4);
endShape();
//eyebrowR
beginShape();
curveVertex(4,-5.5);
curveVertex(4,-5.5);
curveVertex(3,-5);
curveVertex(2,-4.7);
curveVertex(1,-4.5);
curveVertex(0.5,-4);
curveVertex(0.5,-4);
endShape();
//teeth
fill(255);
strokeWeight(0.1);
beginShape();
//midL
curveVertex(0.1,4.4);
curveVertex(0.1,4.4);
curveVertex(0.1,5.4);
curveVertex(-0.65,5.4);
curveVertex(-0.65,4.4);
curveVertex(-0.65,4.4);
endShape();
//midR
curveVertex(0.1,4.4);
curveVertex(0.1,4.4);
curveVertex(0.1,5.4);
curveVertex(0.65,5.4);
curveVertex(0.65,4.4);
curveVertex(0.1,4.4);
curveVertex(0.1,4.4);
endShape();
//L1
beginShape();
curveVertex(-0.65,4.4);
curveVertex(-0.65,4.4);
curveVertex(-0.65,5.3);
curveVertex(-1.25,5.3);
curveVertex(-1.25,4.4);
curveVertex(-0.65,4.4);
curveVertex(-0.65,4.4);
endShape();
//L3
beginShape();
curveVertex(-1.3,4.4);
curveVertex(-1.3,4.4);
curveVertex(-1.3,5.2);
curveVertex(-1.9,5.2);
curveVertex(-1.9,4.4);
curveVertex(-1.3,4.4);
curveVertex(-1.3,4.4);
endShape();
//L4
beginShape();
curveVertex(-2,4.3);
curveVertex(-2,4.3);
curveVertex(-2,5);
curveVertex(-2.6,5);
curveVertex(-2.6,4.1);
curveVertex(-2,4.3);
curveVertex(-2,4.3);
endShape();
//R1
beginShape();
curveVertex(0.65,4.4);
curveVertex(0.65,4.4);
curveVertex(0.65,5.3);
curveVertex(1.25,5.3);
curveVertex(1.25,4.4);
curveVertex(0.65,4.4);
curveVertex(0.65,4.4);
endShape();
//R3
beginShape();
curveVertex(1.3,4.4);
curveVertex(1.3,4.4);
curveVertex(1.3,5.2);
curveVertex(1.9,5.2);
curveVertex(1.9,4.4);
curveVertex(1.3,4.4);
curveVertex(1.3,4.4);
endShape();
//R4
beginShape();
curveVertex(2,4.3);
curveVertex(2,4.3);
curveVertex(2,5);
curveVertex(2.6,5);
curveVertex(2.6,4.1);
curveVertex(2,4.3);
curveVertex(2,4.3);
endShape();
//botTeeth
//L1
beginShape();
curveVertex(0,6.5);
curveVertex(0,6.5);
curveVertex(0,5.7);
curveVertex(0.65,5.7);
curveVertex(0.65,6.5);
curveVertex(0.65,6.5);
endShape();
//L2
beginShape();
curveVertex(0.65,6.4);
curveVertex(0.65,6.4);
curveVertex(0.65,5.6);
curveVertex(1.3,5.6);
curveVertex(1.3,6.4);
curveVertex(1.3,6.4);
endShape();
//L3
beginShape();
curveVertex(1.4,6.2);
curveVertex(1.4,6.2);
curveVertex(1.4,5.4);
curveVertex(2,5.4);
curveVertex(2,6.2);
curveVertex(2,6.2);
endShape();
//L4
beginShape();
curveVertex(2.1,6);
curveVertex(2.1,6);
curveVertex(2.1,5.2);
curveVertex(2.6,5.2);
curveVertex(2.6,6);
curveVertex(2.6,6);
endShape();
//r1
beginShape();
curveVertex(0,6.5);
curveVertex(0,6.5);
curveVertex(0,5.7);
curveVertex(-0.65,5.7);
curveVertex(-0.65,6.5);
curveVertex(-0.65,6.5);
endShape();
//r2
beginShape();
curveVertex(-0.65,6.4);
curveVertex(-0.65,6.4);
curveVertex(-0.65,5.6);
curveVertex(-1.3,5.6);
curveVertex(-1.3,6.4);
curveVertex(-1.3,6.4);
endShape();
//r3
beginShape();
curveVertex(-1.4,6.2);
curveVertex(-1.4,6.2);
curveVertex(-1.4,5.4);
curveVertex(-2,5.4);
curveVertex(-2,6.2);
curveVertex(-2,6.2);
endShape();
//r4
beginShape();
curveVertex(-2.1,6);
curveVertex(-2.1,6);
curveVertex(-2.1,5.2);
curveVertex(-2.6,5.2);
curveVertex(-2.6,6);
curveVertex(-2.6,6);
endShape();
//facefrontdetail
strokeWeight(0.1);
stroke(0);
fill(255);
beginShape();
//left
curveVertex(-6,-4);
curveVertex(-6,-4);
curveVertex(-6.2,-2);
curveVertex(-7,-1);
curveVertex(-6,0.5);
curveVertex(-5,1.5);
curveVertex(-3.5,2);
curveVertex(-3,2.5);
curveVertex(-2.5,4);
curveVertex(0,4.4);
//right
curveVertex(2.5,4);
curveVertex(3,2.5);
curveVertex(3,2);
curveVertex(5,1.5);
curveVertex(6,0.5);
curveVertex(7,-1);
curveVertex(6.2,-2);
curveVertex(6,-4);
curveVertex(6,-4);
endShape();
fill(0);
//eyeLeft
beginShape();
curveVertex(-4,-4);
curveVertex(-4,-4);
curveVertex(-3,-3.8);
curveVertex(-2,-3.5);
curveVertex(-1,-2.8);
curveVertex(-0.8,-2.4);
curveVertex(-1.5,-0.8);
curveVertex(-2.5,-0.6);
curveVertex(-3,-0.6);
curveVertex(-5,-0.6);
curveVertex(-4.4,-3.2);
curveVertex(-4,-4);
curveVertex(-3.9,-4);
endShape();
//eyeRight
beginShape();
curveVertex(4,-4);
curveVertex(4,-4);
curveVertex(3,-3.8);
curveVertex(2,-3.5);
curveVertex(1,-2.8);
curveVertex(0.8,-2.4);
curveVertex(1.5,-0.8);
curveVertex(2.5,-0.6);
curveVertex(3,-0.6);
curveVertex(5,-0.6);
curveVertex(4.4,-3.2);
curveVertex(4,-4);
curveVertex(3.9,-4);
endShape();
strokeWeight(0.25);
//nose
beginShape();
curveVertex(0,-1);
curveVertex(0,-1);
curveVertex(0.5,-0.9);
curveVertex(1.1,0.8);
curveVertex(1,2.3);
curveVertex(0,2.5);
//left
curveVertex(-1,2.3);
curveVertex(-1.1,0.8);
curveVertex(-0.5,-0.9);
curveVertex(0,-1);
curveVertex(0,-1);
endShape();


}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(thinness_value) { 

  noLoop();
  Horn = Math.floor(Math.random()*4);
  console.log(Horn);
  if(Horn == 1){
    drawHorn1();
  }
  if(Horn == 2){
    drawHorn2();
  }
  if(Horn == 3){
    drawHorn3();
  }
  if(Horn ==0){
    alternate = Math.floor(Math.random()*3);
      if(alternate == 0){
        drawHorn1();
        drawHorn2();
      }
      if(alternate == 1){
        drawHorn1();
        drawHorn3();
      }
      if(alternate == 2){
        drawHorn2();
        drawHorn3();
      }
  }

  stroke(255);
  // noStroke();
  fill(255);
  noStroke();

//skullbase
beginShape();
  curveVertex(0,-2.5);
  curveVertex(0,-2.5);
  //hornspot
  curveVertex(-1,-2.4);
  curveVertex(-0.9,-2.2);
  curveVertex(-0.9,-1.4)
  //eyeSocket
  curveVertex(-2.5,-0.2);
  curveVertex(-2.8,-0.1);
  curveVertex(-2.65,1);
  curveVertex(-2.7,2);

  curveVertex(-2,2.6);
  curveVertex(-1.9,3);
  curveVertex(-1.7,4);

  curveVertex(-1.8,5);
  curveVertex(-1.5,5.5);
  curveVertex(-1.2,6);
  curveVertex(-0.6,6.5);
  //botMax
  curveVertex(0,7.6);
  //rightSide
  curveVertex(0.6,6.5);
  curveVertex(1.2,6);
  curveVertex(1.5,5.5);
  curveVertex(1.8,5);
  curveVertex(1.7,4);
  curveVertex(1.9,3);
  curveVertex(2,2.6);
  
  curveVertex(2.7,2);
  curveVertex(2.65,1);
  curveVertex(2.8,-0.1);
  curveVertex(2.5,-0.2);

  curveVertex(0.9,-1.4);
  curveVertex(0.9,-2.2);
  curveVertex(1,-2.4);
  curveVertex(0,-2.5);
  curveVertex(0,-2.5);
endShape();
  stroke(0);
  strokeWeight(0.1);
//NoseBot

fill(255);
  beginShape();
    curveVertex(0,3);
    curveVertex(0,3);
    curveVertex(-0.3,3.5);
    curveVertex(-0.6,4);
    curveVertex(-1.3,6);
    curveVertex(-1,7);

    curveVertex(-0.3,8);   
    curveVertex(0,7.7); 
    curveVertex(0.3,8);

    curveVertex(1,7);
    curveVertex(1.3,6);
    curveVertex(0.6,4);
    curveVertex(0.3,3.5);
    curveVertex(0,3);
    curveVertex(0,3);
  endShape();


//noseDetail
fill(36,45,50);
stroke(36,45,50);
//Left
  beginShape();
    curveVertex(0,7.5);
    curveVertex(0,7.5);
    curveVertex(-0.1,7.6);
    curveVertex(-0.2,7.5);
    curveVertex(-0.6,7);
    curveVertex(-0.7,6.5);
    curveVertex(-0.2,5);
    curveVertex(-0.2,5.5);
    curveVertex(-0.1,7.2);
    curveVertex(0,7.5);
    curveVertex(0,7.5);
  endShape();
  //Right
  beginShape();
    curveVertex(0,7.5);
    curveVertex(0,7.5);
    curveVertex(0.1,7.6);
    curveVertex(0.2,7.5);
    curveVertex(0.6,7);
    curveVertex(0.7,6.5);
    curveVertex(0.2,5);
    curveVertex(0.2,5.5);
    curveVertex(0.1,7.2);
    curveVertex(0,7.5);
    curveVertex(0,7.5);
  endShape();
//NoseTop
strokeWeight(0.05);
fill(255);
  beginShape();
    curveVertex(0,2);
    curveVertex(0,2);
    curveVertex(-0.7,2.6);
    curveVertex(-0.6,3.5);
    curveVertex(-0.7,5);
    curveVertex(0,6);
    curveVertex(0.7,5);
    curveVertex(0.6,3.5);
    curveVertex(0.7,2.6);
    curveVertex(0,2);
    curveVertex(0,2);
  endShape();

//EyeLeft
fill(0);
  beginShape();
    curveVertex(-2.7,0);
    curveVertex(-2.7,0);
    curveVertex(-2.2,0.3);
    curveVertex(-2,0.6);
    curveVertex(-1.5,1.5);
    curveVertex(-1.3,2);
    curveVertex(-1.9,2.5);
    curveVertex(-2.5,2);
    curveVertex(-2.6,1.6);
    curveVertex(-2.7,0.2);
    curveVertex(-2.7,0);
    curveVertex(-2.7,0);
    endShape();
  //EyeRight
  beginShape();  
    curveVertex(2.6,0);
    curveVertex(2.6,0);
    curveVertex(2.2,0.3);
    curveVertex(2,0.6);
    curveVertex(1.5,1.5);
    curveVertex(1.3,2);
    curveVertex(1.9,2.5);
    curveVertex(2.5,2);
    curveVertex(2.6,1.6);
    curveVertex(2.7,0.2);
    curveVertex(2.6,0);
    curveVertex(2.6,0);
  endShape();

  //DETAILING
  noFill();
  strokeWeight(0.05);
  stroke(0);
  beginShape();
    curveVertex(0,-2.6);
    curveVertex(0,-2.6);
    curveVertex(0.05,-2);
    curveVertex(-0.05,-1.5);
    curveVertex(0.05,-0.2);
    curveVertex(-0.05,1);
    curveVertex(0.05,2);
    curveVertex(0,2.5);
    curveVertex(-0.05,4);
    curveVertex(0.05,5);
    curveVertex(0,6);
    curveVertex(0,6);
  endShape();

  //forhead
  beginShape();
    curveVertex(-2.6,0);
    curveVertex(-2.6,0);
    curveVertex(-2.2,-0.1);     
    curveVertex(-1,-1);
    curveVertex(1,-1);    
    curveVertex(2.2,-0.1);
    curveVertex(2.6,0);
    curveVertex(2.6,0);
  endShape();
  //eyes
  //L
  beginShape();
    curveVertex(-2,0);
    curveVertex(-2,0);
    curveVertex(-1.5,0.5);
    curveVertex(-1,1.5);
    curveVertex(-1,1.5);    
  endShape();

  beginShape();
    curveVertex(-1.9,2.5);
    curveVertex(-1.9,2.5);
    curveVertex(-1.6,2.4);
    curveVertex(-1.2,2);
    curveVertex(-0.7,2.6);
    curveVertex(-0.7,2.6);
  endShape();
  //R
  beginShape();
    curveVertex(1.9,2.5);
    curveVertex(1.9,2.5);
    curveVertex(1.6,2.4);
    curveVertex(1.2,2);
    curveVertex(0.7,2.6);
    curveVertex(0.7,2.6);
  endShape();
  beginShape();
    curveVertex(2,0);
    curveVertex(2,0);
    curveVertex(1.5,0.5);
    curveVertex(1,1.5);
    curveVertex(1,1.5);    
  endShape();

}

// function horn1(){
//   beginShape(){}
// }
/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3() {

}

function drawHorn1()  {
  stroke(255);
  strokeWeight(0.1);
  noFill();

  //HornSet1
   //Bottom
  beginShape();
    curveVertex(-7,-2);
    // curveVertex(-5,0);
    curveVertex(-7,-2);

    curveVertex(-7,-2);
    curveVertex(-6.5,-1);
    curveVertex(-6,-0);
    curveVertex(-5.5,2);
   
    curveVertex(-5.2,4.5);
    curveVertex(-7.5,5);
    curveVertex(-9,4);
       curveVertex(-8,5);

    curveVertex(-7.5,5.3);
    curveVertex(-6.75,5.5);
    curveVertex(-6,5.5);
    curveVertex(-5,5.5);
    curveVertex(-4,4.5);
   
    curveVertex(-4,2.5);
    curveVertex(-4.5,0);
    curveVertex(-4.6,-2.2);
    curveVertex(-3.5,-3);
    curveVertex(-3.5,-3);
    curveVertex(-5,-4);


    curveVertex(-7,-2);
    curveVertex(-7,-2);

  endShape();

    //topPart
  beginShape();
    curveVertex(-0.6,-1.4);
    curveVertex(-0.6,-1.4);

    curveVertex(-1.4,-3);
    curveVertex(-2.5,-4);
    curveVertex(-5.5,-5);
    curveVertex(-7.2,-3.5);
    curveVertex(-7,-2);
    curveVertex(-7,-2);

    curveVertex(-6.5,-2.5);
    curveVertex(-5,-2.5);
    curveVertex(-4,-2);
    curveVertex(-3,-0.5);
    curveVertex(-2.8,0);
    // curveVertex(-2.5,-1.2);

    curveVertex(-2.5,-0.3);
    curveVertex(-2.5,-0.3);
  endShape();

        //Bottom
  beginShape();
    curveVertex(7,-2);
    // curveVertex(-5,0);
    curveVertex(7,-2);

    curveVertex(7,-2);
    curveVertex(6.5,-1);
    curveVertex(6,-0);
    curveVertex(5.5,2);
   
    curveVertex(5.2,4.5);
    curveVertex(7.5,5);
    curveVertex(9,4);
    // curveVertex(-9,4.5);
    curveVertex(8,5);

    curveVertex(7.5,5.3);
    curveVertex(6.75,5.5);
    curveVertex(6,5.5);
    curveVertex(5,5.5);
    curveVertex(4,4.5);
    // curveVertex(-)
    curveVertex(4,2.5);
    curveVertex(4.5,0);
    curveVertex(4.6,-2.2);
    curveVertex(3.5,-3);
    curveVertex(3.5,-3);
    curveVertex(5,-4);


    curveVertex(7,-2);
    curveVertex(7,-2);

  endShape();

    //topPart
  beginShape();
    curveVertex(0.6,-1.4);
    curveVertex(0.6,-1.4);
    curveVertex(1.4,-3);
    curveVertex(2.5,-4);
    curveVertex(5.5,-5);
    curveVertex(7.2,-3.5);
    curveVertex(7,-2);
    curveVertex(7,-2);

    curveVertex(6.5,-2.5);
    curveVertex(5,-2.5);
    curveVertex(4,-2);
    curveVertex(3,-0.5);
    curveVertex(2.8,0);
    // curveVertex(-2.5,-1.2);

    curveVertex(2.5,-0.3);
    curveVertex(2.5,-0.3);
  endShape();
  }

  function drawHorn2(){
  stroke(255);
  strokeWeight(0.1);
  noFill();

      //HornSet2
  //left
   beginShape();

    curveVertex(-0.7,-1.5);
    curveVertex(-0.7,-1.5);

    curveVertex(-1,-2.4);
    curveVertex(-2.5,-5);
    curveVertex(-5,-6.5);
    curveVertex(-7,-7);

    curveVertex(-8.5,-9);
    curveVertex(-9,-9.6);
    curveVertex(-9,-10);

    curveVertex(-9,-9);
    
    curveVertex(-7,-6);
    curveVertex(-4.5,-5);

    curveVertex(-2.5,-2);
    
    curveVertex(-1.9,-0.5);
    curveVertex(-1.9,-0.5);

  endShape();

  beginShape();
    curveVertex(-2.7,-0.3);
    curveVertex(-2.7,-0.3);
    curveVertex(-4.5,-4);
    // curveVertex(-5,-5);
    curveVertex(-7.2,-6);
    curveVertex(-9,-9);

    curveVertex(-9,-10);
    curveVertex(-9,-10);
  endShape();
//Right
   beginShape();

    curveVertex(0.7,-1.5);
    curveVertex(0.7,-1.5);

    curveVertex(1,-2.4);
    curveVertex(2.5,-5);
    curveVertex(5,-6.5);
    curveVertex(7,-7);

    curveVertex(8.5,-9);
    curveVertex(9,-9.6);
    curveVertex(9,-10);

    curveVertex(9,-9);
    
    curveVertex(7,-6);
    curveVertex(4.5,-5);

    curveVertex(2.5,-2);
    
    curveVertex(1.9,-0.5);
    curveVertex(1.9,-0.5);

  endShape();

  beginShape();
    curveVertex(2.7,-0.3);
    curveVertex(2.7,-0.3);
    curveVertex(4.5,-4);
    // curveVertex(-5,-5);
    curveVertex(7.2,-6);
    curveVertex(9,-9);

    curveVertex(9,-10);
    curveVertex(9,-10);
  endShape();

}
function drawHorn3 (){
  stroke(255);
  strokeWeight(0.1);
  noFill();

  // HornSet3
  // left
  beginShape();
    curveVertex(-0.6,-8);
    curveVertex(-0.6,-8);
    curveVertex(-1.2,-7.2);
    curveVertex(-2.9,-4.5);
    curveVertex(-0.9,-2.4);
    curveVertex(-0.9,-2.4);
  endShape();
  beginShape();
    curveVertex(-1,-2.4);
    curveVertex(-1,-2.4);
    curveVertex(-3.5,-5.2);    
    curveVertex(-0.6,-8);
    curveVertex(-0.8,-8);
    curveVertex(-5.2,-5);
    curveVertex(-2.7,-0.3);
    curveVertex(-2.7,-0.3);
  endShape();
  //right
   beginShape();
    curveVertex(0.6,-8);
    curveVertex(0.6,-8);
    curveVertex(1.2,-7.2);
    curveVertex(2.9,-4.5);
    curveVertex(0.9,-2.4);
    curveVertex(0.9,-2.4);
  endShape();
  beginShape();
    curveVertex(1,-2.4);
    curveVertex(1,-2.4);
    curveVertex(3.5,-5.2);    
    curveVertex(0.6,-8);
    curveVertex(0.8,-8);
    curveVertex(5.2,-5);
    curveVertex(2.7,-0.3);
    curveVertex(2.7,-0.3);
  endShape();
  

}
