/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [255, 255, 255];

  ch3_bodyPrimary = [204, 204, 204];
  ch3_bodySecondary = [128, 128, 128];
  ch3_detailPrimary = [0, 0, 0];
  ch3_detailSecondary = [255, 255, 255];

function FaceMap() {

  // draw strokes with rounded joints  
  strokeJoin(ROUND);

  this.hairLength = 50;
  this.hairColor = 50;

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

    var curHairColor = map(this.hairColor, 0, 100, 200, 20);
    fill(curHairColor);
    var curHairLength = map(this.hairLength, 0, 100, 0, 3);
    rect(-3, -2*curHairLength, 6, 3*curHairLength);

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

    // head

    rectMode(CENTER);

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


    // stroke(stroke_color);
    // noFill()
    // beginShape(); 
    // for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
    //   vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    // }
    // for(var i=0; i<12;i++) {
    //   vertex(positions.chin[i][0], positions.chin[i][1]);
    // }
    // for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
    //   vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    // }
   
    // endShape();

    // mouth
    // stroke(stroke_color);
    // noFill();
    // beginShape();
    // for(var i=0; i<positions.top_lip.length;i++) {
    //   vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    // }
    // endShape(CLOSE);
    // beginShape();
    // for(var i=0; i<positions.bottom_lip.length;i++) {
    //   vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    // }
    // endShape(CLOSE);
    
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
    // beginShape();
    // vertex(positions.left_eye[3][0], positions.left_eye[3][1]);
    // for(var i=0; i<positions.nose_tip.length;i++) {
    //   vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    // }
    // endShape();

  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
    properties[1] = this.hairColor;
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