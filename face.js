/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.forehead_value;
  this.foreColor_value;
  this.eye_value;
  this.eyeRim_value;
  this.mouth_value;
  this.jaw_value;
  this.skinColor_value;
  this.tri1_value;
  this.tri2_value;

  // other variables can be in here too
  // these control the colors used
  //mask colors
  this.bg_color2 = "#f2e6d9";
  this.eyeBall_color = "#000000";
  this.mouth_color = "#990000";
  this.tri_color = "#ffdb4d";
  this.sun_color = "#e60000";

  this.bg_color = [225, 206, 187];
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
    
    //face
    push();
    translate(x, y);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 45.0;

    //whole skin
    fill(this.skinColor_value);
    beginShape();
    vertex(0, -40 * scale);
    bezierVertex(20 * scale, -40 * scale, 25 * scale, -20 * scale, 20 * scale, 0);
    vertex(20 * scale, 0);
    bezierVertex(20 * scale, 15 * scale, 20 * scale, 32 * scale, 0, 30 * scale);
    endShape();

    beginShape();
    vertex(0, -40 * scale);
    bezierVertex(20 * -scale, -40 * scale, 25 * -scale, -20 * scale, 20 * -scale, 0);
    vertex(20 * -scale, 0);
    bezierVertex(20 * -scale, 15 * scale, 20 * -scale, 32 * scale, 0, 30 * scale);
    endShape();

    //forehead
    fill(this.foreColor_value);
    strokeWeight(1.5);
    stroke("#ffffff");
    beginShape();
    vertex(15 * this.forehead_value * scale, -34 * this.forehead_value * scale);
    bezierVertex(15 * this.forehead_value * scale, -25 * this.forehead_value * scale, 9 * scale, -12 * scale, 6 * scale, -7 * scale);
    vertex(6 * scale, -7 * scale);
    bezierVertex(10 * this.forehead_value * scale, -10 * this.forehead_value * scale, 15 * this.forehead_value * scale, -10 * this.forehead_value * scale, 20 * scale, -20 * scale);
    vertex(20 * scale, -20 * scale);
    bezierVertex(18 * scale, -20 * scale, 15 * this.forehead_value * scale, -20 * this.forehead_value * scale, 15 * this.forehead_value * scale, -34 * this.forehead_value * scale);
    endShape();

    beginShape();
    vertex(15 * -this.forehead_value * scale, -34 * this.forehead_value * scale);
    bezierVertex(15 * -this.forehead_value * scale, -25 * this.forehead_value * scale, -9 * scale, -12 * scale, -6 * scale, -7 * scale);
    vertex(-6 * scale, -7 * scale);
    bezierVertex(10 * -this.forehead_value * scale, -10 * this.forehead_value * scale, 15 * -this.forehead_value * scale, -10 * this.forehead_value * scale, -20 * scale, -20 * scale);
    vertex(-20 * scale, -20 * scale);
    bezierVertex(-18 * scale, -20 * scale, 15 * -this.forehead_value * scale, -20 * this.forehead_value * scale, 15 * -this.forehead_value * scale, -34 * this.forehead_value * scale);
    endShape();

    //eye rim
    fill("#000000");
    strokeWeight(0.7);
    beginShape();
    vertex(6 * scale, -7 * scale);
    bezierVertex(1 * this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, 2 * this.eyeRim_value * scale, -4 * this.eyeRim_value * scale, 1 * scale, 1 * scale);
    vertex(1 * scale, 1 * scale);
    bezierVertex(4 * this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, 10 * this.eyeRim_value * scale, 10 * this.eyeRim_value * scale, 20 * scale, 0);
    vertex(20 * scale, 0);
    bezierVertex(15 * this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, 18 + this.eyeRim_value * scale, -8 + this.eyeRim_value * scale, 22 * scale, -12 * scale);
    endShape();

    beginShape();
    vertex(-6 * scale, -7 * scale);
    bezierVertex(1 * -this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, 2 * -this.eyeRim_value * scale, -4 * this.eyeRim_value * scale, -1 * scale, 1 * scale);
    vertex(-1 * scale, 1 * scale);
    bezierVertex(4 * -this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, 10 * -this.eyeRim_value * scale, 10 * this.eyeRim_value * scale, -20 * scale, 0);
    vertex(-20 * scale, 0);
    bezierVertex(15 * -this.eyeRim_value * scale, -5 * this.eyeRim_value * scale, -18 + this.eyeRim_value * scale, -8 + this.eyeRim_value * scale, -22 * scale, -12 * scale);
    endShape();

    //eye hole
    fill(this.bg_color2);
    noStroke();  
    ellipse(9 * scale, -5 * scale, 8 * scale, 4 * this.eye_value * scale);
    ellipse(-9 * scale, -5 * scale, 8 * scale, 4 * this.eye_value * scale);
    //eye ball
    fill(this.eyeBall_color);
    ellipse(8.5 * this.eye_value * scale, -5 * scale, 4.5 * scale);
    ellipse(8.5 * -this.eye_value * scale, -5 * scale, 4.5 * scale);

    //nose
    push();
    fill("#000000");
    rotate(-25);
    ellipse(0, 10 * scale, 5 * scale, 2 * scale);
    rotate(50);
    ellipse(0, 10 * scale, 5 * scale, 2 * scale);
    pop();

    //jaw
    fill("#000000");
    beginShape();
    vertex(0 * this.jaw_value, 15 * this.jaw_value * scale);
    bezierVertex(20 * this.jaw_value * scale, 5 * this.jaw_value * scale, 16 * this.jaw_value * scale, 20 * this.jaw_value * scale, 14 * scale, 27 * scale);
    endShape();

    beginShape();
    vertex(0 * this.jaw_value, 15 * this.jaw_value * scale);
    bezierVertex(20 * -this.jaw_value * scale, 5 * this.jaw_value * scale, 16 * -this.jaw_value * scale, 20 * this.jaw_value * scale, 14 * -scale, 27 * scale);
    endShape();

    fill(this.bg_color2);
    beginShape();
    vertex(0, 15 * scale);
    bezierVertex(13 * scale, 16 * scale, 13 * scale, 20 * scale, 14 * scale, 27 * scale);
    vertex(14 * scale, 27 * scale);
    bezierVertex(12 * scale, 30 * scale, 10 * scale, 35 * scale, 0, 30 * scale);
    endShape();

    beginShape();
    vertex(0, 15 * scale);
    bezierVertex(13 * -scale, 16 * scale, 13 * -scale, 20 * scale, 14 * -scale, 27 * scale);
    vertex(14 * -scale, 27 * scale);
    bezierVertex(12 * -scale, 30 * scale, 10 * -scale, 35 * scale, 0, 30 * scale);
    endShape();

    //mouth
    fill(this.mouth_color);
    quad(0, 17 * scale, 5 * scale, 17 * scale, 2 + this.mouth_value * scale, 20 * this.mouth_value * scale, 0, 20 * this.mouth_value * scale);
    quad(0, 17 * scale, 5 * -scale, 17 * scale, -2 + this.mouth_value * -scale, 20 * this.mouth_value * scale, 0, 20 * this.mouth_value * scale);
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
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(0, 50, 4, 1);

    this.forehead_value = focusedRandom(0.5, 1.8, 1, 1.3);
    this.foreColor_value = [Math.floor(focusedRandom(102, 255)), Math.floor(focusedRandom(255, 51)), 51];
    this.eye_value = focusedRandom(0.8, 1.3, 3, 1);
    this.eyeRim_value = focusedRandom(0.5, 3, 2, 2);
    this.mouth_value = focusedRandom(0.9, 1.3);
    this.jaw_value = focusedRandom(0.3, 1.4, 2, 0.9);
    this.skinColor_value = [Math.floor(focusedRandom(20, 100)), Math.floor(focusedRandom(80, 20)), Math.floor(focusedRandom(100, 20))];
    this.tri1_value = focusedRandom(-5, 1, 4, -1);
    this.tri2_value = focusedRandom(0, 1, 2, 0.8);
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