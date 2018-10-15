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
const max_thickness = 256;
const grid_size = 200;
const para2_grid_size = 50;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 460, 500],
  [3, 450, 410],
  [5, 447, 426],
  [3, 450, 410],
  [3, 450, 620]
]

// function owl(p5, x, y, x1, x2, y1, y2) {
//   p5.stroke(0);

//   // first draw the body
//   let line_x0 = p5.map(x + 0, x1, x2, 0, 256);
//   let line_x_offset = p5.map(x + 70, x1, x2, 0, 256);
//   let x_strokewidth = line_x_offset - line_x0;
//   let line_y1 = p5.map(y + -35, y1, y2, 0, 256);
//   let line_y2 = p5.map(y + -65, y1, y2, 0, 256);

//   p5.strokeWeight(x_strokewidth);
//   p5.line(line_x0, line_y1, line_x0, line_y2);
//   p5.noStroke();

//   // then draw the eyes
//   let eye_pos1_x = p5.map(x + -17.5, x1, x2, 0, 256);
//   let eye_pos2_x = p5.map(x + 17.5, x1, x2, 0, 256);
//   let eye_pos1_y = p5.map(y + -65, y1, y2, 0, 256);

//   let eye_pos1_origin_x = p5.map(0, x1, x2, 0, 256);
//   let eye_pos1_offset1 = p5.map(35, x1, x2, 0, 256);
//   let eye_pos_radius1 = eye_pos1_offset1 - eye_pos1_origin_x;

//   p5.fill(255);
//   p5.ellipse(eye_pos1_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome
//   p5.ellipse(eye_pos2_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome

//   // then the chin
//   let arc_x = p5.map(x + 0, x1, x2, 0, 256);
//   let arc_y = p5.map(y + -65, y1, y2, 0, 256);
//   let arc_w_offset = p5.map(x+70, x1, x2, 0, 256);
//   let arc_w = arc_w_offset - arc_x;
//   p5.arc(arc_x, arc_y, arc_w, arc_w, 0, p5.PI);  // Chin

//   // the eyeballs
//   let eyeball_x1 = p5.map(x + -14, x1, x2, 0, 256);
//   let eyeball_x2 = p5.map(x + 14,  x1, x2, 0, 256);
//   let eyeball_r = eye_pos_radius1 / 3;
//   p5.fill(0);
//   p5.ellipse(eyeball_x1, eye_pos1_y, eyeball_r, eyeball_r); // Left eye
//   p5.ellipse(eyeball_x2, eye_pos1_y, eyeball_r, eyeball_r);  // Right eye

//   // the beak
//   let quad_x1 = p5.map(x + 0, x1, x2, 0, 256);
//   let quad_y1 = p5.map(y + -65, y1, y2, 0, 256);
//   let quad_x2 = p5.map(x + 4, x1, x2, 0, 256);
//   let quad_y2 = p5.map(y + -51, y1, y2, 0, 256);
//   let quad_x3 = p5.map(x + 0, x1, x2, 0, 256);
//   let quad_y3 = p5.map(y + -44, y1, y2, 0, 256);
//   let quad_x4 = p5.map(x + -4, x1, x2, 0, 256);
//   let quad_y4 = p5.map(y + -51, y1, y2, 0, 256);
//   p5.quad(quad_x1, quad_y1, quad_x2, quad_y2, quad_x3, quad_y3, quad_x4, quad_y4);
// }
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


function cube(p5, x, y, x1, x2, y1, y2) {

	let quad_x1 = p5.map(x-75, x1, x2, 0, 256);
	let quad_y1 = p5.map(y+0, y1, y2, 0, 256);
	let quad_x2 = p5.map(x+0, x1, x2, 0, 256);
	let quad_y2 = p5.map(y-60, y1, y2, 0, 256);
	let quad_x3 = p5.map(x+75, x1, x2, 0, 256);
	let quad_y3 = p5.map(y+0, y1, y2, 0, 256);
	let quad_x4 = p5.map(x+0, x1, x2, 0, 256);
	let quad_y4 = p5.map(y+60, y1, y2, 0, 256);

	p5.fill('pink');
	p5.quad(quad_x1, quad_y1, quad_x2, quad_y2, quad_x3, quad_y3, quad_x4, quad_y4);
}

function leftSide(p5, x, y, x1, x2, y1, y2) {

	let left_x1 = p5.map(x-75, x1, x2, 0, 256);
	let left_y1 = p5.map(y+0, y1, y2, 0, 256);
	let left_x2 = p5.map(x+0, x1, x2, 0, 256);
	let left_y2 = p5.map(y+60, y1, y2, 0, 256);
	let left_x3 = p5.map(x+0, x1, x2, 0, 256);
	let left_y3 = p5.map(y+100, y1, y2, 0, 256);
	let left_x4 = p5.map(x-75, x1, x2, 0, 256);
	let left_y4 = p5.map(y+40, y1, y2, 0, 256);

	p5.fill('green');
	p5.quad(left_x1, left_y1, left_x2, left_y2, left_x3, left_y3, left_x4, left_y4);

}

function rightSide(p5, x, y, x1, x2, y1, y2) {

	let right_x1 = p5.map(x+75, x1, x2, 0, 256);
	let right_y1 = p5.map(y+0, y1, y2, 0, 256);
	let right_x2 = p5.map(x+0, x1, x2, 0, 256);
	let right_y2 = p5.map(y+60, y1, y2, 0, 256);
	let right_x3 = p5.map(x+0, x1, x2, 0, 256);
	let right_y3 = p5.map(y+100, y1, y2, 0, 256);
	let right_x4 = p5.map(x+75, x1, x2, 0, 256);
	let right_y4 = p5.map(y+40, y1, y2, 0, 256);

	p5.fill('yellow');
	p5.quad(right_x1, right_y1, right_x2, right_y2, right_x3, right_y3, right_x4, right_y4);

}

function leftTop(p5, x, y, x1, x2, y1, y2) {

	let left_tri_x1 = p5.map(x+0, x1, x2, 0, 256);
	let left_tri_y1 = p5.map(y-30, y1, y2, 0, 256);
	let left_tri_x2 = p5.map(x+38, x1, x2, 0, 256);
	let left_tri_y2 = p5.map(y+0, y1, y2, 0, 256);
	let left_tri_x3 = p5.map(x+0, x1, x2, 0, 256);
	let left_tri_y3 = p5.map(y+30, y1, y2, 0, 256);


	p5.fill('green');
	p5.triangle(left_tri_x1, left_tri_y1, left_tri_x2, left_tri_y2, left_tri_x3, left_tri_y3);

}

function rightTop(p5, x, y, x1, x2, y1, y2) {

	let right_tri_x1 = p5.map(x+0, x1, x2, 0, 256);
	let right_tri_y1 = p5.map(y-30, y1, y2, 0, 256);
	let right_tri_x2 = p5.map(x-38, x1, x2, 0, 256);
	let right_tri_y2 = p5.map(y+0, y1, y2, 0, 256);
	let right_tri_x3 = p5.map(x+0, x1, x2, 0, 256);
	let right_tri_y3 = p5.map(y+30, y1, y2, 0, 256);


	p5.fill('yellow');
	p5.triangle(right_tri_x1, right_tri_y1, right_tri_x2, right_tri_y2, right_tri_x3, right_tri_y3);

}







// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(255);

   let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {

	// cube(p5, x, y, x1, x2, y1, y2 );
	// leftSide(p5, x, y, x1, x2, y1, y2 );
	// rightSide(p5, x, y, x1, x2, y1, y2 );
	// leftTop(p5, x, y, x1, x2, y1, y2 );
	// rightTop(p5, x, y, x1, x2, y1, y2 );

	if (zoom >= 2){
		cube(p5, x, y, x1, x2, y1, y2 );
	leftSide(p5, x, y, x1, x2, y1, y2 );
	rightSide(p5, x, y, x1, x2, y1, y2 );
	leftTop(p5, x, y, x1, x2, y1, y2 );
	rightTop(p5, x, y, x1, x2, y1, y2 );
     }

    if (zoom < 2){
cube(p5, x, y, x1, x2, y1, y2 );

	}
}

  }










  // owl(p5, 412, 512, x1, x2, y1, y2);
  // owl(p5, 612, 512, x1, x2, y1, y2);

  // debug - show border
 // p5.noFill();
 //  p5.stroke(0, 200, 200)
 //  p5.rect(0, 0, 255, 255);
}

