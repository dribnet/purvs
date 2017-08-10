/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 0;

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [225, 206, 187];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [95, 52, 8];

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h) {
    //Uncomment to see drawing area
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
    var scaleVar = extent / 220.0;
    
    rectMode(CENTER);
    scale(0.25);
    colorMode(HSB);
    stroke(this.hue, 50, 90);
    fill(this.hue, 90, 50);
    var minimizer = 0.5;

    //antenna
    var yVariation = ((300 + this.face_height) * minimizer) /2;
    var xVariation = (300 * minimizer) /2;
    if(this.eye_value == 1 || this.eye_value == 3){
      triangle(-20, -20, 0, -40 - yVariation, 20, -20);
      ellipse(0, 10 - yVariation, 40, 40);
      ellipse(0, -40 - yVariation, 15, 15);
    }
    if(this.eye_value == 2 || this.eye_value == 4){
      triangle(-10, -10, -50, -45 - yVariation, 10, -10);
      ellipse(-50, -45 - yVariation, 10, 10);
      triangle(-10, -10, 50, -45 - yVariation, 10, -10);
      ellipse(50, -45 - yVariation, 10, 10);
    }
    if(this.eye_value == 3 || this.eye_value == 4){
      //left antenna
      stroke(this.hue, 90, 50);
      fill(this.hue, 50, 90);
      strokeWeight(0);
      rect(-xVariation, -40, 130, 5);
      noFill();
      strokeWeight(4);
      ellipse(-xVariation - 40, -40, 12, 50);
      ellipse(-xVariation - 60, -40, 8, 30);

      //right antenna
      stroke(this.hue, 90, 50);
      fill(this.hue, 50, 90);
      strokeWeight(0);
      rect(xVariation, -40, 130, 5, 20, 20);
      noFill();
      strokeWeight(4);
      ellipse(xVariation + 40, -40, 12, 50);
      ellipse(xVariation + 60, -40, 8, 30);
    }

    stroke(this.hue, 50, 90);
    strokeWeight(1);
    fill(this.hue, 90, 50);

    //head
    var bottomCorners = this.face_shape - 50;
    bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
    if(this.face_shape <= 100) {
      rect(0, 0, 300 * minimizer, (300 + this.face_height) * minimizer, this.face_shape, this.face_shape, bottomCorners, bottomCorners);
    }
    else {
      bottomCorners = bottomCorners - ((this.face_shape - 100) * 2);
      bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
      if(this.face_shape >= 150){
        quad(xVariation - 5, yVariation*0.25, xVariation  + ((this.face_shape - 150) / 10), yVariation*0.25, xVariation + (this.face_shape - 150), yVariation - 5, xVariation - 5, yVariation - 5);
        quad(-xVariation - 1, yVariation*0.25, -xVariation - 1 - ((this.face_shape - 150) / 10), yVariation*0.25, -xVariation - (this.face_shape - 150), yVariation - 5, -xVariation + 1, yVariation - 5);
      }
      rect(0, 0, 300 * minimizer, (300 + this.face_height) * minimizer, this.face_shape, this.face_shape, bottomCorners, bottomCorners);
    }

    //eyes
    var i=40;
    var fillObj = {
      40: [0, 0, 100],
      16: [0, 0, 0],
      8: [hue, 50, 90]
    }
    var xPos=(25 + this.eye_distance), yPos=-40;
    //eyes holder
    rect(0, yPos, 110 + (this.eye_distance*2), 60, 45, 45, 45, 45);
    fill(0);
    rect(0, yPos, 100 + (this.eye_distance*2), 50, 45, 45, 45, 45);
    stroke(0);

    while(i>=8){
      if(i == 40 || i == 16){
        fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
        //left eye
        ellipse(-xPos, yPos, i, i);
        //right_eye
        ellipse(xPos, yPos, i, i);
      }
      if(i == 8){
        fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
        //left eye
        rect(-xPos, yPos, i, i);
        //right_eye
        rect(xPos, yPos, i, i);
      }
      i=i-8;
    }

    // mouth
    noFill();
    stroke(this.hue, 30, 90);
    strokeWeight(2);
    var i=40, j=50;
    if(this.mouth_style <= 20){
      i=35, j=55;
    }
    while(i<=j){
      line(-this.mouth_style, i, this.mouth_style, i);
      if(this.mouth_style < 30){
        line(-50, i, -35, i);
        line(50, i, 35, i);
      }
      if(this.mouth_style < 20){
        line(-30, i, -this.mouth_style - 5, i);
        line(30, i, this.mouth_style + 5, i);
      }
      i = i + 5;
    }

    colorMode(RGB);
    rectMode(CORNER);
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
    this.eye_value = getRandomNumberOfEyes();
    this.tilt_value = focusedRandom(-45, 45);
    this.mouth_value = focusedRandom(0, 50, 4, 1);
    var randomPointer = floor(random(1, 10));
    this.hue = focusedRandom(this.robotHueRanges[randomPointer][0], this.robotHueRanges[randomPointer][1], 10, this.robotHueRanges[randomPointer][2]);
    this.eye_distance = focusedRandom(50, 0);
    this.mouth_style = focusedRandom(50, 10);
    //the actual range of values for face_shape is 0-200 but I want the value for face shape to be either close to 0 or 200
    //so I have focused the random value around a mean of 200 between a range of 100 and 300
    this.face_shape = focusedRandom(100, 300, 10, 200);
    //and if the value ends up being greater than 200
    if(this.face_shape > 200){
      //make it closer to zero
      this.face_shape = this.face_shape - 200;
    }
    this.face_height = focusedRandom(0, 120);
  }

    /*
   * JSON object consisting of six hue ranges
   * used to ensure each robot has a unique hue
   * the third element of each array is the midpoint of the range
   * which is used to set the mean value for the focusedRandom function
   */
  this.robotHueRanges = {
      1 : [-20, 20, 0],
      2 : [21, 60, 40],
      3 : [61, 100, 80],
      4 : [101, 140, 120],
      5 : [141, 180, 160],
      6 : [181, 220, 200],
      7 : [221, 260, 240],
      8 : [261, 300, 280],
      9 : [301, 340, 320]
  }
}

// global functions can also be in this file below

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  var random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 1;
  }
  else if(random_result < 25) {
    return 2;
  }
  else if(random_result < 75) {
    return 3;
  }
  else {
    return 4;
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