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

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);

  smooth();
}

// global variables for colors
//fox colors
var bg_color1 = "#00bfff";
var eye_color = "#1a0000";
var headTop_color = "#ff471a";
var headQuad_color = "#cc2900";
var outEar_color = "#b30000";
var inEar_color = "#ff9980";
var faceTop_color = "#b32400";
var faceBot_color = "#e62e00";
var faceSide_color = "#ff471a";
var neck1_color = "#e60000";
var neck2_color = "#b30000";
var noseTop_color = "#b32400";
var nose_color = "#1a0500";

//mask colors
var bg_color2 = "#f2e6d9";
var eyeBall_color = "#000000";
var mouth_color = "#990000";
var tri_color = "#ffdb4d";
var sun_color = "#e60000";


function drawFace1(x, y, size, ear_value, eye_value, nose_value) {
  noStroke();
  //right face
  push();  
  translate(x, y);
  scale(size);
  
  //head-top
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300));

  //head-quad
  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75));

  //outside-ear
  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25 * ear_value, -35);

  //inside-ear
  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20 * ear_value, -25);

  //face-top
  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15);

  //face-bottom
  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30 * nose_value, 17, 15);

  //face-side
  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40, 18);

  //neck-top
  fill(neck1_color);
  triangle(17, 15, 40, 18, 19, 19);

  //neck-bottom
  fill(neck2_color);
  triangle(7, 30 * nose_value, 17, 15, 19, 19);

  //nose-top
  fill(noseTop_color);
  quad(0, 0, 0, 30 * nose_value, 7, 30 * nose_value, 7, sqrt(75)); 
  
  //nose
  fill(nose_color);
  triangle(0, 30 * nose_value, 0, 35 * nose_value, 7, 30 * nose_value); 

  //eye
  fill(eye_color);
  triangle(7, sqrt(75) * eye_value, 7, 12, 14, 5); 
  pop();


  //left face
  push();  
  translate(x, y);
  scale(-size, size);
  
  //head-top
  fill(headTop_color);
  triangle(0, 0, 0, -sqrt(300), 10, -sqrt(300));

  //head-quad
  fill(headQuad_color);
  quad(0, 0, 10, -sqrt(300), 20, -3, 7, sqrt(75));

  //outside-ear
  fill(outEar_color);
  triangle(10, -sqrt(300), 20, -3, 25 * ear_value, -35);

  //inside-ear
  fill(inEar_color);
  triangle(10, -sqrt(300), 20, -3, 20 * ear_value, -25);

  //face-top
  fill(faceTop_color);
  triangle(20, -3, 7, sqrt(75), 17, 15);

  //face-bottom
  fill(faceBot_color);
  triangle(7, sqrt(75), 7, 30 * nose_value, 17, 15);

  //face-side
  fill(faceSide_color);
  triangle(20, -3, 17, 15, 40, 18);

  //neck-top
  fill(neck1_color);
  triangle(17, 15, 40, 18, 19, 19);

  //neck-bottom
  fill(neck2_color);
  triangle(7, 30 * nose_value, 17, 15, 19, 19);

  //nose-top
  fill(noseTop_color);
  quad(0, 0, 0, 30 * nose_value, 7, 30 * nose_value, 7, sqrt(75)); 
  
  //nose
  fill(nose_color);
  triangle(0, 30 * nose_value, 0, 35 * nose_value, 7, 30 * nose_value); 

  //eye
  fill(eye_color);
  triangle(7, sqrt(75) * eye_value, 7, 12, 14, 5); 
  pop();
}

function drawFace2(x, y, size, forehead_value, eye_value, eyeRim_value, mouth_value, skinColor_value, foreColor_value, tri1_value, tri2_value) {
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
  strokeWeight(0.5);
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
  ellipse(9, -5, 8, 4);
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
  vertex(0 * mouth_value, 15 * mouth_value)
  bezierVertex(20 * mouth_value, 5 * mouth_value, 16, 20, 14, 27)
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
  strokeWeight(0.5);
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
  ellipse(9, -5, 8, 4);
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
  vertex(0 * mouth_value, 15 * mouth_value)
  bezierVertex(20 * mouth_value, 5 * mouth_value, 16, 20, 14, 27)
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
  strokeWeight(1);
  ellipse(0, -25, 10);
  pop();
}

function draw () {

  var mode = faceSelector.value();

  if (mode != 'all') {
    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
    else if (mode == '3') {
      background(bg_color3);
    }
  }

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;
  var size = 3;

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var ear_value = map(s1, 0, 100, 0.7, 1.5);
    var eye_value = map(s2, 0, 100, 1, 1.8);
    var nose_value = map(s3, 0, 100, 0.8, 1.1);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, size, ear_value, eye_value, nose_value);    
  }

   if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var forehead_value = map(s1, 0, 100, 0.5, 1.8);
    var foreColor_value = [Math.floor(map(s1, 0, 100, 102, 255)), Math.floor(map(s1, 0, 100, 255, 51)), 51];
    var eye_value = map(s2, 0, 100, 0.9, 1.2);
    var eyeRim_value = map(s2, 0, 100, 0.5, 3);
    var mouth_value = map(s4, 0, 100, 1, 1.3);
    var skinColor_value = [Math.floor(map(s5, 0, 100, 0, 100)), Math.floor(map(s5, 0, 100, 80, 0)), Math.floor(map(s5, 0, 100, 100, 0))];
    var tri1_value = map(s3, 0, 100, -5, 1);
    var tri2_value = map(s3, 0, 100, 0, 1);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, size, forehead_value, eye_value, eyeRim_value, mouth_value, skinColor_value, foreColor_value, tri1_value, tri2_value);
  }

/*   if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
  } */ 
} 

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
