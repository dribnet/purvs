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
var minC = 100;
var maxC = 255;
var bg_color1 = [255, 200, 100];
var bg_color2 = [205, 250, 100];
var bg_color3 = [105, 255, 100];

var fg_color1 = [0, 200, 250, 0];
var fg_color2 = [10, 200, 255];
var fg_color3 = [100, 200, 150, 0];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
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

  // Face structure

  fill(fg_color1);
  rectMode(CENTER);

  fill(fg_color3);

  rect(60, -60, 230 * scale, 50 * scale);
  rect(60, -60, 180 * scale, 90 * scale);

  rect(0, 0, 300 * scale, 400 * scale);
  rect(0, 60, 230 * scale, 200 * scale);
  rect(0, 65, 180 * scale, 210 * scale);
  rect(0, -60, 230 * scale, 200 * scale);
  rect(0, -65, 180 * scale, 210 * scale);

  fill(fg_color2);

  rect(-60, -60, 230 * scale, 50 * scale);
  rect(-60, -60, 180 * scale, 90 * scale);



  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color1);
    rect( 0, -80 * scale, 80 * scale, 80 * scale);
    fill(fg_color1);
    ellipse(0 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color1);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color1);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {

  rectMode(CENTER);
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

  noStroke();
  fill(fg_color3);
  rect(0, 0, 300 * scale, 400 * scale);
  rect(70, -40, 100 * scale, 200 * scale);
  rect(-70, -40, 100 * scale, 200 * scale);

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color2);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color2);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  var follicles = [
    [346,438],
    [391,420],
    [391,473],
    [439,463],
    [463,423],
    [487,487],
    [481,401],
    [520,452],
    [520,486],
    [533,443],
    [560,408],
    [580,466],
    [596,424],
    [618,454],
    [346,38],
    [391,20],
    [391,73],
    [439,23],
    [463,23],
    [487,87],
    [481,101],
    [520,52],
    [520,86],
    [533,43],
    [560,8],
    [580,66],
    [596,24],
    [618,24],
  ];

  resetMatrix();
  fill(colorHair);
  var radius = hair_value * scale;
  for(var i=0; i<follicles.length; i++) {
    ellipse(x + follicles[i][0]/2, y + (follicles[i][1]/2), radius, radius);
    //rotate(tilt_value);
  }
  rectMode(CORNER);
  resetMatrix();
}


// Face 3 is the one used for this sketch
function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  rotate(tilt_value);
  noStroke();

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  noStroke()
  fg_color2[2] = Math.random() * (maxC - minC) + minC;
  fill(fg_color2);

  // Main face shape
  rect(0, 0, (350 + width_value * 2) * scale, 250 * scale * 1.5);

 // beginShape();
 // for (int j = 0; j <= Math.random() * (8 - 3) + 3, j++) {
 // 	point {Math.random() * (50 - - 50) - 50, Math.random() * (50 - - 50) - 50}
//  }
 // endShape();

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse( 0, -80 * scale, 120 * scale, 120 * scale);
    fill(fg_color2);
    ellipse(mouseX/x * 2, -80 * scale, 40 * scale, 40 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color3);
    rect(-60 * scale, -80 * scale, 80 * scale, 80 * scale);
    rect( 60 * scale, -80 * scale, 80 * scale, 80 * scale);

    fill(fg_color2);
    ellipse( -20 + mouseX/x, -40 + mouseY/y, 40 * scale, 20 * scale);
    ellipse( 20 + mouseX/x, -40 + mouseY/y, 40 * scale, 20 * scale);
  }

  if (eye_value < 1) {
    fill(bg_color3);
    rect(-60 * scale, -80 * scale, 80 * scale, 10 * scale);
    rect( 60 * scale, -80 * scale, 80 * scale, 10 * scale);
  }

  // horns
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    triangle(-20, -50, 0, -100 - width_value * 2, 20, -50);
	}
   

  if (eye_value >= 2) {
  	bg_color3[2] = Math.random() * (maxC - minC) + minC;
    fill(bg_color3);
    triangle(-40, -65, -30 - mouth_value/4, -80 - width_value * 2, -20, -65);
    triangle(40, -65, 30 + mouth_value/4, -80 - width_value * 2, 20, -65);
  }

  //Ears
  rect(-75, -65, (50 + width_value) * scale, (10 + width_value) * scale);
  rect(75, -65, (50 + width_value) * scale, (10 + width_value) * scale);


  // mouth
  fill(bg_color3);
  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);


  //Teeth
  rect(-20, 40, (10 + width_value) * scale, (100 + width_value) * scale);
  rect(20, 40, (10 + width_value) * scale, (100 + width_value) * scale);
  rectMode(CORNER);
  pop();
}

  function getRandomNumberOfEyes() {
    random_result = focusedRandom(0, 100);
    if(random_result < 20) {
      return 0;
    }
    else if(random_result < 40) {
    return 1;
  }
    else {
      return 2;
    }
}

  function getRandomNumberOfMouth() {
    random_result = focusedRandom(0, 100);
    if(random_result < 60) {
      return 40;
    }
    else if(random_result < 70) {
    return 10;
  }
    else {
      return 140;
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
  bg_color1[3] = Math.random() * (maxC - minC) + minC;
  bg_color1[2] = Math.random() * (maxC - minC) + minC;
  background(bg_color1);
  noStroke();

  // use same size / y_pos for all faces
 // var face_w = canvasWidth / 4;
 // var face_h = face_w;
  //var face_y = height / 2;
 // var face_x = width / 2;

  // draw 3rd face
  fill(bg_color1);

  tilt_value = focusedRandom(-10, 20);
  eye_value = Math.floor(focusedRandom(1, 3));
  mouth_value = focusedRandom(30, 140);
  blink_value = focusedRandom(0, 100);
  width_value = focusedRandom(0, 100);


  var w = canvasWidth / 5;
  var h = canvasHeight / 1;

  var w2 = w/2;
  var h2 = h/2;

  for(var i=0; i<2; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      tilt_value = focusedRandom(-10, 30);
      eye_value = getRandomNumberOfEyes();
      mouth_value = getRandomNumberOfMouth();
      width_value = focusedRandom(0, 100);

   //   var x, y;
   //   if(mouth_value > 90) {
   //     x = focusedRandom(w2, width/10, 7);
   //     y = focusedRandom(h2, height-h2, 1);
   //   }
   //   else {
   //     x =focusedRandom(2*width/10, width-w2, 1);
   //     y = focusedRandom(2*height/10, height-h2, 1);
   //   }

      drawFace3(x, y, w, h, tilt_value, eye_value, mouth_value, width_value,blink_value);
    }
  }

  
}
///////////////////////
// this was the contents of focused random. Web browser couldnt find focus random so I put it in this file - PB
function resetFocusedRandom() {
  return Math.seedrandom(arguments);
}

function focusedRandom(min, max, focus, mean) {
  // console.log("hello")
  if(max === undefined) {
    max = min;
    min = 0;
  }
  if(focus === undefined) {
    focus = 1.0;
  }
  if(mean === undefined) {
    mean = (min + max) / 2.0;
  }
  if(focus == 0) {
    return d3.randomUniform(min, max)();
  }
  else if(focus < 0) {
    focus = -1 / focus;
  }
  sigma = (max - mean) / focus;
  val = d3.randomNormal(mean, sigma)();
  if (val > min && val < max) {
    return val;
  }
  return d3.randomUniform(min, max)();
}
////////////////////////
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
