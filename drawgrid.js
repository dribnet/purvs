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
  // debug - show border
   p5.noFill();
   p5.stroke(255, 0, 0)
   //p5.rect(0, 0, 255, 255);
p5.strokeWeight(0);
p5.fill(99, 60, 34);
    p5.rect(100, 100, 25, 10);


	p5.fill(34, 99, 36);
    p5.rect(90, 93, 45, 7);
    p5.rect(92.5, 86, 40, 7);
    p5.rect(95, 79, 35, 7);
    p5.rect(97.5, 72, 30, 7);
    p5.rect(100, 65, 25, 7);
    p5.rect(102.5, 58, 20, 7);




   //p5.text("hello", 10,20);


}
