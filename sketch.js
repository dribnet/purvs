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
var bg_color = "#785e8a";
var fg_color1 = "#8cc240";
var fg_color2 = "#55bdd4";
var misc_color = "#4b2685";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  fill(fg_color1);
  ellipse(0, 0, 300, 300);

  // set fill to match background color
  fill("#fefeff");
  // draw eye
  ellipse(0, -20, 200, 200);

  // draw eyeball
  fill(misc_color);
  ellipse(0, -20, 40, 40);

  // draw horns
  fill(fg_color1);
  push();
  rotate(-50);
  triangle(0, -140, 20, -180, 40, -140);
  pop();
  push();
  scale(-1, 1);
  rotate(-50);
  triangle(0, -140, 20, -180, 40, -140);
  pop();
  pop();

  // move to position2
  push();
  translate(3*960/4, 500/2);

  // draw horns
  fill("#e5e5e6");
  push();
  rotate(-50);
  beginShape();
   vertex(0, -140);
   vertex(10, -190);
   vertex(40, -220);
   vertex(100, -210);
   vertex(55, -195);
   vertex(50, -180);
   vertex(55, -140);
  endShape(CLOSE);
  pop();
  push();
  scale(-1, 1);
  rotate(-50);
  beginShape();
   vertex(0, -140);
   vertex(10, -190);
   vertex(40, -220);
   vertex(100, -210);
   vertex(55, -195);
   vertex(50, -180);
   vertex(55, -140);
  endShape(CLOSE);
  pop();

  // draw face
  fill(fg_color2);
  ellipse(0, 0, 300, 350);

  // draw mouth
  fill("#e5e5e6");
  arc(0, 80, 150, 60, 180, 360);

  // draw teeth
  fill("#fefeff");
  push();
  beginShape();
   vertex(-70, 80);
   vertex(-65, 50);
   vertex(-45, 20);
   vertex(-50, 55);
   vertex(-45, 80);
  endShape(CLOSE);
  pop();
  push();
  scale(-1, 1);
  beginShape();
   vertex(-70, 80);
   vertex(-65, 50);
   vertex(-45, 20);
   vertex(-50, 55);
   vertex(-45, 80);
  endShape(CLOSE);
  pop();
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
