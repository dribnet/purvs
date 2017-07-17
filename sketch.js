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
var bg_color = "#6d81e5";
var bags_face = "#eed5c1";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#000000";
var white = "#FFFFFF";

function draw () {
  // background color
  background(bg_color);

  drawMonopoly();
  
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(30);
  fill(fg_color2);
  ellipse(0, 0, 300, 100);

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


function drawMonopoly() {

stroke(stroke_color)
strokeWeight(2)



  // move to position1, rotate, draw "head" ellipse
  push();
  translate(280, 250);
  rotate(0);
  fill(bags_face);
  ellipse(0, 0, 300, 300);

  //ear
  ellipse(-170, -0, 50, 60);

  //moustache 
fill(white);
  beginShape();
  vertex(00,20);
  bezierVertex(100,70,120,50,160,20);
  bezierVertex(160,50,110,80,100,100);
  bezierVertex(-100,70,-120,50,-160,20);

  //vertex(00,40);
  endShape(CLOSE);

  // set fill back to foreground for eyeballs
  fill(stroke_color);
  ellipse(-60, -50, 25, 25);
  ellipse( 50, -50, 25, 25);

  // mouth-hole with background color
  fill(stroke_color);
  ellipse( 0, 70, 20, 20);
  pop();




}
