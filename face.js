/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.ear_length = focusedRandom(90, 350, 0, 150);
  this.eye_value = Math.floor(focusedRandom(1, 4, 3, 2.5));
  this.look_direction = focusedRandom(-15, 15);
  this.teeth_value = Math.floor(focusedRandom(1, 9, 3, 1));
  this.orientation_value = Math.floor(focusedRandom(1, 3));
  this.pupil_size = focusedRandom(0.4, 1);
  this.eyelidTop_height = focusedRandom(0, 70);
  this.eyelidBottom_height = focusedRandom(0, 70);
  this.eyebrow_height = focusedRandom(0, -10);
  this.face_select = Math.floor(focusedRandom(1, 4));
          
  this.eyeFront_PosX = 110;
  this.eyeFront_PosY = -50;
  this.eyeMiddle_PosX = 160;
  this.eyeMiddle_PosY = -75;
  this.eyeBack_PosX = 190;
  this.eyeBack_PosY = -70;

  // other variables can be in here too
  // these control the colors used
  this.ch3_bodyPrimary = [204, 204, 204];
  this.ch3_bodySecondary = [128, 128, 128];
  this.ch3_detailPrimary = [0, 0, 0];
  this.ch3_detailSecondary = [255, 255, 255];

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h) {

  // draw strokes with rounded joints  
  strokeJoin(ROUND);
    
  // draw rectangles from centre
  rectMode(CORNER);
    
  // rotation in degrees
  angleMode(DEGREES);

    //Uncomment to see drawing area
    fill(255);
    stroke(0);
    rect(x-w/2, y-h/2, w, h);
    fill(0)
    ellipse(x, y, w, h);

    push();
    translate(x, y);
  rectMode(CENTER);
  // sets scale
  var scale = 0.15;
  // variable for character shadow
  // var shadow_scale = map(y_offset, -5, 5, 200, 300);

    // checks orientation of character and sets translation accordingly
    // if character vertical
    if (this.orientation_value == 2) {
  // translate(x - 15, y + 3 + y_offset);
    translate(-5, 3);
    
    noStroke();
    fill(this.ch3_detailPrimary);
    push();
    // translate(0, -y_offset);
    // draw shadow
    // ellipse(45 * scale, 250 * scale, shadow_scale * scale, 30 * scale);
    pop();
    } 
    // if character horizontal
    else {
    // translate(x, y + 10 + y_offset);
    translate(0, 0);
    
    noStroke();
    fill(this.ch3_detailPrimary);
    push();
    // translate(0, -y_offset);
    // draw shadow
    // ellipse(-10 * scale, 220 * scale, (shadow_scale + 100) * scale, 30 * scale);
    pop();
    }

    // if face style is not bird style draw back ear
    if (this.face_select != 1) {
    // ear (back)
  stroke(this.ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(this.ch3_bodyPrimary);
    rect(50 * scale, -150 * scale, 50 * scale, this.ear_length * scale, 100 * scale, 100 * scale, 0, 0);
    }
    
  // draw eye (back)
  // check number of eyes
    if (this.eye_value === 2 || this.eye_value == 3) {
  stroke(this.ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(this.ch3_detailSecondary);
    ellipse( this.eyeBack_PosX * scale, this.eyeBack_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(this.ch3_detailPrimary);
    arc((this.eyeBack_PosX + this.look_direction) * scale, this.eyeBack_PosY * scale, (30 * this.pupil_size) * scale, (50 * this.pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(this.ch3_detailPrimary);
    fill(this.ch3_bodySecondary);
    // top eyelid
    arc( this.eyeBack_PosX * scale, this.eyeBack_PosY * scale, 80 * scale, 80 * scale, 265 - this.eyelidTop_height, 275 + this.eyelidTop_height, CHORD);
    // bottom eyelid
    arc( this.eyeBack_PosX * scale, this.eyeBack_PosY * scale, 80 * scale, 80 * scale, 85 - this.eyelidBottom_height, 95 + this.eyelidBottom_height, CHORD);
    // eyebrow
  stroke(this.ch3_detailPrimary)
    noFill();
    arc((this.eyeBack_PosX + 5) * scale, (this.eyeBack_PosY + this.eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }

    // draw face
    // checks orientation
    // if horizontal
    if (this.orientation_value == 1) {
  stroke(this.ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(this.ch3_bodyPrimary);
  rect(20 * scale, 0 * scale, 350 * scale, 300 * scale, 0, 200 * scale, 200 * scale, 0);
    
    // draw dissection
    fill(this.ch3_bodySecondary);
    ellipse(-160 * scale, 0, 80 * scale, 300 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(this.ch3_detailSecondary);
    ellipse(-160 * scale, 0, 30 * scale, 150 * scale);
    } 
    // if vertical
    else {
  stroke(this.ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(this.ch3_bodyPrimary);
  rect(45 * scale, 0 * scale, 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(this.ch3_bodySecondary);
    ellipse(45 * scale, 160 * scale, 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(this.ch3_detailSecondary);
    ellipse(45 * scale, 160 * scale, 150 * scale, 30 * scale);
    
    }
    
    // checks face style
    // if bird
    if (this.face_select == 1) {
        
            // draw beak
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
            fill(this.ch3_bodySecondary);
            arc(285 * scale, 0 * scale, 250 * scale, 150 * scale, 155, 205, PIE);

          // draw mouth
          stroke(this.ch3_detailPrimary);
          strokeWeight(7 * scale);
          line(280 * scale, 0 * scale, 200 * scale, 0 * scale);
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(175 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(this.ch3_detailSecondary);
          // check teeth value
        if (this.teeth_value == 3 || this.teeth_value == 4 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(220 * scale, 0 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (this.teeth_value == 5 || this.teeth_value == 6 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(240 * scale, 0 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (this.teeth_value == 1 || this.teeth_value == 2) {
        }
        
    } 
    // if dog
    else if (this.face_select == 2) {
        
                // draw snout
          stroke(this.ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(this.ch3_bodyPrimary);
            // top snout
            rectMode(CORNER);
          rect(150 * scale, -50 * scale, 140 * scale, 45 * scale, 0, 18 * scale, 18 * scale, 0);

            // re-fill / cover
            if (this.orientation_value == 1) {
            noStroke();
            fill(this.ch3_bodyPrimary);
            arc(47 * scale, 0 * scale, 290 * scale, 290 * scale, 270, 450);
            } else {
            noStroke();
            fill(this.ch3_bodyPrimary);
            arc(45 * scale, -10 * scale, 290 * scale, 290 * scale, 180, 360);
            }

          stroke(this.ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(this.ch3_bodyPrimary);
           // bottom snout
          rect(150 * scale, -5 * scale, 110 * scale, 35 * scale, 0, 14 * scale, 14 * scale, 0);

            noStroke();
            fill(this.ch3_bodyPrimary);
            // re-fill / cover
            rect(110 * scale, -12 * scale, 60 * scale, 60 * scale);

            // draw nose
            noStroke();
            fill(this.ch3_detailPrimary);
            push();
            rotate(-10);
            ellipse(285 * scale, -5 * scale, 40 * scale, 28 * scale);
            pop();

          // mouth
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(145 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(this.ch3_detailSecondary);
          // check teeth value
          if (this.teeth_value == 2 || this.teeth_value == 5 || this.teeth_value == 6 || this.teeth_value == 8) {
          arc(190 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (this.teeth_value == 3 || this.teeth_value == 5 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(210 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (this.teeth_value == 4 || this.teeth_value == 6 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(230 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (this.teeth_value == 1) {
          }
        
    
    } 
    // if rabbit / bear
    else {
    
            // draw mouth
          stroke(this.ch3_detailPrimary);
          strokeWeight(7 * scale);
          line(115 * scale, 20 * scale, 175 * scale, 20 * scale);
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(90 * scale, 25 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(this.ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(this.ch3_detailSecondary);
          // check teeth value
        if (this.teeth_value == 3 || this.teeth_value == 4 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(135 * scale, 20 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (this.teeth_value == 5 || this.teeth_value == 6 || this.teeth_value == 7 || this.teeth_value == 8) {
          arc(155 * scale, 20 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);   
        } if (this.teeth_value == 1) {
            
        }
        
        // draw nose
        noStroke();
        fill(this.ch3_detailPrimary);
        push();
        rotate(-10);
        ellipse(200 * scale, 0 * scale, 50 * scale, 35 * scale);
         pop();
        }
    
    // if not bird draw front ear
    if (this.face_select != 1) {

            // ear (front)
          stroke(this.ch3_detailPrimary)
          strokeWeight(10 * scale);
            fill(this.ch3_bodyPrimary);

            rectMode(CENTER);
            // ear
            rect(0 * scale, -150 * scale, 50 * scale, this.ear_length * scale, 100 * scale, 100 * scale, 0, 0);
            noStroke();
            fill(this.ch3_bodyPrimary);
            rectMode(CORNER);
            //cover
            rect(-36 * scale, -115 * scale, 70 * scale, ((this.ear_length / 2 + 2)) * scale);
        
    }
    
    // draw eye middle
    // check eye value
    if (this.eye_value === 1 || this.eye_value == 3) {
  stroke(this.ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(this.ch3_detailSecondary);
    ellipse( this.eyeMiddle_PosX * scale, this.eyeMiddle_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(this.ch3_detailPrimary);
    arc((this.eyeMiddle_PosX + this.look_direction) * scale, this.eyeMiddle_PosY * scale, (30 * this.pupil_size) * scale, (50 * this.pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(this.ch3_detailPrimary);
    fill(this.ch3_bodySecondary);
    // top eyelid
    arc( this.eyeMiddle_PosX * scale, this.eyeMiddle_PosY * scale, 80 * scale, 80 * scale, 265 - this.eyelidTop_height, 275 + this.eyelidTop_height, CHORD);
    // bottom eyelid
    arc( this.eyeMiddle_PosX * scale, this.eyeMiddle_PosY * scale, 80 * scale, 80 * scale, 85 - this.eyelidBottom_height, 95 + this.eyelidBottom_height, CHORD);
    // eyebrow
  stroke(this.ch3_detailPrimary)
    noFill();
    arc((this.eyeMiddle_PosX + 5) * scale, (this.eyeMiddle_PosY + this.eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
  // eye (front)
  // check eye value
    if (this.eye_value === 2 || this.eye_value == 3) {
        // eye fill
    strokeWeight(7 * scale);
    stroke(this.ch3_detailPrimary);
    fill(this.ch3_detailSecondary);
    ellipse( this.eyeFront_PosX * scale, this.eyeFront_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(this.ch3_detailPrimary);
    arc((this.eyeFront_PosX + this.look_direction) * scale, this.eyeFront_PosY * scale, (30 * this.pupil_size) * scale, (50 * this.pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(this.ch3_detailPrimary);
    fill(this.ch3_bodySecondary);
    // top eyelid
    arc( this.eyeFront_PosX * scale, this.eyeFront_PosY * scale, 80 * scale, 80 * scale, 265 - this.eyelidTop_height, 275 + this.eyelidTop_height, CHORD);
    // bottom eyelid
    arc( this.eyeFront_PosX * scale, this.eyeFront_PosY * scale, 80 * scale, 80 * scale, 85 - this.eyelidBottom_height, 95 + this.eyelidBottom_height, CHORD);
    // eyebrow
  stroke(this.ch3_detailPrimary)
  strokeWeight(7 * scale);
    noFill();
    arc((this.eyeFront_PosX + 5) * scale, (this.eyeFront_PosY + this.eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }
  pop();
}

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw2 = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    push();
    translate(x, y);

    stroke(this.ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(this.ch3_bodyPrimary);
  rect(45 * scale, 0 * scale, 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(this.ch3_bodySecondary);
    ellipse(45 * scale, 160 * scale, 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(this.ch3_detailSecondary);
    ellipse(45 * scale, 160 * scale, 150 * scale, 30 * scale);

    // // head
    // ellipse(0, 0, 300 * scale, 400 * scale);
    // noStroke();

    // // mouth
    // fill(this.bg_color);
    // ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
    // pop();

    // noStroke();

    // fill(this.bg_color);
    // ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
    // ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

    // fill(this.fg_color);
    // ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
    // ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    // this.eye_value = getRandomNumberOfEyes();
    // this.tilt_value = focusedRandom(-70, 90, 8);
    // this.mouth_value = focusedRandom(0, 50, 4, 1);

    this.ear_length = focusedRandom(90, 350, 0, 150);
    this.eye_value = Math.floor(focusedRandom(1, 4, 3, 2.5));
    this.look_direction = focusedRandom(-15, 15);
    this.teeth_value = Math.floor(focusedRandom(1, 9, 3, 1));
    this.orientation_value = Math.floor(focusedRandom(1, 3));
    this.pupil_size = focusedRandom(0.4, 1);
    this.eyelidTop_height = focusedRandom(0, 70);
    this.eyelidBottom_height = focusedRandom(0, 70);
    this.eyebrow_height = focusedRandom(0, -10);
    this.face_select = Math.floor(focusedRandom(1, 4));
  }
}

// global functions can also be in this file below

// function getRandomNumberOfEyes() {
//   random_result = focusedRandom(0, 100);
//   if(random_result < 8) {
//     return 1;
//   }
//   else if(random_result < 12) {
//     return 3;
//   }
//   else {
//     return 2;
//   }
// }

// given a point, return the average
function average_point(list) {
  var sum_x = 0;
  var sum_y = 0;
  var num_points = 0;
  for(var i=0; i<list.length; i++) {
    sum_x += list[i][0];
    sum_y += list[i][1];
    num_points += 1; 
  }
  return [sum_x / num_points, sum_y / num_points];
}