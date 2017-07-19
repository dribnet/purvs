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
var bg_color = "#ffffff";
var fg_color1 = "#fee300";
var fg_color2 = "#eee4d9";
var stroke_color = "#000000";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)
  noStroke();

  // move to position1, draw rectangles for head and top and bottom bits
  push();
  translate(960/4, 500/2);
  fill("#f0d700");
  rect(-70, -150, 140, 50);
  rect(-70, 100, 140, 50);
  fill(fg_color1);
  rect(-280/2, -225/2, 280, 225, 70);

  // set fill to black color
  fill("#000000");
  // draw two eyes
  ellipse(-50, -10, 30, 30);
  ellipse( 50, -10, 30, 30);

  // draw arc for mouth
  fill(fg_color1);
  stroke(stroke_color);
  strokeWeight(7);
  rotate(90);
  arc(5, 0, 80, 80, -50, 50);
  pop();



  // move to position2, rotate, draw "head" ellipse
  push();
  scale(0.75);
  translate(3.8*960/4, 370);
  stroke(stroke_color);
  strokeWeight(2);

  //hair
  fill("#c7f1ff");
  beginShape();
  vertex(-70, 150);
  vertex(-120, 160);
  vertex(-110, 120);
  vertex(-180, 110);
  vertex(-150, 60);
  vertex(-230, 30);
  vertex(-150, -20);
  vertex(-240, -70);
  vertex(-160, -100);
  vertex(-230, -230);
  vertex(-100, -180);
  vertex(-100, -340);
  vertex(0, -220)
  vertex(100, -340);
  vertex(100, -180);
  vertex(230, -230);
  vertex(160, -100);
  vertex(240, -70);
  vertex(150, -20);
  vertex(230, 30);
  vertex(150, 60);
  vertex(180, 110);
  vertex(110, 120);
  vertex(120, 160);
  vertex(70, 150);
  endShape();

  //ears
  fill(fg_color2);
  ellipse(-120, 45, 50, 50);
  ellipse(120, 45, 50, 50);


  //face
  rect(-225/2, -375/2, 225, 375, 300);


  // set fill to match background color
  fill(bg_color);

  // draw two eyes
  ellipse(-50, -40, 80, 80);
  ellipse( 50, -40, 80, 80);

  // set fill back to foreground for eyeballs
  fill("#000000");
  ellipse(-60, -45, 10, 10);
  ellipse( 60, -40, 10, 10);

  //monobrow
  fill("#c7f1ff");
  rect(-90, -110, 175, 20, 20);

  //face details

  //nose
  noFill();
  curve(15, -400, -12, -5, 12, -5, -15, -400);

  //mouth
  curve(-50, 150, -60, 100, 60, 100, 50, 150);

  //mouth lines - rotating and translating a curve for it because it's easier
  push();
  translate(-65, 102);
  rotate(75);
  curve(10, -100, -14, 0, 14, 0, -10, -100);
  pop();

  push();
  translate(65, 102);
  rotate(360-75);
  curve(10, -100, -14, 0, 14, 0, -10, -100);
  pop();

  //eyebags
  push();
  translate(-60, 10);
  rotate(10);
  curve(-40, -90, -30, 0, 30, 0, 40, -90);
  pop();
  push();
  translate(60, 10);
  rotate(-10);
  curve(-40, -90, -30, 0, 30, 0, 40, -90);
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
