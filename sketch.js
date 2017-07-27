var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var drawFaceSelector;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  // slider1 = createSlider(0, 100, 50);
  // slider2 = createSlider(0, 100, 50);
  // slider3 = createSlider(0, 100, 50);
  // slider4 = createSlider(0, 100, 50);
  // slider5 = createSlider(0, 100, 50);

  // slider1.parent('slider1Container');
  // slider2.parent('slider2Container');
  // slider3.parent('slider3Container');
  // slider4.parent('slider4Container');
  // slider5.parent('slider5Container');

  // drawFaceSelector = createSelect();
  // drawFaceSelector.option('1');
  // drawFaceSelector.option('2');
  // drawFaceSelector.option('3');
  // drawFaceSelector.option('all')
  // drawFaceSelector.value('all');
  // drawFaceSelector.parent('selector1Container');
  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();

  bert_drawFace = color(45, 90, 95)
  bert_nose = color(29, 96, 94)

  ernie_drawFace = color(30, 90, 92)

  mouth = color(351, 100, 55)

  oscar_drawFace = color(75, 80, 50)
  oscar_brow = color(23, 80, 30)
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color = "#ffffff";
var stroke_color = "#c78a5b";

var bert_drawFace //yellow
var bert_nose //orange

var ernie_drawFace = "rgb(217, 118, 37)" //orange
var ernie_nose = "rgb(218, 10, 31)" //red

var oscar_drawFace;
var oscar_brow;


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

function drawErnie(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(-tilt_value/2);
  scale(0.5);
  //squeeze ernie
  fill(ernie_drawFace);
  ellipse(0, 0, 290, 230);

  drawMouthEllipse(0, 10, 230, 40+40*mouth_value/100, 0.4 + 0.4*mouth_value/100, mouth, ernie_drawFace);

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -40, 60, 45);
  ellipse( 40, -40, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-30-eye_value/100*20, -40, 20, 20);
  ellipse( 30+eye_value/100*20, -40, 20, 20);

  fill(ernie_nose)
  ellipse(0, 0, 50, 70);
  pop();
}

function drawBert(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value/2);
  scale(0.5);
  fill(bert_drawFace);
  ellipse(0, 0, 270, 400);

  translate(0, 30)

  var bert_mouth_h = 54;
  // mouth-hole with background color
  drawMouthArc(0, 30, 200, 54*mouth_value/100, mouth, true);

  // set fill to match background color
  var diff = map(eye_value, 0, 100, 0, 10);
  fill("white");
  // draw two eyes
  ellipse(-50, -80+diff, 70, 70);
  ellipse( 50, -80+diff, 70, 70);

  // set fill back to foreground for eyeballs
  fill("black");
  ellipse(-40, -80+diff, 30, 30);
  ellipse( 40, -80+diff, 30, 30);

  //bert eyebrows
  fill("black")
  rect(0, -130, 180, 10+eye_value/100*20)

  fill(bert_nose);
  ellipse(0, -10, 80, 110)
  pop();
}

function drawOscar(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value);
  scale(0.5);
  //squeeze oscar
  fill(oscar_drawFace);
  ellipse(0, 0, 290, 200);

  drawMouthArc(0, 20, 260, 20+30*mouth_value/100, 'black', oscar_drawFace);

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -20, 60, 45);
  ellipse( 40, -20, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-40, -20, 30, 30);
  ellipse( 40, -20, 30, 30);

  //oscar eyebrows
  fill(oscar_brow)
  rect(0, map(eye_value, 0, 100, -65, -40), 180, 20)

  pop();
}

function drawMouthArc(x, y, width, height, mouthColor, faceColor, inverse){
  //default to 0
  inverse |= false

  // if(inverse)
  //   y += height;
  fill(mouthColor);
  if(inverse)
    arc(x, y+height, width, height*2, 180, 180, CHORD)
  else
    arc(x, y, width, height*2, 0, 180, CHORD)
}

function drawMouthEllipse(x, y, width, height, ellipseMod, mouthColor, faceColor, inverse){
  var ellipseHeight = height*2*ellipseMod;
  var ellipseY = y-height+ellipseHeight/2
  // mouth-hole with background color
  fill(mouth);
  ellipse(x, y, width, height*2);

  //cut out mouth
  fill(ernie_drawFace);
  ellipse(x, ellipseY, width+1, ellipseHeight+1);
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background('white');

  // draw 1st drawFace
  fill(bg_color1);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var drawFace = [drawErnie, drawBert, drawOscar][floor(random()*3)];
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      var tilt_value = focusedRandom(-90, 90);
      var eye_value = focusedRandom(0, 100);
      var mouth_value = constrain(focusedRandom(10, 100) + sin(360*millis()/focusedRandom(100, 1000))*50, 10, 100);
      drawFace(x, y, w, h, tilt_value, eye_value, mouth_value);
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
