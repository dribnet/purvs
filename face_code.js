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
let beige = "#dbc6b4";


//********FACE ONE*******// (PANDA)

function drawFace1(tallness1, ear_type1) {
  fill(50);
  noStroke();
  let head_height1 = map(tallness1, 0, 100, 16, 18);

  //EARS 

  //EARS 1
  if(ear_type1 == 1){
    ellipse(-4, -6.5, 8);
    ellipse(4, -6.5, 8);
  }

  //EARS 2
  else if(ear_type1 == 2){
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
  rect(0, 3.25, 2.5, 0.5, 5);

  //noFill();
  //stroke(0);
  //strokeWeight(0.5);
  //arc(0, 1.5, 4, 4, PI/4, PI/4+PI/2);
  //noStroke();

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
  

  //EAR TYPE THREE

  //HEAD
  fill(mid_brown);
  ellipse(0, 0, 19, head_height2);

  //EYES
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
    fill(beige);
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

  //EARS

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

  //EYES

  fill(dark_brown)
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
