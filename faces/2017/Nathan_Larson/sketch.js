var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // rotation in degrees
  angleMode(DEGREES);
	
}

var lastSwapTime = 0;
var millisPerSwap = 5000;

var s = 0.1;

// global variables for colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [135, 153, 79];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];
var eye_color = [255,255,255];
var black_color = [0,0,0];

//Spongebob Variables
//var sponge_color = "#fef46e";
var outline_color = "#929303";
var eyelash_color = "#000000";
var iris_color = "#43c6f2";
var pupil_color = "#000000";
var mouth_color = "#773536";
var tongue_color = "#dd9c98"
var tongue_outine = "#ca2931";

var eyelash_size = 8;
var eye_size = 110;
var iris_size = 50;
var pupil_size = 20;

//Spongebob
function drawSpongebob(x, y, w, h, mouth_value, eye_value, hole_value, head_color, curves_number) {
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }

    // stroke color
  stroke(fg_color1)

  sponge_color = [254, 244 - head_color, 110 + head_color];
  outline_color = [146, 147 - head_color/2, 3 + head_color];
 
  // move to position1, rotate, start drawing spongebob
  push();
  translate(960/4, 500/2);
  translate(-240, -250);
  scale(0.75, .75);
  fill(sponge_color);
  strokeWeight(0);
  rect(-175, -187, 350, 375);
	
  strokeWeight(5);	
  fill(sponge_color);
  stroke(outline_color);

  for(var i = 0; i < curves_number; i++){
	  curve(-75, -297 + ((374/curves_number) * i),  -175, -187+ ((374/curves_number) * i),  -175, -187 + ((374/curves_number) * (i+1)), -205, -187 + ((374/curves_number) * (i+1)));
	  
	  curve(75, -297 + ((374/curves_number) * i),  175, -187+ ((374/curves_number) * i),  175, -187 + ((374/curves_number) * (i+1)), 205, -187 + ((374/curves_number) * (i+1)));
	  
	  curve(-275 + ((350/curves_number) * i), -87, -175 + ((350/curves_number) * i), -187, -175 + ((350/curves_number) * (i+1)), -187, -75+ ((350/curves_number) * i), -200);
	  
	  curve(-275 + ((350/curves_number) * i), 0, -175 + ((350/curves_number) * i), 187, -175 + ((350/curves_number) * (i+1)), 187, -175+ ((350/curves_number) * i), 200);
  }
	
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
	
  //Eyes	
  // set fill to match background color
  fill(eye_color);
  stroke(black_color);
  // draw two eyes
  ellipse(-50 - eye_value/2, -80, eye_size + eye_value, eye_size + eye_value);
  ellipse( 50 + eye_value/2, -80, eye_size + eye_value, eye_size + eye_value);

  // set fill back to foreground for eyeballs
  fill(iris_color);
  ellipse(-50, -80, iris_size + eye_value, iris_size + eye_value);
  ellipse( 50, -80, iris_size + eye_value, iris_size + eye_value);

// set fill back to foreground for pupils
  fill(pupil_color);
  ellipse(-50 + eye_value/10, -80, pupil_size, pupil_size);
  ellipse( 50 - eye_value/10, -80, pupil_size, pupil_size);
  //ellipse(-50, -80, pupil_size, pupil_size);
  //ellipse(50, -80, pupil_size, pupil_size);

// nose with skin color
  fill(sponge_color);
  ellipse(0, -30, 45, 45);

  //Eyebrows	
  fill(sponge_color);
  stroke(black_color);
	
  var eyebrow_y = -50 - eye_value/2;
	
  var eyebrow_angle = focusedRandom(-45, 25);
  var eyebrow_curve = focusedRandom(0, -200);
	
  var ellipse_size = (eyebrow_curve*-1) / 100; 
	
  var eyebrow_translate = 62;
	
  //Draw the eyebrow inner but not the outline yet
	//LEFT
  push();
  translate(-eyebrow_translate, -85);
  rotate(eyebrow_angle);
  strokeWeight(0);
  //ellipse(0, eyebrow_y, 85*ellipse_size, 15);
  for(var i = 1; i <= 3; i++){
  	curve(0,eyebrow_y+eyebrow_curve - 70, -50,eyebrow_y - 5 * i, 50,eyebrow_y - 5 * i, 0,eyebrow_y+eyebrow_curve - 70);
  }
	
  pop();
	
	//RIGHT
  push();
  translate(eyebrow_translate, -85);
  rotate(-eyebrow_angle);
  strokeWeight(0);
  //ellipse(0, eyebrow_y, 85*ellipse_size, 15);
	for(var i = 1; i <= 3; i++){
  		curve(0,eyebrow_y+eyebrow_curve - 70, -50,eyebrow_y - 5 * i, 50,eyebrow_y - 5 * i, 0,eyebrow_y+eyebrow_curve - 70);
	}
	
  pop();
	
	  //Draw the holes
	strokeWeight(0);
	fill(outline_color);
	if(hole_value > 1){
    	ellipse(-140,-140,44,35);
    	ellipse(-110, 120, 40, 50);
	}
	if(hole_value > 2){
	    ellipse(100, -160, 25, 18);
	    ellipse(150, -120, 40, 37);
	
	}
	if(hole_value > 3)
		ellipse(100,140,33,44);
	if(hole_value > 4){
	ellipse(50,120,20,25);
	ellipse(-60,150,20,15);
	}
	
  //Draw the eyebrows outine so they don't get cut off
	strokeWeight(5);
	push();
	translate(-eyebrow_translate, -85);
	rotate(eyebrow_angle);
	fill(0, 0, 0, 0)
    curve(0,eyebrow_y+eyebrow_curve, -50,eyebrow_y, 50,eyebrow_y, 0,eyebrow_y+eyebrow_curve);
	pop();
	
	push();
	translate(eyebrow_translate, -85);
	rotate(-eyebrow_angle);
	fill(0,0, 0, 0)
    curve(0,eyebrow_y+eyebrow_curve, -50,eyebrow_y, 50,eyebrow_y, 0,eyebrow_y+eyebrow_curve);
	pop();
	
  //Cheeks
  fill(sponge_color);
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
	
  //Inside of mouth
	translate(-105, -100);
    strokeWeight(3);
	fill(mouth_color);
	stroke(black_color);
	
	curve(150,-200 - mouth_value, 200,102,0,102,50,-200 - mouth_value);
	push();
	translate(-10, mouth_value/8 - 110);
	fill(tongue_color);
	strokeWeight(0);
	scale(1.2, 1.2);
	
	ellipse(95, 195, 52, 19);
	
	strokeWeight(4);
	stroke(tongue_outine);
	
	curve(100,195, 67,200,90,185, 150, 185);//left tongue part
	curve(70,235, 90,190, 120,195, 150, 285);//right tongue part
	pop();
	
	strokeWeight(5);
	fill(0,0,0, 0);
	stroke(black_color);
	
	curve(150,-200 - mouth_value, 200,100,0,100,50,-200 - mouth_value);
	
  // mouth-hole with background color
 
  stroke(black_color);
  fill(eye_color);
  rect(115,130,30,35);
  rect(65,130,30,35);
  fill(sponge_color);
  curve(150,-200, 200,100,0,100,50,-200);
  pop();
	
	
  pop();
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

function mouseClicked() {
    s = focusedRandom(0.2, 0.6);
    changeRandomSeed();
}

function draw() {

    if (millis() > lastSwapTime + millisPerSwap) {
        changeRandomSeed();
    }

  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  var w = 2 * canvasWidth / 5;
  var h = 2 * canvasHeight / 3;
  

  for(var i=0; i<30; i++) {
      for (var j = 0; j < 50; j++) {
          push();

          scale(s, s);

          var y = h/2 + (h*0.9)*i - 20;
          var x = w / 2 + (w * 0.75) * j - 50;

	      var mouth_value = focusedRandom(0, 1000);
          var hole_value = int(focusedRandom(1, 5, 3));
          var eye_value = focusedRandom(-25, 30);
          var curve_number = int(focusedRandom(1, 9, 3));
          var head_color = focusedRandom(-20, 100);
		
	      if(mouth_value < 100)
	          mouth_value = 0;

	      if (eye_value <= -17)
	          eye_value = -25;
		

	      drawSpongebob(x, y, w, h, mouth_value, eye_value, hole_value, head_color, curve_number);
	      pop();

	      if (x*s > canvasWidth)
	          break;
      }
      if (y * s > canvasHeight)
          break;
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
