/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


// the random number seed for the tour
var tourSeed = 301;

// triplets of locations: zoom, x, y
var tourPath = [];

// drawing destinations pre-screen, and the final colour channels rgb
const out = {};

// the extremes of possible colour
const colours = { min: 127, max: 255 };

// the size of the grid in absolute scale
const absGrid = 80;

// probability of a grid space actually drawing a line. 1 => always, 0 => never
const lineProb = 1;

// true if the sketch is set up for the first time. hacked version of a global setup function
let initialised = false;

// entry function for drawing the grid 
function drawGrid (p5, x1, x2, y1, y2, z, zoom) {
	
	// initialise offscreen drawing canvases once EVER
	init (p5);
	
	// initialise once per draw
	out.canvases.forEach (canvas => {

		canvas.push ();
		canvas.background (255);
		canvas.scale (Math.pow (2, zoom));
		canvas.translate (-x1, -y1);
	});

	// draw to the output object
	out.show (p5, x1, y1, z, x2-x1, y2-y1, absGrid);
	
	// ready pixels
	p5.loadPixels ();
	out.canvases.forEach (canvas => {
		canvas.loadPixels ();
	});
	
	// output to the screen
	let d = p5.pixelDensity (),
			maxI = 4 * (p5.width*d) * (p5.height*d);
	for (let i = 0; i < maxI; i += 4) {
		for (let j = 0; j < 3; j++)
			p5.pixels [i+j] = out.canvases [j].pixels [i];
		p5.pixels [i+3] = 255;
	}
	p5.updatePixels ();
	
	// ready for next draw
	out.canvases.forEach (canvas => {

		canvas.pop ();
	});
}
