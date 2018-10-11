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

let ballx = 400
let bally = 400
let ballr = 200

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(255);

  // Two ellipses with a radius of 50 units are then added.
  let local_ballx = p5.map(ballx, x1, x2, 0, 256);
  let local_bally = p5.map(bally, y1, y2, 0, 256);
  let local_ballx_edge = p5.map((ballx + ballr), x1, x2, 0, 256);
  let local_ball_r = local_ballx_edge - local_ballx;

  p5.stroke(100);
  for(let i=0; i<10; i++) {
  	let shade = 128 + 128 / (i+1);
  	let current_r = p5.map(i, 0, 9, local_ball_r, 0)
	p5.fill(0, 0, shade);
	p5.ellipse(local_ballx, local_bally, current_r);  	
  }

  // debug - show border
  p5.noFill();
  p5.stroke(0, 200, 200)
  p5.rect(0, 0, 255, 255);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  let sizex = x2 - x1;
  p5.text("width: " + sizex, 10, 40);
}
