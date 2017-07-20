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
//fox colors
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

//mask colors
var bg2_color = "#f2e6d9";
var skin_color = "#001a33";
var forehead_color = "#ffcc00";
var eyeBall_color = "#000000";
var mouth_color = "#990000";
var sun_color = "#e60000";

//another colors
var bg3_color = "#008060";

function draw () {

  noStroke();
  
  // background color
  fill(bg_color);
  rect(0, 0, canvasWidth/3, canvasHeight);

  push();
  translate(canvasWidth/6, canvasHeight/2);
  scale(3);
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
  translate(canvasWidth/6, canvasHeight/2);
  scale(-3, 3);
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

  //draw mask
  // background color
  fill(bg2_color);
  rect(canvasWidth/3, 0, canvasWidth/3, canvasHeight);
  
  //right face
  push();
  translate(canvasWidth/2, canvasHeight/2);
  scale(3);
  
  //whole skin
  fill(skin_color);
  beginShape();
  vertex(0, -40);
  bezierVertex(20, -40, 25, -20, 20, 0);
  vertex(20, 0);
  bezierVertex(20, 15, 20, 32, 0, 30);
  endShape();

  //forehead
  fill(forehead_color);
  strokeWeight(0.5);
  stroke("#ffffff");
  beginShape();
  vertex(15, -34);
  bezierVertex(15, -25, 9, -12, 6, -7);
  vertex(6, -7);
  bezierVertex(10, -10, 15, -10, 20, -20);
  vertex(20, -20);
  bezierVertex(18, -20, 15, -20, 15, -34);
  endShape();

  //eye rim
  fill("#000000");
  beginShape();
  vertex(6, -7);
  bezierVertex(1, -5, 2, -4, 1, 1);
  vertex(1, 1);
  bezierVertex(4, -5, 10, 10, 20, 0);
  vertex(20, 0);
  bezierVertex(15, -5, 18, -8, 22, -12);
  endShape();
  //eye hole
  fill(bg2_color);
  noStroke();  
  ellipse(9, -5, 8, 4);
  //eye ball
  fill(eyeBall_color);
  ellipse(8.5, -5, 4.5);

  //nose
  push();
  fill("#000000");
  rotate(-25);
  ellipse(0, 10, 5, 2);
  pop();

  //jaw
  fill("#000000");
  beginShape();
  vertex(0, 15)
  bezierVertex(20, 5, 16, 20, 14, 27)
  endShape();

  fill(bg2_color);
  beginShape();
  vertex(0, 15);
  bezierVertex(13, 16, 13, 20, 14, 27);
  vertex(14, 27);
  bezierVertex(12, 30, 10, 35, 0, 30);
  endShape();

  //mouth
  fill(mouth_color);
  quad(0, 17, 5, 17, 2, 20, 0, 20);
  pop();
  
  //left face
  push();
  translate(canvasWidth/2, canvasHeight/2);
  scale(-3, 3);

  //whole skin
  fill(skin_color);
  beginShape();
  vertex(0, -40);
  bezierVertex(20, -40, 25, -20, 20, 0);
  vertex(20, 0);
  bezierVertex(20, 15, 20, 32, 0, 30);
  endShape();

  //forehead
  fill(forehead_color);
  strokeWeight(0.5);
  stroke("#ffffff");
  beginShape();
  vertex(15, -34);
  bezierVertex(15, -25, 9, -12, 6, -7);
  vertex(6, -7);
  bezierVertex(10, -10, 15, -10, 20, -20);
  vertex(20, -20);
  bezierVertex(18, -20, 15, -20, 15, -34);
  endShape();

  //eye rim
  fill("#000000");
  beginShape();
  vertex(6, -7);
  bezierVertex(1, -5, 2, -4, 1, 1);
  vertex(1, 1);
  bezierVertex(4, -5, 10, 10, 20, 0);
  vertex(20, 0);
  bezierVertex(15, -5, 18, -8, 22, -12);
  endShape();
  //eye hole
  fill(bg2_color);
  noStroke();  
  ellipse(9, -5, 8, 4);
  //eye ball
  fill(eyeBall_color);
  ellipse(8.5, -5, 4.5);

  //nose
  push();
  fill("#000000");
  rotate(-25);
  ellipse(0, 10, 5, 2);
  pop();

  //jaw
  fill("#000000");
  beginShape();
  vertex(0, 15)
  bezierVertex(20, 5, 16, 20, 14, 27)
  endShape();

  fill(bg2_color);
  beginShape();
  vertex(0, 15);
  bezierVertex(13, 16, 13, 20, 14, 27);
  vertex(14, 27);
  bezierVertex(12, 30, 10, 35, 0, 30);
  endShape();

  //mouth
  fill(mouth_color);
  quad(0, 17, 5, 17, 2, 20, 0, 20);

  //middle sun
  fill(sun_color);
  stroke("#ffffff");
  strokeWeight(1);
  ellipse(0, -25, 10);
  pop();
  

  //another face
  // background color
  fill(bg3_color);
  rect(2*canvasWidth/3, 0, canvasWidth/3, canvasHeight);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
