var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var randomNum;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  print(width,height);

curRandomSeed = int(focusedRandom(0, 100));

  //randButton = createButton('randomize');
  //randButton.mousePressed(changeRandomSeed);
  //randButton.parent('selector1Container');



  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed+=1;
}

// global variables for colors
var white = [255,255,255];
var lightGray = [220,220,220];

// pink
//background, face, pupil, horns, nose, mouth
var scheme1 = [[242,58,107],[243,100,242],[243,150,242],[255,255,255],[133,133,238],[97,97,235]];
// light blue
var scheme2 = [[209,222,252],[166,166,243],[97,97,235],[255,255,255],[133,133,238],[97,97,235]];
//orange
var scheme3 = [[249,166,129],[250,101,97],[164,148,141],[255,255,255],[162,148,141],[164,148,141]];
//green
var scheme4 = [[187,238,173],[118,187,128],[255,189,173],[255,255,255],[186,186,186],[99,136,104]];
//yellow
var scheme5 = [[255,222,107],[255,180,107],[255,128,73],[255,255,255],[248,157,117],[245,105,105]];

var schemes = [scheme2,scheme3,scheme4,scheme5];


function drawMonster(mX,mY,faceWidth,faceHeight,eyeNum,hornSize,blueColor,monsterHeight,colorScheme,face){

  push();
  var monsterWidth = monsterHeight*1.92;

  translate(mX,mY);

  if(face == 1){
  drawFace1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
}else{

  drawFace2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
}
  var eyeSize = monsterWidth*0.066;
  drawEyes(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,white,colorScheme[2]);
  drawHorns1(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
  if(face == 1){
  drawNose1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
}
  else{
  drawNose2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);

}
  if(face==1){
  drawMouth(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
}

pop();
}

function drawFace1(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);
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

}

function drawFace2(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);
  //face
  beginShape();
  //lefttop1
  vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.25-(faceHeight));
  //lefttop2
  vertex(monsterWidth*0.4-(faceWidth),monsterHeight*0.1-(faceHeight));
  //righttop1
  vertex(monsterWidth*0.6+(faceWidth),monsterHeight*0.1-(faceHeight));
  //righttop2
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.25-(faceHeight));
  //right
  vertex(monsterWidth*0.69+(faceWidth),monsterHeight*0.5+(faceHeight));
  //bottomright
  vertex(monsterWidth*0.6+(faceWidth),monsterHeight*0.8+(faceHeight));
  //bottomleft
  vertex(monsterWidth*0.4-(faceWidth),monsterHeight*0.8+(faceHeight));
  //left
  vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.5+(faceHeight));

  endShape();



}

function drawEyes(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,color1,color2){

  //draw eyes
  //first 2
  drawEye(monsterWidth*0.35-faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2);
  drawEye(monsterWidth*0.65+faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2);
  //second 2
  if(eyeNum>=2){
  drawEye(monsterWidth*0.42-(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2);
  drawEye(monsterWidth*0.58+(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2);
  }
  //third 2
  if(eyeNum>=3){
  drawEye(monsterWidth*0.42-(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2);
  drawEye(monsterWidth*0.58+(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2);
  }


}


function drawHorns1(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

  fill(color);
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

}

function drawHorns2(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

  //horns right

  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.7+(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
  //2
  vertex(monsterWidth*0.9+(faceWidth)+hornSize,monsterHeight*0.15-(faceHeight));
  //3
  vertex(monsterWidth*1+(faceWidth)+hornSize,monsterHeight*0.35-(faceHeight));
  //4
  vertex(monsterWidth*0.95+(faceWidth)+hornSize,monsterHeight*0.5-(faceHeight));
  //5
  vertex(monsterWidth*1.05+(faceWidth)+hornSize,monsterHeight*0.38-(faceHeight));
  //6
  vertex(monsterWidth*1.08+(faceWidth)+hornSize,monsterHeight*0.18-(faceHeight));
  //7
  vertex(monsterWidth*0.92+(faceWidth)+hornSize,monsterHeight*-0.1-(faceHeight));
  //8
  vertex(monsterWidth*0.6+(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
  endShape();


  //horns left

  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.3-(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
  //2
  vertex(monsterWidth*0.1-(faceWidth)-hornSize,monsterHeight*0.15-(faceHeight));
  //3
  vertex(monsterWidth*0-(faceWidth)-hornSize,monsterHeight*0.35-(faceHeight));
  //4
  vertex(monsterWidth*0.15-(faceWidth)-hornSize,monsterHeight*0.5-(faceHeight));
  //5
  vertex(monsterWidth*0-(monsterWidth*0.05)-(faceWidth)-hornSize,monsterHeight*0.38-(faceHeight));
  //6
  vertex(monsterWidth*0-(monsterWidth*0.08)-(faceWidth)-hornSize,monsterHeight*0.18-(faceHeight));
  //7
  vertex(monsterWidth*0.08-(faceWidth)-hornSize,monsterHeight*-0.1-(faceHeight));
  //8
  vertex(monsterWidth*0.4-(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
  endShape();


}


function drawNose1(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);

  //draw nose
  var noseWidth =monsterWidth*0.16+faceWidth;
  var noseHeight = monsterWidth*0.03;
  var noseX = monsterWidth*0.5;
  var noseY = monsterHeight*0.57-faceHeight;

  ellipse(noseX,noseY,noseWidth,noseHeight/2);
  ellipse(noseX,noseY+noseHeight/4,noseWidth/4,noseHeight);

}


function drawNose2(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);
  //draw nose
  var noseX1 = monsterWidth*0.4-(faceWidth);
  var noseY1 = monsterHeight*0.8+(faceHeight);
  var noseX2 = monsterWidth*0.5;
  var noseY2 = monsterHeight*0.7+(faceHeight);
  var noseX3 = monsterWidth*0.6+(faceWidth);
  var noseY3 = monsterHeight*0.8+(faceHeight);

  triangle(noseX1,noseY1,noseX2,noseY2,noseX3,noseY3);

}

function drawMouth(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

fill(color);
  //draw mouth
  var mouthWidth = (monsterWidth*0.23)+(faceWidth*2);
  var mouthHeight = (monsterHeight*0.1)+(faceHeight);
  var mouthX = monsterWidth*0.5;
  var mouthY = (monsterHeight*0.75)+(faceHeight/2);
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

}

function drawM2(mX,mY,faceWidth,faceHeight,eyeNum,hornSize,addColor,monsterHeight){

  push();




  var monsterWidth = monsterHeight*1.92;



  translate(mX,mY);

  var faceColor = [166,166+addColor,243];
  var white = [255,255,255];
  var blue = [97,97,235];
  var noseColor = [133,133,238+addColor];
  var mouthColor = [97,97,235+addColor];

  //faceWidth = 5;

rectMode(CORNER);
  fill(white);
  //rect(0,0,monsterWidth,monsterHeight);

fill(faceColor);
//face
beginShape();
//lefttop1
vertex(monsterWidth*0.25-(faceWidth),monsterHeight*0.25-(faceHeight));
//lefttop2
vertex(monsterWidth*0.35-(faceWidth),monsterHeight*0.1-(faceHeight));
//righttop1
vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.1-(faceHeight));
//righttop2
vertex(monsterWidth*0.75+(faceWidth),monsterHeight*0.25-(faceHeight));
//right
vertex(monsterWidth*0.74+(faceWidth),monsterHeight*0.5+(faceHeight));
//bottomright
vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.9+(faceHeight));
//bottomleft
vertex(monsterWidth*0.35-(faceWidth),monsterHeight*0.9+(faceHeight));
//left
vertex(monsterWidth*0.26-(faceWidth),monsterHeight*0.5+(faceHeight));

endShape();

fill(white);
//draw nose
var noseX1 = monsterWidth*0.35-(faceWidth);
var noseY1 = monsterHeight*0.9+(faceHeight);
var noseX2 = monsterWidth*0.5;
var noseY2 = monsterHeight*0.8+(faceHeight);
var noseX3 = monsterWidth*0.65+(faceWidth);
var noseY3 = monsterHeight*0.9+(faceHeight);

triangle(noseX1,noseY1,noseX2,noseY2,noseX3,noseY3);



var eyeSize = monsterWidth*0.075;
//draw eyes
//first 3
drawEye(monsterWidth*0.5,monsterHeight*0.35-faceHeight,eyeSize,white,blue);
drawEye(monsterWidth*0.35-(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,white,blue);
drawEye(monsterWidth*0.65+(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,white,blue);
//second 3
if(eyeNum>=2){
drawEye(monsterWidth*0.38-(faceWidth*0.5),monsterHeight*0.32-(faceHeight),eyeSize,white,blue);
drawEye(monsterWidth*0.62+(faceWidth*0.5),monsterHeight*0.32-(faceHeight),eyeSize,white,blue);
}
//third 3
if(eyeNum>=3){
drawEye(monsterWidth*0.5,monsterHeight*0.6-faceHeight,eyeSize,white,blue);
  drawEye(monsterWidth*0.5,monsterHeight*0.2-faceHeight,eyeSize,white,blue);
}


//horns right

fill(blue);
beginShape();
//1
vertex(monsterWidth*0.7+(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
//2
vertex(monsterWidth*0.9+(faceWidth)+hornSize,monsterHeight*0.15-(faceHeight));
//3
vertex(monsterWidth*1+(faceWidth)+hornSize,monsterHeight*0.35-(faceHeight));
//4
vertex(monsterWidth*0.95+(faceWidth)+hornSize,monsterHeight*0.5-(faceHeight));
//5
vertex(monsterWidth*1.05+(faceWidth)+hornSize,monsterHeight*0.38-(faceHeight));
//6
vertex(monsterWidth*1.08+(faceWidth)+hornSize,monsterHeight*0.18-(faceHeight));
//7
vertex(monsterWidth*0.92+(faceWidth)+hornSize,monsterHeight*-0.1-(faceHeight));
//8
vertex(monsterWidth*0.6+(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
endShape();


//horns left

fill(blue);
beginShape();
//1
vertex(monsterWidth*0.3-(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
//2
vertex(monsterWidth*0.1-(faceWidth)-hornSize,monsterHeight*0.15-(faceHeight));
//3
vertex(monsterWidth*0-(faceWidth)-hornSize,monsterHeight*0.35-(faceHeight));
//4
vertex(monsterWidth*0.15-(faceWidth)-hornSize,monsterHeight*0.5-(faceHeight));
//5
vertex(monsterWidth*0-(monsterWidth*0.05)-(faceWidth)-hornSize,monsterHeight*0.38-(faceHeight));
//6
vertex(monsterWidth*0-(monsterWidth*0.08)-(faceWidth)-hornSize,monsterHeight*0.18-(faceHeight));
//7
vertex(monsterWidth*0.08-(faceWidth)-hornSize,monsterHeight*-0.1-(faceHeight));
//8
vertex(monsterWidth*0.4-(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
endShape();





pop();

}





function drawEye(x,y,size,color1,color2){

  mouseXPos = map(mouseX,0,width,-size/7,size/7);
  mouseYPos = map(mouseY,0,height,-size/7,size/7);

fill(color1);
ellipse(x,y,size,size);
fill(color2);
ellipse(x+mouseXPos,y+mouseYPos,size*0.6,size*0.6);

}



function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();

  var cols = 5;
  var rows = 3;

  var w = canvasWidth / cols;
  var h = canvasHeight / rows;
  for(var row=0; row<rows; row++) {
    for(var col=0; col<cols; col++) {
      var x = w*col;
      var y = h*row;
      randomNum = focusedRandom(0,100);

      scheme = schemes[Math.floor(focusedRandom(0,schemes.length))];
      fill(scheme[0]);
      rect(x,y,w,h);

     var faceWidth = focusedRandom(-(h/6.66),-(h/20));
     var faceHeight = focusedRandom(-(h/16.66),(h/16.66));
     var eye_value = Math.floor(focusedRandom(1,4));
     var hornSize = focusedRandom(-(h/5),(h/20));
     var colorChange = focusedRandom(-50,0);
     var face = Math.floor(focusedRandom(1,3));

     drawMonster(x-(w/3),y,faceWidth,faceHeight,eye_value,hornSize,colorChange,h,scheme,face);
   }
 }


}

function mouseClicked(){
  changeRandomSeed();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
