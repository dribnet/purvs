var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

/*var canvasWidth = 960;
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
}*/

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


function drawFace(x, y, w, h, width_value, eye_value, mouth_value, seed_value, leaf_value) {
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
  
  
  

  //leaves
  for(var i=1; i<leaf_value; i++){
    leaf(random(-90 * scale, 90* scale), random(60 * scale, 90 * scale), "#00673f", "#219d23", random(0, 359));
  }

  for(var i=1; i<leaf_value; i++){
    leaf(random(-140 * scale, 140 * scale), random(-30 * scale, 30 * scale), "#00673f", "#219d23", random(0, 359));
  }

  for(var i=1; i<leaf_value; i++){
    leaf(random(-90 * scale, 90 * scale), random(-100 * scale, 0 * scale), "#00673f", "#219d23", random(0, 359));
  }

  //face
  noStroke();
  for(var i=1; i<=5; i++){
      noStroke();
      fill(213,236,187, 20+(i*50));
      ellipse(0, 0, 485*scale-(i*10), 435*scale-(i*10));
    }



  noFill();
  stroke("#005533");
  strokeWeight(4);

  //twigs
  for(var i=0; i<=twig_value2; i++){
    var z = random(-160 * scale, 160 * scale)
    var r;
    if(z<=0){
      r = random(z, 0)
    } else{
      r = random(0, z);
    }
    twig(z, random(-60 * scale, -30 * scale),"#5d4423", r);
  }
  for(var i=0; i<=twig_value; i++){
    var z =  random(-100 * scale, 100 * scale)
    var r;
    if(z<=0){
      r = random(z, 0)
    } else{
      r = random(0, z);
    }
    twig(z, random(-150 * scale, -60 * scale),"#5d4423", r);
  }
  
  //twig(0, 0, "#5d4423", -5);
  


  stroke("#000000");
  strokeWeight(1);

  if(mouth_value ===1){
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
  if(mouth_value >=2){

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

  // eyes
  if (eye_value ===1) {
    push();
    noFill();
    translate(-80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale, 25 * scale, -40, 40);
    pop();

    push();
    noFill();
    translate(80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale, 25 * scale, -40, 40);
    pop();
    
  }

  if(eye_value >=2){
    for(var i=1; i<=5; i++){
      noStroke();
      fill(98, 183, 88, 10*i*10);
      ellipse(-80 * scale, 90 * scale, 60*scale-(i*5), 70*scale-(i*5));
      ellipse(80 * scale, 90 * scale, 60*scale-(i*5), 70*scale-(i*5) );
    }
    fill("#000000")
    ellipse(-80 * scale, 90 * scale, 20*scale, 30*scale);
    ellipse(80 * scale, 90 * scale, 20*scale, 30*scale);
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
  //line(0, 0, 0, 100 * scale);
  pop();
}

function twig(x, y, colour, rotation){
  strokeWeight(2);
  push();
  translate(x, y);
  rotate(rotation);
  line(0, 0, 0, -100/3);
  line(0, -20/3 , 10/3, -30/3);
  line(0, -30/3 , -20/3, -50/3);
  line(0, -40 /3, 20/3, -60 /3);
  line(0, -60 /3, 15 /3, -75 /3);
  line(0, -60 /3, -15/3, -75 /3);
  line(0, -80/3 , -10/3, -90 /3);
  line(0, -80 /3, 10/3, -90 /3);
  pop();
}

/*function draw () {
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
}*/

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face
  fill(bg_color3);

  width_value = focusedRandom(0, 100);
  mouth_value = int(focusedRandom(1, 3));
  eye_value = int(focusedRandom(1, 3));
  seed_value = int(focusedRandom(1, 50));
  leaf_value = int(focusedRandom(10, 70));
  twig_value = int(focusedRandom(0, 3));
  twig_value2 = int(focusedRandom(0, 5));


  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2+ h*i;
      var x = w/2 + w*j;
      width_value = focusedRandom(0, 100);
      mouth_value = int(focusedRandom(1, 3));
      eye_value = int(focusedRandom(1, 3));
      seed_value = int(focusedRandom(1, 50));
      leaf_value = int(focusedRandom(10, 70));
      twig_value = int(focusedRandom(0, 3));
      twig_value2 = int(focusedRandom(0, 5));
      drawFace(x, y, w, h, width_value, eye_value, mouth_value, seed_value, leaf_value, twig_value, twig_value2);
    }
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
