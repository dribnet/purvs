/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1(h_thickness, b_thickness, height, blob,
                  e_shape, e_height, e_size, e_shape, pupil) {
  // h - head
  // b - body
  // e - eye
  // -10 to 10
  height = height/10;
  b_thickness = b_thickness/10;
  h_thickness = h_thickness/10;
  var ver = [];
  noStroke();


  ver.push(createVector(3 + h_thickness/4,0 - height*0.75)); // top right
  ver.push(createVector(-3 - h_thickness/4,0 - height*0.75)); // top left
  ver.push(createVector(-5 - b_thickness/3, 9 - height/10)); // bottom left

  ver.push(createVector(0,9.9));

  ver.push(createVector(5 + b_thickness/3, 9 - height/10)); // bottom right


  beginShape();
    fill(149,174,132);
    curveVertex(ver[ver.length - 1].x,ver[ver.length-1].y);
    for(let i = 0; i < ver.length; i++){
      curveVertex(ver[i].x,ver[i].y);
    }
    curveVertex(ver[0].x,ver[0].y);
    curveVertex(ver[1].x,ver[1].y);
  endShape();

  for(let i = 0;i < ver.length; i++){
    fill(129,154,112);
    ellipse(ver[i].x,ver[i].y, 0.5,0.5);
  }
  // head
  // eyes
  fill(200);
  ellipse(-3 - h_thickness/4, - height*0.75, 3);
  ellipse(3 + h_thickness/4, - height*0.75, 3);
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
