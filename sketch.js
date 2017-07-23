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
var bg_color1 = [214, 176, 0];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];


//Potter colours
var potterFaceCol = [237, 203, 163];
var glassesStroke = [0, 0, 0];
var scarColor0 = [237, 175, 149];
var scarColor1 = [237, 146, 149];
var scarColor2 = [214, 109, 126];
var scarColor3 = [214, 68, 42];
var scarColor4 = [181, 58, 36];
var scarColor5 = [122, 39, 24];
var potterHairCol = [76, 58, 24];

var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];






// draws the first face 
function drawPotter(x, y, w, h, scar_value, glasses_value, scarOff_value) {
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

  // face
  fill(potterFaceCol);
  ellipse(0, 0, 280 * scale, 325 * scale);

  // hair
  fill(potterHairCol);
  ellipse(0, -15, 280 * scale, 280 * scale);

  fill(potterFaceCol);
  beginShape();
  vertex(-77, -15);
  vertex(-10, -70);
  vertex(77, -15);
  vertex(76, 5);
  vertex(70, 25);
  vertex(15, 75);
  vertex(-15, 75);
  vertex(-25, 75);
  vertex(-50, 55);
  vertex(-55, 55);
  vertex(-75, 15);
  endShape();

  // glasses
  stroke(glassesStroke);
  strokeWeight(2);
  fill(potterFaceCol);
  line(-20, -10, 30, -10)
  ellipse(-50 * scale, -15 * scale, glasses_value * scale, glasses_value * scale);
  ellipse(50 * scale, -15 * scale, glasses_value * scale, glasses_value * scale);
  //line(-43, -25, -72, -35)
  //line(44, -25, 72, -35)

  // scar
   if (scarOff_value === 0) {
	  rotate(scar_value);
	  stroke(scarColor0);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }
  if (scarOff_value === 1) {
	  rotate(scar_value);
	  stroke(scarColor1);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }

  if (scarOff_value == 2) {
	  rotate(scar_value);
	  stroke(scarColor2);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }

  if (scarOff_value == 3) {
	  rotate(scar_value);
	  stroke(scarColor3);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }

  if (scarOff_value == 4) {
	  rotate(scar_value);
	  stroke(scarColor4);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }

  if (scarOff_value == 5) {
	  rotate(scar_value);
	  stroke(scarColor4);
	  strokeWeight(3);
	  noFill();
	  beginShape();
	  vertex(-15, -45);
	  vertex(-5, -35);
	  vertex(-15, -35);
	  vertex(-5, -25);
	  endShape();
  }
pop();
}





function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
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
    // draw Harry Potter
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var scar_value = map(s1, 0, 100, -10, 37);
    var glasses_value = map(s3, 0, 120, 40, 90);
    var scarOff_value = Math.floor(map(s2, 0, 100, 0, 5));
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawPotter(face_x, face_y, face_w, face_h, scar_value, glasses_value, scarOff_value);    
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
