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
  // p5.noFill();
  // p5.stroke(255, 0, 0)
   //p5.rect(0, 0, 255, 255);
    


	let cx = p5.map(512, x1, x2, 0, 256);
	let cy = p5.map(512, y1, y2, 0, 256);
	let cx2 = p5.map(512+10, x1, x2, 0, 256);
	tree(p5,cx,cy);

	p5.strokeWeight(0);
	//p5.ellipse(cx, cy, (cx2-cx));

p5.rect(cx, cy, (cx2-cx),(cx2-cx)/4);
p5.rect(cx, cy, (cx2-cx)/1.6,(cx2-cx)/4);



}

function tree (p5,x,y){

	this.x=x;
    this.y=y;
	p5.strokeWeight(0);
	p5.fill(99, 60, 34);
    p5.rect(102.5, 100, 20, 10);


	p5.fill(34, 99, 36);
    p5.rect(90, 93, 45, 7);
    p5.fill(38, 109, 40);
    p5.rect(92.5, 86, 40, 7);
    p5.fill(49, 137, 52);
    p5.rect(95, 79, 35, 7);
    p5.fill(58, 153, 61);
    p5.rect(97.5, 72, 30, 7);
    p5.fill(63, 175, 66);
    p5.rect(100, 65, 25, 7);
    p5.fill(74, 196, 77);
    p5.rect(102.5, 58, 20, 7);

}
