/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1() {
  rectMode(CENTER);
  angleMode(RADIANS);
    noStroke();

  fill(240,200,10);

  rect(0,-7.5,7,3,0.5,0.5,0,0);
  rect(0,1,17,14,2.5);
  rect(0,9,10,2);

    fill(240,240,40,100);
  rect(0,-7.5,4.5,3,0.5,0.5,0,0);
  rect(0,1,13,14,2.5);
  rect(0,9,7,2);

      fill(165,42,42,30);
  rect(0,8.5,10,1);

  fill(0);
  ellipse(-3,-0.5,2,2);
  ellipse(3,-0.5,2,2);

  stroke(0);
  noFill();
  strokeWeight(0.4);
  arc(0,3.5,4,2,0,PI);
  strokeWeight(1);
  stroke(255,70);
  arc(-4,-3.5,2,2,PI,PI+HALF_PI);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(thinness_value) {
  rectMode(CENTER);
  angleMode(RADIANS);
    noStroke();

  fill(240,200,10);

  rect(0,-7.5,7,3,0.5,0.5,0,0);
  rect(0,1,17,14,2.5);
  rect(0,9,10,2);

    fill(240,240,40,100);
  rect(0,-7.5,4.5,3,0.5,0.5,0,0);
  rect(0,1,13,14,2.5);
  rect(0,9,7,2);

      fill(165,42,42,30);
  rect(0,8.5,10,1);

  fill(0);
  ellipse(-3,-0.5,2,2);
  ellipse(3,-0.5,2,2);

  stroke(0);
  noFill();
  strokeWeight(0.4);
  arc(0,3.5,4,2,0,PI);
  strokeWeight(1);
  stroke(255,70);
  arc(-4,-3.5,2,2,PI,PI+HALF_PI);
}

/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function drawFace3(tilt_value, eye_value, mouth_value) {
  rectMode(CENTER);
  angleMode(RADIANS);
    noStroke();

  fill(240,200,10);

  rect(0,-7.5,7,3,0.5,0.5,0,0);
  rect(0,1,17,14,2.5);
  rect(0,9,10,2);

    fill(240,240,40,100);
  rect(0,-7.5,4.5,3,0.5,0.5,0,0);
  rect(0,1,13,14,2.5);
  rect(0,9,7,2);

      fill(165,42,42,30);
  rect(0,8.5,10,1);

  fill(0);
  ellipse(-3,-0.5,2,2);
  ellipse(3,-0.5,2,2);

  stroke(0);
  noFill();
  strokeWeight(0.4);
  arc(0,3.5,4,2,0,PI);
  strokeWeight(1);
  stroke(255,70);
  arc(-4,-3.5,2,2,PI,PI+HALF_PI);
}
