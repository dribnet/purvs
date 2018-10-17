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
let ballr = 100

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
  let cx=0, cy=0, cx2=0, cy2=0;

  p5.background(0);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  cx = p5.map(512-960/2, x1, x2, 0, 256);
  cy = p5.map(512-720/2, y1, y2, 0, 256);
  cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  let local_ballx = p5.map(ballx, x1, x2, 0, 256);
  let local_bally = p5.map(bally, y1, y2, 0, 256);
  let local_ballx_edge = p5.map((ballx + ballr), x1, x2, 0, 256); // Work out where edge is by adding radius and center together
  let local_ball_r = local_ballx_edge - local_ballx;
  
  for(i = 0; i < 10; i++){
    let shade = 128 + 128 / (i+1);
    let current_r = p5.map(i, 0, 9, local_ball_r, 0);
    p5.fill(0, 0, shade);
    p5.ellipse(local_ballx, local_bally, current_r);
  }

  // Two ellipses with a radius of 50 units are then added.
  cx = p5.map(512, x1, x2, 0, 256);
  cy = p5.map(512, y1, y2, 0, 256);
  cx2 = p5.map(512+100, x1, x2, 0, 256);
  cy2 = p5.map(512+50, y1, y2, 0, 256);
  p5.fill(255);
  p5.ellipse(cx, cy, (cx2-cx));

  //debug - show border
  /*p5.noFill();
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);*/
}
