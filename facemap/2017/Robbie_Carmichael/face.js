/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.brow_value = -120;
  this.eye_value = 5;
  this.ear_value = 155;
  this.eye_scale = 100;
  this.mouth_width = 125;

  // other variables can be in here too
  // these control the colors used
  // this.bg_color = [225, 206, 187];
  // this.fg_color = [151, 102, 52];
  // this.stroke_color = [95, 52, 8];

  this.bg_color = "#E02B3B";
  this.fg_color = "#E02B3B";
  this.gollum_skin ="#CAB4A7";
  this.gollum_eyeskin ="#96897F";
  this.gollum_eyes = "#54C2FF";
  this.gollum_tooth ="#FFF3C2";

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
  

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
   extent = w / 2;
  }
  var scale = extent / 220.0;
  
  // ears

  fill(this.gollum_skin);
  ellipse(0, -20 * scale, 450 * scale, this.ear_value * scale);
  fill(this.gollum_eyeskin);
  ellipse(0, -20 * scale, 430 * scale, this.ear_value/1.5 * scale);
  
  // face
  fill(this.gollum_skin);
  ellipse(0, 0, 340 * scale, 420 * scale);

  // wrinkles
  strokeWeight(1.25);
  stroke(0);
  // line(-80 * scale, -120 * scale, 80 * scale, -120 * scale);
  // line(-70 * scale, -130 * scale, 70 * scale, -130 * scale);
  // line(-70 * scale, -140 * scale, 70 * scale, -140 * scale);
  line(-80 * scale, this.brow_value * scale, 80 * scale, this.brow_value * scale);
  line(-70 * scale, (this.brow_value - 10) * scale, 70 * scale, (this.brow_value - 10) * scale);
  line(-60 * scale, (this.brow_value - 20) * scale, 60 * scale, (this.brow_value - 20) * scale);

  noStroke();

  //eye bags
  fill(this.gollum_eyeskin);
  ellipse(-60 * scale, -30 * scale, 110 * scale, this.eye_scale * scale + 20);
  ellipse( 60 * scale, -30 * scale, 110 * scale, this.eye_scale * scale + 20);

  fill(255);
  // draw two eyes
  ellipse(-60 * scale, -40 * scale, 120 * scale, this.eye_scale * scale+20);
  ellipse( 60 * scale, -40 * scale, 120 * scale, this.eye_scale * scale+20);

  // set fill and multiple ellipses for eyeballs
  fill(this.gollum_eyes);
  ellipse((-60 + this.eye_value) * scale, -40 * scale, 90 * scale, this.eye_scale * scale);
  ellipse(( 60 + this.eye_value) * scale, -40 * scale, 90 * scale, this.eye_scale * scale);
  fill(0);
  ellipse((-60 + this.eye_value) * scale, -40 * scale, 50 * scale, this.eye_scale * scale);
  ellipse(( 60 + this.eye_value) * scale, -40 * scale, 50 * scale, this.eye_scale * scale);
  fill(255);
  ellipse((-60 + this.eye_value) * scale, -50 * scale, 5 * scale, 7.5 * scale);
  ellipse(( 60 + this.eye_value) * scale, -50 * scale, 5 * scale, 7.5 * scale);

  // mouth
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(0, 110 * scale, (10 + this.mouth_width) * scale, 15 * scale);

  fill(this.gollum_tooth);
  strokeWeight(1);
  stroke(0);
  triangle(5 * scale, 110 * scale, 15 * scale, 90 * scale, 25 * scale, 110 * scale);
  triangle(-5 * scale, 110 * scale, -15 * scale, 90 * scale, -25 * scale, 110 * scale);
  
  fill(this.bg_color);

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

//     // Uncomment to see drawing area
//     // fill(255);
//     // stroke(0);
//     // rect(x-w/2, y-h/2, w, h);
//     // fill(0)
//     // ellipse(x, y, w, h);

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

//   /*
//    * Update internal state variables to a random state.
//    */  
  this.randomize = function(values, size) {
    // this.eye_value = getRandomNumberOfEyes();
    // this.tilt_value = focusedRandom(-70, 90, 8);
    // this.mouth_value = focusedRandom(0, 50, 4, 1);
    this.brow_value = focusedRandom(-90, -150, 1, -130);
    this.eye_value = focusedRandom(-15, 15);
    this.ear_value = focusedRandom(50, 250);
    this.eye_scale = focusedRandom(10, 150, 1, 100);
    this.mouth_width = focusedRandom(60, 200);
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