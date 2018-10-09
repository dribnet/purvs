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

	p5.background (255);
//	p5.noStroke ();
	
	let grid = 100;
//	p5.stroke (0, 100);
	p5.strokeWeight (grid/3);
	
	let snap = point => p5.int (point/grid);
	
	let xStart = snap (x1)-2,
			xEnd = snap (x2)+2,
			yStart = snap (y1)-2,
			yEnd = snap (y2)+2;
	p5.print (xStart, xEnd, yStart, yEnd);

	for (let y = yStart; y <= yEnd; y++) {
		p5.stroke (p5.noise (0, y, z)*255, 100, 150, 100);
		p5.line (x1, y*grid, x2, y*grid);
	}
		
	for (let x = xStart; x <= xEnd; x++) {
		p5.stroke (p5.noise (x, 0, z)*255, 100, 150, 100);
		p5.line (x*grid, y1, x*grid, y2);
	}
	
	p5.pop ();
	// debug - show border
//	p5.noFill();
//	p5.stroke(255, 0, 0);
//	p5.rect(0, 0, 255, 255);
}

/*function snap (point, grid, offset) {
	
	if (typeof offset == 'undefined')
		return snap (point, grid, 0);
	
	return (Math.floor (point/grid) + offset) * grid;
}*/