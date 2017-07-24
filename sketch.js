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

  // draw rectangles from centre
  rectMode(CENTER);
    
  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = "#4d4d4d";
var bg_color2 = "#ffffff";
var bg_color3 = "pink";

var ch1_bodyPrimary = "#8bc141"
var ch1_bodySecondary = "#6a9432"
var ch1_detailPrimary = "#ffffff"
var ch1_detailSecondary = "#cccccc"

var ch2_face = "#ffe8d9"
var ch2_shadow = "#eda3a3"
var ch2_hair = "#2c229a"
var ch2_detailPrimary = "#1c007c"
var ch2_detailSecondary = "#f3bec5"
var ch2_pupil = "#ffffff";

var ch3_bodyPrimary = "#cccccc"
var ch3_bodySecondary = "#808080"
var ch3_detailPrimary = "#000000"
var ch3_detailSecondary = "#ffffff"

function drawFace1(facePos_x, facePos_y, face_width, face_height, eyePos_x, eyebrow_height, pupil_size, drowsiness_value, teeth_value, look_direction) {
  rectMode(CENTER);
  push();
  translate(facePos_x, facePos_y);
  var scale = 0.6;
    
    // draw ground shadow
    fill("#333333");
    ellipse(0 * scale, 220 * scale, face_width * scale, 80 * scale);
    
    // draw ears
    fill(ch1_bodyPrimary);
    ellipse((-190 - look_direction) * scale, 50 * scale, 70 * scale, 60 * scale);
    fill(ch1_bodySecondary);
    ellipse((190 - look_direction) * scale, 50 * scale, 70 * scale, 60 * scale);
    // draw earings
    noFill();
    stroke(ch1_detailSecondary);
    strokeWeight(4 * scale);
    arc((-205 - look_direction) * scale, 75 * scale, (0 + (look_direction)) * scale, 20 * scale, -50, 170 + look_direction);
    arc((205 - look_direction) * scale, 75 * scale, (0 - (look_direction )) * scale, 20 * scale, 10 + look_direction, 230);
    noStroke();
    
  // draw face

    // draw base 
  fill(ch1_bodyPrimary);
  ellipse(0 * scale, 0 * scale, (face_width - 1) * scale, face_height * scale);
  ellipse(0 * scale, 100 * scale, (face_width - 1) * scale, (face_height - 170) * scale);
  // shadow
  fill(ch1_bodySecondary);
  arc(0 * scale, 0 * scale, face_width * scale, face_height * scale, 270, 450);
  arc(0 * scale, 100 * scale, face_width * scale, (face_height - 170) * scale, 270, 450);
  fill(ch1_bodyPrimary);
  ellipse(0 * scale, 0 * scale, (face_width - 50 + (look_direction * 2)) * scale, face_height * scale);
  ellipse(0 * scale, 100 * scale, (face_width - 50 + (look_direction * 2)) * scale, (face_height - 170) * scale);
    
    push();
    translate(look_direction, 0);
  // eyes
  // bags
  fill(ch1_detailSecondary);
  arc(-eyePos_x * scale, 0 * scale, 45 * scale, (50 + drowsiness_value) * scale, 0, 180);      
  arc(eyePos_x * scale, 0 * scale, 45 * scale, (50 + drowsiness_value) * scale, 0, 180);
  // whites
  fill(ch1_detailPrimary);
  ellipse(-eyePos_x * scale, 0 * scale, 45 * scale, 45 * scale);      
  ellipse( eyePos_x * scale, 0 * scale, 45 * scale, 45 * scale);
  // pupil
  fill(ch1_bodySecondary);
  ellipse(-eyePos_x * scale, 0 * scale, (pupil_size) * scale, (pupil_size) * scale);
  ellipse(eyePos_x * scale, 0 * scale, (pupil_size) * scale, (pupil_size) * scale);
//  // highlight
  fill(ch1_bodyPrimary);
  arc(-eyePos_x * scale, 0 * scale, (pupil_size) * scale, (pupil_size) * scale, 90, 270);
  arc(eyePos_x * scale, 0 * scale, (pupil_size) * scale, (pupil_size) * scale, 90, 270);
  fill(ch1_bodySecondary);
  ellipse(-eyePos_x * scale, 0 * scale, (pupil_size/2) * scale, (pupil_size) * scale);
  ellipse(eyePos_x * scale, 0 * scale, (pupil_size/2) * scale, (pupil_size) * scale);
  // large sparkle
  fill(ch1_detailPrimary);
  ellipse((-eyePos_x - 7) * scale, -7 * scale, (pupil_size/2 + 4) * scale, (pupil_size/2 + 4) * scale);
  ellipse((eyePos_x - 7) * scale, -7 * scale, (pupil_size/2 + 4) * scale, (pupil_size/2 + 4) * scale);
  // small sparkle
  fill(ch1_detailPrimary);
  ellipse((-eyePos_x - 3) * scale, 2 * scale, (pupil_size/2 - 5) * scale, (pupil_size/2 - 5) * scale);
  ellipse((eyePos_x - 3) * scale, 2 * scale, (pupil_size/2 - 5) * scale, (pupil_size/2 - 5) * scale);
  
  // draw eyelids
  fill(ch1_bodyPrimary);
  rect(-eyePos_x * scale, (-37.5 + drowsiness_value) * scale , 50 * scale, 50 * scale);
  rect(eyePos_x * scale, (-37.5 + drowsiness_value)  * scale , 50 * scale, 50 * scale);
    
  // draw eyebrows
  fill(ch1_bodySecondary);
  rect(-eyePos_x * scale, (-60  + eyebrow_height) * scale, 60 * scale, 26 * scale, 20 * scale);
  rect(eyePos_x * scale, (-60 + eyebrow_height) * scale, 60 * scale, 26 * scale, 20 * scale);
    
    // draw nose
    fill(ch1_bodySecondary);
    ellipse(-10 * scale, -10 * scale, 10 * scale, 10 * scale);
    ellipse(10 * scale, -10 * scale, 10 * scale, 10 * scale);
    // draw nose ring
    noFill();
    stroke(ch1_detailSecondary);
    strokeWeight(4 * scale);
    arc(0 * scale, -10 * scale, 20 * scale, 20 * scale, 0, 180);
    noStroke();
    
  // draw teeth, first check teeth value
    if (teeth_value == 1) {
  fill(ch1_detailPrimary);
  beginShape();
   vertex(-85 * scale, 45 * scale);
   vertex(-80 * scale, 18 * scale);
   vertex(-60 * scale, -12 * scale);
   vertex(-65 * scale, 23 * scale);
   vertex(-60 * scale, 45 * scale);
  endShape(CLOSE);
  fill(ch1_detailSecondary);
  beginShape();
   vertex(-73 * scale, 45 * scale);
   vertex(-72 * scale, 18 * scale);
   vertex(-60 * scale, -12 * scale);
   vertex(-65 * scale, 23 * scale);
   vertex(-60 * scale, 45 * scale);
  endShape(CLOSE);
  fill(ch1_detailPrimary);
  beginShape();
   vertex(85 * scale, 45 * scale);
   vertex(80 * scale, 18 * scale);
   vertex(60 * scale, -12 * scale);
   vertex(65 * scale, 23 * scale);
   vertex(60 * scale, 45 * scale);
  endShape(CLOSE);
  fill(ch1_detailSecondary);
  beginShape();
   vertex(73 * scale, 45 * scale);
   vertex(72 * scale, 18 * scale);
   vertex(60 * scale, -12 * scale);
   vertex(65 * scale, 23 * scale);
   vertex(60 * scale, 45 * scale);
  endShape(CLOSE);
    };
    
  // draw mouth
    noFill();
  stroke(ch1_detailPrimary);
    strokeWeight(4 * scale);
    beginShape();
    vertex(-140 * scale, 45 * scale);
    vertex(-50 * scale, 45 * scale);
    vertex(-35 * scale, 30 * scale);
    vertex(-20 * scale, 45 * scale);
    vertex(0 * scale, 20 * scale);
    vertex(20 * scale, 45 * scale);
    vertex(35 * scale, 30 * scale);
    vertex(50 * scale, 45 * scale);
    vertex(140 * scale, 45 * scale);
    endShape();
    noStroke();
  pop();
    pop();
}

function drawFace2(x, y, w, h, hair_value, mullet_length, fringe_length, beard_length, mouth_value) {
  push();
    
  rectMode(CENTER);
  translate(x, y);
    
  var scale = 0.6;
    
    // draw back hair
    if (hair_value >= 320) {
    fill(ch2_hair);
    ellipse(0 * scale, -100 * scale, hair_value * scale, hair_value * scale);
    }
    
    // draw mullet
    if (mullet_length >= 180) {
    push();
    rectMode(CORNER);
    fill(ch2_hair);
    rect(-175 * scale, -150 * scale, 350 * scale, mullet_length * scale, 100 * scale, 100 * scale, 0, 0);
    pop();
    }
    
    // draw ears
    fill(ch2_shadow);
    ellipse(-150 * scale, -40 * scale, 60 * scale, 60 * scale);
    fill(ch2_face);
    ellipse(150 * scale, -40 * scale, 60 * scale, 60 * scale);

    // draw head 
  fill(ch2_shadow);
  rect(0, 0, 300 * scale, 450 * scale, 200 * scale);
  fill(ch2_face);
  rect(10 * scale, 0, 280 * scale, 450 * scale, 200 * scale);

    // draw fringe
    if (hair_value >= 320) {
        if (fringe_length >= -25) {
    fill(ch2_hair);
    arc(0 * scale, -100 * scale, 320 * scale, 320 * scale, 190 - fringe_length, 350 + fringe_length, CHORD);
        }
    }
    
    // draw beard
    if (beard_length >= 230) {
    fill(ch2_hair);
    rectMode(CORNER);
  rect(-150 * scale, 0 * scale, 320 * scale, beard_length * scale, 200 * scale);
    rectMode(CENTER);
    }
    
    
  // draw eyes
    fill(ch2_detailPrimary);
    ellipse(-50 * scale, -80 * scale, 23 * scale, 30 * scale);
    ellipse( 80 * scale, -80 * scale, 23 * scale, 30 * scale);
    //draw pupils
    fill(ch2_pupil);
    ellipse(-50 * scale, -83 * scale, 10 * scale, 13 * scale);
    ellipse( 80 * scale, -83 * scale, 10 * scale, 13 * scale);
  

    // draw cheeks
    fill(ch2_detailSecondary);
    ellipse(-50 * scale, -40 * scale, 45 * scale, 25 * scale);
    ellipse(80 * scale, -40 * scale, 45 * scale, 25 * scale);
    
    // draw nose
    fill(ch2_shadow);
    rect(25 * scale, -30 * scale, 35 * scale, 80 * scale, 100 * scale);
    fill(ch2_detailSecondary);
    rect(28 * scale, -30 * scale, 30 * scale, 80 * scale, 100 * scale);
    
  // mouth
    if (mouth_value == 1) {
  fill(ch2_detailPrimary);
  rect(20 * scale, 70 * scale, 25 * scale, 80 * scale, 100 * scale);
    // draw tongue
    fill(ch2_detailSecondary);
    ellipse(20 * scale, 100 * scale, 25 * scale, 25 * scale);
    arc(7.5 * scale, 100 * scale, 50 * scale, 50 * scale, 270, 360);
    }
    else if (mouth_value == 2) {
  fill(ch2_detailPrimary);
  rect(20 * scale, 70 * scale, 80 * scale, 25 * scale, 100 * scale);
    // draw tongue
    fill(ch2_detailSecondary);
    ellipse(20 * scale, 100 * scale, 25 * scale, 25 * scale);
    arc(7.5 * scale, 100 * scale, 50 * scale, 50 * scale, 270, 360);
    }
    else if (mouth_value == 3) {
  fill(ch2_detailPrimary);
  ellipse(20 * scale, 70 * scale, 30 * scale, 30 * scale);
    }
    else if (mouth_value == 4) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 50 * scale, 120 * scale, 120 * scale, 0, 180);
        fill(ch2_pupil);
        rect(20 * scale, 55 * scale, 90 * scale, 10 * scale);
    }
    else if (mouth_value == 5) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 50 * scale, 120 * scale, 120 * scale, 0, 180);
        fill(ch2_pupil);
        rect(10 * scale, 55 * scale, 70 * scale, 10 * scale);
        rect(60 * scale, 55 * scale, 10 * scale, 10 * scale);
    }
    else if (mouth_value == 6) {
  fill(ch2_detailPrimary);
  arc(20 * scale, 90 * scale, 70 * scale, 70 * scale, 180, 360);
    }
pop();
}

function drawFace3(x, y, w, h, ear_length, eye_value, look_direction, mouth_size, orientation_value) {
  push();
  rectMode(CENTER);
  var scale = 0.6;
    
    if (orientation_value == 2) {
  translate(x - 45, y);
    } else {
    translate(x - 20, y);
    }
    
    // ear (back)
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(ch3_bodyPrimary);
    rect(50 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);

  // eye (back)
    if (eye_value === 2 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( 180 * scale, -80 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((look_direction + 70) * scale, -80 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc(185 * scale, -80 * scale, 130 * scale, 110 * scale, 210, 270);
    }

    // draw face
    if (orientation_value == 1) {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(20 * scale, 0 * scale, 350 * scale, 300 * scale, 0, 200 * scale, 200 * scale, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(-160 * scale, 0, 80 * scale, 300 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(-160 * scale, 0, 30 * scale, 150 * scale);
    } 
    else {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(45 * scale, 0 * scale, 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(45 * scale, 160 * scale, 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(45 * scale, 160 * scale, 150 * scale, 30 * scale);
    
    }

    // ear (front)
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(ch3_bodyPrimary);
    rect(0 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);
    noStroke();
    fill(ch3_bodyPrimary);
    rectMode(CORNER);
    rect(-35 * scale, -115 * scale, 70 * scale, (ear_length / 2) * scale);
    
    // eye middle
    if (eye_value === 1 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( 150 * scale, -80 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((look_direction + 40) * scale, -80 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc(155 * scale, -80 * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
  // eye (front)
    
    if (eye_value === 2 || eye_value == 3) {
        // eye fill
    noStroke();
    fill(ch3_detailSecondary);
    ellipse( 110 * scale, -60 * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc(look_direction * scale, -60 * scale, 30 * scale, 50 * scale, 20, 340, PIE);
        // eye outline
    noFill();
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    ellipse( 110 * scale, -60 * scale, 80 * scale, 80 * scale);
    // eyebrow
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    noFill();
    arc(115 * scale, -60 * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
    
    // draw nose
    noStroke();
    fill(ch3_detailPrimary);
    push();
    rotate(-10);
    ellipse(200 * scale, 0 * scale, 50 * scale, 35 * scale);
    pop();

  // mouth
    
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    push();
    rotate(30);
  fill(ch3_detailSecondary);
  ellipse(155 * scale, -20 * scale, 30 * scale, mouth_size * scale);
    pop();
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
  var face_w = 400;
  var face_h = 400;
  var face_y = height / 2;
  var face_x = width / 2;

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var eyebrow_height = map(s1, 0, 100, -10, 50);
    var pupil_size = map(s2, 0, 100, 5, 30);
    var drowsiness_value = map(s3, 0, 100, -12.5, 12.5);
    var teeth_value = Math.floor(map(s4, 0, 100, 0, 1));
    var look_direction = map(s5, 0, 100, -15, 15);
      
    var eyePos_x = 120;
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, eyePos_x, eyebrow_height, pupil_size, drowsiness_value, teeth_value, look_direction);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
  rectMode(CORNERS);
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 319, 450);
    var mullet_length = map(s2, 0, 100, 179, 400);
    var fringe_length = map(s3, 0, 100, -26, 10);
    var beard_length = map(s4, 0, 100, 229, 400);
    var mouth_value = Math.floor(map(s5, 0, 100, 1, 6));
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, mullet_length, fringe_length, beard_length, mouth_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var ear_length = map(s1, 0, 100, 80, 350);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    var look_direction = map(s3, 0, 100, 95, 125);
    var mouth_size = map(s4, 0, 100, 20, 70);
    var orientation_value = Math.floor(map(s5, 0, 100, 1, 2));
      
    if (mode == 'all') {
      face_x = (5 * width / 6) + 20;
    }
    drawFace3(face_x, face_y, face_w, face_h, ear_length, eye_value, look_direction, mouth_size, orientation_value);
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