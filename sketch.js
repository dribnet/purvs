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
var face_colour = "#ffffff";
var star_colour = "#000000";
var red_colour = "#d80202";
var tongue_colour = "#ffc7c1";

function draw () {
  // background color
  background(star_colour);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  stroke(face_colour);
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(face_colour);
  ellipse(0, 0, 300, 400);
	
  //star for face
  facestar();
  
  stroke(star_colour);
  // set fill to match background color
  fill(red_colour);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);

  // set fill back to foreground for eyeballs
  fill(face_colour);
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

  // mouth-hole with background color
  fill(star_colour);
  ellipse( 0, 70, 150, 50);
	

  //tongue
  fill(tongue_colour);
  stroke(tongue_colour);
  rect(-25,70,25,20);
  ellipse(0,100,50,60);
	
  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  stroke(face_colour);
  translate(3*960/4, 500/2);
  rotate(30);
  fill(face_colour);
  ellipse(0, 0, 300, 400);
	
  stroke(stroke_color);
  // set fill to match background color
  fill(red_colour);
  // draw two eyes
  ellipse(-50, -80, 50, 30);
  ellipse( 50, -80, 50, 30);

  // set fill back to foreground for eyeballs
  fill(face_colour);
  ellipse(-60, -80, 20, 20);
  ellipse( 40, -80, 20, 20);

  // mouth-hole with background color
  fill(face_colour);
  ellipse( 0, 70, 150, 50);
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
function facestar(){
	fill(star_colour);
	stroke(star_colour);
	triangle(-25,-65,0,-25,-25,-150); //downwards
	triangle(-25,-65,0,-25,-25,20);   //upwards
	//triangle(-50);
	
	
}
