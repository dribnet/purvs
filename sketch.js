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
var bg_color = "#ffffff";
var fg_color1 = "#fef46e";
var fg_color2 = "#fef46e";
var stroke_color = "#000000";
var outline_color = "#929303";

//Spongebob Variables
var eyelash_color = "#000000";
var iris_color = "#43c6f2";
var pupil_color = "#000000";

var eyelash_size = 8;
var eye_size = 110;
var iris_size = 50;
var pupil_size = 20;

//Morty Variables
var skin_color = "#f7cdad";
var hair_color = "#82491d";

var m_eye_size = 110;

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(fg_color1)

  // move to position1, rotate, start drawing spongebob
  push();
  translate(960/4, 500/2);
  fill(fg_color1);

  rect(-175, -187, 350, 375);
	
  strokeWeight(5);	
  fill(fg_color1);
  stroke(outline_color);
  for(var i = 0; i < 5; i++){
	  curve(-75, -297 + ((374/5) * i),  -175, -187+ ((374/5) * i),  -175, -187 + ((374/5) * (i+1)), -205, -187 + ((374/5) * (i+1)));
	  curve(75, -297 + ((374/5) * i),  175, -187+ ((374/5) * i),  175, -187 + ((374/5) * (i+1)), 205, -187 + ((374/5) * (i+1)));
	  curve(-275 + ((350/5) * i), -87, -175 + ((350/5) * i), -187, -175 + ((350/5) * (i+1)), -187, -75+ ((350/5) * i), -287);
	  curve(-275 + ((350/5) * i), 0, -175 + ((350/5) * i), 187, -175 + ((350/5) * (i+1)), 187, -75+ ((350/5) * i), 287);
  }
  
  //Draw the holes
	fill(outline_color);
    ellipse(-140,-140,44,35);
	ellipse(140,-120,40,37);
	ellipse(100,-150,25,18);
	ellipse(-110,120,40,50);
	ellipse(100,140,33,44);
	ellipse(50,120,20,25);
	ellipse(-60,150,20,15);
	
  //Draw the eye lashes
  /*fill(eyelash_color);
  rect(-50 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
  rect(50 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
	
  push();
	rotate(25);
  rect(0 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
  //rect(-30 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
  rect(70 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
	
  pop();
	
  rect(-70 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
  rect(30 - eyelash_size/4, -150, eyelash_size/2, eyelash_size*2);
  */
	
  // set fill to match background color
  fill(bg_color);
  stroke(stroke_color);
  // draw two eyes
  ellipse(-50, -80, eye_size, eye_size);
  ellipse( 50, -80, eye_size, eye_size);

  // set fill back to foreground for eyeballs
  fill(iris_color);
  ellipse(-50, -80, iris_size, iris_size);
  ellipse( 50, -80, iris_size, iris_size);

// set fill back to foreground for pupils
  fill(pupil_color);
  ellipse(-50, -80, pupil_size, pupil_size);
  ellipse( 50, -80, pupil_size, pupil_size);

// nose with skin color
  fill(fg_color1);
  ellipse(0, -30, 45, 45);

  //Cheeks
  fill(fg_color1);
  stroke(outline_color);
  curve(-20, 180, -120, -5, -90, -5, -250, 80);
  //curve(110, 80, 110, 0, 80, 0, 80, 80);
  curve(220, 180, 80, -5, 110, -5, -70, 80);
  fill(outline_color);
  strokeWeight(1);
  ellipse(-110,-10,3,3);
  ellipse(-100,-10,3,3);
  ellipse(-105,-15,3,3);
  ellipse(100,-10,3,3);
  ellipse(90,-10,3,3);
  ellipse(95,-15,3,3);
	
  // mouth-hole with background color
  translate(-105, -100);
	strokeWeight(5);
  stroke(stroke_color)
  fill(bg_color);
  rect(115,130,30,35);
  rect(65,130,30,35);
  fill(fg_color1);
  curve(150,-200, 200,100,0,100,50,-200);
  pop();

  // START DRAWING SEOND HEAD
	
  stroke(stroke_color);
  push();
  translate(3*960/4, 500/2);
  
  strokeWeight(2);
  
  //hair
  fill(hair_color);
  ellipse(0, -50, 375, 375);
	
  //Ears
  fill(skin_color);
  arc(-165,0, 75, 75, 90, 270, OPEN);	
  arc(165,0, 75, 75, -90, -270, OPEN);
	
  //head
  fill(skin_color);
  ellipse(0, 0, 350, 350);

  // set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-70, -60, m_eye_size, m_eye_size);
  ellipse( 70, -60, m_eye_size, m_eye_size);

  // set fill back to foreground for eyeballs
  fill(pupil_color);
  ellipse(-70, -60, 10, 10);
  ellipse( 70, -60, 10, 10);

  //Nose
  translate(0, 20);
  var nose_y = 15; 
  fill(skin_color);
  push();
  rotate(45);
  curve(-250,nose_y, 0, nose_y, 0, -nose_y, -250, -nose_y);
  pop();
	
  // mouth-hole with background color
  curve(-70,0, -70, 70, 70, 70, 70, 0);
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
