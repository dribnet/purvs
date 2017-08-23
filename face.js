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
  this.testcolour = [0,0,255];
  this.face = [121,58,87,focusedRandom(0,255,102)];
  this.eyes = [209,197,165,focusedRandom(0,255,102)];
  this.innereyes = [0,0,255];
  this.face2 = [140,135,62,focusedRandom(0,255,102)];

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
    fill(this.fg_color);
    //ellipse(0, 0, 300 * scale, 400 * scale);
    fill(this.face);
    triangle(0,200*scale,300*scale,-300*scale,-200*scale,-300*scale);

    fill(this.face2);
    triangle(random()*250*scale,-150*scale,random()*150*scale,200*scale,random()*-150*scale,-320*scale);
    noStroke();

    push();
    translate(0,-15);
    // eyes
    if (this.eye_value === 1 || this.eye_value == 3) {
      fill(this.eyes);
      //ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
      triangle(-25*scale,-95*scale,0,-50*scale,25 * scale, -95 * scale);
      fill(this.innereyes);
      //ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
      triangle(0,-95*scale,-12*scale,-72*scale,12*scale,-72*scale);

    }

    if (this.eye_value >= 2) {
      fill(this.eyes);
      //fill(250,2,2);
     //ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
     triangle(-75*scale,-95*scale,-25*scale,-95*scale,-50*scale,-50*scale);
     fill(this.eyes);
     //ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);
     triangle(75*scale,-95*scale,25*scale,-95*scale,50*scale,-50*scale);

      fill(this.innereyes);
      //ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
      //ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
      triangle(-50*scale,-95*scale,-62*scale,-73*scale,-37*scale,-73*scale);
      triangle(50*scale,-95*scale,62*scale,-73*scale,37*scale,-73*scale);
    }
    pop();
    // mouth
    fill(this.bg_color);
    //ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
    //fill(this.testcolour);
    //triangle(-50 , -80, 50);
    //fill(this.testcolour);
    triangle(-150*scale, -10*scale, 150*scale,-10*scale,-30,this.mouth_value * scale);
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