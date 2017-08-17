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
// pink
var scheme1 = [[242,58,107],[243,100,242],[243,150,242],[255,255,255],[133,133,238],[97,97,235]];
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
  this.hairColor = 50;






  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge,
   */
  this.draw = function(positions) {
      var curFaceType = map(this.faceType,0,100,1,5);

    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];
    var mouth_pos = average_point(positions.top_lip);



    var w = 2 * face_width;
    var h = 2.5 * half_height;
    var x = nose_pos[0]-w/2;
    var y = nose_pos[1]-h/2;

    faceOffset = -(h*0.05);

    //var curHairColor = map(this.hairColor, 0, 100, 200, 20);
    //fill(curHairColor);
    //var curHairLength = map(this.hairLength, 0, 100, 0, 3);
    //rect(-3, -2*curHairLength, 6, 3*curHairLength);

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
changeRandomSeed();
}

noStroke();

drawFace(positions,h);

drawEye(eye1_pos[0],eye1_pos[1],0.8,white,lightGray);
drawEye(eye2_pos[0],eye1_pos[1],0.8,white,lightGray);

drawNose1(nose_pos[0],nose_pos[1],w*0.15,h*0.15,color(83,85,227));

drawMouth1(mouth_pos[0],mouth_pos[1],w*0.2,h*0.1,color(97,97,235));


  }


function drawFace(positions,h){

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
  var noseWidth =faceWidth;
  var noseHeight = faceHeight;
  var noseX = x;
  var noseY = y;

  ellipse(noseX,noseY,noseWidth,noseHeight/2);
  ellipse(noseX,noseY+noseHeight/4,noseWidth/4,noseHeight);

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
    this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.faceType;
    properties[1] = this.hairColor;
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
