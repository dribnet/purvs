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
var fg_color1 = "#fef46e";
var fg_color2 = "#fef46e";
var stroke_color = "#000000";

var eye_color = "#43c6f2";
var pupil_color = "#000000";

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

  ellipse(0, 0, 300, 300);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 80, 80);
  ellipse( 50, -80, 80, 80);

  // set fill back to foreground for eyeballs
  fill(eye_color);
  ellipse(-50, -80, 30, 30);
  ellipse( 50, -80, 30, 30);

// set fill back to foreground for pupils
  fill(pupil_color);
  ellipse(-50, -80, 15, 15);
  ellipse( 50, -80, 15, 15);

// nose with skin color
  fill(fg_color1);
  ellipse(0, -30, 45, 45);

  // mouth-hole with background color
  fill(fg_color1);
  translate(-105, -100);
  curve(150,-200, 200,100,0,100,50,-200);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(30);
  fill(fg_color2);
  ellipse(0, 0, 300, 400);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);

  // set fill back to foreground for eyeballs
  fill(fg_color2);
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

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
