/*
 * Face class - holds all information about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 3;
  this.horn_value = 3;
  this.mouth_value = 0;
  this.width_value = 2;

  // other variables can be in here too
  // these control the colors used
  var minC = 100;
  var maxC = 255;
  this.bg_color = [92, 153, 149];
  this.fg_color = [13, 204, 193];
  this.fg_color2 = [255, 255, 255,];
  this.stroke_color = [204, 21, 174];

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
    this.fg_color[2] = Math.random() * (maxC - minC) + minC;
    fill(this.fg_color);

    rectMode(CENTER);
    //rect(0, 0, 50, 50);
    quad(-20 * scale*10, -20, 20, -20, 20, 40 + this.mouth_value, -20, 40 - this.tilt_value/2);
  // eyes

  if (this.eye_value == 1) {
    fill(this.fg_color2);
    ellipse( 0 + mouseX/x, -80 * scale + mouseY/y, 120 * scale, 120 * scale);
    fill(this.fg_color);
    ellipse(0 + mouseX/x, -80 * scale + mouseY/y, 40 * scale, 40 * scale);
  }

  if (this.eye_value == 2) {
    fill(this.fg_color2);
    rect(-60 * scale + mouseX/x/2, -80 * scale + mouseY/y, 80 * scale, 80 * scale);
    rect( 60 * scale + mouseX/x/2, -80 * scale + mouseY/y, 80 * scale, 80 * scale);

    fill(this.fg_color);
    ellipse( -10  + mouseX/x/2, -15  + mouseY/y, 40 * scale, 20 * scale);
    ellipse( 10 + mouseX/x/2, -15 + mouseY/y, 40 * scale, 20 * scale);
  }

  if (this.eye_value == 3) {
    fill(this.bg_color);
    noStroke();
    rect(-60 * scale, -60 * scale, 80 * scale, 20 * scale);
    rect( 60 * scale, -60 * scale, 80 * scale, 20 * scale);
    stroke(this.stroke_color);
  }


// horns two
  if (this.horn_value == 2) {
    fill(this.fg_color2);
    stroke(this.stroke_color);
    triangle(-25, -30, -15, -40 - this.tilt_value, -5, -30);
    triangle(5, -30, 15, -40 - this.tilt_value, 25, -30);
	}
	else if(this.horn_value == 3){
  	fill(this.fg_color);
    triangle(-20, -30, 0, -40 - this.tilt_value, 20, -30);
  }
   


  //Eyebrows
  rect(-15, -25 - this.mouth_value/8, 50 * scale, 10 * scale);
  rect(15, -25 - this.mouth_value/12, 50 * scale, 10 * scale);


  // mouth
  fill(this.bg_color);
  noStroke();
  rect(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale * 2);


  //Teeth
  fill (this.fg_color2);
  rect(-10, 10, (15 + this.width_value) * scale, (30 + this.width_value) * scale);
  rect(10, 10, (15 + this.width_value) * scale, (30 + this.width_value) * scale);
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
    this.horn_value = getRandomNumberOfHorns();
  }
}

// global functions can also be in this file below

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 20) {
    return 1;
  }
  else if(random_result < 40) {
    return 3;
  }
  else {
    return 2;
  }
}

function getRandomNumberOfHorns() {
  random_result = focusedRandom(0, 100);
  if(random_result < 20) {
    return 1;
  }
  else if(random_result < 40) {
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