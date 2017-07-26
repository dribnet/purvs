var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;


function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = ["#ffffff"];
var bg_color2 = ["#ffffff"];
var bg_color3 = ["#ffffff"];

var fg_color1 = ["#f9e3ce"];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
  push();
  translate(x, y);
  rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  //cat face
  fill(fg_color1);
  rect(-(400 * scale)/2, -(300 * scale/2), 400 * scale, 300 * scale, 80, 80, 80, 80);

  //ears
  push();
  rotate(-7);
  ellipse(-65 , -25, 70, 180);
  pop();

  push();
  rotate(7);
  ellipse(65, -25, 70, 180);
  pop();


  // eyes
  if (eye_value === 1) {
    push();
    stroke(stroke_color1);
    strokeWeight(5);
    noFill();
    translate(-45, 20);
    rotate(-90);
    arc(0, 0, 30, 30, -40, 40);
    pop();

    push();
    stroke(stroke_color1);
    strokeWeight(5);
    noFill();
    translate(45, 20);
    rotate(-90);
    arc(0, 0, 30, 30, -40, 40);
    pop();


  }

  if (eye_value >= 2) {
    fill("#5a2304");
    ellipse(-80 * scale, 15 * scale, 25 * scale, 40 * scale);
    ellipse( 80 * scale, 15 * scale, 25 * scale, 40 * scale);
  
  }


  // mouth
  fill(bg_color1);
  //ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value, glow_value, number_value) {
  rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  noStroke();
  var a = 160;
  var aminus = glow_value;
  fill(68, 14, 98,);
  ellipse(0, 0, 300 * scale, 400 * scale);
  for(i=1; i<=4; i++){
    fill(68, 14, 98, a);
    ellipse(0, 0, 300 * scale+(i*30), 400 * scale+(i*30));
    a-=aminus;
  }

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color3);
    ellipse(0, -80 * scale, 100 * scale, 2 * scale);
    
  }
  else {
    fill(bg_color3);
    ellipse(0, -80 * scale, 100 * scale, 100 * scale);
    

    fill(fg_color3);
    ellipse((eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    
  }

  // mouth
  
  // TODO: paramaterize hair
  var follicles = [];

  for (var i = 1; i < number_value; i++) {
    randomSeed(i*i*900);
    append(follicles, [random(100, 800), random(-200, 700)]);
  }


  resetMatrix();
  var alpha = 150;
  var radius = hair_value * scale/2;
  for(var i=0; i<follicles.length; i++) {
    fill(255, 242, 0, 50);
    ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
    for(var x=1; x<5; x++){
      fill(255, 242, 0, alpha);
      ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius*x/1.5, radius*x/1.5);
      alpha-=20;
    }
    alpha = 150;
  }
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value, seed_value, twig_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke("#000000");
  strokeWeight(0.5);
  
  randomSeed(seed_value);
  //noiseSeed(5)

  

  //leaves
  for(var i=1; i<70; i++){
    leaf(random(-90, 90), random(60, 90), "#00673f", "#219d23", random(0, 359));
  }

  for(var i=1; i<100; i++){
    leaf(random(-140, 140), random(-30, 30), "#00673f", "#219d23", random(0, 359));
  }

  for(var i=1; i<100; i++){
    leaf(random(-90, 90), random(-100, 0), "#00673f", "#219d23", random(0, 359));
  }
  


  //face
  noStroke();
  //strokeWeight(0.1);
  for(var i=1; i<=5; i++){
      noStroke();
      fill(213,236,187, 20+(i*50));
      ellipse(0, 0, 550*scale-(i*10), 500*scale-(i*10));
    }
  //fill(213,236,187, 200);
  //ellipse(0, 0, 500 * scale, 450 * scale);



  noFill();
  stroke("#5d2c27");
  strokeWeight(4);

  //twigs
  for(var i=0; i<=twig_value; i++){
    twig(random(-70, 70), random(-100, -20),"#5d4423", random(-30, 30));
  }
  
  //twig(0, 0, "#5d4423", -5);
  


  stroke("#000000");
  strokeWeight(1);

  if(mouth_value ===1){
    push();
    translate(-5, 70);
    rotate(90);
    arc(0, 0, 10, 10, -70, 70);
    pop();

    push();
    translate(5, 70);
    rotate(90);
    arc(0, 0, 10, 10, -70, 70);
    pop();


  }
  if(mouth_value >=2){

    push();
    fill("#ef7fbe");
    translate(0, 75.5);
    rotate(90);
    ellipse(0,0, 5, 5);
    arc(0, 0, 10, 10, -100, 100, OPEN);
    pop();

    push();
    translate(-5, 70);
    rotate(90);
    arc(0, 0, 10, 10, -70, 70);
    pop();

    push();
    translate(5, 70);
    rotate(90);
    arc(0, 0, 10, 10, -70, 70);
    pop();

    

  }

  // eyes
  if (eye_value ===1) {
    push();
    noFill();
    translate(-40, 40);
    rotate(90);
    arc(0, 0, 25, 25, -40, 40);
    pop();

    push();
    noFill();
    translate(40, 40);
    rotate(90);
    arc(0, 0, 25, 25, -40, 40);
    pop();
    
  }

  if(eye_value >=2){
    for(var i=1; i<=5; i++){
      noStroke();
      fill(98, 183, 88, 10+(i*50));
      ellipse(-40, 45, 60*scale-(i*5), 70*scale-(i*5));
      ellipse(40, 45, 60*scale-(i*5), 70*scale-(i*5) );
    }
    fill("#000000")
    ellipse(-40, 45, 20*scale, 30*scale);
    ellipse(40, 45, 20*scale, 30*scale);
  }

  // mouth

  pop();
}

function leaf(x, y, colour1, colour2, rotation){
  stroke("#000000");
  strokeWeight(1);
  push();
  translate(x, y);
  rotate(rotation);
  fill(colour1);
  curve(-75, 5, 0, 0, 0, 50, -75, 50);
  fill(colour2);
  curve(75, 5, 0, 0, 0, 50, 75, 50);
  line(0, 0, 0, 50);
  pop();
}

function twig(x, y, colour, rotation){
  push();
  translate(x, y);
  rotate(rotation);
  line(0, 0, 0, -100);
  line(0, -20, 10, -30);
  line(0, -30, -20, -50);
  line(0, -40, 20, -60);
  line(0, -60, 15, -75);
  line(0, -60, -15, -75);
  line(0, -80, -10, -90);
  line(0, -80, 10, -90);
  pop();
}

function draw () {
  noStroke();

  var mode = faceSelector.value();

  if (mode != 'all') {
    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
    else if (mode == '3') {
      background(bg_color3);
    }
  }

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var glow_value = map(s4, 0, 100, 10, 90);
    var eye_value = map(s2, 0, 100, -15, 15);
    var number_value = Math.floor(map(s5, 0, 100, 10, 40));
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value, glow_value, number_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = Math.floor(map(s1, 0, 100, 1, 3));
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    var seed_value = Math.floor(map(s3, 0, 100, 1, 50));
    var twig_value = Math.floor(map(s4, 0, 100, 0, 5));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value, seed_value, twig_value);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
