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
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var fg_color3 = "#FFE839";
var fg_color4 = "#8EEDE2";
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
  fill(fg_color3);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, 300, 400);


  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);


  // set fill back to foreground for eyeballs
  fill("#000000");
  ellipse(-50, -80, 20, 20);
  ellipse( 50, -80, 20, 20);

  // mouth-hole with background color
  fill(bg_color);
  rotate(180);
  arc(0, 0, 100, 100, 180, HALF_PI);
  pop();



  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(-30);
  fill(fg_color4);
  noStroke()
  ellipse(0, 0, 300, 400);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);

  // set fill back to foreground for eyeballs
  fill("#000000");
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

  // mouth-hole with background color
  fill(bg_color);
  ellipse(0, 70, 50, 50);
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
