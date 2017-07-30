var canvasWidth = 960;
var canvasHeight = 500;
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
var bg_color1 = "#400B00";
var bg_color1 = 0;

var fg_color1 = [151, 102, 52];


var stroke_color1 = "#400B00";
var stroke_color1 = 0;


// calcifer (fire)
function drawFace1(x, y, w, h, mouth_value, mouth_width, pupilSize, chin, faceDown, fireOpacity, fireColour, orangeness, bodySize) {
  push();
  translate(x, y -faceDown);
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
    fireBody(chin);
    pop();
    fill(255);
    push();
    translate(0,faceDown);
    fireEyes(scale2, pupilSize);
    fireMouth(scale2, mouth_value, mouth_width);
    pop();
  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);
    
  noStroke();
  background(bg_color1);

    // draw 1st face
    fill(bg_color1);
    mouth_width = 100;
    mouth_value = focusedRandom(1, 30);
    pupilSize =  focusedRandom(10, 30);
    chin = focusedRandom(100, 120);
    faceDown = 5;
    fireOpacity = focusedRandom(50, 180);
    fireColour =getRandomColour();
    orangeness = focusedRandom(150, 200);
    bodySize = 1;
  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
        fireColour =getRandomColour();
        orangeness = focusedRandom(150, 210);
        //0=blue 1=orange 2=purple 
        if (fireColour == 0){
    mouth_value = focusedRandom(1, 10);
    pupilSize =  focusedRandom(25, 30);
    chin = 110;
    faceDown = 5;
    fireOpacity = focusedRandom(50, 100);
            mouth_width = 100;
            bodySize = 0.9;
        }
        if (fireColour == 1){
            mouth_value = focusedRandom(25, 30);
            mouth_width = 40;
    pupilSize =  focusedRandom(5, 15);
    chin = 115;
    faceDown = 5;
    fireOpacity = focusedRandom(100, 180);
            bodySize = 1;
        }
        if (fireColour == 2){
            mouth_value = focusedRandom(10, 20);
    pupilSize =  focusedRandom(25, 30);
    chin = 120;
    faceDown = 5;
            bodySize = 0.9;
    fireOpacity = focusedRandom(50, 80);
            mouth_width = 100;
        }

      drawFace1(x, y, w, h, mouth_value, mouth_width, pupilSize, chin, faceDown, fireOpacity, fireColour, orangeness, bodySize);   
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
function fireEyes(scale2, pupilSize){
    push();
    scale(0.8);
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
    scale(0.8);
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
