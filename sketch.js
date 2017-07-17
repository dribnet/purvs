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
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  
  drawDoraemon();

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

function drawDoraemon(){
  // stroke color
  stroke(0);
  strokeWeight(2);

  push();
  translate(960/4, 500/2);
  //head
  fill(3, 166, 215);
  ellipse(0,0, 300, 255);
  //mouth
  fill(255, 255, 255);
  ellipse(0,25, 260, 205);
  line(0,20, 0, -40);
  fill(209, 4, 41);
  arc(0, 20, 220, 180, 360, 180, OPEN);
  fill(244, 83, 2);
  arc(0, 90, 94, 50, 360, 180, OPEN);
  fill(255);
  bezier(0, 20, -20, 60, -190, 40, -115, -2);
  bezier(0, 20, 20, 60, 190, 40, 115, -2);
  fill(244, 83, 2);
  bezier(-40, 104, -65, 80, -10, 70, 0, 90);
  bezier(40, 104, 65, 80, 10, 70, 0, 90);
  //left eye
  fill(255, 255, 255);
  ellipse(-25 ,-90, 50, 70);
  fill(0, 0, 0);
  ellipse(-18 ,-85, 15, 21);
  fill(255, 255, 255);
  ellipse(-15 ,-84, 7, 11);
  //right eye
  fill(255, 255, 255);
  ellipse(25,-90, 50, 70);
  fill(0, 0, 0);
  ellipse(18 ,-85, 15, 21);
  fill(255, 255, 255);
  ellipse(15 ,-84, 7, 11);
  //left whiskers
  line(-20,-25, -80, -30);
  line(-20,-15, -80, -15);
  line(-20,-5, -80, -0);
  //right whiskers
  line(20,-25, 80, -30);
  line(20,-15, 80, -15);
  line(20,-5, 80, -0);
  //nose
  fill(209, 4, 41);
  ellipse(0,-50, 40, 40);
  fill(255, 255, 255);
  strokeWeight(0);
  ellipse(-4,-54, 15, 15);

  pop();
}