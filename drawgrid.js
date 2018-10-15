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
    


	let rect1x = p5.map(512, x1, x2, 0, 256);
	let rect1y = p5.map(512, y1, y2, 0, 256);
	let radiusRect1 = p5.map(512+10, x1, x2, 0, 256);


	let rect2x = p5.map(512.8, x1, x2, 0, 256);
	let rect2y = p5.map(510, y1, y2, 0, 256);
	let radiusRect2 = p5.map(512.8+10, x1, x2, 0, 256);

	let rect3x = p5.map(513.4, x1, x2, 0, 256);
	let rect3y = p5.map(508, y1, y2, 0, 256);
	let radiusRect3 = p5.map(513.4+10, x1, x2, 0, 256);

	let rect4x = p5.map(514.1, x1, x2, 0, 256);
	let rect4y = p5.map(506, y1, y2, 0, 256);
	let radiusRect4 = p5.map(514.1+10, x1, x2, 0, 256);

	let rect5x = p5.map(514.9, x1, x2, 0, 256);
	let rect5y = p5.map(504, y1, y2, 0, 256);
	let radiusRect5 = p5.map(514.9+10, x1, x2, 0, 256);

	let basex = p5.map(514.9, x1, x2, 0, 256);
	let basey = p5.map(514, y1, y2, 0, 256);
	let radiusbase = p5.map(514.9+10, x1, x2, 0, 256);

	tree(p5,rect1x,rect1y);

	p5.strokeWeight(0);
	//p5.ellipse(rect1x, rect1y, (radiusRect1-rect1x));
p5.fill(34, 99, 36);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/5);
 p5.fill(38, 109, 40);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/5);
 p5.fill(58, 153, 61);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/5);
 p5.fill(49, 137, 52);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/5);
p5.fill(63, 175, 66);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/5);

p5.fill(99, 60, 34);
p5.rect(basex, basey, (radiusbase-basex)/2.6,(radiusbase-basex)/5);
//p5.rect(rect1x, rect1y, (radiusRect1-rect1x)/1.6,(radiusRect1-rect1x)/4);



}

function tree (p5,x,y){

	this.x=x;
    this.y=y;

}