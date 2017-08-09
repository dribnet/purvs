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
  this.bg_color = [100, 100, 100];
  this.fg_color = [100, 100, 100];
  this.stroke_color = [95, 52, 8];

  this.face_width = 300;
  this.cheek_value = 15;
  this.chin_value = 2;

  this.faceColor = ["#ebcebb", "#ffd5be", "#f6cfaf", "#CAA288", "#D7A595", "#8c6652"];




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
    var size = extent / 220.0;

    // face shape
    this.generateFaceShape = function(){
    push();
    h_offset = h/10;
  	translate(-w/4, (-h/2)+h_offset);
  	scale(0.2, 0.2);
	stroke(this.stroke_color);
	fill(this.faceColor[this.color_value]);
	beginShape();
	curveVertex(98, 300);
	curveVertex((this.face_width/2)-2, 25);
	curveVertex(45, 30);
	curveVertex(5, 110);
	curveVertex(0, 180);
	curveVertex(20 - this.cheek_value, 250 - this.cheek_value);
	curveVertex(38, 280);
	curveVertex(108 + this.chin_value, 335 + this.chin_value);
	curveVertex(138, 300);
	curveVertex(128, 100);
	curveVertex(123, 20);
	endShape();
	noStroke();
	beginShape();
	curveVertex(100, w);
	curveVertex(this.face_width/2, 25);
	curveVertex(45, 30);
	curveVertex(5, 110);
	curveVertex(0, 180);
	curveVertex(20 - this.cheek_value, 250 - this.cheek_value);
	curveVertex(40, 280);
	curveVertex(108 + this.chin_value, 335 + this.chin_value);
	curveVertex(140, 300);
	curveVertex(130, 100);
	curveVertex(125, 20);
	endShape();
	pop();
	}

	this.generateFaceShape();
	push();
	scale(-1, 1);
	this.generateFaceShape();
	pop();

    // eyes
    if (this.eye_value === 1 || this.eye_value == 3) {
      fill(this.bg_color);
      ellipse( 0, -80 * size, 50 * size, 30 * size);
      fill(this.fg_color);
      ellipse(-10 * size, -80 * size, 20 * size, 20 * size);
    }

    if (this.eye_value >= 2) {
      fill(this.bg_color);
      ellipse(-50 * size, -80 * size, 50 * size, 30 * size);
      ellipse( 50 * size, -80 * size, 50 * size, 30 * size);

      fill(this.fg_color);
      ellipse(-60 * size, -80 * size, 20 * size, 20 * size);
      ellipse( 40 * size, -80 * size, 20 * size, 20 * size);
    }

    // mouth
    fill(this.bg_color);
    ellipse(0 * size, 70 * size, 150 * size, this.mouth_value * size);
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
  //   var size = extent / 220.0;

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
  //   ellipse(0, 0, 300 * size, 400 * size);
  //   noStroke();

  //   // mouth
  //   fill(this.bg_color);
  //   ellipse(0 * size, 70 * size, 150 * size, this.mouth_value * size);
  //   pop();

  //   noStroke();

  //   fill(this.bg_color);
  //   ellipse(eye1_pos[0], eye1_pos[1], 50 * size, 30 * size);
  //   ellipse(eye2_pos[0], eye2_pos[1], 50 * size, 30 * size);

  //   fill(this.fg_color);
  //   ellipse(eye1_pos[0], eye1_pos[1], 20 * size, 20 * size);
  //   ellipse(eye2_pos[0], eye2_pos[1], 20 * size, 20 * size);
  // }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.eye_value = getRandomNumberOfEyes();
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(0, 50, 4, 1);

    this.color_value = Math.floor(focusedRandom(0, 6, 4, 1));
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