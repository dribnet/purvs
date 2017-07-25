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

  smooth();
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color3 = "#660033";
var head_color = "#8585ad";
var jaw_color = "#f0f0f5";
var Seye_color = "#000000";
var Snose_color = "#1f1f2e";
var tooth_color = "#ffff00";

function drawFace3(x, y, size, reflection_value, beard_value, mouth_value, tooth_value, jaw_value, head_value){
  push();
  translate(x, y);
  scale(size);

  //jaw
  fill(jaw_color);
  quad(15, 10, 8, 28, -8, 28, -15, 10);

  //head
  fill(head_color);
  quad(15, -25, 27 * head_value, 10 * head_value, 0, 10, 0, -25);
  quad(-15, -25, -27 * head_value, 10 * head_value, 0, 10, 0, -25);

  //eye line
  fill(head_color);
  rect(-15, -30, 30, 2, 10);

  //eyes
  push();
  fill(Seye_color);
  stroke(head_color);
  rotate(5);
  ellipse(13, -28, 8, 13);
  rotate(-10);
  ellipse(-13, -28, 8, 13);
  pop();
  //reflection
  stroke(tooth_color);
  noFill();
  strokeWeight(1 * reflection_value);
  bezier(15, -31 * reflection_value, 18 * reflection_value, -30, 18, -27 * reflection_value, 16 * reflection_value, -25 * reflection_value);
  bezier(-15, -31 * reflection_value, -18 * reflection_value, -30, -18, -27 * reflection_value, -16 * reflection_value, -25 * reflection_value);
 
  //nose
  fill(Snose_color);
  noStroke();
  triangle(0, -3, 4, -18, -4, -18);

  //beard
  stroke(Snose_color);
  strokeWeight(0.8 * beard_value);
  line(10, -7, 15 * beard_value, -14 * beard_value);
  line(12, -1, 17 * beard_value, -7 * beard_value);
  line(15, 5, 20 * beard_value, -1 * beard_value);

  line(-10, -7, -15 * beard_value, -14 * beard_value);
  line(-12, -1, -17 * beard_value, -7 * beard_value);
  line(-15, 5, -20 * beard_value, -1 * beard_value);

  //tooth
  var y1 = 12.6 * tooth_value;
  var y2 = 7.4;
   
  fill(bg_color3);
  stroke(tooth_color);
  strokeWeight(0.2);
  beginShape(TRIANGLE_STRIP);
  vertex(-9.5, y2);

  vertex(-8, y1);
  vertex(-6.5, y2);
  vertex(-5, y1);  

  vertex(-3.5, y2);
  vertex(-2, y1);
  vertex(-0.5, y2);

  vertex(1, y1);
  vertex(2.5, y2);
  vertex(4, y1);

  vertex(5.5, y2);
  vertex(7, y1);
  vertex(8.5, y2);

  vertex(9.5, y1);
  endShape();

  //lips
  noFill();
  stroke(Snose_color);
  strokeWeight(2.5);
  beginShape();
  vertex(-11, 10);
  bezierVertex(-5, 5, 5, 5, 11, 10);
  vertex(11, 10);
  bezierVertex(5 * mouth_value, 15 * mouth_value, -5 * mouth_value, 15 * mouth_value, -11, 10);
  endShape();

  //jaw lines
  stroke(Snose_color);
  strokeWeight(0.9);
  bezier(-5, 18, -1 * jaw_value, 20 * jaw_value, 1 * jaw_value, 20 * jaw_value, 5, 18);
  line(0, 20 * jaw_value, 0, 25);

  pop();
}

function draw () {
  
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color3);

  var w = width / 5;
  var h = height / 3;

  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++){
      var x = w/2 + w*j;
      var y = h/2 + h*i;
      var size = 1.6;

      var reflection_value = focusedRandom(0.9, 1.3);
      var beard_value = focusedRandom(0, 2);
      var head_value = focusedRandom(0.5, 1.5);
      var mouth_value = focusedRandom(0.9, 1.15);
      var tooth_value = focusedRandom(0.95, 1.12);
      var jaw_value = focusedRandom(0.95, 1.1);
      drawFace3(x, y, size, reflection_value, beard_value, mouth_value, tooth_value, jaw_value, head_value);
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
