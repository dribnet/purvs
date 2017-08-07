/*
 * Face class - holds all informaiton about one face
 */  
function Face (){

this.tilt_value = 0;
this.eye_value = 2;
this.mouth_value = 140;
this.width_value = 0;
this.ezv = 2;

this.bg_color1 = ["#55CCC0"];
this.bg_color2 = ["#578783"];
this.bg_color3 = ["#4B4D99"];

this.fg_color1 = ["#FFE991"];
this.fg_color2 = ["#559ACC"];
this.fg_color3 = ["#7F4B31"];

this.stroke_color1 = ["#FF84F5"];
this.stroke_color2 = ["#D492CD"];
this.stroke_color3 = ["#CC9378"];

this.draw1 = function (x,y,w,h) {

  push();
  translate (x,y);
  rotate (this.tilt_value);

  var extent = 0;
  if (h<w){
    extent = h/2;
  }
  else {
    extent = w/2;
  }
  var scales = extent / 220;

  if (this.ezv == 1) {
      this.foreground = this.fg_color1;
      this.strakC = this.stroke_color1;
      this.bg = this.bg_color1;
    }

  if (this.ezv == 2) {
    this.foreground = this.fg_color2;
    this.strakC = this.stroke_color2;
    this.bg = this.bg_color2;
  }

  if (this.ezv == 3) {
    this.foreground = this.fg_color3;
    this.strakC = this.stroke_color3;
    this.bg = this.bg_color3;
  }
  rectMode (CENTER);
  fill (this.bg);
  rect (0,0,w,h, 50);

  //head
  
  fill (this.foreground);
  ellipse(0, 0, 30 * scales + this.width_value, 400 * scales);
  stroke (this.strakC);
  fill (0,0);
    ellipse(0, 0, random (30,37) * scales + this.width_value, random(390, 400) * scales);
    ellipse(0, 0, random (30,37) * scales + this.width_value, random(390, 400) * scales);

    // eyes
    if (this.eye_value === 1 || this.eye_value == 3) {
      strokeWeight (random (1, 1.5));
      ellipse(0 * scales, -80 * scales, random (15, 15+random (0,15)) * scales, random(15, 15+random (0,15)) * scales);
      ellipse(0 * scales, -80 * scales, random (15, 15+random (0,15)) * scales, random(15, 15+random (0,15)) * scales);
      ellipse(0 * scales, -80 * scales, random (15, 15+random (0,15)) * scales, random(15, 15+random (0,15))* scales);

  }

    if (this.eye_value >= 2) {
      strokeWeight (random (1, 1.5));
      ellipse(-60 * scales - (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales); 
      ellipse(-60 * scales - (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales); 
      ellipse(-60 * scales - (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales); 

      strokeWeight (random (1, 1.5));
      ellipse( 50 * scales + (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales);
      ellipse( 50 * scales + (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales);
      ellipse( 50 * scales + (this.width_value/2), -80 * scales, random (20, 20+random (0,15)) * scales, random(20, 20+random (0,15)) * scales);
  }
  // mouth
  strokeWeight(1);
  fill(this.bg);
  noStroke();
  ellipse(0 * scales, 70 * scales, 150 * scales + this.width_value, (this.mouth_value+5) * scales);
  fill (0,0);
  stroke (this.strakC);
  ellipse(0, 0, random (30,(30+random (0,15))) * scales + this.width_value, random(390, (390+random (0,15))) * scales);
  ellipse(0, 0, random (30,(30+random (0,15))) * scales + this.width_value, random(390, (390+random (0,15))) * scales);
  pop();
}

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  // this.draw2 = function(positions) {
  //   var nose_pos = average_point(positions.nose_bridge);
  //   var eye1_pos = average_point(positions.left_eye);
  //   var eye2_pos = average_point(positions.right_eye);
  //   var half_height = positions.chin[7][1] - nose_pos[1];
  //   var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

  //   var x = nose_pos[0];
  //   var y = nose_pos[1];
  //   var w = 2 * face_width;
  //   var h = 2.5 * half_height;

  //   var extent = 0;
  //   if(h < w) {
  //     extent = h / 2;
  //   }
  //   else {
  //     extent = w / 2;
  //   }
  //   var scale = extent / 220.0;

  //   // Uncomment to see drawing area
  //   // fill(255);
  //   // stroke(0);
  //   // rect(x-w/2, y-h/2, w, h);
  //   // fill(0)
  //   // ellipse(x, y, w, h);

  //   push();
  //   translate(x, y);
  //   rotate(this.tilt_value);

  //   // head
  //   stroke(this.stroke_color);
  //   fill(this.fg_color);
  //   ellipse(0, 0, 300 * scale, 400 * scale);
  //   noStroke();

  //   // mouth
  //   fill(this.bg_color);
  //   ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
  //   pop();

  //   noStroke();

  //   fill(this.bg_color);
  //   ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
  //   ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

  //   fill(this.fg_color);
  //   ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
  //   ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  // }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.eye_value = getRandomNumberOfEyes();
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(0, 50, 4, 1);
    this.width_value = getRandomWidth();
    this.ezv = getRandomColor();

  }
}

// global functions can also be in this file below
function getRandomColor() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 1;
  }
  else if(random_result < 50) {
    return 3;
  }
  else {
    return 2;
  }
}

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

function getRandomWidth(){
  random_result = random(0, 100);
  if(random_result < 15) {
    return random (40, 60);
  }
  else if(random_result < 25) {
    return random (20, 40);
  }
  else {
    return random (0, 20);
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