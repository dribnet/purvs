<<<<<<< HEAD
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
var fg_color1 = "#57B555";
var fg_color2 = "#56B0B8";
var stroke_color = "#c78a5b";
var pupils = "#000000";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  noStroke();

  // Mike
  push();
  translate(960/4, 500/2);
  rotate(0);
  // Head
  fill(fg_color1);
  ellipse(0, 0, 300, 300);

  // Mouth 
  fill(bg_color);
  ellipse(0, 55, 200, 75);
  // Cover for mouth ellipse
  fill(fg_color1);
  ellipse(0, 40, 200, 50);
 
  fill(bg_color);
  ellipse(0, -40, 160, 160);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(0, -40, 120, 120);

  //pupils
  fill("#000000");
  ellipse(0, -40, 60, 60);

  // Horns light color
  fill("#AEB8AC");
  triangle(-120,-90,-85,-123,-150,-150);
  triangle(120,-90,85,-123,150,-150);
  //Horn dark color
  fill("#727871");
  triangle(-142,-135,-115,-135,-150,-150);
  triangle(135,-120,115,-135,150,-150);
  pop();

  ////////////

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(0);
  fill(fg_color2);
  rect(-150, -200, 300, 400, 120, 120, 80, 80 );
  ellipse(0, -25, 325, 360);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 60, 60);
  ellipse( 50, -80, 60, 60);

  fill(fg_color2);
  ellipse(-60, -80, 30, 30);
  ellipse( 40, -80, 30, 30);
  // set fill back to foreground for eyeballs
  fill(pupils);
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

  fill("#387378")
  ellipse( 0, -10, 100, 50);
  ellipse( 0, 0, 50, 50);
  // Horns light color
  fill("#AEB8AC");  
  push();
  rotate(45);
  rect(-250, -50, 75, 50 );
  rect(-50, -250, 50, 75 );
  pop();
  triangle(-177,-176,-120,-250,-125,-190);
  triangle(177,-176,120,-250,125,-190);
  push();
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
=======
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
var fg_color1 = "#57B555";
var fg_color2 = "#3EC8E8";
var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(0);
  fill(fg_color1);
  ellipse(0, 0, 300, 300);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(0, -40, 160, 160);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(0, -40, 120, 120);
  fill("#000000");

  ellipse(0, -40, 60, 60);

  // mouth-hole with background color
  fill(bg_color);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(0);
  fill(fg_color2);
  rect(-150, -200, 300, 400);

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
>>>>>>> 4108b40044f2a72c983420a00593f5037a9bc67d
