/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used

  ch3_bodyPrimary = [204, 204, 204];
  ch3_bodySecondary = [128, 128, 128];
  ch3_detailPrimary = [0, 0, 0];
  ch3_detailSecondary = [0, 0, 255];

function FaceMap() {

  // draw strokes with rounded joints  
  strokeJoin(ROUND);

  colorMode(HSB);

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var face_pos = average_point(positions.chin);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var lookingLeft = false;
    var lookingRight = false;

    if(Math.abs(positions.nose_bridge[3][0] - positions.nose_bridge[0][0]) > 0.052){
      if(positions.nose_bridge[3][0] < positions.nose_bridge[0][0])
        lookingLeft = true;

      if(positions.nose_bridge[3][0] > positions.nose_bridge[0][0])
        lookingRight = true;
    }
    else {
        lookingLeft = true;
    }

    var gender = map(this.genderValue, 0, 100, 0, 1); 
    var hair = map(this.hairValue, 0, 100, 80, 200);
    var curlookDirection = map(this.lookDirection, 0, 100, -15, 15);
    var curEyelidTop_height = map(this.eyelidTop_height, 0, 100, 0, 70);
    var curEyelidBottom_height = map(this.eyelidBottom_height, 0, 100, 0, 70);
    var curHue = map(this.hue, 0, 100, 0, 360);
    var curSaturation = map(this.saturation, 0, 100, 0, 100);
    var curBrightnessPrimary = map(this.brightness, 0, 100, 50, 100);
    var curBrightnessSecondary = map(this.brightness, 0, 100, 20, 70);

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

    // draw left ear if male

    rectMode(CENTER)

    if(gender == 1 & lookingLeft == true) { 
      stroke(ch3_detailPrimary)
      strokeWeight(10 * scale);
      fill(curHue, curSaturation, curBrightnessPrimary);
      rect(face_pos[0] - (10 * scale), eye2_pos[1] - (100 * scale), 50 * scale, hair * scale, 100 * scale, 100 * scale, 0, 0);
      }

    if(gender == 1 & lookingRight == true) { 
      stroke(ch3_detailPrimary)
      strokeWeight(10 * scale);
      fill(curHue, curSaturation, curBrightnessPrimary);
      rect(face_pos[0] + (10 * scale), eye1_pos[1] - (100 * scale), 50 * scale, hair * scale, 100 * scale, 100 * scale, 0, 0);
      }

    // head

    rectMode(CENTER);

    stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(curHue, curSaturation, curBrightnessPrimary);
  rect(face_pos[0], face_pos[1] - (70 * scale), 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(curHue, curSaturation, curBrightnessSecondary);
    ellipse(face_pos[0], face_pos[1] + (90 * scale), 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(face_pos[0], face_pos[1] + (90 * scale), 150 * scale, 30 * scale);

    // draw right ear if male

    rectMode(CENTER);

    if(gender == 1 & lookingLeft == true) { 
      stroke(ch3_detailPrimary)
      strokeWeight(10 * scale);
      fill(curHue, curSaturation, curBrightnessPrimary);
      rect(face_pos[0] + (30 * scale), eye2_pos[1] - (100 * scale), 50 * scale, hair * scale, 100 * scale, 100 * scale, 0, 0);

      //cover
      noStroke();
      fill(curHue, curSaturation, curBrightnessPrimary);
      rectMode(CENTER);
      rect(face_pos[0] + (30 * scale), eye2_pos[1] - (5 * scale), 70 * scale, 150 * scale);
      }

    if(gender == 1 & lookingRight == true) { 
      stroke(ch3_detailPrimary)
      strokeWeight(10 * scale);
      fill(curHue, curSaturation, curBrightnessPrimary);
      rect(face_pos[0] - (30 * scale), eye1_pos[1] - (100 * scale), 50 * scale, hair * scale, 100 * scale, 100 * scale, 0, 0);

      //cover
      noStroke();
      fill(curHue, curSaturation, curBrightnessPrimary);
      rectMode(CENTER);
      rect(face_pos[0] - (30 * scale), eye1_pos[1] - (5 * scale), 70 * scale, 150 * scale);
      }
    
    if(lookingLeft == true) {

    // left eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye1_pos[0] + curlookDirection * scale, eye1_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(curHue, curSaturation, curBrightnessSecondary);
    // top eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 265 - curEyelidTop_height, 275 + curEyelidTop_height, CHORD);
    // bottom eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 85 - curEyelidBottom_height, 95 + curEyelidBottom_height, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye1_pos[0], (eye1_pos[1]), 130 * scale, 110 * scale, 240, 300);

    // nose
    if(gender < 1) {
    push();
    translate(face_pos[0] - (100 * scale), face_pos[1] - (70 * scale));

    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    fill(curHue, curSaturation, curBrightnessSecondary);
    arc(0, 0, 250 * scale, 150 * scale, 335, 385, PIE);

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    line(5 * scale, 0 * scale, 80 * scale, 0 * scale);
    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    noFill();
    arc(110 * scale, 0 * scale, 50 * scale, 50 * scale, 140, 210);

    pop();
    }
    if(gender == 1) {

      push();
      translate(face_pos[0] - (130 * scale), face_pos[1] - (100 * scale));

            // draw snout
          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(curHue, curSaturation, curBrightnessPrimary);
            // top snout
            rectMode(CORNER);
          rect(0, 0, 140 * scale, 45 * scale, 18 * scale, 0, 0, 18 * scale);

            // re-fill / cover
            // noStroke();
            // fill(ch3_bodyPrimary);
            // arc(0 * scale, 0 * scale, 290 * scale, 290 * scale, 180, 360);
            

          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(curHue, curSaturation, curBrightnessPrimary);
           // bottom snout
          rect(30 * scale, 45 * scale, 110 * scale, 35 * scale, 14 * scale, 0, 0, 14 * scale);

            noStroke();
            fill(curHue, curSaturation, curBrightnessPrimary);
            // re-fill / cover
            rect(130 * scale, -7 * scale, 60 * scale, 100 * scale);

            // draw nose
            noStroke();
            fill(ch3_detailPrimary);
            push();
            rotate(10);
            ellipse(0 * scale, 0 * scale, 40 * scale, 28 * scale);
            pop();

          // mouth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(155 * scale, 40 * scale, 50 * scale, 50 * scale, 140, 210);

            pop();
    }
    // right eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye2_pos[0] + curlookDirection * scale, eye2_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(curHue, curSaturation, curBrightnessSecondary);
    // top eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 265 - curEyelidTop_height, 275 + curEyelidTop_height, CHORD);
    // bottom eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 85 - curEyelidBottom_height, 95 + curEyelidBottom_height, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye2_pos[0], (eye2_pos[1]), 130 * scale, 110 * scale, 240, 300);

  }

  if(lookingRight == true) {

     // right eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye2_pos[0] + curlookDirection * scale, eye2_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(curHue, curSaturation, curBrightnessSecondary);
    // top eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 265 - curEyelidTop_height, 275 + curEyelidTop_height, CHORD);
    // bottom eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 85 - curEyelidBottom_height, 95 + curEyelidBottom_height, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye2_pos[0], (eye2_pos[1]), 130 * scale, 110 * scale, 240, 300);

    
    // nose
    if(gender < 1) {
    push();
    translate(face_pos[0] + (120 * scale), face_pos[1] - (70 * scale));

    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    fill(curHue, curSaturation, curBrightnessSecondary);
    arc(0, 0, 250 * scale, 150 * scale, 155, 205, PIE);

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    line(-5 * scale, 0 * scale, -80 * scale, 0 * scale);
    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    noFill();
    arc(-110 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);

    pop();
    }

    if(gender == 1) {

      push();
      translate(face_pos[0], face_pos[1] - (100 * scale));

            // draw snout
          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(curHue, curSaturation, curBrightnessPrimary);
            // top snout
            rectMode(CORNER);
          rect(0, 0, 140 * scale, 45 * scale, 0, 18 * scale, 18 * scale, 0);

            // re-fill / cover
            // noStroke();
            // fill(ch3_bodyPrimary);
            // arc(0 * scale, 0 * scale, 290 * scale, 290 * scale, 180, 360);
            

          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(curHue, curSaturation, curBrightnessPrimary);
           // bottom snout
          rect(0 * scale, 45 * scale, 110 * scale, 35 * scale, 0, 14 * scale, 14 * scale, 0);

            noStroke();
            fill(curHue, curSaturation, curBrightnessPrimary);
            // re-fill / cover
            rect(-50 * scale, -7 * scale, 60 * scale, 100 * scale);

            // draw nose
            noStroke();
            fill(ch3_detailPrimary);
            push();
            rotate(-10);
            ellipse(140 * scale, 30 * scale, 40 * scale, 28 * scale);
            pop();

          // mouth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(-15 * scale, 50 * scale, 50 * scale, 50 * scale, 320, 390);

            pop();
    }

    // left eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye1_pos[0] + curlookDirection * scale, eye1_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(curHue, curSaturation, curBrightnessSecondary);
    // top eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 265 - curEyelidTop_height, 275 + curEyelidTop_height, CHORD);
    // bottom eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 85 - curEyelidBottom_height, 95 + curEyelidBottom_height, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye1_pos[0], (eye1_pos[1]), 130 * scale, 110 * scale, 240, 300);

  }
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.genderValue = settings[0];
    this.hairValue = settings[1];
    this.lookDirection = settings[2];
    this.eyelidTop_height = settings[3];
    this.eyelidBottom_height = settings[4];
    this.hue = settings[5];
    this.saturation = settings[6];
    this.brightness = settings[7];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(5);
    properties[0] = this.genderValue;
    properties[1] = this.hairValue;
    properties[2] = this.lookDirection;
    properties[3] = this.eyelidTop_height;
    properties[4] = this.eyelidBottom_height;
    properties[5] = this.hue;
    properties[6] = this.saturation;
    properties[7] = this.brightness;
    return properties;
  }
}

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