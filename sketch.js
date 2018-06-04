let sourceImage = null;
let deltaMap = [];

const RED_MULT = 1;
const GREEN_MULT = 1;
const BLUE_MULT = 1;

const DELTA_THRESHOLD = 0.2;
const FLOOR_MULT = 0.95;
const CEIL_MULT = 1.15;
const BLUR_ITERATIONS = 10;

const REGION_SIZE = 10; //24 may be solid but figure it out per images, 30 is also good
const X_REGIONS = 1080/REGION_SIZE;
const Y_REGIONS = 1920/REGION_SIZE;

function preload() {
	sourceImage = loadImage("input_2.jpg");
}

function setup() {
	let main_canvas = createCanvas(1080, 1920);
	main_canvas.parent('canvasContainer');

	pixelDensity(1);
	imageMode(CENTER);
	background(255);
	sourceImage.loadPixels();
	noStroke();

	print("calculating map");
	let t = millis();
	calculateDeltaMap();
	print("100%!");
	let t2 = millis()-t;
	print("map calculated in "+t2/1000 + " seconds.");
	for (let i = 0; i < X_REGIONS; i++) {
		for (let j = 0; j < Y_REGIONS; j++) {
			fill(deltaMap[i][j]*255);
			rect(i*REGION_SIZE, j*REGION_SIZE, REGION_SIZE, REGION_SIZE);
		}
	}
}

function calculateDeltaMap() {
	let minDelta = 255*255*255;
	let maxDelta = 0;
	for (let i = 0; i < X_REGIONS; i++) {
		print(""+floor(i/X_REGIONS*100)+"%");
		let col = [];
		for (let j = 0; j < Y_REGIONS; j++) {
			//print("y: "+j);
			//getting the value range in a region
			let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
			for (let x = 0; x < REGION_SIZE; x++) {
				for (let y = 0; y < REGION_SIZE; y++) {
					let xPixel = i*REGION_SIZE*4+x*4;
					let yPixel = j*REGION_SIZE*4320+y*4320;
					let r = sourceImage.pixels[xPixel + yPixel];
					let g = sourceImage.pixels[xPixel + yPixel + 1];
					let b = sourceImage.pixels[xPixel + yPixel + 2];
					minR = r < minR ? r : minR;
					minB = b < minB ? b : minB;
					minG = g < minG ? g : minG;

					maxR = r > maxR ? r : maxR;
					maxB = b > maxB ? b : maxB;
					maxG = g > maxG ? g : maxG;
				}
			}
			let delta = (maxR - minR) * RED_MULT + (maxG - minG) * GREEN_MULT + (maxB - minB) * BLUE_MULT;
			minDelta = delta < minDelta ? delta : minDelta;
			maxDelta = delta > maxDelta ? delta : maxDelta;
			col.push(delta);
		}
		deltaMap.push(col);
	}

	//change the data range to be 0.0 ~ 1.0
	for (let i = 0; i < X_REGIONS; i++) {
		for (let j = 0; j < Y_REGIONS; j++) {
			deltaMap[i][j] = (deltaMap[i][j] - minDelta) / (maxDelta-minDelta);
		}
	}


	//apply 'blurring' to reduce noise
	for (let i = 0; i < BLUR_ITERATIONS; i++) {
		deltaMap = blurMap(deltaMap);
	}
}

function blurMap(inputMap) {
	let averagedDMap = [];
	for (let i = 0; i < X_REGIONS; i++) {
		let col = [];
		for (let j = 0; j < Y_REGIONS; j++) {
			let averagedValue = 0;
			let c = 0;
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					if (i+x < 0 || i+x >= X_REGIONS || j+y < 0 || j+y >= Y_REGIONS) {
						continue;
					}
					c++;
					averagedValue += inputMap[i+x][j+y];
				}
			}
			averagedValue /= c;
			averagedValue = averagedValue*0.5 + inputMap[i][j]*0.5;
			if (averagedValue < DELTA_THRESHOLD) {
				averagedValue *= FLOOR_MULT;
			} else {
				averagedValue *= CEIL_MULT;
				averagedValue = averagedValue > 1.0 ? 1.0 : averagedValue;
			}
			col.push(averagedValue);
		}
		averagedDMap.push(col);
	}
	return averagedDMap;
}

function keyTyped() {
	if (key === '!') {
		saveBlocksImages();
	}
	if (key === 'P') {
		noLoop();
	}
	if (key === 'S') {
		loop();
	}
}
