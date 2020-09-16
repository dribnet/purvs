/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1(h_thickness, b_thickness, height, blob,
                  e_shape, e_height, e_size, mouth, pupil,
                  colour, belly, m_open) {
  // h - head
  // b - body
  // e - eye
  // -10 to 10
  colorMode(RGB);
  height = height/10;
  h_thickness = h_thickness/10;
  b_thickness = h_thickness/2 + b_thickness/15;
  mouth = 0.5 - mouth/50;
  e_shape = e_shape/100;
  e_size = 0.5 - e_size/100;
  e_height = e_height/100 - 0.3;
  blob = 1 - blob/100;
  pupil = int(pupil/20);
  colour = map(colour, 0, 100, 0, 3);
  var ver = [];
  var bodver = [];

  var col1  = color(143,147,85);
  var col2 = color(149,174,132);
  var col3  = color(81,153,76);
  var col4  = color(75,123,80);
  var curCol = col1;

  if(colour < 1){
    curCol = lerpColor(col1, col2, colour);
  }
  else if(colour < 2){
    curCol = lerpColor(col2, col3, colour-1);
  }
  else if(colour <= 3){
    curCol = lerpColor(col3, col4, colour-2);
  }



  noStroke();
  ver.push(createVector(3 + h_thickness/4 - blob/4,0 - height*0.75)); // top right
  ver.push(createVector(1.8 + h_thickness/5 - blob/4,-0.4 - height*0.8));
  ver.push(createVector(1 + h_thickness/8 - blob/4,-0.3 - height*0.8));

  ver.push(createVector(0,0 - height*0.775));

  ver.push(createVector(-1 - h_thickness/8 + blob/4,-0.8 - height*0.8));
  ver.push(createVector(-1.8 - h_thickness/5 + blob/4,-0.8 - height*0.8));

  ver.push(createVector(-3 - h_thickness/4 + blob/4,0 - height*0.75)); // top left


  ver.push(createVector(-4 - h_thickness/4 + blob/3-b_thickness/25,3 - height*0.75));
  ver.push(createVector(-4.5 - h_thickness/4 + blob - b_thickness/20,4.5 - height*0.68));
  ver.push(createVector(-5 - h_thickness/4 + blob/2 - b_thickness/15,6.5 - height*0.6));

  // ver.push(createVector(-5.5 - blob/2.5 - b_thickness/8 - h_thickness/5,8 - height*0.35));

  ver.push(createVector(-5 - b_thickness/3, 9.5 - height/10)); // bottom left

  ver.push(createVector(0,10));

  ver.push(createVector(5 + b_thickness/3, 9.5 - height/10)); // bottom right

  ver.push(createVector(5 + h_thickness/4 - blob/2 + b_thickness/15,6.5 - height*0.6));
  ver.push(createVector(4.5 + h_thickness/4 - blob+b_thickness/20,4.5 - height*0.68));
  ver.push(createVector(4 + h_thickness/4 - blob/3+b_thickness/25,3 - height*0.75));

  beginShape();
    fill(curCol);
    noStroke();
    // curveTightness(map(mouseX, 0, width, 0, 1));

    curveVertex(ver[ver.length - 1].x,ver[ver.length-1].y);
    for(let i = 0; i < ver.length; i++){
      curveVertex(ver[i].x,ver[i].y);
    }
    curveVertex(ver[0].x,ver[0].y);
    curveVertex(ver[1].x,ver[1].y);
  endShape();





  bodver.push(createVector( 0, 4 - height*0.8)); // top
  bodver.push(createVector( 4 - blob/2 + b_thickness/15 + h_thickness/10,  6 - height*0.6));
  bodver.push(createVector( 3.5 + b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 3.5 - b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 4 + blob/2 - b_thickness/15 - h_thickness/10, 6 - height*0.6));


if(belly > 3){
    beginShape();
      fill(255,100);
      noStroke();
      curveVertex(bodver[bodver.length - 1].x,bodver[bodver.length-1].y);
      for(let i = 0; i < bodver.length; i++){
        curveVertex(bodver[i].x,bodver[i].y);
      }
      curveVertex(bodver[0].x,bodver[0].y);
      curveVertex(bodver[1].x,bodver[1].y);
    endShape();


}
  if(m_open > 4){
    fill(168,91,77);
    noStroke();
  }
  else{
    strokeWeight(0.3);
    stroke(red(curCol) - 18, green(curCol) - 25, blue(curCol) - 20);
    noFill();
  }

  bezier(-3 - h_thickness/4 + blob/3-b_thickness/25,2 - height*0.8, 0,2.5 -height*0.8 +mouth, 0,2.5 -height*0.8+mouth,
  3 + h_thickness/4 - blob/3+b_thickness/25,2 - height*0.7);

  noStroke();
  // if(true){
  if(false){
    for(let i = 0;i < ver.length; i++){
      fill(129,154,112);
      ellipse(ver[i].x,ver[i].y, 0.3,0.3);
    }
  }
  // head
  // eyes
  fill(71,77,67);
  ellipse(-2 - h_thickness/4, - height*0.75 + e_height, 2 + e_size);
  ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, 2 + e_size);
  fill(79,96,69);
  ellipse(-2 - h_thickness/4, - height*0.75 + e_height, (2 + e_size)*0.8);
  ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, (2 + e_size)*0.8);

  if(pupil == 1){
    fill(255);
    ellipse(-2.2 - h_thickness/4,-0.2 - height*0.75 + e_height, (2 + e_size)/2);
    ellipse(2.2 + h_thickness/4, 0.4 - height*0.75 + e_height, (2 + e_size)/2);

  }
  else if(pupil == 10){
    fill(71,77,67);

    ellipse(-2 - h_thickness/4, - height*0.75 + e_height, 2 + e_size,1);
    ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, 2 + e_size,1);
  }
  else if(pupil == 0){
    fill(255);
    ellipse(-2.2 - h_thickness/4,-0.2 - height*0.75 + e_height, (2 + e_size)/2.5);
    ellipse(-1.6 - h_thickness/4,0.1 - height*0.75 + e_height, (2 + e_size)/3.5);
    ellipse(1.8 + h_thickness/4, 0.4 - height*0.75 + e_height, (2 + e_size)/2.5);
    ellipse(2.4 + h_thickness/4,0.7 - height*0.75 + e_height, (2 + e_size)/3.5);

  }

}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function drawFace2(h_thickness, b_thickness, height, h_height,
                  e_shape, e_height, e_size, mouth, pupil,
                  colour, belly, m_open) {

  height = height/10;
  h_thickness = h_thickness/10;
  b_thickness = h_thickness/2 + b_thickness/15;
  mouth = 0.5 - mouth/50;
  e_shape = e_shape/100;
  e_size = 0.5 - e_size/100;
  e_height = e_height/100 - 0.3;
  h_height = h_height/50;
  pupil = int(pupil/20);
  colour = map(colour, 0, 100, 0, 3);
  var ver = [];
  var headver = [];

  ver.push(createVector( 2.5 + b_thickness/2.5,2 -height/2)); // top right

  ver.push(createVector( 0, -height/2));

  ver.push(createVector( -2.5 - b_thickness/2.5,2 -height/2)); // top left
  ver.push(createVector( -4 - b_thickness/2, 6 - height/3));


  ver.push(createVector( -3 - b_thickness/2.5, 9.5 - height/10)); // bottom left
  ver.push(createVector( 3 + b_thickness/2.5, 9.5 - height/10)); // bottom right
  ver.push(createVector( 4 + b_thickness/2, 6 - height/3));


  fill(149,174,132);
  noStroke();
  push();
  translate(1,0);
    beginShape();

        curveVertex(ver[ver.length - 1].x,ver[ver.length-1].y);
      for(let i = 0; i < ver.length; i++){
        curveVertex(ver[i].x,ver[i].y);
      }
      curveVertex(ver[0].x,ver[0].y);
      curveVertex(ver[1].x,ver[1].y);
    endShape();
  pop();
  // head
  if(true){
  // if(false){
    for(let i = 0;i < ver.length; i++){
      fill(129,154,112);
      ellipse(ver[i].x,ver[i].y, 0.3,0.3);
    }
  }

  headver.push( createVector( -4, -1 - h_height - height/3) );
  headver.push( createVector( 1, -1 - h_height - height/3) );
  headver.push( createVector( 1, 3 - h_height - height/3) );
  headver.push( createVector( -4, 3 - h_height - height/3) );

  push();
    beginShape();

        curveVertex(headver[headver.length - 1].x,headver[headver.length-1].y);
      for(let i = 0; i < headver.length; i++){
        curveVertex(headver[i].x,headver[i].y);
      }
      curveVertex(headver[0].x,headver[0].y);
      curveVertex(headver[1].x,headver[1].y);
    endShape();
  pop();


  noStroke();
  fill(149,174,132);

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
