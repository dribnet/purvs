var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var randomNum;

function setup () {
  
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  

  // rotation in degrees
  angleMode(DEGREES);
}

var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
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

var colorHair = [20, 20, 0];

var bg_color = "#c78a5b";//"#c6bdab";
var pupil_color1 = "#000000"
var eye_color1 = "#FFFFFF";
var eye_color2 = "#4ba817";
var eye_color3 = "#85322e";
var fg_color1 = "#fed41e";
var facial_color = "#d3af7d";
var fg_color2 = "#d3af7d";
var stroke_color = "#000000";
var teeth_color = "#FFFFFF";
var mustash_color = "#664b36";

function drawFace1(x, y, w, h, mouth_value, eye_value, hair_value) {
  push();
  scale(0.4,0.4);
  translate(x, y);


  // background color
  
  background(bg_color);
 
  // stroke color
  stroke(stroke_color)

  // move to position1, rotate, draw "head" ellipse
  // push();
  // translate(960/4, 500/2);
  // rotate(4);
  fill(fg_color1);
  ellipse(0, 0, 260, 350);

  // set fill to match background color
  fill(eye_color1);
  // draw two eyes
  ellipse(-80, -80, 80, 80);
  ellipse( 0, -80, 80, 80);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-90 + eye_value, -80, 10, 10);
  ellipse( -10 + eye_value, -80, 10, 10);

  // facial hair
  fill(fg_color2);
  ellipse(-40, 80, 220, 200);

  // mouth-hole with background color
  var mouth_size = 3 * mouth_value;
  fill(stroke_color);
  stroke(stroke_color);
  ellipse( -60, 100, mouth_size, (50 / (mouth_value - 9)));
  
  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-75, -60, -35, -60, -35, -20,  -75, -20);
  stroke(stroke_color);
  line(-75, -60, -35, -60);
  line(-35, -20,  -75, -20);
  arc(-75, -40, 40, 40, 90, 270, OPEN);
 
  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);
  

  //hair
  
  noFill();
  stroke(stroke_color);
  if(hair_value == 0){

  }
  else if(hair_value == 1){
    arc(0, -155, 110, 60, 185, 10);
  }
  else if(hair_value == 2){
    arc(0, -155, 110, 60, 185, 10);
    arc(-10, -150, 110, 60, 183, 10);
  }
  fill(stroke_color);
  line(60,-100,70,-130);
  line(80,-100,70,-130);
  line(80,-100,90,-130);
  line(100,-100,90,-130);
  //rect(0,0,100,100);
  pop();
  //resetMatrix();
}

function drawFace2(x, y, w, h, hair_value, eye_value, teeth_value) {
  
   // move to position2, rotate, draw "head" ellipse
  push();
  scale(0.4,0.4);
  translate(x,y);
  //rotate(30);
  fill(fg_color1);
  ellipse(0, 0, 260, 350);

  // draw hair
  beginShape();
  vertex(-130,-10);
  vertex(-130,-215 + hair_value);
  vertex(-104, -175);
  vertex(-78, -215 + hair_value);
  vertex(-52, -175);
  vertex(-26, -215 + hair_value);
  vertex(0, -175);
  vertex(26, -215 + hair_value);
  vertex(52, -175);
  vertex(78, -215 + hair_value);
  vertex(104, -175);
  vertex(130, -215 + hair_value);
  vertex(130,-10);
  vertex(-130,-10);
  endShape(CLOSE);

  noStroke();
  rect(-129, -15, 258, 10);

  stroke(stroke_color);
  // set fill to match background color
  fill(eye_color1);
  // draw two eyes
  ellipse(-60, -80, 80, 80);
  ellipse( 20, -80, 80, 80);

  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-80, -80, eye_value, eye_value);
  ellipse( 10, -80, eye_value, eye_value);

  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-55, -60, -15, -60, -15, -20,  -55, -20);
  stroke(stroke_color);
  line(-55, -60, -15, -60);
  line(-15, -20,  -55, -20);
  arc(-55, -40, 40, 40, 90, 270, OPEN);

  // mouth-hole with background color
  fill(bg_color);
  noStroke();
  //ellipse( -70, 70, 250, 50);
   arc(-70, 70, 250, 50, 195, 155, CHORD);

  stroke(stroke_color);
  noFill();
  arc(-70, 70, 250, 50, 202, 149);

  stroke(stroke_color);
  fill(eye_color1);
  arc(-70, 70, 250, 50, 230, 115, CHORD);
  if (teeth_value == 0){
    line(-87, 70, 53, 70);
    line(-70, 45, -65, 95);
    line(-50, 45, -45, 94);
    line(-30, 46, -25, 93);
    line(-10, 48, -5, 91);
    line(10, 50, 15, 88);
    line(30, 55, 35, 83);
  }
  else if(teeth_value == 1){
    line(-87, 70, 53, 70);
    line(-70, 45, -65, 95);
    line(-30, 46, -25, 93);
    line(10, 50, 15, 88);
  }
  else if(teeth_value ==2){
    line(-87, 70, 53, 70);
  }
  pop();
    

  resetMatrix();
}

function drawFace3(x, y, w, h, tilt_value, mustash_width, eye_value) {
  push();
  scale(0.4,0.4);
  rectMode(CENTER);
  translate(x, y);
  stroke(stroke_color);
  //hair
  fill(mustash_color);
  rect(5,-100,240,155,30,60,10,10);
  
  // face
  fill(fg_color1);
  ellipse(0, 0, 260, 350);
  //hair
  fill(mustash_color);
  noStroke();
  rect(1,-134,225, 83,50,70,0,0);
  stroke(stroke_color);
  fill(fg_color1);
  arc(0,-70,242,100,190,350, OPEN);
  fill(mustash_color);
  arc(100,-100,50,300,70,200,OPEN);
  noStroke();
  arc(100,-100,52,298,50,250,OPEN);
  
  
  


  stroke(stroke_color);
  // set fill to match background color
  if(eye_value == 1){
    fill(eye_color1);
  }
  else if(eye_value == 0){
    fill(eye_color2);
  }
  else if(eye_value == 2){
    fill(eye_color3);
  }
  // draw two eyes
  ellipse(-90, -40, 80, 80);
  ellipse( -10, -40, 80, 80);

  // glasses
  line(30,-40,140,-40);
  // ear
  fill(fg_color1);
  stroke(stroke_color);
  arc(130, -10, 50, 70, 220, 120, OPEN);

  // set fill back to foreground for eyeballs
  fill(pupil_color1);
  ellipse(-110, -40, 10, 10);
  ellipse( -20, -40, 10, 10);

  //nose
  fill(fg_color1);
  stroke(fg_color1);
  quad(-85, -20, -45, -20, -45, 20,  -85, 20);
  stroke(stroke_color);
  line(-85, -20, -45, -20);
  line(-45, 20,  -85, 20);
  arc(-85, 0, 40, 40, 90, 270, OPEN);
  
  // mouth-hole with background color
  fill(bg_color);
  noStroke();
  //ellipse( -70, 70, 250, 50);
   arc(-70, 70, 250, 50, 195, 155, CHORD);

  stroke(stroke_color);
  noFill();
  arc(-70, 70, 250, 50, 202, 149);

  stroke(stroke_color);
  fill(eye_color1);
  arc(-70, 70, 250, 50, 230, 115, CHORD);
  
  line(-87, 70, 53, 70);
  line(-70, 45, -65, 95);
  line(-50, 45, -45, 94);
  line(-30, 46, -25, 93);
  line(-10, 48, -5, 91);
  line(10, 50, 15, 88);
  line(30, 55, 35, 83);
  
  fill(mustash_color);
  push();
  translate(-50,60);
  rotate(tilt_value);
  // mustash
  arc(0,0,180 + mustash_width,80,180,0,CHORD);
  pop();
  //pop();
    
  pop();
  resetMatrix();
  
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);
  fill(bg_color);
  rect(0,0,canvasWidth,canvasHeight);
  //noStroke();

  var cols = 3;
  var rows = 5;

  var w = 450;
  var h = 400;
  for(var i=0; i<5; i++) {
    for(var j=0; j<3; j++) {
      var x = (w*i) + 225;
      var y = (h*j) + 225;
     // randomNum = focusedRandom(0,100);

      // var backgound_color = Math.floor(focusedRandom(0,2));
      // if(backgound_color == 0){
      //   fill(bg_color);
      // }
      // else{
      //   fill(bg_color1);
      // }
      

     var value1 = focusedRandom(-10, 10);
     var value2 = focusedRandom(-10, 10);
     var value3 = Math.floor(focusedRandom(0,3));
     var character = Math.floor(focusedRandom(1,3));

     if(character == 0){
      drawFace1(x, y, w, h, value1, value2, value3);
     }
     else if(character == 1){
      drawFace2(x, y, w, h, value1, value2, value3);
     }
     else if(character == 2){
      drawFace3(x, y, w, h, value1, value2, value3);
     }
    
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
