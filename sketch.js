var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var faceSelector;

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


var fg_color1 = [151, 102, 52];


var stroke_color1 = "#400B00";


// calcifer (fire)
function drawFace1(x, y, w, h, mouth_value, pupilSize, chin, faceDown, fireOpacity, fireColour) {
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

    stroke(stroke_color1);
    if(fireColour==0){
        fill(0,234,255,fireOpacity);
    }
    if(fireColour==1){  
        fill(255, 227,42, fireOpacity);
    }
    if(fireColour==2){
        fill(126,115,255,fireOpacity);
    }
    
    fireBody(chin);
    
    fill(255);
    push();
    translate(0,faceDown);
    
    fireEyes(scale2, pupilSize);
    fireMouth(scale2, mouth_value);
    pop();
  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);
    
  noStroke();
  background(bg_color1);

    // draw 1st face
    fill(bg_color1);
    
    mouth_value = focusedRandom(1, 30);
    pupilSize =  focusedRandom(10, 30);
    chin = focusedRandom(100, 120);
    faceDown = focusedRandom(0, 10);
    fireOpacity = focusedRandom(50, 180);
    fireColour =Math.floor(focusedRandom(0, 2));
    
  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      mouth_value = focusedRandom(1, 30);
    pupilSize =  focusedRandom(10, 30);
    chin = focusedRandom(100, 120);
    faceDown = focusedRandom(0, 10);
    fireOpacity = focusedRandom(50, 180);
    fireColour =Math.floor(focusedRandom(0, 3));
      drawFace1(x, y, w, h, mouth_value, pupilSize, chin, faceDown, fireOpacity, fireColour);   
    }
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
function fireMouth(scale2, mouth_value){
      // mouth
    push();
    scale(0.8);
    noStroke();
  fill("#400B00");
  ellipse(0 * scale2, 150 * scale2, 100 * scale2, mouth_value * scale2);
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
