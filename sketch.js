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

// function drawFace2(x, y, w, h, hair_value, eye_value, blink_value, different, alpha) {
//   rectMode(CENTER);
//   push();
//   translate(x, y);

//   var extent = 0;
//   if(h < w) {
//     extent = h / 2;
//   }
//   else {
//     extent = w / 2;
//   }
//   var scales = extent / 220.0;

//   stroke(stroke_color3);
//   fill(fg_color3);
//   ellipse(0, 0, 300 * scales, 400 * scales);
//   fill (200, different);
//   ellipse(0, 0, 300 * scales, 400 * scales);

//   // eyes. first check for blinking
 
//   fill (0,0);
//   strokeWeight(5);
//   stroke (1, different);
//   bezier(30*scales, -80*scales, 35, -30, 35, -40, 70*scales, -80*scales);
//   bezier(-30*scales, -80*scales, -35, -30, -35, -40, -70*scales, -80*scales);
//   noStroke();
//   fill(bg_color3);
//   strokeWeight (1);
//   ellipse(-50 * scales, -80 * scales, 50 * scales, 18 * scales);
//   ellipse( 50 * scales, -80 * scales, 50 * scales, 18 * scales);

//   fill(fg_color3);
//   ellipse((-50 + eye_value) * scales, -80 * scales, 20 * scales, 20 * scales);
//   ellipse(( 50 + eye_value) * scales, -80 * scales, 20 * scales, 20 * scales);
  

//   // mouth
//   fill(bg_color3);
//   ellipse(0 * scales, 70 * scales, 150 * scales, 20 * scales);

//   //cheeks
//   fill(bg_color2);
//   noStroke();
//   ellipse (90, 60, different/2.5, 150);
//   ellipse (-90, 60, different/2.5, 150);

//   // Sun
//   fill (fg_color3)
//   ellipse (-100, -180, 40, 40);
//   fill (bg_color2);

//   scale (different/2.5);
//   ellipse (-80, -170, 40, 40);
//   scale (-(different/2.5));

//   stroke (206, 207, 180, alpha);
//   translate (-100, -180);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);
//   rotate (45);
//   line (30,20, 45,30);

//   noStroke();
//   rectMode(CORNER);
//   resetMatrix();
// }

// function drawFace3(x, y, w, h, width_value, eye_value, mouth_value, randome, ezv) {
//   push();
//   rectMode(CENTER);
//   translate(x, y);
//   // rotate(width_value);

//   var extent = 0;
//   if(h < w) {
//     extent = h / 2;
//   }
//   else {
//     extent = w / 2;
//   }
//   var scales = extent / 220.0;



  

//   rotate (-width_value);
//   fill(fg_color2);
//     //mouth


//   stroke (0);
//   rect (0,70,70,20,5);
//   bezier (-35, 70, random(-30,-40), random(60,70), 25, random(70,80), 35,70);
  
//   strokeWeight(1);
//   fill (bg_color3);


//   bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95* scale, -110* scale);
//   bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
//   bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
//   print (randome);
//   bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);


//   bezier (-95* scale, -110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95* scale, 110* scale);
//   bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);
//   bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);
//   bezier (-95, -110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), -95, 110);


//   bezier (-95* scale, 110* scale, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95* scale, 110* scale);
//   bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);
//   bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);
//   bezier (-95, 110, 0, random (-110+mouth_value, -110+randome+mouth_value), 0, random (-110+mouth_value, -110+randome+mouth_value), 95, 110);


//   bezier (95* scale, 110* scale, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95* scale, -110* scale);
//   bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
//   bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);
//   bezier (95, 110, 0, random (-110, -110+randome), 0, random (-110, -110+randome), 95, -110);



//     // eyes
//   if (eye_value >= 1){
//   	fill(bg_color2);
//   	rect( 0, -120 * scales, 50 * scales, 30 * scales);
//   }

//    if (eye_value == 2) {
//    	fill(fg_color2);
//     triangle(-21 * scales + (mouseX / 90), -120 * scales + (mouseY/90), -5 * scales+ (mouseX / 90), -115 * scales+ (mouseY/90), -6*scales+ (mouseX / 90), -129*scales+ (mouseY/90));
//   }

//   if (eye_value === 1) {
//     fill(fg_color2);
//     ellipse(-10 * scales + (mouseX / 90), -125 * scales + (mouseY/90), 20 * scales, 20 * scales);
//   }

//   if (eye_value == 3){
//   	fill(fg_color2);
//   	rect (-15 * scales + (mouseX / 90), -125 * scales + (mouseY/90), 20 * scales, 20 * scales);
//   }
//   pop();
// }

// function draw () {
//   noStroke();

//   var mode = faceSelector.value();

//   if (mode != 'all') {
//     if (mode == '1') {
//       background(bg_color1);
//     }
//     else if (mode == '2') {
//       background(bg_color2);
//     }
//     else if (mode == '3') {
//       background(bg_color3);
//     }
//   }

//   var s1 = slider1.value();
//   var s2 = slider2.value();
//   var s3 = slider3.value();
//   var s4 = slider4.value();


//   // use same size / y_pos for all faces
//   var face_w = canvasWidth / 4;
//   var face_h = face_w;
//   var face_y = height / 2;
//   var face_x = width / 2;

//   if (mode == '1' || mode == 'all') {
//     // draw 1st face
//     fill(bg_color1);
//     rect(0, 0, width/3, height);
//     var tilt_value = map(s1, 0, 100, -90, 90);
//     var mouth_value = map(s3, 0, 100, 0, 200);
//     var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
//     var randome = map(s4,0,100,0,15);
//     if (mode == 'all') {
//       face_x = width / 6;
//     }
//     drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value, randome);    
//   }

//   if (mode == '2' || mode == 'all') {
//     // draw 2nd face
//     fill(bg_color2);
//     rect(width/3, 0, 2*width/3, height);
//     var hair_value = map(s1, 0, 100, 2, 90);
//     var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
//     var eye_value = map(s2, 0, 100, -15, 15);
//     var different = map(s1, 0, 100, 0, 255);
//     var alpha = map (s4, 0, 100, 0, 500);
//     if (mode == 'all') {
//       face_x = 3 * width / 6;
//     }
//     drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value, different, alpha);
//   }

//   if (mode == '3' || mode == 'all') {
//     // draw 3nd face
//     fill(bg_color3);
//     rect(2*width/3, 0, width, height);
//     var width_value = map(s1, 0, 100, 0, 100);
//     var mouth_value = map(s3, 0, 100, 0, 200);
//     var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
//     var randome = map(s4,0,100,0,15);
//     if (mode == 'all') {
//       face_x = 5 * width / 6;
//     }
//     drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value, randome);
//   }
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

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face
  fill(bg_color1);

  tilt_value = focusedRandom(10, 50);
  eye_value = Math.floor(focusedRandom(1, 3));
  mouth_value = focusedRandom(30, 140);

  var shift = focusedRandom(0, 500, 2, 75);
  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      eye_value = getRandomEye();
      mouth_value = focusedRandom(1, 100, 1, 74);
      ezv = getRandomColor ();
      shift = (shift + 5) % 35;
      strakW = focusedRandom (1,1.5, 1, 32);
      width_value = getRandomWidth();
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

      // randome = int(random (0, 100));
      drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value, randome+shift, ezv, strakW, width_value);
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
