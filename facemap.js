/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// these control the colors used

  ch3_bodyPrimary = [0, 0, 80];
  ch3_bodySecondary = [0, 0, 50];
  ch3_detailPrimary = [0, 0, 0];
  ch3_detailSecondary = [0, 0, 255];

function FaceMap() {

  // draw strokes with rounded joints  
  strokeJoin(ROUND);

  // set colour mode to HSB
  colorMode(HSB);

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    // variables of facial structure
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

    // bolleans for whether face is looking left or right
    var lookingLeft = false;
    var lookingRight = false;

    // compare nose landmarks to check if looking left or right
    if(Math.abs(positions.nose_bridge[3][0] - positions.nose_bridge[0][0]) > 0.052){
      if(positions.nose_bridge[3][0] < positions.nose_bridge[0][0])
        lookingLeft = true;

      if(positions.nose_bridge[3][0] > positions.nose_bridge[0][0])
        lookingRight = true;
    }
    else {
        lookingLeft = true;
    }

    // sets object scale
    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    // head
    // draw rectangle from a centre point
    rectMode(CENTER);

    // draw face
    stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(face_pos[0], face_pos[1] - (70 * scale), 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(face_pos[0], face_pos[1] + (90 * scale), 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(face_pos[0], face_pos[1] + (90 * scale), 150 * scale, 30 * scale);
    
    // if looking left
    if(lookingLeft == true) {

    // left eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye1_pos[0], eye1_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 245, 295, CHORD);
    // bottom eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 85, 95, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye1_pos[0], (eye1_pos[1]), 130 * scale, 110 * scale, 240, 300);

    // nose
    push();
    translate(face_pos[0] - (100 * scale), face_pos[1] - (70 * scale));

    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    fill(ch3_bodySecondary);
    arc(0, 0, 250 * scale, 150 * scale, 335, 385, PIE);

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    line(5 * scale, 0 * scale, 80 * scale, 0 * scale);
    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    noFill();
    arc(110 * scale, 0 * scale, 50 * scale, 50 * scale, 140, 210);

    pop();

    // right eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye2_pos[0], eye2_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 245, 295, CHORD);
    // bottom eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 85, 95, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye2_pos[0], (eye2_pos[1]), 130 * scale, 110 * scale, 240, 300);

  }

  // if looking right
  if(lookingRight == true) {

     // right eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye2_pos[0], eye2_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 245, 295, CHORD);
    // bottom eyelid
    arc(eye2_pos[0], eye2_pos[1], 80 * scale, 80 * scale, 85, 95, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye2_pos[0], (eye2_pos[1]), 130 * scale, 110 * scale, 240, 300);

    
    // nose
    push();
    translate(face_pos[0] + (120 * scale), face_pos[1] - (70 * scale));

    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    fill(ch3_bodySecondary);
    arc(0, 0, 250 * scale, 150 * scale, 155, 205, PIE);

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    line(-5 * scale, 0 * scale, -80 * scale, 0 * scale);
    stroke(ch3_detailPrimary)
    strokeWeight(7 * scale);
    noFill();
    arc(-110 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);

    pop();

    // left eye

    stroke(ch3_detailPrimary);
    strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(eye1_pos[0], eye1_pos[1], (30) * scale, (50) * scale, 20, 340, PIE);
    // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 245, 295, CHORD);
    // bottom eyelid
    arc(eye1_pos[0], eye1_pos[1], 80 * scale, 80 * scale, 85, 95, CHORD);
    // eyebrow
    stroke(ch3_detailPrimary)
    noFill();
    arc(eye1_pos[0], (eye1_pos[1]), 130 * scale, 110 * scale, 240, 300);

  }

  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(0);
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