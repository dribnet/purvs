var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;
var slids;
var dolly;
var patterned;
var cartoon;
var curRandomSeed;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
curRandomSeed = int(focusedRandom(0, 100));

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  scaleSlider = createSlider(0, 100, 0);
  
  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  scaleSlider.parent('slider6Container');
//create the other objects
  slids = new SliderValues(slider1,slider2,slider3,slider4,slider5);
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
}
var macScale= 1;
// global variables for colors
var bg_color1 = [156, 159, 213];
var bg_color2 = [244, 249, 229];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];


//draws a rag doll face according to the positions of the sliders
//most of the actual drawing is done within the RagDoll object
function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
	push();
//instructs the doll object to draw itself onto a graphics object
var doll = dolly.drawFace();
translate(x, y);
 //draws the graphics object onto the main canvas in the desired position
 image(doll,w ,h);
 image(doll,0-w/2,0-h/2,w*macScale,h*macScale);
 pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
	rectMode(CENTER);
	push();
	var toon = cartoon.drawFace();
	translate(x, y);
	//draws the graphics object onto the main canvas in the desired position
 image(toon,w ,h);
 image(toon,0-w/2,0-h/2,w*macScale,h*macScale);
 pop();
	rectMode(CORNER);
	resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
	push();
	//instructs the patternFace object to draw itself onto a graphics object
	//var pat = patterned.drawFace();
	rectMode(CENTER);
	translate(x, y);
//draws the graphics object onto the main canvas in the desired position

 //image(pat,0-w/2,0-h/2,w*macScale,h*macScale);
  rectMode(CORNER);
  pop();
}

function draw () {
  macScale = map(scaleSlider.value(),0,100,1,3);
    resetFocusedRandom(slids.scaleSliders(1,1,100,true));
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
  var face_w = canvasWidth / 3;
  var face_h = canvasHeight;
  var face_y = height / 2;
  var face_x = width / 2;

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
    if (mode == 'all') {
    	face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
}

if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 100, -15, 15);
    if (mode == 'all') {
    	face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value);
}

if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
    if (mode == 'all') {
    	face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
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



