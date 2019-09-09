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


//********FACE ONE*******//

function drawFace1(tallness1) {
  fill(50);
  noStroke();
  let head_height1 = map(tallness1, 0, 100, 14, 18);

  //EARS
  //MAP TO HEAD HEIGHT !!!
  ellipse(-4, -6.5, 8);
  ellipse(4, -6.5, 8);
  
  //HEAD
  fill(230);
  rectMode(CENTER);
  rect(0, 0, 20, head_height1, 10);

  //EYES
  fill(50);

  //Left Eye Patch
  push();
  translate(-3, -2.5);
  rotate(-PI/10);
  ellipse(0, 0, 5.5, 4);
  pop();
  //Right Eye Patch
  push();
  translate(3, -2.5);
  rotate(PI/10);
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
  noFill();
  stroke(0);
  strokeWeight(0.5);
  //arc(0, 1.5, 4, 4, PI/4, PI/4+PI/2);
  noStroke();

  //NOSE
  fill(0);
  ellipse(0, 0, 2);

}



//********FACE TWO*******//

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(tallness2) {
  fill(mid_brown);
  noStroke();
  let head_height2 = map(tallness2, 0, 100, 14, 18);


  //EARS
  //MAP TO HEAD HEIGHT !!!
  ellipse(-5, -6, 8);
  ellipse(5, -6, 8);
  fill(light_pink);
  ellipse(-5, -6, 6);
  ellipse(5, -6, 6);

  //HEAD
  fill(mid_brown);
  ellipse(0, 0, 20, head_height2);

  //EYES
  fill(light_brown);

  //Left Eye Patch
  push();
  translate(-3, -2.5);
  rotate(-PI/10);
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
  fill(light_brown);
  ellipse(0, 3, 8, 7);
  fill(0);
  rectMode(CENTER);
  rect(0, 2, 0.5, 2.75, 5);
  noFill();
  stroke(0);
  strokeWeight(0.5);
  //arc(0, 1.5, 4, 4, PI/4, PI/4+PI/2);
  noStroke();

  //NOSE
  fill(0);
  ellipse(0, 0, 2);
}


//********FACE THREE*******//

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tallness3) {
  fill(beige);
  noStroke();
  rectMode(CENTER);
  let head_height3 = map(tallness3, 0, 100, 17, 20);

  //EARS
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
  
  //HEAD
  fill(beige);
  ellipse(0, 0, 20, head_height3);

  //EYES

  fill(dark_brown)
  //Right Eye Patch
  push();
  translate(3, -2.5);
  rotate(PI/10);
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
  //arc(0, 1.5, 4, 4, PI/4, PI/4+PI/2);
  noStroke();

  //NOSE
  fill(0);
  ellipse(0, 0, 2);
}
