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
var stroke_color = "#9c4641";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color);
  noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/5, 0);
  translate(0,160);
  fill("#db9c8a");
  ellipse(160,0,320,300);
  beginShape();
  vertex(0,0);
  vertex(46,216);
  vertex(124,302);
  vertex(236,310);
  vertex(304,152);
  vertex(320,0);
  endShape();

  //eye/nose shadow
  fill("#9c5b48");
  beginShape();
  vertex(85,24);
  vertex(152,20);
  vertex(183,38);
  vertex(225,44);
  vertex(263,31);
  vertex(300,41);
  vertex(297,76);
  vertex(237,88);
  vertex(246,132);
  vertex(218,155);
  vertex(198,156);
  vertex(156,135);
  vertex(170,76);
  vertex(134,83);
  vertex(92,59);
  endShape();

  fill("#db9c8a");
  beginShape();
  vertex(177,36);
  vertex(181,58);
  vertex(182,93);
  vertex(162,112);
  vertex(160,132);
  vertex(196,149);
  vertex(213,150);
  vertex(239,134);
  vertex(240,119);
  vertex(222,64);
  vertex(233,36);
  endShape();

  // draw two eyes
  fill("#FFFFFF");
  ellipse(130, 42, 50, 30);
  ellipse( 267, 49, 50, 30);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(130, 42, 20, 20);
  ellipse(267, 49, 20, 20);

  // mouth-hole with background color
  fill("#FFFFFF");
  beginShape();
  vertex(120,177);
  vertex(197,184);
  vertex(251,182);
  vertex(242,196);
  vertex(217,205);
  vertex(179,205);
  vertex(127,187);
  endShape();

  //Lips
  noFill();
  stroke(stroke_color);
  strokeWeight(4);
  beginShape();
  vertex(116,192);
  vertex(120,177);
  vertex(197,184);
  vertex(251,182);
  vertex(260,178);
  endShape();

  strokeWeight(10);
  beginShape();
  vertex(125,183);
  vertex(127,187);
  vertex(179,205);
  vertex(217,205);
  vertex(242,196);
  endShape();

  // draw two eyes
  fill("#44201d");
  noStroke();
  rect(90, 13, 80, 15);
  rect(230,22, 80, 15);

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
