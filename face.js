var overallScale;
var twigSize_value;
/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 0;
  this.mouth_value = 0;
  this.seed_value = 1;
  this.leaf_value = 20;
  this.twig_value = 5;
  this.twig_value2 = 6;
  this.season_value = 3;
  this.eyeSize_value = 1;
  this.twigSize_value = 1;
  this.leafColour1 = "#00673f";
  this.leafColour2 = "#219d23";
  this.faceColour1 = 213;
  this.faceColour2 = 236;
  this.faceColour3 = 187;
  this.twigColour = "#005533";
  this.eyeColour1 = 98; 
  this.eyeColour2 = 183;
  this.eyeColour3 = 88;

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [0, 0, 0];
  this.fg_color = [0, 0, 0];
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
    rectMode(CENTER);
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
    overallScale = scale;

    if(this.season_value == 0){
    //summer
    this.leafColour1 = "#00673f";
    this.leafColour2 = "#219d23";
    this.faceColour1 = 213;
    this.faceColour2 = 236;
    this.faceColour3 = 187;
    this.twigColour = "#005533";
    this.eyeColour1 = 98; 
    this.eyeColour2 = 183;
    this.eyeColour3 = 88;
  } else if(this.season_value == 1){
    //spring
    this.leafColour1 = "#d7ff72";
    this.leafColour2 = "#a2d400";
    this.faceColour1 = 252;
    this.faceColour2 = 190;
    this.faceColour3 = 202;
    this.twigColour = "#8b6403";
    this.eyeColour1 = 251; 
    this.eyeColour2 = 135;
    this.eyeColour3 = 157;
  } else if(this.season_value == 2){
    //winter
    this.leafColour1 = "#6ebff7";
    this.leafColour2 = "#1f649d";
    this.faceColour1 = 192;
    this.faceColour2 = 241;
    this.faceColour3 = 255;
    this.twigColour = "#837981";
    this.eyeColour1 = 66; 
    this.eyeColour2 = 112;
    this.eyeColour3 = 208;
  } else if(this.season_value== 3){
    //autumn
    this.leafColour1 = "#c64e00";
    this.leafColour2 = "#ff902b";
    this.faceColour1 = 253;
    this.faceColour2 = 182;
    this.faceColour3 = 89;
    this.twigColour = "#722902";
    this.eyeColour1 = 172; 
    this.eyeColour2 = 61;
    this.eyeColour3 = 0;
  }

  stroke("#000000");
  strokeWeight(0.5);
  
  randomSeed(this.seed_value);

  //leaves
  for(var i=1; i<this.leaf_value; i++){
    this.leaf(random(-100 * scale, 100* scale), random(60 * scale, 90 * scale), this.leafColour1, this.leafColour2, random(0, 359));
  }

  for(var i=1; i<this.leaf_value; i++){
    this.leaf(random(-140 * scale, 140 * scale), random(-30 * scale, 30 * scale), this.leafColour1, this.leafColour2, random(0, 359));
  }

  for(var i=1; i<this.leaf_value; i++){
    this.leaf(random(-100 * scale, 100 * scale), random(-100 * scale, 0 * scale), this.leafColour1, this.leafColour2, random(0, 359));
  }

  //face

  noStroke();
  for(var i=1; i<=5; i++){
      noStroke();
      fill(this.faceColour1,this.faceColour2,this.faceColour3, 20+(i*50));
      ellipse(0, 0, 540*scale-(i*7), 490*scale-(i*7));
    }



  noFill();
  strokeWeight(4);

  //twigs
  for(var i=0; i<=this.twig_value2; i++){
    var q = random(-160 * scale, 160 * scale)
    var u;
    if(q<=0){
      u = random(q, 0)
    } else{
      u = random(0, q);
    }
    this.twig(q, random(-60 * scale, -30 * scale), this.twigColour, u);
  }
  for(var i=0; i<=this.twig_value; i++){
    var q =  random(-100 * scale, 100 * scale)
    var u;
    if(q<=0){
      u = random(q, 0)
    } else{
      u = random(0, q);
    }
    this.twig(q, random(-150 * scale, -60 * scale),this.twigColour, u);
  }
  

  stroke("#000000");
  strokeWeight(1);

  //mouth closed

  if(this.mouth_value ==0){
    push();
    translate(-10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20* scale, 20* scale, -70, 70);
    pop();

    push();
    translate(10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20* scale, 20* scale, -70, 70);
    pop();


  }

  //mouth open
  if(this.mouth_value ==1){

    push();
    fill("#ef7fbe");
    translate(0, 75.5*2 * scale);
    rotate(90);
    ellipse(0, 0, 10*scale, 10*scale);
    arc(0, 0, 20 * scale, 20* scale, -100, 100, OPEN);
    pop();

    push();
    translate(-10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20 * scale, 20 * scale, -70, 70);
    pop();

    push();
    translate(10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20 * scale, 20 * scale, -70, 70);
    pop();

    

  }

  // eyes closed
  if (this.eye_value ==0) {
    push();
    noFill();
    translate(-80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale * this.eyeSize_value, 25 * scale * this.eyeSize_value, -40, 40);
    pop();

    push();
    noFill();
    translate(80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale * this.eyeSize_value, 25 * scale * this.eyeSize_value, -40, 40);
    pop();
    
  }
  //eyes open
  if(this.eye_value ==1){
    for(var i=1; i<=5; i++){
      noStroke();
      fill(this.eyeColour1, this.eyeColour2, this.eyeColour3, i*50);
      ellipse(-80 * scale , 90 * scale , this.eyeSize_value * 60*scale-(i*2.5), this.eyeSize_value *70*scale-(i*2.5));
      ellipse(80 * scale , 90 * scale , this.eyeSize_value *60*scale-(i*2.5), this.eyeSize_value *70*scale-(i*2.5));
    }
    fill("#000000")
    ellipse(-80 * scale, 90 * scale, 20*scale * this.eyeSize_value, 30*scale * this.eyeSize_value);
    ellipse(80 * scale, 90 * scale, 20*scale * this.eyeSize_value, 30*scale * this.eyeSize_value);
  }

  pop();

}

  this.leaf = function(x, y, colour1, colour2, rotation){
    stroke("#000000");
    strokeWeight(1);
    push();
    translate(x, y);
    rotate(rotation);
    fill(colour1);
    curve(-75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, -75*overallScale*3, 50*overallScale*3);
    fill(colour2);
    curve(75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, 75*overallScale*3, 50*overallScale*3);
    //line(0, 0, 0, 100 * scale);
    pop();
  }

  this.twig = function(x, y, colour, rotation){
    strokeWeight(2*this.twigSize_value);
    stroke(colour);
    push();
    translate(x, y);
    rotate(rotation);
    line(0, 0, 0, -100*overallScale*this.twigSize_value);
    line(0, -20*overallScale*this.twigSize_value, 10*overallScale*this.twigSize_value, -30*overallScale*this.twigSize_value);
    line(0, -30*overallScale*this.twigSize_value, -20*overallScale*this.twigSize_value, -50*overallScale*this.twigSize_value);
    line(0, -40*overallScale*this.twigSize_value, 20*overallScale*this.twigSize_value, -60*overallScale*this.twigSize_value);
    line(0, -60*overallScale*this.twigSize_value, 15*overallScale*this.twigSize_value, -75*overallScale*this.twigSize_value);
    line(0, -60*overallScale*this.twigSize_value, -15*overallScale*this.twigSize_value, -75*overallScale*this.twigSize_value);
    line(0, -80*overallScale*this.twigSize_value, -10*overallScale*this.twigSize_value, -90*overallScale*this.twigSize_value);
    line(0, -80*overallScale*this.twigSize_value, 10*overallScale*this.twigSize_value, -90*overallScale*this.twigSize_value);
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
    this.width_value = focusedRandom(0, 100);
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.mouth_value = getRandomMouthValue();
    this.seed_value = int(focusedRandom(1, 50));
    this.leaf_value = Math.floor(focusedRandom(5, 40, 5, 40));
    this.twig_value = int(focusedRandom(0, 4, 5, 4));
    this.twig_value2 = int(focusedRandom(0, 6, 5, 6));
    this.season_value = getRandomSeason();
    this.eyeSize_value = focusedRandom(2.5, 4.5)/3;
    this.twigSize_value = focusedRandom(2, 3.5)/3;
  }
}

// global functions can also be in this file below

function getRandomSeason(){
  random_result = focusedRandom(0, 100);
  if(random_result <25) {
    return getRandomSeason1();
  }
  else if(random_result <50) {
    return getRandomSeason2();
  }
  else if(random_result <75) {
    return getRandomSeason3();
  }
  else {
    return getRandomSeason4();
  }
}

function getRandomSeason1(){
  random_result = focusedRandom(0, 100);
  if(random_result <50) {
    return 0;
  }
  else if(random_result <75) {
    return 1;
  }
  else if(random_result <90) {
    return 2;
  }
  else {
    return 3;
  }
}

function getRandomSeason2(){
  random_result = focusedRandom(0, 100);
  if(random_result <50) {
    return 3;
  }
  else if(random_result <75) {
    return 0;
  }
  else if(random_result <90) {
    return 1;
  }
  else {
    return 2;
  }
}
function getRandomSeason3(){
  random_result = focusedRandom(0, 100);
  if(random_result <50) {
    return 1;
  }
  else if(random_result <75) {
    return 2;
  }
  else if(random_result <90) {
    return 3;
  }
  else {
    return 0;
  }
}
function getRandomSeason4(){
  random_result = focusedRandom(0, 100);
  if(random_result <50) {
    return 2;
  }
  else if(random_result <75) {
    return 3;
  }
  else if(random_result <90) {
    return 0;
  }
  else {
    return 1;
  }
}

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 30) {
    return 0;
  }
  else {
    return 1;
  }
}

function getRandomMouthValue(){
  random_result = focusedRandom(0, 100);
  if(random_result <90) {
    return 0;
  }
  if(random_result >=90) {
    return 1;
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