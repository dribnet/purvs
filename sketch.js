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
var bg_color = "#FFF7F6";
var fg_color1 = "#BDBEFF";
var fg_color2 = "#C5EEFF";
var stroke_color = "#2F2F40";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(fg_color1);
  ellipse(0, 0, 300, 325);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -40, 50, 30);
  ellipse( 50, -40, 50, 30);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-60, -40, 20, 20);
  ellipse( 40, -40, 20, 20);

  // mouth-hole with background color
  fill(bg_color);
  ellipse( 0, 70, 80, 35);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(30);
  fill(fg_color2);
  ellipse(0, 0, 300, 325);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -40, 50, 30);
  ellipse( 50, -40, 50, 30);

  // set fill back to foreground for eyeballs
  fill(fg_color2);
  ellipse(-60, -40, 20, 20);
  ellipse( 40, -40, 20, 20);

  // mouth-hole with background color
  fill(bg_color);
  ellipse( 0, 70, 150, 20);
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
