let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

const fW = canvasWidth/4;
const fH = canvasHeight/4;

let rand = false;

let rotation = 0;

const shapes = ['rec', 'tri', 'cir'];

const letterA = {
  "Shape": 'tri',   
  "angle1": 0,
  "angle2": 255,
  "posX": 0,
  "posY": 0,
  "scale1": 0,
  "scale2": 0,
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  noLoop();
  angleMode(DEGREES);
}

function draw(){
  background('grey');
  strokeWeight(4);
  stroke(255);
  noFill();
  letter(letterA);
}

function letter(letterData){
	if(rand == false){var shape = letterData["Shape"];}
	else{var shape = random(shapes);};

	let angle1 = letterData['angle1'];
	let angle2 = letterData['angle2'];
	let scale1 = letterData['scale1'];
	let scale2 = letterData['scale2'];
	let posX = letterData['posX'];
	let posY = letterData['posY'];

	if(shape == ('rec')){
		rotate(360-angle1);
		rect(fW, fH, scale1, scale1);
		rotate(360-angle2);
		rect(fW+posX, fH+posY, scale2, scale2);
	}
	else if(shape == ('tri')){
		rotate(360-angle1);
		triangle(fW, fH, scale1, fH+scale1, fW+scale1, fH);
		rotate(360-angle2);
		triangle(fW+posX, fH+posY, scale2, fH+scale2, fW+scale2, fH);
	}
	else if(shape == ('cir')){
		rotate(360-angle1);
		ellipse(fW, fH, scale1);
		rotate(360-angle2);
		ellipse(fW+posX, fH+posY, scale2);
	};
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

