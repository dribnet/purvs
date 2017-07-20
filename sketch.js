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
var bg_color = "#EDEDED",
    bolt_color = "#C1C1BF",
    face_color1 = "#9ECB3D",
    eye_color1 = "#F7F7EB",
    pupil_color1 = "#20211E",
    hair_color1 = "#20211E",
    mouth_color1 = "#64B244";


var face_color2 = "#7b611a";
var stroke_color = "#c78a5b";

function draw () {
  // background color
  background(bg_color);

  // set no stroke
  noStroke();

  // move to position1, draw "head" quad
  push();
  translate(960/4, 500/2);

  // set fill to bolt color
  fill(bolt_color);
  // left bolt
  rotate(-4);
  beginShape();
  vertex(-170,80);
  vertex(-150,80);
  vertex(-150, 90);
  vertex(-100, 90);
  vertex(-100, 110);
  vertex(-150, 110);
  vertex(-150, 120);
  vertex(-170,120);
  endShape();
  // right bolt
  rotate(8);
  beginShape();
  vertex(170,80);
  vertex(150,80);
  vertex(150, 90);
  vertex(100, 90);
  vertex(100, 110);
  vertex(150, 110);
  vertex(150, 120);
  vertex(170,120);
  endShape();


  // set fill to face color
  fill(face_color1);
  // head
  rotate(-4);
  quad(-150, -150, 150, -175, 125, 180, -125, 180);

  // set fill to eye color
  fill(eye_color1);
  // eyes
  ellipse(-40, 0, 70, 70);
  ellipse(40, 0, 60, 60);

  // set fill back to pupil color
  fill(pupil_color1);
  // pupils
  ellipse(-30, 0, 20, 20);
  ellipse(30, 2, 20, 20);

  // set fill to hair/eyebrow color
  fill(hair_color1);
  // hair
  beginShape();
  vertex(-155, -155);
  vertex(155, -180);
  vertex(155, -70);
  vertex(130, -70);
  vertex(125, -90);
  vertex(115, -70);
  vertex(90, -70);
  vertex(85, -100);
  vertex(80, -70);
  vertex(60, -70);
  vertex(50, -90);
  vertex(40, -70);
  vertex(5, -70);
  vertex(0, -100);
  vertex(-10, -70);
  vertex(-60, -70);
  vertex(-65, -90);
  vertex(-75, -70);
  vertex(-100, -70);
  vertex(-110, -95);
  vertex(-120, -70);
  vertex(-155, -70);
  endShape();

  // eyebrows
  quad(-80, -35, 0, -45, 0, -30, -80, -20);
  quad(10, -40, 70, -30, 70, -15, 10, -25);

  // mouth
  fill(mouth_color1);
  rect(-100, 75, 200, 10);
  for (i=-90; i<100; i+=15){
    rect(i, 65, 5, 30);
  }

  pop();

  // move to position2, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  fill(face_color2);
  ellipse(0, 0, 300, 400);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);

  // set fill back to foreground for eyeballs
  fill(face_color2);
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
