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

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

var bg_color = "#c78a5b";//"#c6bdab";
var pupil_color1 = "#000000"
var eye_color1 = "#FFFFFF";
var fg_color1 = "#fed41e";
var facial_color = "#d3af7d";
var fg_color2 = "#d3af7d";
var stroke_color = "#000000";
var teeth_color = "#FFFFFF";

function drawFace1(x, y, w, h, mouth_value, eye_value, hair_value) {
  push();
  translate(x, y);


  // background color
  
  background(bg_color);
 
  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  // push();
  // translate(960/4, 500/2);
  // rotate(4);
  fill(fg_color1);
  ellipse(0, 0, 260, 350);

  // set fill to match background color
  fill(eye_color1);
  // draw two eyes
  ellipse(-80, -80, 80, 80);
  ellipse( 0, -80, 80, 80);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-90 + eye_value, -80, 10, 10);
  ellipse( -10 + eye_value, -80, 10, 10);

  // facial hair
  fill(fg_color2);
  ellipse(-40, 80, 220, 200);

  // mouth-hole with background color
  var mouth_size = 3 * mouth_value;
  fill(stroke_color);
  stroke(stroke_color);
  ellipse( -60, 100, mouth_size, (50 / (mouth_value - 9)));
  
  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-75, -60, -35, -60, -35, -20,  -75, -20);
  stroke(stroke_color);
  line(-75, -60, -35, -60);
  line(-35, -20,  -75, -20);
  arc(-75, -40, 40, 40, 90, 270, OPEN);
 
  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);
  

  //hair
  
  noFill();
  stroke(stroke_color);
  if(hair_value == 0){

  }
  else if(hair_value == 1){
    arc(0, -155, 110, 60, 185, 10);
  }
  else if(hair_value == 2){
    arc(0, -155, 110, 60, 185, 10);
    arc(-10, -150, 110, 60, 183, 10);
  }
  fill(stroke_color);
  line(60,-100,70,-130);
  line(80,-100,70,-130);
  line(80,-100,90,-130);
  line(100,-100,90,-130);
  
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, teeth_value) {
  
   // move to position2, rotate, draw "head" ellipse
  push();
  translate(x,y);
  //rotate(30);
  fill(fg_color1);
  ellipse(0, 0, 260, 350);

  // draw hair
  beginShape();
  vertex(-130,-10);
  vertex(-130,-215 + hair_value);
  vertex(-104, -175);
  vertex(-78, -215 + hair_value);
  vertex(-52, -175);
  vertex(-26, -215 + hair_value);
  vertex(0, -175);
  vertex(26, -215 + hair_value);
  vertex(52, -175);
  vertex(78, -215 + hair_value);
  vertex(104, -175);
  vertex(130, -215 + hair_value);
  vertex(130,-10);
  vertex(-130,-10);
  endShape(CLOSE);

  noStroke();
  rect(-129, -15, 258, 10);

  stroke(stroke_color);
  // set fill to match background color
  fill(eye_color1);
  // draw two eyes
  ellipse(-60, -80, 80, 80);
  ellipse( 20, -80, 80, 80);

  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-80, -80, eye_value, eye_value);
  ellipse( 10, -80, eye_value, eye_value);

  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-55, -60, -15, -60, -15, -20,  -55, -20);
  stroke(stroke_color);
  line(-55, -60, -15, -60);
  line(-15, -20,  -55, -20);
  arc(-55, -40, 40, 40, 90, 270, OPEN);

  // mouth-hole with background color
  fill(bg_color2);
  noStroke();
  //ellipse( -70, 70, 250, 50);
   arc(-70, 70, 250, 50, 195, 155, CHORD);

  stroke(stroke_color);
  noFill();
  arc(-70, 70, 250, 50, 202, 149);

  stroke(stroke_color);
  fill(eye_color1);
  arc(-70, 70, 250, 50, 230, 115, CHORD);
  if (teeth_value == 0){
    line(-87, 70, 53, 70);
    line(-70, 45, -65, 95);
    line(-50, 45, -45, 94);
    line(-30, 46, -25, 93);
    line(-10, 48, -5, 91);
    line(10, 50, 15, 88);
    line(30, 55, 35, 83);
  }
  else if(teeth_value == 1){
    line(-87, 70, 53, 70);
    line(-70, 45, -65, 95);
    line(-30, 46, -25, 93);
    line(10, 50, 15, 88);
  }
  else if(teeth_value ==2){
    line(-87, 70, 53, 70);
  }
  pop();
    

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
    var mouth_value = map(s1, 0, 100, 10, 55);
    var background_value = Math.floor(map(s3, 0, 100, 0, 2));
    var eye_value = map(s2, 0, 100, -20, 20);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, mouth_value, eye_value, background_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, -15, 15);
    var teeth_value = Math.floor(map(s3, 0, 100, 0, 2));
    var eye_value = map(s2, 0, 100, 5, 25);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, teeth_value);
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
