/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [225, 206, 187];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [95, 52, 8];

  //Spongebob Variables
  //These should global variables


  //Instance Variables
  this.colorHair = [20, 20, 0];
  this.head_color = 0;
  this.curves_number = 5;
  this.eye_value = 0;
  this.mouth_value = 25;
  this.eyebrow_angle = 0;
  this.eyebrow_curve = 0;
  this.hole_value = 0;


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

    var eyelash_color = "#000000";
    var iris_color = "#43c6f2";
    var pupil_color = "#000000";
    var mouth_color = "#773536";
    var tongue_color = "#dd9c98"
    var tongue_outine = "#ca2931";
    var eye_color = [255,255,255];
    var black_color = [0,0,0];
    var eyelash_size = 8;
    var eye_size = 110;
    var iris_size = 50;
    var pupil_size = 20;

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
    var _scale = extent / 220.0;

  //Spongebob squiggles 

  sponge_color = [254, 244 - this.head_color, 110 + this.head_color];
  outline_color = [146, 147 - this.head_color/2, 3 + this.head_color];
 
  // move to position1, rotate, start drawing spongebob
  push();
  //translate(960/4, 500/2);
  //translate(-240, -250);
  scale(0.2, .2);
  fill(sponge_color);
  strokeWeight(0);
  rect(-175, -187, 350, 375);
  
  strokeWeight(5);  
  fill(sponge_color);
  stroke(outline_color);

  for(var i = 0; i < this.curves_number; i++){
    curve(-75, -297 + ((374/this.curves_number) * i),  -175, -187+ ((374/this.curves_number) * i),  -175, -187 + ((374/this.curves_number) * (i+1)), -205, -187 + ((374/this.curves_number) * (i+1)));
    
    curve(75, -297 + ((374/this.curves_number) * i),  175, -187+ ((374/this.curves_number) * i),  175, -187 + ((374/this.curves_number) * (i+1)), 205, -187 + ((374/this.curves_number) * (i+1)));
    
    curve(-275 + ((350/this.curves_number) * i), -87, -175 + ((350/this.curves_number) * i), -187, -175 + ((350/this.curves_number) * (i+1)), -187, -75+ ((350/this.curves_number) * i), -200);
    
    curve(-275 + ((350/this.curves_number) * i), 0, -175 + ((350/this.curves_number) * i), 187, -175 + ((350/this.curves_number) * (i+1)), 187, -175+ ((350/this.curves_number) * i), 200);
  }

    //Eyes  
  // set fill to match background color
  fill(eye_color);
  stroke(black_color);
  // draw two eyes
  ellipse(-50 - this.eye_value/2, -80, eye_size + this.eye_value, eye_size + this.eye_value);
  ellipse( 50 + this.eye_value/2, -80, eye_size + this.eye_value, eye_size + this.eye_value);

  // set fill back to foreground for eyeballs
  fill(iris_color);
  ellipse(-50, -80, iris_size + this.eye_value, iris_size + this.eye_value);
  ellipse( 50, -80, iris_size + this.eye_value, iris_size + this.eye_value);

// set fill back to foreground for pupils
  fill(pupil_color);
  ellipse(-50 + this.eye_value/10, -80, pupil_size, pupil_size);
  ellipse( 50 - this.eye_value/10, -80, pupil_size, pupil_size);

// nose with skin color
  fill(sponge_color);
  ellipse(0, -30, 45, 45);

  //Eyebrows  
  fill(sponge_color);
  stroke(black_color);
  
  var eyebrow_y = -50 - this.eye_value/2;
  
  var ellipse_size = (this.eyebrow_curve*-1) / 100; 
  
  
  //Draw the eyebrow inner but not the outline yet
  //LEFT
  push();
  translate(-60, -85);
  rotate(this.eyebrow_angle);
  strokeWeight(0);
  //ellipse(0, eyebrow_y, 85*ellipse_size, 15);
  for(var i = 1; i <= 3; i++){
    curve(0,eyebrow_y+this.eyebrow_curve - 70, -50,eyebrow_y - 5 * i, 50,eyebrow_y - 5 * i, 0,eyebrow_y+this.eyebrow_curve - 70);
  }
  
  pop();
  
  //RIGHT
  push();
  translate(65, -85);
  rotate(-this.eyebrow_angle);
  strokeWeight(0);
  //ellipse(0, eyebrow_y, 85*ellipse_size, 15);
  for(var i = 1; i <= 3; i++){
      curve(0,eyebrow_y+this.eyebrow_curve - 70, -50,eyebrow_y - 5 * i, 50,eyebrow_y - 5 * i, 0,eyebrow_y+this.eyebrow_curve - 70);
  }
  
  pop();

    //Draw the holes
  strokeWeight(0);
  fill(outline_color);
  if(this.hole_value > 1){
      ellipse(-140,-140,44,35);
    ellipse(140,-120,40,37);
  }
  if(this.hole_value > 2){
  ellipse(100,-150,25,18);
  ellipse(-110,120,40,50);
  }
  if(this.hole_value > 3)
    ellipse(100,140,33,44);
  if(this.hole_value > 4){
  ellipse(50,120,20,25);
  ellipse(-60,150,20,15);
  }
  
  //Draw the eyebrows outine so they don't get cut off
  strokeWeight(5);
  push();
  translate(-60, -85);
  rotate(this.eyebrow_angle);
  fill(0, 0, 0, 0)
    curve(0,eyebrow_y+this.eyebrow_curve, -50,eyebrow_y, 50,eyebrow_y, 0,eyebrow_y+this.eyebrow_curve);
  pop();
  
  push();
  translate(65, -85);
  rotate(-this.eyebrow_angle);
  fill(0,0, 0, 0)
    curve(0,eyebrow_y+this.eyebrow_curve, -50,eyebrow_y, 50,eyebrow_y, 0,eyebrow_y+this.eyebrow_curve);
  pop();

  //Cheeks
  fill(sponge_color);
  stroke(outline_color);
  curve(-20, 180, -120, -5, -90, -5, -250, 80);
  //curve(110, 80, 110, 0, 80, 0, 80, 80);
  curve(220, 180, 80, -5, 110, -5, -70, 80);
  fill(outline_color);
  strokeWeight(1);
  ellipse(-110,-10,3,3);
  ellipse(-100,-10,3,3);
  ellipse(-105,-15,3,3);
  ellipse(100,-10,3,3);
  ellipse(90,-10,3,3);
  ellipse(95,-15,3,3);

  //Inside of mouth
  translate(-105, -100);
  strokeWeight(3);
  fill(mouth_color);
  stroke(black_color);
  
  curve(150,-200 - this.mouth_value, 200,102,0,102,50,-200 - this.mouth_value);
  push();
  translate(-10, this.mouth_value/8 - 110);
  fill(tongue_color);
  strokeWeight(0);
  scale(1.2, 1.2);
  
  ellipse(95, 195, 52, 19);
  
  strokeWeight(4);
  stroke(tongue_outine);
  
  curve(100,195, 67,200,90,185, 150, 185);//left tongue part
  curve(70,235, 90,190, 120,195, 150, 285);//right tongue part
  pop();
  
  strokeWeight(5);
  fill(0,0,0, 0);
  stroke(black_color);
  
  curve(150,-200 - this.mouth_value, 200,100,0,100,50,-200 - this.mouth_value);
  
  // mouth-hole with background color
 
  stroke(black_color);
  fill(eye_color);
  rect(115,130,30,35);
  rect(65,130,30,35);
  fill(sponge_color);
  curve(150,-200, 200,100,0,100,50,-200);
  pop();

  pop();
  //*/
  
    // head
    stroke(this.stroke_color);
    fill(this.fg_color);
    //ellipse(0, 0, 300 * _scale, 400 * _scale);
    noStroke();

    // mouth
    fill(this.bg_color);
    ellipse(0 * _scale, 70 * _scale, 150 * _scale, this.mouth_value * _scale);
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
    this.eye_value = focusedRandom(-25, 25);
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(0, 1000);
    this.eyebrow_angle = focusedRandom(-45, 25);
    this.eyebrow_curve = focusedRandom(0, -200);
    this.hole_value = int(focusedRandom(1, 5));
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