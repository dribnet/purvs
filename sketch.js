var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

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

function drawFace1(x, y, w, h, tilt_value, earring_value, pupilSize_value, faceColor_value, jawline_value) {
  push();
  translate(x, y);
  rotate(tilt_value);
  scale(0.35);

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

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face
  fill(bg_color1);

  tilt_value = focusedRandom(-10,10);
  earring_value = Math.floor(focusedRandom(1, 3.99));
  pupilSize_value =  focusedRandom(0, 10);
  faceColor_value = focusedRandom(0, 1);
  jawline_value = focusedRandom(0,30);


  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      tilt_value = focusedRandom(-10,10);
      earring_value = Math.floor(focusedRandom(1, 3.99));
      pupilSize_value =  focusedRandom(0, 10);
      faceColor_value = focusedRandom(0, 1);
      jawline_value = focusedRandom(0,30);
      drawFace1(x, y, w, h, tilt_value, earring_value, pupilSize_value, faceColor_value, jawline_value);
    }
  }

  // drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}