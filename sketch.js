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

var fg_color1 = "#57B555";
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function Mike(x, y, w, h, tilt_value, mouth_value, eye_UpDown, eye_LeftRight) {
  push();
  translate(x, y);
  noStroke();
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
  ellipse(0, 0, 300 * scale, 300 * scale);

  // Mouth 
  fill(bg_color1);
  ellipse(0 * scale, 55 * scale, 200 * scale, 75 * scale);
  // Cover for mouth ellipse
  fill(fg_color1);
  ellipse(0 * scale, (mouth_value-20) * scale, mouth_value*3.25 * scale, mouth_value * scale);
 
  fill(bg_color1);
  ellipse(0 * scale, -40 * scale, 160 * scale, 160 * scale);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(eye_LeftRight * scale, -eye_UpDown * scale , 120 * scale, 120 * scale);

  //pupils
  fill("#000000");
  ellipse(eye_LeftRight * scale, -eye_UpDown * scale, 60 * scale, 60 * scale);

  // Horns light color
  fill("#AEB8AC");
  triangle(-120  * scale,-90 * scale,-85 * scale,-123 * scale,-150 * scale,-150 * scale);
  triangle(120 * scale,-90 * scale,85 * scale,-123 * scale,150 * scale,-150 * scale);
  //Horn dark color
  fill("#727871");
  triangle(-142 * scale,-135 * scale,-115 * scale,-135 * scale,-150 * scale,-150 * scale);
  triangle(135 * scale,-120 * scale,115 * scale,-135 * scale,150 * scale,-150 * scale);
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
  if(blink_value > 50) {
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

function sully(x, y, w, h, width_value, eye_value, mouth_value) {
  push();
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
  noStroke()
  fill(fg_color2);
  rect(-150 * scale, -200 * scale, 300 * scale, 400 * scale, 120 * scale, 120 * scale, 80 * scale, 80 * scale );
  ellipse(0 * scale, -25 * scale, 325 * scale, 360 * scale);

  // set fill to match background color
  fill(bg_color3);
  // draw two eyes
  ellipse(-50 * scale, -80 * scale, 60 * scale, 60 * scale);
  ellipse( 50 * scale, -80 * scale, 60 * scale, 60 * scale);

  fill(fg_color3);
  ellipse(-60 * scale, -80 * scale, 30 * scale, 30 * scale);
  ellipse( 40 * scale, -80 * scale, 30 * scale, 30 * scale);
  // set fill back to foreground for eyeballs
  fill("#000000");
  ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
  ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);

  fill("#387378")
  ellipse( 0 * scale, -10 * scale, 100 * scale, 50 * scale);
  ellipse( 0 * scale, 0 * scale, 50 * scale, 50 * scale);
  // Horns light color
  fill("#AEB8AC");  
  push();
  rotate(45);
  rect(-250 * scale, -50 * scale, 75 * scale, 50 * scale );
  rect(-50 * scale, -250 * scale, 50 * scale, 75 * scale );
  pop();
  triangle(-177 * scale,-176 * scale,-120 * scale,-250 * scale,-125 * scale,-190 * scale);
  triangle(177 * scale,-176 * scale,120 * scale,-250 * scale,125 * scale,-190 * scale);
  push();
  pop();  pop();
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
    //var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    var eye_UpDown = map(s3, 0, 100, 20, 60);
    var eye_LeftRight = map(s4, 0, 100, -40, 40);
    var mouth_value = map(s2, 0, 100, 45, 80);
    if (mode == 'all') {
      face_x = width / 6;
    }
    Mike(face_x, face_y, face_w, face_h, tilt_value, mouth_value, eye_UpDown, eye_LeftRight);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 100));
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
    sully(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
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
