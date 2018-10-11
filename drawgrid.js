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


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [];

let minNoise = 1, maxNoise = 0;

const canvases = {
	uninit: true,

	forEach: function () {},

	snapIndex: makeSnap (1/3),

	getProb: 0.8,

	get: function (noise) {

		let val = (noise * 100) % 1, i = null;
		// console.log (noise);

		if (val < 1/3 * this.getProb)
			i = 0;
		
		else if (val < 2/3 * this.getProb)
			i = 1;
		
		else if (val < 3/3 * this.getProb)
			i = 2;

		if (i == null) return null;
		else return this.cs [i];
	},

	init: function (p5) {

		if (this.uninit) {
			this.cs = [
				p5.createGraphics (256, 256),
				p5.createGraphics (256, 256),
				p5.createGraphics (256, 256)
			];
			this.cs.forEach (c => {
				c.stroke (55, 128);
				c.strokeWeight (grid/3);
				c.strokeCap (p5.SQUARE);
			});
			this.uninit = false;
		}
	}
}

const grid = 15;

function drawGrid (p5, x1, x2, y1, y2, z, zoom) {
	// p5.noiseSeed (z);
	
	// initialise offscreen drawing canvases once EVER
	canvases.init (p5);
	
	// initialise once per draw
	canvases.cs.forEach (canvas => {
			canvas.push ();
			canvas.background (255);
			canvas.scale (Math.pow (2, zoom));
			canvas.translate (-x1, -y1);
	});
	
	
	let snap = makeSnap (grid);
	let target;

	// horizontal lines
	for (let y = snap (y1)-1; y <= snap (y2)+1; y++) {
		target = canvases.get (p5.noise (0, y, z))
		if (target != null)
			target.line (x1-1, y*grid, x2+1, y*grid);
	}
		
	// vertical lines
	for (let x = snap (x1)-1; x <= snap (x2)+1; x++) {
		target = canvases.get (p5.noise (x, 0, z))
		if (target != null)
			target.line (x*grid, y1-1, x*grid, y2+1);
	}
	
	// ready pixels
	p5.loadPixels ();
	canvases.cs.forEach (c => c.loadPixels ());
	
	// output to the screen
	let d = p5.pixelDensity (),
			maxI = 4 * (p5.width*d) * (p5.height*d);
	for (let i = 0; i < maxI; i += 4) {
		for (let j = 0; j < 3; j++)
			p5.pixels [i+j] = canvases.cs [j].pixels [i];
		p5.pixels [i+3] = 255;
	}
	p5.updatePixels ();
	
	// ready for next draw
	canvases.cs.forEach (canvas => {
		canvas.pop ();
	});
	
	// debug - show border
	// p5.noFill();
	// p5.stroke(255, 0, 0);
	// p5.rect(0, 0, 255, 255);
}

function makeSnap (grid) {
	return point => Math.floor (point/grid); }
