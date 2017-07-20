var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  smooth(200);
  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#d2e1fe";
var fg_color1 = "#071b26";
var fg_color2 = "#50667d";
var stroke_color = "#000000";
var eye_color = "#ffffff";
var mouth_color = "#b23a43";
var fur_color = "#8a6f37"

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
  ellipse(0, 400, 400, 500);
  fill(fur_color);
  ellipse(0, 400, 350, 500);
  fill(eye_color)
  ellipse(0, 400, 300, 500);
  fill(fg_color1);
  ellipse(0, 0, 500, 400);


  // set fill to match background color
  fill(eye_color);
  // draw two eyes
  ellipse(-100, -40, 80, 80);
  ellipse( 100, -40, 80, 80);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-100, -40, 30, 30);
  ellipse( 100, -40, 30, 30);

  // mouth-hole with background color
  fill(mouth_color);
  ellipse( 0, 70, 200, 80);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  fill(fg_color2);
  ellipse(0, 300, 300, 300);
  rotate(-30);
  ellipse(0, 0, 300, 350);


  // set fill to match background color
  fill(eye_color);
  // draw two eyes
  ellipse(-90, 0, 50, 50);
  ellipse( 90, 0, 50, 50);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-85, 10, 20, 20);
  ellipse( 85, 10, 20, 20);

  // nose
  fill(fg_color1);
  ellipse( 0, 20, 30, 30);

  // mouth-hole with background color
  fill(fg_color1);
  //ellipse( 0, 100, 150, 80);
  curve(-80, 60, 0, 100, 85, 80, 35, 115, -30, 115, -80, 60)

  smooth(200);
  beginShape();
 	smooth(200);
	vertex(-80, 60);
	vertex(0, 100);
	vertex(85, 80);
	vertex(35, 115);
	vertex(-30, 105);
	noSmooth();
  endShape(CLOSE);
  noSmooth();
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
