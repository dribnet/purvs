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

function circles(p5, x, y, x1, x2, y1, y2){
  let circleX = p5.map(512, x1, x2, 0, 256);
  let circleY = p5.map(512, y1, y2, 0, 256);
  let circleR = p5.map(512-10, x1, x2, 0, 256);

  p5.stroke(255);
  p5.fill(0, 200, 200);
  p5.ellipse(circleX, circleY, circleR);    
  
}
// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(255);

   circles(p5, 412, 512, x1, x2, y1, y2);
    circles(p5, 612, 512, x1, x2, y1, y2);
  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.ellipse(25, 25, 50, 50);
}


