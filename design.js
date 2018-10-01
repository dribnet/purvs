/***************** CONSTANTS ************************************************/

/* Length in seconds of the animation loop */
const secs = 3;

/* animation jumps per second */
const aniRate = 2;

/* frames per second */
const frRate = 60;

/* line information */
const square = false, thickness = 0.8, protrude = 0;

/* grid width and height */
const h = 5, w = h*2;

const diff_i = 1

/***************** SKETCH VARIABLES *****************************************/

/* object storage */
let lines, canvases;

/* recording */
let recording = false, recorder;

/***************** P5 FUNCTIONS *********************************************/

function setup () {

	// graphics settings
	createCanvas (960, 480);
  pixelDensity (1);
	frameRate (frRate);

	// drawing canvases: one for each RGB colour dimension
	canvases = [
		createGraphics (width, height),
		createGraphics (width, height),
		createGraphics (width, height)
	];
	canvases.forEach ((canvas, i) => {
		canvas.stroke (i==diff_i ? 255 : 192);
		if (square) canvas.strokeCap (PROJECT);
		canvas.strokeWeight (thickness);
		canvas.scale (height / h);
		canvas.translate (0.5, 0.5);
	});
	
	// line objects
	lines = [];
	for (let i = 0; i < w; i++)
		lines.push (new Line (i, true));
	for (let i = 0; i < h; i++)
		lines.push (new Line (i, false));

	// gif saving
	let blendingFrames = 3,
			num = secs * frRate/blendingFrames,
			delay = 1000*blendingFrames/frRate;
	recorder = new p5recorder (num, "wallpaper.gif", delay, 0, blendingFrames);
}

function draw () {

	// initialise each canvas
	canvases.forEach ((canvas, i) => {
		canvas.background (i==diff_i ? 192 : 255);
	});
	
	// draw each line
	lines.forEach (line => {
		line.update ();
		line.show ();
	});
	
	// ready pixels
	loadPixels ();
	imgs = canvases.map (canvas => {
		canvas.loadPixels ();
		return canvas.pixels;
	});
	
	// output to the screen
	let d = pixelDensity (),
	    maxI = 4 * (width*d) * (height*d);
	for (let i = 0; i < maxI; i += 4) {
		
		// red comes from canvas 0, green from canvas 1 and blue from canvas 2. this is how I mix the colours without using opacity
		pixels [i+0] = imgs [0] [i];
		pixels [i+1] = imgs [1] [i];
		pixels [i+2] = imgs [2] [i];
		pixels [i+3] = 255;
	}
	updatePixels ();

	// save this frame
	if (recording)
		recorder.addBuffer ();
}

function mouseClicked () {
	recording = true;
}

/***************** TRANSFORMATION OBJECT ************************************/

/**
	the Transform contains information about where a particular Line will move.
	
	line -> a Line object
	newPos -> boolean: true for a new random state, otherwise use the state as given
	*/
function Transform (line, newPos) {

	this.line = line;

	if (newPos) {

		// choose a random new position.
		let span, staticPos, dynamicPos;
		if (this.line.orientation) {
			span = h;
			staticPos = 'x';
			dynamicPos = 'y';

		} else {
			span = w;
			staticPos = 'y';
			dynamicPos = 'x';
		}

		this.len = Transform.randomLength (this.line.len);
		this [dynamicPos] = randInt (0, span-this.len);
		this [staticPos] = this.line [staticPos];

	}	else {

		// use the state of the line as is
		this.len = this.line.len;
		this.x = this.line.x;
		this.y = this.line.y;
	}
}

/**
	apply this Transformation's state to the Line
	
	complete -> boolean: true to override the line's actual position as well
	*/
Transform.prototype.apply = function (complete) {
	this.line.scale (this.len, this.x, this.y, complete);
};

/**
	creates a random length for a Line's state
	
	different -> int: ensure that the new length is different to the value
	*/
Transform.randomLength = function (different) {
	if (different == undefined)
		return randInt (1, h, 5);

	let r = randInt (1, h-1, 5);
	if (r < different) 
		return r;
	else
		return r+1;
};

/***************** LINE OBJECT **********************************************/

/**
	the Line contains information about a single line on the screen.
	
	the animation is possible by having values for where to draw the line, and duplicates for where the line 'wants' to be: I change the target, and the actual will approach the new target over time
	
	x, y -> position of top (vertical) or left (horizontal)
	orientation -> boolean: true if vertical, false if horizontal
	canvas -> the destination for the line, and colour on the screen
	*/
function Line (pos, orientation) {

	// flag for when there is a transform object attached to this line
	// BETTER: store the transform directly here
	this.static = true;

	this.orientation = orientation;
	this.canvas = randElem (canvases);
	let span;
	if (this.orientation)
		this.x = pos;
	else
		this.y = pos;
	// cheat, since Transform knows how to set the values
	new Transform (this, true).apply (true);
}

/**
	the rate at which the actual value will approach the desired value, between 0 (infinitely slow) and 1 (infinitely fast)
	*/
Line.v = 0.2;

/*
	apply approach function to all dynamic attributes
	*/
Line.prototype.update = function () {
	this.approach ('x');
	this.approach ('y');
	this.approach ('len');
};

/**
	equation for animating an attribute towards the target
	*/
Line.prototype.approach = function (attr) {
	this.actual [attr] += (this [attr] - this.actual [attr]) * Line.v;
}

/**
	draw this line, with it's current actual state, to it's output canvas
	*/
Line.prototype.show = function () {
	this.canvas.push ();
	this.canvas.translate (this.actual.x, this.actual.y);
	this.canvas.rotate (this.orientation ? TAU/4 : 0);
	this.canvas.line (-protrude, 0, this.actual.len + protrude, 0);
	this.canvas.pop ();
};

/**
	used by the Transform to apply a new state to the line
	
	complete -> boolean: true to override actual state
	*/
Line.prototype.scale = function (newLen, newX, newY, complete) {
	this.len = newLen;
	this.x = newX;
	this.y = newY;

	if (complete) {
		this.actual = {
			len: this.len,
			x: this.x,
			y: this.y
		};
	}
};

/***************** HELPERS **************************************************/

/**
	get a random element from a given array
	*/
function randElem (arr) {
	return arr [randInt (arr.length)];
}

/**
	simplify the random integer process into one function
	*/
function randInt (min, max, focus) {
	return int (focusedRandom (min, max, focus));
}
