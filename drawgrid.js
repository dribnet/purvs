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

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	  let cx=0, cy=0, cx2=0, cy2=0;

  p5.background('#8B632A');
  p5.rectMode(p5.CORNERS);


 cx = p5.map(512-40/2, x1, x2, 0, 256);
  cy = p5.map(512-70/2, y1, y2, 0, 256);
  cx2 = p5.map(512+90/2, x1, x2, 0, 256);
  cy2 = p5.map(512+70/2, y1, y2, 0, 256);
  p5.fill(0, 0, 255);
  p5.rect(cx, cy, cx2, cy2,20,0,20,0);

  

	// translate(200,200);
	// fill('#041370'); // blue
	// rect(0, 0, 55, 55, 0, 20, 0, 20);
	// rotate(HALF_PI);
	
	// fill('#041370'); // blue
	// rect(0, 0, 55, 55, 0, 20, 0, 20);
	// rotate(HALF_PI);
	
	// fill('#041370'); // blue
	// rect(0, 0, 55, 55, 0, 20, 0, 20);
	// rotate(HALF_PI);
	
	// fill('#041370'); // blue
	// rect(0, 0, 55, 55, 0, 20, 0, 20);
	// rotate(HALF_PI);
	
  // // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
