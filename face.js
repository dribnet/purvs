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


  this.draw1 = function(x, y, w, h) {


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

    bg_color1 = [map(this.tilt_value,0,100,91,150),map(this.eye_value,0,100,45,65),map(this.eye_value,0,100,12,120)];
    fill(137 + this.colour_random, 108 + this.colour_random, 78 + this.colour_random);
    beginShape();
    vertex(0, -125* scale);
    bezierVertex(-84* scale, -122* scale,-130* scale, -31* scale, -128* scale, 46* scale);
    bezierVertex(-127* scale, 105* scale, -75* scale, 131* scale, 0, 130* scale);
    bezierVertex(75* scale, 131* scale,127* scale, 105* scale,128* scale, 46* scale);
    bezierVertex(130* scale, -31* scale,84* scale, -122* scale,0, -125* scale);
    endShape();

    beginShape();
    vertex(80* scale,100* scale);
    vertex(-80* scale,100* scale);
    vertex(0,170* scale);
    endShape();

    ellipse(-95* scale,-105* scale,60* scale,60* scale);
    ellipse(95* scale,-105* scale,60* scale,60* scale);
    fill( 211 +(this.colour_random/1.5), 191+(this.colour_random/1.5), 180+(this.colour_random/1.5));
    ellipse(-97* scale,-105* scale,48* scale,48* scale);
    ellipse(97* scale,-105* scale,48* scale,48* scale);

    beginShape();
    vertex(0, 20* scale);
    bezierVertex(-22* scale, 20* scale, -64* scale, 49* scale, -63* scale, 88* scale);
    bezierVertex(-65* scale, 104* scale, -36* scale, 128* scale, 0, 128* scale);
    bezierVertex(36* scale, 128* scale,65* scale, 104* scale,63* scale, 88* scale);
    bezierVertex(64* scale, 49* scale,22* scale, 20* scale,0, 20* scale);
    endShape();

    fill('#5f4c2c');
    beginShape();
    vertex(-14* scale, 37* scale);
    bezierVertex(-14* scale, 39* scale, -6* scale, 47* scale, 0* scale, 48* scale);
    bezierVertex(6* scale, 47* scale, 14* scale, 39* scale, 14* scale, 37* scale);
    vertex(0,34* scale);
    endShape();

    // eyes
    translate(-60* scale,-10* scale);
    rotate(10);
    //EYE1
    fill('#ffffff');
    ellipse(0,0,60* scale,120* scale);
    //PUPIL1
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
    ellipse(5* scale,-9* scale,35* scale,75* scale);
    fill(map(this.tilt_value,0,100,0,208),map(this.eye_value,0,100,0,29),map(this.eye_value,0,100,0,95));
    ellipse(5* scale,-4* scale,30* scale,60* scale);
    fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    rotate(-20);
    ellipse(4* scale,-19* scale,13* scale,21* scale);
    fill('#FFFFFF');
    ellipse(7* scale,-6* scale,6* scale,12* scale);
    fill('#FFFFFF');
    ellipse(7* scale,14* scale,11* scale,17* scale);
    rotate(10);
    translate(120* scale,0);
    rotate(-10);
    //EYE2
    fill('#ffffff');
    ellipse(0,0,60* scale,120* scale);
    //PUPIL2
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,161),map(this.eye_value,0,100,61,186));
    ellipse(-5* scale,-9* scale,35* scale,75* scale);
    fill('#000000');
    ellipse(-5* scale,-4* scale,30* scale,60* scale);
    fill(map(this.tilt_value,0,100,255,212),map(this.eye_value,0,100,255,29),map(this.eye_value,0,100,255,96));
    ellipse(-8* scale,-21* scale,13* scale,21* scale);
    fill('#ffffff');
    ellipse(-6* scale,-8* scale,6* scale,12* scale);
    fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    ellipse(-3* scale,14* scale,11* scale,17* scale);
    rotate(10);
    translate(-60* scale,10* scale);

    //Suit
    if(this.clothing < 1.2){
      fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();


      fill('#c1c1c1');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();
      
      fill('#440044');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,200* scale));
      endShape();
      beginShape();
      vertex(20* scale,map(this.eye_value,0,100,170* scale,255* scale));
      vertex(0,map(this.eye_value,0,100,170* scale,180* scale));
      vertex(-20* scale,map(this.eye_value,0,100,170* scale,255* scale));
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();

      fill(map(this.tilt_value,0,100,255,193),map(this.eye_value,0,100,255,193),map(this.eye_value,0,100,255,193));
      beginShape();
      vertex(map(this.tilt_value,0,100,45* scale,32* scale),220* scale);
      vertex(60* scale,155* scale);
      vertex(50* scale,126* scale);
      vertex(0,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-60* scale,155* scale);
      vertex(map(this.tilt_value,0,100,-45* scale,-32* scale),220* scale);
      vertex(0,170* scale);
      endShape();

      //glasses
      fill(0,0,0,chain_value*10);
      strokeWeight(chain_value/2);
      stroke(map(this.tilt_value,100,0,247,100),map(this.eye_value,0,100,193,100),map(this.eye_value,0,100,61,100));
      rect(30* scale,10* scale,50* scale,20* scale);
      rect(-30* scale,10* scale,-50* scale,20* scale);
      line(-30* scale,20* scale,30* scale,20* scale);
      noStroke();
    }else if (this.clothing < 2){
      fill(map(this.tilt_value,0,100,247,0),0,map(this.tilt_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();
      

      fill(2555,255,255);
      beginShape();
      vertex(50* scale,222* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-50* scale,222* scale);
      vertex(0,300* scale);
      endShape();

      fill(137 + this.colour_random, 108 + this.colour_random, 78 + this.colour_random);
      beginShape();
      vertex(49* scale,126* scale);
      vertex(0,169* scale);
      vertex(-49* scale,126* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();

    }else{
      fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();

      fill('#c1c1c1');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,170* scale);
      endShape();

      fill(map(this.eye_value,0,100,247,31)-31,map(this.eye_value,0,100,193,31)-30,map(this.tilt_value,0,100,61,30)-30);
      rect(10*scale,176*scale,45*scale,25*scale);

    }
    if(this.accessory < 1.2){
      fill(map(this.eye_value,0,100,247,0),map(this.tilt_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(0, -81* scale);
      bezierVertex(90* scale, -81* scale,84* scale, -122* scale, 0, -125* scale);
      endShape();
      beginShape();
      vertex(0, -81* scale);
      bezierVertex(-90* scale, -81* scale,-84* scale, -122* scale, 0, -125* scale);
      endShape();
      fill(map(this.eye_value,0,100,247,31)-31,map(this.eye_value,0,100,193,31)-30,map(this.tilt_value,0,100,61,30)-30);
      beginShape();
      vertex(-65* scale,-104* scale);
      bezierVertex(-65* scale,-104* scale,-65* scale, -150* scale, 0, -150* scale);
      vertex(0, -150* scale);
      bezierVertex(0, -150* scale,65* scale, -150* scale, 65* scale,-104* scale);
      vertex(65* scale,-104* scale);
      endShape();
    }else if(this.accessory < 2){
      fill(212,175,55);
      ellipse(55* scale,133* scale,chain_value,chain_value);
      ellipse(47* scale,154* scale,chain_value,chain_value);
      ellipse(35* scale,172* scale,chain_value,chain_value);
      ellipse(22* scale,185* scale,chain_value,chain_value);
      ellipse(11* scale,195* scale,chain_value,chain_value);
      ellipse(0,200* scale,chain_value,chain_value);
      ellipse(-11* scale,195* scale,chain_value,chain_value);
      ellipse(-22* scale,185* scale,chain_value,chain_value);
      ellipse(-35* scale,172* scale,chain_value,chain_value);
      ellipse(-47* scale,154* scale,chain_value,chain_value);
      ellipse(-55* scale,133* scale,chain_value,chain_value);
    }
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

    this.tilt_value = tilt_value;
    this.eye_value = eye_value;
    this.chain_scale = chain_scale;
    this.colour_random = random(-50,30);

    this.clothing = random(0,3);
    this.accessory = random(0,3);
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
    this.scale_b = 100;
    this.tilt_value = random(0,100);
    this.eye_value = random(0,100);
    this.chain_scale = random(0,10);
    this.colour_random = random(-50,30);
    this.clothing = random(0,3);
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