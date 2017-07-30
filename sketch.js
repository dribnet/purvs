var canvasWidth = 960;
var canvasHeight = 500;
var slider1;
var faceSelector;
var slids;
var dolly;
var patterned;
var cartoon;
var curRandomSeed;
var button;
var macScale;

function setup () {
// create the drawing canvas, save the canvas element
var main_canvas = createCanvas(canvasWidth, canvasHeight);
main_canvas.parent('canvasContainer');
//randomization
curRandomSeed = int(focusedRandom(0, 100));
randButton = createButton('randomize');
randButton.mousePressed(changeRandomSeed);
randButton.parent('selector1Container');

  // create scale slider
  slider1 = createSlider(0, 100, 0);
  slider1.parent('slider1Container');
  
//create the other objects
slids = new SliderValues();
slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
dolly = new RagDoll(canvasWidth/3,canvasHeight,slids);
cartoon = new CartoonFace(canvasWidth/3,canvasHeight,slids);
patterned = new PatternFace(canvasWidth/3,canvasHeight,slids);

  // rotation in degrees
  angleMode(DEGREES);
  //the scaling to deal with the difference between personal and lab computers
  macScale = map(slider1.value(),0,100,1,6);
}

//changes the randomiser and sends the new numbers to the slider object
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

//draws a cartoon face according to the positions of the sliders
//most of the actual drawing is done within the CartoonFace object
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

//draws a patterned face according to the positions of the sliders
//most of the actual drawing is done within the PatternFace object
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
    //the scaling to deal with the difference between personal and lab computers
    macScale = map(slider1.value(),0,100,1,6);
    resetFocusedRandom(curRandomSeed);
    noStroke();
    var s1 = slider1.value();

//which face gets drawn
var faceType = focusedRandom(1,10);
if(faceType<4){
  background(fg_color1);
  var w = (canvasWidth / 7)*macScale;
  var h = (canvasHeight / 2.4)*macScale;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = (h/macScale)/2 + (h/macScale)*i;
      var x = (w/macScale)/2 + (w/macScale)*j;
      tilt_value = focusedRandom(10, 50);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(30, 140);
      drawFace2(x+((j+2)*((w/macScale)/4)), y-(i*((h/macScale)/4)), w, h, tilt_value, eye_value, mouth_value);

    }}}
    else{
      background(bg_color1);

      var w = (canvasWidth / 8)*macScale;
      var h = (canvasHeight / 2.7)*macScale;
      for(var i=0; i<3; i++) {
        for(var j=0; j<5; j++) {
          if (i == 1){var q = 20;}
          else{var q = -55;}
          var y = (h/macScale)/2 + (h/macScale)*i;
          var x = (w/macScale)/2 + (w/macScale)*j;
          tilt_value = focusedRandom(-100, 55);
          eye_value = int(focusedRandom(1, 3));
          mouth_value = focusedRandom(30, 140);
      //comment to make file different
      drawFace1(14+x+(x/2)-q, 16+y-(y/6)-focusedRandom(-25,25), w, h, tilt_value, eye_value, mouth_value);
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



