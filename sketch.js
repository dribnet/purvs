var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);

  smooth();
}

// global variables for colors
var bg_color = "#00bfff";

//fox colors
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

//bird colors
var head_color = "#ffff1a";
var mouth_color = "#000000";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  noStroke();

  //fox face
  push();
  translate(canvasWidth/4, canvasHeight/2);
  scale(4);
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
  translate(canvasWidth/4, canvasHeight/2);
  scale(-4, 4);
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

  //bird face
  push();
  translate(canvasWidth/1.4, canvasHeight/2);
  rotate(5);  
  scale(3.5);
  
  //head
  push();
  fill(head_color);
  stroke(head_color);
  strokeWeight(0.2);
  triangle(40, 20, -40, 20, 0, -25);
  fill("#ffffff");
  triangle(40, 20, -40, 20, 0, 30);
  pop();

  //mouth
  fill(mouth_color);
  triangle(-10, 27, 10, 27, 0, 13);

  //hair
  fill(0, 0, 0, 190);
  triangle(0, -15, -2, -33, 2, -33);
  triangle(0, -15, 10, -26, 12, -23);
  triangle(0, -15, -10, -26, -12, -23);

  //eyebrow
  fill(0, 0, 0, 200);
  quad(6, -10, 5, -6, 18, -13, 15, -15);
  quad(-6, -10, -5, -6, -18, -13, -15, -15);

  //eyes
  fill("#ffffff");
  stroke(mouth_color);
  strokeWeight(0.6);
  push();
  rotate(-20);
  ellipse(15, 3, 15, 10);
  rotate(40);
  ellipse(-15, 3, 15, 10);
  pop();

  push();
  rotate(-5);
  fill(mouth_color);
  ellipse(11, 0, 3);
  rotate(10);
  ellipse(-11, 0, 3);
  pop();

  //circle
  noStroke();
  fill(255, 71, 26, 220);
  ellipse(37, 18, 15);
  ellipse(-37, 18, 15);

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
