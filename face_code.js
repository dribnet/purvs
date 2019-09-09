/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

//COLOURS

let dark_brown = "#5e4f3a";
let mid_brown = "#826558";
let light_brown = "#bd8d6c";
let light_pink = "#f7e6ee";
let beige = "#e3d0c5";


//********FACE ONE*******// (PANDA)

function drawFace1(tallness1, ear_type1, cheek_type1, mouth1) {
  fill(50);
  noStroke();
  let head_height1 = map(tallness1, 0, 100, 16, 18);
  let mouth_curve1 = map(mouth1, 0, 100, -5, 5);

  //*****EARS****/

  //EAR TYPE 1
  if(ear_type1 == 1){
    ellipse(-4, -6.5, 8);
    ellipse(4, -6.5, 8);
  }

  //EAR TYPE 2
  else if(ear_type1 == 2){
    ellipse(-7, -5.5, 8);
    ellipse(7, -5.5, 8);

    push();
    translate(-9.48, -9.48);
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
    translate(9.48, -9.48);
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
  rect(0, 0, 20, head_height1, 10);

  //EYES
  fill(50);

  //Left Eye Patch
  push();
  translate(-3, -2.5);
  rotate(-10);
  ellipse(0, 0, 5.5, 4);
  pop();
  //Right Eye Patch
  push();
  translate(3, -2.5);
  rotate(10);
  ellipse(0, 0, 5.5, 4);
  pop();

  //Eyeballs
  fill(0);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  fill(220);
  ellipse(-2.75, -3.4, 0.35, 0.4);
  ellipse(3.25, -3.4, 0.35, 0.4);

  //MOUTH
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

  //NOSE
  fill(0);
  ellipse(0, 1, 3.5, 1.75);


}



//********FACE TWO*******// (BROWN BEAR)
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(tallness2, ear_type2, eye_type, mouth_size) {
  fill(mid_brown);
  noStroke();
  let head_height2 = map(tallness2, 0, 100, 15, 18);
  let mouth_width = map(mouth_size, 0, 100, 6, 10);

  push();
  translate(0, 1); //TO KEEP WITHIN BOUNDING BOX.

  //EARS
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

//EAR TYPE 3 
  else if(ear_type2 == 3){
    ellipse(-5, -7, 6);
    ellipse(5, -7, 6);
  }
  

  //EAR TYPE THREE

  //HEAD
  fill(mid_brown);
  ellipse(0, 0, 19, head_height2);

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

  //MOUTH
  fill(light_brown);
  ellipse(0, 3, mouth_width, 7);
  fill(0);
  rectMode(CENTER);
  rect(0, 2, 0.5, 2.75, 5);
  noFill();
  stroke(0);
  strokeWeight(0.5);
  curve(-1, 1, -1.5, 3.1, 1.5, 3.1, 1, 1);
  noStroke();

  //NOSE
  fill(0);
  ellipse(0, 0, 2);

  pop();
}


//********FACE THREE*******// (POLAR/ LIGHT BROWN)

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tallness3, ear_type3) {
  fill(beige);
  noStroke();
  rectMode(CENTER);
  let head_height3 = map(tallness3, 0, 100, 17, 20);

  //*********EARS******/

  //EARS 1
  if(ear_type3 == 1){
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

    fill(mid_brown);
    ellipse(-5, -6, 6);
    ellipse(5, -6, 6);
  }
    
  //EARS 2
  else if(ear_type3 == 2){
    ellipse(-5, -7.75, 6);
    ellipse(5, -7.75, 6);
  }
  
  //HEAD
  fill(beige);
  ellipse(0, 0, 20, head_height3);

  //******EYES******/

  fill(dark_brown)

  //EYES 1
  //Right Eye Patch
  push();
  translate(3, -2.5);
  rotate(10);
  ellipse(0, 0, 5.5, 4);
  pop();

  //EYES 2

  //Eyeballs
  fill(0);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  fill(220);
  ellipse(-2.75, -3.4, 0.35, 0.4);
  ellipse(3.25, -3.4, 0.35, 0.4);

  //MOUTH
  fill(dark_brown);
  ellipse(0, 3, 10, 7);
  fill(0);
  rect(0, 2, 0.5, 2.75, 5);
  noFill();
  stroke(0);
  strokeWeight(0.5);
  curve(-1, 1, -1.5, 3.1, 1.5, 3.1, 1, 1);
  noStroke();

  //NOSE
  fill(0);
  ellipse(0, 0, 2);
}
