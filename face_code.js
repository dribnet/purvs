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
  let curlScale;
  if (L < 139){
    //print(L);
    curlScale = map(
      curly, 0, 100, 0, 
      map(L, 0, 139, 0.1, 2));
  } else {
    curlScale = map(curly, 0, 100, 0, 2);
  }

  fill(200, 150, 150);
  noStroke();
  // head
  ellipse(0, -2, 10);
  // eyes
  fill(255);
  ellipse(-3, -3, 2);
  ellipse( 3, -3, 2);
  stroke(60);
  strokeWeight(2);
  noFill();
  if(L < 139){
    arc(3, -5, 6, 6, 220, 221+L);
    arc(-3, -5, 6, 6, 320-L, 321); //mirror

    let HairLength = -5+map(L, 0, 139, -130, 0);


    //starting at 90, -curlscaleY, 0x
    //finishing at 180, 0y, +curlscaleX


    push();    
    translate(3 + ((3+curlScale) * cos(221+L))  , -5 + ((3+curlScale) * sin(221+L)));
    rotate(HairLength);
    beginShape();
    for(let i = 0; i <15; i++){
       vertex(
        curlScale*cos(map(curl, 180, -90, 180, 180-(15*i))),         
        curlScale*sin(map(curl, 180, -90, 180, 180-(15 *i))));
        }
    endShape();
    pop();

    HairLength = -5+map(L, 0, 139, 160, 30);

    push();    
    translate(-3 - ((3+curlScale) * cos(221+L))  , -5 + ((3+curlScale) * sin(221+L)));
    //rotate(-5.5+map(L, 0, 139, -50, 0));
    rotate(HairLength);
    beginShape();
    for(let i = 0; i <15; i++){
       vertex(
        curlScale*cos(map(curl, 180, -90, 0, 180-(15*i))),         
        curlScale*sin(map(curl, 180, -90, 0, 180-(15 *i))));
        }
    endShape();
    pop();


  } else {
    arc(3, -5, 6, 6, 220, 360);
    arc(-3, -5, 6, 6, 180, 320);

    let HairLength = -5+map(L, 139, 360, 0, 14);

    line(6, -5, 
    6-map(HairLength, -5, 9, 0, curlScale), 
    -5+map(L, 139, 360, 0, 14));

    line(-6, -5, 
    -6+map(HairLength, -5, 9, 0, curlScale), 
    -5+map(L, 139, 360, 0, 14));

    beginShape();


    for(let i = 0; i <15; i++){
      vertex(6-map(HairLength, -5, 9, 0, curlScale)+curlScale+
        curlScale*cos(map(curl, 180, -90, 180, 180-(15*i))), 
        HairLength+
        curlScale*sin(map(curl, 180, -90, 180, 180-(15 *i))));
    }
    
    
    //vertex(8+cos(curl), HairLength+sin(curl));

    endShape();

    beginShape();
    for(let i = 0; i <15; i++){
        vertex(-6+map(HairLength, -5, 9, 0, curlScale)-curlScale+
        curlScale*cos(map(curl, 180, -90, 0, (15*i))), 
        HairLength+
        curlScale*sin(map(curl, 180, -90, 0, (15 *i))));
    }
    
    
    //vertex(8+cos(curl), HairLength+sin(curl));

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
