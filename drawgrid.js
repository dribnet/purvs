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


// let arc_size = 150;


function drawBall(p5, x, y, x1, x2, y1, y2){
		p5.angleMode(p5.DEGREES);

		let px = p5.map(x+0, x1, x2, 0, 256);
		let py = p5.map(y+0, y1, y2, 0, 256);
		//bottom half ball
		let arc_origin = p5.map(0, x1, x2, 0, 256);
		let arc_offset = p5.map(150, x1, x2, 0, 256);
		p5.fill(200);
		let arc_size = arc_offset - arc_origin;
		p5.arc(px,py,arc_size,arc_size,0,180);
		//top half ball
		p5.fill(100);
		p5.arc(px,py,arc_size,arc_size,180,360);


		// let orgin_x = x-arc_size/2;
		// let end_x = x+arc_size/2
		let lx1 = p5.map(x+ -75, x1, x2, 0, 256);
		let lx2 = p5.map(x+ 75, x1, x2, 0, 256);
		let ly = p5.map(y+ 0, y1, y2, 0, 256);
		p5.push();
		p5.strokeWeight(5);
		p5.line(lx1,ly,lx2,ly);
		p5.pop();

		//middle buttons
		p5.fill(255);
		p5.ellipse(px,py,35);
		p5.ellipse(px,py,17);
}

function drawHalfBall(p5, x, y, x1, x2, y1, y2){
		p5.angleMode(p5.DEGREES);

		//ears
		let left_earX = p5.map(x + -27, x1, x2, 0,256);
		let left_earY = p5.map(y + -27, y1, y2, 0,256);
		p5.fill(50);
		let ear_origin = p5.map(0, x1, x2, 0, 256);
 		let ear_offset = p5.map(25, x1, x2, 0, 256);
 		let ear_size = ear_offset - ear_origin;

		p5.ellipse(left_earX,left_earY,ear_size);


		//head
		let head_x = p5.map(x + 0, x1, x2, 0, 256);
		let head_y = p5.map(y + 20, y1, y2, 0, 256);
		p5.fill(150);
		let head_origin = p5.map(0, x1, x2, 0, 256);
 		let head_offset = p5.map(100, x1, x2, 0, 256);
 		let head_size = head_offset - head_origin;
		p5.ellipse(head_x,head_y, head_size);


		//half ball
		let px = p5.map(x + 0, x1, x2, 0, 256);
		let py = p5.map(y + 0, y1, y2, 0, 256);
		p5.fill(200);
		let arc_size = p5.map(150, x1,x2,0,256);
		p5.arc(px,py,arc_size,arc_size,0,180);



		let lx1 = p5.map(x + -75, x1, x2, 0, 256);
		let lx2 = p5.map(x + 75, x1, x2, 0, 256);
		let ly = p5.map(y + 0, y1, y2, 0, 256);
		p5.push();
		p5.strokeWeight(5);
		p5.line(lx1,ly,lx2,ly);
		p5.pop();

		//middle button
		p5.fill(255);
		p5.ellipse(px,py,35);
		p5.ellipse(px,py,17);


}
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.background(255);
	p5.angleMode(p5.DEGREES);
	drawBall(p5, 512, 512, x1, x2, y1, y2);
	drawHalfBall(p5, 312, 312, x1, x2, y1, y2);
 	// p5.ellipse(128, 10, size1);  
 	// p5.ellipse(10, 128, size1);  
 	// p5.ellipse(246, 128, size1);  
 	// p5.ellipse(128, 246, size1);  

//debug - show border
  p5.noFill();
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  let sizex = x2 - x1;
  p5.text("width: " + sizex, 10, 40);
}
