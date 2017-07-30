var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  curRandomSeed = int(focusedRandom(0, 100));
  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = "#400B00";var bg_color1 = "#1a0400";
//var bg_color1 = 0;

var fg_color1 = [151, 102, 52];


var stroke_color1 = "#400B00";
var stroke_color1 = 0;

var num_faces = 22;

// calcifer (fire)
function drawFace1(x, y, w, h, mouth_value, mouth_width, pupilSize, chin, faceDown, fireOpacity, fireColour, orangeness, bodySize, tilt_value, bodyDown) {
    strokeWeight(0.7);
  push();
  translate(x, y -faceDown +bodyDown);
  rotate(tilt_value);
  //translate(0,-15);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale2 = extent / 220.0;
//blue
    stroke(stroke_color1);
    if(fireColour==0){
        fill(0,234,255,fireOpacity);
        fill(0,106,255,fireOpacity);
        fill(0,170,255,fireOpacity);
    }
    //orange
    if(fireColour==1){  
        fill(255, 227,42, fireOpacity);
        fill(255, 173, 0, fireOpacity);
        fill(255, orangeness, 0, fireOpacity);
    }
    //purple
    if(fireColour==2){
        fill(126,115,255,fireOpacity);
    }
    push();
    scale(bodySize,bodySize);
    if(fireColour==1){
        fireBodyOrange(chin);
    }
    else{    fireBody(chin);}

    pop();
    fill(255);
    push();
    translate(0,faceDown);
    fireEyes(scale2, pupilSize);
    fireMouth(scale2, mouth_value, mouth_width);
    pop();
  pop();
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
    
  var w = canvasWidth / 10;
  var h = canvasHeight / 6;
      translate(-w/4,0);
 var max_shift = 0.2 * w;

  for(var i=0; i<6; i++) {
    for(var j=0; j<10; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
        
     // shift even rows over by half a face
      if(i%2 == 0) {
        x = x + w/2;
      }
       
      // also random jitter
      x = x + focusedRandom(-max_shift, max_shift, 3);
      y = y + focusedRandom(-max_shift, max_shift, 3);
        
    tilt_value = focusedRandom(-30, 30,8);
    fireColour =getRandomColour();
    orangeness = focusedRandom(120, 200);

        if (fireColour == 0){
    mouth_value = focusedRandom(1, 10);
    pupilSize =  focusedRandom(25, 30);
    chin = 110;
    faceDown = 5;
    fireOpacity = focusedRandom(50, 100);
            mouth_width = 100;
            bodySize = 0.6;
            bodyDown = 8;
        }
        if (fireColour == 1){
            mouth_value = focusedRandom(25, 30);
            mouth_width = 40;
    pupilSize =  focusedRandom(5, 15);
    chin = 115;
    faceDown = 5;
    fireOpacity = focusedRandom(100, 180);
            bodySize = 0.7;  
            bodyDown = 0;
        }
        if (fireColour == 2){
            mouth_value = focusedRandom(10, 20);
    pupilSize =  focusedRandom(25, 30);
    chin = 120;
    faceDown = 5;
            bodySize = 0.6;
    fireOpacity = focusedRandom(50, 80);
            mouth_width = 100;
            bodyDown = 8;
        }

      drawFace1(x, y, w, h, mouth_value, mouth_width, pupilSize, chin, faceDown, fireOpacity, fireColour, orangeness, bodySize, tilt_value, bodyDown);   
    }
  }  
  }
function getRandomColour() {
  random_result = focusedRandom(0, 100);
  if(random_result < 10) {
    return 0;
  }
  else if(random_result < 13) {
    return 2;
  }
  else {
    return 1;
  }
}

function fireBody(chin){
    push();
    translate(0,3);
    scale(0.6,0.58);
    quad(0, chin, -70, 75, -90, 10, 70, 75);
    quad(0, chin, -70, 75, 80, -10, 70, 75);
    quad(0, chin, -70, 75, -70, -30, 70, 75);
    quad(0, chin, -70, 75, 60, -50, 70, 75);
    quad(0, chin, -70, 75, -50, -80, 70, 75);
    quad(0, chin, -70, 75, 10, -120, 70, 75);
    pop();
}
function fireBodyOrange(chin){
    push();
    translate(0,3);
    scale(0.6,0.58);
    fill(255, focusedRandom(90, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, -90, 10, 70, 75);
    fill(255, focusedRandom(90, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, 80, -10, 70, 75);
    fill(255, focusedRandom(90, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, -70, -30, 70, 75);
    fill(255, focusedRandom(80, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, 60, -50, 70, 75);
    fill(255, focusedRandom(90, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, -50, -80, 70, 75);
    fill(255, focusedRandom(90, 230,4), 0, fireOpacity);
    quad(0, chin, -70, 75, 10, -120, 70, 75);
    pop();
}
function fireEyes(scale2, pupilSize){
    push();
    scale(1);
    stroke(0);
    ellipse(-50 * scale2, 110 * scale2, 50 * scale2, 50 * scale2);
    ellipse( 50 * scale2, 110 * scale2, 50 * scale2, 50 * scale2);
    
    fill(0);
    ellipse(-50 * scale2, 110 * scale2, pupilSize * scale2, pupilSize * scale2);
    ellipse( 50 * scale2, 110 * scale2, pupilSize * scale2, pupilSize * scale2);
    pop();
}
function fireMouth(scale2, mouth_value, mouth_width){
      // mouth
    push();
    scale(1);
    noStroke();
  fill(bg_color1);
  ellipse(0 * scale2, 150 * scale2, mouth_width * scale2, mouth_value * scale2);
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
