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
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

function drawGrid (p5, x1, x2, y1, y2, z, zoom) {

	p5.push ();
	p5.scale (Math.pow (2, zoom));
	p5.translate (-x1, -y1);

	// blue ellipse
	p5.noStroke ();
	p5.fill (0, 0, 255);
	p5.ellipse (200, 200, 50);

	// green ellipse
	p5.fill (0, 255, 0);
	p5.ellipse (100, 100, 50);


	p5.strokeWeight (100);

	// purple line
	p5.stroke (220, 0, 220, 128);
	p5.line (300, 0, 300, 500);

	// yellow line
	p5.stroke (220, 220, 0, 128);
	p5.line (200, 400, 600, 400);

	p5.pop ();

	// debug - show border
	// p5.noFill();
	// p5.stroke(255, 0, 0);
	// p5.rect(0, 0, 255, 255);
}

