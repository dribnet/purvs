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
}

// global variables for colors
var bg_color1 = [10,24,7];
var bg_color2 = [17, 29, 34];
var bg_color3 = [40, 40, 90];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var ZamasuFaceColor1 = "rgb(177,215,151)";
var ZamasuFaceColor2 = "rgb(157,195,131)";
var ZamasuHairColor1 = "rgb(232,236,236)";
var ZamasuHairColor2 = "rgb(169,176,175)";
var ZamasuPotEaringColor1 = "rgb(243,255,84)";
var ZamasuPotEaringColor2 = "rgb(145,157,0)";
var ZamasuPotEaringColor3 = "rgb(18,223,42)";
var stroke_color = "black";
var eyecolor1 = "rgb(158,160,160)";
var eyecolor2 = "rgb(15,15,15)";

var ShinFaceColor1 = "rgb(233,207,243)";
var ShinFaceColor2 = "rgb(213,187,223)";

var colorHair = [20, 20, 0];

function drawFace1(x, y, w, h, tilt_value, earring_value, pupilSize_value, faceColor_value, jawline_value) {
  push();
  translate(x, y);
  rotate(tilt_value);
  scale(0.5);

  var c0 = color("blue");
  var c1 = color(ZamasuFaceColor1);
  var c2 = color(ShinFaceColor1);

  var faceColorBlend = lerpColor(c1, c2, faceColor_value);

  var c1 = color(ZamasuFaceColor2)
  var c2 = color(ShinFaceColor2)
  var faceColorBlend2 = lerpColor(c1, c2, faceColor_value);

  //Ears
  fill(faceColorBlend2);
  quad(146.5, 40, 280, -20, 160, 135, 40, 145);
  quad(-146.5, 40, -280, -20, -160, 135, -40, 145);

  noStroke();
  fill(faceColorBlend);
  ellipse(0, 0, 300, 350);
    
  //stroke("black");
  quad(0, 40, 146.5, 40, 85+jawline_value, 185, 0, 215+(jawline_value/2));
  quad(0, 40, -146.5, 40, -85-jawline_value, 185, 0, 215+(jawline_value/2));

  

    // eye shapes
  fill("white");
  quad(24, 85, 54, 51, 120, 53, 90, 83);
  quad(-24, 85, -54, 51, -120, 53, -90, 83);

    //eyebrows
  fill(ZamasuHairColor1);
  quad(30, 55, 70, 25, 120, 34, 72, 28);
  quad(-30, 55, -70, 25, -120, 34, -72, 28);


    //eyeballs
  fill(eyecolor1);
  ellipse(60, 68, 30, 30);
  ellipse(-60, 68, 30, 30);


    //pupils
  fill(eyecolor2);
  ellipse(59, 69, 6 + pupilSize_value, 6 + pupilSize_value);
  ellipse(-59, 69, 6 + pupilSize_value, 6 + pupilSize_value);

    //nose
  fill(faceColorBlend2);
  triangle(5, 100, 20, 130, 0, 145);
  triangle(5, 130, -13, 130, 0, 145);


    //mouth
  triangle(-20, 165, -20, 168, -30, 162);
  quad(-20, 165, 20, 165, 20, 170, -20, 168);
  triangle(20, 165, 20, 170, 40, 158);

    //Potara Earing
  if (earring_value == 3) {
	  noStroke();
	  fill(ZamasuPotEaringColor1);
	  ellipse(135, 152, 10, 10);
	  fill(ZamasuPotEaringColor3);
	  ellipse(135, 170, 30, 30);
	  fill(ZamasuPotEaringColor1);
	  ellipse(135, 140, 17, 17);
  }

  if (earring_value ==2) {
  	  noStroke();
	  fill(ZamasuPotEaringColor1);
	  ellipse(135, 152, 10, 10);
	  fill(ZamasuPotEaringColor3);
	  ellipse(135, 170, 30, 30);
	  fill(ZamasuPotEaringColor1);
	  ellipse(135, 140, 17, 17);

      noStroke();
	  fill(ZamasuPotEaringColor1);
	  ellipse(-135, 152, 10, 10);
	  fill(ZamasuPotEaringColor3);
	  ellipse(-135, 170, 30, 30);
	  fill(ZamasuPotEaringColor1);
	  ellipse(-135, 140, 17, 17);
  }

    if (earring_value == 1) {
      noStroke();
	  fill(ZamasuPotEaringColor1);
	  ellipse(-135, 152, 10, 10);
	  fill(ZamasuPotEaringColor3);
	  ellipse(-135, 170, 30, 30);
	  fill(ZamasuPotEaringColor1);
	  ellipse(-135, 140, 17, 17);
  }

    //hair
  stroke(ZamasuHairColor1);
  fill(ZamasuHairColor1);
  quad(0, -32, 40, -110, 38, -220, -20, -168);
  quad(-20, -168, 38, -220, -98, -240, -68, -190);
  triangle(-98, -240, -68, -190, -170, -190);


  quad(0, -160, -62, -195, -150, -140, -198, -40);

  triangle(0, -32, 40, -110, -50, -80);
  quad(0, -90, -18, -148, -150, -69, -90, -2);
  quad(-150, -69, -90, -2, -140, 120, -180, 100);
  triangle(-140, 120, -180, 100, -145, 190);

  pop();
}

function drawFace2(x, y, w, h, faceCurve_value, eye_value, eyePos_value) {
  //rectMode(CENTER);
  push();
  translate(x, y);
  translate(-25,0);
  noStroke();

    // Head Shape
  fill("rgb(127,156,115)");
  rect(-100, -100, 250, 235, 10 + faceCurve_value);

    // Eyes
  fill("rgb(52,120,169)");
  rect(-100, -10, 80, 60);
  rect(70, -10, 80, 60);

  fill("rgb(255,255,255)");
  if (eye_value == 1) {
  	rect(-100 + eyePos_value, -10, 18, 60);
}

  if (eye_value == 2) {
  	rect(-100 + eyePos_value, -10, 18, 60);
  	rect(70 + eyePos_value, -10, 18, 60);
}

  if (eye_value == 3) {
  	rect(70 + eyePos_value, -10, 18, 60);
}
    // Mouth
  fill("rgb(213,210,211)");
  rect(-20, -10, 90, 145);

  noFill();
  stroke("black");
  strokeWeight(0.2);
  beginShape();
  vertex(50, -10);
  vertex(0, 20);
  vertex(50, 50);
  vertex(0, 80);
  vertex(50, 110);
  vertex(10, 135);
  endShape();

    // Mandibles
  noStroke();
  fill("rgb(240,185,109)");
  ellipse(-58, 90, 50, 50);
  ellipse(108, 90, 50, 50);

  pop();

}

function drawFace3(x, y, w, h, scale_value, cheek_value, ear_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  scale(scale_value);

    // Ears
  fill("rgb(243,242,238)");
  push();
  rotate(ear_value);
  push();
  rotate(-10);
  ellipse(70, 5, 85, 20);
  rotate(10);
  ellipse(70, 5, 70, 20);
  pop();
  pop();


  push();
  rotate(ear_value);
  push();
  rotate(10);
  ellipse(-70, 5, 85, 20);
  rotate(-10);
  ellipse(-70, 5, 70, 20);
  pop();
  pop();

    // Head shape
  fill("rgb(253,252,248)");
  ellipse(0, 0, 80, 75);

    // Head Balls
  fill("rgb(230,216,112)");
  ellipse(32, -27, 18, 18);
  ellipse(-32, -27, 18, 18);

  fill("rgb(240,226,122)");
  ellipse(24, -27, 20, 20);
  ellipse(-24, -27, 20, 20);

  fill("rgb(250,236,132)");
  ellipse(9, -28, 22, 22);
  ellipse(-9, -28, 22, 22);
  

    // Eyes
  fill("rgb(39,42,37)");
  ellipse(10, 0, 10, 16);
  ellipse(-10, 0, 10, 16);

  fill("white");
  ellipse(10, -4, 4, 6);
  ellipse(-10, -4, 4, 6);

    // Cheeks
  fill("rgb(214,107,107)");

  if (cheek_value == 1) {
	  ellipse(-23, 16, 17, 11);
  }

  if (cheek_value == 2) {
	  ellipse(23, 16, 17, 11);
	  ellipse(-23, 16, 17, 11);
  }

  if (cheek_value == 3) {
  	ellipse(23, 16, 17, 11);
  }

    // Mouth
  stroke("rgb(39,42,37)");
  noFill();
  beginShape();
  curveVertex(120, -30);
  curveVertex(0, 10);
  curveVertex(5, 20);
  curveVertex(10,25);
  endShape();

  pop();
}

function draw () {
  noStroke();

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

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var tilt_value = map(s1, 0, 100, -10, 10);
    var pupilSize_value = map(s3, 0, 100, 0, 10);
    var earring_value = Math.floor(map(s2, 0, 100, 1, 3.99));
    var faceColor_value = map(s4, 0, 100, 0, 1);
    var jawline_value = map(s5,0, 100, 0,30)
    if (mode == 'all') {
      face_x = width / 6;
    }

    drawFace1(face_x, face_y, face_w, face_h, tilt_value, earring_value, pupilSize_value, faceColor_value, jawline_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var faceCurve_value = map(s1, 0, 100, 0, 30);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3.99));
    var eyePos_value = map(s3, 0, 100, 0, 62);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, faceCurve_value, eye_value, eyePos_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var scale_value = map(s1, 0, 100, 0.8, 1.3);
    var ear_value = map(s3, 0, 100, -5, 5);
    var cheek_value = Math.floor(map(s2, 0, 100, 0, 4));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, scale_value, cheek_value, ear_value);
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
