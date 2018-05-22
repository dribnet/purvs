/* Set to true to make final high-resolution version */
const finalVersion = true;

/* Default versions of variables */
let elementSpacing = 40;
let circleSize = 50;
let squareSize = 40;

/* Override some variables with high-resolution final version */
if (finalVersion) {
	let scale = 3;
	elementSpacing = elementSpacing/scale;
	circleSize = circleSize/scale;
	squareSize = squareSize/scale;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
var PixelDensity = 100*2;
var DrawCalls = 50;

function preload() {
	sourceImg = loadImage("input_4.jpg");
	maskImg = loadImage("mask_6.png");
}

function setup () {
	let main_canvas = createCanvas(1080, 1920);
	main_canvas.parent('canvasContainer');

	imageMode(CENTER);
	noStroke();
	background(255);
	sourceImg.loadPixels();
	maskImg.loadPixels();
}

function convertRgbToHsluv(c) {
	return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
	for(let i=0;i<1080/elementSpacing;i++) {
		let x = int(i * elementSpacing);
		let y = int(renderCounter * elementSpacing);
		let dx = floor(random(elementSpacing/2));
		let dy = floor(random(elementSpacing/2));
		let pix = sourceImg.get(x, y);
		let mask = maskImg.get(x, y);
		let halfSize = squareSize/2;
		if(mask[0] > 128) {
			noStroke();
			fill(pix);
			star(x, y, squareSize, halfSize, 4); 
  		}
  		else {
	      // add random offsets
	      x = x + dx;
	      y = y + dy;
	      // convert to grayscale (remove color, keep brightness in hsluv colorspace)
	      let hsluvColor = convertRgbToHsluv(pix);
	      fillHsluv(0, 0, hsluvColor[2]);
	      stroke(3);
	      star(x, y, squareSize, halfSize/1.5, 3);
	  	}
	}	
	renderCounter = renderCounter + 1;
	if(renderCounter > 1920/elementSpacing) {
		console.log("Done!")
		noLoop();
	    // saveBlocksImages();
	}
}

// function draw () {
//   for(let i=0;i<PixelDensity;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     let pointSize = 25/1.5;
//     let halfSize = 12/1.5;
//     fill(pix);
//     if(mask[0] > 128) {
//       star(x, y, pointSize, halfSize/1.5, 3);
//  		//ellipse(x, y, pointSize, pointSize);
//     }
//     else {
//       star(x, y, pointSize, halfSize, 4);      
//   		//rect(x-halfSize, y-halfSize, pointSize, pointSize);    
//     }
//   }
//   renderCounter = renderCounter + 1;
//   if(renderCounter > DrawCalls) {
//     console.log("Done!")
//     noLoop();
//     // saveBlocksImages();
//   }
// }

function keyTyped() {
	if (key == '!' || key == '1') {
		saveBlocksImages();
	}
}

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