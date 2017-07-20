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
var bg_color = "#58c6e9";
//harry potter
var fg_color1 = "#f5bfa3";
//pikachu
var fg_color2 = "#ffdd00";
var stroke_color = "#2F2F40";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)
//harry potter's face
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  //rotate(4);
  fill(fg_color1);
  ellipse(0, -15, 300, 325);

//Glasses
 noFill();
 strokeWeight(4);

  ellipse(-50, -30, 70, 70);
  ellipse( 50, -30, 70, 70);
curve(0, 0, -15, -30, 15, -30, 0, 0);
//leftline
curve(0, 0, -85, -30, -150, -35, -80, 80);
push();
//how to flip image: https://forum.processing.org/two/discussion/9309/how-to-flip-image
translate(0);
scale(-1.0,1.0)
curve(0, 0, -85, -30, -150, -35, -80, 80);
 pop();
//harry potter's eyes
  // set fill back to foreground for eyeballs
  fill("#060208");
  ellipse(-50, -30, 20, 20);
  ellipse( 50, -30, 20, 20);

  // mouth with background color
  fill(bg_color);
  noFill();
    //fill(0);
curve(0, -40, -50, 60, 50, 60, 0, -40);
  //ellipse( 0, 70, 80, 8);
//scar
    strokeWeight(8);
    stroke("#F26B63");
    push();
    translate(0,17);
line(-75, -130, -60, -110);
line(-60, -110, -80, -115);
line(-80, -115, -65, -95);
    pop();
     strokeWeight(4);
    stroke(stroke_color);
  //hair
  fill("#3c363a");
beginShape();
vertex(-150, -70);
vertex(-100, -190);
vertex(60, -190);
vertex(40, -175);
vertex(100, -160);
vertex(90, -150);
vertex(140, -100);
vertex(10, -120);
vertex(10, -100);
vertex(-80, -130);
endShape(CLOSE);
  pop();

    //pikachu
  // move to position2, rotate, draw "head" ellipse
  push();
    strokeWeight(4);
    stroke(0);
  translate(3*960/4, 500/2);
      translate(-40, 0);
  //rotate(30);
  fill(fg_color2);
    
     //ears
    push();
 push();
    rotate(-40);
    ellipse(-20,-180, 70,200);
    pop();
    fill(0);
    arc(50, 50, 80, 80, 0, 45, CHORD);
    fill(fg_color2);
push();
translate(0);
    scale(-1.0,1.0)
 push();
    rotate(-40);
    ellipse(-20,-180, 70,200);
    pop();
 pop();
    pop();
 ellipse(0, 0, 300, 240);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
    
  fill("#060208");
  ellipse(-60, -20, 50, 50);
  ellipse( 60, -20, 50, 50);
fill(255);
     strokeWeight(0);
  ellipse(-58, -30, 25, 25);
  ellipse( 58, -30, 25, 25);
    
     // draw two cheeks
    fill("#ec1c23");
    ellipse(-117, 28, 50, 58);
  ellipse( 117, 28, 50, 58);
     strokeWeight(4);
    noFill();
    //fill(0);
    //nose
    curve(0, -5, -5, 10, 5, 10, 0, -5);
    
      // mouth
    push();
    translate(0,-5);
curve(0, -40, -40, 40, 0, 45, 0, -20);
    
    
push();
translate(0);
scale(-1.0,1.0);
curve(0, -40, -40, 40, 0, 45, 0, -20);
    
 pop();
//    arc(50, 50, 80, 80, 0, 75, CHORD);
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
