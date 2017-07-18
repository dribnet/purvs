var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#00bfff";

var eye_color = "#1a0000";
var headTop_color = "#ff471a";
var headQuad_color = "#cc2900";
var outEar_color = "#b30000";
var inEar_color = "#ff9980";
var faceTop_color = "#b32400";
var faceBot_color = "#e62e00";
var faceSide_color = "#ff471a";
var neck1_color = "#e60000";
var neck2_color = "#b30000";
var noseTop_color = "#b32400";
var nose_color = "#1a0500";

var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  noStroke();

  push();
  translate(canvasWidth/2, canvasHeight/2);
  scale(5);
  //construct right face
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300)); //head-top

  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75)); //head-quad

  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25, -35); //outside-ear

  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20, -25); //inside-ear

  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15); //face-top

  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30, 17, 15); //face-bottom

  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40, 18); //face-side

  fill(neck1_color);
  triangle(17, 15, 40, 18, 19, 19); //neck

  fill(neck2_color);
  triangle(7, 30, 17, 15, 19, 19); //neck

  fill(noseTop_color);
  quad(0, 0, 0, 30, 7, 30, 7, sqrt(75)); //nose-top
  
  fill(nose_color);
  triangle(0, 30, 0, 35, 7, 30); //nose

  fill(eye_color);
  triangle(7, sqrt(75), 7, 12, 14, 5); //eye
  pop();

  push();
  translate(canvasWidth/2, canvasHeight/2);
  scale(-5, 5);
  //construct left face
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300)); //head-top

  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75)); //head-quad

  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25, -35); //outside-ear

  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20, -25); //inside-ear

  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15); //face-top

  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30, 17, 15); //face-bottom

  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40, 18); //face-side

  fill(neck1_color);
  triangle(17, 15, 40, 18, 19, 19); //neck

  fill(neck2_color);
  triangle(7, 30, 17, 15, 19, 19); //neck

  fill(noseTop_color);
  quad(0, 0, 0, 30, 7, 30, 7, sqrt(75)); //nose-top
  
  fill(nose_color);
  triangle(0, 30, 0, 35, 7, 30); //nose

  fill(eye_color);
  triangle(7, sqrt(75), 7, 12, 14, 5); //eye
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
