var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var pickface;
var img;


function setup () {
  
  pickface = createSelect();
  


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

// colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [153,184,150];
var bg_color3 = [161, 159, 181];

var fg_color1 = [174, 110, 108];
var fg_color2 = [80, 45, 13];
var fg_color3 = [80, 45, 13];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

var mouthcolor = [255,255,255];
var cheeks = [213,132,151];
var ears = [141,89,88];
var eyes = [0,0,0];

function drawPig(x, y, w, h, tilt_value, eye_value, mouth_value) {

  push();
  translate(x, y);
  rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

//shadow
  fill(202,185,168); 
  ellipse(10,10,150,150);
  
//face
  fill(fg_color1);
  ellipse(0, 0, 400 * scale, 400 * scale);
  fill(184,116,114);
  arc(10,-15,90,50,-800, PI*QUARTER_PI, OPEN);
  arc(1,-6,150,140,-120, PI*QUARTER_PI, OPEN);

//cheeks
  fill(cheeks);
  ellipse(60,-10,mouth_value * scale,10);
  ellipse(-60,-10,mouth_value * scale,10);


    fill(eyes);
    ellipse(-25, -20, 20, 5);
    ellipse( 25, -20, 20, 5);
    fill(221,217,218);
    ellipse(-25,-20,5,eye_value,20);
    ellipse(25,-20,5,eye_value,10);

//ears
  fill(ears);
  stroke(eyes);
  triangle(10, -85, 70, -50, 35, -30);
  triangle(-10, -85, -70, -50, -35, -30);

//mouth
  if (freckle_value === 2 || freckle_value == 2) {
   stroke(12,0,0);
   line(-10, 45, 10, 45);
   line(10, 45, 15, 40);
 }

   else{
   stroke(12,0,0);
   line(-10, 45, 10, 45);

   } 
   

// nose
  fill(ears);
  ellipse(0 * scale, 30 * scale, 150 * scale, mouth_value * scale);
  fill(eyes);
  ellipse(-10, 10, 5, 5);
  ellipse(10, 10, 5, 5);
  pop();
}

function drawMonkey(x, y, w, h, hair_value, eye_value, blink_value,lefttilt_value) {
  rectMode(CENTER);
  push();
  translate(x, y);
  rotate(lefttilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

//shadow
  fill(202,185,168); 
  ellipse(10,10,150,150);

//ears
  fill(fg_color3);
  ellipse(-50, -50, 50, 50);
  ellipse(50, -50, 50, 50);
  fill(eyes);
  ellipse(-50, -50, 30, 30);
  ellipse(50, -50, 30, 30);

//face
  fill(fg_color3);
  ellipse(0, 0, 400 * scale, 400 * scale);
  
  fill(59,35,11);
  arc(0,-15,90,50,15, PI*QUARTER_PI, OPEN);
  arc(1,-6,150,140,920, PI*QUARTER_PI, OPEN);

//eyes color
  fill(169,111,63);
  ellipse(-27, -25, 50, 50);
  ellipse(27, -25, 50, 50);

// eyes. first check for blinking
  if(blink_value > 85) {
    fill(eyes);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(eyes);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(eyes);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

// mouth and nose
  fill(169,111,63);
  ellipse(0 * scale, 70 * scale, 150 * scale, 130 * scale);
  fill(eyes);
  ellipse(-10, 20, eyes_value,5, 2);
  ellipse(10, 20, eyes_value,5, 2);
  rect(0,35,30,2);

  var follicles = [
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

function drawPanda(x, y, w, h, width_value, freckle_value, mouth_value, tilt_value,hair_value) {
  push();
  rectMode(CENTER);
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

//shadow
  fill(202,185,168); 
  ellipse(10,10,150,150);

//ears
  fill(51,51,51);
  ellipse(-70, -30, 50, 50);
  ellipse(70, -30, 50, 50);
  fill(eyes);
  ellipse(-70, -30, 30, 30);
  ellipse(70, -30, 30, 30);

//face
  fill(220,216,217);
  ellipse(0, 0, 400 * scale, 400 * scale);

  fill(203,199,200);
  arc(1,-6,150,140,920, PI*QUARTER_PI, OPEN);

//eyes
  fill(51,51,51);
  ellipse(-27, -25, 50, 50);
  ellipse(27, -25, 50, 50);

//nose
  fill(51,51,51);
  triangle(-15, 10, 15, 10, 0, 30);

//mouth
   stroke(12,0,0);
   line(-0.5, 28, -0.5, 40);
   fill(eyes);
   rect(0,40,30,2);

  // freckles
  if (freckle_value === 1 || freckle_value == 2) {
    fill(eyes);
    ellipse(15,15,2,2);
    ellipse(-15,15,2,2);
    ellipse(-15,20,2,2);
  }

  if (freckle_value === 2 || freckle_value == 2) {
    
    fill(eyes);
    ellipse(10,25,2,2);
    ellipse(-10,25,2,2);
    ellipse(15,20,2,2);

  }

  if (freckle_value === 3 || freckle_value == 6) {
    
    fill(eyes);
    ellipse(15,20,2,2);
    ellipse(-15,20,2,2);
    ellipse(10,25,2,2);
    ellipse(-10,25,2,2);
  }

//eyes
  fill(220,216,217);
  ellipse(-30,-25,20, eyes_value,10);
  ellipse(30,-25,20, eyes_value,10);
  ellipse(-30, -25, 2, 2);
  ellipse(30, -25, 2, 2);

  pop();
}

function getRandomNumberOfFreckles() {
  random_result = focusedRandom(1, 6);
  if(random_result < 2) {
    return 2;
  }
  else if(random_result < 4) {
    return 3;
  }
  else {
    return 6;
  }
}

function getRandomNumberOfFaces() {
  random_result = focusedRandom(1, 100);
  if(random_result < 8) {
    return 1;
  }
  else if(random_result < 12) {
    return 3;
  }
  else {
    return 2;
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

//shadow
  fill(202,185,168);
  rect(0, 35, 960, 10);
  rect(35, 0, 10, 500);
  
  fill(57,28,20);
  rect(0, 0, 960, 30);
  rect(0, 0, 30, 500);
  rect(930, 0, 30, 500);
  rect(0, 470, 960, 30);

  fill(255,255,255);
  rect(0, 30, 960, 10);
  rect(30, 0, 10, 500);
  rect(920, 30, 10, 500);
  rect(0, 460, 920, 10);
  
  fill(250,220,134);
  //top left
  rect(0, 0, 100, 30);
  rect(0, 0, 30, 100);
  
  //top right
  rect(930, 0, 30, 100);
  rect(860,0,80,30);
  
  //bottom left
  rect(0, 470, 100, 30);
  rect(0, 400, 30, 100);

  //bottom right
  rect(930, 400, 30, 100);
  rect(860,470,80,30);
  
  //draw faces

  fill(bg_color1);


  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<2; i++) {
    for(var j=0; j<4; j++) {
      var face = [drawPig, drawMonkey, drawPanda][floor(random()*3)];
      var y = h*1 + h*i;
      var x = w*1 + w*j;
      tilt_value = focusedRandom(0, 70);
      lefttilt_value = focusedRandom(0,-70);
      eye_value = int(focusedRandom(1, 8));
      mouth_value = focusedRandom(60, 140);
      eyes_value = focusedRandom(2,30);
      blink_value = focusedRandom(0,50);
      freckle_value = getRandomNumberOfFreckles();
      face(x, y, w, h, tilt_value, eye_value, mouth_value,lefttilt_value, eyes_value,freckle_value, blink_value);
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