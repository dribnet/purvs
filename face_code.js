/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


function drawFace1(length, curly) {

  let curl = map(curly, 0, 100, 180, -90);
  angleMode(DEGREES);
  let L = map(length, 0, 100, 0, 340);

  fill(255, 218, 115);
  stroke(230, 188, 73);
 //stroke(255, 218, 115);
 strokeWeight(width/960/10);
 print(width);

  push();
  drawHair(L, curly);
  pop();

  fill(200, 150, 150);
  noStroke();
  // head
  ellipse(0, -2, 10);
  // eyes
  fill(255);
  //ellipse(-3, -3, 2);
  //ellipse( 3, -3, 2);
  
  fill(255, 218, 115);
  stroke(230, 188, 73);


  Fringe(L, curly);
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
   // translate(2, (map(i, 0, 5, -2.2+( ySc/1.8), 2.2-( ySc/1.8)))); 
   if((i+1) % 2 == 0){ //even
     translate((map(i-1, 0, 4, 4, 0)), ((-0.55-cur/400)+(i-1)*0.09)*(i-1)); //2, 4   
   } else { //odd
    translate((map(i, 0, 4, -4, 0)), ((-0.55-cur/400)+i*0.09)*i); //1, 3, 5
    }


    beginShape();
   let test = 1;
    //let x2 = -1*sc; //first control point
   // let y2 = -1*sc; //first control point

    //let x3 = 0; //2 control point
    //let y3 = -2*sc+c; //2 control point //change height

    //let x4 = 1*sc;  //anchor point
    
   // let y4 = -1*sc; //anchor point
    vertex(-xSc, -(test)*ySc);
    bezierVertex(-xSc, -(test)*ySc, 0, -2*(ySc)+c, xSc, -(test)*ySc); //top curve

    vertex(xSc, -(test)*ySc);
    bezierVertex(xSc, -ySc, 2*xSc-c, 0, xSc, (test)*ySc); //east curve

    vertex(xSc, (test)*ySc);
    bezierVertex(xSc, (test)*ySc, 0, 2*(ySc)-c, -xSc, (test)*ySc); //bottom curve

    vertex(-xSc, (test)*ySc);
    bezierVertex(-xSc, (test)*ySc, -2*xSc+c, 0, -xSc, -(test)*ySc); //west curve
   /*
    vertex(-sc, -sc);
    bezierVertex(-sc, -sc, 0, -2*sc+c+(yScale*0.5), sc, -sc); //top curve

    vertex(sc, -sc);
    bezierVertex(sc, -sc, 2*sc-c, -yScale*0.5, sc, sc - yScale); //east curve

    vertex(sc, sc-yScale);
    bezierVertex(sc, sc-yScale, 0, 2*sc-c-(yScale*2), -sc, sc-yScale); //bottom curve

    vertex(-sc, sc-yScale);
    bezierVertex(-sc, sc-yScale, -2*sc+c, 0-yScale*0.5, -sc, -sc); //west curve
  */

    endShape(CLOSE);
    pop();
  } 
  }


  /*
  for(let i = 0; i <5; i++){
    //curveTightness(map(mouseX, 0, width, 0, 20));
    curveTightness(map(cur, 0, 100, 0, 1));
    beginShape();


    curveVertex(-5, -5);

    curveVertex(0, -5-c);

    curveVertex(5, -5);    
    curveVertex(5+c, 0);
    curveVertex(5, 5);
    curveVertex(0, 5+c);
    curveVertex(-5, 5);
    curveVertex(-5-c, 0);

    curveVertex(-5, -5);
    curveVertex(0, -5-c);

    endShape(CLOSE);

  } 
  */
}



function drawHair(Len, cur){

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
    arc(map(HairLength, 155, 25, 0.2, 0.4), map(HairLength, 155, 25, -0.0, -1.1 ), map(HairLength, 155, 25, 0.1, curlScale*1.4), map(HairLength, 155, 25, 0.1, curlScale*1.4), -5, 170); //-20, 190
    pop();

  } else { //longer hair


    fill(255, 218, 115);
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
