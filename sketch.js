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
var bg_color1 = [47, 59, 64];

var fg_color1 = [255, 231, 191];
var fg_color2 = [224,177,120];
var fg_color3 = [59, 52, 44];

var colorHair = [20, 20, 0];


function drawFace2(x, y, w, h, bread_value, mouth_value, eye_value, colour_value, eye_size, mouth_size) {
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
  var scale = extent / 220.0;

  //crust

  fill(136, 106, 75);
  rect(0, 10, (320 * scale) + bread_value, 320 * scale, 25);
  ellipse(-60, -90, 145 + bread_value, 95 + bread_value);
  ellipse(60, -90, 145 + bread_value, 95 + bread_value);

  if (colour_value <= 1){
  fill(fg_color1);
  }
  if (colour_value == 2){
  fill(fg_color2);
  }
  if (colour_value > 2){
  	fill(fg_color3);
  }

  //toast

  rect(0, 10, (300 * scale) + bread_value, 300 * scale, 20);
  ellipse(-60, -90, 130 + bread_value, 80 + bread_value);
  ellipse(60, -90, 130 + bread_value, 80 + bread_value);

  // tomatoes

  if (eye_value < 2){
  fill(176, 36, 26);
  ellipse( 0 * scale, -70 * scale, (140 * scale) + eye_size, (140 * scale) + eye_size);

  fill(240,82,67);
  ellipse( 0 * scale, -70 * scale, (130 * scale) + eye_size, (130 * scale) + eye_size);

  fill(255,128,125)

  ellipse(0 * scale, -70 * scale, 60 * scale, 20 * scale);
  ellipse(0 * scale, -70 * scale, 20 * scale, 60 * scale);


  push();
  translate(0*scale, -70*scale);
  rotate(45);
  ellipse(0, 0, 20 * scale, 60 * scale);
  rotate(90);
  ellipse(0, 0, 20 * scale, 60 * scale);
  pop();

  }

  if (eye_value >= 2) {
  fill(176, 36, 26);
  ellipse(-75 * scale, -70 * scale, (120 * scale) + eye_size, (120 * scale) + eye_size);
  ellipse( 75 * scale, -70 * scale, (120 * scale) + eye_size, (120 * scale) + eye_size);

  fill(240,82,67);
  ellipse(-75 * scale, -70 * scale, (110 * scale) + eye_size, (110 * scale) + eye_size);
  ellipse( 75 * scale, -70 * scale, (110 * scale) + eye_size, (110 * scale) + eye_size);

  fill(255,128,125)
  ellipse(-75 * scale, -70 * scale, 50 * scale, 20 * scale);
  ellipse(-75 * scale, -70 * scale, 20 * scale, 50 * scale);
  ellipse(75 * scale, -70 * scale, 50 * scale, 20 * scale);
  ellipse(75 * scale, -70 * scale, 20 * scale, 50 * scale);
  push();
  translate(-75*scale, -70*scale);
  rotate(45);
  ellipse(0, 0, 20 * scale, 50 * scale);
  rotate(90);
  ellipse(0, 0, 20 * scale, 50 * scale);
  pop();
  push();
  translate(75*scale, -70*scale);
  rotate(45);
  ellipse(0, 0, 20 * scale, 50 * scale);
  rotate(90);
  ellipse(0, 0, 20 * scale, 50 * scale);
  pop();
}

  // avacado
  fill(219, 200, 124);
  stroke(70, 145, 31);
  strokeWeight(4);
  arc(0, 90, 150 + mouth_size, 90 + mouth_size, 180, QUARTER_PI);
  noStroke();

  if (colour_value <= 1){
  fill(fg_color1);
  }
  if (colour_value == 2){
  fill(fg_color2);
  }
  if (colour_value > 2){
  	fill(fg_color3);
  }
  ellipse((10 + mouth_value), 95, 55, 50);


  pop();
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);


  var w = 2 *canvasWidth / 5;
  var h = 2 *canvasHeight / 3;
  scale(0.5, 0.5);
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      var bread_value = focusedRandom(0, 70);
      var mouth_value = focusedRandom(0, 15);
      var eye_value = focusedRandom(0, 3);
      var eye_size = focusedRandom(-15, 10);
      var colour_value = int(focusedRandom(0, 4));
      var mouth_size = focusedRandom(-10, 15);
      drawFace2(x, y, w, h, bread_value, mouth_value, eye_value, colour_value, eye_size, mouth_size);
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
