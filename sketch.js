var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

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

var eyelash_size = 8;
var eye_size = 110;
var iris_size = 50;
var pupil_size = 20;

//Morty Variables
var m_eye_size = 55;
var skin_color = "#f7cdad";
var hair_color = "#82491d";

function drawFace1(x, y, w, h, tilt_value, eye_value, hole_value, head_color, curves_number) {
  push();
  translate(x, y);
  rotate(tilt_value);

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
  
  //Draw the holes
	fill(outline_color);
	if(hole_value > 1){
    	ellipse(-140,-140,44,35);
		ellipse(140,-120,40,37);
	}
	if(hole_value > 2){
	ellipse(100,-150,25,18);
	ellipse(-110,120,40,50);
	}
	if(hole_value > 3)
		ellipse(100,140,33,44);
	if(hole_value > 4){
	ellipse(50,120,20,25);
	ellipse(-60,150,20,15);
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

// nose with skin color
  fill(sponge_color);
  ellipse(0, -30, 45, 45);

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
	
  // mouth-hole with background color
  translate(-105, -100);
  strokeWeight(5);
  stroke(black_color)
  fill(eye_color);
  rect(115,130,30,35);
  rect(65,130,30,35);
  fill(sponge_color);
  curve(150,-200, 200,100,0,100,50,-200);
  pop();
	
	
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, nose_rotate, nose_value, mouth_value) {
    rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

	strokeWeight(2);
	stroke(black_color);

  //hair
  fill(hair_color);
  ellipse(0, -50, 250 + hair_value, 250 + hair_value);
	
  //Ears
  fill(skin_color);
  arc(-115,0, 75, 75, 90, 270, OPEN);	
  arc(115,0, 75, 75, -90, -270, OPEN);
	
  //head
  fill(skin_color);
  ellipse(0, 0, 270, 270);

  // set fill to match background color
  fill(eye_color);
  // draw two eyes
  ellipse(-60, -60, m_eye_size + eye_value, m_eye_size + eye_value);
  ellipse( 60, -60, m_eye_size + eye_value, m_eye_size + eye_value);

  // draw pupils
  fill(black_color);
  ellipse(-60, -60, 20 * eye_value/100 + 5, 20 * eye_value/100 + 5);
  ellipse( 60, -60, 20 * eye_value/100 + 5, 20 * eye_value/100 + 5);

  //Nose
  translate(0, 20);
  var nose_y = 15; 
  fill(skin_color);
  push();
  rotate(nose_rotate);
  curve(-250,nose_y + nose_value, 0, nose_y + nose_value, 0, -nose_y - nose_value, -250, -nose_y - nose_value);
  pop();
	
  // mouth-hole with background color
  var mouth_y = 70;
  if(mouth_value < 0){
		mouth_y -= mouth_value/10;  
  }
  curve(-100 - mouth_value,0 - mouth_value, -70, mouth_y, 70, mouth_y, 70 + mouth_value, 100 - mouth_value);
  pop();
  
  //pop();
}

function drawFace3(x, y, w, h, scale_value, eye_spacing, chin_value, head_value, bat_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
    // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  //var scale = extent / 220.0;

  stroke(black_color)
  strokeWeight(0);
  
  scale(1 + scale_value, 1 + scale_value);

  fill(black_color);

  beginShape();
  vertex(-70, -30);
  vertex(-70, -30);//left side of head
  vertex(-65, 30);
  vertex(-50 - head_value, 80); //chin start
  vertex(-chin_value, 110);
  vertex(chin_value, 110);//chin end
  vertex(50 + head_value, 80); 
  vertex(70, 30); //Right side of head
  vertex(70, -30);
  vertex(60, -80);
  vertex(0, -100);
  vertex(-60, -80);
  endShape(CLOSE);

    //left bat
  beginShape();
  vertex(-70, -30);
  vertex(-70, -30);
  vertex(-70, -110 - bat_value);
  vertex(-30, -40);
  endShape(CLOSE);

    //right bat
  beginShape();
  vertex(70, 30);
  vertex(70, 30);
  vertex(75, -110 - bat_value);
  vertex(30, -40);
  endShape(CLOSE);



    //Left Eye
  push();
  translate(-35 - eye_spacing, -15);
  fill(eye_color);

  beginShape();
  vertex(-5, 0);
  vertex(-5, 0);
  vertex(30, 20);
  vertex(0, 15);
  vertex(0, 15);
  endShape(CLOSE);

  pop();

    //Right Eye
  push();
  translate(35 + eye_spacing, -15);
  fill(eye_color);

  beginShape();
  vertex(5, 0);
  vertex(5, 0);
  vertex(-30, 20);
  vertex(0, 15);
  vertex(0, 15);
  endShape(CLOSE);

  pop();

    //Nose
  fill(black_color);
  beginShape();
  vertex(0, 0);
  vertex(0, 0);
  vertex(0, 50);
  vertex(15, 45);
  vertex(15, 45);
  endShape(CLOSE);

    //Mouth area
  fill(skin_color);

  beginShape();
  vertex(-55, 10);
  vertex(-55, 10);
  vertex(-40, 80); //chin start
  vertex(-chin_value, 100);
  vertex(chin_value, 100);
  vertex(40, 80); //chin end
  vertex(60, 10); //Right side of head
  vertex(0, 49);
  endShape(CLOSE);

  pop();
}

function draw () {
  noStroke();

  var mode = faceSelector.value();

  if (mode != 'all') {
    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
    else if (mode == '3') {
      background(bg_color3);
    }
  }

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2; var m_eye_size = 110;

    //Draw BGs
  rectMode(CORNER);
    //BG1
  
    //BG2
  
    //BG3
  

  if (mode == '1' || mode == 'all') {
    // draw 1st face
      fill(bg_color1);
      rect(0, 0, 2 * width, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    var hole_value = Math.floor(map(s3, 0, 100, 1, 5));
    var eye_value = map(s2, 0, 100, -25, 25);
    var curve_number = Math.floor(map(s4, 0, 100, 1, 7));
    var head_color = map(s5, 0, 100, 0, 100);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, hole_value, head_color, curve_number);    
  }

  if (mode == '2' || mode == 'all') {
      // draw 2nd face
      fill(bg_color2);
      rect(width / 3, 0, 2 * width / 3, height);
    var hair_value = map(s1, 0, 100, -30, 70);
    var nose_rotate = map(s3, 0, 100, 0, 360);
    var eye_value = map(s2, 0, 100, 0, 100);
    var nose_value = map(s4, 0, 100, 0, 30);
    var mouth_value = map(s5, 0, 100, -250, 250);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, nose_rotate, nose_value, mouth_value);
  }

  if (mode == '3' || mode == 'all') {
      // draw 3nd face
      fill(bg_color3);
      rect(2.5* width / 3, 0, width / 3, height*2);
    var scale_value = map(s1, 0, 100, 0, 1);
    var chin_value = map(s3, 0, 100, 0, 35);
    var eye_spacing = map(s2, 0, 100, 0, 20);
	var head_value = map(s4, 0, 100, 0, 30);
	var bat_value = map(s5, 0, 100, 0, 30)
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, scale_value, eye_spacing, chin_value, head_value, bat_value);
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
