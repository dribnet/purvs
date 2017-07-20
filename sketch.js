var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);

  // rectangle drawing mode uses centre
  rectMode(CENTER);
}

// global variables for colors
var bg_primary = "#785e8a";
var bg_secondary = "#5f4b6d";

var ch1_bodyPrimary = "#8cc240";
var ch1_bodySecondary = "#73a034";
var ch1_eyePrimary = "#fefeff";
var ch1_eyeSecondary = "#e5e5e6";
var ch1_pupilPrimary = "#4b2685";
var ch1_pupilSecondary = "#5b3990";

var ch2_bodyPrimary = "#55bdd4";
var ch2_bodySecondary = "#49a3b7";
var ch2_mouth = "#cccccb";
var ch2_featurePrimary = "#fefeff";
var ch2_featureSecondary = "#e5e5e6";
var ch2_detail = "#4b2685";

function draw () {
  // background color
  background(bg_primary);

  // stroke
  noStroke();    
    
  // move to position1
  push();
  translate(960/4 + 70, 500/2 + 40);

  // draw shadow
  fill(bg_secondary);
  ellipse(0, 150, 300, 60);
    
  // draw horns
  push();
  rotate(-45);
  fill(ch1_bodyPrimary);
  triangle(-25, -143, 5, -198, 40, -143);
  fill(ch1_bodySecondary);
  triangle(30, -143, 5, -198, 40, -143);
  pop();
  push();
  scale(-1, 1);
  rotate(-45);
  fill(ch1_bodyPrimary);
  triangle(-25, -143, 5, -198, 40, -143);
  fill(ch1_bodySecondary);
  triangle(-25, -143, 5, -198, -15, -143);
  pop();
    
  // draw head    
  fill(ch1_bodyPrimary);
  ellipse(0, 0, 300, 300);
  push();
  rotate(35);
  fill(ch1_bodySecondary);
  arc(0, 0, 300, 300, 270, 450);    
  fill(ch1_bodyPrimary);
  ellipse(0, 0, 260, 300);
  pop();

  // draw eye
  fill(ch1_eyeSecondary);
  ellipse(0, -10, 220, 220);
  fill(ch1_eyePrimary);
  ellipse(0, -20, 220, 220);

  // draw pupil
  fill(ch1_pupilPrimary);
  ellipse(0, -20, 50, 50);
  fill(ch1_pupilSecondary);
  arc(0, -20, 50, 50, 90, 270);
  fill(ch1_pupilPrimary);
  ellipse(0, -20, 30, 50);
  fill(ch1_eyePrimary);
  ellipse(-20, -35, 20, 20);
  ellipse(-10, -20, 10, 10);
  pop();

  // move to position2
  push();
  translate(3*960/4 - 70, 500/2 + 10);

  // draw shadow
  fill(bg_secondary);
  ellipse(0, 180, 260, 60);

  // draw horns
  push();
  rotate(-50);
  fill(ch2_featurePrimary);
  beginShape();
   vertex(0, -140);
   vertex(10, -190);
   vertex(40, -220);
   vertex(120, -210);
   vertex(55, -195);
   vertex(50, -180);
   vertex(55, -140);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(30, -140);
   vertex(30, -170);
   vertex(45, -205);
   vertex(120, -210);
   vertex(55, -195);
   vertex(50, -180);
   vertex(55, -140);
  endShape(CLOSE);
  pop();
  push();
  scale(-1, 1);
  rotate(-50);
  fill(ch2_featurePrimary);
  beginShape();
   vertex(0, -140);
   vertex(10, -190);
   vertex(40, -220);
   vertex(120, -210);
   vertex(55, -195);
   vertex(50, -180);
   vertex(55, -140);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(0, -140);
   vertex(10, -190);
   vertex(40, -220);
   vertex(120, -210);
   vertex(50, -210);
   vertex(30, -180);
   vertex(25, -140);
  endShape(CLOSE);
  pop();

  // draw face
  fill(ch2_bodyPrimary);
  ellipse(0, -90, 220, 150);
  ellipse(0, 30, 260, 300);
  fill(ch2_bodySecondary);
  arc(0, -90, 220, 150, 270, 450);
  arc(0, 30, 260, 300, 270, 450);
  fill(ch2_bodyPrimary);
  ellipse(0, -90, 180, 150);
  ellipse(0, 40, 220, 280);

  // draw mouth
  fill(ch2_mouth);
  stroke(ch2_bodySecondary);
  strokeCap(ROUND);
  strokeWeight(6);
  arc(0, 80, 150, 60, 180, 360, CHORD);
  noStroke();

  // draw teeth
  fill(ch2_featurePrimary);
  beginShape();
   vertex(-70, 77);
   vertex(-65, 50);
   vertex(-45, 20);
   vertex(-50, 55);
   vertex(-45, 77);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(-58, 77);
   vertex(-57, 55);
   vertex(-45, 20);
   vertex(-50, 55);
   vertex(-45, 77);
  endShape(CLOSE);
  fill(ch2_featurePrimary);
  beginShape();
   vertex(-40, 77);
   vertex(-37, 62);
   vertex(-27, 45);
   vertex(-30, 65);
   vertex(-27, 77);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(-34, 77);
   vertex(-33, 64);
   vertex(-27, 45);
   vertex(-30, 65);
   vertex(-27, 77);
  endShape(CLOSE);
  push();
  scale(-1, 1);
  fill(ch2_featurePrimary);
  beginShape();
   vertex(-70, 77);
   vertex(-65, 50);
   vertex(-45, 20);
   vertex(-50, 55);
   vertex(-45, 77);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(-70, 77);
   vertex(-65, 50);
   vertex(-45, 20);
   vertex(-58, 53);
   vertex(-58, 77);
  endShape(CLOSE);
  fill(ch2_featurePrimary);
  beginShape();
   vertex(-40, 77);
   vertex(-37, 62);
   vertex(-27, 45);
   vertex(-30, 65);
   vertex(-27, 77);
  endShape(CLOSE);
  fill(ch2_featureSecondary);
  beginShape();
   vertex(-40, 77);
   vertex(-37, 62);
   vertex(-27, 45);
   vertex(-34, 65);
   vertex(-35, 77);
  endShape(CLOSE);
  pop();
    
  // draw spots
  fill(ch2_detail); 
  arc(0, 30, 260, 300, 115, 140, CHORD); 
  arc(-80, 140, 60, 60, 219, 50, CHORD); 
  arc(0, 30, 260, 300, 99, 112, CHORD); 
  arc(-40, 175, 35, 35, 210, 370, CHORD);
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