
function init (p5) {

	if (initialised) return;

	// initialise the helper object

	out.r = true;
	out.g = true;
	out.b = true;

	// create three offscreen graphics objects
	out.canvases = []
	for (let i = 0; i < 3; i++) {
		let canvas = p5.createGraphics (256, 256);
		canvas.fill (128);
		canvas.noStroke ();
		out.canvases.push (canvas);
	}

	out.show = function (p5, x, y, z, width, height, grid) {
		// p5.print (grid)

		let minX = snap (x,        grid)-1,
		    maxX = snap (x+height, grid),
		    minY = snap (y,        grid)-1,
		    maxY = snap (y+height, grid);
	
		// horizontal lines
		for (let ly = minY; ly <= maxY; ly++) {
			this.rect (p5, x, ly*grid, z, width, grid/2, true);
		}
			
		// vertical lines, intersections
		for (let lx = minX; lx <= maxX; lx++) {
			this.rect (p5, lx*grid, y, z, grid/2, height, false);
		}

		if (grid/10 > 5) {
			for (let ly = minY; ly <= maxY; ly++) for (let lx = minX; lx <= maxX; lx++) {

				// draw sub grid if it's big enough
				this.show (p5, lx*grid, ly*grid, z, grid/2, grid/2, grid/20, true);
			}
		}
	};

	out.rect = function (p5, x, y, z, w, h, horizontal) {

		let noise;
		if (horizontal) {
			noise = p5.noise (0, y*0.9, z);

		} else {
			noise = p5.noise (x*0.9, 0, z);
		}

		noise = (noise * 100) % 1;

		// no line
		if (noise > lineProb) return;

		let i = Math.floor (noise*3/lineProb);
		// p5.print (i);
		let target = this.canvases [i];
		target.rect (x, y, w, h);
	};

	initialised = true;
}

function snap (point, grid) {
	return Math.floor (point/grid)+0.25;
}