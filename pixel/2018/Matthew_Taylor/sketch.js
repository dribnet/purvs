let sourceImage = null;
let deltaMap = [];
let placedTendrils = [];

const RED_MULT = 1;
const GREEN_MULT = 1;
const BLUE_MULT = 1;

const DELTA_THRESHOLD = 0.9; //was 0.2 for the test images.
const FLOOR_MULT = 0.9; //was 0.95 for test images.
const CEIL_MULT = 1.15;
const BLUR_ITERATIONS = 10;

const REGION_SIZE = 15; //24 may be solid but figure it out per images, 30 is also good
const X_REGIONS = 1080 / REGION_SIZE;
const Y_REGIONS = 1920 / REGION_SIZE;

const TENDRIL_GENERATIONS = 500;
const TENDRIL_INITIAL_THICKNESS = 50;
const STARTING_TENDRIL_HEADS = 6;

const DELTAMAP_MODIFIER = 0.75;

const DEBUG_VISUALISE_DELTAMAP = false;
const DEBUG_VISUALISE_DELTAMAP_ALPHA = 255;

function preload() {
	sourceImage = loadImage("input_3.jpg");
}

function setup() {
	let main_canvas = createCanvas(1080, 1920);
	main_canvas.parent('canvasContainer');

	pixelDensity(1);
	imageMode(CENTER);
	sourceImage.loadPixels();
	noStroke();

	print("calculating map");
	let t = millis();
	calculateDeltaMap();
	let t2 = millis() - t;
	print("map calculated in " + t2 / 1000 + " seconds!");
	print("calculating tendril positions");
	placedTendrils = calculateTendrils(placedTendrils);
	let t3 = millis() - t2;
	print("tendrils placed in " + t3 / 1000 + " seconds!");
	print("drawing tendrils...");

	background(0x33);

    for (let i = 0; i < X_REGIONS; i++) {
        for (let j = 0; j < Y_REGIONS; j++) {
            let c = getImageColour((i+1)*REGION_SIZE,j*REGION_SIZE);
            stroke(c);
            strokeWeight(1-deltaMap[i][j]);
            line(i*REGION_SIZE+2, j*REGION_SIZE+2, (i+1)*REGION_SIZE-2, (j+1)*REGION_SIZE-2);
            line((i+1)*REGION_SIZE-2, j*REGION_SIZE+2, i*REGION_SIZE+2, (j+1)*REGION_SIZE-2);
        }
    }

	//sort the limbs by their size
	placedTendrils.sort(function(a, b){ return a.size < b.size ? a : b});

	for (let i = 0, l = placedTendrils.length; i < l; i++) {
		placedTendrils[i].drawOutline();
	}
	for (let i = 0, l = placedTendrils.length; i < l; i++) {
		placedTendrils[i].drawBottom();
	}
	for (let i = 0, l = placedTendrils.length; i < l; i++) {
		placedTendrils[i].drawTop();
	}

	let t4 = millis() - t3;
	print("drawing complete in " + t4 / 1000 + " seconds!");

	//draws the deltamap for debug purposes
	if (DEBUG_VISUALISE_DELTAMAP) {
		noStroke();
		for (let i = 0; i < X_REGIONS; i++) {
			for (let j = 0; j < Y_REGIONS; j++) {
				fill(deltaMap[i][j] * 255, DEBUG_VISUALISE_DELTAMAP_ALPHA);
				rect(i * REGION_SIZE, j * REGION_SIZE, REGION_SIZE, REGION_SIZE);
			}
		}
	}
}

function calculateTendrils(tendrilList) {
	let inert = tendrilList;
	let active = [];

	let heading = -PI/2;
	for (let i = 0; i < STARTING_TENDRIL_HEADS; i++) {
		let x = width/2;
		let y = height/2;
		active.push(new Tendril(x, y, heading, getImageColour(x,y), TENDRIL_INITIAL_THICKNESS, 100));
		heading += TAU/STARTING_TENDRIL_HEADS;
	}
    active.push(new Tendril(0, 0, PI/4, getImageColour(0,0), TENDRIL_INITIAL_THICKNESS, 100));
    active.push(new Tendril(width, 0, PI/4*3, getImageColour(width,0), TENDRIL_INITIAL_THICKNESS, 100));
    active.push(new Tendril(width, height, -PI/4*3, getImageColour(width, height), TENDRIL_INITIAL_THICKNESS, 100));
    active.push(new Tendril(0, height, -PI/4, getImageColour(0, height), TENDRIL_INITIAL_THICKNESS, 100));


	for (let gen = 0; gen < TENDRIL_GENERATIONS; gen++) {
		let children = [];
		for (let i = 0, l = active.length; i < l; i++) {
			let t = active[i];
            //if (t.loc.x > width || t.loc.x < 0 || t.loc.y > height || t.loc.y < 0) { continue; } //was getting too many out of bounds
			let tEnd = t.loc.copy().add(t.vel);
			let regionX = floor(tEnd.x / REGION_SIZE);
			let regionY = floor(tEnd.y / REGION_SIZE);
			let branchChance = deltaMap[(regionX+X_REGIONS*100)%X_REGIONS][(regionY+Y_REGIONS)%Y_REGIONS] * DELTAMAP_MODIFIER;

			if (random(1) < (branchChance - t.splitInertia/100)) {
				//split into two!
				let rotation = -PI/4+random(PI/16, -PI/16);
				children.push(
					new Tendril(tEnd.x, tEnd.y, t.heading + rotation,
						lerpColor(t.colour, getImageColour(tEnd.x, tEnd.y), 0.01), max(t.size*0.95, 4), 100));
				rotation = PI/4+random(PI/16, -PI/16);
				children.push(
					new Tendril(tEnd.x, tEnd.y, t.heading + rotation,
						lerpColor(t.colour, getImageColour(tEnd.x, tEnd.y), 0.01), max(t.size*0.95, 4), 100));
			} else {
				//continue with some turning behaviour
				children.push(
					new Tendril(tEnd.x, tEnd.y, t.heading + random(PI/128, -PI/128),
						lerpColor(t.colour, getImageColour(tEnd.x, tEnd.y), 0.01),
						max(t.size - 0.095, 4), t.splitInertia-1));
			}
			inert.push(t);
		}
		active = children;
	}

	//final tidy-up
	for (let i = 0, l = active.length; i < l; i++) {
		inert.push(active[i]);
	}

	return inert;
}

class Tendril {
	constructor(x, y, heading, colour, size, splitInertia) {
		this.loc = createVector(x, y);
		this.heading = heading;
		this.vel = createVector(size*0.05, 0).rotate(heading);
		this.vel.y *= 1.1;
		this.colour = colour;
		this.size = size;
		this.splitInertia = splitInertia;
	}


	drawOutline() {
		strokeWeight(this.size+6);
		stroke(red(this.colour)*0.1, green(this.colour)*0.15, blue(this.colour)*0.2);
		line(this.loc.x, this.loc.y, this.loc.x+this.vel.x, this.loc.y+this.vel.y);
	}
	drawBottom() {
		strokeWeight(this.size);
		stroke(red(this.colour)*0.75, green(this.colour)*0.775, blue(this.colour)*0.8);
		line(this.loc.x, this.loc.y, this.loc.x+this.vel.x, this.loc.y+this.vel.y);
	}
	drawTop() {
		strokeWeight(max(this.size-2,0));
		stroke(this.colour);
		line(this.loc.x, this.loc.y - 1, this.loc.x+this.vel.x, this.loc.y+this.vel.y - 1);
	}
}

function getImageColour(x, y) {

	let xPixel = floor(x) * 4;
	let yPixel = floor(y) * 4320;
	let r = sourceImage.pixels[xPixel + yPixel];
	let g = sourceImage.pixels[xPixel + yPixel + 1];
	let b = sourceImage.pixels[xPixel + yPixel + 2];
	return color(r,g,b);
}

function calculateDeltaMap() {
	let minDelta = 255 * 255 * 255;
	let maxDelta = 0;
	for (let i = 0; i < X_REGIONS; i++) {
		let col = [];
		for (let j = 0; j < Y_REGIONS; j++) {
			//getting the value range in a region
			let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255,
				maxB = 0;
			for (let x = 0; x < REGION_SIZE; x++) {
				for (let y = 0; y < REGION_SIZE; y++) {
					let xPixel = i * REGION_SIZE * 4 + x * 4;
					let yPixel = j * REGION_SIZE * 4320 + y * 4320;
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
			deltaMap[i][j] = (deltaMap[i][j] - minDelta) / (maxDelta - minDelta);
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
					if (i + x < 0 || i + x >= X_REGIONS || j + y < 0 || j + y >= Y_REGIONS) {
						continue;
					}
					c++;
					averagedValue += inputMap[i + x][j + y];
				}
			}
			averagedValue /= c;
			averagedValue = averagedValue * 0.5 + inputMap[i][j] * 0.5;
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
