/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 0;
  this.brow_value = -30;

  // other variables can be in here too
  // these control the colors used
   this.bg_color = [61,61,61]; 
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
    var scale = extent / 140.0;
      
      
    	random_result = focusedRandom(0, 100);
        if(random_result < 40) {

               rotate(20);

        }
        if(random_result < 20) {

               rotate(-25);

        }

        else {
 		rotate(0);


        }
      

    // head
      fill(234, 209, 197);
    beginShape();
    vertex(-80* scale,0);
    vertex(-50* scale, 70* scale);
    vertex(-40* scale, 80* scale);
    vertex(-10* scale, 100* scale);
     vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(-40* scale, -100* scale);
    vertex(-70* scale, -70* scale);
    endShape();
    
    push();
    translate(-0.5,0);
    beginShape();
    vertex(80* scale,0);
    vertex(50* scale, 70* scale);
    vertex(40* scale, 80* scale);
    vertex(10* scale, 100* scale);
    vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(40* scale, -100* scale);
    vertex(70* scale, -70* scale);
    endShape();
    pop();
      
      
        //hair
    fill(94, 57, 10);
    
    noStroke();
     beginShape();
  vertex(-30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(-2* scale,-70* scale);
  vertex(-85* scale, -10* scale);
    vertex(-70* scale, -70* scale);
  vertex(-50* scale, -100* scale);
   endShape();
    
  push(); 
    translate(0,0);
   beginShape();
  vertex(30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(2* scale,-70* scale);
  vertex(85* scale, -10* scale);
    vertex(70* scale, -70* scale);
  vertex(50* scale, -100* scale);
   endShape();
    pop();
      
      
      
    //hair buns
       beginShape();
    vertex(-90* scale,-80* scale);
    vertex(-80* scale, -90* scale);
    vertex(-65* scale, -60* scale);
    vertex (-65* scale,20* scale);
    vertex (-80* scale,40* scale);
    vertex(-90* scale, 30* scale);
    vertex(-110* scale,-60* scale);
    vertex(-95* scale,-80* scale);
        endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(90* scale,-80* scale);
    vertex(80* scale, -90* scale);
    vertex(65* scale, -60* scale);
    vertex (65* scale,20* scale);
    vertex (80* scale,40* scale);
    vertex(90* scale, 30* scale);
    vertex(110* scale,-60* scale);
    vertex(95* scale,-80* scale);
  endShape();
pop();
      
    // stroke(this.stroke_color);
    // fill(this.fg_color);
    // ellipse(0, 0, 300 * scale, 400 * scale);
    // noStroke();
//lowered eyes and higher mouth
  	random_result = focusedRandom(0, 100);
        if(random_result < 40) {
				push();
               translate(0,10);

                 stroke(0);
    line(-20* scale,this.brow_value * scale,-45* scale,-40* scale);
    push();
    translate(0,0);
    line(20* scale,this.brow_value * scale,40* scale,-40* scale);
    pop();

                 // eyes
                 noStroke();
  if (this.eye_value === 1) {
    fill(255);
    ellipse(-30 * scale, -20 * scale, 20 * scale, 20 * scale);
    ellipse( 30 * scale, -20 * scale, 20 * scale, 20 * scale);
      fill(0);
    ellipse(-30 * scale, -20 * scale, 5 * scale, 5 * scale);
    ellipse( 30 * scale, -20 * scale, 5 * scale, 5 * scale);
  }

  if (this.eye_value >= 2) {
    fill(255);
    ellipse(-30 * scale, -20 * scale, 30 * scale, 30 * scale);
    ellipse( 30 * scale, -20 * scale, 30 * scale, 30 * scale);
     fill(0);
    ellipse(-30 * scale, -20 * scale, 10 * scale, 10 * scale);
    ellipse( 30 * scale, -20 * scale, 10 * scale, 10 * scale);
  }

   translate(0,-20);
   fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
     noFill();
      rotate(180);
      translate(0,34);
    arc(0, -60, this.mouth_value, 10, 20, 160);

      pop();


pop();

        }
        

        else {

        	  stroke(0);
    line(-20* scale,this.brow_value * scale,-45* scale,-30* scale);
    push();
    translate(0,0);
    line(20* scale,this.brow_value * scale,40* scale,-30* scale);
    pop();
          // eyes
 		  noStroke();
  if (this.eye_value === 1) {

    fill(255);
    ellipse(-30 * scale, -10 * scale, 20 * scale, 20 * scale);
    ellipse( 30 * scale, -10 * scale, 20 * scale, 20 * scale);
      fill(0);
    ellipse(-30 * scale, -10 * scale, 5 * scale, 5 * scale);
    ellipse( 30 * scale, -10 * scale, 5 * scale, 5 * scale);
  }

  if (this.eye_value >= 2) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 30 * scale, 30 * scale);
    ellipse( 30 * scale, -10 * scale, 30 * scale, 30 * scale);
     fill(0);
    ellipse(-30 * scale, -10 * scale, 10 * scale, 10 * scale);
    ellipse( 30 * scale, -10 * scale, 10 * scale, 10 * scale);
  }
  fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
     noFill();
      rotate(180);
      translate(0,34);
     arc(0, -55, this.mouth_value, 10, 20, 160);

      pop();



        }

      pop();


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
    this.brow_value = focusedRandom(-40, -50);
    this.eye_value = int(focusedRandom(1, 3));
    this.mouth_value = focusedRandom(5, 40);

      
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