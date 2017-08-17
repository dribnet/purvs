/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.eye_value = 2;
  this.mouth_value = 0;

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [225, 206, 187];
  this.fg_color = [151, 102, 52];
  this.stroke_color = [95, 52, 8];

  this.bg_color1 = [106,109,131];
  this.bg_color2 = [96, 99, 121];
  this.bg_color3 = [70, 70, 120];

  this.fg_color1 = [151, 102, 52];
  this.fg_color2 = [56, 91, 194];
  this.fg_color3 = [206, 207, 180];

  this.stroke_color1 = [95, 52, 8];
  this.stroke_color2 = [210, 219, 189];
  this.stroke_color3 = [50, 50, 50];

  this.ZamasuFaceColor1 = "rgb(153,232,99)";
  this.ZamasuFaceColor2 = "rgb(123,203,69)";
  this.ZamasuFaceColor3 = "rgba(0,0,0,0.15)";
  this.ZamasuFaceColor4 = "rgba(0,0,0,0.05)";

  this.ZamasuHairColor1 = "rgb(232,236,236)";
  this.ZamasuHairColor2 = "rgb(169,176,175)";
  this.ZamasuPotEaringColor1 = "rgb(243,255,84)";
  this.ZamasuPotEaringColor2 = "rgb(145,157,0)";
  this.ZamasuPotEaringColor3 = "rgb(18,223,42)";
  this.stroke_color = "black";
  this.eyecolor1 = "rgb(158,160,160)";
  this.eyecolor2 = "rgb(15,15,15)";
  this.eyecolor3 = "rgb(211,198,213)";

  this.ShinFaceColor1 = "rgb(233,145,239)";
  this.ShinFaceColor2 = "rgb(203,115,209)";

  this.FaceColor1 = "rgb(86,147,255)";
  this.FaceColor2 = "rgb(66,127,235)";

  this.FaceColor3 = "rgb(255,253,109)";
  this.FaceColor4 = "rgb(225,223,89)";

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h, tilt_value, earPoint_value, earring_value, earringCol_value, pupilSize_value, eyeShapeWidth_value, eyeShapeWidth2_value, eyeShapeWidth3_value, eyeShapeWidth4_value, eyeShapeHeight_value, eyeShapeHeight2_value, eyebrowHeight_value, eyebrowHeight2_value, eyeShapeHeight3_value, eyeShapeHeight4_value, eyebrowWidth_value, eyebrowWidth2_value, faceColor_value, faceColor2_value, faceColor3_value, jawline_value, jawline2_value, mouthHeight_value, mouthWidth_value, noseHeight_value, noseWidth_value, eyeColorBlend_value, scale_value, hairSpike1_value, hairSpike2_value, hairSpike3_value, hairSpike4_value, hairSpike5_value, hairSpike6_value, hairSpike7_value, hairSpike8_value, hairSpikeSharpness_value) {
    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // push();
    // translate(x, y);
    // rotate(this.tilt_value);

    // var extent = 0;
    // if(h < w) {
    //   extent = h / 2;
    // }
    // else {
    //   extent = w / 2;
    // }
    // var scale = extent / 220.0;

    // // head
    // stroke(this.stroke_color);
    // fill(this.fg_color);
    // ellipse(0, 0, 300 * scale, 400 * scale);
    // noStroke();

    // // eyes
    // if (this.eye_value === 1 || this.eye_value == 3) {
    //   fill(this.bg_color);
    //   ellipse( 0, -80 * scale, 50 * scale, 30 * scale);
    //   fill(this.fg_color);
    //   ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
    // }

    // if (this.eye_value >= 2) {
    //   fill(this.bg_color);
    //   ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
    //   ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    //   fill(this.fg_color);
    //   ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    //   ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
    // }

    // // mouth
    // fill(this.bg_color);
    // ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
  push();
  translate(x, y);
  rotate(this.tilt_value);
  scale(this.scale_value);

  var c1 = color(this.ZamasuFaceColor1);
  var c2 = color(this.ShinFaceColor1);
  var faceColorBlend = lerpColor(c1, c2, this.faceColor_value);

  var c3 = color(this.ZamasuFaceColor2);
  var c4 = color(this.ShinFaceColor2);
  var faceColorBlend2 = lerpColor(c3, c4, this.faceColor_value);

  var c5 = color(this.FaceColor1);
  var c6 = color(this.FaceColor3);
  var faceColorBlend3 = lerpColor(c5, c6, this.faceColor2_value);

  var c7 = color(this.FaceColor2);
  var c8 = color(this.FaceColor4);
  var faceColorBlend4 = lerpColor(c7, c8, this.faceColor2_value);

  var fourFaceColours = lerpColor(faceColorBlend, faceColorBlend3, this.faceColor3_value);
  var fourFaceColours2 = lerpColor(faceColorBlend2, faceColorBlend4, this.faceColor3_value);

  var c9 = color(this.eyecolor1);
  var c10 = color(this.eyecolor3);
  var eyeColorBlend = lerpColor(c9, c10, this.faceColor2_value);

  //Ears
  fill(fourFaceColours2);
  quad(146.5, 40, 280 + this.earPoint_value, -20 + this.earPoint_value, 160, 135, 40, 145);
  quad(-146.5, 40, -280 + this.earPoint_value, -20 + this.earPoint_value, -160, 135, -40, 145);

  //Right Ear Shading
  fill(this.ZamasuFaceColor3);
  quad(146.5, 40, 280 + this.earPoint_value, -20 + this.earPoint_value, 160, 135, 40, 145);


  //Head
  noStroke();
  fill(fourFaceColours);
  ellipse(0, 0, 300, 350);
    
  quad(-1, 40, 146.5, 40, 85 + this.jawline_value, 185, -1, 215 + (this.jawline2_value/2));
  quad(1, 40, -146.5, 40, -85 - this.jawline_value, 185, 1, 215 + (this.jawline2_value / 2));

  //Head Shading
  fill(this.ZamasuFaceColor3);
  quad(75 + this.jawline_value, 175, 146.5, 40, 85 + this.jawline_value, 185, 0, 215 + (this.jawline2_value / 2));
  fill(this.ZamasuFaceColor4);
  quad(-75 - this.jawline_value, 175, -146.5, 40, -85 - this.jawline_value, 185, 0, 215 + (this.jawline2_value / 2));
  quad(0, 215 + (this.jawline2_value / 2), -90, 175, 0, 203 + (this.jawline2_value / 2), 90, 175);


    //eyebrows
  fill(fourFaceColours2);
  quad(30, 55, 70 + (this.eyebrowWidth_value / 2), 25 + this.eyebrowHeight_value, 120 + this.eyebrowWidth_value, 29 + this.eyebrowHeight_value, 72, 34 + this.eyebrowHeight_value);
  quad(-30, 55, -70 - (this.eyebrowWidth2_value / 2), 25 + this.eyebrowHeight2_value, -120 - this.eyebrowWidth2_value, 29 + this.eyebrowHeight2_value, -72, 34 + this.eyebrowHeight2_value);

  fill(this.ZamasuHairColor1);
  quad(30, 55, 70 + (this.eyebrowWidth_value / 2), 20 + this.eyebrowHeight_value, 120 + this.eyebrowWidth_value, 29 + this.eyebrowHeight_value, 72, 29 + this.eyebrowHeight_value);
  quad(-30, 55, -70 - (this.eyebrowWidth2_value/2), 20 + this.eyebrowHeight2_value, -120 - this.eyebrowWidth2_value, 29 + this.eyebrowHeight2_value, -72, 29 + this.eyebrowHeight2_value);

    //eye shapes
  fill("white");
  quad(24 + this.eyeShapeWidth_value, 85, 54 + this.eyeShapeWidth2_value, 51, 120 + this.eyeShapeWidth3_value, 53 + this.eyeShapeHeight_value, 90 + this.eyeShapeWidth4_value, 83 + this.eyeShapeHeight2_value);
  quad(-24 - this.eyeShapeWidth_value, 85, -54 - this.eyeShapeWidth2_value, 51, -120 - this.eyeShapeWidth3_value, 53 + this.eyeShapeHeight3_value, -90 - this.eyeShapeWidth4_value, 83 + this.eyeShapeHeight4_value);

    //eyeballs
  fill(eyeColorBlend);
  ellipse(60, 68, 30, 30);
  ellipse(-60, 68, 30, 30);

    //pupils
  fill(this.eyecolor2);
  ellipse(59, 69, 6 + this.pupilSize_value, 6 + this.pupilSize_value);
  ellipse(-59, 69, 6 + this.pupilSize_value, 6 + this.pupilSize_value);

    //nose
  fill(fourFaceColours2);
  triangle(5, 100 + this.noseHeight_value, 20 + this.noseWidth_value, 130 + this.noseHeight_value, 0, 145 + this.noseHeight_value);
  triangle(5, 130 + this.noseHeight_value, -13 - this.noseWidth_value, 130 + this.noseHeight_value, 0, 145 + this.noseHeight_value);


    //mouth
  fill(fourFaceColours2);
  triangle(-20, 165, -20, 170, -20 - this.mouthWidth_value, 173 + this.mouthHeight_value);
  quad(-20, 165, 20, 165, 20, 172, -20, 170);
  triangle(20, 165, 20, 172, 30 + this.mouthWidth_value, 168 + this.mouthHeight_value);


    //Potara Earring Colour

  if (earringCol_value == 1) {
      this.ZamasuPotEaringColor3 = "rgb(222,167,48)";
  }

  if (earringCol_value == 2) {
      this.ZamasuPotEaringColor3 = "rgb(18, 223, 42)";
  }

  if (earringCol_value == 3) {
      this.ZamasuPotEaringColor3 = "rgb(129,3,17)";
  }

  if (earringCol_value == 4) {
      this.ZamasuPotEaringColor3 = "rgb(82,82,241)";
  }

  if (earringCol_value == 5) {
      this.ZamasuPotEaringColor3 = "rgb(246,105,234)";
  }

  noStroke();

    //Potara Earing
  if (earring_value == 3) {
    fill(this.ZamasuPotEaringColor1);
    ellipse(135, 152, 10, 10);
    fill(this.ZamasuPotEaringColor3);
    ellipse(135, 170, 30, 30);
    fill(this.ZamasuPotEaringColor1);
    ellipse(135, 140, 17, 17);

    fill(this.ZamasuFaceColor3);
    ellipse(135, 152, 10, 10);
    ellipse(135, 170, 30, 30);
    ellipse(135, 140, 17, 17);
  }

  if (earring_value ==2) {
    fill(this.ZamasuPotEaringColor1);
    ellipse(135, 152, 10, 10);
    fill(this.ZamasuPotEaringColor3);
    ellipse(135, 170, 30, 30);
    fill(this.ZamasuPotEaringColor1);
    ellipse(135, 140, 17, 17);

    fill(this.ZamasuFaceColor3);
    ellipse(135, 152, 10, 10);
    ellipse(135, 170, 30, 30);
    ellipse(135, 140, 17, 17);

    fill(this.ZamasuPotEaringColor1);
    ellipse(-135, 152, 10, 10);
    fill(this.ZamasuPotEaringColor3);
    ellipse(-135, 170, 30, 30);
    fill(this.ZamasuPotEaringColor1);
    ellipse(-135, 140, 17, 17);
  }

  if (earring_value == 1) {
    fill(this.ZamasuPotEaringColor1);
    ellipse(-135, 152, 10, 10);
    fill(this.ZamasuPotEaringColor3);
    ellipse(-135, 170, 30, 30);
    fill(this.ZamasuPotEaringColor1);
    ellipse(-135, 140, 17, 17);
  }
  

    //All Hair shapes
  stroke(this.ZamasuHairColor1);
  fill(this.ZamasuHairColor1);
  triangle(0, -32, 40, -110, -50, -80);

    // HairSpike 1 - Middle Left point
  if (this.hairSpike1_value == 1) {
      quad(0, -32, 40, -110, 38, -220, -20, -168);
      quad(-20, -168, 38, -220, -98, -240, -68, -190);
      triangle(-98, -240, -68, -190, -170 + this.hairSpikeSharpness_value, -190 + this.hairSpikeSharpness_value);
  }

    // HairSpike 2 KEYPOINT- Left Point
      quad(0, -160, -62, -195, -150, -140, -198, -40);
      quad(0, -160, 40, -110, -50, -80, -116, -90);

    // HairSpike 3 KEYPOINT - Main Left Point
  if (this.hairSpike3_value == 1) {
      triangle(40, -110, -16, -148, -50, -80);
      quad(0, -90, -16, -148, -150, -69, -90, -2);
      quad(-150, -69, -90, -2, -140, 120, -180, 100);
      triangle(-140, 120, -180, 100, -145 + this.hairSpikeSharpness_value, 190 + this.hairSpikeSharpness_value);
  }

    // HairSpike 4 - Middle Upwards Point
  if (this.hairSpike4_value == 1) {
      quad(0, -32, 40, -110, 38, -220, -20, -168);
      triangle(38, -220, -20, -168, -40 + this.hairSpikeSharpness_value, -260 + this.hairSpikeSharpness_value);
  }

    // HairSpike 5 - Forehead Point
  if (this.hairSpike5_value == 1) {
      quad(-50, -80, -14, -48, -24, -10, -60, -20);
      triangle(-24, -10, -60, -20, -15 + this.hairSpikeSharpness_value, 40 + this.hairSpikeSharpness_value);
  }

    // HairSpike 6 - Forehead Point 2 Right
  if (this.hairSpike6_value == 1) {
      quad(20, -123, 10, -60, 35, -60, 65, -94);
      triangle(35, -60, 65, -94, 70 + this.hairSpikeSharpness_value, -20 + this.hairSpikeSharpness_value);
  }

    // HairSpike 7 - Right Point
  if (this.hairSpike7_value == 1) {
      quad(-39, -160, 40, -220, 60, -170, 40, -110);
      triangle(40, -220, 60, -170, 120 + this.hairSpikeSharpness_value, -240 + this.hairSpikeSharpness_value);
  }

    // HairSpike 8 - Last Point
  if ((this.hairSpike8_value == 1) && (this.hairSpike7_value == 1)) {
      quad(50, -185, 20, -95, 90, -120, 120 + this.hairSpikeSharpness_value, -160 + this.hairSpikeSharpness_value);
  }

    pop();

  }

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw2 = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    // Uncomment to see drawing area
    fill(255);
    stroke(0);
    rect(x-w/2, y-h/2, w, h);
    fill(0)
    ellipse(x, y, w, h);

    push();
    translate(x, y);
    rotate(this.tilt_value);

    // head
    stroke(this.stroke_color);
    fill(this.fg_color);
    ellipse(0, 0, 300 * scale, 400 * scale);
    noStroke();

    // mouth
    fill(this.bg_color);
    ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
    pop();

    noStroke();

    fill(this.bg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

    fill(this.fg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  }

  /*
   * Update internal state variables to a random state.
   */
  this.randomize = function() {
    // this.eye_value = getRandomNumberOfEyes();
    // this.tilt_value = focusedRandom(-70, 90, 8);
    // this.mouth_value = focusedRandom(0, 50, 4, 1);

    this.tilt_value = focusedRandom(-10,10);
    this.earring_value = getRandomNumberOfEarrings();
    this.pupilSize_value =  focusedRandom(0, 10);
    this.faceColor_value = focusedRandom(0, 1);
    this.faceColor2_value = focusedRandom(0, 1);
    this.faceColor3_value = focusedRandom(0, 1);
    this.jawline_value = focusedRandom(2, 18, 4);
    this.jawline2_value = focusedRandom(0, 80, 4, 1);
    this.scale_value = focusedRandom(0.14,0.17, 8, 1);
    this.earringCol_value = Math.floor(focusedRandom(1, 5.99));
    this.earPoint_value = focusedRandom(-5, 25, 2);
    this.eyebrowHeight_value = focusedRandom(-15, 15);
    this.eyebrowWidth_value = focusedRandom(-15, 15);
    this.eyebrowHeight2_value = focusedRandom(-15, 15);
    this.eyebrowWidth2_value = focusedRandom(-15, 15);
    this.mouthHeight_value = focusedRandom(-15, 15);
    this.mouthWidth_value = focusedRandom(-5, 15);
    this.noseHeight_value = focusedRandom(-5, 5);
    this.noseWidth_value = focusedRandom(-5, 5);
    this.eyeShapeWidth_value = focusedRandom(-10, 10);
    this.eyeShapeWidth2_value = focusedRandom(-10, 10);
    this.eyeShapeWidth3_value = focusedRandom(-10, 10);
    this.eyeShapeWidth4_value = focusedRandom(-10, 10);
    this.eyeShapeHeight_value = focusedRandom(-5, 5);
    this.eyeShapeHeight2_value = focusedRandom(-5, 5);
    this.eyeShapeHeight3_value = focusedRandom(-5, 5);
    this.eyeShapeHeight4_value = focusedRandom(-5, 5);
    this.eyeColorBlend_value = focusedRandom(0, 1);
    this.hairSpike1_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike2_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike3_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike4_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike5_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike6_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike7_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpike8_value = Math.floor(focusedRandom(1, 2.99));
    this.hairSpikeSharpness_value = focusedRandom(-15, 15);
  }
}

// global functions can also be in this file below

function getRandomNumberOfEyes() {
  random_result = focusedRandom(0, 100);
  if(random_result < 8) {
    return 1;
  }
  else if(random_result < 12) {
    return 3;
  }
  else {
    return 2;
  }
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