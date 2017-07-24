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

  smooth();
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
//fox colors
var bg_color1 = "#cceeff";
var eye_color = "#1a0000";
var headTop_color = "#ff471a";
var headQuad_color = "#cc2900";
var inEar_color = "#ff9980";
var faceTop_color = "#b32400";
var faceBot_color = "#e62e00";
var faceSide_color = "#ff471a";
var neck1_color = "#e60000";
var neck2_color = "#b30000";
var noseTop_color = "#b32400";


function drawFace1(x, y, size, ear_value, eye_value, nose_value, faceSide_value, nose_color, eye_color, outEar_color) {
  noStroke();
  //right face
  push();  
  translate(x, y);
  scale(size);
  
  //head-top
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300));

  //head-quad
  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75));

  //outside-ear
  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25 * ear_value, -35);

  //inside-ear
  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20 * ear_value, -25);

  //face-top
  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15);

  //face-bottom
  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30 * nose_value, 17, 15);

  //face-side
  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40 * faceSide_value, 18 * faceSide_value);

  //neck-top
  fill(neck1_color);
  triangle(17, 15, 40 * faceSide_value, 18 * faceSide_value, 19, 19);

  //neck-bottom
  fill(neck2_color);
  triangle(7, 30 * nose_value, 17, 15, 19, 19);

  //nose-top
  fill(noseTop_color);
  quad(0, 0, 0, 30 * nose_value, 7, 30 * nose_value, 7, sqrt(75)); 
  
  //nose
  fill(nose_color);
  triangle(0, 30 * nose_value, 0, 35 * nose_value, 7, 30 * nose_value); 

  //eye
  fill(eye_color);
  triangle(7, sqrt(75) * eye_value, 7, 12, 14, 5); 
  pop();


  //left face
  push();  
  translate(x, y);
  scale(-size, size);
  
  //head-top
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300));

  //head-quad
  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75));

  //outside-ear
  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25 * ear_value, -35);

  //inside-ear
  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20 * ear_value, -25);

  //face-top
  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15);

  //face-bottom
  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30 * nose_value, 17, 15);

  //face-side
  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40 * faceSide_value, 18 * faceSide_value);

  //neck-top
  fill(neck1_color);
  triangle(17, 15, 40 * faceSide_value, 18 * faceSide_value, 19, 19);

  //neck-bottom
  fill(neck2_color);
  triangle(7, 30 * nose_value, 17, 15, 19, 19);

  //nose-top
  fill(noseTop_color);
  quad(0, 0, 0, 30 * nose_value, 7, 30 * nose_value, 7, sqrt(75)); 
  
  //nose
  fill(nose_color);
  triangle(0, 30 * nose_value, 0, 35 * nose_value, 7, 30 * nose_value); 

  //eye
  fill(eye_color);
  triangle(7, sqrt(75) * eye_value, 7, 12, 14, 5); 
  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  var w = width / 5;
  var h = height / 3;

  for(var i=0; i<3; i++){
    for(var j=0; j<5; j++){
      var x = w/2 + w*j;
      var y = h/2 + h*i;
      var size = 2;
      var ear_value = focusedRandom(0.7, 1.5);
      var eye_value = focusedRandom(0.7, 2);
      var nose_value = focusedRandom(0.8, 1.1);
      var faceSide_value = focusedRandom(0.2, 1.2);
      var nose_color = [focusedRandom(10, 255), focusedRandom(10, 255), focusedRandom(10, 255)];
      var eye_color = [focusedRandom(10, 150), focusedRandom(10, 150), focusedRandom(10, 150)];
      drawFace1(x, y, size, ear_value, eye_value, nose_value, faceSide_value, nose_color, eye_color, nose_color);
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
