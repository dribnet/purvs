/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1() {

noFill();
strokeWeight(0.25);
stroke(2);
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
//teeth
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
curveVertex(0.65,4.4);
endShape();
//L1
beginShape();
curveVertex(-0.65,4.4);
curveVertex(-0.65,4.4);
curveVertex(-0.65,5.3);
curveVertex(-1.25,5.3);
curveVertex(-1.25,4.4);
curveVertex(-1.25,4.4);
endShape();
//L3
beginShape();
curveVertex(-1.3,4.4);
curveVertex(-1.3,4.4);
curveVertex(-1.3,5.2);
curveVertex(-1.9,5.2);
curveVertex(-1.9,4.4);
curveVertex(-1.9,4.4);
endShape();
//L4
beginShape();
curveVertex(-2,4.3);
curveVertex(-2,4.3);
curveVertex(-2,5);
curveVertex(-2.6,5);
curveVertex(-2.6,4.1);
curveVertex(-2.6,4.1);
endShape();
//R1
beginShape();
curveVertex(0.65,4.4);
curveVertex(0.65,4.4);
curveVertex(0.65,5.3);
curveVertex(1.25,5.3);
curveVertex(1.25,4.4);
curveVertex(1.25,4.4);
endShape();
//R3
beginShape();
curveVertex(1.3,4.4);
curveVertex(1.3,4.4);
curveVertex(1.3,5.2);
curveVertex(1.9,5.2);
curveVertex(1.9,4.4);
curveVertex(1.9,4.4);
endShape();
//R4
beginShape();
curveVertex(2,4.3);
curveVertex(2,4.3);
curveVertex(2,5);
curveVertex(2.6,5);
curveVertex(2.6,4.1);
curveVertex(2.6,4.1);
endShape();
//botTeeth
beginShape();
curveVertex(0,6.5);
curveVertex(0,6.5);
curveVertex(0,5.7);
curveVertex(0.65,5.7);
curveVertex(0.65,6.5);
curveVertex(0.65,6.5);
endShape();

beginShape();
curveVertex(0.65,6.4);
curveVertex(0.65,6.4);
curveVertex(0.65,5.6);
curveVertex(1.3,5.6);
curveVertex(1.3,6.4);
curveVertex(1.3,6.4);
endShape();

beginShape();
curveVertex(1.3,6.5);
curveVertex(1.3,6.5);
curveVertex(1.3,5.4);
curveVertex(1.95,5.4);
curveVertex(1.95,6.2);
curveVertex(1.95,6.2);
endShape();

beginShape();
curveVertex(1.95,6);
curveVertex(1.95,6);
curveVertex(1.95,5.2);
curveVertex(2.6,5.2);
curveVertex(2.6,6);
curveVertex(2.6,6);
endShape();

beginShape();
curveVertex(0,6.5);
curveVertex(0,6.5);
curveVertex(0,5.7);
curveVertex(-0.65,5.7);
curveVertex(-0.65,6.5);
curveVertex(-0.65,6.5);
endShape();

beginShape();
curveVertex(-0.65,6.4);
curveVertex(-0.65,6.4);
curveVertex(-0.65,5.6);
curveVertex(-1.3,5.6);
curveVertex(-1.3,6.4);
curveVertex(-1.3,6.4);
endShape();

beginShape();
curveVertex(-1.3,6.2);
curveVertex(-1.3,6.2);
curveVertex(-1.3,5.4);
curveVertex(-1.95,5.4);
curveVertex(-1.95,6.2);
curveVertex(-1.95,6.2);
endShape();

beginShape();
curveVertex(-1.95,6);
curveVertex(-1.95,6);
curveVertex(-1.95,5.2);
curveVertex(-2.6,5.2);
curveVertex(-2.6,6);
curveVertex(-2.6,6);
endShape();
//eyeLeft
// beginShape();
// curveVertex(-4,-3);
// curveVertex(-4,-3);
// curveVertex(-3.5,-3);
// curveVertex(-3,-3);
// curveVertex(-2.5,-3);
// curveVertex(-2,-2.6);
// curveVertex(-2.1,-1);
// curveVertex(-2.5,-1.1);
// curveVertex(-3,-1.2);
// curveVertex(-3.5,-1.3);
// curveVertex(-4,-2.8);
// curveVertex(-4,-3);
// endShape();
strokeWeight(0.25);
ellipse(-3,-2.5,3.3);
ellipse(3,-2.5,3.3);
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
//jawBaseLeft
beginShape();
curveVertex(-5,1.5);
curveVertex(-5,1.5);
curveVertex(-4.8,5);
curveVertex(-4.5,6);
curveVertex(-3.7,6.5);
curveVertex(-3.7,6.5);
endShape();
//jawBaseRight
beginShape();
curveVertex(5,1.5);
curveVertex(5,1.5);
curveVertex(4.8,5);
curveVertex(4.5,6);
curveVertex(3.7,6.5);
curveVertex(3.7,6.5);
endShape();
//frontjaw
beginShape();
curveVertex(-3.7,5);
curveVertex(-3.7,5);
curveVertex(-3.6,6.7);
// curveVertex(-3.3,6.7);
curveVertex(-3,8);
curveVertex(-2,9);
curveVertex(2,9);
curveVertex(3,8);
curveVertex(3.6,6.7);
curveVertex(3.7,5);
curveVertex(3.7,5);
endShape();



// beginShape();
// //leftSide
// curveVertex(0, 9);
// curveVertex(0, 9);
// curveVertex(-3, 9);
// curveVertex(-5, 5);
// curveVertex(-8, 0);
// curveVertex(-7, -6);
// curveVertex(0,-9);
// //rightSide
// curveVertex(7, -6);
// curveVertex(8, 0);
// curveVertex(5, 5);
// curveVertex(3, 9);
// curveVertex(0, 9);
// curveVertex(0,9)
// endShape();
//nose
// beginShape();
// curveVertex(0,0);
// curveVertex(0,0);
// curveVertex(-1,0);
// curveVertex(-1,0);
// curveVertex(-2,5);
// curveVertex(-0.5,5);
// curveVertex(0,4.7);
// curveVertex(0,4.7);
// curveVertex(0.5,5);
// curveVertex(2,5);
// curveVertex(1,0);
// curveVertex(1,0);
// curveVertex(0,0);
// curveVertex(0,0);
// endShape();
// //leftEye
// beginShape();
// curveVertex(-2,0);
// curveVertex(-2,0);
// curveVertex(-3,1);
// curveVertex(-5,2);
// curveVertex(-6,-2);
// curveVertex(-3,-5);
// curveVertex(-2,0);
// curveVertex(-2,0);
// endShape();
// //rightEye
// beginShape();
// curveVertex(2,0);
// curveVertex(2,0);
// curveVertex(3,1);
// curveVertex(5,2);
// curveVertex(6,-2);
// curveVertex(3,-5);
// curveVertex(2,0);
// curveVertex(2,0);
// endShape();
//jaw

}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(thinness_value) {
  // head
  noStroke();
  fill(200, 150, 150);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
  // rect(-5, -10, 10, 20);

  // eyes
  fill(240);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [225, 206, 187];
  const fg_color3 = [151, 102, 52];

  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

  noStroke();
  fill(fg_color3);
  ellipse(0, 0, 30/2, 40/2);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse( 0, -8/2, 5/2, 3/2);
    fill(fg_color3);
    ellipse(-1/2, -8/2, 2/2, 2/2);
  }

  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(-5/2, -8/2, 5/2, 3/2);
    ellipse( 5/2, -8/2, 5/2, 3/2);

    fill(fg_color3);
    ellipse(-6/2, -8/2, 2/2, 2/2);
    ellipse( 4/2, -8/2, 2/2, 2/2);
  }

  // mouth
  fill(bg_color3);
  ellipse(0/2, 7/2, 15/2, mouth_value);
}
