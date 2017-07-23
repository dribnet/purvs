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

var white = [255,255,255];
var lightGray = [220,220,220];
/*
var faceColor = [243,100,242];
var noseColor = [133,133,238];
var mouthColor = [97,97,235];
*/

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];



function drawMainFace(mX,mY,faceWidth,faceHeight,eyeNum,hornSize,blueColor,monsterHeight){

  push();

  var monsterWidth = monsterHeight*1.92;

  translate(mX,mY);

  // global variables for colors
  var bg_color1 = [242, 58, 107+blueColor];
  var bg_color2 = [47, 59, 64+blueColor];
  var bg_color3 = [70, 70, 120+blueColor];

  var faceColor = [243,100,180+blueColor];
  var white = [255,255,255];
  var lightGray = [220,220,220];
  var noseColor = [133,133,238+blueColor];
  var mouthColor = [97,97,235+blueColor];

  //faceWidth = 5;

fill(faceColor);
//face
beginShape();
//lefttop
vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.35-(faceHeight));
//top
vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
//righttop
vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.35-(faceHeight));
//rightbottom
vertex(monsterWidth*0.75+(faceWidth),monsterHeight*0.7+(faceHeight));
//bottom
vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
//leftbottom
vertex(monsterWidth*0.25-(faceWidth),monsterHeight*0.7+(faceHeight));

endShape();

var eyeSize = monsterWidth*0.066;
//draw eyes
//first 2
drawEye(monsterWidth*0.35-faceWidth,monsterHeight*0.4-faceHeight,eyeSize);
drawEye(monsterWidth*0.65+faceWidth,monsterHeight*0.4-faceHeight,eyeSize);
//second 2
if(eyeNum>=2){
drawEye(monsterWidth*0.42-(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize);
drawEye(monsterWidth*0.58+(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize);
}
//third 2
if(eyeNum>=3){
drawEye(monsterWidth*0.42-(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize);
drawEye(monsterWidth*0.58+(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize);
}


//horns right

fill(white);
beginShape();
//1
vertex(monsterWidth*0.65+(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
//2
vertex(monsterWidth*0.8+(faceWidth)+hornSize,monsterHeight*0.25-(faceHeight));
//3
vertex(monsterWidth*0.82+(faceWidth)+hornSize,monsterHeight*0.08-(faceHeight));
//4
vertex(monsterWidth*0.78+(faceWidth)+hornSize,monsterHeight*0.02-(faceHeight));
//5
vertex(monsterWidth*0.77+(faceWidth)+hornSize,monsterHeight*0.08-(faceHeight));
//6
vertex(monsterWidth*0.74+(faceWidth)+hornSize,monsterHeight*0.15-(faceHeight));
//7
vertex(monsterWidth*0.58+(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
endShape();


//horns left
fill(white);
beginShape();
//1
vertex(monsterWidth*0.35-(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
//2
vertex(monsterWidth*0.2-(faceWidth)-hornSize,monsterHeight*0.25-(faceHeight));
//3
vertex(monsterWidth*0.18-(faceWidth)-hornSize,monsterHeight*0.08-(faceHeight));
//4
vertex(monsterWidth*0.22-(faceWidth)-hornSize,monsterHeight*0.02-(faceHeight));
//5
vertex(monsterWidth*0.23-(faceWidth)-hornSize,monsterHeight*0.08-(faceHeight));
//6
vertex(monsterWidth*0.26-(faceWidth)-hornSize,monsterHeight*0.15-(faceHeight));
//7
vertex(monsterWidth*0.42-(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
endShape();

print(width,height);
//draw nose
var noseWidth =monsterWidth*0.16+faceWidth;
var noseHeight = monsterWidth*0.03;
var noseX = monsterWidth*0.5;
var noseY = monsterHeight*0.57-faceHeight;
fill(noseColor);

rectMode(CENTER);
ellipse(noseX,noseY,noseWidth,noseHeight/2);
ellipse(noseX,noseY+noseHeight/4,noseWidth/4,noseHeight);

//draw mouth
var mouthWidth = (monsterWidth*0.23)+(faceWidth*2);
var mouthHeight = (monsterHeight*0.1)+(faceHeight);
var mouthX = monsterWidth*0.5;
var mouthY = (monsterHeight*0.75)+(faceHeight/2);

fill(mouthColor);
ellipse(mouthX,mouthY,mouthWidth,mouthHeight);

//tooth 1
fill(white);
rectMode(CORNER);
var toothWidth = monsterWidth*0.01;
var toothDiff = monsterWidth*0.015;
var toothX1 = (mouthX-toothDiff);
var toothY1 = mouthY-(mouthHeight/2);
var toothX2 = (mouthX-toothDiff*2)-toothWidth-(faceWidth/8);
var toothY2 = mouthY-(mouthHeight/2)-(faceWidth/8)+(faceHeight/8);
var toothX3 = (mouthX-toothDiff*1.9)+toothWidth;
var toothY3 = mouthY+toothWidth-(mouthHeight/2);
triangle(toothX1,toothY1,toothX2,toothY2,toothX3,toothY3);



pop();
}



function drawEye(x,y,size){

  mouseXPos = map(mouseX,0,width,-size/7,size/7);
  mouseYPos = map(mouseY,0,height,-size/7,size/7);

fill(white);
ellipse(x,y,size,size);
fill(lightGray);
ellipse(x+mouseXPos,y+mouseYPos,size*0.6,size*0.6);

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

    var m1X = width/6;
    var m1Y = height/5;
    var m1Height = 350;

    var faceWidth = map(s1, 0, 100, -(m1Height/6.66), -(m1Height/20));
    var faceHeight = map(s2, 0, 100, -(m1Height/16.66), (m1Height/16.66));
    var eye_value = Math.floor(map(s3, 0, 100, 1, 3));
    var hornSize = map(s4,0,100,-(m1Height/10),(m1Height/10));
    var blueColor = map(s5,0,100,-50,0);

    drawMainFace(m1X,m1Y,faceWidth,faceHeight,eye_value,hornSize,blueColor,m1Height);
    //drawMainFace(0,m1Y,faceWidth,faceHeight,eye_value,hornSize,blueColor,m1Height);
    //drawMainFace(width/2,m1Y,faceWidth,faceHeight,eye_value,hornSize,blueColor,m1Height);

    //drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);



    // draw 2nd face
    fill(bg_color2);

    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, 0, 100);

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
