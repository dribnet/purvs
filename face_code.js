/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1(length, curly, e, hair) {

 
  let whiteHair = color(232, 237, 237);
  let blondeHair = color(255, 218, 115);
  let gingerHair = color(230, 150, 90);
  let brownHair = color(181, 91, 58);
  let blackHair = color(0, 0, 0);
  let hairColour;

  let curl = map(curly, 0, 100, 180, -90);
  angleMode(DEGREES);
  let L = map(length, 0, 100, 0, 340);
  let eyeSize = e;
  fill(255, 218, 115);
  stroke(230, 188, 73);

  //hair colour temp
  if(hair < 25){
    hairColour = lerpColor(whiteHair, blondeHair, hair/25);
  } else if(hair < 50){
    hairColour = lerpColor(blondeHair, gingerHair, (hair-25)/25);
  } else if(hair < 75){
   hairColour = lerpColor(gingerHair, brownHair, (hair-50)/25);
  } else{
    hairColour = lerpColor(brownHair, blackHair, (hair-75)/25);
  } 
  
  fill(hairColour);

 //stroke(255, 218, 115);
 strokeWeight(width/960/10);
 randomSeed(23);
 print(width);

  push();
  drawHair(L, curly, hairColour);
  pop();

  fill(200, 150, 150);
  noStroke();
  // head

  beginShape();

  vertex(-5, -2);
  bezierVertex(-5, -2, -5, 1 ,-3, 3);
  //bezierVertex(-5, -2, -5, 4 , 0, 5);

  vertex(-3, 3);
  bezierVertex(-3, 3, -1.5, 4.5 ,0, 5);

  vertex(0, 5);
  bezierVertex(0, 5, 1.5, 4.5 ,3, 3);
  vertex(3, 3);

  bezierVertex(3, 3, 5, 1 ,5, -2);

  vertex(5, -2);

  endShape();


  ellipse(0, -2, 10);
  // eyes
  fill(255);
  eye(-3.75, eyeSize);
  eye(3.75, eyeSize);
  //ellipse(-3, -3, 2);
  //ellipse( 3, -3, 2);
  //nose
  noFill();
  strokeWeight(0.07);
  stroke(75);
  //line(0, -1, 0, 1);

  beginShape();

  //line(0.3, 0.6, 0.7, 0.5);
  bezier(0.25, 0.8, 0.55, 0.65 , 0.55, 0.65 , 0.7, 0.7);

  //line(-0.3, 0.6, -0.7, 0.5);
  bezier(-0.25, 0.8, -0.55, 0.65 , -0.55, 0.65 , -0.7, 0.7);

  noStroke();
  fill(0, 20);
  beginShape(); //nose

  vertex(0.5, 0.4);
  bezierVertex(0.5, 0.4, 1.75, 0.75 ,0, 1.4); //bottomright

  vertex(0, 1.4); 

  bezierVertex(0, 1.4, -1.75, 0.75 , -0.5, 0.4); //bottomleft

  vertex(-0.5, 0.4); 
  bezierVertex(-0.5, 0.4, -0.4, 0.35,0,  0.5); //top left

  vertex(0, 0.5);
  bezierVertex(0, 0.5, 0.4, 0.35 ,0.5, 0.4); //top right

  endShape(CLOSE);
  fill(158, 84, 82);
  ellipse(0, 2.4, 1.5, 0.5);
  stroke(0);
  line(-0.25, 2.3, 0.25, 2.3);
  noStroke();
  fill(255, 50);
  ellipse(-0.2, -1, 0.15, 2.5);

  fill(255, 218, 115);
  stroke(230, 188, 73);


  Fringe(L, curly);
}

function eye(pos, size){


  push();
  scale(0.65, 0.65);
  translate(pos, -3);

  //eyebrows
  push();
  if(pos <0){
    scale(-1, 1);
  }
  strokeWeight(0.3);
  stroke(107, 87, 66);
  noFill();
  translate(-1.25, -2);
  bezier(-0.75, -0.25, 0.75, -1.25, 2, -0.75,3.5, -0.25);

  pop();

  //scale(map(size, 0, 100, 0.3, 1), map(size, 0, 100, 0.5, 1) );
  scale(1, 1);

  let sc = 0.57;

  stroke(0);
  strokeWeight(0.2*sc);
  strokeCap(SQUARE);

  push();
  if(pos < 0){
    scale(-1, 1);
    translate(-0.15, 0);
  }

  //outter white eye //3
  if(size > 50 && size < 75){
    sc = map(size, 50, 75, 0, 0.57);
  } else if(size >= 75){
    sc = 0.57;
  } else {
    sc = 0;
  }
  
  beginShape();

  vertex(-3.5*sc, -0.5*sc);
  bezierVertex(-3.5*sc, -1*sc, 1.5*sc, -5.5*sc , 4.5*sc , 0);

  vertex(4.5*sc, 0);
  bezierVertex(5*sc, 0, 1.5*sc, 5*sc, -2.5*sc, 2*sc);
  
  endShape();

  pop();
  strokeWeight(0.3*sc);

  //bulk blue //2
  if(size > 25 && size < 50){
    sc = map(size, 25, 50, 0, 0.57);
  } else if(size >= 50){
    sc = 0.57;
  } else {
    sc = 0;
  }

  stroke(0);
  fill(23, 26, 120);

  ellipse(0.1*sc, 0, 5*sc, 5*sc);
  noStroke();

  //blue shading //2
  fill(34, 108, 201);
  ellipse(0, 0.5*sc, 4.5*sc, 3*sc);
  fill(75, 146, 235);
  ellipse(0, 1*sc, 4*sc, 2.5*sc);

  //noisey dots //4
  if(size > 75){
    sc = map(size, 75, 100, 0, 0.57);
  } else {
    sc = 0;
  }
  push();
  fill(255,  random(50, 125));
  noStroke();
    for(let x =0; x < 40; x++){
      ellipse(random(0.5*sc, 2.5*sc) * cos(x*20), random(1.12*sc, 2*sc) * sin(x*20), random(0.1, 0.5),  random(0.1, 0.5));
    }
  pop();


  //black center //1
  sc = 0.57;
  fill(0);

  push();  
  translate(0, -0.25);
  ellipse(0, 0, 1.5*sc, 2.25*sc);

  if(size > 75){
    sc = map(size, 75, 100, 0, 0.57);
  } else {
    sc = 0;
  }

  //lines from center //4
  stroke(0);  
  strokeWeight(0.1*sc);
  rotate(30);
  let cent;
  for(let i = 0; i < 16; i++){ 
    cent = map(i, 0, 15, -1, 1);
    if(cent < 0){cent = cent*-1;}
    if(i % 2 == 0){
      stroke(0); 
      line(-1*sc, 1*sc, (-1.75+cent/3)*sc, (1.75-cent/3)*sc);
    } else {
      stroke(100); 
      line(-1.4*sc, 1.4*sc, (-1.25+cent/3)*sc, (1.25-cent/3)*sc);
    }
    rotate(-10);
  }

  //lower white cirles //4
  fill(255, 150);
  noStroke();
  rotate(-160);
  for(let j = 0; j < 6; j++){
    ellipse(1.25*sc, 1.5*sc, 0.6*sc, 0.6*sc);
    rotate(-12);
  }

  pop();


  //white circles highlight //2
    if(size > 25 && size < 50){
    sc = map(size, 25, 50, 0, 0.57);
  } else if(size >= 50){
    sc = 0.57;
  } else {
    sc = 0;
  }

  fill(255);
  ellipse(0.75*sc, -0.75*sc, 0.75*sc, 0.75*sc);

  ellipse(1.75*sc, -1.5*sc, 1.25*sc, 1*sc);
  ellipse(-2*sc, 1*sc, 1*sc, 1*sc);  

  /*
  fill(255);
  beginShape();

  vertex(-2, 1);

  let x1 = -0.5;
  let y1 = 2.75;
  bezierVertex(-2, 1, x1, y1, 1.25, 1.75); //1

  vertex(1.25, 1.75);

  let x2 = 1.75;
  let y2 = 1.5;
  bezierVertex(1.25, 1.75, x2, y2, 1.25, 1.25); //2

  vertex(1.25, 1.25);

  let x3 = 0;
  let y3 = 1.75;
  bezierVertex(1.25, 1.25, x3, y3, -2, 1); //3


  endShape(CLOSE);


  fill(153, 199, 255, 200);
  ellipse(-1, -1, 2, 1.5);

  ellipse(-0.25, -0.25, 2, 2);

  ellipse(-1, 0.5, 1.25, 1);

  fill(255);
  push();
  rotate(-30);
  ellipse(1.5, -0.75, 1, 1.5);
  pop();

  ellipse(1.5, -0.2, 0.75, 0.75);

  fill(67, 134, 217);
  ellipse(1, 0.4, 0.6, 0.6);
  */
  pop();
}


function Fringe(Len, cur){
  rectMode(CORNERS);  

  let L;
  if(Len > 140){
    L = 340;
  } else if(Len > 105){
    L = map(Len, 105, 140, 0, 340);
  } else {
    L = 0;
  }

  if(L > 0){
  let xSc = map(L, 0, 340, 0.4-(cur/250), 1.25); 
  let ySc = map(L, 0, 340, 0, 1.25); 
  let c = map(cur, 0, 100, ySc, 0); 
  let c2 = cur/100;

  translate(0, map(L, 0, 340, -6, -5.5+cur/66));

  print(Len);
  
  for(let i = 0; i <5; i++){

  push();
   if((i+1) % 2 == 0){ //even
     translate((map(i-1, 0, 4, 4, 0)), ((-0.55-cur/400)+(i-1)*0.09)*(i-1)); //2, 4   
   } else { //odd
    translate((map(i, 0, 4, -4, 0)), ((-0.55-cur/400)+i*0.09)*i); //1, 3, 5
    }


    beginShape();
    let test = 1;
    vertex(-xSc, -ySc);
    bezierVertex(-xSc, -ySc, 0, -2*(ySc)+c, xSc, -ySc); //top curve

    vertex(xSc, -ySc);
    bezierVertex(xSc, -ySc, 2*xSc-c, 0, xSc, ySc); //east curve

    vertex(xSc, ySc);
    bezierVertex(xSc, ySc, 0, 2*(ySc)-c, -xSc, ySc); //bottom curve

    vertex(-xSc, ySc);
    bezierVertex(-xSc, ySc, -2*xSc+c, 0, -xSc, -ySc); //west curve

    endShape(CLOSE);
    pop();
  } 
  }
}



function drawHair(Len, cur, col){
  let hairColour = col;

  let L = Len
  let curl = map(cur, 0, 100, 180, -90);
  let curly = cur;
  let curlScale;

  if (L < 139){

    curlScale = map(
      curly, 0, 100, 0, 
      map(L, 0, 139, 0.1, 2));
  } else {
    curlScale = map(curly, 0, 100, 0, map(L, 139, 340, 2, 3));
  }


  push();  
  translate(0, -3);
  rotate(10); 
  for(let i = 0; i < 5; i++){    
    rotate(28);
    if(L < 139){
      if(L > 90){
      ellipse(-4, 0, 4, map(curly, 0, 100, map(L, 90, 139, 0.01, 8), map(L, 90, 139,  2.5, 4)));
      } else {
        ellipse(map(L, 0, 90, -2.9, -4), 0, 4, map(curly, 0, 100, 0.01, 2.5));
      }
    }
    else {
     ellipse(-4, 0, 4, map(curly, 0, 100, 8, 4));   
    }    
  }
  pop();

  if(L < 139){ //shorter hair
    
    translate(0, map(L, 0, 139, 7, 0));
    scale(map(L, 0, 139, 0.2, 1), map(L, 0, 139, 0.5, 1));

    arc(3+0, -5, 6, 6, 220, 221+L, CHORD);
    arc(-3-0, -5, 6, 6, 320-L, 321, CHORD); //mirror

    let HairLength = -5+map(L, 0, 139, -130, 0);
    //noFill();

    push();  //right curl
    translate(3 + ((3+curlScale) * cos(221+L)) +0 , -5 + ((3+curlScale) * sin(221+L)));
    rotate(HairLength);

    
    beginShape();
    


    for(let i = 0; i <15; i++){
       vertex(
        curlScale*cos(map(curl, 180, -90, 180, 180-(15*i))),         
        curlScale*sin(map(curl, 180, -90, 180, 180-(15 *i))));
    }

    let cX = map(HairLength, -135, -5, -0.2, -0.9);
    let cY = map(HairLength, -135, -5, -0.0, -0.8);
    let radiuss = map(HairLength, -135, -5, 0.1, curlScale*1.5)/2;
    let anglee = -20;
    vertex(cX + (radiuss * cos(anglee)), cY + (radiuss * sin(anglee)));

    endShape();
    fill(225, 206, 187);

  fill(hairColour);
    arc(map(HairLength, -135, -5, -0.2, -0.9), map(HairLength, -135, -5, -0.0, -0.8), map(HairLength, -135, -5, 0.1, curlScale*1.4), map(HairLength, -135, -5, 0.1, curlScale*1.4 ), -20, 155); //350, 200

    pop();

    HairLength = -5+map(L, 0, 139, 160, 30);
    push();  //left curl

    translate(-3 - ((3+curlScale) * cos(221+L)) -0 , -5 + ((3+curlScale) * sin(221+L)));
    rotate(HairLength);


   
    beginShape();

  cX = map(HairLength, 155, 25, 0.2, 0.4);
  cY =  map(HairLength, 155, 25, -0.0, -1.1 );
  radiuss = map(HairLength, 155, 25, 0.1, curlScale*1.4)/2;
  anglee = 170;
  vertex(cX + (radiuss * cos(anglee)), cY + (radiuss * sin(anglee)));


    for(let i = 0; i <15; i++){ 
       vertex(
        curlScale*cos(map(curl, 180, -90, 0, 180-(15*i))),         
        curlScale*sin(map(curl, 180, -90, 0, 180-(15 *i))));
      }

    //translate(1, 0);


    endShape();
    fill(225, 206, 187);

  fill(hairColour);
    arc(map(HairLength, 155, 25, 0.2, 0.4), map(HairLength, 155, 25, -0.0, -1.1 ), map(HairLength, 155, 25, 0.1, curlScale*1.4), map(HairLength, 155, 25, 0.1, curlScale*1.4), -5, 170); //-20, 190
    pop();

  } else { //longer hair


    fill(255, 218, 115);

  fill(hairColour);
    //noFill();
    arc(3+0, -5, 6, 6, 220, 360, CHORD); //top hair
    arc(-3-0, -5, 6, 6, 180, 320, CHORD);

    let HairLength = -5+map(L, 139, 360, 0, 14*1);

    //big curls 
    let x1 = (6+0 + 2+0)/2;
    let y1 = (-5-6.5)/2;
    let x2 = (6+map(L, 139,  360,0, 1)+0-map(HairLength, -5, 9, 0, curlScale) + (6+0)-map(HairLength, -5, 9, 0, curlScale))/2;
    let y2 = (-5+map(L, 139, 360, 0, 14*1)+-5+map(L, 139, 360, 0, 14*1))/2;
    for(let i = 0; i < 3; i++){
      ellipse(lerp(x1, x2,  0.2 + (0.3*i)), lerp(y1, y2, 0.2 + (0.3*i)), 
        map(curly, 0, 100, 0, map(L, 139, 360, 0.5, 9-i)), 
        map(L, 139, 360, 0, 8-i));
    }

    beginShape(); //long strands
      vertex(6+0, -5); //1
      vertex(6+map(L, 139,  360,0, 1)+0-map(HairLength, -5, 9, 0, curlScale), //2
      -5+map(L, 139, 360, 0, 14*1));    
      vertex((6+0)-map(HairLength, -5, 9, 0, curlScale), //3
      -5+map(L, 139, 360, 0, 14*1));
      vertex(2+0, -6.5); //4
    endShape();


    //big curls Mirror
    x1 = (-6-0 + -2-0)/2;
    y1 = (-5 + -6.5)/2;
    x2 = (-6-map(L, 139,  360,0, 1)-0+map(HairLength, -5, 9, 0, curlScale) + -6-0+map(HairLength, -5, 9, 0, curlScale))/2;
    y2 = (-5+map(L, 139, 360, 0, 14*1) + -5+map(L, 139, 360, 0, 14*1))/2;

    for(let i = 0; i < 3; i++){
      ellipse(lerp(x1, x2,  0.2 + (0.3*i)), lerp(y1, y2, 0.2 + (0.3*i)), 
        map(curly, 0, 100, 0, map(L, 139, 360, 0.5, 9-i)), 
        map(L, 139, 360, 0, 8-i));
    }

    beginShape(); //long strands mirror
      vertex(-6-0, -5);
      vertex(-6-map(L, 139,  360,0, 1)-0+map(HairLength, -5, 9, 0, curlScale), 
      -5+map(L, 139, 360, 0, 14*1));

      vertex(-6-0+map(HairLength, -5, 9, 0, curlScale), 
      -5+map(L, 139, 360, 0, 14*1));
      vertex(-2-0, -6.5);
      
    endShape();


    beginShape();
    for(let i = 0; i < 50; i++){ //outer curl
      vertex((6+0)-map(HairLength, -5, 9+0, 0, curlScale)+curlScale+
        curlScale*cos(map(curl, 180, -90, 180, 180-(4.5*i))), 
        HairLength-map(L, 139, 340, 0, 0.75)+
        curlScale*sin(map(curl, 180, -90, 180, 180-(4.5*i))));
    } 

    for(let i = 15; i > 0; i--){ //inner curl
      let shrink = 1;
      shrink = map(i, 15, 0, 1, 4);
      vertex(
        (6+map(L, 139,  360,0, 1)+0)-map(HairLength, -5, 9+0, 0, curlScale)+curlScale/shrink+
        curlScale/shrink*cos(map(curl, 180, -90, 170, 180-(17*i))), 

        HairLength-map(L, 139, 340, 0, 0.75)+curlScale/shrink*sin(map(curl, 180, -90, 170, 180-(15 *i)))
        );
    }    

    endShape();

    beginShape();
    for(let i = 0; i < 50; i++){ //outer curl mirror
        vertex((-6-0)+map(HairLength, -5, 9+0, 0, curlScale)-curlScale+
        curlScale*cos(map(curl, 180, -90, 0, (4.5*i))), 
        HairLength-map(L, 139, 340, 0, 0.75)+
        curlScale*sin(map(curl, 180, -90, 0, (4.5 *i))));
    }

    for(let i = 15; i > 0; i--){ //inner curl mirror
      let shrink = 1;
      shrink = map(i, 15, 0, 1, 4);
      vertex(
        (-6-map(L, 139,  360,0, 1)-0)+map(HairLength, -5, 9+0, 0, curlScale)-curlScale/shrink+
        curlScale/shrink*cos(map(curl, 180, -90, -10, (17*i))), 

        HairLength-map(L, 139, 340, 0, 0.75)+curlScale/shrink*sin(map(curl, 180, -90, -10, (15 *i)))
        );
    }    

    endShape();

  }


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
