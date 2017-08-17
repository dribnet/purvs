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


function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;

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



    var w = 2 * face_width;
    var h = 2.5 * half_height;
    var x = nose_pos[0]-w/2;
    var y = nose_pos[1]-h/2;

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

var cols = 9;
var rows = 5;

drawFace(positions,h);

//var w = 1;
//var h = 1;
//var w = canvasWidth / cols;
//var h = canvasHeight / rows;
//for(var row=0; row<rows; row++) {
  //for(var col=0; col<cols; col++) {
    //var x = w*col;
    //var y = h*row;

/*
    //random color scheme is used
    scheme = schemes[Math.floor(focusedRandom(0,schemes.length))];
    fill(scheme[0]);

   //randomized variables
   var faceWidth = focusedRandom(-(h/6.66),-(h/20));
   var faceHeight = focusedRandom(-(h/16.66),(h/16.66));
   var eye_value = getEyeNum();
   var mouthType = Math.floor(focusedRandom(1,3));
   var noseType = Math.floor(focusedRandom(1,3));
   var hornSize = focusedRandom(-(h/5),(h/20));
   var hornType = getHornType();
   var face = getFaceType();

   var monFace = new Face();
   monFace.drawMonster(x-(w/2.5),y,faceWidth,faceHeight,eye_value,mouthType,noseType,hornSize,hornType,h,scheme,face);
 //}
//}
*/

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

/*
    // head
    stroke(stroke_color);
    fill(fg_color);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    endShape(CLOSE);

    // mouth
    noStroke();
    fill(bg_color);
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    endShape(CLOSE);

    // nose
    beginShape();
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    // eyes
    beginShape();
    for(var i=0; i<positions.left_eye.length;i++) {
      vertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.right_eye.length;i++) {
      vertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    }
    endShape(CLOSE);

    fill(fg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 16 * scale, 16 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 16 * scale, 16 * scale);

    fill(stroke_color);
    beginShape();
    for(var i=0; i<positions.right_eyebrow.length; i++) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.left_eyebrow.length; i++) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    endShape(CLOSE);
    strokeWeight(1);
*/
  }


function drawFace(positions,h){

  var skip = 2;
  var radius = 7;
  var radius2 = 5;
  var numPoints = 32;



//  ellipse(0, 0, radius, radius);

  var face1Coords=[3,8,13,17,24,31];
  var face1ShadowCoords = [31,3,8,3,31,24];
  var face1ShadowRadius = [radius,radius,radius,radius2,radius2,radius];
  //var face1ShadowCoords2 = [31,3];

  noStroke();
    fill(132,130,237);
  strokeWeight(0.1);
  push();
  translate(0,-(h*0.2));
  beginShape();
  for(var i=0;i<numPoints;i++)
  {
    var circleX = radius/2* Math.cos(2 * Math.PI * i / numPoints);
    var circleY = radius/2* Math.sin(2 * Math.PI * i / numPoints);
    if(face1Coords.includes(i)){
    vertex (circleX,circleY);
  }

  ellipse(circleX,circleY,0.2,0.2);
  }
  endShape();

  //shadow
  fill(shadow);
  beginShape();

  var counter = 0;

  for(var i=0;i<face1ShadowCoords.length;i++)
  {
      j = face1ShadowCoords[i];
      fill(shadow);


      fill(255,0,0);
      var circleX = (face1ShadowRadius[i]/2)* Math.cos(2 * Math.PI * j / numPoints);
      var circleY = (face1ShadowRadius[i]/2)* Math.sin(2 * Math.PI * j / numPoints);
      ellipse(circleX,circleY,0.2,0.2);
      vertex (circleX,circleY);
      counter++;
  

  }
      fill(shadow);
  endShape();
  pop();

/*
  for(var i=0; i<positions.chin.length;i+=skip) {
    vertex(positions.chin[i][0], positions.chin[i][1]);
  }
  for(var i=positions.right_eyebrow.length-1; i>=0;i-=skip) {
    vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
  }
  for(var i=positions.left_eyebrow.length-1; i>=0;i-=skip) {
    vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
  }
  */

//  endShape();

/*
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

*/

}





  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
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
