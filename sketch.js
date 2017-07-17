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
var bg_color = "#c6bdab";
var fg_color1 = "#5b412a";
var fg_color2 = "#FFE158";
var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(255,245,243);
  ellipse (-60,-100, 50, 150);
  ellipse (68,-100, 50, 150);
  ellipse(0, 0, 200, 200);


  // set fill to match background color
  fill(bg_color);
  // draw two eyes


  // set fill back to foreground for eyeballs
  fill(0);
  ellipse(-60, 30, 10, 10);
  ellipse( 60, 30, 10, 10);

  // mouth-hole with background color
  fill(0);
  rectMode (CENTER);
  rotate (80);
  noStroke ()
  rect (65,5, 2, 20, 50);
  rotate (30);
  rect (59,-29, 2, 20, 50);

  pop();

  // Hello Kitty
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  fill(255,251,244);
  rectMode (CENTER);
  rotate (25);
  rect (-80,-50, 100, 100, 7);
  rotate(-50);
  rect (80,-50, 100, 100, 7);
  rotate (25);
  ellipse(0, -25, 250, 200);

  // set fill to match background color

  // set fill back to foreground for eyeballs
  fill(0);
  ellipse(-60, -50, 20, 25);
  ellipse( 40, -50, 20, 25);

  // mouth-hole with background color
  fill(fg_color2);
  ellipse( -15, -20, 30, 20);

  //Bow Tie
  fill (150,0,0);
  triangle (55,-110, 30, -150, 20, -90);
  triangle (55,-110, 100, -120, 80, -70);
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
