/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.eye_value = 2;
  this.eye_size = 0;
  this.mouth_s = 0;
  this.bread_value = 0;
  this.colour_value = 0;
  this.mouth_value = 0;

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [47, 59, 64];

  this.fg_color1 = [255, 231, 191];
  this.fg_color2 = [224,177,120];
  this.fg_color3 = [59, 52, 44];
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

    push();
    translate(x, y);
    rectMode(CENTER);
    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    //crust
    fill(136, 106, 75);
    rect(0, 30 * scale, (335 * scale) + this.bread_value, 335 * scale, 7);
    ellipse(-60 * scale, -130 * scale, (240 * scale) + this.bread_value, (150 * scale) + this.bread_value);
    ellipse(60 * scale, -130 * scale, (240* scale) + this.bread_value, (150 *scale) + this.bread_value);

    // head
    noStroke();

    if (this.colour_value <= 1){
      fill(this.fg_color1);
      }
      if (this.colour_value == 2){
        fill(this.fg_color2);
      }
    if (this.colour_value > 2){
      fill(this.fg_color3);
    }

    rect(0, 30 * scale, (300 * scale) + this.bread_value, 300 * scale, 5);
    ellipse(-60 * scale, -130 * scale, (200 * scale) + this.bread_value, (120 * scale) + this.bread_value);
    ellipse(60 * scale, -130 * scale, (200* scale) + this.bread_value, (120 *scale) + this.bread_value);




    // eyes
    if (this.eye_value === 1) {
    fill(176, 36, 26);
    ellipse(0, -70 * scale, (100 * scale) + this.eye_size, (100 * scale)+ this.eye_size);

    fill(240,82,67);
    ellipse(0, -70 * scale, (80 * scale)+ this.eye_size, (80 * scale)+ this.eye_size);

    fill(255,128,125)

    ellipse(0 * scale, -70 * scale, (50 * scale)+ this.eye_size, 20 * scale);
    ellipse(0 * scale, -70 * scale, 20 * scale, (50 * scale)+ this.eye_size);

    push();
    translate(0 * scale, -70 * scale);
    rotate(45);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    rotate(90);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    pop();
    }

    if (this.eye_value >= 2) {
    fill(176, 36, 26);
    ellipse(-70 * scale, -70 * scale, (100 * scale)+ this.eye_size, (100 * scale)+ this.eye_size);
    ellipse( 70 * scale, -70 * scale, (100 * scale)+ this.eye_size, (100 * scale)+ this.eye_size);

    fill(240,82,67);
    ellipse(-70 * scale, -70 * scale, (80 * scale)+ this.eye_size, (80 * scale)+ this.eye_size);
    ellipse( 70 * scale, -70 * scale, (80 * scale)+ this.eye_size, (80 * scale)+ this.eye_size);


    fill(255,128,125)
    ellipse(-70 * scale, -70 * scale, (50 * scale)+ this.eye_size, 20 * scale);
    ellipse(-70 * scale, -70 * scale, 20 * scale, (50 * scale)+ this.eye_size);
    ellipse(70 * scale, -70 * scale, (50 * scale)+ this.eye_size, 20 * scale);
    ellipse(70 * scale, -70 * scale, 20 * scale, (50 * scale)+ this.eye_size);
    push();
    translate(-70 * scale, -70 * scale);
    rotate(45);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    rotate(90);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    pop();
    push();
    translate(70 * scale, -70 * scale);
    rotate(45);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    rotate(90);
    ellipse(0, 0, 20 * scale, (50 * scale)+ this.eye_size);
    pop();

    }



    // mouth
    fill(219, 200, 124);
    stroke(70, 145, 31);
    strokeWeight(1.5);
    arc(0, 120 *scale, 180 * scale, 100 * scale, 180 , PI);
    noStroke();

    if (this.colour_value <= 1){
      fill(this.fg_color1);
      }
      if (this.colour_value == 2){
        fill(this.fg_color2);
      }
    if (this.colour_value > 2){
      fill(this.fg_color3);
    }

    ellipse((10 * scale) + this.mouth_value, 120 * scale, 60 * scale, 50 * scale);

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
    rotate(this.tilt_value);

    // head
    stroke(this.stroke_color);
    fill(this.fg_color1);
    ellipse(0, 0, 300 * scale, 400 * scale);
    noStroke();

    // mouth
    fill(this.bg_color);
    ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_size * scale);
    pop();

    noStroke();

    fill(this.bg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

    fill(this.fg_color1);
    ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function() {
    this.eye_value = getRandomNumberOfEyes();
    this.mouth_value = focusedRandom(0, 50, 4, 1);
    this.bread_value = focusedRandom(-10, 10);
    this.eye_size = focusedRandom(-5, 7);
    this.mouth_value = focusedRandom(-3, 7);
    this.colour_value = getRandomColour();
  }
}

// global functions can also be in this file below

function getRandomColour() {
  random_result = focusedRandom(0, 100);
  if(random_result < 30) {
    return 1;
  }
  else if(random_result < 90) {
    return 2;
  }
  else{
    return 3;
  }
}

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 50) {
    return 1;
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