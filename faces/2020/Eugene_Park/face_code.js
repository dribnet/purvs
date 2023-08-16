/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

var isOutlined = true; // white outline
var isGuided = false; // 20x20 border guide


function drawFace1(h_thickness, b_thickness, height, blob,
                  e_shape, e_height, e_size, mouth, pupil,
                  colour, belly, m_open) {
  // h - head
  // b - body
  // e - eye
  // -10 to 10

  if(isGuided){
    stroke(0);
    strokeWeight(0.1);
    noFill();
    rect(-10,-10,20,20);
  }
  if(isOutlined){
    translate(0,-0.6);
  }
  colorMode(RGB);

  b_thickness = h_thickness/2 + b_thickness/15;

  pupil = int(pupil);
  var ver = [];
  var bodver = [];

  var col1  = color(167,195,126);
  var col2 = color(149,174,132);
  var col3  = color(90,140,80);
  var col4  = color(78,129,85);
  var col5  = color(80,70,57);
  var curCol = col1;

  if(colour < 1){
    curCol = lerpColor(col1, col2, colour);
  }
  else if(colour < 2){
    curCol = lerpColor(col2, col3, colour-1);
  }
  else if(colour <= 2.9){
    curCol = lerpColor(col3, col4, colour-2);
  }
  else{
    curCol = col5;
  }


  // vertices for curveVertex
  noStroke();
  // body
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
  ver.push(createVector(-5 - b_thickness/3, 9.5 - height/10)); // bottom left
  ver.push(createVector(0,10));
  ver.push(createVector(5 + b_thickness/3, 9.5 - height/10)); // bottom right
  ver.push(createVector(5 + h_thickness/4 - blob/2 + b_thickness/15,6.5 - height*0.6));
  ver.push(createVector(4.5 + h_thickness/4 - blob+b_thickness/20,4.5 - height*0.68));
  ver.push(createVector(4 + h_thickness/4 - blob/3+b_thickness/25,3 - height*0.75));
  //belly
  bodver.push(createVector( 0, 4 - height*0.8)); // top
  bodver.push(createVector( 4 - blob/2 + b_thickness/15 + h_thickness/10,  6 - height*0.6));
  bodver.push(createVector( 3.5 + b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 3.5 - b_thickness/5, 9.5 - height/10));
  bodver.push(createVector( - 4 + blob/2 - b_thickness/15 - h_thickness/10, 6 - height*0.6));

  if(isOutlined){ // for sticker effect
    strokeWeight(1);
    stroke(255);
    noFill();
    drawCurves(ver);
    drawCurves(bodver);
    line(0.5 + h_thickness/4, 0 - height*0.75 + e_height - e_size/2,
        0.5 + h_thickness/4 + 1.2, 0 - height*0.75 + e_height - 0.6 - e_size/2);
    line(-0.5 - h_thickness/4, -0.6 - height*0.75 + e_height - e_size/2,
        -0.5 - h_thickness/4 - 1.2, -0.6 - height*0.75 + e_height - 0.6 - e_size/2); // brow
    ellipse(-2 - h_thickness/4, - height*0.75 + e_height, 2 + e_size); // eyes
    ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, 2 + e_size);
  }



  fill(curCol);
  noStroke();
  drawCurves(ver); // fill body

if(belly > 3){
  fill(255,100);
  noStroke();
  drawCurves(bodver); // fill belly
}
  if(m_open > 4){
    fill(168,91,77); // fill mouth
    noStroke();
    bezier(-3 - h_thickness/4 + blob/3-b_thickness/25,2 - height*0.8,
          0, 2.5 -height*0.8 +mouth * 1.3,
          0, 2.5 -height*0.8+mouth * 1.3,
          3 + h_thickness/4 - blob/3 + b_thickness/25,2.3 - height*0.7);
  }
  else{ // stroke mouth
    strokeWeight(0.3);
    stroke(red(curCol) - 45, green(curCol) - 35, blue(curCol) - 40);
    noFill();
    bezier(-3 - h_thickness/4 + blob/3-b_thickness/25,2 - height*0.8, 0,2.5 -height*0.8 +mouth, 0,2.5 -height*0.8+mouth,
    3 + h_thickness/4 - blob/3+b_thickness/25,2 - height*0.7);
  }



  noStroke(); // guide points
  // if(true){
  if(false){
    for(let i = 0;i < ver.length; i++){
      fill(129,154,112);
      ellipse(ver[i].x,ver[i].y, 0.3,0.3);
    }
  }

  eyeCol = lerpColor( color(50,55,45), curCol, 0.4);
  eyeFillCol = lerpColor( color(71,77,67), curCol, 0.6);
  if(colour > 2.8){
    eyeCol = lerpColor( color(0), curCol, 0.4);
    eyeFillCol = lerpColor( color(0), curCol, 0.6);
  }

  fill(eyeCol);
  ellipse(-2 - h_thickness/4, - height*0.75 + e_height, 2 + e_size);
  ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, 2 + e_size);
  fill(eyeFillCol);
  ellipse(-2 - h_thickness/4, - height*0.75 + e_height, (2 + e_size)*0.8);
  ellipse(2 + h_thickness/4,0.6 - height*0.75 + e_height, (2 + e_size)*0.8);

  if(pupil == 1){
    fill(255);
    ellipse(-2.2 - h_thickness/4,-0.2 - height*0.75 + e_height, (2 + e_size)/2);
    ellipse(2.2 + h_thickness/4, 0.4 - height*0.75 + e_height, (2 + e_size)/2);

  }
  else if(pupil == 10){
    fill(eyeCol);

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


  if(e_shape >= 0.5){ // eyebrows
    col = lerpColor(color(red(curCol)-45,green(curCol)-35,blue(curCol)-40),color(71,77,67),0.5);
    stroke(col);
    strokeWeight(0.3);
    noFill();
    line(0.5 + h_thickness/4, 0 - height*0.75 + e_height - e_size/2,
        0.5 + h_thickness/4 + 1.2, 0 - height*0.75 + e_height - 0.6 - e_size/2);

    line(-0.5 - h_thickness/4, -0.6 - height*0.75 + e_height - e_size/2,
        -0.5 - h_thickness/4 - 1.2, -0.6 - height*0.75 + e_height - 0.6 - e_size/2);

  }
}



function drawFace3(h_thickness, s_length, height, s_height,
                  e_shape, e_height, s_width, mouth, pupil,
                  colour, belly, m_open) {
  // s - snout
  if(isGuided){
    stroke(0);
    strokeWeight(0.1);
    noFill();
    rect(-10,-10,20,20);
  }

  angleMode(RADIANS);
  fill(240);
  scale(1.2,1);
  translate(1,0);

  pupil = int(pupil);
  var ver = [];
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

  eyeCol = lerpColor( color(71/2,77/2,67/2), curCol, 0.34);
  eyeFillCol = lerpColor( color(71,77,67), curCol, 0.6);

  if(belly < 1){
    scale(-1,1);
  }

  //body vertices
  ver.push(createVector( -0.5 - s_length/10 - h_thickness/8, -4 + s_height/10 + s_width - height/6)); // top left
  ver.push(createVector( 3 +h_thickness/8, -3 - height/10)); // top right
  ver.push(createVector( 5 + h_thickness/8, 3 + height/6)); // bottom right
  ver.push(createVector( 3  + h_thickness/8, 5 + height/6));
  ver.push(createVector( -1 - s_length/8 - h_thickness/8, 6 + height/6));
  ver.push(createVector( -1 - s_length/8 - h_thickness/8, 3 + height/6)); // bottom left
  ver.push(createVector( -2 - s_length/8 - h_thickness/8, 1 + s_height/10 - s_width*0.8 + height/10));
  ver.push(createVector( -2.5 - s_length/6 - h_thickness/5 , 0 + s_height/7 - height/10 - s_width*1.2));
  ver.push(createVector( -3 - s_length/4 - h_thickness/3, -2 + s_height/5 - height/10));
  // belly
  tonver.push(createVector( -0 - s_length/10 - h_thickness/8, -1 + s_height/10 + s_width - height/6)); // top left
  tonver.push(createVector( 3 +h_thickness/8, 0 - height/10)); // top right
  tonver.push(createVector( 4 + h_thickness/8, 3 + height/6)); // bottom right
  tonver.push(createVector( 3  + h_thickness/8, 5 + height/6));
  tonver.push(createVector( -1 - s_length/8 - h_thickness/8, 6 + height/6));
  tonver.push(createVector( -1 - s_length/8 - h_thickness/8, 3 + height/6)); // bottom left
  tonver.push(createVector( -2 - s_length/8 - h_thickness/8, 1 + s_height/10 - s_width * 0.8 + height/10));
  tonver.push(createVector( -2.5 - s_length/6 - h_thickness/5 , 0 + s_height/7 - height/10 - s_width*1.2));
  tonver.push(createVector( -2.4 - s_length/4 - h_thickness/3, -1 + s_height/5 - height/10));
  tonver.push(createVector( -2.6 - s_length/4 - h_thickness/3, -2 + s_height/5 - height/10));

  // eyelids
  if(e_shape < 0.3 && (h_thickness > 0.15 || s_length > 0.15) && s_height < 8){ // can see entire tri when snout is too small
    eyeverL.push( createVector( -0.8-h_thickness/5- s_length/4.5,  -2 - height/10 - e_height) );
    eyeverL.push( createVector( 1.5-h_thickness/8- s_length/6,  -2 - height/10 - e_height) );
    eyeverL.push( createVector( 0-h_thickness/8- s_length/6, -4 - height/8 - e_height) );

    eyeverR.push( createVector( -1.5+h_thickness/8,  -2 - height/10 - e_height) );
    eyeverR.push( createVector( 1.5+h_thickness/8,  -1.5 - height/10 - e_height) );
    eyeverR.push( createVector( 0+h_thickness/8, -4 - height/7 - e_height) );
  }
  else if(e_shape > 0.75){ // facing side
    eyeverR.push( createVector( -1.5+h_thickness/8,  -2 - height/10 - e_height) );
    eyeverR.push( createVector( 1.5+h_thickness/8 ,  -1.5 - height/10 - e_height) );
    eyeverR.push( createVector( 0+h_thickness/8, -4 - height/7 - e_height) );
  }

  /////////////outlines/////////////////
  if(isOutlined){
    strokeWeight(1);
    stroke(255);
    noFill();
    drawCurves(ver);
    drawCurves(tonver);
    if(e_shape < 0.3 && (h_thickness > 0.15 || s_length > 0.15) && s_height < 8){ // can see entire tri when snout is too small
      push();
        translate(1.9,0);
        drawCurves(eyeverR);
      pop();

      push();
        translate(-1.8,0.5);
        // scale(0.8,1);
        drawCurves(eyeverL);
      pop();
    }
    else if(e_shape > 0.75){
      push();
        translate(0.5,-0.2);
        drawCurves(eyeverR);
      pop();
      }
    if(e_shape < 0.75){
      ellipse( -2.5 -h_thickness/8 - s_length/6, -2 - height/10 - e_height, 2); // outline
    }
  }




  if(e_shape < 0.75){ // draw back eye if not sideways
    noStroke();
    fill(eyeCol);
    ellipse( -2.5 -h_thickness/8 - s_length/6, -2 - height/10 - e_height, 2);
  }

  fill(curCol);
  noStroke();
  drawCurves(ver);


  if(e_shape < 0.3 && (h_thickness > 0.15 || s_length > 0.15) && s_height < 8){ // can see entire tri when snout is too small
    push(); // facing 3/4 so both eyelids
      translate(1.9,0);
      drawCurves(eyeverR);
    pop();
    push();
      translate(-1.8,0.5);
      // scale(0.8,1);
      drawCurves(eyeverL);
    pop();
  }
  else if(e_shape > 0.75){ // facing side ways so one eyelid
    push();
      translate(0.5,-0.2);
      drawCurves(eyeverR);
    pop();

    }


  if(belly > 4){
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



  if(e_shape > 0.875){ // slanted 50%
    fill(eyeCol);
    // arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,2,0.2,PI,0,CHORD);
    arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,2,2,-0.2,PI- 0.2,CHORD);
    fill(75,90,70);
    arc( 0.5 +h_thickness/8, -2 - height/10 - e_height,1.6,1.6,-0.2,PI-0.2,CHORD);

  }
  else if(e_shape > 0.75){ // sideways
    fill(eyeCol);
    ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height, 2);
    fill(eyeFillCol);
    ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height, 1.6);
  }
  else{
    fill(eyeCol);
    ellipse( 2 +h_thickness/8, -2 - height/10 - e_height, 2);
    if(pupil != 2){
      fill(eyeFillCol);
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
      fill(eyeCol);
      ellipse( 0.5 +h_thickness/8, -2 - height/10 - e_height,2, 0.8);
    }
    else if(e_shape < 0.75){
      fill(eyeCol);
      ellipse( 2 +h_thickness/8, -2 - height/10 - e_height,2, 0.8);
    }
  }

  // mouth
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
