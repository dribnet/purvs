/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


 function drawFace1(length, curly, e, eyeColour, acc, hair, makeupStrength) {
  fill(255);
  noStroke();
  ellipse(0, -2, 15, 15);
  let whiteHair = color(232, 237, 237);
  let blondeHair = color(255, 218, 115);
  let gingerHair = color(230, 150, 90);
  let brownHair = color(181, 91, 58);
  let blackHair = color(100, 100, 100);
  let hairColour;

  angleMode(DEGREES);
  let L = length;
  let eyeSize = e;
  fill(255, 218, 115);

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
stroke(red(hairColour) -50, green(hairColour) - 50, blue(hairColour) - 50);


strokeWeight(width/960/10);
strokeWeight(0.075);
randomSeed(23);

push();
drawHair(L, curly, hairColour);
pop();

  //ears
  push();
  fill(227, 191, 161);
  stroke(209, 167, 132);
  rotate(-15);
  ellipse(-3.5, -1.5, 2,3 );

  rotate(30);
  ellipse(3.5, -1.5, 2,3 );
  pop();

  //head
  fill(237, 203, 175);
  stroke(217, 161, 117);

  ellipse(0, -2.5, 9.5, 9.5);

  beginShape();

  vertex(-4.75, -2);
  bezierVertex(-4.75, -2, -3.5, 3,-3, 3);
  vertex(-3, 3);  
  bezierVertex(-3, 3, -2.75, 3.5,0, 5);
  vertex(0, 5);
  bezierVertex(0, 5, 2.75, 3.5, 3, 3);
  vertex(3, 3);
  bezierVertex(3, 3, 3.5, 3, 4.75, -2);
  vertex(4.75, -2);

  endShape();

  // eyes
  fill(255);

  push();
  makeup(makeupStrength, eyeSize);
  translate(0, 0.75);
  eye(-3.9, eyeSize, hairColour, eyeColour);
  eye(3.9, eyeSize, hairColour, eyeColour);
  pop();

  //nose
  noFill();
  strokeWeight(0.05);
  stroke(75);

  bezier(-0.45, 1.05, -0.4, 1, -0.35, 1 ,-0.2, 1.15);
  bezier(0.45, 1.05, 0.4, 1, 0.35, 1 ,0.2, 1.15);

  noStroke();
  fill(204, 60, 35, 40);

  push();
  translate(0, 0.5);
  scale(0.6, 0.8);

  beginShape(); //nose shadow

  vertex(0.5, 0.4);
  bezierVertex(0.5, 0.4, 1.75, 0.75 ,0, 1.4); //bottomright
  vertex(0, 1.4); 
  bezierVertex(0, 1.4, -1.75, 0.75 , -0.5, 0.4); //bottomleft
  vertex(-0.5, 0.4); 
  bezierVertex(-0.5, 0.4, -0.4, 0.35,0,  0.5); //top left
  vertex(0, 0.5);
  bezierVertex(0, 0.5, 0.4, 0.35 ,0.5, 0.4); //top right

  endShape(CLOSE);

  pop();


  //mouth
  stroke(0);
  push();
  translate(0, -0.25);
  bezier(-1, 2.8, -0.75, 3, 0.75, 3, 1, 2.8);
  pop();

  //mouth shadow
  fill(204, 60, 35, 30);
  noStroke();

  beginShape();
  vertex(0, 3.25);
  bezierVertex(0, 3.25, 0.6, 3.25, 0.3, 3.5);
  vertex(0.3, 3.5);
  bezierVertex(0.3, 3.5, 0, 3.75, -0.3, 3.5);
  vertex(-0.3, 3.5);
  bezierVertex(-0.3, 3.5, -0.6, 3.25, 0, 3.25);

  endShape(CLOSE);

  //hair
  noStroke();
  fill(255, 50);

  fill(255, 218, 115);
  stroke(230, 188, 73);
  fill(hairColour);
  stroke(red(hairColour) -50, green(hairColour) - 50, blue(hairColour) - 50);
  
  push();
  Fringe(L, curly);
  pop();
  
  //accessories
  if(acc > 2){ //2 flower
    push();
    flower1(L, 1);
    pop();
  }
  if(acc > 3){ //3 flower
    push();
    flower1(L, 0.8);
    pop();
  }
    if(acc > 4){ //4 flower
      push();
      flower2(L, curly);
      pop();
    }
  if(acc > 0){ //0 bow
    push();
    bow(L, curly, 1);
    pop();
  }
  if(acc > 1){ //1 bow
    push();
    bow(L, curly, -1);
    pop();
  }
}

function makeup(strength, eyeSize){
  //blush
  for(let i = 0; i < 10; i++){
    noStroke();
    fill(255, 64, 118, 0.05*strength);
    ellipse(-2.75, 0, i*0.3, i*0.3);
    ellipse(2.75, 0, i*0.3, i*0.3);
  }

  //cheek lines
  strokeWeight(0.05);
  stroke(199, 143, 107, strength*2.55);

  line(-3, 0, -3.2, 0.5);
  line(-2.75, 0.05, -2.95, 0.55);
  line(-2.5, 0.1, -2.7, 0.6);
  line(-2.25, 0.15, -2.45, 0.65);

  line(3.2, 0, 3, 0.5);
  line(2.95, 0.05, 2.75, 0.55);
  line(2.7, 0.1, 2.5, 0.6);
  line(2.45, 0.15, 2.25, 0.65);


  //lipstick
  push();   
  translate(0, -0.25);
  fill(255, 64, 118, 0.75*strength);
  noStroke();
  beginShape();

  vertex(-1,2.8);
  bezierVertex(-1, 3, 0, 4, 1, 2.8);  
  vertex(1, 2.8);
  bezierVertex(1, 2.8, 0.25, 2.5, 0, 2.8);
  bezierVertex(0, 2.8, -0.25, 2.5, -1, 2.8);
  endShape();

  fill(255, 0.8 * strength);
  noStroke();
  ellipse(0, 3.15, 0.75, 0.25);
  pop();


}


function flower2(len, curl){
  if(len > 190){
    translate(map(len, 190, 340, -5.5,-6.5+curl/200), map(len, 190, 340, -1, 5+curl/50));
  }else {

    translate(map(len, 0, 190, -5, -5.5),
      map(len, 0, 190, -3.5, -1));
    //translate(-5, -3.5);
  }
  
  stroke(163, 120, 57);
  for(let i = 0; i < 5; i++){

    rotate(72);
    push();
    translate(0, -1);
    fill(250, 236, 192);
    bezier(-0.25, 0.5, -1.5, -1.25, 1.5, -1.25 ,0.25, 0.5);

    fill(237, 196, 135);
    noStroke();
    bezier(-0.15, 0.5, -1, -0.75, 1, -0.75 ,0.15, 0.5);

    pop();
  }
  fill(222, 178, 113);

  ellipse(0, 0, 1, 1);
}

function flower1(len, sc){
  scale(sc, sc);

  if(sc < 1){
    translate(2, -1);
  }
  if(len > 190){
    translate(6, map(len, 190, 340, -2, 3));
  } else {
    translate(map(len, 0, 190, 4, 6), 
      map(len, 0, 190, -6.5, -2));
  }

  if(sc < 1){
    stroke(131, 87, 173);
  } else {
    stroke(78, 127, 207);
  }

  for(let i = 0; i < 5; i++){
    rotate(72);
    if(sc < 1){
     fill(180-i*10, 140-i*10, 219);
   } else {
     fill(166-i*10, 200-i*10, 255);
   }
   push();
   translate(0, -0.75);

   ellipse(0, 0, 1.5, 1.5);
   pop();
 }

 if(sc < 1){
  fill(230, 172, 110);
} else {
  fill(245, 208, 115);
} 

ellipse(0, 0, 1, 1);
}

function bow(len,curl, pos){
  c = curl/100;

  let scale1 = map(len, 0, 340, 0.7, 1);
  if(pos < 0){
    translate(-6*(1-scale1), -3*(1-scale1));
  } else {
   translate(6*(1-scale1), -3*(1-scale1));
 }
 scale(scale1, scale1);

 scale(pos, 1);
 scale(0.8, 0.8);


 if(len > 190){
  translate(7.25+map(len, 190, 340, 0, c), 
    -4+map(len, 190, 340, 0, c)); 
} else {
  translate(7.25-map(len, 0, 190, 2, 0), -4-map(len, 0, 190, 3, 0)); //short

  scale(map(len, 0, 190, 0.75, 1), map(len, 0, 190, 0.75, 1));

}

rotate(0);

fill(255, 204, 225);
stroke(171, 65, 108);
strokeWeight(0.05);

beginShape();
vertex(0, 1);
bezierVertex(0, 1, 0.25, 3, 1.5, 5);
vertex(3, 5);
bezierVertex(3, 5, 1, 3.5, 0.5, 1);
endShape();

beginShape();
vertex(0.25, 1);
bezierVertex(0.25, 1, 0.75, 3, 4, 5);

vertex(5, 4);
bezierVertex(5, 4, 1.5, 3.5, 0.75, 1);
endShape();

  //big left
  beginShape();

  vertex(0, 0);
  bezierVertex(0, 0,-3, -3, -3, -2);
  vertex(-2, 0);
  bezierVertex(-2, 0, -3, 1, -2, 1.5);
  vertex(0, 1);

  endShape();

  //big right
  beginShape();

  vertex(1, 0);
  bezierVertex(1, 0,3, -3, 3, -2);
  vertex(3, -2);
  vertex(2.25, 0);
  bezierVertex(2, 0, 3, 1, 2, 1.5);
  vertex(2, 1.5);
  vertex(1, 1);

  endShape();
  //outline
  fill(255, 150, 193);
  noStroke();
  bezier(2, 1.5, 2.5, 0.75, 1, 0.5 ,1, 1);

  //outline2
  bezier(-2, 1.5, -2, 0.5, 0, 0.3 ,0, 1);

  //upper outline
  beginShape();

  vertex(1, 0);
  bezierVertex(1, 0 ,3, -3, 3, -2);
  vertex(1, 0.25);
  endShape();

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0,-3, -3, -3, -2);
  vertex(0, 0.25);
  endShape();

  //shadow
  fill(171, 65, 108);
  stroke(171, 65, 108);
  bezier(2, 1.5, 2, 1, 1.5, 1 ,1, 1);
  line(2, 1.5, 1, 1);

  //shadow2
  bezier(-2, 1.5, -1.5, 0.75, -0.5, 0.75 ,0, 1);
  line(-2, 1.5, 0, 1);

  fill(255, 204, 225);
  rect(-0.1, -0.1, 1.1,1.1, 0.3);

}


function eye(pos, size, col, eyeCol){
  colorMode(HSB, 360, 100, 100, 100);
  let coll = eyeCol;
  let bright;
  if(size > 25){
   bright =  map(size, 25, 100, 1, 0);
 } else {
  bright = 1;
}

  let Med = color(coll, 83 - (59*bright), 79 - (30*bright)); //59
  let Dark = color(coll, 53- (29*bright), 52 - (30*bright)); //29

  let Light = color(coll, 68 - (44*bright), 92 - (30*bright)); //44

  let hairColour = col;

  push();
  scale(0.6, 0.6);
  translate(pos, -3);

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
  //eyebrow
  strokeWeight(0.2*sc);  
  fill(hairColour);
  stroke(hue(hairColour), saturation(hairColour), brightness(hairColour)-20);

  let eyebrowSize = map(size, 0, 100, 1, 0);

  beginShape();

  vertex(2.75-eyebrowSize, -2);
  bezierVertex(2.75-eyebrowSize, -2, 0.5-eyebrowSize/2, -3.5 ,-2+eyebrowSize, -2);

  vertex(-2+eyebrowSize, -2);
  bezierVertex(-2+eyebrowSize, -2, 2-eyebrowSize/2, -2.5 ,2.75-eyebrowSize, -2);

  endShape(CLOSE);

  //outter white eye //3
  if(size > 50 && size < 75){
    sc = map(size, 50, 75, 0, 0.57);
  } else if(size >= 75){
    sc = 0.57;
  } else {
    sc = 0;
  }
  noStroke();
  beginShape();
  fill(255);

  vertex(-3.5*sc, -0.5*sc);
  bezierVertex(-3.5*sc, -1*sc, 1.5*sc, -5.5*sc , 4.5*sc , 0);

  vertex(4.5*sc, 0);
  bezierVertex(5*sc, 0, 1.5*sc, 5*sc, -2.5*sc, 2*sc);
  
  endShape();

  //outline
  stroke(0);
  noFill();
  beginShape();

  vertex(-3.5*sc, -0.5*sc);
  bezierVertex(-3.5*sc, -1*sc, 1.5*sc, -5.5*sc , 4.5*sc , 0);

  vertex(4.5*sc, 0);
  
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

  stroke(Dark);
  fill(Dark);

  ellipse(0.1*sc, 0, 5*sc, 5*sc);
  noStroke();

  //blue shading //2  
  fill(Med);
  ellipse(0, 0.5*sc, 4.5*sc, 3*sc);

  fill(Light);
  ellipse(0, 1*sc, 4*sc, 2.5*sc);

  //noisey dots //4
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
  fill(255, 50);
  noStroke();
  rotate(-160);
  for(let j = 0; j < 6; j++){
    ellipse(1.25*sc, 1.5*sc, 0.6*sc, 0.6*sc);
    rotate(-12);
  }
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

  pop();

  colorMode(RGB, 255);
}


function Fringe(Len, cur){
  rectMode(CORNERS);  

  let L;
  if(Len > 140){
    L = 340;
  } else if(Len > 106){
    L = map(Len, 105, 140, 0, 340);
  } else {
    L = 0;
  }

  if(L > 0){


    let xSc = map(L, 0, 340, 0.4-(cur/250), map(cur, 0, 100, 1.5, 1.25)); 
    let ySc = map(L, 0, 340, 0, map(cur, 0, 100, 2, 1.4)); 
    let c = map(cur, 0, 100, 0.8*ySc, 0); 
    let c2 = cur/100;

    translate(0, map(L, 0, 340, -6.5, map(cur, 0, 100, -4.5, -4))); 


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

   endShape();
   fill(225, 206, 187);

   fill(hairColour);
    arc(map(HairLength, 155, 25, 0.2, 0.4), map(HairLength, 155, 25, -0.0, -1.1 ), map(HairLength, 155, 25, 0.1, curlScale*1.4), map(HairLength, 155, 25, 0.1, curlScale*1.4), -5, 170); //-20, 190
    pop();

  } else { //longer hair


    fill(255, 218, 115);

    fill(hairColour);
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
      vertex((5.95+0)-map(HairLength, -5, 9+0, 0, curlScale)+curlScale+
        curlScale*cos(map(curl, 180, -90, 180, 180-(4.5*i))), 
        HairLength-map(L, 139, 340, 0, 0.75)+
        curlScale*sin(map(curl, 180, -90, 180, 180-(4.5*i))));
    } 

    for(let i = 15; i > 0; i--){ //inner curl
      let shrink = 1;
      shrink = map(i, 15, 0, 1.2, 5);
        vertex(
        (6+map(L, 139,  360,0, 1)+0)-map(HairLength, -5, 9+0, 0, curlScale)+curlScale/shrink+
        curlScale/shrink*cos(map(curl, 180, -90, 180, 180-(17*i))), 
        HairLength-map(L, 139, 340, 0, 0.75)+
        curlScale/shrink*sin(map(curl, 180, -90, 180, 180-(15 *i)))
        );
    }    

    endShape();

    beginShape();
    for(let i = 0; i < 50; i++){ //outer curl mirror
      vertex((-5.95-0)+map(HairLength, -5, 9+0, 0, curlScale)-curlScale+
        curlScale*cos(map(curl, 180, -90, 0, (4.5*i))), 
        HairLength-map(L, 139, 340, 0, 0.75)+
        curlScale*sin(map(curl, 180, -90, 0, (4.5 *i))));
    }

    for(let i = 15; i > 0; i--){ //inner curl mirror
      let shrink = 1;
      shrink = map(i, 15, 0, 1.2, 5);
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