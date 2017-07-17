var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);

  colorMode(HSB)

  rectMode(CENTER)

  bert_face = color(45, 85, 95)
  bert_nose = color(29, 96, 94)

  ernie_face = color(35, 90, 92)

  mouth = color(351, 100, 55)
}

// global variables for colors
var bg_color = "#ffffff";
var stroke_color = "#c78a5b";

var bert_face //yellow
var bert_nose //orange

var ernie_face = "rgb(217, 118, 37)" //orange
var ernie_nose = "rgb(218, 10, 31)" //red

function draw () {
  // background color
  background(bg_color);

  // stroke color
  //stroke(stroke_color)
  noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4*1.3, 500/2);
  rotate(-10);
  //squeeze ernie
  fill(ernie_face);
  ellipse(0, 0, 290, 230);

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -40, 60, 45);
  ellipse( 40, -40, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-30, -40, 20, 20);
  ellipse( 30, -40, 20, 20);

  // mouth-hole with background color
  fill(mouth);
  ellipse(0, 65, 220, 30);

  fill(ernie_nose)
  ellipse(0, 6, 60, 70);
  pop();



  // move to position2, rotate, draw "head" ellipse
  push();
  translate(2.8*960/4, 500/2);
  rotate(20);
  fill(bert_face);
  ellipse(0, 0, 280, 400);

  translate(0, 30)

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-50, -80, 70, 70);
  ellipse( 50, -80, 70, 70);

  // set fill back to foreground for eyeballs
  fill("black");
  ellipse(-40, -80, 30, 30);
  ellipse( 40, -80, 30, 30);

  //bert eyebrows
  fill("black")
  rect(0, -130, 180, 20)

  // mouth-hole with background color
  fill(mouth);
  ellipse(0, 70, 170, 30);

  fill(bert_nose);
  ellipse(0, -10, 80, 110)
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
