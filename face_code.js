/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1() {
  //yata brown (186,138,90)
  //yata light brown (229,192,154)
  //yata blush (255,204,255)
  //mouth dark (105,1,1)
  //tounge (239,157,139)
  scale(1.4);
  angleMode(RADIANS);
  //ears right
  beginShape();
    fill(186,138,90);
    strokeWeight(0.3);
    stroke(0);
    bezier(10,-6.2,6.67,-7.63,6,-7.2,2.8,-3.2);
    fill(229,192,154);
    bezier(10,-6.2,6.67,-7,6,-6.2,3,-2.2);
    bezier(10,-6.2,9.03,-4.27,6.69,-3.05,3.5,-1.5);
    noStroke();
    triangle(9.8,-6.1,4,-3,4.5,-2);
      //small ear
      strokeWeight(0.3);
      stroke(0);
      fill(186,138,90);
      bezier(4.2,-2.36,5.1,-3.33,6.33,-3.8,7,-3);
      fill(229,192,154);
      bezier(5,-1.25,6.18,-1.54,7.11,-2.46,7,-3);
      bezier(5,-2,5.1,-2.8,6.33,-3.5,7,-3);
      noStroke();
      triangle(5,-1,5,-2,6.85,-2.9);
  endShape();

  //ears left
  beginShape();
    fill(186,138,90);
    strokeWeight(0.3);
    stroke(0);
    bezier(-10,-6.2,-6.67,-7.63,-6,-7.2,-2.8,-3.2);
    fill(229,192,154);
    bezier(-10,-6.2,-6.67,-7,-6,-6.2,-3,-2.2);
    bezier(-10,-6.2,-9.03,-4.27,-6.69,-3.05,-3.5,-1.5);
    noStroke();
    triangle(-9.8,-6.1,-4,-3,-4.5,-2);
      //small ear
      strokeWeight(0.3);
      stroke(0);
      fill(186,138,90);
      bezier(-4.2,-2.36,-5.1,-3.33,-6.33,-3.8,-7,-3);
      fill(229,192,154);
      bezier(-5,-1.25,-6.18,-1.54,-7.11,-2.46,-7,-3);
      bezier(-5,-2,-5.1,-2.8,-6.33,-3.5,-7,-3);
      noStroke();
      triangle(-5,-1,-5,-2,-6.85,-2.9);
  endShape();

  //head
  noStroke();
  fill(186,138,90);
  ellipse(0,0,12,10);

  //brown patch
  noStroke();
  fill(229,192,154);
  arc(0, 0.5, 12, 9, 0.35, HALF_PI*1.772);
  ellipse(0,0.6,2,1)

  //nose
  fill(0);
  arc(0, 1.05, 1, 1, -2.5, -0.5);
  strokeWeight(0.1);
  stroke(0);
  line(0,1.05,0,1.55);

  //mouth
    //inside of mouth
    fill(105,1,1);
    noStroke();
    rect(-0.95,1.6,1.9,1.4);
    rect(-0.32,2.95,0.65,0.5);
    fill(105,1,1);
    stroke(0);
    bezier(0,3.5,0.78,3.45,1.1,3.01,1,1.9);
    bezier(-0,3.5,-0.78,3.45,-1.1,3.01,-1,1.9);
      //tounge
      noStroke();
      fill(239,157,139);
      arc(0, 3.5, 2, 1, -2.8, -0.3);
      noFill();
      stroke(0);
      bezier(0,3.5,0.78,3.45,1.1,3.01,1,1.9);
      bezier(-0,3.5,-0.78,3.45,-1.1,3.01,-1,1.9);
    //top of mouth
    stroke(0);
    fill(229,192,154);
    bezier(0,1.55,0.48,2.16,1.41,1.84,1.4,1.3);
    bezier(-0,1.55,-0.48,2.16,-1.41,1.84,-1.4,1.3);

  //blush
  noStroke();
  fill(255,204,255);
  ellipse(3.2,1.5,2.5,1);
  ellipse(-3.2,1.5,2.5,1);

  //eyes
  noStroke();
  fill(0);
  ellipse(2,0,2,2);
  ellipse(-2,0,2,2);

  fill(255);
  ellipse(1.5,-0.3,0.5,0.5);
  ellipse(2.3,-0.5,0.3,0.3);
  ellipse(-2.5,-0.3,0.5,0.5);
  ellipse(-1.7,-0.5,0.3,0.3);


  //outside of head stroke
  strokeWeight(0.3);
  stroke(0);
  noFill();
  ellipse(0,0,12,10);
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
