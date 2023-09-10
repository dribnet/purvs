var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color1 = ["#78CCC5"];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = ["#FFE991"];
var fg_color2 = ["#559ACC"];
var fg_color3 = ["#7F4B31"];

var stroke_color1 = ["#FF84F5"];
var stroke_color2 = ["#D492CD"];
var stroke_color3 = ["#CC9378"];

var colorHair = [20, 20, 0];


function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, randome, ezv, strakW, width_value) {
  push();
  translate(x, y);
  rotate(tilt_value);

  if (ezv == 1) {
  var foreground = fg_color1;
  var strakC = stroke_color1;
  }

  if (ezv == 2) {
  var foreground = fg_color2;
  var strakC = stroke_color2;
  }

  if (ezv == 3) {
  var foreground = fg_color3;
  var strakC = stroke_color3;
  }
  
  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scales = extent / 220.0;

  fill(foreground);
  ellipse(0, 0, 30 * scales + width_value, 400 * scales);
  fill (0,0);
  stroke (strakC);
  ellipse(0, 0, random (30,30+randome) * scales + width_value, random(390, 390+randome) * scales);
  ellipse(0, 0, random (30,30+randome) * scales + width_value, random(390, 390+randome) * scales);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    strokeWeight (strakW);
    ellipse(0 * scales, -80 * scales, random (15, 15+randome) * scales, random(15, 15+randome) * scales);

    ellipse(0 * scales, -80 * scales, random (15, 15+randome) * scales, random(15, 15+randome) * scales);
    ellipse(0 * scales, -80 * scales, random (15, 15+randome) * scales, random(15, 15+randome)* scales);

  }

  if (eye_value >= 2) {
    strokeWeight (strakW);
    ellipse(-60 * scales - (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales); 
    ellipse(-60 * scales - (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales); 
    ellipse(-60 * scales - (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales); 

    strokeWeight (strakW);
    ellipse( 50 * scales + (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales);
    ellipse( 50 * scales + (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales);
    ellipse( 50 * scales + (width_value/2), -80 * scales, random (20, 20+randome) * scales, random(20, 20+randome) * scales);
  }
  // mouth
  strokeWeight(1);
  fill(bg_color1);
  noStroke();
  ellipse(0 * scales, 70 * scales, 150 * scales + width_value, (mouth_value+5) * scales);
  fill (0,0);
  stroke (strakC);
  ellipse(0, 0, random (30,(30+randome)) * scales + width_value, random(390, (390+randome)) * scales);
  ellipse(0, 0, random (30,(30+randome)) * scales + width_value, random(390, (390+randome)) * scales);
  pop();
}

function getRandomColor() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 1;
  }
  else if(random_result < 50) {
    return 3;
  }
  else {
    return 2;
  }
}
function getRandomEye() {
  random_result = random(0, 100);
  if(random_result < 25) {
    return 1;
  }
  else if(random_result < 40) {
    return 3;
  }
  else {
    return 2;
  }
}
function getRandomWidth(){
  random_result = random(0, 100);
  if(random_result < 15) {
    return random (60, 100);
  }
  else if(random_result < 25) {
    return random (20, 60);
  }
  else {
    return random (0, 20);
  }
}
var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);


  // draw 1st face
  fill(bg_color1);

  tilt_value = focusedRandom(10, 50);
  eye_value = Math.floor(focusedRandom(1, 3));
  mouth_value = focusedRandom(30, 140);

  var shift = focusedRandom(0, 500, 2, 75);
  var w = canvasWidth / 17;
  var h = canvasHeight / 8;
  for(var i=-10; i<20; i++) {
    for(var j=0; j<20; j++) {
      shift = (shift + 5) % 35;
      var y = h/2 + h*i+shift;
      var x = w/2 + w*j-shift+random(0, 15);
      eye_value = getRandomEye();
      mouth_value = focusedRandom(1, 100, 1, 74);
      ezv = getRandomColor ();
      strakW = focusedRandom (1,1.5, 1, 32);
      width_value = getRandomWidth()*(j)/30;
      randome = 0;
      if (ezv == 1){
        tilt_value = focusedRandom(-40, 5, 2, 50);
      }
      if (ezv == 2){
        tilt_value = focusedRandom(-30, 30, 3, 50);
      }
      if (ezv == 3){
        tilt_value = focusedRandom(-10, 40, 2, 50);
      }
      drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, randome+shift, ezv, strakW, width_value);
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
