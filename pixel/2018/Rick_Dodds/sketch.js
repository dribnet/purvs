/* Set to true to make final high-resolution version */
const finalVersion = true;
var SecondDraw = false;
var bground = false;
var Y_AXIS = 1;
var X_AXIS = 2;

/* Default versions of variables */
let elementSpacing = 40;
let circleSize = 60;
let squareSize = 40;
var DrawCalls = 300;

/* Override some variables with high-resolution final version */
if (finalVersion) {
	let scale = 3;
	elementSpacing = elementSpacing/scale;
	circleSize = circleSize/scale;
	squareSize = squareSize/scale;
	DrawCalls = DrawCalls * scale;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let renderCounterTwo=0;
var PixelDensity = 100*2;


function preload() {
	sourceImg = loadImage("input_AnS1.png");
	maskImg = loadImage("mask_AnS1.png");
	maskTwoImg = loadImage("mask_AnS3.png");
}

function setup () {
	let main_canvas = createCanvas(1080, 1920);
	main_canvas.parent('canvasContainer');

	imageMode(CENTER);
	noStroke();
	background(255);
	sourceImg.loadPixels();
	maskImg.loadPixels();
	console.log("finalVersion is " + finalVersion);
}

//converts colour to greyscale
function convertRgbToHsluv(c) {
	return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
	// Background handled here
  	if(bground==false){
		b1 = color(255);
	  	b2 = color(0);
	  	setGradient(0, 0, width, height, b1, b2, Y_AXIS);
		bground=true;
	}
	
	for(let i=0;i<1080/elementSpacing;i++) {
		let x = int(i * elementSpacing);
		let y = int(renderCounter * elementSpacing);
		let dx = floor(random(elementSpacing));
		let dy = floor(random(elementSpacing));
		let pix = sourceImg.get(x, y);
		let mask = maskImg.get(x, y);
		// let maskTwo = maskTwoImg.get(x, y);
		let x2 = floor(random(sourceImg.width));
		let y2 = floor(random(sourceImg.height));
		let pix2 = sourceImg.get(x2, y2);
		let maskTwo = maskTwoImg.get(x2, y2);
		let halfSize = squareSize/2;
		
		//second mask drawn here
		if(maskTwo[0] > 128 && SecondDraw == true) {
			fill(pix2);
			noStroke();
			//adds random scaling to the circles
			let rand = getRandom(1,2);
			star(x2, y2, squareSize/rand, (halfSize*1.5)/rand, 9);
		}
		
		//first mask drawn here
		if(mask[0] > 128 && SecondDraw == false) {
			noStroke();
			fill(pix);
			star(x, y, squareSize, halfSize, 4); 
		}
		else {
			if( SecondDraw == false){
		      // add random offsets
		      x = x + dx;
		      y = y + dy;
		      // convert to grayscale (remove color, keep brightness in hsluv colorspace)
		      let hsluvColor = convertRgbToHsluv(pix);
		      fillHsluv(0, 0, hsluvColor[2]);
		      stroke(3);
		      star(x, y, squareSize*1.1, halfSize/3, 3);
	  		}
		}
	}	
	//first draw
	renderCounter = renderCounter + 1;
	if(renderCounter > 1920/elementSpacing && SecondDraw == false) {
		console.log("First Draw Done!")
		SecondDraw = true;

	} 
	//seond draw
	if(SecondDraw) {
		renderCounterTwo = renderCounterTwo + 1; 
		if(renderCounterTwo > DrawCalls) {
			console.log("Second Draw Done!")
			noLoop();

		}
	}
}


function keyTyped() {
	if (key == '!' || key == '1') {
		saveBlocksImages();
	}
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//creates a colour gradient source: https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

//star function, draws at x and y, radius1 equals the outer size, radius 2 equals the inner size, npoints is the number of points to the star
function star(x, y, radius1, radius2, npoints) {
	var angle = TWO_PI / npoints;
	var halfAngle = angle/2.0;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
		var sx = x + cos(a) * radius2;
		var sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a+halfAngle) * radius1;
		sy = y + sin(a+halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}