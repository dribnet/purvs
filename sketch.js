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
var bg_color1 = "#400B00";
var bg_color2 = 0;
var bg_color3 = [28, 58, 100];

var fg_color1 = [151, 102, 52];
var fg_color2 = [0, 131, 178];
var fg_color3 = [255, 162, 46];
var fg_color3_spots = [255, 150];

var stroke_color1 = "#400B00";
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

// calcifer (fire)
function drawFace1(x, y, w, h, mouth_value, pupilSize, chin, faceDown, fireOpacity) {
  push();
  translate(x, y -faceDown);
  //translate(0,-15);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

    stroke(stroke_color1);
    fill(255, 227,42, fireOpacity);
    
    fireBody(chin);
    
    fill(255);
    push();
    translate(0,faceDown);
    
    fireEyes(scale, pupilSize);
    fireMouth(scale, mouth_value);
    pop();
  pop();
}

function drawFace2(x, y, w, h, roundness, size, size2, spotsAmount, tiltValue, grayness) {
  rectMode(CENTER);
        noStroke();
  push();
  translate(x, y);
    push();
    rotate(tiltValue);
  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  fill(fg_color2);
    
    face2Body(size, size2, scale, grayness, spotsAmount, roundness);
    
  pop();
  stroke(stroke_color3);
   //draw face -> eyes and mouth 
  face2Face(scale);

  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, blink_value, stripeLength, greenness, headWidth) {
  push();
  rectMode(CENTER);
  translate(x, y);
  
  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale2 = extent / 220.0;
var orange = [255, 162-greenness, 46];
  fill(orange);
    noStroke();
    push();
    scale(headWidth,1);
    tigerHead(orange);
    pop();
    tigerFace(scale2, blink_value, orange);
    push();
    scale(headWidth,1);
    tigerStripes(stripeLength);
    tigerWhiskers();
    pop();
    
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
    var mouth_value = map(s3, 0, 100, 1, 30);
    var pupilSize =  map(s2, 0, 100, 10, 30);
      var chin = map(s1, 0, 100, 100, 120);
      var faceDown = map(s1, 0, 100, 0, 10);
      var fireOpacity = map(s4, 0, 100, 50, 180);
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, mouth_value, pupilSize, chin, faceDown, fireOpacity);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var roundness = map(s1, 0, 100, 0, 120);
    var size = map(s1, 0, 100, 270, 330); 
    var size2 = 270;
    var spotsAmount = Math.floor(map(s2, 0, 100, 0, 5));
      var tiltValue = map(s3, 0, 100, 0, 360);
      var grayness = map(s4, 0, 100, 0, 200);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, roundness, size, size2, spotsAmount, tiltValue, grayness);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var blink_value = Math.floor(map(s2, 0, 100, 0, 2));
    var stripeLength = map(s1, 0, 100, 15, 0);
    var greenness = map(s4, 0, 100, 30, 0);
       var headWidth  =map(s3, 0, 100, 0.9, 1.1);
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, blink_value, stripeLength, greenness, headWidth);
  }
}

function fireBody(chin){
    quad(0, chin, -70, 75, -90, 10, 70, 75);
    quad(0, chin, -70, 75, 80, -10, 70, 75);
    quad(0, chin, -70, 75, -70, -30, 70, 75);
    quad(0, chin, -70, 75, 60, -50, 70, 75);
    quad(0, chin, -70, 75, -50, -80, 70, 75);
    quad(0, chin, -70, 75, 10, -120, 70, 75);
}
function fireEyes(scale, pupilSize){
    stroke(0);
    ellipse(-50 * scale, 110 * scale, 50 * scale, 50 * scale);
    ellipse( 50 * scale, 110 * scale, 50 * scale, 50 * scale);
    
    fill(0);
    ellipse(-50 * scale, 110 * scale, pupilSize * scale, pupilSize * scale);
    ellipse( 50 * scale, 110 * scale, pupilSize * scale, pupilSize * scale);
}
function fireMouth(scale, mouth_value){
      // mouth
    noStroke();
  fill("#400B00");
  ellipse(0 * scale, 150 * scale, 100 * scale, mouth_value * scale);
}

function face2Body(size, size2, scale, grayness, spotsAmount, roundness){
     //bigRect
  rect(0, 0, size * scale, size * scale, roundness);
    fill(200, grayness);
    rect(0, 0, size * scale, size * scale, roundness);
    //spots
    fill(fg_color3_spots);
     if (spotsAmount > 0) {
  rect(45,-50,size2/6* scale, size2/6 * scale, roundness/3);       }
      if (spotsAmount > 1) {
    rect(-40,30,size2/5* scale, size2/5 * scale, roundness/3);
         }
      if (spotsAmount > 2) {
    rect(46,46,size2/4* scale, size2/4 * scale, roundness/2);
          }
     if (spotsAmount > 3) {
    rect(-30,-54,size2/4* scale, size2/4 * scale, roundness/2);
          }
     if (spotsAmount > 4) {
rect(5,5,size2/7* scale, size2/7 * scale, roundness/2);
          }
}

function face2Face(scale){
       //eyes
    fill(0);
    ellipse(-55 * scale, 30 * scale, 45 * scale, 45 * scale);
    ellipse( 55 * scale, 30 * scale, 45 * scale, 45 * scale);
    
    //mouth
    ellipse( 0 * scale, 70 * scale, 20 * scale, 15 * scale);
    
    //white of eyes
    fill(255);
    translate(5, -5);
    ellipse(-55 * scale, 30 * scale, 15 * scale, 15 * scale);
    ellipse( 55 * scale, 30 * scale, 15 * scale, 15 * scale);
}


function tigerHead(orange){
    quad(-100, 0, -60, -120, 60, -120, 100, 0);
  quad(-100, 0, -40, 70, 40, 70, 100, 0);
    fill(255, 200);
    quad(-100, 0, -40, 70, 40, 70, 100, 0);
     fill(orange);
    //ears
    quad(-60, -120, -100, -140, -90, -80, 20, -20);
    quad(60, -120, 100, -140, 90, -80, -20, -20);
    fill(255, 200);
    quad(-70, -90, -100, -140, -90, -80, -76, -72);
    quad(70, -90, 100, -140, 90, -80, 76, -72);
}
function tigerFace(scale2, blink_value, orange){
        fill(orange);
    //nose
    quad(-20, -20, -30, 20, 30, 20, 20, -20);
    fill(0);
    quad(-30, 20, -5, 30, 5, 30, 30, 20);
  // eyes
    fill(255);
    strokeWeight(2);
    stroke(0);
    translate(0,5);

    if(blink_value == 0){
    ellipse(-65 * scale2, -75 * scale2, 65 * scale2, 35 * scale2);
     ellipse(65 * scale2, -75 * scale2, 65 * scale2, 35 * scale2);
    fill(0);
    ellipse(-65 * scale2, -75 * scale2, 27 * scale2, 35 * scale2);
     ellipse(65 * scale2, -75 * scale2, 27 * scale2, 35 * scale2);
   }
      if (blink_value == 1){
      fill(255);
     ellipse(-65 * scale2, -75 * scale2, 65 * scale2, 20 * scale2);
     ellipse(65 * scale2, -75 * scale2, 65 * scale2, 20 * scale2);
    fill(0);
    ellipse(-65 * scale2, -75 * scale2, 27 * scale2, 20 * scale2);
     ellipse(65 * scale2, -75 * scale2, 27 * scale2, 20 * scale2);
     }
       if (blink_value == 2){
      fill(255);
     ellipse(-65 * scale2, -75 * scale2, 65 * scale2, 5 * scale2);
     ellipse(65 * scale2, -75 * scale2, 65 * scale2, 5 * scale2);
    fill(0);
    ellipse(-65 * scale2, -75 * scale2, 27 * scale2, 5 * scale2);
     ellipse(65 * scale2, -75 * scale2, 27 * scale2, 5 * scale2);
     }
    
    //eyebrows
    noFill();
    strokeWeight(4);
    arc(-37, -40, 60, 50, 220, 320);
    arc(37, -40, 60, 50, 220, 320);
    // mouth
    line(0,20, 0, 38);
    noFill();
   arc(-15, 15, 50, 60, 60, 130);
    arc(15, 15, 50, 60, 50, 120);
}

function tigerStripes(stripeLength){
        //stripes
    fill(0);

     triangle(-30, -123, -20, -123, -25, -90-stripeLength);
    triangle(-50, -123, -40, -123, -45, -90-stripeLength);
    
    triangle(-10, -123, 10, -123, 0, -70-stripeLength);
    
    triangle(30, -123, 20, -123, 25, -90-stripeLength);
    triangle(50, -123, 40, -123, 45, -90-stripeLength);
    
    //side stripes
    triangle(-87, -40, -70-stripeLength, -35, -90, -30);
    triangle(-93, -20, -50-stripeLength, -15, -97, -10);
    
    triangle(87, -40, 70+stripeLength, -35, 90, -30);
    triangle(93, -20, 50+stripeLength, -15, 97, -10);
    
}
function tigerWhiskers(){
      //whiskers
    noFill();
    strokeWeight(1);
arc(-50, 55, 110, 70, 220, 320);

    rotate(-2);
    arc(-40, 50, 80, 50, 220, 320);
     rotate(-5);
    arc(-38, 48, 60, 40, 220, 320);
     rotate(4);
    arc(50, 55, 110, 70, 220, 320);
        rotate(2);
    arc(40, 50, 80, 50, 220, 320);
     rotate(5);
    arc(38, 48, 60, 40, 220, 320);
    
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
