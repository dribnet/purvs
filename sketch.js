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
var bg_color = "#c78a5b";//"#c6bdab";
var pupil_color1 = "#000000"
var eye_color1 = "#FFFFFF";
var fg_color1 = "#fed41e";
var facial_color = "#d3af7d";
var fg_color2 = "#d3af7d";
var stroke_color = "#000000";
var teeth_color = "#FFFFFF";

function draw () {

  drawHomer();	
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

function drawHomer(){
	 // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(fg_color1);
  ellipse(0, 0, 260, 350);

  // set fill to match background color
  fill(eye_color1);
  // draw two eyes
  ellipse(-80, -80, 80, 80);
  ellipse( 0, -80, 80, 80);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-90, -80, 10, 10);
  ellipse( -10, -80, 10, 10);

  // facial hair
  fill(fg_color2);
  ellipse(-40, 80, 220, 200);

  // mouth-hole with background color
  fill(stroke_color);
  stroke(stroke_color);
  ellipse( -60, 100, 50, 50);
  
  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-75, -60, -35, -60, -35, -20,  -75, -20);
  stroke(stroke_color);
  line(-75, -60, -35, -60);
  line(-35, -20,  -75, -20);
  arc(-75, -40, 40, 40, 90, 270, OPEN);
 
  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);
  

  //hair
  
 // nofill();
  stroke(stroke_color);
  //arc(0, -160, 110, 50, 180, 0);
  fill(stroke_color);
  line(60,-100,70,-130);
  line(80,-100,70,-130);
  line(80,-100,90,-130);
  line(100,-100,90,-130);
  
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
