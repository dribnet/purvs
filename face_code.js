/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

function roughRect(x,y,width,length){
strokeWeight(random(0.1,0.4));
rect(x,y,width,length);
stroke(0);
line(x+random(-3,3),y,x+width,y);
strokeWeight(random(0.1,0.4));
line(x+width,y,x+width+random(-3,3),y+length);
strokeWeight(random(0.1,0.4));
line(x+width,y+length+random(-3,3),x,y+length);
strokeWeight(random(0.1,0.4));
line(x,y+length,x,y+random(-3,3));
}
function roughEllipse(x,y,width,length){
  ellipse(x,y,width,length);
  noFill();
  stroke(0);
  strokeWeight(random(0.1,0.3));
  ellipse(x+random(-1,1),y+random(-1,1),width,length);

}
function drawFace1() {
  fill(160,70,80);
  noStroke();
  // head
  roughEllipse(0, 0, 20,thinness_value/5);
  // eyes
  fill(10,110,180);
  roughEllipse(-3, -3, 3);
  fill(10,110,110);
  roughEllipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(thinness_value) {
  // head
  noStroke();
  fill(100, 150, 150);
  let head_width = map(thinness_value/4, 0, 100, 8, 20);
  roughRect(-head_width/2, -9, head_width, 18);
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
  const bg_color3 = [125, 206, 187];
  const fg_color3 = [151, 102, 152];

  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value*10);

  noStroke();
  fill(fg_color3);
  roughEllipse(0, 0, 30/2*tilt_value/100, 40/2);

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
  ellipse(0/2, 7/2, 15/2, tilt_value/3);
}
