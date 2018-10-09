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

function drawGrid (p5, x1, x2, y1, y2, z, zoom) {

	let sc = Math.pow (2, zoom);
	p5.push ();
	p5.scale (sc);
	p5.translate (-x1, -y1);
	
//	x1 -= 10;
//	y1 -= 10;
//	x2 += 10;
//	y2 += 10;

	p5.background (255);
	p5.noStroke ();
	
	let grid = 100;
	p5.rectMode (p5.CORNERS);
	p5.fill (0, 100);
	
	for (let y = snap (y1, grid, -2); 
			 y <= snap (y2, grid, +2);
			 y += grid)
		for (let x = snap (x1, grid, -2);
				 x <= snap (x2, grid, +2);
				 x += grid) {
			/* cyan, top left */
			p5.fill (55, 200, 200);
			p5.arc (x, y, grid, grid, 0, p5.TAU/4);

			/* magenta, bottom left */
			p5.fill (200, 55, 200);
			p5.arc (x, y, grid, grid, p5.TAU * 3/4, 0);

			/* green, top right */
			p5.fill (55, 200, 55);
			p5.arc (x, y, grid, grid, p5.TAU/4, p5.TAU/2);

			/* red, bottom right */
			p5.fill (200, 55, 55);
			p5.arc (x, y, grid, grid, p5.TAU/2, p5.TAU * 3/4);
		}
//		p5.rect (x1, y, x2, y+grid/2);
	
	p5.pop ();
	// debug - show border
//	p5.noFill();
//	p5.stroke(255, 0, 0);
//	p5.rect(0, 0, 255, 255);
}

function snap (point, grid, offset) {
	
	if (typeof offset == 'undefined')
		return snap (point, grid, 0);
	
	return (Math.floor (point/grid) + offset) * grid;
}