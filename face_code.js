/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

const face_core_width = 17;
const face_core_height = 14;
const face_rounding = 2;

const face_top_width = 7;
const face_top_height = 3;

const face_bottom_width = 10;
const face_bottom_height = 2;

let percentage = 0.8;

function drawFace1(xpos,ypos,eyesize) {
  rectMode(CENTER);
  angleMode(RADIANS);
  translate(0,0.5);

  face_core();
                                                                                                                                                                                                                                                               
    fill(0);
  ellipse(-xpos,-0.5 * ypos,eyesize);
  ellipse(xpos,-0.5 * ypos,eyesize);
      fill(255);
  ellipse(-xpos,-0.5 * ypos*0.1,eyesize/2);
  ellipse(xpos,-0.5 * ypos*0.1,eyesize/2);


  line(-3,3,3,3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(thinness_value) {
  rectMode(CENTER);
  angleMode(RADIANS);
  translate(0,0.5);

  face_core();

    fill(0);
  ellipse(-3,-0.5,2,2);
  ellipse(3,-0.5,2,2);
}

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tilt_value, eye_value, mouth_value) {
  rectMode(CENTER);
  angleMode(RADIANS);
  translate(0,0.5);

  face_core();

    fill(0);
  ellipse(-3,-0.5,2,2);
  ellipse(3,-0.5,2,2);
}

function face_core(){
    push();
    noStroke();
    
    //fill core colour
    fill(240,200,10);

    rect(0,0,face_core_width,face_core_height,2.5); //core
    rect(0,8,face_bottom_width,face_bottom_height); // bottom
    rect(0,-8.5,face_top_width,face_top_height, 0.25 * face_rounding, 0.25 * face_rounding, 0, 0); // top

    //fill highlight
    fill(240,240,40,100);
    rect(0,0,face_core_width * percentage,face_core_height,2.5); //core
    rect(0,8,face_bottom_width * percentage,face_bottom_height); // bottom
    rect(0,-8.5,face_top_width * percentage * 0.8,face_top_height, 0.25 * face_rounding, 0.25 * face_rounding, 0, 0); // top

    //fill shadow
    fill(165,42,42,15);
    rect(0,7.5,face_bottom_width,face_bottom_height/2);

    push();
      noFill();
      strokeWeight(1);
      stroke(255,70);
      arc(-4,-4.5,2,2,PI,PI+HALF_PI);
    pop();

  pop();
}
