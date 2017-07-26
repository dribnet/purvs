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
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
 slider6.parent('slider6Container');
  slider7.parent('slider7Container');


  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = [120, 150, 200];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var face_color1 = [225, 206, 187];
var eye_color101 = [255, 255, 255];
var eye_color102 = [0, 255, 255];
var eye_color103 = [0, 50, 80, 200];
var eye_color104 = [0, 0, 0];


var irisBlue = [120, 150, 200];
var irisGreen = [90, 150, 20];
var irisDark = [40, 80, 80];
var irisColor = [irisBlue, irisDark, irisGreen];

var hair_color1 = [120, 40, 20];

var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];




function drawFace2(x, y, w, h, smile_value, lowerEye_value, brow_value, browRaise_value) {

  push();

  translate(x, y - 150);


var face_width = 300;

var smile_ctrl = createVector([smile_value], [260+ smile_value/2]);
var smile_origin = createVector([x], [y]);


  function drawFace2_shape(){
    fill(face_color1);
    beginShape();
    curveVertex(100, 300);
    curveVertex(face_width/2, 25);
    curveVertex(35, 30);
    curveVertex(5, 110);
    curveVertex(0, 180);
    curveVertex(smile_value, 260 + (smile_value/2));
    curveVertex(40, 300);
    curveVertex(100, 355);
    curveVertex(140, 320);
    curveVertex(125, 20);
    endShape();

    ////draw mouth
    // stroke("#000");
    // ellipse(smile_ctrl.x, smile_ctrl.y, 1, 1);
    // ellipse(125, 288, 10, 10);
    // curve(smile_ctrl.x, smile_ctrl.x, 60, 288, 125, 288, 125, 288);
    // noStroke();

    //draw eye
    fill("#fff");
    // ellipse(face_width/5, 170, face_width/5, 25);
    beginShape();
    curveVertex(53, 188);
    curveVertex(35, 182);
    curveVertex(64, 163);
    curveVertex(91, 169);
    curveVertex(102, 181);
    curveVertex(53, 188 - lowerEye_value);
    curveVertex(35, 182);
    endShape();

    //draw eyebrow
    push();
    translate(0, browRaise_value*5)
    fill("#000");
    beginShape();
    vertex(27, 156);
	vertex(40, 142);
	vertex(63, 132);
	vertex(105, 130 - brow_value);
	vertex(105, 142 - brow_value);
	vertex(68, 141);
	vertex(47, 144);
    vertex(27, 156);			
    endShape();
    pop();

  }



// draw two face halves
  push();
    translate(-125, 0);
    drawFace2_shape();
  pop();

  push();
    translate(125, 00);
    scale(-1, 1);
    drawFace2_shape();
  pop();




// //guidelines
// stroke("#000");
// line(0, 0, 0, 360); //vertical centre
// line(-125, 180, 125, 180); //horizontal centre, eye line

// stroke("#cccccc");
// line(35, 0, 35, 360); //eye start
// line(65, 0, 65, 360); //eye center
// // line(-125, 216, 125, 216); //horizontal 1
// line(-125, 252, 125, 252); //horizontal 2 nose
// line(-125, 288, 125, 288); //horizontal 3 mouth
// // line(-125, 324, 125, 324); //horizontal 4
// line(-125, 360, 125, 360); //horizontal 5 lower limit


pop();

}

function drawFace3(x, y, w, h, pupil_value, lowerEye_value, blink_value) {
  push();
  rectMode(CENTER);
  translate(x, y);

function drawEye (flip, highlightPosition_x){
//draw White of eye
push();
translate(flip*(x/6), 0);
scale(0.8)
  fill('#fff');
  beginShape();
  curveVertex(36, 44);
  curveVertex(0, 25);
  curveVertex(25, 6);
  curveVertex(60, 0);
  curveVertex(87, 5);
  curveVertex(111, 24);
  curveVertex(121, 39);
  curveVertex(118, 44);
  curveVertex(106, 42);
  curveVertex(84, 46);
  curveVertex(36, lowerEye_value);
  curveVertex(0, 25);
  curveVertex(25, 6);
  endShape();


  //draw iris
  fill(20, 50, 80);
  ellipse(64, 18, 45, 45);
  fill(230, 250, 200, 20);

  for (var i = 38; i > 10; i -= 2){
  	  ellipse(64, 18, i, i);
  }

  // draw pupil
  fill("#000");
  ellipse(64, 18, 11*pupil_value, 11*pupil_value);

  //draw highlights
  var j = 15;
  var k = 6;
  for (var i = 15; i < 255; i += 5){
  	fill(255, 255, 255, i);
  	j -= 0.5;
  	k -= 0.2;
  ellipse(highlightPosition_x, 18, j, j);
  ellipse(highlightPosition_x + (5*(-flip)), 10, k, k);
  }


  //draw shape overlay for eyelid
    function drawEyelid(){
  var lowerLimit;
  if((blink_value*(blink_value/15)) < 50){
  	lowerLimit = blink_value*(blink_value/15)
  }
  else(lowerLimit = 50);

  var midLimit;
  if((blink_value*(blink_value/20)) < 40){
  	midLimit = blink_value*(blink_value/20)
  }
  else(midLimit = 40);
  beginShape();
   curveVertex(0, 3);
  curveVertex(0, 25);
  curveVertex(25, 6 + midLimit);
  curveVertex(60, 0 + lowerLimit);
  curveVertex(87, 5 + midLimit + (midLimit/10));
  curveVertex(115, 25 + (blink_value/1.5));
  curveVertex(124, 39);
  curveVertex(122, 27);
  curveVertex(112, 6);
  curveVertex(92, -5);
  curveVertex(60, -10);
  curveVertex(25, -8);
  curveVertex(0, 3);
  curveVertex(-15, 17);
  curveVertex(0, 25);
  endShape();
}

  for(i = 0; i < 8; i+= 0.1){
  	  push();
  translate(0, i);

    fill(0, 0, 0, 6);
	drawEyelid();
	  pop();
	}

  fill(bg_color2);
  drawEyelid();


    function drawLowerLid() {

  beginShape();
  curveVertex(106, 60);
  curveVertex(25, 60);

  curveVertex(-20, 15);
  curveVertex(-5, 25);
  curveVertex(36, lowerEye_value);
  curveVertex(106, 40);
  curveVertex(106, 60);
  curveVertex(25, 60);
  curveVertex(0, 25);
  endShape();
}

 //draw shape overlay for lower eye
for (var i = 0; i > -3; i-=0.2){
	fill(0, 0, 0, 8);	
	push();
	translate(0, i);
	drawLowerLid();
	pop();
}
fill(bg_color3);
drawLowerLid();


fill("#000");
// ellipse(-5, 30, 3, 3);
pop();
}



drawEye(-1, 54);
push();
scale(-1, 1);
translate(-(x/3), 0);
drawEye(1, 72);
pop();
pop();
}

function draw () {
  noStroke();


  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();
    var s6 = slider7.value();
  var s6 = slider7.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;


  
    // draw 2nd face
    fill(bg_color2);
    rect(0, 0, 2*width/2, height);
    var smile_value = map(s1, 100, 0, 0, 25);
    var brow_value = map(s3, 0, 100, -15, 15);
    var lowerEye_value = map(s2, 0, 100, -5, 15);
    var browRaise_value = Math.floor(map(s4, 0, 100, -3, 3));

      face_x = 1 * width / 4;

    drawFace2(face_x, face_y, face_w, face_h, smile_value, lowerEye_value, brow_value, browRaise_value);




    // draw 3nd face
    fill(bg_color3);
    rect(width/2, 0, width, height);
    var pupil_value = Math.floor(map(s1, 0, 100, 1, 3));
    var blink_value = map(s5, 0, 100, 0, 24);
    var lowerEye_value = map(s2, 0, 100, 25, 40);

      face_x = 3 * width / 4;

    drawFace3(face_x, face_y, face_w, face_h, pupil_value, lowerEye_value, blink_value);
 
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
