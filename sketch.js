var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
//var faceSelector;

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

/*
  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');
  */

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = [242, 58, 107];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var faceColor = [243,100,242];
var white = [255,255,255];
var lightGray = [220,220,220];
var noseColor = [133,133,238];
var mouthColor = [97,97,235];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];


function drawMainFace(faceWidth,faceHeight,eyeNum){

  //faceWidth = 5;

fill(faceColor);
//face
beginShape();
//lefttop
vertex(width*0.3-(faceWidth),height*0.35-(faceHeight));
//top
vertex(width*0.5,height*0.1-(faceHeight));
//righttop
vertex(width*0.7+(faceWidth),height*0.35-(faceHeight));
//rightbottom
vertex(width*0.75+(faceWidth),height*0.7+(faceHeight));
//bottom
vertex(width*0.5,height*0.9+(faceHeight));
//leftbottom
vertex(width*0.25-(faceWidth),height*0.7+(faceHeight));

endShape();

var eyeSize = 43;
//draw eyes
//first 2
drawEye(width*0.35-faceWidth,height*0.4-faceHeight,eyeSize);
drawEye(width*0.65+faceWidth,height*0.4-faceHeight,eyeSize);
//second 2
if(eyeNum>=2){
drawEye(width*0.42-(faceWidth*0.5),height*0.35-(faceHeight),eyeSize);
drawEye(width*0.58+(faceWidth*0.5),height*0.35-(faceHeight),eyeSize);
}
//third 2
if(eyeNum>=3){
drawEye(width*0.42-(faceWidth*0.6),height*0.45-(faceHeight),eyeSize);
drawEye(width*0.58+(faceWidth*0.6),height*0.45-(faceHeight),eyeSize);
}


//horns right

fill(white);
beginShape();
//1
vertex(width*0.65+(faceWidth*0.8),height*0.3-(faceHeight));
//2
vertex(width*0.8+(faceWidth),height*0.25-(faceHeight));
//3
vertex(width*0.82+(faceWidth),height*0.08-(faceHeight));
//4
vertex(width*0.78+(faceWidth),height*0.02-(faceHeight));
//5
vertex(width*0.77+(faceWidth),height*0.08-(faceHeight));
//6
vertex(width*0.74+(faceWidth),height*0.15-(faceHeight));
//7
vertex(width*0.58+(faceWidth*0.4),height*0.2-(faceHeight));
endShape();


//horns left
fill(white);
beginShape();
//1
vertex(width*0.35-(faceWidth*0.8),height*0.3-(faceHeight));
//2
vertex(width*0.2-(faceWidth),height*0.25-(faceHeight));
//3
vertex(width*0.18-(faceWidth),height*0.08-(faceHeight));
//4
vertex(width*0.22-(faceWidth),height*0.02-(faceHeight));
//5
vertex(width*0.23-(faceWidth),height*0.08-(faceHeight));
//6
vertex(width*0.26-(faceWidth),height*0.15-(faceHeight));
//7
vertex(width*0.42-(faceWidth*0.4),height*0.2-(faceHeight));
endShape();

print(width,height);
//draw nose
var noseWidth = width*0.16+faceWidth;
var noseHeight = width*0.03;
var noseX = width*0.5;
var noseY = height*0.57-faceHeight;
fill(noseColor);

rectMode(CENTER);
ellipse(noseX,noseY,noseWidth,noseHeight/2);
ellipse(noseX,noseY+noseHeight/4,noseWidth/4,noseHeight);

//draw mouth
var mouthWidth = (width*0.23)+(faceWidth*2);
var mouthHeight = (height*0.1)+(faceHeight);
var mouthX = width*0.5;
var mouthY = (height*0.75)+(faceHeight/2);

fill(mouthColor);
ellipse(mouthX,mouthY,mouthWidth,mouthHeight);

//tooth 1
fill(white);
rectMode(CORNER);
var toothWidth = width*0.01;
var toothDiff = width*0.015;
var toothX1 = (mouthX-toothDiff);
var toothY1 = mouthY-(mouthHeight/2);
var toothX2 = (mouthX-toothDiff*2)-toothWidth-(faceWidth/8);
var toothY2 = mouthY-(mouthHeight/2)-(faceWidth/8)+(faceHeight/8);
var toothX3 = (mouthX-toothDiff*1.9)+toothWidth;
var toothY3 = mouthY+toothWidth-(mouthHeight/2);
triangle(toothX1,toothY1,toothX2,toothY2,toothX3,toothY3);




}



function drawEye(x,y,size){

  mouseXPos = map(mouseX,0,width,-size/7,size/7);
  mouseYPos = map(mouseY,0,height,-size/7,size/7);

fill(white);
ellipse(x,y,size,size);
fill(lightGray);
ellipse(x+mouseXPos,y+mouseYPos,size*0.6,size*0.6);

}

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
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
  var scale = extent / 220.0;

  fill(fg_color1);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color1);
    ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color1);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color1);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color1);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
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

  stroke(stroke_color3);
  fill(fg_color3);
  ellipse(0, 0, 300 * scale, 400 * scale);

  // eyes. first check for blinking
  if(blink_value > 0) {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color3);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);

  // TODO: paramaterize hair
  var follicles = [
    [346,138],
    [391,120],
    [391,67],
    [439,76],
    [463,42],
    [487,18],
    [481,101],
    [520,102],
    [520,78],
    [533,54],
    [560,108],
    [580,76],
    [596,124],
    [618,124]
  ];

  resetMatrix();
  fill(colorHair);
  var radius = hair_value * scale;
  for(var i=0; i<follicles.length; i++) {
    ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
  }
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
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
  var scale = extent / 220.0;

  stroke(stroke_color2)
  fill(fg_color2);
  rect(0, 0, (300 + width_value) * scale, 400 * scale);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color2);
    rect( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color2);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color2);
    rect(-60 * scale, -80 * scale, 50 * scale, 30 * scale);
    rect( 60 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color2);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 60 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  rectMode(CORNER);
  pop();
}

function draw () {
  noStroke();

    background(bg_color1);
  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();




    // draw 1st face
    fill(bg_color1);

    var faceWidth = map(s1, 0, 100, -75, -25);
    var faceHeight = map(s2, 0, 100, -30, 30);
    var eye_value = Math.floor(map(s3, 0, 100, 1, 3));

    drawMainFace(faceWidth,faceHeight,eye_value);

    //drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);



    // draw 2nd face
    fill(bg_color2);

    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);

    //drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value);



    // draw 3nd face
    fill(bg_color3);

    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 0, 3));

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
