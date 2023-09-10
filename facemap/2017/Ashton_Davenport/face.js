/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 0;
  this.hair_value = 2;
  // other variables can be in here too
  // these control the colors used
  this.bg_color = [94, 138, 254];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [0,0,0];
  this.skin_color = [254,212,30];
  this.white_color = [255,255,255];
  this.pupil_color = [0,0,0];
  this.mouth_color = [0,0,0];
  this.facial_hair_color = [211, 175, 125];
  
  this.mask_eye_color = [255, 249, 199];
  this.mask_eye_stroke = [94, 102, 21];
  this.mask_color = [110, 29, 13];
  this.mask_lip_color = [199, 45, 41];
  this.mask_teeth_color = [233, 209, 174];
  this.mask_eye_brow_color = [203, 71, 35];
  this.mask_nose_color1 = [201, 107, 22];
  this.mask_nose_color2 = [224, 142, 26];
  this.mask_feather1_color = [53, 33, 110];
  this.mask_feather2_color = [223, 188, 23];
  this.mask_feather3_color = [221, 109, 21];
  this.mask_feather4_color = [206, 25, 117];
  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h) {
    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    push();
    translate(x, y);
    rotate(this.tilt_value);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    // head
    stroke(this.stroke_color);
    fill(this.skin_color);
    ellipse(0, 0, 300 * scale, 400 * scale);

    // eyes
    fill(this.white_color);
    ellipse(-75 * scale, -80 * scale, 90 * scale, 90 * scale);
    ellipse( 15 * scale, -80 * scale, 90 * scale, 90 * scale);

    fill(this.pupil_color);
    ellipse((-85 * scale) + this.eye_value, -80 * scale, 20 * scale, 20 * scale);
    ellipse( (5 * scale) + this.eye_value, -80 * scale, 20 * scale, 20 * scale);
    
    // facial hair
    fill(this.facial_hair_color);
    ellipse(-40 * scale, 110 * scale, 45, 40);

    // mouth
    fill(this.mouth_color);
    ellipse(-40 * scale, 110 * scale, (15 * scale) * this.mouth_value, (this.mouth_value * 15) / (scale * 50));
    
    // ear
    fill(this.skin_color);
    stroke(this.stroke_color);
    arc(150 * scale, -10 * scale, 90 * scale , 126 * scale, 220, 120, OPEN);

    push()
    translate(0, 10 * scale);
    // nose
    fill(this.skin_color);
    stroke(this.skin_color);
    quad(-75 * scale, -60 * scale, -35 * scale, -60 * scale, -35 * scale, -20 * scale,  -75 * scale, -20 * scale);
    stroke(this.stroke_color);
    line(-75 * scale, -60 * scale, -35 * scale, -60 * scale);
    line(-35 * scale, -20 * scale,  -75 * scale, -20 * scale);
    arc(-75 * scale, -40 * scale, 40 * scale, 40 * scale, 90, 270, OPEN);
    pop()

    // hair
    noFill();
    stroke(this.stroke_color);
    if(this.hair_value == 0){

    }
    else if(this.hair_value == 1){
      arc(0 * scale, -185 * scale, 110 * scale, 60 * scale, 185, 10);
    }
    else if(this.hair_value == 2){
      arc(0 * scale, -185 * scale, 110 * scale, 60 * scale, 185, 10);
      arc(-10 * scale, -180 * scale, 110 * scale, 60 * scale, 183, 10);
    }
    line(80 * scale,-100 * scale,90 * scale,-130 * scale);
    line(100 * scale,-100 * scale,90 * scale,-130 * scale);
    line(100 * scale,-100 * scale,110 * scale,-130 * scale);
    line(120 * scale,-100 * scale,110 * scale,-130 * scale);

    pop()
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
    var eye_brow1_pos = average_point(positions.left_eyebrow);
    var eye_brow2_pos = average_point(positions.right_eyebrow);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var face_middle_x = (positions.chin[positions.chin.length-1][0]) - (face_width * 0.5);

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
    translate(face_middle_x, nose_pos[1]);
    rotate(this.tilt_value);
    translate(-face_middle_x, - nose_pos[1]);
    push();

    fill(this.mask_color);
    // mask
    rect(face_middle_x -(face_width * 0.5), nose_pos[1] - half_height, face_width, half_height * 2,
      30 * scale, 30 * scale, 100 * scale, 100 * scale);
    
    // nose
    stroke(this.mask_nose_color1);
    fill(this.mask_nose_color1);
    beginShape();
    vertex(positions.nose_bridge[0][0],positions.nose_bridge[0][1]);
    vertex(positions.nose_bridge[1][0],positions.nose_bridge[1][1]);
    vertex(positions.nose_bridge[2][0],positions.nose_bridge[2][1]);
    vertex(positions.nose_bridge[3][0],positions.nose_bridge[3][1]);
    vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
    vertex(positions.nose_tip[1][0], positions.nose_tip[1][1]);
    vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    endShape(CLOSE);

    noStroke();
    fill(this.mask_nose_color2);
    beginShape();
    vertex(positions.nose_bridge[0][0],positions.nose_bridge[0][1]);
    vertex(positions.nose_bridge[1][0],positions.nose_bridge[1][1]);
    vertex(positions.nose_bridge[2][0],positions.nose_bridge[2][1]);
    vertex(positions.nose_bridge[3][0],positions.nose_bridge[3][1]);
    vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
    vertex(positions.nose_tip[3][0], positions.nose_tip[3][1]);
    vertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
    endShape(CLOSE);

    // eyes
    fill(this.mask_eye_color);
    strokeWeight(5);
    stroke(this.mask_eye_stroke);
    rect(eye1_pos[0] - (50 * scale), eye1_pos[1] - (37.5 * scale),
     100 * scale, 75 * scale, 30 * scale, 30 * scale, 50 * scale, 50 * scale);
    rect(eye2_pos[0] - (50 * scale), eye2_pos[1] - (37.5 * scale),
     100 * scale, 75 * scale, 30 * scale, 30 * scale, 50 * scale, 50 * scale);
    
    // lips
    fill(this.mask_lip_color);
    stroke(this.mask_lip_color);
    strokeWeight(3);
    beginShape();
    vertex(positions.top_lip[0][0], positions.top_lip[0][1]);
    vertex(positions.top_lip[1][0], positions.top_lip[1][1]);
    vertex(positions.top_lip[2][0], positions.top_lip[2][1]);
    vertex(positions.top_lip[3][0], positions.top_lip[3][1]);
    vertex(positions.top_lip[4][0], positions.top_lip[4][1]);
    vertex(positions.top_lip[5][0], positions.top_lip[5][1]);
    vertex(positions.top_lip[6][0], positions.top_lip[6][1]);
    vertex(positions.top_lip[7][0], positions.top_lip[7][1]);
    vertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]);
    vertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]);
    vertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]);
    vertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]);
    vertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]);
    vertex(positions.bottom_lip[6][0], positions.bottom_lip[6][1]);
    vertex(positions.bottom_lip[7][0], positions.bottom_lip[7][1]);
    endShape(CLOSE);

    // teeth
    fill(this.mask_teeth_color);
    noStroke();
    beginShape();
    vertex(positions.top_lip[8][0], positions.top_lip[8][1]);
    vertex(positions.top_lip[9][0], positions.top_lip[9][1]);
    vertex(positions.top_lip[10][0], positions.top_lip[10][1]);
    vertex(positions.top_lip[11][0], positions.top_lip[11][1]);
    vertex(positions.bottom_lip[8][0], positions.bottom_lip[8][1]);
    vertex(positions.bottom_lip[9][0], positions.bottom_lip[9][1]);
    vertex(positions.bottom_lip[10][0], positions.bottom_lip[10][1]);
    vertex(positions.bottom_lip[11][0], positions.bottom_lip[11][1]);
    endShape(CLOSE);

    // eyebrows
    fill(this.mask_eye_brow_color);
    rect(eye_brow1_pos[0] - (55 * scale), eye_brow1_pos[1] - (25 * scale), 110 * scale, 50 * scale);
    rect(eye_brow2_pos[0] - (55 * scale), eye_brow2_pos[1] - (25 * scale), 110 * scale, 50 * scale);

    // feathers
    fill(this.mask_feather1_color);
    ellipse(face_middle_x - (75 * scale),nose_pos[1] - half_height -(70 * scale), 40* scale, 150 * scale);
    fill(this.mask_feather2_color);
    ellipse(face_middle_x - (25 * scale),nose_pos[1] - half_height -(70 * scale), 40* scale, 150 * scale);
    fill(this.mask_feather3_color);
    ellipse(face_middle_x + (25 * scale),nose_pos[1] - half_height -(70 * scale), 40* scale, 150 * scale);
    fill(this.mask_feather4_color);
    ellipse(face_middle_x + (75 * scale),nose_pos[1] - half_height -(70 * scale), 40* scale, 150 * scale);

    pop();

    

    
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.eye_value = focusedRandom(-5, 5);
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(-10, 10);
    this.hair_value = Math.floor(focusedRandom(0,3));
  }
}

// global functions can also be in this file below

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 8) {
    return 1;
  }
  else if(random_result < 12) {
    return 3;
  }
  else {
    return 2;
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