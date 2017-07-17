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
var bg_color = "#3C428F";
var fg_color1 = "#000000";
var fg_color2 = "#FFFFFF";
var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)
  noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(fg_color1);
  ellipse(0, 0, 300, 350);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 60, 20);
  ellipse( 50, -80, 60, 20);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

  // mouth-hole with background color
  fill(bg_color);
  ellipse( 0, 70, 150, 100);
  fill(fg_color1);
  ellipse( 0, 90, 150, 80);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(30);
  fill(fg_color2);
  ellipse(0, 0, 300, 350);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 60, 30);
  ellipse( 50, -80, 60, 30);

  fill(fg_color2);
  ellipse(-50, -65, 60, 30);
  ellipse( 50, -65, 60, 30);

  // set fill back to foreground for eyeballs
  fill(fg_color2);
  ellipse(-70, -85, 15, 15);
  ellipse( 30, -85, 15, 15);

  // mouth-hole with background color
  fill(bg_color);
  ellipse( 0, 70, 150, 100);
  fill(fg_color2);
  ellipse( 5, 55, 150, 90);
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
