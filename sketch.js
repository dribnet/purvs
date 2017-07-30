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
var bg_color1 = [106,109,131];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var ZamasuFaceColor1 = "rgb(153,232,99)";
var ZamasuFaceColor2 = "rgb(123,203,69)";
var ZamasuFaceColor3 = "rgba(0,0,0,0.15)";
var ZamasuFaceColor4 = "rgba(0,0,0,0.05)";

var ZamasuHairColor1 = "rgb(232,236,236)";
var ZamasuHairColor2 = "rgb(169,176,175)";
var ZamasuPotEaringColor1 = "rgb(243,255,84)";
var ZamasuPotEaringColor2 = "rgb(145,157,0)";
var ZamasuPotEaringColor3 = "rgb(18,223,42)";
var stroke_color = "black";
var eyecolor1 = "rgb(158,160,160)";
var eyecolor2 = "rgb(15,15,15)";
var eyecolor3 = "rgb(211,198,213)";

var ShinFaceColor1 = "rgb(233,145,239)";
var ShinFaceColor2 = "rgb(203,115,209)";

var FaceColor1 = "rgb(86,147,255)";
var FaceColor2 = "rgb(66,127,235)";

var FaceColor3 = "rgb(255,253,109)";
var FaceColor4 = "rgb(225,223,89)";

function drawFace1(x, y, w, h, tilt_value, earPoint_value, earring_value, earringCol_value, pupilSize_value, eyeShapeWidth_value, eyeShapeWidth2_value, eyeShapeWidth3_value, eyeShapeWidth4_value, eyeShapeHeight_value, eyeShapeHeight2_value, eyebrowHeight_value, eyebrowHeight2_value, eyeShapeHeight3_value, eyeShapeHeight4_value, eyebrowWidth_value, eyebrowWidth2_value, faceColor_value, faceColor2_value, faceColor3_value, jawline_value, jawline2_value, mouthHeight_value, mouthWidth_value, noseHeight_value, noseWidth_value, eyeColorBlend_value, scale_value, hairSpike1_value, hairSpike2_value, hairSpike3_value, hairSpike4_value, hairSpike5_value, hairSpike6_value, hairSpike7_value, hairSpike8_value, hairSpikeSharpness_value) {
  push();
  translate(x, y);
  rotate(tilt_value);
  scale(scale_value);

  var c1 = color(ZamasuFaceColor1);
  var c2 = color(ShinFaceColor1);
  var faceColorBlend = lerpColor(c1, c2, faceColor_value);

  var c3 = color(ZamasuFaceColor2);
  var c4 = color(ShinFaceColor2);
  var faceColorBlend2 = lerpColor(c3, c4, faceColor_value);

  var c5 = color(FaceColor1);
  var c6 = color(FaceColor3);
  var faceColorBlend3 = lerpColor(c5, c6, faceColor2_value);

  var c7 = color(FaceColor2);
  var c8 = color(FaceColor4);
  var faceColorBlend4 = lerpColor(c7, c8, faceColor2_value);

  var fourFaceColours = lerpColor(faceColorBlend, faceColorBlend3, faceColor3_value);
  var fourFaceColours2 = lerpColor(faceColorBlend2, faceColorBlend4, faceColor3_value);

  var c9 = color(eyecolor1);
  var c10 = color(eyecolor3);
  var eyeColorBlend = lerpColor(c9, c10, faceColor2_value);

  //Ears
  fill(fourFaceColours2);
  quad(146.5, 40, 280 + earPoint_value, -20 + earPoint_value, 160, 135, 40, 145);
  quad(-146.5, 40, -280 + earPoint_value, -20 + earPoint_value, -160, 135, -40, 145);

  //Right Ear Shading
  fill(ZamasuFaceColor3);
  quad(146.5, 40, 280 + earPoint_value, -20 + earPoint_value, 160, 135, 40, 145);


  //Head
  noStroke();
  fill(fourFaceColours);
  ellipse(0, 0, 300, 350);
    
  quad(-1, 40, 146.5, 40, 85 + jawline_value, 185, -1, 215 + (jawline2_value/2));
  quad(1, 40, -146.5, 40, -85 - jawline_value, 185, 1, 215 + (jawline2_value / 2));

  //Head Shading
  fill(ZamasuFaceColor3);
  quad(75 + jawline_value, 175, 146.5, 40, 85 + jawline_value, 185, 0, 215 + (jawline2_value / 2));
  fill(ZamasuFaceColor4);
  quad(-75 - jawline_value, 175, -146.5, 40, -85 - jawline_value, 185, 0, 215 + (jawline2_value / 2));
  quad(0, 215 + (jawline2_value / 2), -90, 175, 0, 203 + (jawline2_value / 2), 90, 175);


    //eyebrows
  fill(fourFaceColours2);
  quad(30, 55, 70 + (eyebrowWidth_value / 2), 25 + eyebrowHeight_value, 120 + eyebrowWidth_value, 29 + eyebrowHeight_value, 72, 34 + eyebrowHeight_value);
  quad(-30, 55, -70 - (eyebrowWidth2_value / 2), 25 + eyebrowHeight2_value, -120 - eyebrowWidth2_value, 29 + eyebrowHeight2_value, -72, 34 + eyebrowHeight2_value);

  fill(ZamasuHairColor1);
  quad(30, 55, 70 + (eyebrowWidth_value / 2), 20 + eyebrowHeight_value, 120 + eyebrowWidth_value, 29 + eyebrowHeight_value, 72, 29 + eyebrowHeight_value);
  quad(-30, 55, -70 - (eyebrowWidth2_value/2), 20 + eyebrowHeight2_value, -120 - eyebrowWidth2_value, 29 + eyebrowHeight2_value, -72, 29 + eyebrowHeight2_value);

    //eye shapes
  fill("white");
  quad(24 + eyeShapeWidth_value, 85, 54 + eyeShapeWidth2_value, 51, 120 + eyeShapeWidth3_value, 53 + eyeShapeHeight_value, 90 + eyeShapeWidth4_value, 83 + + eyeShapeHeight2_value);
  quad(-24 - eyeShapeWidth_value, 85, -54 - eyeShapeWidth2_value, 51, -120 - eyeShapeWidth3_value, 53 + eyeShapeHeight3_value, -90 - eyeShapeWidth4_value, 83 + eyeShapeHeight4_value);

    //eyeballs
  fill(eyeColorBlend);
  ellipse(60, 68, 30, 30);
  ellipse(-60, 68, 30, 30);

    //pupils
  fill(eyecolor2);
  ellipse(59, 69, 6 + pupilSize_value, 6 + pupilSize_value);
  ellipse(-59, 69, 6 + pupilSize_value, 6 + pupilSize_value);

    //nose
  fill(fourFaceColours2);
  triangle(5, 100 + noseHeight_value, 20 + noseWidth_value, 130 + noseHeight_value, 0, 145 + noseHeight_value);
  triangle(5, 130 + noseHeight_value, -13 - noseWidth_value, 130 + noseHeight_value, 0, 145 + noseHeight_value);


    //mouth
  fill(fourFaceColours2);
  triangle(-20, 165, -20, 170, -20 - mouthWidth_value, 173 + mouthHeight_value);
  quad(-20, 165, 20, 165, 20, 172, -20, 170);
  triangle(20, 165, 20, 172, 30 + mouthWidth_value, 168 + mouthHeight_value);


    //Potara Earring Colour

  if (earringCol_value == 1) {
      ZamasuPotEaringColor3 = "rgb(222,167,48)";
  }

  if (earringCol_value == 2) {
      ZamasuPotEaringColor3 = "rgb(18, 223, 42)";
  }

  if (earringCol_value == 3) {
      ZamasuPotEaringColor3 = "rgb(129,3,17)";
  }

  if (earringCol_value == 4) {
      ZamasuPotEaringColor3 = "rgb(82,82,241)";
  }

  if (earringCol_value == 5) {
      ZamasuPotEaringColor3 = "rgb(246,105,234)";
  }

  noStroke();

    //Potara Earing
  if (earring_value == 3) {
    fill(ZamasuPotEaringColor1);
    ellipse(135, 152, 10, 10);
    fill(ZamasuPotEaringColor3);
    ellipse(135, 170, 30, 30);
    fill(ZamasuPotEaringColor1);
    ellipse(135, 140, 17, 17);

    fill(ZamasuFaceColor3);
    ellipse(135, 152, 10, 10);
    ellipse(135, 170, 30, 30);
    ellipse(135, 140, 17, 17);
  }

  if (earring_value ==2) {
    fill(ZamasuPotEaringColor1);
    ellipse(135, 152, 10, 10);
    fill(ZamasuPotEaringColor3);
    ellipse(135, 170, 30, 30);
    fill(ZamasuPotEaringColor1);
    ellipse(135, 140, 17, 17);

    fill(ZamasuFaceColor3);
    ellipse(135, 152, 10, 10);
    ellipse(135, 170, 30, 30);
    ellipse(135, 140, 17, 17);

    fill(ZamasuPotEaringColor1);
    ellipse(-135, 152, 10, 10);
    fill(ZamasuPotEaringColor3);
    ellipse(-135, 170, 30, 30);
    fill(ZamasuPotEaringColor1);
    ellipse(-135, 140, 17, 17);
  }

  if (earring_value == 1) {
    fill(ZamasuPotEaringColor1);
    ellipse(-135, 152, 10, 10);
    fill(ZamasuPotEaringColor3);
    ellipse(-135, 170, 30, 30);
    fill(ZamasuPotEaringColor1);
    ellipse(-135, 140, 17, 17);
  }
  

    //All Hair shapes
  stroke(ZamasuHairColor1);
  fill(ZamasuHairColor1);
  triangle(0, -32, 40, -110, -50, -80);

    // HairSpike 1 - Middle Left point
  if (hairSpike1_value == 1) {
      quad(0, -32, 40, -110, 38, -220, -20, -168);
      quad(-20, -168, 38, -220, -98, -240, -68, -190);
      triangle(-98, -240, -68, -190, -170 + hairSpikeSharpness_value, -190 + hairSpikeSharpness_value);
  }

    // HairSpike 2 KEYPOINT- Left Point
      quad(0, -160, -62, -195, -150, -140, -198, -40);
      quad(0, -160, 40, -110, -50, -80, -116, -90);

    // HairSpike 3 KEYPOINT - Main Left Point
  if (hairSpike3_value == 1) {
      triangle(40, -110, -16, -148, -50, -80);
      quad(0, -90, -16, -148, -150, -69, -90, -2);
      quad(-150, -69, -90, -2, -140, 120, -180, 100);
      triangle(-140, 120, -180, 100, -145 + hairSpikeSharpness_value, 190 + hairSpikeSharpness_value);
  }

    // HairSpike 4 - Middle Upwards Point
  if (hairSpike4_value == 1) {
      quad(0, -32, 40, -110, 38, -220, -20, -168);
      triangle(38, -220, -20, -168, -40 + hairSpikeSharpness_value, -260 + hairSpikeSharpness_value);
  }

    // HairSpike 5 - Forehead Point
  if (hairSpike5_value == 1) {
      quad(-50, -80, -14, -48, -24, -10, -60, -20);
      triangle(-24, -10, -60, -20, -15 + hairSpikeSharpness_value, 40 + hairSpikeSharpness_value);
  }

    // HairSpike 6 - Forehead Point 2 Right
  if (hairSpike6_value == 1) {
      quad(20, -123, 10, -60, 35, -60, 65, -94);
      triangle(35, -60, 65, -94, 70 + hairSpikeSharpness_value, -20 + hairSpikeSharpness_value);
  }

    // HairSpike 7 - Right Point
  if (hairSpike7_value == 1) {
      quad(-39, -160, 40, -220, 60, -170, 40, -110);
      triangle(40, -220, 60, -170, 120 + hairSpikeSharpness_value, -240 + hairSpikeSharpness_value);
  }

    // HairSpike 8 - Last Point
  if ((hairSpike8_value == 1) && (hairSpike7_value == 1)) {
      quad(50, -185, 20, -95, 90, -120, 120 + hairSpikeSharpness_value, -160 + hairSpikeSharpness_value);
  }

  pop();
}

function getRandomNumberOfEarrings() {
    random_result = focusedRandom(0, 100);
    if (random_result < 10) {
        return 1;
    }
    else if (random_result > 90) {
        return 3;
    }
    else {
        return 2;
    }
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);
  fill(bg_color1);

  // use same size / y_pos for all faces
  // var face_w = canvasWidth / 4;
  // var face_h = face_w;
  // var face_y = height / 2;
  // var face_x = width / 2;

  // draw 1st face

  tilt_value = focusedRandom(-10,10);
  earring_value = getRandomNumberOfEarrings();
  pupilSize_value =  focusedRandom(0, 10);
  faceColor_value = focusedRandom(0, 1);
  faceColor2_value = focusedRandom(0, 1);
  faceColor3_value = focusedRandom(0, 1);
  jawline_value = focusedRandom(2, 18, 4);
  jawline2_value = focusedRandom(0, 80, 4, 1);
  scale_value = focusedRandom(0.27, 0.33, 8, 1);
  earringCol_value = Math.floor(focusedRandom(1, 5.99));
  earPoint_value = focusedRandom(-5, 25, 2);
  eyebrowHeight_value = focusedRandom(-15, 15);
  eyebrowWidth_value = focusedRandom(-15, 15);
  eyebrowHeight2_value = focusedRandom(-15, 15);
  eyebrowWidth2_value = focusedRandom(-15, 15);
  mouthHeight_value = focusedRandom(-15, 15);
  mouthWidth_value = focusedRandom(-5, 15);
  noseHeight_value = focusedRandom(-5, 5);
  noseWidth_value = focusedRandom(-5, 5);
  eyeShapeWidth_value = focusedRandom(-10, 10);
  eyeShapeWidth2_value = focusedRandom(-10, 10);
  eyeShapeWidth3_value = focusedRandom(-10, 10);
  eyeShapeWidth4_value = focusedRandom(-10, 10);
  eyeShapeHeight_value = focusedRandom(-5, 5);
  eyeShapeHeight2_value = focusedRandom(-5, 5);
  eyeShapeHeight3_value = focusedRandom(-5, 5);
  eyeShapeHeight4_value = focusedRandom(-5, 5);
  eyeColorBlend_value = focusedRandom(0, 1);
  hairSpike1_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike2_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike3_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike4_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike5_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike6_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike7_value = Math.floor(focusedRandom(1, 2.99));
  hairSpike8_value = Math.floor(focusedRandom(1, 2.99));
  hairSpikeSharpness_value = focusedRandom(-15, 15);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h / 2 + h * i;
      var x = w / 2 + w * j;

      tilt_value = focusedRandom(-10,10);
      earring_value = getRandomNumberOfEarrings();
      pupilSize_value =  focusedRandom(0, 10);
      faceColor_value = focusedRandom(0, 1);
      faceColor2_value = focusedRandom(0, 1);
      faceColor3_value = focusedRandom(0, 1);
      jawline_value = focusedRandom(2, 18);
      jawline2_value = focusedRandom(15, 60);
      scale_value = focusedRandom(0.27, 0.33);
      earringCol_value = Math.floor(focusedRandom(1, 5.99));
      earPoint_value = focusedRandom(-5, 15);
      eyebrowHeight_value = focusedRandom(-15, 15);
      eyebrowWidth_value = focusedRandom(-15, 15);
      eyebrowHeight2_value = focusedRandom(-15, 15);
      eyebrowWidth2_value = focusedRandom(-15, 15);
      mouthHeight_value = focusedRandom(-15, 15);
      mouthWidth_value = focusedRandom(-5, 15);
      noseHeight_value = focusedRandom(-5, 5);
      noseWidth_value = focusedRandom(-5, 5);
      eyeShapeWidth_value = focusedRandom(-10, 10);
      eyeShapeWidth2_value = focusedRandom(-10, 10);
      eyeShapeWidth3_value = focusedRandom(-10, 10);
      eyeShapeWidth4_value = focusedRandom(-10, 10);
      eyeShapeHeight_value = focusedRandom(-5, 5);
      eyeShapeHeight2_value = focusedRandom(-5, 5);
      eyeShapeHeight3_value = focusedRandom(-5, 5);
      eyeShapeHeight4_value = focusedRandom(-5, 5);
      eyeColorBlend_value = focusedRandom(0, 1);
      hairSpike1_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike2_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike3_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike4_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike5_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike6_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike7_value = Math.floor(focusedRandom(1, 2.99));
      hairSpike8_value = Math.floor(focusedRandom(1, 2.99));
      hairSpikeSharpness_value = focusedRandom(-15, 15);
      drawFace1(x, y, w, h, tilt_value, earPoint_value, earring_value, earringCol_value, pupilSize_value, eyeShapeWidth_value, eyeShapeWidth2_value, eyeShapeWidth3_value, eyeShapeWidth4_value, eyeShapeHeight_value, eyeShapeHeight2_value, eyebrowHeight_value, eyebrowHeight2_value, eyeShapeHeight3_value, eyeShapeHeight4_value, eyebrowWidth_value, eyebrowWidth2_value, faceColor_value, faceColor2_value, faceColor3_value, jawline_value, jawline2_value, mouthHeight_value, mouthWidth_value, noseHeight_value, noseWidth_value, eyeColorBlend_value, scale_value, hairSpike1_value, hairSpike2_value, hairSpike3_value, hairSpike4_value, hairSpike5_value, hairSpike6_value, hairSpike7_value, hairSpike8_value, hairSpikeSharpness_value);
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