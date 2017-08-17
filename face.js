/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.eye_value = getRandomSetOfEyes();
  this.head_value = getRandomHeadType();
  this.nose_value = focusedRandom(-5, 20);
  this.nose_type_value = getRandomNoseType();
  this.cheek_value = focusedRandom(0, 8);
  this.cheek_value_on = focusedRandom(0, 2);
  this.mouth_value = focusedRandom(0.5, 2);
  this.mouth_type_value = Math.floor(focusedRandom(1,3,1,1));

  this.alpha_ran = focusedRandom(80, 200);
  this.alpha_ran2 = focusedRandom(20, 60);
  this.face_col = [247, 236, 212, this.alpha_ran];
  this.eye_col = [119, 156, 82];
  this.cheek_col = [224, 125, 229, this.alpha_ran2];

  this.offset = focusedRandom(-8, 8);
  this.offset2 = focusedRandom(-3, 3);
  this.offset3 = focusedRandom(1, 3);
  this.offset4 = focusedRandom(-5, 2);
  this.faceW = focusedRandom(0, 25);
  this.faceH = focusedRandom(0, 25);
  this.faceH2 = focusedRandom(0, 15);

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [0,0,0];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [95, 52, 8];

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

    //RANDOMISE FUNCTION IN SKETCH 

    push();
    translate(x, y);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    var face_stroke = (0, 0, 0);

    if (this.head_value == 1) {

      fill(this.face_col);
      ellipse(0 + this.offset, 0 + this.offset, 100 + this.faceW, 100 + this.faceH);

      noFill();
      stroke(face_stroke);
      strokeWeight(0.2);
      ellipse(0, 0, 100 + this.faceW, 100 + this.faceH);
      ellipse(0 + this.offset2, 0 + this.offset2, 100 + this.faceW, 100 + this.faceH2);
   }

    else {
      push();
      rectMode(CENTER);
      rotate(focusedRandom(0, 180, 5));
      fill(this.face_col);
      rect(0 + this.offset, 0 + this.offset, 80 + this.faceW, 80 + this.faceH);
      noFill();
      stroke(face_stroke);
      strokeWeight(0.2);
      rect(0, 0, 100 + this.faceW, 80 + this.faceH);
      rect(0 + this.offset2, 0 + this.offset2, 80 + this.faceW, 80 + this.faceH2);
      pop();

      noFill();
      stroke(face_stroke);
      strokeWeight(0.2);
    }


    // eyes
 if (this.eye_value == 1) {
    // blue eyes
    this.alpha_ran2 = focusedRandom(80, 200);
    noStroke();
    fill(120, 152, 255, this.alpha_ran2);
    ellipse(20 + this.offset2, -20 + this.offset2, 10 + this.offset4, 10 + this.offset4);
    ellipse(-20 + this.offset2, -20 + this.offset2, 10 + this.offset4, 10 + this.offset4);
    strokeWeight(.4);
    stroke(0, 0, 0);
  }

  if (this.eye_value == 2) {
    // black with under eyes
    push();
    fill(0, 0, 0);
    ellipse(15, -15, 7, 7);
    ellipse(-15, -15, 7, 7);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(.3);
    ellipse(-15, -15 + this.offset3, 7 , 7);
    ellipse(15, -15 + this.offset3, 7, 7);
    pop();
  }

  if (this.eye_value == 3) {
    this.alpha_ran3 = focusedRandom(10, 150);
    // green cross eyes
    strokeWeight(.5);
    line(-20 + this.offset2, -20, -10, -10);
    line(-10 + this.offset3, -20, -20, -10);
    push();
    strokeWeight(.5);
    translate(32, 0);
    line(-20, -20 + this.offset3, -10, -10);
    line(-10, -20 + this.offset2, -20, -10);

    noStroke();
    fill(119, 156, 82, this.alpha_ran3);
    ellipse(-15, -15, 10 + this.offset4, 10 + this.offset4);
    ellipse(-46, -15, 10 + this.offset4, 10 + this.offset4);
    pop();
    noFill();
  }

  if (this.eye_value == 4) {
    // arch eyes with circle
    strokeWeight(.7);
    arc(-20, -10, 10 + this.offset, 10 + this.offset, 180, PI);
    arc(20, -10, 10 + this.offset, 10 + this.offset, 180, PI);
    ellipse(20, -8, 5 + this.offset2, 5 + this.offset2);
    ellipse(-20, -8, 5 + this.offset2, 5 + this.offset2);
  }


// nose and brow
  // right facing nose
  if (this.nose_type_value == 1 & this.eye_value != 4){
    strokeWeight(0.4);
    // left brow
    line(-30 + this.offset2, -30, 0, -30);
    // right brow
    line(30, -30, 10 + this.offset2, -30 + this.offset2);
    // nose
    line(0, -30, -10, 0 + this.nose_value);
    line(-10, 0 + this.nose_value, 5, 0 + this.nose_value);
  }

  // left facing nose
  if (this.nose_type_value == 2 & this.eye_value != 4){
    strokeWeight(0.4);
    // right brow
    line(30 + this.offset, -30 + this.offset2, 10, -30);
    // left brow
    line(-32, -30, 0, -30);
    // nose
    line(0, -30, 10, 0 + this.nose_value);
    line(10, 0 + this.nose_value, 5, 0 + this.nose_value);
  }

  // angle brows and nose
  if (this.nose_type_value == 3 & this.eye_value != 4){
    strokeWeight(0.4);
    // left brow
    line(-12, -35, -5, -20);
    line(-12, -35, -35 + this.nose_value/2, -30);
    // right brow
    line(12, -35, 5, -20);
    line(12, -35, 30 + this.nose_value/2, -20);
    // nose
    line(4, -15, 5, 5 + this.nose_value/2);
    line(-4, -15, -5, 5 + this.nose_value/2);
    // nose bottom
    line(0, 10 + this.nose_value/2, -10, 5 + this.nose_value/2);
    line(0, 10 + this.nose_value/2, 10, 5 + this.nose_value/2);
  }

  // straight brows, angle nose
  if (this.nose_type_value == 4 & this.eye_value != 4){
    strokeWeight(0.4);
    // right brow
    line(30, -30 + this.nose_value/4, 5, -30 + this.nose_value/4);
    // left brow
    line(-30, -30 + this.nose_value/4, -5, -30 + this.nose_value/4);
    // nose
    line(4, -15, 5, 5 + this.nose_value/2);
    line(-4, -15, -5, 5 + this.nose_value/2);
    // nose bottom
    line(0, 10 + this.nose_value/2, -10, 5 + this.nose_value/2);
    line(0, 10 + this.nose_value/2, 10, 5 + this.nose_value/2);
  }

  if (this.eye_value == 4 || this.nose_type_value ==5) {
    // nose bottom
    noFill();
    strokeWeight(0.4);
    line(-5, 10 + this.nose_value/2, -10, 5 + this.nose_value/2);
    line(5, 10 + this.nose_value/2, 10, 5 + this.nose_value/2);
    line(0, -15 - this.nose_value, 10, 5 + this.nose_value/2);
    line(-5, 10 + this.nose_value/2, 5, 10 + this.nose_value/2);
    if (this.eye_value != 4){
      strokeWeight(0.4);
      // right brow
      line(30, -30 + this.nose_value/4, 5, -30 + this.nose_value/4);
      // left brow
      line(-30, -30 + this.nose_value/4, -5, -30 + this.nose_value/4);
    }
  }

  // mouth
  if (this.nose_type_value == 3 || this.nose_type_value == 4 || this.mouth_type_value == 1){
    push();
    noFill();
    rotate(180);
    strokeWeight(0.5);
    arc(0, -20 - this.nose_value/2, 30 * this.mouth_value, 20 * this.mouth_value, 180, PI);
    pop();
    
  } 

  else/* if (mouth_value == 1) */{
    push();
    noFill();
    rotate(180);
    strokeWeight(0.5);
    ellipse(0, -20 - this.nose_value/1.5, 10 * this.mouth_value, 10 * this.mouth_value);
    pop();
  }

  if (this.cheek_value_on > 1){
    // cheeks
    // left
    noStroke();
    fill(this.cheek_col);
    ellipse(-35, 0 + this.cheek_value, 20 + this.cheek_value, 20 + this.cheek_value);
    // right
    noStroke();
    fill(this.cheek_col);
    ellipse(35, 0 + this.cheek_value, 20 + this.cheek_value, 20 + this.cheek_value);
  }

    pop();
  }

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  

   // IGNORE THISSSSSSSS
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
    rotate(this.tilt_value);

    // head
    stroke(this.stroke_color);
    fill(this.fg_color);
    ellipse(0, 0, 300 * scale, 400 * scale);
    noStroke();

    // mouth
    fill(this.bg_color);
    ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
    pop();

    noStroke();

    fill(this.bg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

    fill(this.fg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.eye_value = getRandomSetOfEyes();
    this.head_value = getRandomHeadType();
    this.nose_value = focusedRandom(-5, 20);
    this.nose_type_value = getRandomNoseType();
    this.cheek_value = focusedRandom(0, 8);
    this.cheek_value_on = focusedRandom(0, 2);
    this.mouth_value = focusedRandom(0.5, 2);
    this.mouth_type_value = Math.floor(focusedRandom(1,3,1,1));

  }
}

// global functions can also be in this file below

function getRandomSetOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 4;
  }
  else if(random_result < 20) {
    return 2;
  }
  else if(random_result < 50) {
    return 3;
  }
  else {
    return 1;
  }
}

function getRandomNoseType() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 4;
  }
  if(random_result < 15) {
    return 3;
  }
  if(random_result < 40) {
    return 5;
  }
  if(random_result < 50) {
    return 2;
  }
  else {
    return 1;
  }
}

function getRandomHeadType() {
  random_result = focusedRandom(0, 100);
  if(random_result < 30) {
    return 2;
  }
  else {
    return 1;
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