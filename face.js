
function Face(){

  //draws a monster at a specified position, with variables for
  //randomization
   this.drawMonster = function(mX,mY,faceWidth,faceHeight,eyeNum,mouthType,noseType,hornSize,hornType,monsterHeight,colorScheme,face){
 print("after" + colorScheme);
  push();
  var monsterWidth = monsterHeight*1.92;

  translate(mX,mY);

  //need to draw the teeth for the anteater monster first!
  if(face == 4){
  this.drawTeeth(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[3]);
  }

  //determining type of face
  if(face == 1){
    this.drawFace1(monsterWidth,monsterHeight,faceWidth,faceHeight,(colorScheme[1]));
  }
  else if(face == 2){
    this.drawFace2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
  }
  else if(face == 3){
    this.drawFace3(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
  }
  else if(face == 4){
    this.drawFace4(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[1]);
  }
  else{
    this.drawFace5(monsterWidth,monsterHeight,faceWidth,faceHeight,(colorScheme[1]));
  }



  //eyes are always the same size
    var eyeSize = monsterWidth*(0.066);
    this.drawEyes(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,white,colorScheme[2],mX,mY);

  // face 3 always has spike horns
    if(face == 3){
      this.drawHorns2(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
    }
  //normal faces either have normal or spike horns
    else if(face!=5){
      if(hornType == 1){
        this.drawHorns1(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
      }
      else{
        this.drawHorns2(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
      }
    }
    //face 5 has flat horns
  else{
      this.drawHorns3(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,colorScheme[3]);
  }

  // face 1 and 3 either have a dog or spike nose
    if(face==1 || face == 3){
      if(noseType == 1){
      this.drawNose1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
    }
    else{
        this.drawNose3(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
    }
  }
  // face 2 always has a nose on the bottom
  else if(face==2){
    this.drawNose2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
  }
  // face 5 either has a dog or polygonal nose
  else if (face == 5){
    if(noseType == 1){
      this.drawNose4(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
    }
    else{
      this.drawNose1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[4]);
    }
  }

  // face 1 and 3 have an ellipse mouth or a triangle mouth
    if(face== 1 || face == 3){
      if(mouthType == 1){
    this.drawMouth1(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
    }
    else{
    this.drawMouth2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
    }

  }

  //face 5 either has a triangle mouth or a tooth mouth
  if(face==5){
    if(mouthType == 1){
    this.drawMouth3(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[3],colorScheme[4]);
    }
    else{
    this.drawMouth2(monsterWidth,monsterHeight,faceWidth,faceHeight,colorScheme[5]);
    }
  }
  
  pop();

  }

  //faceType 1: Polygonal, weighted towards bottom
  this.drawFace1 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //faceType 2: similar to a deer
  this.drawFace2 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //faceType 3: Similar to an ogre
  this.drawFace3 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //faceType 4: looks like an evil pacman / anteater
  this.drawFace4 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //faceType 5: looks like a diamond
  this.drawFace5 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

    fill(color);
    //face
    beginShape();
    //lefttop
    vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.3-(faceHeight));
    //top
    vertex(monsterWidth*0.5,monsterHeight*0.15-(faceHeight));
    //righttop
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.3-(faceHeight));
    //rightbottom
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.7+(faceHeight));
    //bottom
    vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
    //leftbottom
    vertex(monsterWidth*0.3-(faceWidth),monsterHeight*0.7+(faceHeight));

    endShape();

    //shadow
    fill(shadow);
    beginShape();
    //top
    vertex(monsterWidth*0.5,monsterHeight*0.15-(faceHeight));
    //righttop
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.3-(faceHeight));
    //rightbottom
    vertex(monsterWidth*0.7+(faceWidth),monsterHeight*0.7+(faceHeight));
    //bottom
    vertex(monsterWidth*0.5,monsterHeight*0.9+(faceHeight));
    //leftbottom
    vertex(monsterWidth*0.65+(faceWidth),monsterHeight*0.7+(faceHeight));
    //lefttop
    vertex(monsterWidth*0.64+(faceWidth),monsterHeight*0.3-(faceHeight));
    endShape();

  }

  //method that controls getting the correct positions for eyes and
  //making sure the correct amount of eyes is displayed
  this.drawEyes = function(monsterWidth,faceWidth,monsterHeight,faceHeight,eyeSize,eyeNum,color1,color2,x,y){

    //draw eyes
    //one eye
    if(eyeNum==1){
    this.drawEye(monsterWidth*0.5,monsterHeight*0.35-faceHeight,eyeSize,color1,color2,x,y);
    return;
    }
    //2 eyes
    if(eyeNum>=2){
    this.drawEye(monsterWidth*0.35-faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2,x,y);
    this.drawEye(monsterWidth*0.65+faceWidth,monsterHeight*0.4-faceHeight,eyeSize,color1,color2,x,y);
    }
    //4 eyes
    if(eyeNum>=3){
    this.drawEye(monsterWidth*0.42-(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2,x,y);
    this.drawEye(monsterWidth*0.58+(faceWidth*0.5),monsterHeight*0.35-(faceHeight),eyeSize,color1,color2,x,y);
    }
    //6 eyes
    if(eyeNum>=4){
    this.drawEye(monsterWidth*0.42-(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2,x,y);
    this.drawEye(monsterWidth*0.58+(faceWidth*0.6),monsterHeight*0.45-(faceHeight),eyeSize,color1,color2,x,y);
    }

  }

  //hornType1: normal horns
  this.drawHorns1 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

    //right horn
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

    //shadow right horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.58+(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
    //2
    vertex(monsterWidth*0.65+(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
    //3
    vertex(monsterWidth*0.8+(faceWidth)+hornSize,monsterHeight*0.25-(faceHeight));
    //4
    vertex(monsterWidth*0.82+(faceWidth)+hornSize,monsterHeight*0.08-(faceHeight));
    //5
    vertex(monsterWidth*0.78+(faceWidth)+hornSize,monsterHeight*0.2-(faceHeight));
    //6
    vertex(monsterWidth*0.64+(faceWidth*0.4),monsterHeight*0.25-(faceHeight));
    endShape();

    //left horn
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

    //shadow left horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.42-(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
    //2
    vertex(monsterWidth*0.35-(faceWidth*0.8),monsterHeight*0.3-(faceHeight));
    //3
    vertex(monsterWidth*0.2-(faceWidth)-hornSize,monsterHeight*0.25-(faceHeight));
    //4
    vertex(monsterWidth*0.18-(faceWidth)-hornSize,monsterHeight*0.08-(faceHeight));
    //5
    vertex(monsterWidth*0.22-(faceWidth)-hornSize,monsterHeight*0.2-(faceHeight));
    //6
    vertex(monsterWidth*0.36-(faceWidth*0.4),monsterHeight*0.25-(faceHeight));
    endShape();

  }

  //hornType 2: spikey
  this.drawHorns2 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

    //right horn
    fill(color);
    beginShape();
    //1
    vertex(monsterWidth*0.65+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.72+(faceWidth*0.5)+hornSize,monsterHeight*0.12-(faceHeight));
    //3
    vertex(monsterWidth*0.58+(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
    endShape();

    //shadow right horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.65+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.72+(faceWidth*0.5)+hornSize,monsterHeight*0.12-(faceHeight));
    //3
    vertex(monsterWidth*0.6+(faceWidth*0.4),monsterHeight*0.24-(faceHeight));
    endShape();

    //left horn
    fill(color);
    beginShape();
    //1
    vertex(monsterWidth*0.35-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.28-(faceWidth*0.5)-hornSize,monsterHeight*0.12-(faceHeight));
    //3
    vertex(monsterWidth*0.42-(faceWidth*0.4),monsterHeight*0.2-(faceHeight));
    endShape();

    //shadow left horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.35-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.28-(faceWidth*0.5)-hornSize,monsterHeight*0.12-(faceHeight));
    //3
    vertex(monsterWidth*0.4-(faceWidth*0.4),monsterHeight*0.24-(faceHeight));
    endShape();

  }

  //hornType 3: flat horns
  this.drawHorns3 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,hornSize,color){

    //right horn
    fill(color);
    beginShape();
    //1
    vertex(monsterWidth*0.68+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.67+(faceWidth*0.75),monsterHeight*0.2-(faceHeight));
    //3
    vertex(monsterWidth*0.63+(faceWidth*0.75),monsterHeight*0.14-(faceHeight));
    //4
    vertex(monsterWidth*0.58+(faceWidth*0.75),monsterHeight*0.19-(faceHeight));
    endShape();

    //shadow right horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.68+(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.67+(faceWidth*0.75),monsterHeight*0.2-(faceHeight));
    //3
    vertex(monsterWidth*0.62+(faceWidth*0.75),monsterHeight*0.23-(faceHeight))
    endShape();

    //left horn
    fill(color);
    beginShape();
    //1
    vertex(monsterWidth*0.32-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.33-(faceWidth*0.75),monsterHeight*0.2-(faceHeight));
    //3
    vertex(monsterWidth*0.37-(faceWidth*0.75),monsterHeight*0.14-(faceHeight));
    //4
    vertex(monsterWidth*0.42-(faceWidth*0.75),monsterHeight*0.19-(faceHeight));
    endShape();

    //shadow left horn
    fill(shadow);
    beginShape();
    //1
    vertex(monsterWidth*0.32-(faceWidth*0.75),monsterHeight*0.3-(faceHeight));
    //2
    vertex(monsterWidth*0.33-(faceWidth*0.75),monsterHeight*0.2-(faceHeight));
    //3
    vertex(monsterWidth*0.38-(faceWidth*0.75),monsterHeight*0.23-(faceHeight));
    endShape();

  }


  //nose type 1: like a dog nose
  this.drawNose1 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

    fill(color);
    //draw nose
    var noseWidth =monsterWidth*0.16+faceWidth;
    var noseHeight = monsterWidth*0.03;
    var noseX = monsterWidth*0.5;
    var noseY = monsterHeight*0.57-faceHeight;

    ellipse(noseX,noseY,noseWidth,noseHeight/2);
    ellipse(noseX,noseY+noseHeight/4,noseWidth/4,noseHeight);

  }

  //nose type 2: triangle on the bottom of the face
  this.drawNose2 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //nose type 3: triangle
  this.drawNose3 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  // nose type 4: polygon thing
  this.drawNose4 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

    fill(color);
    //draw nose

    beginShape()

    //1
    vertex(monsterWidth*0.43-(faceWidth/2),monsterHeight*0.6+(faceHeight));
    //2
    vertex(monsterWidth*0.57+(faceWidth/2),monsterHeight*0.6+(faceHeight));
    //3
    vertex(monsterWidth*0.55+(faceWidth/2),monsterHeight*0.64+(faceHeight));
    //4
    vertex(monsterWidth*0.45-(faceWidth/2),monsterHeight*0.64+(faceHeight));

    endShape();

  }

  // mouth type 1: open surprised mouth. Also draws a small tooth
  this.drawMouth1 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //mouth type 2: upside down triangle mouth
  this.drawMouth2 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color){

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

  //mouth type 3: mouth that has 2 big teeth
  this.drawMouth3 = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color1,color2){

  //left tooth
  fill(color1);
    //draw mouth
    var toothX1 = monsterWidth*0.43-(faceWidth/2);
    var toothY1 = monsterHeight*0.8+(faceHeight);
    var toothX2 = monsterWidth*0.45-(faceWidth/2);
    var toothY2 = monsterHeight*0.65+(faceHeight);
    var toothX3 = monsterWidth*0.5;
    var toothY3 = monsterHeight*0.8+(faceHeight);

    triangle(toothX1,toothY1,toothX2,toothY2,toothX3,toothY3);

  //right tooth
    fill(color1);
      //draw mouth
      var toothX1 = monsterWidth*0.57+(faceWidth/2);
      var toothY1 = monsterHeight*0.8+(faceHeight);
      var toothX2 = monsterWidth*0.55+(faceWidth/2);
      var toothY2 = monsterHeight*0.65+(faceHeight);
      var toothX3 = monsterWidth*0.5;
      var toothY3 = monsterHeight*0.8+(faceHeight);

      triangle(toothX1,toothY1,toothX2,toothY2,toothX3,toothY3);

      //quad for lip
      fill(color2);
      quad(monsterWidth*0.43-(faceWidth/2),monsterHeight*0.8+(faceHeight),monsterWidth*0.57+(faceWidth/2),monsterHeight*0.8+(faceHeight),
      monsterWidth*0.57+(faceWidth/2),monsterHeight*0.82+(faceHeight),monsterWidth*0.43-(faceWidth/2),monsterHeight*0.82+(faceHeight))

  }

  //draws the set of 6 teeth required for faceType 4.
  this.drawTeeth = function(monsterWidth,monsterHeight,faceWidth,faceHeight,color1){

    this.drawToothLeft(monsterWidth,monsterWidth*0.42-(faceWidth),monsterHeight*0.55+faceHeight,color1);
    this.drawToothRight(monsterWidth,monsterWidth*0.58+(faceWidth),monsterHeight*0.55+faceHeight,color1);

    this.drawToothLeft(monsterWidth,monsterWidth*0.42-(faceWidth),monsterHeight*0.63+faceHeight,color1);
    this.drawToothRight(monsterWidth,monsterWidth*0.58+(faceWidth),monsterHeight*0.63+faceHeight,color1);

    this.drawToothLeft(monsterWidth,monsterWidth*0.42-(faceWidth),monsterHeight*0.7+faceHeight,color1);
    this.drawToothRight(monsterWidth,monsterWidth*0.58+(faceWidth),monsterHeight*0.7+faceHeight,color1);

  }

  //draws a single left tooth
  this.drawToothLeft = function(monsterWidth,x,y,color1){
  var diff = monsterWidth*0.015
  fill(color1);
  triangle(x,y,x-diff*3,y-diff,x-diff*3,y+diff);

  }

  //draws a single right tooth
  this.drawToothRight = function(monsterWidth,x,y,color1){
  var diff = monsterWidth*0.015
  fill(color1);
  triangle(x,y,x+diff*3,y-diff,x+diff*3,y+diff);

  }

  //draws a single eye,
  //looks at mouse using x and y coords
  this.drawEye = function(x,y,size,color1,color2,x2,y2){

    mouseXPos = map(mouseX-x2+x,0,width,-size/7,size/7);
    mouseYPos = map(mouseY-y2+y,0,height,-size/7,size/7);

  fill(color1);
  ellipse(x,y,size,size);
  fill(color2);
  ellipse(x+mouseXPos,y+mouseYPos,size*0.6,size*0.6);

  }
}
