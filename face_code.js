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
  if(L > 139){
  Fringe(L, curly);
  }

}

function Fringe(Len, cur){
  rectMode(CORNERS);  
  for(let i = 0; i <5; i++){
    let cent = map(i, 0, 4, -0.75, 0.75);
    if(cent < 0){
      cent = cent*-1;
    }
    rect(-5+(i*2) + (100-cur)*0.005,
     -7.75+cent,
      -3+(i*2) -(100-cur)*0.005,
      -4.25+cent + -map(Len, 139, 340, 3.5, 0),
       cur*0.01);
  }

  for(let i = 0; i <4; i++){
    cent = map(i, 0, 3, -0.75, 0.75);
    if(cent < 0){
      cent = cent*-1;
    }
    rect(-4+(i*2) + (100-cur)*0.005,
     -7.5+cent, 
     -2+(i*2) -(100-cur)*0.005, 
     -5+cent-map(Len, 139, 340, 2.5, 0),
      cur*0.01);
  }
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
    
    translate(0, map(L, 0, 139, 1, 0));
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