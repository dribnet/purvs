/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_UpDown = 0;
  this.eye_LeftRight = 0;
  this.mouth_value = 0;

  // other variables can be in here too
  // these control the colors used
  this.skin_color = "#96C195";

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h) {
  push();
  translate(x, y);
  noStroke();
  rotate(this.tilt_value);
  var defect = focusedRandom(0, 100);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  fill("#AEB8AC");
  if (defect < 20){
  triangle(-120  * scale,-90 * scale,-80 * scale,-110 * scale,-100 * scale,-160 * scale);
  } else if (defect < 30){
  triangle(120 * scale,-90 * scale,80 * scale,-110 * scale,100 * scale,-160 * scale);
  }
  else{
    triangle(-120  * scale,-90 * scale,-80 * scale,-110 * scale,-100 * scale,-160 * scale);
    triangle(120 * scale,-90 * scale,80 * scale,-110 * scale,100 * scale,-160 * scale);
  }

  //Horn dark color
  fill("#727871");
    if (defect < 20){
    triangle(-108 * scale,-135 * scale,-90 * scale,-135 * scale,-100 * scale,-160 * scale);
   } else if (defect < 30){
    triangle(110 * scale,-120 * scale,90 * scale,-135 * scale,100 * scale,-160 * scale);
   } else{
    triangle(-108 * scale,-135 * scale,-90 * scale,-135 * scale,-100 * scale,-160 * scale);
    triangle(110 * scale,-120 * scale,90 * scale,-135 * scale,100 * scale,-160 * scale);
  }
  fill(this.skin_color);
  ellipse(0, 0, 300 * scale, 300 * scale);

  // Mouth 
  fill("#ffffff");
  ellipse(0 * scale, 55 * scale, 200 * scale, 75 * scale);
  // Cover for mouth ellipse
  fill(this.skin_color);
  ellipse(0 * scale, (this.mouth_value-20) * scale, this.mouth_value*3.25 * scale, this.mouth_value * scale);
 
  fill("#ffffff");
  ellipse(0 * scale, -40 * scale, 160 * scale, 160 * scale);

  // set fill back to foreground for eyeballs
  fill(this.skin_color);
  ellipse(this.eye_LeftRight * scale, -this.eye_UpDown * scale , 120 * scale, 120 * scale);

  //pupils
  fill("#000000");
  ellipse(this.eye_LeftRight * scale, -this.eye_UpDown * scale, 60 * scale, 60 * scale);

  pop();
  }
  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.skin_color = getRandomColor();
    this.eye_UpDown = focusedRandom(20, 60);
    this.eye_LeftRight = focusedRandom(-40, 40);
    this.tilt_value = focusedRandom(-10, 10);
    this.mouth_value = focusedRandom(50, 80);
  }
}

// global functions can also be in this file below

function getRandomColor() {
 var random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return fg_color1 = "#96C195";
  }
  else if(random_result < 20) {
    return fg_color1 = "#6E8E6E";
  }
  else {
    return fg_color1 = "#57B555";
  }
}

subl ps2/.git/config
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