/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
let slider1, slider2, slider3, slider4, slider5;
let faceSelector;
let faceGuideCheckbox;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0,100,50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');


  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}

const bg_color = [36,45,50];

function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
 

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();
  if (mode == '1') {
    // draw 1st face
    let horns = int(map(s1, 0, 100, 0, 5));
    let width = map(s2, 0, 100, 0, 1);
    let cheekbones = map(s3,0,100,0,1);
    let Jaw = map(s4,0,100,0,0.3);
    drawFace1(horns, width, cheekbones,jaw);
  }

  if (mode == '2') {
    let horns = int(map(s1, 0, 100, 0, 5));
    let width = map(s2, 0, 100, 0, 1);
    let cheekbones = map(s3,0,100,-0.5,0.5);
    drawFace2(horns, width, cheekbones);
  }

  if (mode == '3') {
    // draw 3rd face using values mapped from 3 sliders
    let tilt_value = map(s1, 0, 100, -90, 90);
    let mouth_value = map(s2, 0, 100, 0.5, 10);
    let eye_value = int(map(s3, 0, 100, 1, 3));
    drawFace3(tilt_value, eye_value, mouth_value);
  }
  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    // ellipse(0, 0, 20, 20);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
