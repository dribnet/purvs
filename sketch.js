var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var pickface;

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

// global variables for colors
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

//face
  fill(fg_color1);
  ellipse(0, 0, 400 * scale, 400 * scale);

//cheeks
  fill(cheeks);
  ellipse(60,-10,mouth_value * scale,10);
  ellipse(-60,-10,mouth_value * scale,10);


  if (eye_value = 2) {

    fill(eyes);
    ellipse(-25, -20, 20, 5);
    ellipse( 25, -20, 20, 5);
  }

  //ears
  fill(ears);
  triangle(10, -85, 70, -50, 35, -30);
  triangle(-10, -85, -70, -50, -35, -30);

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

  //ears
  fill(fg_color3);
  ellipse(-50, -50, 50, 50);
  ellipse(50, -50, 50, 50);
  fill(eyes);
  ellipse(-50, -50, 30, 30);
  ellipse(50, -50, 30, 30);

  //face
  //stroke(stroke_color3);
  fill(fg_color3);
  ellipse(0, 0, 400 * scale, 400 * scale);

  //eyes color
  fill(169,111,63);
  ellipse(-27, -25, 50, 50);
  ellipse(27, -25, 50, 50);

  // eyes. first check for blinking
  if(blink_value > 25) {
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


  // TODO: paramaterize hair
  var follicles = [
    // [346,138],
    // [391,120],
    // [391,67],
    // [439,76],
    // [463,42],
    // [487,18],
    // [481,101],
    // [520,102],
    // [520,78],
    // [533,54],
    // [560,108],
    // [580,76],
    // [596,124],
    // [618,124]
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
  ellipse(-30,-25,20, eyes_value,5);
  ellipse(30,-25,20, eyes_value,5);
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
      eye_value = int(focusedRandom(1, 6));
      mouth_value = focusedRandom(60, 140);
      eyes_value = focusedRandom(5,20);
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