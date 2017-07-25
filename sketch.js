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
var bg_color1 = [81,81,81];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [229, 215, 66];
var fg_color2 = [43, 99, 8];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [221, 221, 221];

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

  fill(fg_color1);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color1);
    ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color1);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color1);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color1);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}


function drawFace2(x, y, w, h, hair_value, eye_value,  mouth_value) {
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
    


  fill(fg_color2);
    //head
    noStroke();
     beginShape();
    vertex(-80,-30);
    vertex(-80, 40);
    vertex(-50, 80);
    vertex(0, 90);
    vertex(0, -100);
    vertex(-40, -90);
    vertex(-70, -70);
    endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(80,-30);
    vertex(80, 40);
    vertex(50, 80);
    vertex(0, 90);
    vertex(0, -100);
    vertex(40, -90);
    vertex(70, -70);
    endShape();
    pop();
    
    //ears
    fill(fg_color2);
    push();
    translate(20,0);
    beginShape();
    vertex(-100,-30);
    vertex(-140, -25);
    vertex(-190, -40);
    vertex(-165, -10);
    vertex(-140, 10);
    vertex(-100, 20);
    endShape();
    
    beginShape();
    translate(-40,0);
    vertex(100,-30);
    vertex(140, -25);
    vertex(190, -40);
    vertex(165, -10);
    vertex(140, 10);
    vertex(100, 20);
    endShape();
    pop();

      noFill();
      stroke(29, 68, 4);
      strokeWeight(2);
      
      arc(-40, -10, hair_value, hair_value, 220, 320);
      arc(40, -10, hair_value, hair_value, 220, 320);
      
      arc(-40, -5, 50, 50, 220, 320);
      arc(40, -5, 50, 50, 220, 320);
      
      arc(-40, 0, 60, 50, 220, 320);
      arc(40, 0, 60, 50, 220, 320);
      push();
      rotate(180);
      translate(0,34);
      arc(-40, 0, 60, 50, 220, 320); 
      arc(40, 0, 60, 50, 220, 320);
      
      arc(-40, -5, 50, 50, 220, 320);
      arc(40, -5, 50, 50, 220, 320);
      pop();
      
    noStroke();  
    fill(0);
    ellipse((-70 + eye_value) * scale, -30 * scale, 30 * scale, 30 * scale);
    ellipse(( 70 + eye_value) * scale, -30 * scale, 30 * scale, 30 * scale);
    

  // mouth
  fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
    noFill();
      rotate(180);
      translate(0,34);
      arc(0, -50, mouth_value, 50, 220, 320); 

      pop();

//hair
    stroke(221, 221, 221);
    point (-70,-40);
    point (-50,-60);
    point (-60,-60);
    point (-80,-20);
    point (-75,-50);
    push();
    translate(0,0);
    point (70,-40);
    point (65,-65);
    point (60,-60);
    point (80,-20);
    point (75,-50);
    pop();
    noStroke();
  
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
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

  stroke(stroke_color3)
  fill(fg_color3);
  rect(0, 0, (300 + width_value) * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color2);
    rect( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color2);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color2);
    rect(-60 * scale, -80 * scale, 50 * scale, 30 * scale);
    rect( 60 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color2);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 60 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  rectMode(CORNER);
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
    var hair_value = map(s1, 0, 100, 50, 70);
    //var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    var mouth_value = map(s3, 0, 100, 50, 200);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, mouth_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
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
