/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

//COLOURS

let dark_brown = "#9c908a";
let mid_brown = "#826558";
let light_brown = "#9e806a";
let light_pink = "#cfa9b3";
let beige = "#cfc2ba";


//********FACE ONE*******// (PANDA)

function drawFace1(tallness1, ear_type1, cheek_type1, mouth1, eye_scale1) {
  // ****************** VARIABLES ***************
  let head_size1 = map(tallness1, 0, 100, 0.75, 1);
  let mouth_curve1 = map(mouth1, 0, 100, -5, 3.5);
  let eye_size1 = map(eye_scale1, 0, 100, 1.1, 1.4);

  fill(50);
  noStroke();
  push();
  translate(0, 0.5); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size1, head_size1);

// ****************** EARS ***************

  //EAR TYPE 1
  if(ear_type1 <1){
    ellipse(-4, -6.5, 8);
    ellipse(4, -6.5, 8);
  }

  //EAR TYPE 2
  else if(ear_type1 <2){
    ellipse(-6, -5.5, 8);
    ellipse(6, -5.5, 8);

    push();
    translate(-8.48, -9.48);
    beginShape();
    vertex(0,0);
    vertex(2,2);
    vertex(2,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(-1.25, 0.5);
    beginShape();
    vertex(0,0);
    vertex(2,2);
    vertex(2,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();

    push();
    translate(8.48, -9.48);
    beginShape();
    vertex(0,0);
    vertex(-2,2);
    vertex(-2,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(1.25, 0.5);
    beginShape();
    vertex(0,0);
    vertex(-2,2);
    vertex(-2,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
   
  } 

  //EAR TYPE 3
  else if(ear_type1 <3){
    ellipse(-6, -6, 8);
    ellipse(6, -6, 8);
    fill(dark_brown);
    ellipse(-6, -6, 5);
    ellipse(6, -6, 5);
  }
  
// ****************** FACE ***************
  fill(230);
  rectMode(CENTER);
  rect(0, 0, 19, 17.5, 10);


// ****************** EYES ***************
  //Patches
  fill(40);
  push();
  translate(-0.8, -2.75);
  scale(eye_size1, eye_size1);
  beginShape();
  curveVertex(1.3, 0.499999999);
  curveVertex(1.31,0.5);
  curveVertex(1.5, -2);
  curveVertex(4.5, -2);
  curveVertex(6, 1);
  curveVertex(4, 2.5);
  curveVertex(2.5, 1.75);
  curveVertex(1.5, 1);
  curveVertex(1.31, 0.500000001);
  endShape(CLOSE);
  pop();

  push();
  translate(0.8, -2.75);
  scale(eye_size1,eye_size1);
  beginShape();
  curveVertex(-1.3, 0.499999999);
  curveVertex(-1.31,0.5);
  curveVertex(-1.5, -2);
  curveVertex(-4.5, -2);
  curveVertex(-6, 1);
  curveVertex(-4, 2.5);
  curveVertex(-2.5, 1.75);
  curveVertex(-1.5, 1);
  curveVertex(-1.31, 0.500000001);
  endShape(CLOSE);
  pop();

  //Eyeballs
  fill(100);
  ellipse(-3.1, -3, 2.6, 2.5);
  ellipse( 3.1, -3, 2.6, 2.5);

  fill(0);
  ellipse(-3.05, -3, 2.1);
  ellipse( 3.05, -3, 2.1);

  fill(175);
  push();
  translate(-2.75, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();
  push();
  translate(3.35, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();

// ****************** MOUTH ***************
  
  //Mouth Exterior
  fill(50);
  rectMode(CENTER);
  ellipse(0, 3.25, 10, 7);
  fill(0);
  rect(0, 2, 0.35, 2.75, 5);
  

  //Mouth Curve
  stroke(0);
  strokeWeight(0.4);
  fill(light_pink);
  curve(0, mouth_curve1, -1.75, 3.3, 1.75, 3.3, 0, mouth_curve1);
  fill(0);
  curve(0, 3.5, -1.75, 3.3, 1.75, 3.3, 0, 3.5);
  noStroke();


  // ****************** CHEEKS ***************

  //CHEEK TYPE 1
    if(cheek_type1 < 1){
      fill(255, 48, 93, 75);
      ellipse(4.5, 2.4, 3.75);
      ellipse(-4.5, 2.4, 3.75);
    }

  //CHEEKS TYPE 2
    else if(cheek_type1 < 2){
      fill(242, 199, 223, 100);
      push();
      translate(7, 1.25);
      rotate(-10);
      ellipse(0, 0, 5, 3.75);
      pop();
      push();
      translate(-7, 1.25);
      rotate(10);
      ellipse(0, 0, 5, 3.75);
      pop();
    }

  //CHEEK TYPE 3
    else if(cheek_type1 < 3){

    }

// ****************** NOSE ***************
  fill(0);
  ellipse(0, 0, 3, 2);

  fill(30);
  ellipse(0, 0.1, 1.25, 0.75);

  fill(150);
  push();
  translate(0.6, -0.5);
  rotate(0.4);
  ellipse(0, 0, 0.5, 0.17);
  pop();

pop();

}



//********FACE TWO*******// (BROWN BEAR)
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(tallness2, ear_type2, eye_type, mouth_size, mouth2) {

  // ****************** VARIABLES ***************
  let head_size2 = map(tallness2, 0, 100, 0.75, 1);
  let mouth_width = map(mouth_size, 0, 100, 6, 10);
  let mouth_curve2 = map(mouth2, 0, 100, -5, 3.5);

  fill(mid_brown);
  noStroke();
  push();
  translate(0, 1); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size2);

// ****************** EARS ***************
  //EAR TYPE ONE
  if(ear_type2 < 1){
    ellipse(-5, -6, 8);
    ellipse(5, -6, 8);
    fill(dark_brown);
    ellipse(-5, -6, 5);
    ellipse(5, -6, 5);
    fill(mid_brown);
    push();
    translate(0, -7.25);
    beginShape();
    vertex(0,-0);
    vertex(2,-2);
    vertex(1, 1);
    vertex(0,0);
    endShape(CLOSE);
    translate(0, 0.5);
    beginShape();
    vertex(-1,-0);
    vertex(1,-3);
    vertex(1, 0);
    vertex(0,0);
    endShape(CLOSE);
    translate(0,0.3);
    beginShape();
    vertex(-0.5,1);
    vertex(-1,-3);
    vertex(1.5, 0);
    endShape(CLOSE);
    pop();
  }

  //EAR TYPE TW0
  else if(ear_type2 < 2){
    fill(dark_brown);
    ellipse(-5, -6, 7.75);
    ellipse(-8.1, -5.75, 2.4);
    ellipse(-7.8, -7.4, 2.4);
    ellipse(-6.6, -8.7, 2.4);
    ellipse(-5, -9.1, 2.4);
    ellipse(-3.4, -8.7, 2.4);
    ellipse(-2.5, -7.9, 2.4);

    ellipse(5, -6, 7.75);
    ellipse(8.1, -5.75, 2.4);
    ellipse(7.8, -7.4, 2.4);
    ellipse(6.6, -8.7, 2.4);
    ellipse(5, -9.1, 2.4);
    ellipse(3.4, -8.7, 2.4);
    ellipse(2.5, -7.9, 2.4);

    fill(mid_brown);
    ellipse(-5, -6, 7.5);
    ellipse(-8.1, -5.75, 2);
    ellipse(-7.8, -7.4, 2);
    ellipse(-6.6, -8.7, 2);
    ellipse(-5, -9.1, 2);
    ellipse(-3.4, -8.7, 2);
    ellipse(-2.5, -7.9, 2);

    ellipse(5, -6, 7.5);
    ellipse(8.1, -5.75, 2);
    ellipse(7.8, -7.4, 2);
    ellipse(6.6, -8.7, 2);
    ellipse(5, -9.1, 2);
    ellipse(3.4, -8.7, 2);
    ellipse(2.5, -7.9, 2);

    fill(light_brown);
    ellipse(-5, -6, 5);
    ellipse(5, -6, 5);
}

  //EAR TYPE THREE
  else if(ear_type2 < 3){
    ellipse(-5, -7, 7, 6);
    ellipse(5, -7, 7, 6);

    push();
    translate(-2.2, -7.8);
    beginShape();
    vertex(0,0);
    vertex(-2,-3);
    vertex(-3,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(-0.75, -0.25);
    beginShape();
    vertex(0,0);
    vertex(-2.5,-3);
    vertex(-3,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(-1, 0.5);
    beginShape();
    vertex(0,0);
    vertex(-2,-3);
    vertex(-3,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
    push();
    translate(2.2, -7.8);
    beginShape();
    vertex(0,0);
    vertex(2,-3);
    vertex(3,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(0.75, -0.25);
    beginShape();
    vertex(0,0);
    vertex(2.5,-3);
    vertex(3,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(1, 0.5);
    beginShape();
    vertex(0,0);
    vertex(2,-3);
    vertex(3,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
  }
  

// ****************** FACE ***************
  fill(mid_brown);
  ellipse(0, 0, 19, 16.5);

// ****************** EYES ***************
  fill(173, 143, 123);

  //EYE TYPE 1
  if(eye_type < 1){
    //Left Eye Patch
    push();
    translate(0.5, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(-0.8, 0.499999999);
    curveVertex(-0.75,0.5);
    curveVertex(-1.5, -2);
    curveVertex(-4.5, -2);
    curveVertex(-5.5, 0.5);
    curveVertex(-4, 2);
    curveVertex(-2.5, 1.75);
    curveVertex(-1.5, 1.25);
    curveVertex(-0.8, 0.500000001);
    endShape();
    pop();
    fill(light_brown);
    push();
    translate(-0.2, -2.75);
    scale(1);
    beginShape();
    curveVertex(-0.8, 0.499999999);
    curveVertex(-0.75,0.5);
    curveVertex(-1.5, -2);
    curveVertex(-4.5, -2);
    curveVertex(-5.5, 0.5);
    curveVertex(-4, 2);
    curveVertex(-2.5, 1.75);
    curveVertex(-1.5, 1.25);
    curveVertex(-0.8, 0.500000001);
    endShape();
    pop();
   
  }

  //EYE TYPE 2
  else if(eye_type < 2){
  //Right Eye Patch
    push();
    translate(-0.5, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(0.8, 0.499999999);
    curveVertex(0.75,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(5.5, 0.5);
    curveVertex(4, 2);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1.25);
    curveVertex(0.8, 0.500000001);
    endShape(CLOSE);
    pop();
    fill(light_brown);
    push();
    translate(0.2, -2.75);
    scale(1);
    beginShape();
    curveVertex(0.8, 0.499999999);
    curveVertex(0.75,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(5.5, 0.5);
    curveVertex(4, 2);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1.25);
    curveVertex(0.8, 0.500000001);
    endShape(CLOSE);
    pop();
 }


  //EYE TYPE 3
  else if(eye_type < 3){
  //Both Eye Patches
    push();
    translate(-0.5, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(0.8, 0.499999999);
    curveVertex(0.75,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(5.5, 0.5);
    curveVertex(4, 2);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1.25);
    curveVertex(0.8, 0.500000001);
    endShape(CLOSE);
    pop();
    fill(light_brown);
    push();
    translate(0.2, -2.75);
    scale(1);
    beginShape();
    curveVertex(0.8, 0.499999999);
    curveVertex(0.75,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(5.5, 0.5);
    curveVertex(4, 2);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1.25);
    curveVertex(0.8, 0.500000001);
    endShape(CLOSE);
    pop();

    fill(173, 143, 123);
    push();
    translate(0.5, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(-0.8, 0.499999999);
    curveVertex(-0.75,0.5);
    curveVertex(-1.5, -2);
    curveVertex(-4.5, -2);
    curveVertex(-5.5, 0.5);
    curveVertex(-4, 2);
    curveVertex(-2.5, 1.75);
    curveVertex(-1.5, 1.25);
    curveVertex(-0.8, 0.500000001);
    endShape();
    pop();
    fill(light_brown);
    push();
    translate(-0.2, -2.75);
    scale(1);
    beginShape();
    curveVertex(-0.8, 0.499999999);
    curveVertex(-0.75,0.5);
    curveVertex(-1.5, -2);
    curveVertex(-4.5, -2);
    curveVertex(-5.5, 0.5);
    curveVertex(-4, 2);
    curveVertex(-2.5, 1.75);
    curveVertex(-1.5, 1.25);
    curveVertex(-0.8, 0.500000001);
    endShape();
    pop();
   
  }

  //Eyeballs
  fill(mid_brown);
  ellipse(-3.1, -3, 2.6, 2.5);
  ellipse( 3.1, -3, 2.6, 2.5);

  fill(0);
  ellipse(-3.05, -3, 2.1);
  ellipse( 3.05, -3, 2.1);

  fill(200);
  push();
  translate(-2.75, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();
  push();
  translate(3.35, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();


// ****************** MOUTH ***************
  fill(light_brown);
  ellipse(0, 3, mouth_width, 7);
  fill(173, 143, 123);
  ellipse(0, 3, mouth_width*0.85, 7*0.85);

  fill(0);
  rectMode(CENTER);
  rect(0, 2, 0.35, 2.75, 5);

  stroke(0);
  strokeWeight(0.5);
  fill(light_pink);
  curve(0, mouth_curve2, -1.75, 3.3, 1.75, 3.3, 0, mouth_curve2);
  fill(0);
  curve(0, 3.5, -1.75, 3.3, 1.75, 3.3, 0, 3.5);
  noStroke();

// ****************** NOSE ***************
  fill(0);
  ellipse(0, 0, 3, 2);

  fill(30);
  ellipse(0, 0.1, 1.25, 0.75);

  fill(150);
  push();
  translate(0.6, -0.5);
  rotate(0.4);
  ellipse(0, 0, 0.5, 0.17);
  pop();

  pop();
}


//********FACE THREE*******// (POLAR/ LIGHT BROWN)

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tallness3, ear_type3, mouth3, m_width3, eye_type3) {

// ****************** VARIABLES ***************
  let head_size3 = map(tallness3, 0, 100, 0.75, 1);
  let mouth_curve3 = map(mouth3, 0, 100, -5, 3.5);
  let mouth_width3 = map(m_width3, 0, 100, 6.5, 10.5);

  fill(beige);
  noStroke();
  rectMode(CENTER);
  push();
  translate(0, 0.7); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size3, head_size3);

// ****************** EARS ***************

  //EAR TYPE 1
  if(ear_type3 < 1){
    ellipse(-6, -5.5, 8);
    ellipse(6, -5.5, 8);
    push();
    translate(-8.48, -9.48);
    beginShape();
    vertex(0,0);
    vertex(2,2);
    vertex(2,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(-1.25, 0.5);
    beginShape();
    vertex(0,0);
    vertex(2,2);
    vertex(2,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();

    push();
    translate(8.48, -9.48);
    beginShape();
    vertex(0,0);
    vertex(-2,2);
    vertex(-2,0);
    vertex(0, 0);
    endShape(CLOSE);
    translate(1.25, 0.5);
    beginShape();
    vertex(0,0);
    vertex(-2,2);
    vertex(-2,0);
    vertex(0, 0);
    endShape(CLOSE);
    pop();

    fill(dark_brown);
    ellipse(-6, -5.5, 5.5);
    ellipse(6, -5.5, 5.5);

    
  }
    
  //EAR TYPE 2
  else if(ear_type3 < 2){
    ellipse(-5, -6, 8);
    ellipse(5, -6, 8);
    push();
    translate(0, -8.5);
    beginShape();
    vertex(0,-0);
    vertex(2,-2);
    vertex(1, 1);
    vertex(0,0);
    endShape(CLOSE);
    translate(0, 0.5);
    beginShape();
    vertex(-1,-0);
    vertex(1,-3);
    vertex(1, 0);
    vertex(0,0);
    endShape(CLOSE);
    translate(0,0.3);
    beginShape();
    vertex(-0.5,1);
    vertex(-1,-3);
    vertex(1.5, 0);
    endShape(CLOSE);
    pop();

    
  }

  //EAR TYPE 3
  else if(ear_type3 < 3){
    ellipse(-5, -7.75, 6);
    ellipse(5, -7.75, 6);

    strokeWeight(1);
    stroke(dark_brown);
    ellipse(-5, -7.75, 3);
    ellipse(5, -7.75, 3);
    noStroke();
    fill(166, 154, 146);
    ellipse(-5, -7.75, 3);
    ellipse(5, -7.75, 3);
  }
    

// ****************** FACE ***************
  fill(beige);
  ellipse(0, 0, 19, 18);

// ****************** EYES ***************

  fill(dark_brown)

  //EYE TYPE 1
  if(eye_type3 < 1){
    //Right Eye Patch
    fill(dark_brown);
    push();
    translate(-0.8, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(1.3, 0.499999999);
    curveVertex(1.31,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(6, 1);
    curveVertex(4, 2.5);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1);
    curveVertex(1.31, 0.500000001);
    endShape(CLOSE);
    pop();
  }

  //EYE TYPE 2
  else if(eye_type3 < 2){
  //Both Eye Patches

    fill(186, 177, 171);
    push();
    translate(-0.8, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(1.3, 0.499999999);
    curveVertex(1.31,0.5);
    curveVertex(1.5, -2);
    curveVertex(4.5, -2);
    curveVertex(6, 1);
    curveVertex(4, 2.5);
    curveVertex(2.5, 1.75);
    curveVertex(1.5, 1);
    curveVertex(1.31, 0.500000001);
    endShape(CLOSE);
    pop();

    
    push();
    translate(0.8, -2.75);
    scale(1.2);
    beginShape();
    curveVertex(-1.3, 0.499999999);
    curveVertex(-1.31,0.5);
    curveVertex(-1.5, -2);
    curveVertex(-4.5, -2);
    curveVertex(-6, 1);
    curveVertex(-4, 2.5);
    curveVertex(-2.5, 1.75);
    curveVertex(-1.5, 1);
    curveVertex(-1.31, 0.500000001);
    endShape(CLOSE);
    pop();


  }

  //EYE TYPE 3
  else if(eye_type3 < 3){
   //NO PATCH
   fill(beige);   
  }

  //Eyeballs
  fill(dark_brown);
  ellipse(-3.1, -3, 2.6, 2.5);
  ellipse( 3.1, -3, 2.6, 2.5);

  fill(0);
  ellipse(-3.05, -3, 2.1);
  ellipse( 3.05, -3, 2.1);

  fill(175);
  push();
  translate(-2.75, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();
  push();
  translate(3.35, -3.6);
  rotate(0.5);
  ellipse(0, 0, 0.6, 0.25);
  pop();

// ****************** MOUTH ***************
  
  fill(dark_brown);
  rectMode(CENTER);
  rect(0, 3.5, mouth_width3, 7, 10);

  fill(0);
  rect(0, 2, 0.35, 2.75, 5);

  stroke(0);
  strokeWeight(0.5);
  fill(light_pink);
  curve(0, mouth_curve3, -1.75, 3.3, 1.75, 3.3, 0, mouth_curve3);
  fill(0);
  curve(0, 3.5, -1.75, 3.3, 1.75, 3.3, 0, 3.5);
  noStroke();


// ****************** NOSE ***************

  fill(0);
  ellipse(0, 0, 3, 2);

  fill(30);
  ellipse(0, 0.1, 1.25, 0.75);

  fill(150);
  push();
  translate(0.6, -0.5);
  rotate(0.4);
  ellipse(0, 0, 0.5, 0.17);
  pop();
  pop();

}
