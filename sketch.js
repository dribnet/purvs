var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;
var slids;
var dolly;
var patterned;
var cartoon;
var curRandomSeed;
var button;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');


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
//create the other objects
  slids = new SliderValues(slider1,slider2,slider3,slider4,slider5);
   slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  dolly = new RagDoll(canvasWidth/3,canvasHeight,slids);
  cartoon = new CartoonFace(canvasWidth/3,canvasHeight,slids);
patterned = new PatternFace(canvasWidth/3,canvasHeight,slids);
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

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
   slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
}

// global variables for colors
var bg_color1 = [156, 159, 213];
var bg_color2 = [244, 249, 200];
var bg_color3 = [70, 70, 120];

var fg_color1 = [249, 231, 239];
var fg_color2 = [175, 212, 175];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];


//draws a rag doll face according to the positions of the sliders
//most of the actual drawing is done within the RagDoll object
function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
	//make each face different
  slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  push();
//instructs the doll object to draw itself onto a graphics object
var doll = dolly.drawFace();
translate(x, y);
 //draws the graphics object onto the main canvas in the desired position
 rotate(tilt_value);
 image(doll,0-w/2,0-h/2,w,h);
 pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
	//make each face different
  slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  rectMode(CENTER);
	push();
	var toon = cartoon.drawFace();
	translate(x, y);
	//draws the graphics object onto the main canvas in the desired position

 image(toon,0-w/2,0-h/2,w,h);
 pop();
	rectMode(CORNER);
	resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
	push();
	//instructs the patternFace object to draw itself onto a graphics object
	var pat = patterned.drawFace();
	rectMode(CENTER);
	translate(x, y);
//draws the graphics object onto the main canvas in the desired position
 image(pat,w ,h);
 image(pat,0-w/2,0-h/2,w,h);
  rectMode(CORNER);
  pop();
}

function draw () {
   resetFocusedRandom(curRandomSeed);
	noStroke();


  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();


//which face gets drawn
var faceType = focusedRandom(1,10);
if(faceType<4){
  background(fg_color1);
  var w = canvasWidth / 7;
  var h = canvasHeight / 2.4;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      tilt_value = focusedRandom(10, 50);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(30, 140);
      drawFace2(x+((j+2)*(w/4)), y-(i*(h/4)), w, h, tilt_value, eye_value, mouth_value);
    
}}}
  else{
  background(bg_color1);
	
var w = canvasWidth / 8;
  var h = canvasHeight / 2.7;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      if (i == 1){var q = 20;}
        else{var q = -55;}
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      tilt_value = focusedRandom(-100, 55);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(30, 140);
      //comment to make file different
      drawFace1(x+(x/2), y-(y/6), w, h, tilt_value, eye_value, mouth_value);
    }}


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



