var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);

  smooth();
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

//mask colors
var bg_color2 = "#f2e6d9";
var eyeBall_color = "#000000";
var mouth_color = "#990000";
var tri_color = "#ffdb4d";
var sun_color = "#e60000";

function drawFace2(x, y, size, forehead_value, eye_value, eyeRim_value, mouth_value, skinColor_value, foreColor_value, tri1_value, tri2_value, jaw_value) {
  //right face
  push();
  translate(x, y);
  scale(size);
  
  //whole skin
  fill(skinColor_value);
  beginShape();
  vertex(0, -40);
  bezierVertex(20, -40, 25, -20, 20, 0);
  vertex(20, 0);
  bezierVertex(20, 15, 20, 32, 0, 30);
  endShape();

  //forehead
  fill(foreColor_value);
  strokeWeight(1.5);
  stroke("#ffffff");
  beginShape();
  vertex(15 * forehead_value, -34 * forehead_value);
  bezierVertex(15 * forehead_value, -25 * forehead_value, 9, -12, 6, -7);
  vertex(6, -7);
  bezierVertex(10 * forehead_value, -10 * forehead_value, 15 * forehead_value, -10 * forehead_value, 20, -20);
  vertex(20, -20);
  bezierVertex(18, -20, 15 * forehead_value, -20 * forehead_value, 15 * forehead_value, -34 * forehead_value);
  endShape();

  //eye rim
  fill("#000000");
  strokeWeight(0.7);
  beginShape();
  vertex(6, -7);
  bezierVertex(1 * eyeRim_value, -5 * eyeRim_value, 2 * eyeRim_value, -4 * eyeRim_value, 1, 1);
  vertex(1, 1);
  bezierVertex(4 * eyeRim_value, -5 * eyeRim_value, 10 * eyeRim_value, 10 * eyeRim_value, 20, 0);
  vertex(20, 0);
  bezierVertex(15 * eyeRim_value, -5 * eyeRim_value, 18 + eyeRim_value, -8 + eyeRim_value, 22, -12);
  endShape();
  //eye hole
  fill(bg_color2);
  noStroke();  
  ellipse(9, -5, 8, 4 * eye_value);
  //eye ball
  fill(eyeBall_color);
  ellipse(8.5 * eye_value, -5, 4.5);

  //nose
  push();
  fill("#000000");
  rotate(-25);
  ellipse(0, 10, 5, 2);
  pop();

  //jaw
  fill("#000000");
  beginShape();
  vertex(0 * jaw_value, 15 * jaw_value)
  bezierVertex(20 * jaw_value, 5 * jaw_value, 16 * jaw_value, 20 * jaw_value, 14, 27)
  endShape();

  fill(bg_color2);
  beginShape();
  vertex(0, 15);
  bezierVertex(13, 16, 13, 20, 14, 27);
  vertex(14, 27);
  bezierVertex(12, 30, 10, 35, 0, 30);
  endShape();

  //mouth
  fill(mouth_color);
  quad(0, 17, 5, 17, 2 + mouth_value, 20 * mouth_value, 0, 20 * mouth_value);
  pop();

  //left face
  push();
  translate(x, y);
  scale(-size, size);
  
  //whole skin
  fill(skinColor_value);
  beginShape();
  vertex(0, -40);
  bezierVertex(20, -40, 25, -20, 20, 0);
  vertex(20, 0);
  bezierVertex(20, 15, 20, 32, 0, 30);
  endShape();

  //forehead
  fill(foreColor_value);
  strokeWeight(1.5);
  stroke("#ffffff");
  beginShape();
  vertex(15 * forehead_value, -34 * forehead_value);
  bezierVertex(15 * forehead_value, -25 * forehead_value, 9, -12, 6, -7);
  vertex(6, -7);
  bezierVertex(10 * forehead_value, -10 * forehead_value, 15 * forehead_value, -10 * forehead_value, 20, -20);
  vertex(20, -20);
  bezierVertex(18, -20, 15 * forehead_value, -20 * forehead_value, 15 * forehead_value, -34 * forehead_value);
  endShape();

  //eye rim
  fill("#000000");
  strokeWeight(0.7);
  beginShape();
  vertex(6, -7);
  bezierVertex(1 * eyeRim_value, -5 * eyeRim_value, 2 * eyeRim_value, -4 * eyeRim_value, 1, 1);
  vertex(1, 1);
  bezierVertex(4 * eyeRim_value, -5 * eyeRim_value, 10 * eyeRim_value, 10 * eyeRim_value, 20, 0);
  vertex(20, 0);
  bezierVertex(15 * eyeRim_value, -5 * eyeRim_value, 18 + eyeRim_value, -8 + eyeRim_value, 22, -12);
  endShape();
  //eye hole
  fill(bg_color2);
  noStroke();  
  ellipse(9, -5, 8, 4 * eye_value);
  //eye ball
  fill(eyeBall_color);
  ellipse(8.5 * eye_value, -5, 4.5);

  //nose
  push();
  fill("#000000");
  rotate(-25);
  ellipse(0, 10, 5, 2);
  pop();

  //jaw
  fill("#000000");
  beginShape();
  vertex(0 * jaw_value, 15 * jaw_value)
  bezierVertex(20 * jaw_value, 5 * jaw_value, 16 * jaw_value, 20 * jaw_value, 14, 27)
  endShape();

  fill(bg_color2);
  beginShape();
  vertex(0, 15);
  bezierVertex(13, 16, 13, 20, 14, 27);
  vertex(14, 27);
  bezierVertex(12, 30, 10, 35, 0, 30);
  endShape();

  //mouth
  fill(mouth_color);
  quad(0, 17, 5, 17, 2 + mouth_value, 20 * mouth_value, 0, 20 * mouth_value);

  //triangle
  fill(tri_color);
  triangle(5, -25, -5, -25, 0, 10 * tri1_value);
  triangle(5, -25, -5, -25, 0, -50 * tri2_value);

  //middle sun
  fill(sun_color);
  stroke("#ffffff");
  strokeWeight(1.7);
  ellipse(0, -25, 10);
  pop();
}


function draw () {
  
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color2);

  var w = width / 5;
  var h = height / 3;

  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++){
      var x = w/2 + w*j;
      var y = h/2 + h*i;
      var size = 1.5;

      var forehead_value = focusedRandom(0.5, 1.8, 1, 1.3);
      var foreColor_value = [Math.floor(focusedRandom(102, 255)), Math.floor(focusedRandom(255, 51)), 51];
      var eye_value = focusedRandom(0.8, 1.3, 3, 1);
      var eyeRim_value = focusedRandom(0.5, 3, 2, 2);
      var mouth_value = focusedRandom(0.9, 1.3);
      var jaw_value = focusedRandom(0.3, 1.4, 2, 0.9);
      var skinColor_value = [Math.floor(focusedRandom(20, 100)), Math.floor(focusedRandom(80, 20)), Math.floor(focusedRandom(100, 20))];
      var tri1_value = focusedRandom(-5, 1, 4, -1);
      var tri2_value = focusedRandom(0, 1, 2, 0.8);
      drawFace2(x, y, size, forehead_value, eye_value, eyeRim_value, mouth_value, skinColor_value, foreColor_value, tri1_value, tri2_value, jaw_value);
    }
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
