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
var bg_color = "#f8fff7";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#000000";
var face_1 = "#e82c0c";
var face_2 = "#ffe333";
var hair = "#32cbff"
var eyes = "#f8fff7"

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(0);
  fill(face_1);
  ellipse(0, 0, 300, 400);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  //ellipse(-50, -80, 50, 30);
  //ellipse( 50, -80, 50, 30);
  triangle(-140, -160, -0, -5, -160, 8);
  triangle(140, -160, 0, -5, 160, 8);
  line(0, -200, 0, 200);
  line(-10, -200, 10, 200);
  line(-20, -200, 20, 200);
  line(20, -200, -20, 200);
  line(10, -200, -10, 200);
  //triangle(30, 75, 58, 20, 86, 75);
  //quad(-110, -100, -40, -40, -150, 10, -100, -76);
  //quad(110, 100, 80, 40, 150, -10, 100, 76);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  //ellipse(-60, -80, 20, 20);
  //ellipse( 40, -80, 20, 20);
  //quad(-60, -80, 86, 20, 69, 63, 30, 76);

  // mouth-hole with background color
  //fill(bg_color);
  //ellipse( 0, 70, 150, 20);
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(0);
  fill(face_2);
  ellipse(0, 0, 300, 400);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  //ellipse(-50, -80, 50, 30);
  //ellipse( 50, -80, 50, 30);

  //hair
  fill(hair);
  rect(-180, -500, 350, 400, 100);

  // set fill back to foreground for eyeballs
  fill(eyes);
  ellipse(-50, -30, 110, 110);
  ellipse( 50, -30, 110, 110);
  line(-100, -90, -80, -76);
  line(-75, -90, -70, -82);
  line(-60, -95, -60, -85);

  line(100, -85, 80, -76);
  line(75, -90, 70, -82);
  line(60, -95, 60, -85);

  // mouth-hole with background color
  fill(bg_color);
  //ellipse( 0, 70, 150, 20);
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
