/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 5;

  // other variables can be in here too
  // these control the colors used
  //this.bg_color = [225, 206, 187];
  //this.fg_color = [151, 102, 52];
  //this.stroke_color = [95, 52, 8];

  this.bg_color = [225, 206, 187];
  this.bg_color2 = [153,184,150];
  this.bg_color3 = [161, 159, 181];

  this.fg_color = [174, 110, 108];
  this.fg_color2 = [80, 45, 13];
  this.fg_color3 = [80, 45, 13];

  this.stroke_color = [95, 52, 8];
  this.stroke_color2 = [210, 219, 189];
  this.stroke_color3 = [50, 50, 50];

  this.colorHair = [20, 20, 0];

  this.mouthcolor = [255,255,255];
  this.cheeks = [213,132,151];
  this.ears = [141,89,88];
  this.eyes = [0,0,0];

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

    //shadow
  fill(36,36,36); 
  ellipse(10,10,80,80);

    // head
    //stroke(this.stroke_color);
    fill(this.fg_color);
    ellipse(0, 0, 400 * scale, 400 * scale);
    noStroke();

    //fill(184,116,114);
    //arc(10,-15,90,50,-800, PI*QUARTER_PI, OPEN);
    //arc(1,-6,150,140,-120, PI*QUARTER_PI, OPEN);

    //cheeks
  fill(this.cheeks);
  ellipse(20,-3,this.mouth_value * scale,10);
  ellipse(-20,-3,this.mouth_value * scale,10);

  //eyes

  fill(this.eyes);
    ellipse(-15, -10, 20, 5);
    ellipse( 15, -10, 20, 5);
    
    fill(221,217,218);
    ellipse(-15,-10,5,this.eye_value,20);
    ellipse(15,-10,5,this.eye_value,10);

    // eyes
    // if (this.eye_value === 1 || this.eye_value == 3) {
    //   fill(this.bg_color);
    //   ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
    //   fill(this.fg_color);
    //   ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
    // }

    // if (this.eye_value >= 2) {
    //   fill(this.bg_color);
    //   ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    //   ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    //   fill(this.fg_color);
    //   ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    //   ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
    // }

    //ears
  fill(this.ears);
  stroke(this.eyes);
  triangle(5, -40, 35, -25, 15, -15);
  triangle(-5, -40, -35, -25, -15, -15);

  //mouth
  if (this.mouth_value === 2 || this.mouth_value == 2) {
   stroke(12,0,0);
   line(-10, 45, 10, 45);
   line(0, 5, 5, 4);
 }

   else{
   stroke(12,0,0);
   line(-5, 20, 5, 20);

   } 

    // mouth
    // fill(this.bg_color);
    // ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
  //   pop();
  // }

// nose
  fill(this.ears);
  ellipse(0 * scale, 45 * scale, 150 * scale, this.mouth_value * scale);
  fill(this.eyes);
  ellipse(-10, 8, 3, 3);
  ellipse(10, 8, 3, 3);
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
    this.mouth_value = focusedRandom(50, 100);
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