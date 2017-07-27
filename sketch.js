var canvasWidth = 960;
var canvasHeight = 500;
var numWidth = 2;
var numHeight = 2;
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

function FaceOne(x, y, w, h, tilt_value, mouth_value, eye_UpDown, eye_LeftRight) {
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
  // Horns light color

  fill("#AEB8AC");
  triangle(-120  * scale,-90 * scale,-80 * scale,-110 * scale,-100 * scale,-160 * scale);
  triangle(120 * scale,-90 * scale,80 * scale,-110 * scale,100 * scale,-160 * scale);

  //Horn dark color
  fill("#727871");
  triangle(-108 * scale,-135 * scale,-90 * scale,-135 * scale,-100 * scale,-160 * scale);
  triangle(110 * scale,-120 * scale,90 * scale,-135 * scale,100 * scale,-160 * scale);
 
  fill(fg_color1);
  quad(115 * scale,100 * scale,0 * scale,150 * scale, 0 * scale,0 * scale,150 * scale,0 * scale);
  quad(115 * scale,-100 * scale,0 * scale,-150 * scale, 0 * scale,0 * scale,150 * scale,0 * scale); 
  quad(-115 * scale,100 * scale,0 * scale,150 * scale, 0 * scale,0 * scale,-150 * scale,0 * scale);
  quad(-115 * scale,-100 * scale,0 * scale,-150 * scale, 0 * scale,0 * scale,-150 * scale,0 * scale);

  // Eye  
  fill("#ffffff");
  quad(0 * scale, -120 * scale, -80 * scale, -40 * scale, 0 * scale, 40 * scale, 80 * scale, -40 * scale);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  quad(eye_LeftRight * scale, eye_UpDown -100 * scale, eye_LeftRight -60 * scale,eye_UpDown -40 * scale, eye_LeftRight * scale, eye_UpDown + 20 * scale,eye_LeftRight +60 * scale, eye_UpDown -40 * scale);

  //pupils
  fill("#000000");
  quad(eye_LeftRight * scale, eye_UpDown -80 * scale, eye_LeftRight -40 * scale,eye_UpDown -40 * scale, eye_LeftRight * scale, eye_UpDown * scale, eye_LeftRight +40 * scale, eye_UpDown -40 * scale);

  //mouth

  fill("#ffffff");
  quad(-100 * scale,50 * scale,0 * scale,mouth_value * scale, 100 * scale, 50 * scale,0 * scale,100 * scale);
  
  pop();
}

function FaceThree(x, y, w, h, skin_color, tilt_value, mouth_value, eye_UpDown, eye_LeftRight) {
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
  // Horns light color
  fill("#AEB8AC");
  triangle(-120  * scale,-90 * scale,-80 * scale,-110 * scale,-100 * scale,-160 * scale);
  triangle(120 * scale,-90 * scale,80 * scale,-110 * scale,100 * scale,-160 * scale);

  //Horn dark color
  fill("#727871");
  triangle(-108 * scale,-135 * scale,-90 * scale,-135 * scale,-100 * scale,-160 * scale);
  triangle(110 * scale,-120 * scale,90 * scale,-135 * scale,100 * scale,-160 * scale);

  fill(skin_color);
  ellipse(0, 0, 300 * scale, 300 * scale);

  // Mouth 
  fill("#ffffff");
  ellipse(0 * scale, 55 * scale, 200 * scale, 75 * scale);
  // Cover for mouth ellipse
  fill(skin_color);
  ellipse(0 * scale, (mouth_value-20) * scale, mouth_value*3.25 * scale, mouth_value * scale);
 
  fill("#ffffff");
  ellipse(0 * scale, -40 * scale, 160 * scale, 160 * scale);

  // set fill back to foreground for eyeballs
  fill(skin_color);
  ellipse(eye_LeftRight * scale, -eye_UpDown * scale , 120 * scale, 120 * scale);

  //pupils
  fill("#000000");
  ellipse(eye_LeftRight * scale, -eye_UpDown * scale, 60 * scale, 60 * scale);

  pop();
}

function FaceTwo(x, y, w, h, tilt_value, mouth_value, eye_UpDown, eye_LeftRight) {
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
  // Horns light color
  fill("#AEB8AC");
  triangle(-120  * scale,-90 * scale,-80 * scale,-110 * scale,-100 * scale,-160 * scale);
  triangle(120 * scale,-90 * scale,80 * scale,-110 * scale,100 * scale,-160 * scale);

  //Horn dark color
  fill("#727871");
  triangle(-108 * scale,-135 * scale,-90 * scale,-135 * scale,-100 * scale,-160 * scale);
  triangle(110 * scale,-120 * scale,90 * scale,-135 * scale,100 * scale,-160 * scale);
 
  fill(fg_color1);
  triangle(115 * scale, 100 * scale, 0 * scale, 150 * scale, 0 * scale, 0 * scale);
  triangle(115 * scale, 100 * scale, 150 * scale, 0 * scale, 0 * scale, 0 * scale);
  triangle(115 * scale, -100 * scale, 0 * scale, -150 * scale, 0 * scale, 0 * scale);
  triangle(115 * scale, -100 * scale, 150 * scale, 0 * scale, 0 * scale, 0 * scale);
  triangle(-115 * scale, 100 * scale, 0 * scale, 150 * scale, 0 * scale, 0 * scale);
  triangle(-115 * scale, 100 * scale, -150 * scale, 0 * scale, 0 * scale, 0 * scale);
  triangle(-115 * scale, -100 * scale, 0 * scale, -150 * scale, 0 * scale, 0 * scale);
  triangle(-115 * scale, -100 * scale, -150 * scale, 0 * scale, 0 * scale, 0 * scale);

  // Eye  
  fill("#ffffff");

  triangle(80 * scale, -80 * scale, 0 * scale, -40 * scale, 80 * scale, 0 * scale);
  triangle(-80 * scale, -80 * scale, 0 * scale, -40 * scale, -80 * scale, 0 * scale);

  triangle(80 * scale, -80 * scale, 0 * scale, -120 * scale, 0 * scale, -40 * scale);
  triangle(80 * scale, 0 * scale, 0 * scale, 40 * scale, 0 * scale, -40 * scale);

  triangle(-80 * scale, -80 * scale, 0 * scale, -120 * scale, 0 * scale, -40 * scale);
  triangle(-80 * scale, 0 * scale, 0 * scale, 40 * scale, 0 * scale, -40 * scale);


  // set fill back to foreground for eyeballs
  fill(fg_color1);

  triangle((eye_LeftRight + 60) * scale, (eye_UpDown - 70) * scale, eye_LeftRight * scale, (eye_UpDown - 40) * scale, (eye_LeftRight + 60) * scale, (eye_UpDown - 10) * scale);
  triangle((eye_LeftRight - 60) * scale, (eye_UpDown - 70) * scale, eye_LeftRight * scale, (eye_UpDown - 40) * scale, (eye_LeftRight - 60) * scale, (eye_UpDown - 10) * scale);

  triangle((eye_LeftRight + 60) * scale, (eye_UpDown - 70) * scale, eye_LeftRight * scale, (eye_UpDown - 100) * scale, eye_LeftRight * scale, (eye_UpDown - 40) * scale);
  triangle((eye_LeftRight + 60) * scale, (eye_UpDown - 10) * scale, eye_LeftRight * scale, (eye_UpDown + 20) * scale, eye_LeftRight * scale, (eye_UpDown - 40) * scale);

  triangle((eye_LeftRight - 60) * scale, (eye_UpDown - 70) * scale, eye_LeftRight * scale, (eye_UpDown - 100) * scale, eye_LeftRight * scale, (eye_UpDown - 40) * scale);
  triangle((eye_LeftRight - 60) * scale, (eye_UpDown - 10) * scale, eye_LeftRight * scale, (eye_UpDown + 20) * scale, eye_LeftRight * scale, (eye_UpDown - 40)* scale);

  //pupils
  fill("#000000");
  triangle((eye_LeftRight + 40) * scale, (eye_UpDown - 60) * scale, (eye_LeftRight + 40) * scale, (eye_UpDown - 20) * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);
  triangle((eye_LeftRight - 40) * scale, (eye_UpDown - 60) * scale, (eye_LeftRight - 40) * scale, (eye_UpDown - 20) * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);

  triangle((eye_LeftRight + 40) * scale, (eye_UpDown - 60) * scale, eye_LeftRight * scale, (eye_UpDown - 80) * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);
  triangle((eye_LeftRight + 40) * scale, (eye_UpDown - 20) * scale, eye_LeftRight * scale, eye_UpDown * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);

  triangle((eye_LeftRight - 40) * scale, (eye_UpDown - 60) * scale, eye_LeftRight * scale, (eye_UpDown - 80) * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);
  triangle((eye_LeftRight - 40) * scale, (eye_UpDown - 20) * scale, eye_LeftRight * scale, eye_UpDown * scale, eye_LeftRight * scale, (eye_LeftRight - 40) * scale);
  //mouth

  fill("#ffffff");
  triangle(-100 * scale, 50 * scale, -40 * scale, (mouth_value - 10) * scale, 0 * scale, 90 * scale);
  triangle(100 * scale, 50 * scale, 40 * scale, (mouth_value - 10) * scale, 0 * scale, 90 * scale);
  triangle(-40 * scale, (mouth_value - 10) * scale, 40 * scale, (mouth_value - 10) * scale, 0 * scale, 90 * scale);
  pop();
}

function getRandomColor() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return fg_color1 = "#96C195";
  }
  else if(random_result < 20) {
    return fg_color1 = "#6E8E6E";
  }
  else {
    return fg_color1 = "#57B555";
  }
}


  function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  fill(bg_color1);
 
  var w = canvasWidth / numHeight;
  var h = canvasHeight / numWidth;
  for(var i=0; i<numWidth; i++) {
    for(var j=0; j<numHeight; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      skin_color = getRandomColor();
      eye_UpDown = focusedRandom(20, 60);
      eye_LeftRight = focusedRandom(-40, 40);
      tilt_value = focusedRandom(-20, 40);
      mouth_value = focusedRandom(50, 80);
      FaceTwo(x, y, w, h, skin_color, tilt_value, mouth_value, eye_UpDown, eye_LeftRight);
    }
  }

  // drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}