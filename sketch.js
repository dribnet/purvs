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

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(0);

  strokeWeight(2);
  drawDoraemon();

  strokeWeight(2);
  drawBender();
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
  push();
  translate(960/4, 500/2);
  //collar
  fill(209, 4, 41);
  arc(0, 85, 220, 120, 360, 180, OPEN);
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
  arc(110, 10, 50, 50, 247.5, 67.5, OPEN);
  arc(-110, 10, 50, 50, 112.5, 292.5, OPEN);
  fill(244, 83, 2);
  bezier(-40, 104, -66, 80, -10, 70, 0, 90);
  bezier(40, 104, 66, 80, 10, 70, 0, 90);
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
  line(-30,-15, -100, -25);
  line(-30,-5, -100, -5);
  line(-30,5, -100, 15);
  //right whiskers
  line(30,-15, 100, -25);
  line(30,-5, 100, -5);
  line(30,5, 100, 15);
  //nose
  fill(209, 4, 41);
  ellipse(0,-50, 40, 40);
  fill(255, 255, 255);
  strokeWeight(0);
  ellipse(-4,-54, 15, 15);
  //bell
  strokeWeight(2);
  fill(249, 224, 54);
  ellipse(0,160, 50, 50);
  curve(0,190,-25, 155, 25, 155, 0, 190);
  curve(0,190,-25, 160, 25, 160, 0, 190);
  fill(131, 116, 103);
  ellipse(0,170, 10, 10);
  line(0, 175, 0, 185); 
  pop();
}

function drawBender(){
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);

  fill(183, 194, 200);
  rectMode(CENTER);
  //antenna
  triangle(-20, -20, 0, -230, 20, -20)
  ellipse(0, -150, 40, 40);
  ellipse(0, -220, 20, 20);

  //head
  rect(0, 58, 220, 240);
  arc(0, -60, 220, 180, 180, 360, OPEN);
  arc(0, 177, 220, 50, 360, 180, OPEN);
  
  //eyes
  rect(0, 0, 260, 100, 45, 45, 45, 45);
  fill(0);
  rect(0, 0, 240, 80, 45, 45, 45, 45);
  //left eye
  fill(249, 249, 149);
  ellipse(-50, 0, 80, 80);
  fill(0);
  rect(-55, 0, 15, 15);
  //right eye
  fill(249, 249, 149);
  ellipse(50, 0, 80, 80);
  fill(0);
  rect(55, 0, 15, 15);

  //mouth
  fill(249, 249, 149);
  rect(0, 120, 200, 80, 45, 45, 35, 35);
  arc(0, 137, 196, 65, 360, 180, OPEN);
  //teeth
  line(-80, 85, -80, 155);
  line(-40, 80, -40, 165);
  line(0, 80, 0, 170);
  line(40, 80, 40, 165);
  line(80, 85, 80, 155);
  noFill();
  curve(40, 40, -95, 100, 95, 100, 40, 40);
  curve(80, 40, -100, 130, 100, 130, 80, 40);

  pop();

}