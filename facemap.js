/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];


// global variables for colors
var white = [255,255,255];
var lightGray = [220,220,220];
var shadow = [0,30];
var shadowLight = [255,65];

//color schemes
//KEY: background, face, pupil, horns, nose, mouth
// light blue
var scheme2 = [[191,210,251],[132,130,237],[34,28,234],[255,255,255],[83,85,227],[39,36,226]];
//orange
var scheme3 = [[255,209,48],[254,150,48],[255,81,0],[255,255,255],[249,118,67],[241,45,43]];
//green
var scheme4 = [[160,231,139],[63,161,77],[255,161,143],[255,255,255],[156,153,154],[30,84,36]];
//red
var scheme5 = [[248,130,78],[248,39,34],[129,105,95],[255,255,255],[126,102,91],[123,106,106]];

//contains all schemes
var schemes = [scheme2,scheme3,scheme4,scheme5];


var radius = 4.5;
var radius2 = 3;
var faceOffset;

function FaceMap() {
  this.faceType = 1;
  this.eyeNum = 2;
  this.noseType = 1;
  this.scheme = 1;






  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge,
   */
   this.draw = function(positions) {



    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];
    var mouth_pos = average_point(positions.top_lip);
    var face = Math.floor(map(this.faceType,0,100,1,4));
    var eyeNum = Math.floor(map(this.eyeNum,0,100,1,4));
    var noseType = Math.floor(map(this.noseType,0,100,1,3));
    var scheme = schemes[Math.floor(map(this.scheme,0,100,0,schemes.length-1))];
    print(Math.floor(map(this.scheme,0,100,0,schemes.length-1)));
    if(scheme == null){
      scheme = schemes[0];
    }

    var w = 2 * face_width;
    var h = 2.5 * half_height;
    var x = nose_pos[0]-(w*0.45);
    var y = nose_pos[1]-h/2;

    faceOffset = -(h*0.05);


    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    resetFocusedRandom(curRandomSeed);

    var data = faceData[curFaceIndex];
    var mode = faceSelector.value();

    if(millis() > lastSwapTime + millisPerSwap) {
    //  changeRandomSeed();
    }

    //var scheme = schemes[Math.floor(random(0,schemes.length))];

    noStroke();

    drawMonster(positions,x,y,w,h,face,noseType,scheme);

    //drawFaceV1(positions,h);
    //drawFace2((x*1.1),(y*0.9),w*1.1,h*1.1,color(132,130,237));

    //drawEye(eye1_pos[0],eye1_pos[1],0.8,white,scheme[2]);
    //drawEye(eye2_pos[0],eye1_pos[1],0.8,white,scheme[2]);

    drawEyes(x,y,eye1_pos[0],eye1_pos[1],eye2_pos[0],eye1_pos[1],w,h,scheme[2],eyeNum);


    drawMouth1(mouth_pos[0],mouth_pos[1],w*0.2,h*0.1,scheme[5]);


  }

  function drawMonster(positions,x,y,w,h,face,noseType,scheme){

    //determining type of face
    if(face == 1){
      drawFace1((x),(y),w,h,scheme[1]);
    }
    else if(face == 2){
      drawFace2((x*1.1),(y*0.9),w*1.1,h*1.1,scheme[1]);
    }
    else if(face == 3){
      drawFace3((x),(y),w,h,scheme[1]);
    }
    else{
      drawFace4((x),(y),w,h,scheme[1]);
    }

    if(noseType==1){
      drawNose1(positions.nose_tip[0][0],positions.nose_tip[0][1],w,h,scheme[4]);
    }
    else if(noseType==2){
      drawNose2(positions.nose_tip[0][0],positions.nose_tip[0][1],w,h,scheme[4]);
    }
    else{
      drawNose3(positions.nose_tip[0][0],positions.nose_tip[0][1],w,h,scheme[4]);
    }



  }


/*
function drawFaceV1(positions,h){

  var skip = 2;

  var numPoints = 32;

//  ellipse(0, 0, radius, radius);

  var faceCoords=getFacePoints(2,1);
  var faceShadowCoords = getFacePoints(2,2);
  var faceShadowRadius = getFacePoints(2,3);
  //var face1ShadowCoords2 = [31,3];

  noStroke();
  fill(132,130,237);
  push();
  translate(0,faceOffset);
  beginShape();
  for(var i=0;i<faceCoords.length;i++)
  {
    j = faceCoords[i];
    var circleX = radius/2* Math.cos(2 * Math.PI * j / numPoints);
    var circleY = radius/2* Math.sin(2 * Math.PI * j / numPoints);
    vertex (circleX,circleY);
  ellipse(circleX,circleY,0.2,0.2);
  }
  endShape();

  //shadow
  fill(shadow);
  beginShape();

  var counter = 0;

  for(var i=0;i<faceShadowCoords.length;i++)
  {
      j = faceShadowCoords[i];
      fill(shadow);
      fill(255,0,0);
      var circleX = (faceShadowRadius[i]/2)* Math.cos(2 * Math.PI * j / numPoints);
      var circleY = (faceShadowRadius[i]/2)* Math.sin(2 * Math.PI * j / numPoints);
      ellipse(circleX,circleY,0.2,0.2);
      vertex (circleX,circleY);
      counter++;
  }
      fill(shadow);
  endShape();
  pop();



}
*/

//faceType 1: Polygonal, weighted towards bottom
function drawFace1(x,y,faceWidth,faceHeight,color){

  push();
  translate(x,y);

  fill(color);
  //face
  beginShape();
  //lefttop
  vertex(faceWidth*0.3,faceHeight*0.35);
  //top
  vertex(faceWidth*0.5,faceHeight*0.1);
  //righttop
  vertex(faceWidth*0.7,faceHeight*0.35);
  //rightbottom
  vertex(faceWidth*0.75,faceHeight*0.7);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //leftbottom
  vertex(faceWidth*0.25,faceHeight*0.7);

  endShape();


//shadow
  fill(shadow);
  beginShape();
  //top
  vertex(faceWidth*0.5,faceHeight*0.1);
  //righttop
  vertex(faceWidth*0.7,faceHeight*0.35);
  //rightbottom
  vertex(faceWidth*0.75,faceHeight*0.7);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //leftbottom
  vertex(faceWidth*0.7,faceHeight*0.7);
  //lefttop
  vertex(faceWidth*0.64,faceHeight*0.35);
  endShape();

pop();
}

//faceType 2: similar to a deer
function drawFace2(x,y,faceWidth,faceHeight,color){

  push();
  translate(x,y);

//fill(100,50);
  fill(color);
  //face
  beginShape();
  //lefttop1
  vertex(faceWidth*0.3,faceHeight*0.25);
  //lefttop2
  vertex(faceWidth*0.4,faceHeight*0.1);
  //righttop1
  vertex(faceWidth*0.6,faceHeight*0.1);
  //righttop2
  vertex(faceWidth*0.7,faceHeight*0.25);
  //right
  vertex(faceWidth*0.69,faceHeight*0.5);
  //bottomright
  vertex(faceWidth*0.6,faceHeight*0.8);
  //bottomleft
  vertex(faceWidth*0.4,faceHeight*0.8);
  //left
  vertex(faceWidth*0.3,faceHeight*0.5);

  endShape();

  //shadow
  fill(shadow);
  beginShape();
  //top
  vertex(faceWidth*0.55,faceHeight*0.1);
  //rightTop
  vertex(faceWidth*0.6,faceHeight*0.1);
  //righttop2
  vertex(faceWidth*0.7,faceHeight*0.25);
  //right
  vertex(faceWidth*0.69,faceHeight*0.5);
  //bottomright
  vertex(faceWidth*0.6,faceHeight*0.8);
  //bottom
  vertex(faceWidth*0.55,faceHeight*0.8);
  //right
  vertex(faceWidth*0.64,faceHeight*0.5);
  //righttop2
  vertex(faceWidth*0.64,faceHeight*0.25);
  endShape();

  pop();
}

//faceType 3: Similar to an ogre
function drawFace3(x,y,faceWidth,faceHeight,color){

  push();
  translate(x,y);

  //fill(100,50);
  fill(color);
  //face
  beginShape();
  //lefttop
  vertex(faceWidth*0.35,faceHeight*0.2);
  //top
  vertex(faceWidth*0.5,faceHeight*0.1);
  //righttop
  vertex(faceWidth*0.65,faceHeight*0.2);
  //right
  vertex(faceWidth*0.7,faceHeight*0.5);
  //rightbottom
  vertex(faceWidth*0.65,faceHeight*0.8);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //leftbottom
  vertex(faceWidth*0.35,faceHeight*0.8);
  //left
  vertex(faceWidth*0.3,faceHeight*0.5);
  endShape();

  //shadow
  fill(shadow);
  beginShape();
  //top
  vertex(faceWidth*0.5,faceHeight*0.1);
  //righttop
  vertex(faceWidth*0.65,faceHeight*0.2);
  //right
  vertex(faceWidth*0.7,faceHeight*0.5);
  //rightbottom
  vertex(faceWidth*0.65,faceHeight*0.8);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //rightbottom
  vertex(faceWidth*0.62,faceHeight*0.8);
  //right
  vertex(faceWidth*0.67,faceHeight*0.5);
  //righttop
  vertex(faceWidth*0.62,faceHeight*0.2);

  endShape();

  pop();
}



//faceType 4: looks like a diamond
function drawFace4(x,y,faceWidth,faceHeight,color){

  push();
  translate(x,y);

  fill(color);
  //face
  beginShape();
  //lefttop
  vertex(faceWidth*0.3,faceHeight*0.3);
  //top
  vertex(faceWidth*0.5,faceHeight*0.15);
  //righttop
  vertex(faceWidth*0.7,faceHeight*0.3);
  //rightbottom
  vertex(faceWidth*0.7,faceHeight*0.7);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //leftbottom
  vertex(faceWidth*0.3,faceHeight*0.7);

  endShape();

  //shadow
  fill(shadow);
  beginShape();
  //top
  vertex(faceWidth*0.5,faceHeight*0.15);
  //righttop
  vertex(faceWidth*0.7,faceHeight*0.3);
  //rightbottom
  vertex(faceWidth*0.7,faceHeight*0.7);
  //bottom
  vertex(faceWidth*0.5,faceHeight*0.9);
  //leftbottom
  vertex(faceWidth*0.65,faceHeight*0.7);
  //lefttop
  vertex(faceWidth*0.64,faceHeight*0.3);
  endShape();

  pop();

}

function getFacePoints(faceType,pointsType){

switch(faceType){

  case 1:
    if(pointsType==1){
      return [3,8,13,17,24,31];
    }
    else if(pointsType==2){
      return [31,3,8,3,31,24];
    }
    else{
      return [radius,radius,radius,radius2,radius2,radius];
    }
    break;

    case 2:
      if(pointsType==1){
        return [4,8,12,20,24,28];
      }
      else if(pointsType==2){
        return [4,8,4,28,24,28];
      }
      else{
        return [radius,radius,radius2,radius2,radius,radius];
      }
      break;




}


}

//method that controls getting the correct positions for eyes and
//making sure the correct amount of eyes is displayed
function drawEyes(x,y,x2,y2,x3,y3,faceWidth,faceHeight,color,eyeNum){

//x2 = left eye
//y2 = left eye
//x3 = right eye
//y3 = right eye


  var eyeSize = faceWidth*0.1;
  var eyeDiff = faceWidth*0.05;
  var color1 = white;
  var color2 = color;

  //draw eyes
  //one eye
  if(eyeNum==1){
    push();
    translate(x,y);
  drawEye(faceWidth*0.5,faceHeight*0.35,eyeSize,color1,color2);
  pop();
  return;
  }
  //2 eyes
  if(eyeNum>=2){
  drawEye(x2,y2,eyeSize,color1,color2);
  drawEye(x3,y3,eyeSize,color1,color2);
  }
  //4 eyes
  if(eyeNum>=3){
  drawEye(x2+eyeDiff,y2-eyeDiff,eyeSize,color1,color2);
  drawEye(x3-eyeDiff,y3-eyeDiff,eyeSize,color1,color2);
  }
  //6 eyes
  if(eyeNum>=4){
  drawEye(x2+eyeDiff,y2+eyeDiff,eyeSize,color1,color2);
  drawEye(x3-eyeDiff,y3+eyeDiff,eyeSize,color1,color2);
  }



}

//draws a single eye,
//looks at mouse using x and y coords
function drawEye(x,y,size,color1,color2){

  mouseXPos = map(mouseX+x,0,width,-size/7,size/7);
  mouseYPos = map(mouseY+y,0,height,-size/7,size/7);

fill(color1);
ellipse(x,y,size,size);
fill(color2);
ellipse(x+mouseXPos,y+mouseYPos,size*0.6,size*0.6);


}

//nose type 1: like a dog nose
function drawNose1(x,y,faceWidth,faceHeight,color){
  fill(color);

  //draw nose
  var noseWidth =faceWidth*0.1;
  var noseHeight = faceHeight*0.1;
  var noseX = x;
  var noseY = y;

  ellipse(0,0-noseHeight*0.3,noseWidth,noseHeight/2);
  ellipse(0,0,noseWidth/4,noseHeight);

}

//nose type 2: triangle
function drawNose2(x,y,faceWidth,faceHeight,color){

  print ("x = " + x + "y = " + y);

  var noseDiff = faceWidth*0.05;

  push();
  translate(x,y);

  fill(color);
  //draw nose
  var noseX1 = -noseDiff;
  var noseY1 = -noseDiff;
  var noseX2 = 0;
  var noseY2 = noseDiff*0.1;
  var noseX3 = noseDiff;
  var noseY3 = -noseDiff;

  triangle(noseX1,noseY1,noseX2,noseY2,noseX3,noseY3);

  pop();

}

// nose type 3: polygon thing
function drawNose3(x,y,faceWidth,faceHeight,color){

  noseWidth = (faceWidth*0.2);
  noseHeight = (faceHeight*0.2);

  push();
  translate(x,y);

  fill(color);
  //draw nose

  beginShape()

  //1
  vertex(noseWidth*0.3,0);
  //2
  vertex(-noseWidth*0.3,0);
  //3
  vertex(-noseWidth*0.2,noseHeight*0.24);
  //4
  vertex(noseWidth*0.2,noseHeight*0.24);

  endShape();
  pop();

}


// mouth type 1: open surprised mouth. Also draws a small tooth
function drawMouth1(x,y,faceWidth,faceHeight,color){

fill(color);
  //draw mouth
  var mouthWidth = faceWidth;
  var mouthHeight = faceHeight;
  var mouthX = x;
  var mouthY = y;
  ellipse(mouthX,mouthY,mouthWidth,mouthHeight);

  //tooth 1
  fill(white);
  rectMode(CORNER);
  var toothWidth = faceWidth*0.1;
  var toothDiff = faceWidth*0.15;
  var toothX1 = (mouthX-toothDiff);
  var toothY1 = mouthY-(mouthHeight/2);
  var toothX2 = (mouthX-toothDiff*2)-toothWidth;
  var toothY2 = mouthY-(mouthHeight/2.5);
  var toothX3 = (mouthX-toothDiff*1.9)+toothWidth;
  var toothY3 = mouthY+toothWidth-(mouthHeight/2);
  triangle(toothX1,toothY1,toothX2,toothY2,toothX3,toothY3);
}





  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.faceType = settings[0];
    this.eyeNum = settings[1];
    this.noseType = settings[2];
    this.scheme = settings[3];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(3);
    properties[0] = this.faceType;
    properties[1] = this.eyeNum;
    properties[2] = this.noseType;
    properties[3] = this.scheme;
    return properties;
  }
}



// given a point, return the average
function average_point(list) {
  var sum_x = 0;
  var sum_y = 0;
  var num_points = 0;
  for(var i=0; i<list.length; i++) {
    sum_x += list[i][0];
    sum_y += list[i][1];
    num_points += 1;
  }
  return [sum_x / num_points, sum_y / num_points];
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

//gets a distribution of horn types
function getHornType(){

  randomNum = focusedRandom(0,100);

  if(randomNum<90){
    return 1;
  }
  else{
    return 2;
  }
}

//gets a distribution of face types
function getFaceType(){

  randomNum = focusedRandom(0,100);

  if(randomNum<15){
    return 1;
  }
  else if(randomNum<30){
    return 2;
  }
  else if(randomNum<50){
    return 3;
  }
  else if(randomNum<75){
    return 4;
  }
  else{
    return 5;
  }

}
