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
var bg_color = "#E02B3B";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";
var squid_ward ="#95CDB8";
var squid_eyes ="#FFF3C2";
var gollum_skin ="#CAB4A7";
var gollum_eyeskin ="#96897F";
var gollum_eyes = "#54C2FF";
var gollum_tooth ="#FFF3C2";
function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  noStroke();
  translate(960/4, 500/2);
  // rotate(4);
  fill(squid_ward);
  ellipse(0, -75, 400, 300);
  ellipse(0, 150, 400, 75);
  rect(-100, 0, 200, 150);

  stroke(0);
  line(-80, -50, 80, -50);
  line(-70, -60, 70, -60);
  line(-70, -70, 70, -70);

  

  // set fill to match background color
  fill(squid_eyes);
  // draw two eyes
  strokeWeight(2);
  ellipse(-40, 10, 60, 100);
  ellipse( 40, 10, 60, 100);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  rect(-40, 0, 20, 40);
  rect( 40, 0, 20, 40);

  // mouth & nose with thick stroke
  fill(squid_ward);
  // ellipse( 0, 70, 150, 20);
  strokeWeight(2);
  stroke(0);
  line(-150, 150, 150, 150);
  ellipse(0, 150, 75, 150);
  pop();



  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  // rotate(30);
  fill(gollum_skin);
  noStroke();
  ellipse(0, -20, 450, 150);
  fill(gollum_eyeskin);
  ellipse(0, -20, 430, 120);
  fill(gollum_skin);
  ellipse(0, -15, 340, 420);

  stroke(0);
  line(-80, -120, 80, -120);
  line(-70, -130, 70, -130);
  line(-70, -140, 70, -140);
  
  //draw gollum's eye bags
  noStroke();
  fill(gollum_eyeskin);
  ellipse(-60, -30, 110, 130);
  ellipse( 60, -30, 110, 130);

  fill(255);
  // draw two eyes
  ellipse(-60, -40, 120, 120);
  ellipse( 60, -40, 120, 120);




  // set fill and multiple ellipses for eyeballs
  fill(gollum_eyes);
  ellipse(-75, -40, 90, 90);
  ellipse( 45, -40, 90, 90);
  fill(0);
  ellipse(-90, -40, 50, 50);
  ellipse( 30, -40, 50, 50);
  fill(255);
  ellipse(-70, -50, 5, 7.5);
  ellipse( 50, -50, 5, 7.5);

  // mouth-line and tooth
  fill(gollum_tooth);
  strokeWeight(2);
  stroke(0);
  triangle(20, 100, 30, 90, 40, 100);

  fill(0);
  strokeWeight(7);
  stroke(0);

  line(-55, 100, 55, 100);
  
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
