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

  fill(curCol);
  noStroke();
  drawCurves(ver);





  bodver.push(createVector( 0, 4 - height*0.8)); // top
  bodver.push(createVector( 4 - blob/2 + b_thickness/15 + h_thickness/10,  6 - height*0.6));
  bodver.push(createVector( 3.5 + b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 3.5 - b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 4 + blob/2 - b_thickness/15 - h_thickness/10, 6 - height*0.6));


if(belly > 3){
  fill(255,100);
  noStroke();
  drawCurves(bodver);

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
  mouth = 0.5 - mouth/100;
  e_shape = e_shape/100;
  e_size = 0.5 - e_size/100;
  e_height = e_height/100 - 0.3;
  h_height = h_height/20;
  pupil = int(pupil/20);
  colour = map(colour, 0, 100, 0, 3);
  var ver = [];
  var headver = [];
  var bodver = [];

  var curCol = color(149,174,132);

  ver.push(createVector( 2.5 + b_thickness/3.4,2 -height/2)); // top right

  ver.push(createVector( 0, -height/2));

  ver.push(createVector( -2.5 - b_thickness/3.5,2 -height/2)); // top left
  ver.push(createVector( -4 - b_thickness/3, 6 - height/3));


  ver.push(createVector( -3 - b_thickness/3.5, 9.5 - height/10)); // bottom left
  ver.push(createVector( 3 + b_thickness/3.5, 9.5 - height/10)); // bottom right
  ver.push(createVector( 4 + b_thickness/3, 6 - height/3));


  fill(149,174,132);
  noStroke();
  push();
    translate(1,0);
    drawCurves(ver);
  pop();
  // head
  // if(true){
  if(false){
    for(let i = 0;i < ver.length; i++){
      fill(129,154,112);
      ellipse(ver[i].x,ver[i].y, 0.3,0.3);
    }
  }
  headver.push( createVector( -5 - h_thickness/10, 2 - h_height - height/3) );

  headver.push( createVector( -4.5 - h_thickness/12, -0 - h_height - height/3) ); // top left
  headver.push( createVector( -2, -1 - h_height - height/3) );

  headver.push( createVector( 0.5 + h_thickness/10, -0 - h_height - height/3) ); // top right

  headver.push( createVector( 0.5 + h_thickness/10, 2 - h_height - height/3) );

  headver.push( createVector( 0.5 + h_thickness/10, 3.5 - h_height - height/3) ); // bottom right
  headver.push( createVector( -2, 5 - h_height - height/3) );

  headver.push( createVector( -4.5 - h_thickness/12, 3.5 - h_height - height/3) ); // bottom left
  push();
  scale(1);
  translate(0,2);
    push();
      translate(0,3);

      drawCurves(headver);
    pop();

    angleMode(RADIANS);

    for(var i = -1; i < 2; i+= 2){
      push();
        translate(i * 1.8, 0);
        translate(-2,4 -height/3 - h_height);
        rotate(e_size* i + PI/18 * -i);


        if(e_size < -0.1){
          noFill();
          strokeWeight(0.2);
          stroke(red(curCol) - 18, green(curCol) - 25, blue(curCol) - 20);
          arc(0,-0.4,2,0.2 + e_shape,PI + 0.2,-0.2,OPEN);
        }
        fill(0);
        noStroke();
        arc(0,0,2,0.2 + e_shape,PI,0,CHORD);
        arc(0,0,2,2,0,PI,CHORD);
      pop();
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
    push();
    translate(-2,-height/3 + 5 - h_height);
      bezier(-1,0,0,mouth,0,mouth,1,0);
    pop();
  pop();

  noStroke();
  fill(149,174,132);

  // rect(-5, -10, 10, 20);

  // eyes
  fill(240);

}



















function drawFace3(h_thickness, s_length, height, s_height,
                  e_shape, e_height, s_width, mouth, pupil,
                  colour, belly, m_open) {
  // s - snout
  scale(1.2,1);
  translate(1,0);
  height = height/10;
  h_thickness = h_thickness/10;
  s_length = s_length/10;
  mouth = 0.5 - mouth/50;
  e_shape = e_shape/100;
  // e_size = 0.5 - e_size/100;
  s_width = 0.2 - s_width/100;
  e_height = e_height/100 - 0.3;
  s_height = s_height/10;
  pupil = int(pupil/20);
  colour = map(colour, 0, 100, 0, 3);
  var ver = [];
  var bodver = [];
  var eyeverL = [];
  var eyeverR = [];
  var tonver = [];

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
  else if(colour <= 2.8){
    curCol = lerpColor(col3, col4, colour-2);
  }
  else{
    curCol = color(220,150,70);
  }

  if(belly < 1){
    scale(-1,1);
  }

  ver.push(createVector( -0.5 - s_length/10 - h_thickness/8, -4 + s_height/10 + s_width - height/6)); // top left
  ver.push(createVector( 3 +h_thickness/8, -3 - height/10)); // top right


  ver.push(createVector( 5 + h_thickness/8, 3 + height/6)); // bottom right

  ver.push(createVector( 3  + h_thickness/8, 5 + height/6));
  ver.push(createVector( -1 - s_length/8 - h_thickness/8, 5 + height/6));


  ver.push(createVector( -1 - s_length/8 - h_thickness/8, 3 + height/6)); // bottom left

  ver.push(createVector( -2 - s_length/8 - h_thickness/8, 1 + s_height/10 - s_width*0.8 + height/10));

  ver.push(createVector( -2.5 - s_length/6 - h_thickness/5 , 0 + s_height/7 - height/10 - s_width*1.2));

  ver.push(createVector( -3 - s_length/4 - h_thickness/3, -2 + s_height/5 - height/10));

  if(e_shape < 0.75){
    noStroke();
    fill(0);
    ellipse( -2.5 -h_thickness/8 - s_length/6, -2 - height/10 - e_height, 2);
  }


  fill(curCol);
  noStroke();
  drawCurves(ver);

  tonver.push(createVector( -0 - s_length/10 - h_thickness/8, -1 + s_height/10 + s_width - height/6)); // top left
  tonver.push(createVector( 3 +h_thickness/8, 0 - height/10)); // top right
  tonver.push(createVector( 4 + h_thickness/8, 3 + height/6)); // bottom right
  tonver.push(createVector( 3  + h_thickness/8, 5 + height/6));
  tonver.push(createVector( -1 - s_length/8 - h_thickness/8, 5 + height/6));
  tonver.push(createVector( -1 - s_length/8 - h_thickness/8, 3 + height/6)); // bottom left
  tonver.push(createVector( -2 - s_length/8 - h_thickness/8, 1 + s_height/10 - s_width * 0.8 + height/10));
  tonver.push(createVector( -2.5 - s_length/6 - h_thickness/5 , 0 + s_height/7 - height/10 - s_width*1.2));
  tonver.push(createVector( -2.4 - s_length/4 - h_thickness/3, -1 + s_height/5 - height/10));
  tonver.push(createVector( -2.6 - s_length/4 - h_thickness/3, -2 + s_height/5 - height/10));



  if(e_shape < 0.3 && (h_thickness > 0.15 || s_length > 0.15) && s_height < 8){ // can see entire tri when snout is too small
    eyeverL.push( createVector( -1.5-h_thickness/8- s_length/6,  -2 - height/10 - e_height) );
    eyeverL.push( createVector( 1.5-h_thickness/8- s_length/6,  -2 - height/10 - e_height) );
    eyeverL.push( createVector( 0-h_thickness/8- s_length/6, -4 - height/10 - e_height) );

    eyeverR.push( createVector( -1.5+h_thickness/8,  -2 - height/10 - e_height) );
    eyeverR.push( createVector( 1.5+h_thickness/8,  -1.5 - height/10 - e_height) );
    eyeverR.push( createVector( 0+h_thickness/8, -4 - height/10 - e_height) );
    push();
      translate(1.9,0);
      drawCurves(eyeverR);
    pop();

    push();
      translate(-2.2 + s_width,0.5);
      scale(0.8,1);
      drawCurves(eyeverL);
    pop();
  }
  else if(e_shape > 0.75){
    eyeverR.push( createVector( -1.5+h_thickness/8 - s_length/6,  -2 - height/10 - e_height) );
    eyeverR.push( createVector( 1.5+h_thickness/8 - s_length/6,  -1.5 - height/10 - e_height) );
    eyeverR.push( createVector( 0+h_thickness/8 - s_length/6, -4 - height/10 - e_height) );
    push();
      translate(0.5,-0.2);
      drawCurves(eyeverR);
    pop();

  }


  if(belly > 3){
    push();
      fill(200,180,200,220);
      drawCurves(tonver);
    pop();
  }

  // if(true){
  if(false){
    for(let i = 0;i < ver.length; i++){
      fill(129,154,112);
      ellipse(ver[i].x,ver[i].y, 0.3,0.3);
    }
  }


  if(e_shape > 0.875){
    fill(0);
    // arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,2,0.2,PI,0,CHORD);
    arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,2,2,-0.2,PI- 0.2,CHORD);
    fill(75,90,70);
    arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,1.6,1.6,-0.2,PI-0.2,CHORD);
  }
  else if(e_shape > 0.75){
    fill(0);
    ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height, 2);
    fill(75,90,70);
    ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height, 1.6);
  }
  else{
    fill(0);
    ellipse( 2 +h_thickness/8, -2 - height/10 - e_height, 2);
    if(pupil != 2){
      fill(75,90,70);
      ellipse( 2 +h_thickness/8, -2 - height/10 - e_height, 1.6);
    }
  }

  if(pupil == 0){
    if(e_shape > 0.75 && e_shape < 0.875){
      fill(255);
      ellipse( 0.2 +h_thickness/8, -2.2 - height/10 - e_height, 0.8);
      ellipse( 0.7 +h_thickness/8, -1.7 - height/10 - e_height, 0.3);
    }
    else if(e_shape < 0.75){
      fill(255);
      ellipse( 1.7 +h_thickness/8, -2.2 - height/10 - e_height, 0.8);
      ellipse( 2.2 +h_thickness/8, -1.7 - height/10 - e_height, 0.3);
    }
  }
  else if(pupil == 1){
    if(e_shape > 0.75 && e_shape < 0.875){
      fill(0);
      ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height,2, 1);
    }
    else if(e_shape < 0.75){
      fill(0);
      ellipse( 2 +h_thickness/8, -2 - height/10 - e_height,2, 1);
    }
  }

  stroke(red(curCol) - 45, green(curCol) - 35, blue(curCol) - 40);
  strokeWeight( 0.3);
  noFill();
  push();
    bezier( -2.8 - s_length/4 - h_thickness/3, -2 + s_height/5 - height/10,
          0.5,mouth/2 - height/10,
          1.5,0.5 + mouth - height/10,
          2 + h_thickness/5,-height/10);
  pop();
}




function drawCurves(ver){
  beginShape();
    // curveTightness(map(mouseX, 0, width, 0, 1));
    curveVertex(ver[ver.length - 1].x,ver[ver.length-1].y);
    for(let i = 0; i < ver.length; i++){
      curveVertex(ver[i].x,ver[i].y);
    }
    curveVertex(ver[0].x,ver[0].y);
    curveVertex(ver[1].x,ver[1].y);
  endShape();
}
