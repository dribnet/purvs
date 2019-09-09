/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

 const Xcenter = 0;
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

var HornStartX = -0.6;
var HornStartY = -1.4;

var HornEndX = -2.5;
var HornEndY = -0.3;
function drawFace1(horn, width, cheekbones) {
// background(36,45,50);
 var WidthChanger = width;
 var cheekboneWidth = cheekbones;
 // noLoop();
  // Horn = Math.floor(Math.random()*5);
  // Horn = 3;
  console.log(horn);
  if(horn == 2){
    drawHorn1();
  }
  if(horn == 3){
    drawHorn2();
  }
  if(horn == 4){
    drawHorn3();
  }

fill(200);


fill(255);
// strokeWeight(0.1);
noStroke();
//top of head
scale(0.53);
beginShape();
curveVertex(Xcenter-6.5,Y1B+0.6);
curveVertex(Xcenter-6.5,Y1B+0.6);
curveVertex(Xcenter+X3B+WidthChanger,Y2B+1);//widest part skull
curveVertex(Xcenter-5,Y3B-1);
curveVertex(Xcenter,X4B);
curveVertex(Xcenter+5,Y3B-1);
curveVertex(Xcenter+X3-WidthChanger,Y2B+1);
curveVertex(Xcenter+6.5,Y1B+0.6);
curveVertex(Xcenter+6.5,Y1B+0.6);
endShape();
//faceFront
beginShape();
//left
curveVertex(Xcenter-6,Y2B+1);
curveVertex(Xcenter-6,Y2B+1);
curveVertex(Xcenter-6.2,Y1B+0.5);
curveVertex(Xcenter+X3B+cheekboneWidth,Ycenter-1);//cheekBonePoint
curveVertex(Xcenter-6,Ycenter+0.5);
curveVertex(Xcenter-5,Y1-1);
curveVertex(Xcenter-3.5,Y1-0.5);
curveVertex(Xcenter-3,Y1);
curveVertex(Xcenter-2.5,Y2-1);
curveVertex(Xcenter,Y2-0.6);//teethLine bottom of skull
//right
curveVertex(Xcenter+2.5,Y2-1);
curveVertex(Xcenter+3,Y1);
curveVertex(Xcenter+3,Y1-0.5);
curveVertex(Xcenter+5,Y1-1);
curveVertex(Xcenter+6,Ycenter+0.5);
curveVertex(Xcenter+X3-cheekboneWidth,Ycenter-1);//cheekbone
curveVertex(Xcenter+6.2,Y1B+0.5);
curveVertex(Xcenter+6,Y2B+1);
curveVertex(Xcenter+6,Y2B+1);
endShape();

//jaw
//shapeOfJaw
beginShape();
curveVertex(Xcenter-5.5,Y1-1.5);
curveVertex(Xcenter-5.5,Y1-1.5);
curveVertex(Xcenter-4.8,Y2);
curveVertex(Xcenter-4.5,Y2+1);
curveVertex(Xcenter-3.7,Y3-1);
curveVertex(Xcenter,Y3-0.7);
curveVertex(Xcenter+3.7,Y3-1);
curveVertex(Xcenter+4.5,Y2+1);
curveVertex(Xcenter+4.8,Y2);
curveVertex(Xcenter+5.5,Y1-1.5);
//interior and gap 
curveVertex(Xcenter+4,Y1-1.7);
curveVertex(Xcenter+3.7,Y2-1);
curveVertex(Xcenter+3,Y2+0.5);
curveVertex(Xcenter+2.6,Y2+1);
curveVertex(Xcenter,Y3-1);
curveVertex(Xcenter-2.5,Y2+1);
curveVertex(Xcenter-3,Y2+0.5);
curveVertex(Xcenter-3.7,Y2-1);
curveVertex(Xcenter-4,Y1-1.7);
curveVertex(Xcenter-5.5,Y1-1.5);
curveVertex(Xcenter-5.5,Y1-1.5);
endShape();

// frontjaw drawn ontop of main jaw part
beginShape();
curveVertex(Xcenter-3.7,Y2+1);
curveVertex(Xcenter-3.7,Y2+1);
curveVertex(Xcenter-3.6,Y3-0.8);
curveVertex(Xcenter-3,Y3+1);
curveVertex(Xcenter-2,Y3+1);
curveVertex(Xcenter+2,Y3+1);
curveVertex(Xcenter+3,Y3+1);
curveVertex(Xcenter+3.6,Y3-0.8);
curveVertex(Xcenter+3.7,Y2+1);
curveVertex(Xcenter-3.7,Y2+1);
curveVertex(Xcenter-3.7,Y2+1);
endShape();


//DETAILING DRAWN ONTOP OF BASE SKULL

noFill();
stroke(0);
strokeWeight(0.1);
// jawBaseRight
beginShape();
curveVertex(Xcenter+5.5,Y1-1.3);
curveVertex(Xcenter+5.5,Y1-1.3);
curveVertex(Xcenter+4.8,Y2);
curveVertex(Xcenter+4.5,Y2+1);
curveVertex(Xcenter+3.7,Y3-1);
curveVertex(Xcenter+3.7,Y3-1);
endShape();

beginShape();
curveVertex(Xcenter-5.5,Y1-1.3);
curveVertex(Xcenter-5.5,Y1-1.3);
curveVertex(Xcenter-4.8,Y2);
curveVertex(Xcenter-4.5,Y2+1);
curveVertex(Xcenter-3.7,Y3-1);
curveVertex(Xcenter-3.7,Y3-1);
endShape();

beginShape();
curveVertex(Xcenter+5.5,Y1-1.5);
curveVertex(Xcenter+5.5,Y1-1.5);
curveVertex(Xcenter+4,Y1-0.7);
curveVertex(Xcenter+3.7,Y2-1);
curveVertex(Xcenter+3,Y2+0.5);
curveVertex(Xcenter+2.6,Y2+1);
curveVertex(Xcenter,Y3-1);
curveVertex(Xcenter-2.5,Y2+1);
curveVertex(Xcenter-3,Y2+0.5);
curveVertex(Xcenter-3.7,Y2-1);
curveVertex(Xcenter-4,Y1-0.7);
curveVertex(Xcenter-5.5,Y1-1.5);
curveVertex(Xcenter-5.5,Y1-1.5);
endShape();

//jawFront
strokeWeight(0.1);
beginShape();
curveVertex(Xcenter-3.7,Y2+1);
curveVertex(Xcenter-3.7,Y2+1);
curveVertex(Xcenter-3.6,Y3-0.7);
curveVertex(Xcenter-3,Y3+1);
curveVertex(Xcenter-2,Y3+1);
curveVertex(Xcenter+2,Y3+1);
curveVertex(Xcenter+3,Y3+1);
curveVertex(Xcenter+3.6,Y3-0.7);
curveVertex(Xcenter+3.7,Y2+1);
curveVertex(Xcenter+3.7,Y2+1);

endShape();
//eyebrowL
beginShape();
curveVertex(Xcenter-4,Y2B-0.5);
curveVertex(Xcenter-4,Y2B-0.5);
curveVertex(Xcenter-3,Y2B);
curveVertex(Xcenter-2,Y2B+0.3);
curveVertex(Xcenter-1,Y2B+0.5);
curveVertex(Xcenter-0.5,Y2B+1);
curveVertex(Xcenter-0.5,Y2B+1);
endShape();
//eyebrowR
beginShape();
curveVertex(Xcenter+4,Y2B-0.5);
curveVertex(Xcenter+4,Y2B-0.5);
curveVertex(Xcenter+3,Y2B);
curveVertex(Xcenter+2,Y2B+0.3);
curveVertex(Xcenter+1,Y2B+0.5);
curveVertex(Xcenter+0.5,Y2B+1);
curveVertex(Xcenter+0.5,Y2B+1);
endShape();
//teeth
fill(255);
strokeWeight(0.1);
beginShape();
//midL
curveVertex(Xcenter+0.1,Y2-0.6);
curveVertex(Xcenter+0.1,Y2-0.6);
curveVertex(Xcenter+0.1,Y2+0.4);
curveVertex(Xcenter-0.65,Y2+0.4);
curveVertex(Xcenter-0.65,Y2-0.6);
curveVertex(Xcenter-0.65,Y2-0.6);
endShape();
//midR
curveVertex(Xcenter+0.1,4.4);
curveVertex(Xcenter+0.1,4.4);
curveVertex(Xcenter+0.1,5.4);
curveVertex(Xcenter+0.65,5.4);
curveVertex(Xcenter+0.65,4.4);
curveVertex(Xcenter+0.1,4.4);
curveVertex(Xcenter+0.1,4.4);
endShape();
//L1
beginShape();
curveVertex(Xcenter-0.65,4.4);
curveVertex(Xcenter-0.65,4.4);
curveVertex(Xcenter-0.65,5.3);
curveVertex(Xcenter-1.25,5.3);
curveVertex(Xcenter-1.25,4.4);
curveVertex(Xcenter-0.65,4.4);
curveVertex(Xcenter-0.65,4.4);
endShape();
//L3
beginShape();
curveVertex(Xcenter-1.3,4.4);
curveVertex(Xcenter-1.3,4.4);
curveVertex(Xcenter-1.3,5.2);
curveVertex(Xcenter-1.9,5.2);
curveVertex(Xcenter-1.9,4.4);
curveVertex(Xcenter-1.3,4.4);
curveVertex(Xcenter-1.3,4.4);
endShape();
//L4
beginShape();
curveVertex(Xcenter-2,4.3);
curveVertex(Xcenter-2,4.3);
curveVertex(Xcenter-2,5);
curveVertex(Xcenter-2.6,5);
curveVertex(Xcenter-2.6,4.1);
curveVertex(Xcenter-2,4.3);
curveVertex(Xcenter-2,4.3);
endShape();
//R1
beginShape();
curveVertex(Xcenter+0.65,4.4);
curveVertex(Xcenter+0.65,4.4);
curveVertex(Xcenter+0.65,5.3);
curveVertex(Xcenter+1.25,5.3);
curveVertex(Xcenter+1.25,4.4);
curveVertex(Xcenter+0.65,4.4);
curveVertex(Xcenter+0.65,4.4);
endShape();
//R3
beginShape();
curveVertex(Xcenter+1.3,4.4);
curveVertex(Xcenter+1.3,4.4);
curveVertex(Xcenter+1.3,5.2);
curveVertex(Xcenter+1.9,5.2);
curveVertex(Xcenter+1.9,4.4);
curveVertex(Xcenter+1.3,4.4);
curveVertex(Xcenter+1.3,4.4);
endShape();
//R4
beginShape();
curveVertex(Xcenter+2,4.3);
curveVertex(Xcenter+2,4.3);
curveVertex(Xcenter+2,5);
curveVertex(Xcenter+2.6,5);
curveVertex(Xcenter+2.6,4.1);
curveVertex(Xcenter+2,4.3);
curveVertex(Xcenter+2,4.3);
endShape();
//botTeeth
//L1
beginShape();
curveVertex(Xcenter,6.5);
curveVertex(Xcenter,6.5);
curveVertex(Xcenter,5.7);
curveVertex(Xcenter+0.65,5.7);
curveVertex(Xcenter+0.65,6.5);
curveVertex(Xcenter+0.65,6.5);
endShape();
//L2
beginShape();
curveVertex(Xcenter+0.65,6.4);
curveVertex(Xcenter+0.65,6.4);
curveVertex(Xcenter+0.65,5.6);
curveVertex(Xcenter+1.3,5.6);
curveVertex(Xcenter+1.3,6.4);
curveVertex(Xcenter+1.3,6.4);
endShape();
//L3
beginShape();
curveVertex(Xcenter+1.4,6.2);
curveVertex(Xcenter+1.4,6.2);
curveVertex(Xcenter+1.4,5.4);
curveVertex(Xcenter+2,5.4);
curveVertex(Xcenter+2,6.2);
curveVertex(Xcenter+2,6.2);
endShape();
//L4
beginShape();
curveVertex(Xcenter+2.1,6);
curveVertex(Xcenter+2.1,6);
curveVertex(Xcenter+2.1,5.2);
curveVertex(Xcenter+2.6,5.2);
curveVertex(Xcenter+2.6,6);
curveVertex(Xcenter+2.6,6);
endShape();
//r1
beginShape();
curveVertex(Xcenter,6.5);
curveVertex(Xcenter,6.5);
curveVertex(Xcenter,5.7);
curveVertex(Xcenter-0.65,5.7);
curveVertex(Xcenter-0.65,6.5);
curveVertex(Xcenter-0.65,6.5);
endShape();
//r2
beginShape();
curveVertex(Xcenter-0.65,6.4);
curveVertex(Xcenter-0.65,6.4);
curveVertex(Xcenter-0.65,5.6);
curveVertex(Xcenter-1.3,5.6);
curveVertex(Xcenter-1.3,6.4);
curveVertex(Xcenter-1.3,6.4);
endShape();
//r3
beginShape();
curveVertex(Xcenter-1.4,6.2);
curveVertex(Xcenter-1.4,6.2);
curveVertex(Xcenter-1.4,5.4);
curveVertex(Xcenter-2,5.4);
curveVertex(Xcenter-2,6.2);
curveVertex(Xcenter-2,6.2);
endShape();
//r4
beginShape();
curveVertex(Xcenter-2.1,6);
curveVertex(Xcenter-2.1,6);
curveVertex(Xcenter-2.1,5.2);
curveVertex(Xcenter-2.6,5.2);
curveVertex(Xcenter-2.6,6);
curveVertex(Xcenter-2.6,6);
endShape();
//facefrontdetail
strokeWeight(0.1);
stroke(0);
fill(255);
beginShape();
//left
curveVertex(Xcenter-6,Y2B+1);
curveVertex(Xcenter-6,Y2B+1);
curveVertex(Xcenter-6.2,Y1B+0.5);
curveVertex(Xcenter+X3B+cheekboneWidth,Ycenter-1);//cheekBonePoint
curveVertex(Xcenter-6,Ycenter+0.5);
curveVertex(Xcenter-5,Y1-1);
curveVertex(Xcenter-3.5,Y1-0.5);
curveVertex(Xcenter-3,Y1);
curveVertex(Xcenter-2.5,Y2-1);
curveVertex(Xcenter,Y2-0.6);//teethLine bottom of skull
//right
curveVertex(Xcenter+2.5,Y2-1);
curveVertex(Xcenter+3,Y1);
curveVertex(Xcenter+3,Y1-0.5);
curveVertex(Xcenter+5,Y1-1);
curveVertex(Xcenter+6,Ycenter+0.5);
curveVertex(Xcenter+X3-cheekboneWidth,Ycenter-1);//cheekbone
curveVertex(Xcenter+6.2,Y1B+0.5);
curveVertex(Xcenter+6,Y2B+1);
curveVertex(Xcenter+6,Y2B+1);
endShape();
fill(0);
//eyeLeft
beginShape();
curveVertex(Xcenter-4,-4);
curveVertex(Xcenter-4,-4);
curveVertex(Xcenter-3,-3.8);
curveVertex(Xcenter-2,-3.5);
curveVertex(Xcenter-1,-2.8);
curveVertex(Xcenter-0.8,-2.4);
curveVertex(Xcenter-1.5,-0.8);
curveVertex(Xcenter-2.5,-0.6);
curveVertex(Xcenter-3,-0.6);
curveVertex(Xcenter-5,-0.6);
curveVertex(Xcenter-4.4,-3.2);
curveVertex(Xcenter-4,-4);
curveVertex(Xcenter-3.9,-4);
endShape();
//eyeRight
beginShape();
curveVertex(Xcenter+4,-4);
curveVertex(Xcenter+4,-4);
curveVertex(Xcenter+3,-3.8);
curveVertex(Xcenter+2,-3.5);
curveVertex(Xcenter+1,-2.8);
curveVertex(Xcenter+0.8,-2.4);
curveVertex(Xcenter+1.5,-0.8);
curveVertex(Xcenter+2.5,-0.6);
curveVertex(Xcenter+3,-0.6);
curveVertex(Xcenter+5,-0.6);
curveVertex(Xcenter+4.4,-3.2);
curveVertex(Xcenter+4,-4);
curveVertex(Xcenter+3.9,-4);
endShape();
strokeWeight(0.25);
//nose
beginShape();
curveVertex(Xcenter,-1);
curveVertex(Xcenter,-1);
curveVertex(Xcenter+0.5,-0.9);
curveVertex(Xcenter+1.1,0.8);
curveVertex(Xcenter+1,2.3);
curveVertex(Xcenter,2.5);
//left
curveVertex(Xcenter-1,2.3);
curveVertex(Xcenter-1.1,0.8);
curveVertex(Xcenter-0.5,-0.9);
curveVertex(Xcenter,-1);
curveVertex(Xcenter,-1);
endShape();


}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(horn, width, cheekbones) { 
  var WidthChanger = width;
  var cheekboneWidth = cheekbones;
  // noLoop();
   if(horn == 0){
    drawHorn1();
  }
  if(horn == 1){
    drawHorn2();
  }
  if(horn == 2){
    drawHorn3();
  }
      if(horn == 3){
        drawHorn1();
        drawHorn2();
      }
      if(horn == 4){
        drawHorn1();
        drawHorn3();
      }
      if(horn == 5){
        drawHorn2();
        drawHorn3();
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

  curveVertex(-1.8-cheekboneWidth,5);
  curveVertex(-1.5-cheekboneWidth,5.5);
  curveVertex(-1.2,6);
  curveVertex(-0.6,6.5);
  //botMax
  curveVertex(0,7.6);
  //rightSide
  curveVertex(0.6,6.5);
  curveVertex(1.2,6);
  curveVertex(1.5+cheekboneWidth,5.5);
  curveVertex(1.8+cheekboneWidth,5);
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
    curveVertex(-1.3-cheekboneWidth,6);
    curveVertex(-1-cheekboneWidth,7);

    curveVertex(-0.3,8);   
    curveVertex(0,7.7); 
    curveVertex(0.3,8);

    curveVertex(1+cheekboneWidth,7);
    curveVertex(1.3+cheekboneWidth,6);
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
    curveVertex(-0.6-cheekboneWidth,7);
    curveVertex(-0.7-cheekboneWidth,6.5);
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
    curveVertex(0.6+cheekboneWidth,7);
    curveVertex(0.7+cheekboneWidth,6.5);
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

  // for (var s=0; s<30; s = s+1){ 
  //   // run this code each time
  //   // s increases from 0 to 19
    
  //   curve(s*30, 40, -0.6, -1.4, -7, -3.5, -2.5, -0.3);
  // }
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
  // fill(255, 255, 255);

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

  //details
  //left
  stroke(255,255,255);
  strokeWeight(0.05);

    beginShape();
    curveVertex(-0.6,-8);
    curveVertex(-0.6,-8);
    curveVertex(-1.3,-7.2);
    curveVertex(-3.1,-4.5);
    curveVertex(-0.9,-2.4);
    curveVertex(-0.9,-2.4);
  endShape();
    beginShape();
    curveVertex(-0.6,-8);
    curveVertex(-0.6,-8);
    curveVertex(-1.4,-7.2);
    curveVertex(-3.3,-4.7);
    curveVertex(-0.9,-2.4);
    curveVertex(-0.9,-2.4);
  endShape();
    beginShape();
    curveVertex(-0.6,-8);
    curveVertex(-0.6,-8);
    curveVertex(-1.5,-7.2);
    curveVertex(-3.4,-4.8);
    curveVertex(-0.9,-2.4);
    curveVertex(-0.9,-2.4);
  endShape();

  curve(1, -0,  -0.6, -2.4, -2.7,   -0.3, 0, 0);
  curve(1, -0,  -1.1, -2.6, -2.9,   -0.55, 0, 0);
  curve(1, -0,  -1.4, -2.8, -3.1,   -0.85, 0, 0);
  curve(1, -0,  -1.8,   -3, -3.3,   -1.1, 0, 0);
  curve(1, -0,  -2,   -3.2, -3.5,   -1.4, 0, 0);
  curve(1, -0,  -2.3, -3.4, -3.7,   -1.7, 0, 0);
  curve(1, -0,  -2.4, -3.6, -4,   -2.2, 0, 0);
  curve(1, -0,  -2.6, -3.8, -4.2,   -2.5, 0, 0);
  curve(1, -0,  -2.8,   -4, -4.4,   -2.8, 0, 0);

  curve(1, -0,  -3.1,   -4.3, -4.5,    -3,  0, 0);
  curve(1, -0,  -3.3,   -4.5, -4.7,    -3.3,  0, 0);
  curve(1, -0,  -3.4,   -4.7, -4.8,    -3.5,  0, 0);
  curve(1, -0,  -3.5,   -5,   -5,    -3.8,  0, 0);

  curve(-4, -1,  -3.5,   -5.1,   -5.2,   -4.9,   -4, 0);
  curve(-4, -1,  -3.5,   -5.3,   -5.1,   -5.3,  -6, 0);
  curve(-4, -1,  -3.4,   -5.5,   -5,    -5.5,      -7, 0);
//right
   beginShape();
    curveVertex(0.6,-8);
    curveVertex(0.6,-8);
    curveVertex(1.3,-7.2);
    curveVertex(3.1,-4.5);
    curveVertex(0.9,-2.4);
    curveVertex(0.9,-2.4);
  endShape();
    beginShape();
    curveVertex(0.6,-8);
    curveVertex(0.6,-8);
    curveVertex(1.4,-7.2);
    curveVertex(3.3,-4.7);
    curveVertex(0.9,-2.4);
    curveVertex(0.9,-2.4);
  endShape();
    beginShape();
    curveVertex(0.6,-8);
    curveVertex(0.6,-8);
    curveVertex(1.5,-7.2);
    curveVertex(3.4,-4.8);
    curveVertex(0.9,-2.4);
    curveVertex(0.9,-2.4);
  endShape();

  curve(-1, -0,  0.6, -2.4, 2.7,   -0.3, 0, 0);
  curve(-1, -0,  1.1, -2.6, 2.9,   -0.55, 0, 0);
  curve(-1, -0,  1.4, -2.8, 3.1,   -0.85, 0, 0);
  curve(-1, -0,  1.8,   -3, 3.3,   -1.1, 0, 0);
  curve(-1, -0,  2,   -3.2, 3.5,   -1.4, 0, 0);
  curve(-1, -0,  2.3, -3.4, 3.7,   -1.7, 0, 0);
  curve(-1, -0,  2.4, -3.6, 4,   -2.2, 0, 0);
  curve(-1, -0,  2.6, -3.8, 4.2,   -2.5, 0, 0);
  curve(-1, -0,  2.8,   -4, 4.4,   -2.8, 0, 0);

  curve(-1, -0,  3.1,   -4.3, 4.5,    -3,  0, 0);
  curve(-1, -0,  3.3,   -4.5, 4.7,    -3.3,  0, 0);
  curve(-1, -0,  3.4,   -4.7, 4.8,    -3.5,  0, 0);
  curve(-1, -0,  3.5,   -5,   5,    -3.8,  0, 0);

  curve(4, -1,  3.5,   -5.1,   5.2,   -4.9,   4, 0);
  curve(4, -1,  3.5,   -5.3,   5.1,   -5.3,  6, 0);
  curve(4, -1,  3.4,   -5.5,   5,    -5.5,   7, 0);




  stroke(255);

}
