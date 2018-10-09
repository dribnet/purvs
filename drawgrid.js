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
	// x1 /= sc;
	// y1 /= sc;
	// x2 /= sc;
	// y2 /= sc;



	p5.background (255);
	p5.noStroke ();

	p5.fill (55, 200, 200);
	p5.ellipse (0, 0, 80);

	p5.fill (200, 55, 200);
	p5.ellipse (0, 100, 80);

	p5.fill (55, 200, 55);
	p5.ellipse (100, 0, 80);

	p5.fill (200, 55, 55);
	p5.ellipse (100, 100, 80);

	// let grid = 100/sc,
	// 		minX = snap (x1 - grid*0.5, grid),
	// 		maxX = snap (x2 + grid*1.5, grid),
	// 		minY = snap (y1 - grid*0.5, grid),
	// 		maxY = snap (y2 + grid*1.5, grid);

	// for (let x = minX; x < maxX + 4*grid; x += grid)
	// 	for (let y = minY; y < maxY + 4*grid; y += grid) {
	// 		p5.ellipse (x, y, 0.5*grid);
	// 	}

	p5.pop ();

	// debug - show border
	p5.noFill();
	p5.stroke(255, 0, 0);
	p5.rect(0, 0, 255, 255);
}

function snap (point, grid) {

	return Math.floor (point/grid) * grid;
}