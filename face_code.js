/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

/*
 * eyelid_height ranges from 0-1 and indicates how far down the eyelid is
   eyelid_rotate ranges from 0-8 and indicates how squinty the eyes are
   blush ranges from 0-1 and indicates whether the yata is blushing or not
 */
function drawFace1(eyelid_height,eyelid_rotate,blush,mouth,ear_rotate,colour_number,mouth_curve) {
  //yata blush (255,204,255)
  //mouth dark (105,1,1)
  //tounge (239,157,139)

  var rb;
  var gb;
  var bb;

  var rlb;
  var glb;
  var blb;

  //colour sets
        if(colour_number <= 1){
        rb = 186;
        gb = 138;
        bb = 90;

        rlb = 229;
        glb = 192;
        blb = 154;
      }else if(colour_number > 1 && colour_number <= 1.5){
        rb = 143;
        gb = 105;
        bb = 68;

        rlb = 255;
        glb = 241;
        blb = 228;
      }else if(colour_number > 1.5 && colour_number <= 2){
        rb = 89;
        gb = 59;
        bb = 31;

        rlb = 247;
        glb = 239;
        blb = 223;
      }else if(colour_number > 2 && colour_number <= 2.5){
        rb = 59;
        gb = 58;
        bb = 57;

        rlb = 247;
        glb = 247;
        blb = 245;
      }else if(colour_number > 2.5 && colour_number <= 3){
        rb = 97;
        gb = 97;
        bb = 97;

        rlb = 247;
        glb = 247;
        blb = 245;
      }



  scale(1.6);
  push();
    angleMode(DEGREES);
    rotate(ear_rotate);
    translate(0,-ear_rotate/30);
    //ears right
    beginShape();
      fill(rb,gb,bb);
      strokeWeight(0.3);
      stroke(0);
      bezier(10,-6.2,6.67,-7.63,6,-7.2,2.8,-3.2);
      fill(rlb,glb,blb)
      bezier(10,-6.2,6.67,-7,6,-6.2,3,-2.2);
      bezier(10,-6.2,9.03,-4.27,6.69,-3.05,3.5,-1.5);
      noStroke();
      triangle(9.8,-6.1,4,-3,4.5,-2);
        //small ear
        strokeWeight(0.3);
        stroke(0);
        fill(rb,gb,bb);
        bezier(4.2,-2.36,5.1,-3.33,6.33,-3.8,7,-3);
        fill(rlb,glb,blb)
        bezier(5,-1.25,6.18,-1.54,7.11,-2.46,7,-3);
        bezier(5,-2,5.1,-2.8,6.33,-3.5,7,-3);
        noStroke();
        triangle(5,-1,5,-2,6.85,-2.9);
    endShape();
  pop();

  push();
    angleMode(DEGREES);
    rotate(-ear_rotate);
    translate(0,-ear_rotate/30);
    
    //ears left
    beginShape();
      fill(rb,gb,bb);
      strokeWeight(0.3);
      stroke(0);
      bezier(-10,-6.2,-6.67,-7.63,-6,-7.2,-2.8,-3.2);
      fill(rlb,glb,blb)
      bezier(-10,-6.2,-6.67,-7,-6,-6.2,-3,-2.2);
      bezier(-10,-6.2,-9.03,-4.27,-6.69,-3.05,-3.5,-1.5);
      noStroke();
      triangle(-9.8,-6.1,-4,-3,-4.5,-2);
        //small ear
        strokeWeight(0.3);
        stroke(0);
        fill(rb,gb,bb);
        bezier(-4.2,-2.36,-5.1,-3.33,-6.33,-3.8,-7,-3);
        fill(rlb,glb,blb)
        bezier(-5,-1.25,-6.18,-1.54,-7.11,-2.46,-7,-3);
        bezier(-5,-2,-5.1,-2.8,-6.33,-3.5,-7,-3);
        noStroke();
        triangle(-5,-1,-5,-2,-6.85,-2.9);
    endShape();
  pop();

  angleMode(RADIANS);

  //head
  noStroke();
  fill(rb,gb,bb);
  ellipse(0,0,12,10);

  //brown patch
  noStroke();
  fill(rlb,glb,blb)
  arc(0, 0.5, 12, 9, 0.35, HALF_PI*1.772);
  ellipse(0,0.6,2,1)

  //nose
  fill(0);
  arc(0, 1.05, 1, 1, -2.5, -0.5);
  strokeWeight(0.1);
  stroke(0);
  line(0,1.05,0,1.55);

  //mouth
  if(mouth <= 0.5){
    //inside of mouth
    fill(105,1,1);
    noStroke();

    //makes sure the inside of the motuh doesnt clip out the top of the mouth as it bends
    let mouth_handle4 = map(mouth_curve,1.3, 1.9,0.8,0.75);
    if(mouth_curve >= 1.65){
      rect(0,1.65,mouth_handle4-0.1,0.16);
      rect(0.65,1.7,0.1,0.1);

      rect(0,1.65,-mouth_handle4+0.05,0.16);
      rect(-0.65,1.7,-0.1,0.1);
    }else{
      rect(0,1.65,mouth_handle4,0.2);
      rect(0,1.65,-mouth_handle4,0.2);
    }

    //rest of inside of mouth
    rect(0,1.6,0.35,0.06);
    rect(0,1.6,-0.35,0.06);
    rect(-0.95,1.8,1.9,1.2);
    rect(-0.32,2.95,0.65,0.5);
    fill(105,1,1);
    stroke(0);
    bezier(0,3.5,0.78,3.45,1.1,3.01,1,1.85);
    bezier(-0,3.5,-0.78,3.45,-1.1,3.01,-1,1.85);
      //tounge
      noStroke();
      fill(239,157,139);
      arc(0, 3.5, 2, 1, -2.8, -0.3);
      noFill();
      stroke(0);
      bezier(0,3.5,0.78,3.45,1.1,3.01,1,1.9);
      bezier(-0,3.5,-0.78,3.45,-1.1,3.01,-1,1.9);
  }
    //top of mouth
    stroke(0);
    
    if(mouth_curve >= 1.85){
      if(mouth > 0.5){
        fill(rlb,glb,blb);
      }else{
        fill(105,1,1);
      }
    }else{
      fill(rlb,glb,blb);
    }
    let mouth_move = map(mouth_curve,1.3, 1.9,1.4,0.97);
    let mouth_handle1 = map(mouth_curve,1.3, 1.9,2.16,1.5);
    let mouth_handle2 = map(mouth_curve,1.3, 1.9,1.41,1.2);
    let mouth_handle3 = map(mouth_curve,1.3, 1.9,0.48,0.1);
    bezier(0,1.55,mouth_handle3,mouth_handle1,mouth_handle2,1.84,mouth_move,mouth_curve);
    bezier(-0,1.55,-mouth_handle3,mouth_handle1,-mouth_handle2,1.84,-mouth_move,mouth_curve);

  //blush
  noStroke();
  if(blush <= 0.5){
    fill(255,204,255);
    ellipse(3.2,1.5,2.5,1);
    ellipse(-3.2,1.5,2.5,1);
  }

  //eyes
  noStroke();
  fill(0);
  ellipse(2,0,2,2);
  ellipse(-2,0,2,2);

  fill(255);
  ellipse(1.5,-0.3 + (eyelid_height/1.7),0.5,0.5);
  ellipse(2.3,-0.5 + (eyelid_height/1.7),0.3,0.3);
  ellipse(-2.5,-0.3 + (eyelid_height/1.7),0.5,0.5);
  ellipse(-1.7,-0.5 + (eyelid_height/1.7),0.3,0.3);

    //---[Eyelid - Parameter]
    fill(rb,gb,bb);

    if(eyelid_height >= 0.8){
      //This stops it from looking really weird when the eyes are almost shut
      eyelid_rotate = eyelid_rotate/1.5;
    }
    push();
      angleMode(DEGREES);
      rotate(eyelid_rotate);
      rect(0.8,(-3.1) + eyelid_height,2.5,1);
      rect(0.8,(-2.2) + eyelid_height,2.5,1);
    pop();

    push();
      angleMode(DEGREES);
      rotate(-eyelid_rotate);
      rect(-3,(-3.1) + eyelid_height,2.5,1);
      rect(-3,(-2.2) + eyelid_height,2.5,1);
    pop();

  //outside of head stroke
  strokeWeight(0.3);
  stroke(0);
  noFill();
  ellipse(0,0,12,10);
}

function drawCrown() {
  noStroke();
  //shadow
  fill(237, 200, 3);
  ellipse(0, -4.3,7.2,1);
  //crown base
  fill(252, 211, 3);
  rect(-3.6, -5.2,7.2,1);
  ellipse(0, -4.6,7.2,1);

  //crown left end spike
  triangle(-3.6, -5.2, -3.6, -6.7, -3, -5.2);
  fill(237, 200, 3);
  triangle(-3.2, -5.2, -3.6, -6.7, -3, -5.2);

  //crown right end spike
  fill(252, 211, 3);
  triangle(3.6, -5.2, 3.6, -6.7, 3, -5.2);
  fill(237, 200, 3);
  triangle(3.6, -4.2, 3.6, -6.7, 3.45, -4.2);

  //middle spikes
  for(let i=0; i<6; i = i + 1) {
    fill(252, 211, 3);
    triangle(-3 + i, -5.2, -2.6 + i, -6.7, -2.2 + i, -5.2);
    //shadow
    fill(237, 200, 3);
    triangle(-2.4 + i, -5.2, -2.6 + i, -6.7, -2.2 + i, -5.2);
  }
}