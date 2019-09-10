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
let light_brown = "#bd8d6c";
let light_pink = "#e3d5d9";
let beige = "#cfc2ba";


//********FACE ONE*******// (PANDA)

function drawFace1(tallness1, ear_type1, cheek_type1, mouth1, eye1) {
  fill(50);
  noStroke();
  let head_size1 = map(tallness1, 0, 100, 0.8, 1);
  let mouth_curve1 = map(mouth1, 0, 100, -5, 5);
  let eye_size1 = map(eye1, 0, 100, 4.5, 6.5);

  push();
  translate(0, 0.5); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size1, head_size1);

  //*****EARS****/

  //EAR TYPE 1
  if(ear_type1 == 1){
    ellipse(-4, -6.5, 8);
    ellipse(4, -6.5, 8);
  }

  //EAR TYPE 2
  else if(ear_type1 == 2){
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
  else if(ear_type1 == 3){
    ellipse(-6, -6, 8);
    ellipse(6, -6, 8);
    fill(light_pink);
    ellipse(-6, -6, 5);
    ellipse(6, -6, 5);
  }
  
  //HEAD
  fill(230);
  rectMode(CENTER);
  rect(0, 0, 19, 17.5, 10);

  //********EYES*****/
  fill(50);

  //Left Eye Patch
  push();
  translate(-3.5, -2.75);
  rotate(-9.8);
  ellipse(0, 0, eye_size1, 4.5);
  pop();
  //Right Eye Patch
  push();
  translate(3.5, -2.75);
  rotate(9.8);
  ellipse(0, 0, eye_size1, 4.5);
  pop();

  //Eyeballs
  fill(0);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  fill(220);
  ellipse(-2.75, -3.4, 0.35, 0.4);
  ellipse(3.25, -3.4, 0.35, 0.4);

  //********MOUTH*****/
  fill(50);
  ellipse(0, 3, 10, 7);
  fill(0);
  rect(0, 2, 0.5, 2.75, 5);
  stroke(0);
  strokeWeight(0.5);
  curve(0, mouth_curve1, -2, 3.3, 2, 3.3, 0, mouth_curve1);
  noStroke();


  //********CHEEKS*****/

  //CHEEK TYPE 1
  if(cheek_type1 == 1){
    fill(255, 48, 93, 100);
    ellipse(4.5, 1.75, 3.75);
    ellipse(-4.5, 1.75, 3.75);
  }

  //CHEEKS TYPE 2
  else if(cheek_type1 == 2){
    fill(242, 199, 223, 100);
    push();
    translate(7, 0.5);
    rotate(-10);
    ellipse(0, 0, 5, 3.75);
    pop();
    push();
    translate(-7, 0.5);
    rotate(10);
    ellipse(0, 0, 5, 3.75);
    pop();
  }

  //CHEEK TYPE 3
  else if(cheek_type1 == 3){

  }

  //********NOSE*******/
  fill(0);
  ellipse(0, 0, 3, 2);

pop();

}



//********FACE TWO*******// (BROWN BEAR)
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(tallness2, ear_type2, eye_type, mouth_size, mouth2) {
  fill(mid_brown);
  noStroke();
  let head_size2 = map(tallness2, 0, 100, 0.75, 1);
  let mouth_width = map(mouth_size, 0, 100, 6, 10);
  let mouth_curve2 = map(mouth2, 0, 100, -5, 5);

  push();
  translate(0, 1); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size2);

  //********EARS*****/
  //MAP TO HEAD HEIGHT !!!

  //EAR TYPE ONE
  if(ear_type2 == 1){
    ellipse(-5, -6, 8);
    ellipse(5, -6, 8);
    fill(light_pink);
    ellipse(-5, -6, 6);
    ellipse(5, -6, 6);
  }

  //EAR TYPE TW0
  else if(ear_type2 == 2){
    ellipse(-5, -6, 8);
    ellipse(-8.3, -5.75, 2.4);
    ellipse(-8, -7.6, 2.4);
    ellipse(-6.75, -9, 2.4);
    ellipse(-5, -9.5, 2.4);
    ellipse(-3.5, -9, 2.4);
    ellipse(-2.5, -7.9, 2.4);

    ellipse(5, -6, 8);
    ellipse(8.3, -5.75, 2.4);
    ellipse(8, -7.6, 2.4);
    ellipse(6.75, -9, 2.4);
    ellipse(5, -9.5, 2.4);
    ellipse(3.5, -9, 2.4);
    ellipse(2.5, -7.9, 2.4);

    fill(light_brown);
    ellipse(-5, -6, 6);
    ellipse(5, -6, 6);
}

  //EAR TYPE THREE
  else if(ear_type2 == 3){
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
  

  //********HEAD*****/
  fill(mid_brown);
  ellipse(0, 0, 19, 16.5);

  //*******EYES**********/
  fill(light_brown);

  //EYE TYPE 1
  if(eye_type == 1){
    //Left Eye Patch
    push();
    translate(-3, -2.5);
    rotate(-10);
    ellipse(0, 0, 5.5, 4);
    pop();
  }

  //EYE TYPE 2
  else if(eye_type == 2){
  //Right Eye Patch
    push();
    translate(3, -2.5);
    rotate(10);
    ellipse(0, 0, 5.5, 4);
    pop();
 }


  //EYE TYPE 3
  else if(eye_type == 3){
  //Both Eye Patches
    push();
    translate(-3, -2.5);
    rotate(-10);
    ellipse(0, 0, 5.5, 4);
    pop();
    push();
    translate(3, -2.5);
    rotate(10);
    ellipse(0, 0, 5.5, 4);
    pop();
  }

  //Eyeballs
  fill(0);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  fill(220);
  ellipse(-2.75, -3.4, 0.35, 0.4);
  ellipse(3.25, -3.4, 0.35, 0.4);


  //*******MOUTH**********/
  fill(light_brown);
  ellipse(0, 3, mouth_width, 7);
  fill(0);
  rectMode(CENTER);
  rect(0, 2, 0.5, 2.75, 5);
  stroke(0);
  strokeWeight(0.5);
  curve(0, mouth_curve2, -2, 3.3, 2, 3.3, 0, mouth_curve2);
  noStroke();

  //*******NOSE**********/
  fill(0);
  ellipse(0, 0, 3, 2);


  pop();
}


//********FACE THREE*******// (POLAR/ LIGHT BROWN)

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tallness3, ear_type3, mouth3, m_width3, eye_type3) {
  fill(beige);
  noStroke();
  rectMode(CENTER);
  let head_size3 = map(tallness3, 0, 100, 0.8, 1);
  let mouth_curve3 = map(mouth3, 0, 100, -5, 5);
  let mouth_width3 = map(m_width3, 0, 100, 6.5, 11.5);

  push();
  translate(0, 0.7); //TO KEEP WITHIN BOUNDING BOX.
  scale(head_size3, head_size3);

  //*********EARS******/

  //EAR TYPE 1
  if(ear_type3 == 1){
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
  else if(ear_type3 == 2){
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
  else if(ear_type3 == 3){
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
    

  //******HEAD******/
  fill(beige);
  ellipse(0, 0, 19, 18);

  //******EYES******/

  fill(dark_brown)

  //EYE TYPE 1
  if(eye_type3 == 1){
    //Right Eye Patch
    push();
    translate(3, -2.5);
    rotate(9.8);
    ellipse(0, 0, 5.8, 4.8);
    pop();
  }

  //EYE TYPE 2
  else if(eye_type3 == 2){
  //Both Eye Patches
    push();
    fill(dark_brown);
    translate(-3, -2.5);
    rotate(-9.8);
    ellipse(0, 0, 5.8, 4.8);
    pop();
    push();
    fill(186, 177, 171);
    translate(3, -2.5);
    rotate(9.8);
    ellipse(0, 0, 5.8, 4.8);
    pop();
  }

  //EYE TYPE 3
  else if(eye_type3 == 3){
   //NO PATCH
   fill(beige);   
  }


  //Eyeballs
  fill(0);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  fill(220);
  ellipse(-2.75, -3.4, 0.35, 0.4);
  ellipse(3.25, -3.4, 0.35, 0.4);

  //*******MOUTH**********/
  
  fill(dark_brown);
  rectMode(CENTER);
  rect(0, 3.5, mouth_width3, 7, 10);
  fill(0);
  rect(0, 2, 0.5, 2.75, 5);
  stroke(0);
  strokeWeight(0.5);
  curve(0, mouth_curve3, -2, 3.3, 2, 3.3, 0, mouth_curve3);
  noStroke();


  //*******NOSE******/

  fill(0);
  ellipse(0, 0, 3, 2);
  
  pop();

}
