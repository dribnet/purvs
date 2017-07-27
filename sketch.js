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
var bg_color1 = [81,81,81];
var bg_color2 = [193, 193, 193];
var bg_color3 = [66,66,66];

var fg_color1 = [234, 209, 197];
var fg_color2 = [119, 175, 84];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [221, 221, 221];

function drawFace1(x, y, w, h, brow_value, eye_value, mouth_value) {
  push();
  translate(x, y);
 // rotate(tilt_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 120.0;

  fill(fg_color1);

    
    //head
    noStroke();
     beginShape();
    vertex(-80* scale,0);
    vertex(-50* scale, 70* scale);
    vertex(-40* scale, 80* scale);
    vertex(-10* scale, 100* scale);
     vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(-40* scale, -100* scale);
    vertex(-70* scale, -70* scale);
    endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(80* scale,0);
    vertex(50* scale, 70* scale);
    vertex(40* scale, 80* scale);
    vertex(10* scale, 100* scale);
    vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(40* scale, -100* scale);
    vertex(70* scale, -70* scale);
    endShape();
    pop();
    
    
    //hair
    fill(94, 57, 10);
    noStroke();
     beginShape();
  vertex(-30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(-2* scale,-70* scale);
  vertex(-85* scale, -10* scale);
    vertex(-70* scale, -70* scale);
  vertex(-50* scale, -100* scale);
   endShape();
    
  push(); 
    translate(0,0);
   beginShape();
  vertex(30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(2* scale,-70* scale);
  vertex(85* scale, -10* scale);
    vertex(70* scale, -70* scale);
  vertex(50* scale, -100* scale);
   endShape();
    pop();
    
    
    //hair buns
       beginShape();
    vertex(-90* scale,-80* scale);
    vertex(-80* scale, -90* scale);
    vertex(-65* scale, -60* scale);
    vertex (-65* scale,20* scale);
    vertex (-80* scale,40* scale);
    vertex(-90* scale, 30* scale);
    vertex(-110* scale,-60* scale);
    vertex(-95* scale,-80* scale);
        endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(90* scale,-80* scale);
    vertex(80* scale, -90* scale);
    vertex(65* scale, -60* scale);
    vertex (65* scale,20* scale);
    vertex (80* scale,40* scale);
    vertex(90* scale, 30* scale);
    vertex(110* scale,-60* scale);
    vertex(95* scale,-80* scale);
  endShape();
pop();


  // eyes
  if (eye_value === 1) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 20 * scale, 20 * scale);
    ellipse( 30 * scale, -10 * scale, 20 * scale, 20 * scale);
      fill(0);
    ellipse(-30 * scale, -10 * scale, 5 * scale, 5 * scale);
    ellipse( 30 * scale, -10 * scale, 5 * scale, 5 * scale);
  }

  if (eye_value >= 2) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 30 * scale, 30 * scale);
    ellipse( 30 * scale, -10 * scale, 30 * scale, 30 * scale);
     fill(0);
    ellipse(-30 * scale, -10 * scale, 10 * scale, 10 * scale);
    ellipse( 30 * scale, -10 * scale, 10 * scale, 10 * scale);
  }
    
    
    //brows 
    stroke(0);
    line(-20* scale,brow_value * scale,-45* scale,-30* scale);
    push();
    translate(0,0);
    line(20* scale,brow_value * scale,40* scale,-30* scale);
    pop();

    //mouth
    fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
     noFill();
      rotate(180);
      translate(0,34* scale);
     arc(0, -70, mouth_value, 20, 20, 160);

      pop();


  pop();
    
pop();

}


function drawFace2(x, y, w, h, brow_value, eye_value,  mouth_value) {
  rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 140.0;

  fill(fg_color2);
    //head
    noStroke();
     beginShape();
    vertex(-80* scale,-30* scale);
    vertex(-80* scale, 40* scale);
    vertex(-50* scale, 80* scale);
    vertex(0, 90* scale);
    vertex(0, -100* scale);
    vertex(-40* scale, -90* scale);
    vertex(-70* scale, -70* scale);
    endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(80* scale,-30* scale);
    vertex(80* scale, 40* scale);
    vertex(50* scale, 80* scale);
    vertex(0, 90* scale);
    vertex(0, -100* scale);
    vertex(40* scale, -90* scale);
    vertex(70* scale, -70* scale);
    endShape();
    pop();
    
    //ears
    fill(fg_color2);
    push();
    translate(20,0);
    beginShape();
    vertex(-100* scale,-30* scale);
    vertex(-140* scale, -25* scale);
    vertex(-190* scale, -40* scale);
    vertex(-165* scale, -10* scale);
    vertex(-140* scale, 10* scale);
    vertex(-100* scale, 20* scale);
    endShape();
    
    beginShape();
    translate(-40,0);
    vertex(100* scale,-30* scale);
    vertex(140* scale, -25* scale);
    vertex(190* scale, -40* scale);
    vertex(165* scale, -10* scale);
    vertex(140* scale, 10* scale);
    vertex(100* scale, 20* scale);
    endShape();
    pop();
    
    //eyes
      noFill();
      stroke(92, 140, 63);
      strokeWeight(2);
      
      //brow
      arc(-20, -20, brow_value_yoda, brow_value_yoda, 220, 320);
      arc(20, -20, brow_value_yoda, brow_value_yoda, 220, 320);
      
      arc(-20, -4, 30, 30, 220, 320);
      arc(20, -4, 30, 30, 220, 320);
      
      arc(-20, 0, 40, 30, 220, 320);
      arc(20, 0, 40, 30, 220, 320);
      push();
      rotate(180);
      translate(0,34);
      arc(-20, -13, 40, 30, 220, 320); 
      arc(20, -13, 40, 30, 220, 320);
      
      arc(-20, -17, 30, 30, 220, 320);
      arc(20, -17, 30, 30, 220, 320);
      pop();
     
    noStroke();  
    fill(61,61,61);
    ellipse((-40 + eye_value_yoda) * scale, -18 * scale, 13 * scale, 13 * scale);
    ellipse(( 40 + eye_value_yoda) * scale, -18 * scale, 13 * scale, 13 * scale);
    

  // mouth
  stroke(61,61,61);    
    rectMode(CENTER);
     push();
    noFill();
      rotate(180);
      translate(0,34);
      arc(0, -35, mouth_value_yoda, 50, 220, 320); 

      pop();

//hair
    stroke(221, 221, 221);
    point (-70* scale,-40* scale);
    point (-50* scale,-60* scale);
    point (-60* scale,-60* scale);
    point (-80* scale,-20* scale);
    point (-75* scale,-50* scale);
    push();
    translate(0,0);
    point (70* scale,-40* scale);
    point (65* scale,-65* scale);
    point (60* scale,-60* scale);
    point (80* scale,-20* scale);
    point (75* scale,-50* scale);
    pop();
    noStroke();
  
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, pupil_value, eye_value, mouth_value) {

  push();
  rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;


   //ears
    fill(149, 150, 129);

     beginShape();
     vertex(-30, -80);
     vertex(-80, -40);
     vertex(-90, 0);
     vertex(-90, 100);
     vertex(-75, 150);
     vertex(-45, 120);
     vertex(-40, 100);
     vertex(-60,-30);
    endShape();

    push();
    translate(0,0);

     beginShape();
     vertex(30, -80);
     vertex(80, -40);
     vertex(90, 0);
     vertex(90, 100);
     vertex(75, 150);
     vertex(45, 120);
     vertex(40, 100);
     vertex(60,-30);
    endShape();
    pop();


  stroke(stroke_color3)
  fill(fg_color3);
      //head
    noStroke();
     beginShape();
    vertex(-60,-30);
    vertex(-mouth_value -30, 40);
    vertex(-30, 90);
    vertex(0, 95);
    vertex(0, -100);
    vertex(-5, -99);
    vertex(-40, -70);
    vertex(-60, -50);
    endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(60,-30);
    vertex(mouth_value +30, 40);
    vertex(30, 90);
    vertex(0, 95);
    vertex(0, -100);
    vertex(5, -99);
    vertex(40, -70);
    vertex(60, -50);
    endShape();
    pop();
    

  
    
    //eyess
     fill(fg_color3);
    beginShape();
     vertex(-20,-eye_value-20);
    vertex(-35,-eye_value-30);
    vertex(-50, -eye_value-20);
    vertex(-50, -50);
    vertex(-20, -65);
    endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(20,-eye_value-20);
    vertex(35,-eye_value-30);
    vertex(50, -eye_value-20);
    vertex(50, -50);
    vertex(20, -65);
    endShape();
    pop();
    
    fill(255);
    ellipse(-35,-eye_value-5,20,25);
    ellipse(35,-eye_value-5,20,25);
    fill(0);
    ellipse(-35,-eye_value-5,pupil_value,15);
    ellipse(35,-eye_value-5,pupil_value,15);
    noFill();
    stroke(177, 178, 155);
    arc(-35, -eye_value-5, 30, 40, 220, 320);
    arc(35, -eye_value-5, 30, 40, 220, 320);
    
    stroke(177, 178, 155);
    push();
    translate(0,0);
    rotate(180);
    arc(-35, eye_value+5, 30, 40, 220, 320);
    arc(35, eye_value+5, 30, 40, 220, 320);
    arc(-35, eye_value, 30, 40, 220, 320);
    arc(35, eye_value, 30, 40, 220, 320); 
    pop();

  // mouth
 fill(61,61,61);    
    rectMode(CENTER);
    translate (0, 15);
    beginShape();
    vertex(-10,0);
    vertex(0,-5);
    vertex(10,0);
    vertex(mouth_value,20);
    vertex(10, 40);
    vertex(0,45);
    vertex(-10, 40);
    vertex(-mouth_value,20);
    vertex(-10,0);

    endShape();

  pop();
}

//function getRandomNumberOfEyes() {
//  random_result = focusedRandom(0, 100);
//  if(random_result < 8) {
//    return 1;
//  }
//  else if(random_result < 12) {
//    return 3;
//  }
//  else {
//    return 2;
//  }
//}

function draw () {
  resetFocusedRandom(curRandomSeed);
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

   var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      brow_value = focusedRandom(-30, -40);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(10, 50);

       brow_value_yoda = focusedRandom(20, 40);
       eye_value_yoda = int(focusedRandom(-5, 15));
       mouth_value_yoda = focusedRandom(10, 100);
        
         random_result = focusedRandom(0, 100);
        if(random_result < 8) {
             drawFace2(x, y, w, h, brow_value_yoda, eye_value_yoda, mouth_value_yoda);
        }
        else {
             drawFace1(x, y, w, h, brow_value, eye_value, mouth_value);          
        }

        

     
       // drawFace1(x, y, w, h, brow_value, eye_value, mouth_value);
       //drawFace2(x, y, w, h, brow_value, eye_value, mouth_value);

    }
  }

  // if (mode == '1' || mode == 'all') {
  //   // draw 1st face
  //   fill(bg_color1);
  //   rect(0, 0, width/3, height);
  //   var brow_value = map(s1, 0, 100, -30, -40);
  //   var mouth_value = map(s3, 0, 100, 40, 200);
  //   var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
  //   if (mode == 'all') {
  //     face_x = width / 6;
  //   }
  //   drawFace1(face_x, face_y, face_w, face_h, brow_value, eye_value, mouth_value);    
  // }

  // if (mode == '2' || mode == 'all') {
  //   // draw 2nd face
  //   fill(bg_color2);
  //   rect((width/3)-20, 0, 2*width/3, height);
  //   var brow_value = map(s1, 0, 100, 50, 70);
  //   var eye_value = map(s2, 0, 100, -15, 15);
  //   var mouth_value = map(s3, 0, 100, 50, 200);
  //   if (mode == 'all') {
  //     face_x = 3 * width / 6;
  //   }
  //   drawFace2(face_x, face_y, face_w, face_h, brow_value, eye_value, mouth_value);
  // }

  // if (mode == '3' || mode == 'all') {
  //   // draw 3nd face
  //   fill(bg_color3);
  //   rect(2*width/3+20, 0, width, height);
  //   var pupil_value = map(s1, 0, 100, 15, 5);
  //   var mouth_value = map(s3, 0, 100, 20, 40);
  //   var eye_value = Math.floor(map(s2, 0, 100,105, 110));
  //   if (mode == 'all') {
  //     face_x = 5 * width / 6;
  //   }
  //   drawFace3(face_x, face_y, face_w, face_h, pupil_value, eye_value, mouth_value);
  // }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
