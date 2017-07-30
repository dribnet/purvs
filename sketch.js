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
var shadow = [0,25];
var shadowLight = [255,65];

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


function drawMonster(mX,mY,faceWidth,faceHeight,eyeNum,mouthType,noseType,hornSize,hornType,colorChange,monsterHeight,colorScheme,face){

  push();
  var monsterWidth = monsterHeight*1.92;

  translate(mX,mY);


  if(face == 4){
  drawTeeth(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[3]);
  }

  if(face == 1){
  drawFace1(monsterWidth,monsterHeight,faceWidth,faceHeight,(colorScheme[1]),colorScheme[2]);
}else if(face == 2){

  drawFace2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
}
else if(face == 3){

  drawFace3(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
}
else{
  drawFace4(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
}
  var eyeSize = monsterWidth*(0.066);
  drawEyes(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,white,colorScheme[2],mX,mY);
  if(face == 3){
    drawHorns3(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
  }
  else if(face == 4){
    if(hornType == 1){
      drawHorns1(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
    }
    else{
      drawHorns3(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
    }
  }
  else{
  drawHorns1(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
}



  if(face==1 || face == 3){
    if(noseType == 1){
    drawNose1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
  }
  else{
      drawNose3(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
  }
}
else if(face==2){
  drawNose2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
}





  if(face== 1 || face == 3){
    if(mouthType == 1){
  drawMouth1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
  }
  else{
  drawMouth2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
  }

}



pop();
}


function modifyColor(c,colorChange){

  var c2 = red(c);
  c2+=colorChange;

  return (c);

}



function drawFace1(monsterWidth,monsterHeight,faceWidth,faceHeight,color,color2){

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


//shadow

  fill(shadow);
  beginShape();
  //top
  vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
  //righttop
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.35-(faceHeight));
  //rightbottom
  vertex(monsterWidth*0.75+(faceWidth),monsterHeight*0.7+(faceHeight));
  //bottom
  vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
  //leftbottom
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.7+(faceHeight));
  //lefttop
  vertex(monsterWidth*0.64+(faceWidth),monsterHeight*0.35-(faceHeight));
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


  //shadow

    fill(shadow);
    beginShape();
    //top
    vertex(monsterWidth*0.55+(faceWidth),monsterHeight*0.1-(faceHeight));
    //rightTop
    vertex(monsterWidth*0.6+(faceWidth),monsterHeight*0.1-(faceHeight));
    //righttop2
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.25-(faceHeight));
    //right
    vertex(monsterWidth*0.69+(faceWidth),monsterHeight*0.5+(faceHeight));
    //bottomright
    vertex(monsterWidth*0.6+(faceWidth),monsterHeight*0.8+(faceHeight));
    //bottom
    vertex(monsterWidth*0.55+(faceWidth),monsterHeight*0.8+(faceHeight));
    //right
    vertex(monsterWidth*0.64+(faceWidth),monsterHeight*0.5+(faceHeight));
    //righttop2
    vertex(monsterWidth*0.64+(faceWidth),monsterHeight*0.25-(faceHeight));


    endShape();


}

function drawFace3(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);
  //face
  beginShape();
  //lefttop
  vertex(monsterWidth*0.35-(faceWidth),monsterHeight*0.2-(faceHeight));
  //top
  vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
  //righttop
  vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.2-(faceHeight));
  //right
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.5);
  //rightbottom
  vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.8+(faceHeight));
  //bottom
  vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
  //leftbottom
  vertex(monsterWidth*0.35-(faceWidth),monsterHeight*0.8+(faceHeight));
  //left
  vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.5);

  endShape();


  //shadow

    fill(shadow);
    beginShape();

    //top
    vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
    //righttop
    vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.2-(faceHeight));
    //right
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.5);
    //rightbottom
    vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.8+(faceHeight));
    //bottom
    vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
    //rightbottom
    vertex(monsterWidth*0.62+(faceWidth),monsterHeight*0.8+(faceHeight));
    //right
    vertex(monsterWidth*0.67+(faceWidth),monsterHeight*0.5);
    //righttop
    vertex(monsterWidth*0.62+(faceWidth),monsterHeight*0.2-(faceHeight));

    endShape();
}


function drawFace4(monsterWidth,monsterHeight,faceWidth,faceHeight,color,color2){

  fill(color);
  //face
  beginShape();
  //lefttop
  vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.3-(faceHeight));
  //top
  vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
  //righttop
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.3-(faceHeight));
  //farrightmid
  vertex(monsterWidth*0.75+(faceWidth),monsterHeight*0.6+(faceHeight));
  //bottomright
  vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.8+(faceHeight));
  //rightmid
  vertex(monsterWidth*0.6+(faceWidth),monsterHeight*0.55+(faceHeight));
  //middle
  vertex(monsterWidth*0.5,monsterHeight*0.45+(faceHeight));
  //leftmid
  vertex(monsterWidth*0.4-(faceWidth),monsterHeight*0.55+(faceHeight));
  //bottomleft
  vertex(monsterWidth*0.35-(faceWidth),monsterHeight*0.8+(faceHeight));
  //farleftmid
  vertex(monsterWidth*0.25-(faceWidth),monsterHeight*0.6+(faceHeight));

  endShape();


//shadow

  fill(shadow);
  beginShape();
  //top
  vertex(monsterWidth*0.5,monsterHeight*0.1-(faceHeight));
  //righttop
  vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.3-(faceHeight));
  //rightbottom
  vertex(monsterWidth*0.75+(faceWidth),monsterHeight*0.6+(faceHeight));
  //bottom
  vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.8+(faceHeight));
  //leftbottom
  vertex(monsterWidth*0.67+(faceWidth),monsterHeight*0.6+(faceHeight));
  //lefttop
  vertex(monsterWidth*0.64+(faceWidth),monsterHeight*0.35-(faceHeight));
  endShape();



}



function drawEyes(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,color1,color2,x,y){

  if(eyeNum==1){
  drawEye(monsterWidth*0.5,monsterHeight*0.35-faceHeight,eyeSize,color1,color2,x,y);
  return;
  }
  //draw eyes
  //first 2
  if(eyeNum>=2){
  drawEye(monsterWidth*0.35-faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2,x,y);
  drawEye(monsterWidth*0.65+faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2,x,y);
  }
  //second 2
  if(eyeNum>=3){
  drawEye(monsterWidth*0.42-(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2,x,y);
  drawEye(monsterWidth*0.58+(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2,x,y);
  }
  //third 2
  if(eyeNum>=4){
  drawEye(monsterWidth*0.42-(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2,x,y);
  drawEye(monsterWidth*0.58+(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2,x,y);
  }

  print("real" + monsterHeight);

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

  //shadow
  fill(shadow);
  beginShape();
  //7
  vertex(monsterWidth*0.58+(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
  //1
  vertex(monsterWidth*0.65+(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.8+(faceWidth)+hornSize,monsterHeight*0.25-(faceHeight));
  //3
  vertex(monsterWidth*0.82+(faceWidth)+hornSize,monsterHeight*0.08-(faceHeight));
  //4
  vertex(monsterWidth*0.78+(faceWidth)+hornSize,monsterHeight*0.2-(faceHeight));
  //7
  vertex(monsterWidth*0.64+(faceWidth*0.4),monsterHeight*0.25-(faceHeight));
  endShape();


  fill(color);
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

  //shadow
  fill(shadow);
  beginShape();
  //7
  vertex(monsterWidth*0.42-(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
  //1
  vertex(monsterWidth*0.35-(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.2-(faceWidth)-hornSize,monsterHeight*0.25-(faceHeight));
  //3
  vertex(monsterWidth*0.18-(faceWidth)-hornSize,monsterHeight*0.08-(faceHeight));
  //4
  vertex(monsterWidth*0.22-(faceWidth)-hornSize,monsterHeight*0.2-(faceHeight));
  //7
  vertex(monsterWidth*0.36-(faceWidth*0.4),monsterHeight*0.25-(faceHeight));
  endShape();

}

function drawHorns2(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

  //horns right

  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.6+(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
  //2
  vertex(monsterWidth*0.7+(faceWidth)+hornSize,monsterHeight*0.15-(faceHeight));
  //3
  vertex(monsterWidth*0.8+(faceWidth)+hornSize,monsterHeight*0.25-(faceHeight));
  //4
  vertex(monsterWidth*0.82+(faceWidth)+hornSize,monsterHeight*0.4-(faceHeight));
  //5
  vertex(monsterWidth*0.84+(faceWidth)+hornSize,monsterHeight*0.28-(faceHeight));
  //6
  vertex(monsterWidth*0.78+(faceWidth)+hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.7+(faceWidth)+hornSize,monsterHeight*0.01-(faceHeight));
  //8
  vertex(monsterWidth*0.53+(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
  endShape();


  //horns left

  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.47-(faceWidth*0.8),monsterHeight*0.2-(faceHeight));
  //2
  vertex(monsterWidth*0.3-(faceWidth)-hornSize,monsterHeight*0.15-(faceHeight));
  //3
  vertex(monsterWidth*0.2-(faceWidth)-hornSize,monsterHeight*0.25-(faceHeight));
  //4
  vertex(monsterWidth*0.18-(faceWidth)-hornSize,monsterHeight*0.4-(faceHeight));
  //5
  vertex(monsterWidth*0.16-(monsterWidth*0.05)-(faceWidth)-hornSize,monsterHeight*0.28-(faceHeight));
  //6
  vertex(monsterWidth*0.22-(monsterWidth*0.08)-(faceWidth)-hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.3-(faceWidth)-hornSize,monsterHeight*-0.01-(faceHeight));
  //8
  vertex(monsterWidth*0.4-(faceWidth*0.7),monsterHeight*0.1-(faceHeight));
  endShape();



}

function drawHorns3(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.65+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.72+(faceWidth*0.5)+hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.58+(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
  endShape();

  //shadow
  fill(shadow);
  beginShape();
  //1
  vertex(monsterWidth*0.65+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.72+(faceWidth*0.5)+hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.6+(faceWidth*0.4),monsterHeight*0.24-(faceHeight));
  endShape();


  fill(color);
  beginShape();
  //1
  vertex(monsterWidth*0.35-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.28-(faceWidth*0.5)-hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.42-(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
  endShape();

  //shadow
  fill(shadow);
  beginShape();
  //1
  vertex(monsterWidth*0.35-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
  //2
  vertex(monsterWidth*0.28-(faceWidth*0.5)-hornSize,monsterHeight*0.12-(faceHeight));
  //7
  vertex(monsterWidth*0.4-(faceWidth*0.4),monsterHeight*0.24-(faceHeight));
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

function drawNose3(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

  fill(color);
  //draw nose
  var noseX1 = monsterWidth*0.45-(faceWidth/2);
  var noseY1 = monsterHeight*0.6+(faceHeight/2);
  var noseX2 = monsterWidth*0.5;
  var noseY2 = monsterHeight*0.65+(faceHeight/2);
  var noseX3 = monsterWidth*0.55+(faceWidth/2);
  var noseY3 = monsterHeight*0.6+(faceHeight/2);

  triangle(noseX1,noseY1,noseX2,noseY2,noseX3,noseY3);

}





function drawMouth1(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

function drawMouth2(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

fill(color);
  //draw mouth
  var noseX1 = monsterWidth*0.4-(faceWidth);
  var noseY1 = monsterHeight*0.8+(faceHeight);
  var noseX2 = monsterWidth*0.5;
  var noseY2 = monsterHeight*0.75+(faceHeight);
  var noseX3 = monsterWidth*0.6+(faceWidth);
  var noseY3 = monsterHeight*0.8+(faceHeight);

  triangle(noseX1,noseY1,noseX2,noseY2,noseX3,noseY3);



}

function drawTeeth(monsterWidth,monsterHeight,faceWidth,faceHeight,color1){

  print(monsterHeight);

  drawToothLeft(monsterWidth*0.42-(faceWidth),monsterHeight*0.55+faceHeight,color1);
  drawToothRight(monsterWidth*0.58+(faceWidth),monsterHeight*0.55+faceHeight,color1);

  drawToothLeft(monsterWidth*0.42-(faceWidth),monsterHeight*0.63+faceHeight,color1);
  drawToothRight(monsterWidth*0.58+(faceWidth),monsterHeight*0.63+faceHeight,color1);

  drawToothLeft(monsterWidth*0.42-(faceWidth),monsterHeight*0.7+faceHeight,color1);
  drawToothRight(monsterWidth*0.58+(faceWidth),monsterHeight*0.7+faceHeight,color1);


}

function drawToothLeft(x,y,color1){

fill(color1);
triangle(x,y,x-15,y-5,x-15,y+5);

}

function drawToothRight(x,y,color1){

fill(color1);
triangle(x,y,x+15,y-5,x+15,y+5);

}


function drawEye(x,y,size,color1,color2,x2,y2){

  mouseXPos = map(mouseX-x2+x,0,width,-size/7,size/7);
  mouseYPos = map(mouseY-y2+y,0,height,-size/7,size/7);

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

      backgroundShape(x,y,w,h,shadowLight);


/*
      if(Math.floor(focusedRandom(1,2))==1){
      var strokeSize = 8;
      stroke(shadowLight);
      noFill();
      strokeWeight(strokeSize);
      rect(x+strokeSize/2,y+strokeSize/2,w-strokeSize,h-strokeSize);
      noStroke();
      }
*/


     var faceWidth = focusedRandom(-(h/6.66),-(h/20));
     var faceHeight = focusedRandom(-(h/16.66),(h/16.66));
     var eye_value = getEyeNum();
     var mouthType = Math.floor(focusedRandom(1,3));
     var noseType = Math.floor(focusedRandom(1,3));
     var hornSize = focusedRandom(-(h/5),(h/20));
     var hornType = Math.floor(focusedRandom(1,3));
     var colorChange = focusedRandom(100,100);
     var face = Math.floor(focusedRandom(1,5));


     //var face = 4;

     drawMonster(x-(w/3),y,faceWidth,faceHeight,eye_value,mouthType,noseType,hornSize,hornType,colorChange,h,scheme,face);
   }
 }




}


function backgroundShape(x,y,w,h,color){

  var shapeType = Math.floor(focusedRandom(1,6));
  fill(color);

  rectMode(CORNER);

  var strokeSize = focusedRandom(8,12);

  rect(x+strokeSize,y+strokeSize,w-strokeSize*2,h-strokeSize*2);

/*
  if(shapeType == 1){
    triangle(x,y,x+w,y,x,y+h);
  }
  else if(shapeType == 2){
    triangle(x+w,y,x,y+h,x+w,y+h);
  }
  else if(shapeType ==3){
    triangle(x,y,x+w,y,x+w,y+h);
  }
  else if(shapeType == 4){
    triangle(x,y,x,y+h,x+w,y+h);
  }
  else if(shapeType == 5){
    //quad(x+(w/2),y,x+w,y+(h/2),x+(w/2),y+h,x,y+(h/2));

  }
  */




}

//gets a distribution of eye numbers
function getEyeNum(){

  randomNum = focusedRandom(0,100);

  if(randomNum<5){
    return 1;
  }
  else if(randomNum < 30){
return 2;
  }
  else if (randomNum < 80){
    return 3;
  }
  else{
    return 4;
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
