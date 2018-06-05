/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let pointSize = 40;
let bigPoint = 65;

/* Override some variables with high-resolution final version */
if (finalVersion) {
	pointSize = 20;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let numPoints = 15;
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
    	stroke(pix);
    	var r = pix[0];
    	var g = pix[1];
    	var b = pix[2];
    	var a = pix[3];
    	var fillcol;
    	fill(pix)
    	noStroke();
    	rect(x, y, pointSize, pointSize); 
    	fillcol = color(r+10,g+10,b+10,a);
    	fill(fillcol);
    	rect(x+pointSize/8, y+pointSize/8, pointSize*0.75, pointSize*0.75); 
    	fillcol = color(r+20,g+20,b+20,a);
    	fill(fillcol);
    	rect(x+pointSize/4, y+pointSize/4, pointSize*0.5, pointSize*0.5); 
    	fillcol = color(r+30,g+30,b+30,a);
    	fill(fillcol);
    	//i know this isn't how math works, but it's how my brain works
    	rect(x+pointSize/2-pointSize/8, y+pointSize/2-pointSize/8, pointSize*0.25, pointSize*0.25); 
    	
    }
    else {
    	//noStroke();
    	//rect(x, y, pointSize, pointSize); 


    	stroke(pix);
    	strokeWeight(0.2);
    	var m = numPoints;
    	var n = numPoints;
    	for (k = 0; k < numPoints; k++) {
    		n--
    		for (j = 0; j < numPoints; j++) {
    			n--
    			line(x+ noise(k)*bigPoint - 10, y + noise(j)*bigPoint - 10, x + noise(n)*bigPoint - 10, y + noise(m)*bigPoint - 10 );
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









