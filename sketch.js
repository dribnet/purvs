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
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();

  bert_face = color(45, 85, 95)
  bert_nose = color(29, 96, 94)

  ernie_face = color(35, 90, 92)

  mouth = color(351, 100, 55)

  oscar_face = color(75, 80, 50)
  oscar_brow = color(23, 80, 30)
}

// global variables for colors
var bg_color = "#ffffff";
var stroke_color = "#c78a5b";

var bert_face //yellow
var bert_nose //orange

var ernie_face = "rgb(217, 118, 37)" //orange
var ernie_nose = "rgb(218, 10, 31)" //red

var oscar_face;
var oscar_brow;


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

function drawFace1(x, y, w, h, tilt_value, eye_value, nose_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(-tilt_value/2);
  //squeeze ernie
  fill(ernie_face);
  ellipse(0, 0, 290, 230);

  // mouth-hole with background color
  fill(mouth);
  ellipse(0, 30, 230, 120);
  //cut out top of ernie's mouth with another ellipse to make him super smiley
  fill(ernie_face)
  ellipse(0, 10, 285, 95)

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -40, 60, 45);
  ellipse( 40, -40, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-30-eye_value/100*20, -40, 20, 20);
  ellipse( 30+eye_value/100*20, -40, 20, 20);

  fill(ernie_nose)
  ellipse(0, 0, 30 + 36*nose_value/100, 40 + 33*nose_value/100);
  pop();
}

function drawFace2(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value/2);
  fill(bert_face);
  ellipse(0, 0, 270, 400);

  translate(0, 30)

  var bert_mouth_h = 54;
  // mouth-hole with background color
  fill(mouth);
  ellipse(0, 40+20*mouth_value/100, 200, bert_mouth_h*2);
  //cut off top
  fill(bert_face)
  rect(0, 0, 200, bert_mouth_h*2)

  // set fill to match background color
  var diff = map(eye_value, 0, 100, 0, 10);
  fill("white");
  // draw two eyes
  ellipse(-50, -80+diff, 70, 70);
  ellipse( 50, -80+diff, 70, 70);

  // set fill back to foreground for eyeballs
  fill("black");
  ellipse(-40, -80+diff, 30, 30);
  ellipse( 40, -80+diff, 30, 30);

  //bert eyebrows
  fill("black")
  rect(0, -130, 180, 10+eye_value/100*20)

  fill(bert_nose);
  ellipse(0, -10, 80, 110)
  pop();
}

function drawFace3(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value);
  //squeeze oscar
  fill(oscar_face);
  ellipse(0, 0, 290, 200);

  // mouth-hole with background color
  fill('black');
  ellipse(0, 20, 250, 20+70*mouth_value/100);
  //cut out top of oscar's mouth with another ellipse to make him super smiley
  fill(oscar_face)
  rect(0, -5, 260, 50)

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -20, 60, 45);
  ellipse( 40, -20, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-40, -20, 30, 30);
  ellipse( 40, -20, 30, 30);

  //oscar eyebrows
  fill(oscar_brow)
  rect(0, map(eye_value, 0, 100, -65, -40), 180, 20)

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
  background('white');

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
    //rect(0, 0, width/3, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, s2, s3);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    //rect(width/3, 0, 2*width/3, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, tilt_value, s2, s3);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    //rect(2*width/3, 0, width, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, tilt_value, s2, s3);
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
