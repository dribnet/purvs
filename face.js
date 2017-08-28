/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 0;
  this.slids = new SliderValues();
  this.slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [225, 206, 187];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [95, 52, 8];
//creates the object that stores the random numbers
    this.sliders = new SliderValues();
    this.sliders.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));


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
    //creates and draws a rag doll head
   this.dolly = new RagDoll(w*3.5,80+h*3.5,this.slids);
   this.img = this.dolly.drawFace();
   image(this.img,x-w/4,y-h/3,w,h);
  }

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw2 = function(positions) {
    this.dolly = new RagDoll(w,h,this.sliders);
this.img = this.dolly.drawFace();
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {
    this.eye_value = getRandomNumberOfEyes();
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = focusedRandom(0, 50, 4, 1);
    //provides a new set of random numbers to the SliderValues object that gets passed to the rag doll
    this.slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
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