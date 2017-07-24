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
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [135, 153, 79];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];
var eye_color = [255,255,255];
<<<<<<< HEAD
var black_color = [0,0,0];

//Morty Variables
var m_eye_size = 55;
var skin_color = "#f7cdad";
var hair_color = "#82491d";

=======

>>>>>>> 9b8a6bd9b97726b7f80d167462e664825afea1a4
function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, head_value, chin_value) {
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

  var mid_value = 25;

  beginShape();
  vertex(-50 - chin_value, 100); //bot
  vertex(50 + chin_value, 100); //bot
  vertex(100, mid_value);//mid
  vertex(100, -80); //top
  vertex(25 + head_value, -150); //top top
  vertex(-25 - head_value, -150); //top top
  vertex(-100, -80); //top
  vertex(-100, mid_value); //mid
  endShape(CLOSE);

  //ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(eye_color);
    ellipse( 0, -80 * scale, 50 * scale, 50 * scale);
    fill(fg_color1);
    ellipse(0 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(eye_color);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 50 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 50 * scale);

    fill(fg_color1);
    ellipse(-50 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 50 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

<<<<<<< HEAD
function drawFace2(x, y, w, h, hair_value, eye_value, nose_rotate, nose_value, mouth_value) {
    rectMode(CENTER);
=======
function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
  rectMode(CENTER);
>>>>>>> 9b8a6bd9b97726b7f80d167462e664825afea1a4
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

<<<<<<< HEAD
	strokeWeight(2);
	stroke(black_color);

  //hair
  fill(hair_color);
  ellipse(0, -50, 250 + hair_value, 250 + hair_value);
	
  //Ears
  fill(skin_color);
  arc(-115,0, 75, 75, 90, 270, OPEN);	
  arc(115,0, 75, 75, -90, -270, OPEN);
	
  //head
  fill(skin_color);
  ellipse(0, 0, 270, 270);

  // set fill to match background color
  fill(eye_color);
  // draw two eyes
  ellipse(-60, -60, m_eye_size + eye_value, m_eye_size + eye_value);
  ellipse( 60, -60, m_eye_size + eye_value, m_eye_size + eye_value);

  // draw pupils
  fill(black_color);
  ellipse(-60, -60, 20 * eye_value/100 + 5, 20 * eye_value/100 + 5);
  ellipse( 60, -60, 20 * eye_value/100 + 5, 20 * eye_value/100 + 5);

  //Nose
  translate(0, 20);
  var nose_y = 15; 
  fill(skin_color);
  push();
  rotate(nose_rotate);
  curve(-250,nose_y + nose_value, 0, nose_y + nose_value, 0, -nose_y - nose_value, -250, -nose_y - nose_value);
  pop();
	
  // mouth-hole with background color
  var mouth_y = 70;
  if(mouth_value < 0){
		mouth_y -= mouth_value/10;  
  }
  curve(-100 - mouth_value,0 - mouth_value, -70, mouth_y, 70, mouth_y, 70 + mouth_value, 100 - mouth_value);
  pop();
  
  //pop();
}

function drawFace3(x, y, w, h, scale_value, eye_spacing, mouth_value) {
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
  //var scale = extent / 220.0;

  stroke(black_color)
  strokeWeight(0);
  
  scale(1 + scale_value, 1 + scale_value);

  fill(black_color);

  beginShape();
  vertex(-70, -30);
  vertex(-70, -30);//left side of head
  vertex(-65, 30);
  vertex(-50, 80); //chin start
  vertex(0, 110);
  vertex(50, 80); //chin end
  vertex(70, 30); //Right side of head
  vertex(70, -30);
  vertex(50, -80);
  vertex(0, -100);
  vertex(-50, -80);
  endShape(CLOSE);

    //left bat
  beginShape();
  vertex(-70, -30);
  vertex(-70, -30);
  vertex(-70, -140);
  vertex(-30, -40);
  endShape(CLOSE);

    //right bat
  beginShape();
  vertex(70, 30);
  vertex(70, 30);
  vertex(75, -140);
  vertex(30, -40);
  endShape(CLOSE);



    //Left Eye
  push();
  translate(-35 - eye_spacing, -15);
  fill(eye_color);

  beginShape();
  vertex(-5, 0);
  vertex(-5, 0);
  vertex(30, 20);
  vertex(0, 15);
  vertex(0, 15);
  endShape(CLOSE);

=======
  stroke(stroke_color3);
  fill(fg_color3);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color3);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  var follicles = [
    [346,138],
    [391,120],
    [391,67],
    [439,76],
    [463,42],
    [487,18],
    [481,101],
    [520,102],
    [520,78],
    [533,54],
    [560,108],
    [580,76],
    [596,124],
    [618,124]
  ];

  resetMatrix();
  fill(colorHair);
  var radius = hair_value * scale;
  for(var i=0; i<follicles.length; i++) {
    ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
  }
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

  stroke(stroke_color2)
  fill(fg_color2);
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
>>>>>>> 9b8a6bd9b97726b7f80d167462e664825afea1a4
  pop();

    //Right Eye
  push();
  translate(35 + eye_spacing, -15);
  fill(eye_color);

  beginShape();
  vertex(5, 0);
  vertex(5, 0);
  vertex(-30, 20);
  vertex(0, 15);
  vertex(0, 15);
  endShape(CLOSE);

  pop();

    //Nose
  fill(black_color);
  beginShape();
  vertex(0, 0);
  vertex(0, 0);
  vertex(0, 50);
  vertex(15, 45);
  vertex(15, 45);
  endShape(CLOSE);

    //Mouth area
  fill(skin_color);

  beginShape();
  vertex(-55, 10);
  vertex(-55, 10);
  vertex(-40, 80); //chin start
  vertex(0, 100);
  vertex(40, 80); //chin end
  vertex(60, 10); //Right side of head
  vertex(0, 49);
  endShape(CLOSE);

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
  var face_x = width / 2; var m_eye_size = 110;

    //Draw BGs
  rectMode(CORNER);
    //BG1
  
    //BG2
  
    //BG3
  

  if (mode == '1' || mode == 'all') {
    // draw 1st face
      fill(bg_color1);
      rect(0, 0, 2 * width, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    var chin_value = map(s4, 0, 100, 0, 100);
    var head_value = map(s5, 0, 100, 0, 100);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value, head_value, chin_value);    
  }

  if (mode == '2' || mode == 'all') {
      // draw 2nd face
      fill(bg_color2);
      rect(width / 3, 0, 2 * width / 3, height);
    var hair_value = map(s1, 0, 100, -30, 70);
    var nose_rotate = map(s3, 0, 100, 0, 360);
    var eye_value = map(s2, 0, 100, 0, 100);
    var nose_value = map(s4, 0, 100, 0, 100);
    var mouth_value = map(s5, 0, 100, -250, 250);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, nose_rotate, nose_value, mouth_value);
  }

  if (mode == '3' || mode == 'all') {
      // draw 3nd face
      fill(bg_color3);
      rect(2.5* width / 3, 0, width / 3, height*2);
    var scale_value = map(s1, 0, 100, 0, 1);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_spacing = map(s2, 0, 100, 0, 20);
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, scale_value, eye_spacing, mouth_value);
  }
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
    var chin_value = map(s4, 0, 100, 0, 100);
    var head_value = map(s5, 0, 100, 0, 100);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value, head_value, chin_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value);
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
