var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
}

// global variables for colors
var bg_color = "#FFFFFF";
var fg_color1 = "#FFE271";
var fg_jeans = "#3C5A7F";
var fg_color2 = "#000000";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2 + 30);
  fill(fg_color1);
  ellipse(0, -100, 250, 150);
  fill(fg_jeans);
  ellipse(0, 140, 250, 150);
  rect(0,20,250,250);
  fill(fg_color1);
  rect(0,-30,250,150);

  rotate(-25);
  rect(-140, -50, 60, 15);
  fill(0);
  ellipse(-170, -50, 30, 30);

  fill(fg_color1);
  rotate(50);
  rect(140, -50, 60, 15);
  fill(0);
  ellipse(170, -50, 30, 30);
  rotate(-25);
  
  // draw eye
  fill(0);
  rect(0, -80, 250, 30);
  fill("#BDBDBD");
  ellipse(0, -80, 100, 100);
  fill("#919191");
  ellipse(0, -80, 90, 90);
  fill(255);
  arc(0, -80, 80, 80, 0, 180);

  fill(0);
  ellipse(20, -80, 30, 30);
  fill("#7D4A1B");
  ellipse(20, -80, 25, 25);
  fill(0);
  ellipse(20, -80, 15, 15);
  fill(255);
  ellipse(30, -80, 5, 5);

  fill(fg_color1);
  arc(0, -80, 80, 80, 180, 0);

  // mouth-hole with background color
  fill(0);
  ellipse( 0, 10, 80, 40);
  fill(fg_color1);
  ellipse( -10, 3, 90, 40);

  //pocket
  noFill();
  stroke(0);
  rect(0,100,100,40);
  fill(fg_jeans);
  arc(0, 120, 100, 80, 0, 180);
  noStroke();

  
  // hair
  fill(0);

  rotate(-30);
  rect( 0, -190, 3, 30);
  for(var i = 0; i < 3; i++){
     rotate(4);
     rect( 0, -190, 3, 30);
  }
  
  rotate(48);
  rect( 0, -190, 3, 30);
  for(var i = 0; i < 3; i++){
     rotate(-4);
     rect( 0, -190, 3, 30);
  }
  
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();

  translate(3*960/4, 500/2);
  
  fill(fg_color1);
  ellipse(0, -100, 200, 150);
  fill(fg_jeans);
  ellipse(0, 160, 200, 150);
  rect(0,110,200,100);
  fill(fg_color1);
  rect(0,0,200,170);

  rotate(-25);
  rect(-100, -50, 60, 15);
  fill(0);
  ellipse(-130, -50, 30, 30);

  fill(fg_color1);
  rotate(50);
  rect(100, -50, 60, 15);
  fill(0);
  ellipse(130, -50, 30, 30);
  rotate(-25);
  
  // draw eye
  fill(0);
  rect(0, -80, 200, 20);

  fill("#BDBDBD");
  ellipse(-40, -80, 80, 80);
  fill("#919191");
  ellipse(-40, -80, 70, 70);
  fill(255);
  arc(-40, -80, 60, 60, 0, 180);

  fill(0);
  ellipse(-40, -80, 30, 30);
  fill("#7D4A1B");
  ellipse(-40, -80, 25, 25);
  fill(0);
  ellipse(-40, -80, 15, 15);
  fill(255);
  ellipse(-50, -80, 5, 5);

  fill(fg_color1);
  arc(-40, -80, 60, 60, 180, 0);

  fill("#BDBDBD");
  ellipse(40, -80, 80, 80);
  fill("#919191");
  ellipse(40, -80, 70, 70);
  fill(255);
  arc(40, -80, 60, 60, 0, 180);

  fill(0);
  ellipse(40, -80, 30, 30);
  fill("#7D4A1B");
  ellipse(40, -80, 25, 25);
  fill(0);
  ellipse(40, -80, 15, 15);
  fill(255);
  ellipse(30, -80, 5, 5);

  fill(fg_color1);
  arc(40, -80, 60, 60, 180, 0);

  // mouth-hole with background color
  fill(0);
  ellipse( 0, 20, 80, 40);
  fill(fg_color1);
  ellipse( 0, 23, 80, 40);

  //pocket
  noFill();
  stroke(0);
  rect(0,130,100,40);
  fill(fg_jeans);
  arc(0, 150, 100, 80, 0, 180);
  noStroke();

  // hair
  fill(0);

  rotate(-5);
  rect( 0, -190, 3, 30);
  for(var i = 0; i < 5; i++){
     rotate(2);
     rect( 0, -190, 3, 30);
  }
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
