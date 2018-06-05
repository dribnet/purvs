/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let pointSize = 40;
let size = 80;

/* Override some variables with high-resolution final version */
if (finalVersion) {
	pointSize = 20;
}

let dongles = [];
let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let numPoints = 8;
let points = [];

function preload() {
	sourceImg = loadImage("input_1.jpg");
	maskImg = loadImage("mask_1.png");
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

function draw () {



	for(let i=0;i<1080/pointSize;i++) {
		let x = int(i * pointSize);
		let y = int(renderCounter * pointSize);
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
    	rect(x, y, pointSize, pointSize);
    }
    else {
    	//rect(x-halfSize, y-halfSize, pointSize, pointSize); 


    	stroke(pix);
    	strokeWeight(0.5);
    	for (k = 0; k < numPoints; k++) {
    		for (j = 0; j < numPoints; j++) {
    			line(x - numPoints*1.5 + noise(k)*size, y - numPoints*1.5 + noise(j)*size, x  - numPoints*1.5 + noise(numPoints-k)*size, y - numPoints*1.5  + noise(numPoints-j)*size );
    		}
    	}



    }
}
renderCounter = renderCounter + 1;
if(renderCounter > 1920/pointSize) {
	console.log("Done!")
	noLoop();
    // saveBlocksImages();
}
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	}
}


class Dongle {

	constructor(xPos, yPos, xOfst, yOfst) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.xOfst = xOfst;
		this.yOfst = yOfst;
	}

	doDraw() {

		alert(this.xPos);
	}

}

let dongle = new Dongle( x, y);
dongle.doDraw();






