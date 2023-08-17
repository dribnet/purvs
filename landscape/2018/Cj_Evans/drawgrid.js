
/************* boring stuff ************************************************************/

// the random number seed for the tour
var tourSeed = 301;

// triplets of locations: zoom, x, y
var tourPath = [
	[12, 41.508260093629, 44.530761718750],
	[10, 41.552571624517, 44.302408874035],
	[8, 41.889973998070, 43.502604246140],
	[6, 43.710937500000, 39.140625000000],
	[4, 48.177083969116, 22.062500000000],
	[2, 72.041671752930, -23.083343505859],
	[0, 182.166687011719, -265.333374023438]
];

/************* sketch settings *********************************************************/

// the extremes of possible colour
const minColour = 127, maxColour = 255;

// the size of the grid in absolute scale
const absGrid = 80;

// the thickness of a line in the grid: 1 for no gap between lines
const thickness = 0.4;

// probability of a grid space actually drawing a line. 1 => always, 0 => never
const lineProb = 1;

/************* entry and helpers *******************************************************/

// entry function for drawing the grid 
function drawGrid (p5, x1, x2, y1, y2, z, zoom) {
	
	let sc = Math.pow (2, zoom);
	
	// initialise offscreen drawing canvases once EVER
	init (p5);
	
	// initialise once per draw
	canvases.forEach (canvas => {
		canvas.push ();
		canvas.background (255);
		canvas.scale (sc);
		canvas.translate (-x1, -y1);
	});

	// draw to the output object
	show (p5, z, sc, SquareVector.fromCorners (x1, y1, x2, y2));
	
	// output to the screen
	p5.loadPixels ();
	canvases.forEach (canvas => {
		canvas.loadPixels ();
	});
	
	let d = p5.pixelDensity (),
			maxI = (p5.width*d) * (p5.height*d);
	for (let i = 0; i < maxI; i++) {
		for (let j = 0; j < 3; j++)
			p5.pixels [i*4+j] = canvases [j].pixels [i*4];
		p5.pixels [i*4+3] = 255;
	}
	p5.updatePixels ();
	
	// replace lines 63-75 with the following line to see what a single canvas sees
//	p5.image (canvases [0], 0, 0);
	
	// ready for next draw
	canvases.forEach (canvas => {
		canvas.pop ();
	});
	
	// debug - show border
//	p5.noFill ();
//	p5.stroke (0);
//	p5.rect (0, 0, 255, 255);
//
//	p5.fill (0);
//	p5.noStroke ();
//	p5.text ("corner: (" + x1 + "," + y1 + ")", 10, 20);
//	let sizex = x2 - x1;
//	p5.text ("width: " + sizex, 10, 40);
}

// convert a floating point to an integer co-ordinate in grid space
function snap (point, grid) {
	return Math.floor (point/grid);
}

const max = (a, b) => a > b ? a : b,
			min = (a, b) => a < b ? a : b;

/************* output functions ***********************************************************/

let initialised = false;

// the final drawing destinations for each colour channel
const canvases = [];

// do the setup requiring the p5 context
function init (p5) {
	if (initialised) return;

	// create three offscreen graphics objects
	for (let i = 0; i < 3; i++) {
		let canvas = p5.createGraphics (256, 256);
		canvas.fill (128);
		canvas.noStroke ();
		canvases [i] = canvas;
	}
	initialised = true;
}

/*
	recursive function for drawing the design. each grid intersection contains a smaller design if we are zoomed in enough
	
	p5: the p5 context
	z: z noise co-ordinate
	sc: global drawing scale
	canvas: square vector representing the bounds of the drawing canvas
	box: square vector representing the current active drawing area. defaults to the canvas area
	grid: the size of the grid in this iteration. defaults to the globally defined grid
	colours: array of booleans. each colour channel is one of two extremes, represented by a boolean. defaults to subtracting from all channels
	*/
function show (p5, z, sc, canvas, box, grid, colours) {

	// default values
	if (typeof box == "undefined") box = canvas;
	if (typeof grid == "undefined") grid = absGrid;
	if (typeof colours == "undefined") colours = [true, true, true];

	// check if we will see anything on the screen
	if (!SquareVector.containsSome (canvas, box))
		return;
	
	// draw grid
	for (let row = snap (box.y, grid)-1; row <= snap (box.y+box.h, grid); row++) {
		for (let col = snap (box.x, grid)-1; col <= snap (box.x+box.w, grid); col++) {

			let rowColours = Array.from (colours),
					colColours = Array.from (colours),
					bothColours = Array.from (colours),
					rowShape, colShape;

			// draw row
			let rowFill = choose (p5.noise (0, row+0.1, z));
			if (rowFill >= 0) {
				
				rowColours [rowFill] = !colours [rowFill];
				bothColours [rowFill] = !colours [rowFill];

				// make the stripe shape
				rowShape = SquareVector.and (
					new SquareVector (
						col + 0.5+thickness/2,
						row + 0.5-thickness/2,
						1,
						thickness).mult (grid),
					box);

				// draw the stripe if there's anything on the screen
				if (typeof rowShape != "undefined") {
					fill (colours);
					rowShape.show (canvases [rowFill]);
				}
			}

			// draw column
			let colFill = choose (p5.noise (col+0.1, 0, z));
			if (colFill >= 0) {
				
				colColours [colFill] = !colours [colFill];
				bothColours [colFill] = !colours [colFill];

				// make the stripe shape
				colShape = SquareVector.and (
					new SquareVector (
						col+0.5-thickness/2,
						row+0.5+thickness/2,
						thickness,
						1).mult (grid),
					box);

				// draw the stripe if there's anything on the screen
				if (typeof colShape != "undefined") {
					fill (colours);
					colShape.show (canvases [colFill]);
				}
			}

			// recursion check
			let newGrid = grid/80;
			if (newGrid * sc > 1) {
				let newBox;
				
				// grid intersection
				newBox = new SquareVector (
					col + 0.5-thickness/2,
					row + 0.5-thickness/2,
					thickness).mult (grid);
				if (typeof newBox != "undefined") 
					show (p5, z, sc, canvas, newBox, newGrid, bothColours);
				
				
				// grid negative space below right
				newBox = new SquareVector (
					col+0.5+thickness/2,
					row+0.5+thickness/2,
					1-thickness).mult (grid);
				if (typeof newBox != "undefined")
					show (p5, z, sc, canvas, newBox, newGrid, colours);
				
				// stripe right
				newBox = new SquareVector (
					col + 0.5+thickness/2,
					row + 0.5-thickness/2,
					1-thickness,
					thickness
				).mult (grid);
				
//				canvases [0].fill (200, 100, 100, 100);
//				newBox.show (canvases [0]);
				
				if (typeof newBox != "undefined")
					show (p5, z, sc, canvas, newBox, newGrid, rowColours);
				
				// stripe below
				newBox = new SquareVector (
					col + 0.5-thickness/2,
					row + 0.5+thickness/2,
					thickness,
					1-thickness
				).mult (grid);
				if (typeof newBox != "undefined")
					show (p5, z, sc, canvas, newBox, newGrid, colColours);
			}
		}
	}
}

// set the fill according to the boolean array, colours, (and optional alpha)
function fill (colours, a) {
	for (let i = 0; i < 3; i++)
		canvases [i].fill (colours [i] ? minColour : maxColour, a);
}

// convert a noise value into an integer [0, 1, 2] for choosing a canvas
function choose (noise) {
	
	// a hack because the actual noise value doesn't go all the way to 0 or 1
	let val = (noise * 100) % 1;

	if (val > lineProb) return;
	else return Math.floor (val*3/lineProb);
};

/************* square vector object ****************************************************/

// an object containing the information to draw a rectangle in CORNER mode
function SquareVector (x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	
	if (typeof h == "undefined")
		this.h = w;
	else
		this.h = h;
}

/*
	draw this square vector to a given drawing target
	*/
SquareVector.prototype.show = function (target) {
	target.rect (this.x, this.y, this.w, this.h);
}

SquareVector.prototype.mult = function (scale) {
	return new SquareVector (this.x*scale, this.y*scale, this.w*scale, this.h*scale);
}

// CORNER mode rect from CORNERS information
SquareVector.fromCorners = function (x1, y1, x2, y2) {
	return new SquareVector (x1, y1, x2-x1, y2-y1);
}

/**
 *	returns true if one square entirely contains another:
 *		+-------+
 *		| +---+ |
 *		| |   | |
 *		| +---+ |
 *		+-------+,
 *	false otherwise
 */
SquareVector.containsEntirely = (a, b) => (
	(a.x < b.x && a.x+a.w > b.x+b.w) &&
	(a.y < b.y && a.y+a.h > b.y+b.h));

/**
 *	returns true if there is any overlap:
 *		+-----+
 *		| +---+-+
 *		| |xxx| |
 *		| |xxx| |
 *		+-+---+ |
 *		  +-----+
 */
SquareVector.containsSome = (a, b) => (
	(a.x < b.x+b.w && b.x < a.x+a.w) &&
	(a.y < b.y+b.h && b.y < a.y+a.h));

/**
 *	returns overlap as a square, or undefined if none
 */
SquareVector.and = (a, b) => {
	
	if (typeof a == "undefined" || typeof b == "undefined")
		return undefined;
	
	if (!SquareVector.containsSome (a, b))
		return undefined;
	
	let x = max (a.x, b.x),
			y = max (a.y, b.y);
	return new SquareVector (x, y,
		min (a.x+a.w, b.x+b.w) - x,
		min (a.y+a.h, b.y+b.h) - y);
}

SquareVector.prototype.toString = function () {
	return "(x: "+this.x+", y: "+this.y+", w: "+this.w+", h: "+this.h+")";
}