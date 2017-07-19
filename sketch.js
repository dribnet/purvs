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
var nose_col = "#EDD835";
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
  rect(0, 0, 275, 300);


  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 70, 70);
  ellipse( 50, -80, 70, 70);


  // set fill back to foreground for eyeballs
  fill(fg_color4);
  ellipse(-50, -80, 30, 30);
  ellipse( 50, -80, 30, 30);

  fill("#000000");
  ellipse(-50, -80, 20, 20);
  ellipse( 50, -80, 20, 20);

  //teeth
  noStroke();
  fill("#ffffff");
  rect(20, 60, 30, 30)
  rect(-20, 60, 30, 30)

  //mouth
  rotate(180);
  fill(fg_color3);
  stroke("#000000");
  arc(0, 0, 200, 100, 180, HALF_PI);

  //cheeks
  noStroke();
  fill("#EB99ED");
  ellipse(-100, 0, 30, 30);
  ellipse(100, 0, 30, 30);
    
  //nose
  noFill();
  stroke("#000000");
  rotate(90);
  arc(30, 0, 25, 125, 180, HALF_PI);

  //spots
  noStroke();
  fill(nose_col);
  ellipse(0, 30, 10, 10);
  ellipse(-140, 100, 10, 10);
  ellipse(-110, -100, 10, 10);
  ellipse(-100, -30, 10, 10);
  ellipse(100, 10, 10, 10);
  ellipse(100, 120, 10, 10);
  ellipse(-110, 30, 15, 15);
  ellipse(110, -120, 15, 15);
  ellipse(140, 100, 10, 10);
  ellipse(-70, -50, 20, 20);
  ellipse(-90, 110, 20, 20);
  ellipse(-10, -10, 20, 20);
  ellipse(130, -90, 30, 30);
  ellipse(-130, -70, 30, 30);
  pop();







  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  fill(fg_color4);
  noStroke()
  ellipse(0, -100, 300, 150);
  rectMode(CENTER);
  rect(0, 0, 100, 60);
  ellipse(0, 50, 200, 75);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-30, -80, 50, 70);
  ellipse( 30, -80, 50, 70);

  fill("#000000");
  rect(0, -115, 120, 5);

  // set fill back to foreground for eyeballs
  fill("#000000");
  ellipse(-30, -70, 20, 20);
  ellipse( 30, -70, 20, 20);

  //nose
  push();
  noFill();
  stroke("#000000");
  rotate(180);
  arc(0, 50, 30, 125, 180, HALF_PI);
  pop();

  // mouth-hole with background color
  noFill();
  stroke("#000000");
  arc(0, 60, 110, 50, 180, HALF_PI);
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
